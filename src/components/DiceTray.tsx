import React from 'react';
import {
  PendingRoll,
  CharacterSheet,
  rollD20,
  rollFormula,
  AbilityKey,
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
  onFocusSheetSection: (section: string) => void;
  onRollSave: (ability: AbilityKey) => void;
};

export const DiceTray: React.FC<DiceTrayProps> = ({
  character: c,
  pendingRolls,
  onAddPendingRoll,
  onTriggerAnimation,
  onFocusSheetSection,
  onRollSave
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
        <button onClick={() => onFocusSheetSection('stats')}>Tiradas de salvación/habilidades</button>
        <button onClick={() => onFocusSheetSection('gear')}>Tirada de daño con armas</button>
        <button onClick={() => onFocusSheetSection('dynamic')}>Ir a conjuros</button>
        <button onClick={handleInitiative}>Iniciativa</button>
      </div>
    </>
  );
};
