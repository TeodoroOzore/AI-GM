import React from 'react';
import {
  PendingRoll,
  AbilityKey,
  CharacterSheet,
  SKILLS,
  rollD20,
  rollFormula,
  abilityMod,
  profBonus,
  fmtSigned
} from '../types';
import { DieType, ActiveRollAnimation } from './DiceAnimationOverlay';

type DiceTrayProps = {
  character: CharacterSheet;
  pendingRolls: PendingRoll[];
  onAddPendingRoll: (chip: PendingRoll) => void;
  onTriggerAnimation: (anim: ActiveRollAnimation) => void;
};

export const DiceTray: React.FC<DiceTrayProps> = ({
  character: c,
  pendingRolls,
  onAddPendingRoll,
  onTriggerAnimation
}) => {
  const doRawD20 = (mode?: 'adv' | 'dis') => {
    const opts = mode === 'adv' ? { advantage: true } : mode === 'dis' ? { disadvantage: true } : {};
    const { rolls, result } = rollD20(opts);
    const label = mode === 'adv' ? 'd20 con ventaja' : mode === 'dis' ? 'd20 con desventaja' : 'd20';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';

    onTriggerAnimation({
      dieType: 'd20',
      label: `Lanzando ${label}`,
      rolls,
      finalResult: result,
      crit,
      onComplete: () => {
        onAddPendingRoll({
          text: `🎲 ${label}: [${rolls.join(', ')}] → ${result}`,
          cls: crit
        });
      }
    });
  };

  const handleSkillRollPrompt = () => {
    const names = SKILLS.map(s => s.name).join(', ');
    const chosen = prompt('¿Qué habilidad? Opciones:\n' + names);
    if (!chosen) return;
    const s = SKILLS.find(x => x.name.toLowerCase() === chosen.trim().toLowerCase());
    if (!s) {
      alert('No reconozco esa habilidad.');
      return;
    }
    doSkillCheck(s.name, s.ab);
  };

  const doSkillCheck = (skillName: string, ability: AbilityKey) => {
    const proficient = c.proficientSkills.includes(skillName);
    const mod = abilityMod(c.abilities[ability]);
    const pb = proficient ? profBonus(c.level) : 0;
    const { result } = rollD20({});
    const total = result + mod + pb;
    const critLabel = result === 20 ? ' (¡20 natural!)' : result === 1 ? ' (1 natural)' : '';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';

    onTriggerAnimation({
      dieType: 'd20',
      label: `Prueba de ${skillName}`,
      rolls: [result],
      finalResult: result,
      mod: mod + pb,
      total,
      crit,
      onComplete: () => {
        onAddPendingRoll({
          text: `🎲 ${skillName}: [${result}] ${fmtSigned(mod)}(${ability.toUpperCase()})${proficient ? fmtSigned(pb) + '(comp)' : ''} = ${total}${critLabel}`,
          cls: crit
        });
      }
    });
  };

  const handleSaveRollPrompt = () => {
    const chosen = prompt('¿Salvación de qué atributo? (FUE / DES / CON / INT / SAB / CAR)');
    if (!chosen) return;
    const map: Record<string, AbilityKey> = {
      FUE: 'str', STR: 'str', FUERZA: 'str',
      DES: 'dex', DEX: 'dex', DESTREZA: 'dex',
      CON: 'con', CONSTITUCION: 'con', CONSTITUCIÓN: 'con',
      INT: 'int', INTELIGENCIA: 'int',
      SAB: 'wis', WIS: 'wis', SABIDURIA: 'wis', SABIDURÍA: 'wis',
      CAR: 'cha', CHA: 'cha', CARISMA: 'cha'
    };
    const ab = map[chosen.trim().toUpperCase()];
    if (!ab) {
      alert('No reconozco ese atributo.');
      return;
    }

    const mod = abilityMod(c.abilities[ab]);
    const { result } = rollD20({});
    const total = result + mod;
    const critLabel = result === 20 ? ' (¡20 natural!)' : result === 1 ? ' (1 natural)' : '';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';

    onTriggerAnimation({
      dieType: 'd20',
      label: `Salvación de ${ab.toUpperCase()}`,
      rolls: [result],
      finalResult: result,
      mod,
      total,
      crit,
      onComplete: () => {
        onAddPendingRoll({
          text: `🛡️ Salvación de ${ab.toUpperCase()}: [${result}] ${fmtSigned(mod)} = ${total}${critLabel}`,
          cls: crit
        });
      }
    });
  };

  const handleDamageRollPrompt = () => {
    const formula = prompt('Fórmula de daño (ej: 1d8+3):');
    if (!formula) return;
    const res = rollFormula(formula);
    if (!res) {
      alert('Formato inválido. Usá algo como 1d8+3');
      return;
    }

    let dieType: DieType = 'd6';
    if (formula.includes('d20')) dieType = 'd20';
    else if (formula.includes('d12')) dieType = 'd12';
    else if (formula.includes('d10')) dieType = 'd10';
    else if (formula.includes('d8')) dieType = 'd8';
    else if (formula.includes('d4')) dieType = 'd4';

    onTriggerAnimation({
      dieType,
      label: `Tirada de Daño (${formula})`,
      rolls: res.rolls,
      finalResult: res.rolls[0] || res.total,
      mod: res.mod,
      total: res.total,
      crit: 'crit',
      onComplete: () => {
        onAddPendingRoll({
          text: `⚔️ Daño (${formula}): [${res.rolls.join(', ')}]${res.mod ? fmtSigned(res.mod) : ''} = ${res.total}`,
          cls: 'crit'
        });
      }
    });
  };

  const handleInitiative = () => {
    const dex = abilityMod(c.abilities.dex);
    const { result } = rollD20({});
    const total = result + dex;
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';

    onTriggerAnimation({
      dieType: 'd20',
      label: 'Tirada de Iniciativa',
      rolls: [result],
      finalResult: result,
      mod: dex,
      total,
      crit,
      onComplete: () => {
        onAddPendingRoll({
          text: `⏱️ Iniciativa: [${result}] ${fmtSigned(dex)}(DES) = ${total}`,
          cls: crit
        });
      }
    });
  };

  return (
    <>
      {pendingRolls.length > 0 && (
        <div id="pending-rolls">
          {pendingRolls.map((r, i) => (
            <div key={i} className={`roll-chip ${r.cls || ''}`}>
              {r.text}
            </div>
          ))}
        </div>
      )}

      <div id="dice-tray">
        <span className="label">Mesa de dados</span>
        <button onClick={() => doRawD20()}>d20</button>
        <button onClick={() => doRawD20('adv')}>d20 (ventaja)</button>
        <button onClick={() => doRawD20('dis')}>d20 (desventaja)</button>
        <button onClick={handleSkillRollPrompt}>Tirada de habilidad…</button>
        <button onClick={handleSaveRollPrompt}>Tirada de salvación…</button>
        <button onClick={handleDamageRollPrompt} className="seal">Tirada de daño…</button>
        <button onClick={handleInitiative}>Iniciativa</button>
      </div>
    </>
  );
};
