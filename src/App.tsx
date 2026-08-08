import { useState, useEffect } from 'react';
import {
  CharacterSheet as CharacterType,
  JournalEntry,
  PendingRoll,
  CampaignState,
  blankCharacter,
  AbilityKey,
  abilityMod,
  profBonus,
  rollD20,
  rollFormula,
  fmtSigned,
  WeaponItem,
  SpellItem,
  CLASSES
} from './types';
import { Header } from './components/Header';
import { CharacterCreation } from './components/CharacterCreation';
import { CharacterSheetPanel } from './components/CharacterSheet';
import { DiceTray } from './components/DiceTray';
import { JournalConsole } from './components/JournalConsole';
import { DiceAnimationOverlay, ActiveRollAnimation } from './components/DiceAnimationOverlay';
import { BestiaryPanel } from './components/BestiaryPanel';
import './styles.css';

const STORAGE_KEY = 'campaign:main';

export function App() {
  const [character, setCharacter] = useState<CharacterType>(blankCharacter());
  const [log, setLog] = useState<JournalEntry[]>([]);
  const [worldMemory, setWorldMemory] = useState<string>('');
  const [started, setStarted] = useState<boolean>(false);
  const [pendingRolls, setPendingRolls] = useState<PendingRoll[]>([]);
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [activeAnimation, setActiveAnimation] = useState<ActiveRollAnimation | null>(null);
  const [sheetFocusSection, setSheetFocusSection] = useState<string>('');
  const [bestiaryOpen, setBestiaryOpen] = useState<boolean>(false);

  // Cargar el estado desde localStorage de forma segura al iniciar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored: CampaignState = JSON.parse(raw);
        if (stored && stored.started && stored.character) {
          const mergedCharacter: CharacterType = {
            ...blankCharacter(),
            ...stored.character,
            abilities: {
              ...blankCharacter().abilities,
              ...(stored.character.abilities || {})
            }
          };
          setCharacter(mergedCharacter);
          setLog(Array.isArray(stored.log) ? stored.log : []);
          setWorldMemory(stored.worldMemory || '');
          setStarted(true);
        }
      }
    } catch (e) {
      console.error('Error cargando el estado guardado, reiniciando:', e);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const saveState = (updatedChar: CharacterType, updatedLog: JournalEntry[], updatedMemory: string, isStarted: boolean) => {
    try {
      const stateToSave: CampaignState = {
        character: updatedChar,
        log: updatedLog,
        worldMemory: updatedMemory,
        started: isStarted
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Error guardando el estado:', e);
    }
  };

  const handleCreateCharacter = (newChar: CharacterType, introText: string, initialMemory: string) => {
    const initialLog: JournalEntry[] = [
      { role: 'dm', text: introText, rolls: [] }
    ];
    setCharacter(newChar);
    setLog(initialLog);
    setWorldMemory(initialMemory);
    setStarted(true);
    setPendingRolls([]);
    saveState(newChar, initialLog, initialMemory, true);
  };

  const handleUpdateCharacter = (updatedChar: CharacterType) => {
    setCharacter(updatedChar);
    saveState(updatedChar, log, worldMemory, started);
  };

  const handleAddPendingRoll = (roll: PendingRoll) => {
    setPendingRolls(prev => [...prev, roll]);
  };

  const handleTriggerAnimation = (anim: ActiveRollAnimation) => {
    setActiveAnimation({
      ...anim,
      onComplete: () => {
        anim.onComplete();
        setActiveAnimation(current => current?.label === anim.label && current?.finalResult === anim.finalResult ? null : current);
      }
    });
  };

  const handleFocusSheetSection = (section: string) => {
    setSheetFocusSection(section);
  };

  const parseDamageFormula = (value?: string): string | null => {
    const text = (value || '').trim();
    if (!text) return null;
    const match = text.match(/(\d+)?d(\d+)([+-]\d+)?/i);
    if (!match) return null;
    return `${match[1] || '1'}d${match[2]}${match[3] || ''}`;
  };

  const getDieTypeFromFormula = (formula: string): ActiveRollAnimation['dieType'] => {
    if (formula.includes('d20')) return 'd20';
    if (formula.includes('d12')) return 'd12';
    if (formula.includes('d10')) return 'd10';
    if (formula.includes('d8')) return 'd8';
    if (formula.includes('d6')) return 'd6';
    if (formula.includes('d4')) return 'd4';
    return 'd6';
  };

  const handleQuickSkillRoll = (skillName: string, ability: AbilityKey) => {
    const proficient = character.proficientSkills.includes(skillName);
    const mod = abilityMod(character.abilities[ability]);
    const pb = proficient ? profBonus(character.level) : 0;
    const { result } = rollD20({});
    const total = result + mod + pb;
    const critLabel = result === 20 ? ' (¡20 natural!)' : result === 1 ? ' (1 natural)' : '';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';

    handleTriggerAnimation({
      dieType: 'd20',
      label: `Prueba de ${skillName}`,
      rolls: [result],
      finalResult: result,
      mod: mod + pb,
      total,
      crit,
      onComplete: () => {
        handleAddPendingRoll({
          text: `🎲 ${skillName}: [${result}] ${fmtSigned(mod)}(${ability.toUpperCase()})${proficient ? fmtSigned(pb) + '(comp)' : ''} = ${total}${critLabel}`,
          cls: crit
        });
      }
    });
  };

  const handleRollSave = (ability: AbilityKey) => {
    const mod = abilityMod(character.abilities[ability]);
    const { result } = rollD20({});
    const total = result + mod;
    const critLabel = result === 20 ? ' (¡20 natural!)' : result === 1 ? ' (1 natural)' : '';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';
    const labelMap: Record<AbilityKey, string> = {
      str: 'FUE',
      dex: 'DES',
      con: 'CON',
      int: 'INT',
      wis: 'SAB',
      cha: 'CAR'
    };

    handleTriggerAnimation({
      dieType: 'd20',
      label: `Salvación de ${labelMap[ability]}`,
      rolls: [result],
      finalResult: result,
      mod,
      total,
      crit,
      onComplete: () => {
        handleAddPendingRoll({
          text: `🛡️ Salvación ${labelMap[ability]}: [${result}] ${fmtSigned(mod)} = ${total}${critLabel}`,
          cls: crit
        });
      }
    });
  };

  const handleRollWeapon = (weapon: WeaponItem) => {
    const mod = abilityMod(character.abilities[weapon.ability]) + (weapon.proficient ? profBonus(character.level) : 0);
    const { rolls, result } = rollD20({});
    const total = result + mod;
    const critLabel = result === 20 ? ' (¡20 natural!)' : result === 1 ? ' (1 natural)' : '';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';
    const formula = parseDamageFormula(weapon.dice);

    handleTriggerAnimation({
      dieType: 'd20',
      label: `Ataque con ${weapon.name || 'arma'}`,
      rolls,
      finalResult: result,
      mod,
      total,
      crit,
      onComplete: () => {
        const attackText = `⚔️ ${weapon.name}: [${result}] ${fmtSigned(mod)}(${weapon.ability.toUpperCase()})${weapon.proficient ? fmtSigned(profBonus(character.level)) + '(comp)' : ''} = ${total}${critLabel}`;

        if (!formula) {
          handleAddPendingRoll({ text: attackText, cls: crit });
          return;
        }

        const damageRes = rollFormula(formula);
        if (!damageRes) {
          handleAddPendingRoll({ text: attackText, cls: crit });
          return;
        }

        handleTriggerAnimation({
          dieType: getDieTypeFromFormula(formula),
          label: `Daño de ${weapon.name}`,
          rolls: damageRes.rolls,
          finalResult: damageRes.rolls[0] || damageRes.total,
          mod: damageRes.mod,
          total: damageRes.total,
          crit: 'crit',
          onComplete: () => {
            const damageText = `💥 ${weapon.name}: (${formula}) [${damageRes.rolls.join(', ')}]${damageRes.mod ? fmtSigned(damageRes.mod) : ''} = ${damageRes.total}`;
            handleAddPendingRoll({ text: `${attackText} | ${damageText}`, cls: crit });
          }
        });
      }
    });
  };

const handleRollSpell = (spell: SpellItem) => {
    const spellcasting = CLASSES[character.className]?.spellcasting;
    // Racial spells (Dragonar breath → CON; Infernal/Elfo Oscuro → CHA; Alto Elfo → INT)
    let spellAbility: AbilityKey;
    if (spell.level === 'racial') {
      if (spell.name === 'Arma de Aliento') spellAbility = 'con';
      else if (character.race === 'Alto Elfo') spellAbility = 'int';
      else spellAbility = 'cha';
    } else {
      spellAbility = spellcasting?.ability || 'int';
    }
    const mod = abilityMod(character.abilities[spellAbility]) + profBonus(character.level);
    const { rolls, result } = rollD20({});
    const total = result + mod;
    const critLabel = result === 20 ? ' (¡20 natural!)' : result === 1 ? ' (1 natural)' : '';
    const crit = result === 20 ? 'crit' : result === 1 ? 'fail' : '';
    const formula = parseDamageFormula(spell.notes || spell.name);

    handleTriggerAnimation({
      dieType: 'd20',
      label: `Conjuro: ${spell.name || 'hechizo'}`,
      rolls,
      finalResult: result,
      mod,
      total,
      crit,
      onComplete: () => {
        const attackText = `✨ ${spell.name}: [${result}] ${fmtSigned(mod)}(${spellAbility.toUpperCase()}) = ${total}${critLabel}`;

        if (!formula) {
          handleAddPendingRoll({ text: attackText, cls: crit });
          return;
        }

        const damageRes = rollFormula(formula);
        if (!damageRes) {
          handleAddPendingRoll({ text: attackText, cls: crit });
          return;
        }

        handleTriggerAnimation({
          dieType: getDieTypeFromFormula(formula),
          label: `Daño de ${spell.name}`,
          rolls: damageRes.rolls,
          finalResult: damageRes.rolls[0] || damageRes.total,
          mod: damageRes.mod,
          total: damageRes.total,
          crit: 'crit',
          onComplete: () => {
            const damageText = `💥 ${spell.name}: (${formula}) [${damageRes.rolls.join(', ')}]${damageRes.mod ? fmtSigned(damageRes.mod) : ''} = ${damageRes.total}`;
            handleAddPendingRoll({ text: `${attackText} | ${damageText}`, cls: crit });
          }
        });
      }
    });
  };

  const buildLocalReply = (playerText: string, rolls: string[]): string => {
    const text = (playerText || '').trim().toLowerCase();
    let reply = '';

    if (text.includes('ataco') || text.includes('combato') || text.includes('espada') || text.includes('arco')) {
      reply = `La tensión se vuelve palpable. El entorno responde con una amenaza concreta y el peligro se cierne sobre ${character.name || 'tu personaje'}.`;
    } else if (text.includes('investigo') || text.includes('buscar') || text.includes('exploro') || text.includes('miro')) {
      reply = `El lugar revela un detalle escondido. La pista es pequeña, pero suficiente para alterar la ruta de la campaña.`;
    } else if (text.includes('hablo') || text.includes('negocio') || text.includes('dialogo') || text.includes('pregunto')) {
      reply = `El encuentro se vuelve político y cargado de intención. Un rostro nuevo recuerda tu nombre y lo guarda para más tarde.`;
    } else {
      reply = `La escena avanza con un nuevo giro. El mundo no se queda inmóvil y ${character.name || 'tu personaje'} deja una marca en la memoria del lugar.`;
    }

    if (rolls.length > 0) {
      reply += `\n\nTiradas registradas: ${rolls.join(' | ')}`;
    }
    return reply;
  };

  const handleSendTurn = async (playerText: string) => {
    const text = playerText.trim();
    if (!text && pendingRolls.length === 0) return;

    const rollTexts = pendingRolls.map(r => r.text);
    const playerEntry: JournalEntry = {
      role: 'player',
      text: text || '(acción implícita en la tirada)',
      rolls: rollTexts
    };

    const updatedLogWithPlayer = [...log, playerEntry];
    setLog(updatedLogWithPlayer);
    setPendingRolls([]);
    setIsThinking(true);

    setTimeout(async () => {
      const dmReplyText = buildLocalReply(text, rollTexts);
      const dmEntry: JournalEntry = {
        role: 'dm',
        text: dmReplyText,
        rolls: []
      };

      const finalLog = [...updatedLogWithPlayer, dmEntry];
      setLog(finalLog);
      setIsThinking(false);
      saveState(character, finalLog, worldMemory, started);
    }, 700);
  };

  const handleSummarizeCronica = () => {
    if (log.length < 3) return;
    const newMemory = `${worldMemory}\n\nResumen reciente: ${log.slice(-6).map(e => e.text).join(' / ')}`;
    setWorldMemory(newMemory);
    saveState(character, log, newMemory, started);
    alert('Crónica resumida y guardada en la memoria del mundo.');
  };

  const handleResetCampaign = () => {
    if (!confirm('Esto borra el personaje y la crónica guardados. ¿Continuar?')) return;
    const emptyChar = blankCharacter();
    setCharacter(emptyChar);
    setLog([]);
    setWorldMemory('');
    setStarted(false);
    setPendingRolls([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="app-container">
      <Header
        onSummarize={handleSummarizeCronica}
        onReset={handleResetCampaign}
        onOpenBestiary={() => setBestiaryOpen(true)}
      />

      <BestiaryPanel open={bestiaryOpen} onClose={() => setBestiaryOpen(false)} />

      <DiceAnimationOverlay animationData={activeAnimation} />

      {!started ? (
        <CharacterCreation
          onCreateCharacter={handleCreateCharacter}
          onTriggerAnimation={handleTriggerAnimation}
        />
      ) : (
        <div className="layout">
          <CharacterSheetPanel
            character={character}
            onUpdateCharacter={handleUpdateCharacter}
            onQuickSkillRoll={handleQuickSkillRoll}
            onRollSave={handleRollSave}
            onRollWeapon={handleRollWeapon}
            onRollSpell={handleRollSpell}
            readOnly={false}
            focusSection={sheetFocusSection}
          />

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
            <JournalConsole
              characterName={character.name}
              log={log}
              isThinking={isThinking}
              onSendTurn={handleSendTurn}
            />

            <DiceTray
              character={character}
              pendingRolls={pendingRolls}
              onAddPendingRoll={handleAddPendingRoll}
              onTriggerAnimation={handleTriggerAnimation}
              onFocusSheetSection={handleFocusSheetSection}
              onRollSave={handleRollSave}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
