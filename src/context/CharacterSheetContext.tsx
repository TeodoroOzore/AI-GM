import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useCharacter } from './CharacterContext';
import {
  CharacterSheet as CharacterType,
  CLASSES,
  SKILLS,
  RACES,
  AbilityKey,
  WeaponItem,
  SpellItem,
  SubclassSpellGrant,
  SubclassCompanionGrant,
  abilityMod,
  profBonus,
  fmtSigned,
  ARMOR_CATALOG,
  DND_CONDITIONS,
  TabKey
} from '../types';

interface CharacterSheetContextType {
  c: CharacterType;
  update: (partial: Partial<CharacterType>) => void;
  onUpdateCharacter: (updated: CharacterType) => void;
  onQuickSkillRoll: (skillName: string, ability: AbilityKey) => void;
  onRollSave: (ability: AbilityKey) => void;
  onRollWeapon: (weapon: WeaponItem) => void;
  onRollSpell: (spell: SpellItem) => void;
  readOnly: boolean;
  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
  previewSubclass: string;
  setPreviewSubclass: React.Dispatch<React.SetStateAction<string>>;
  sheetFocus: string;
  setSheetFocus: React.Dispatch<React.SetStateAction<string>>;
  canEdit: boolean;
  cdef: any;
  handleImportSubclassSpells: (subclassSpells: SubclassSpellGrant[], subName: string) => void;
  handleAddCompanionNote: (comp: SubclassCompanionGrant) => void;
  handleAddProficientSkill: () => void;
  handleSlotChange: (key: string, delta: number) => void;
  handleResourceChange: (key: string, delta: number, max: number) => void;
  handleShortRest: () => void;
  handleLongRest: () => void;
  dexMod: number;
  hasAlertFeat: boolean;
  hasMobileFeat: boolean;
  initiative: number;
  baseSpeed: number;
  conditionList: string[];
  hasExhaustion2: boolean;
  hasExhaustion5: boolean;
  speedMultiplier: number;
  speed: number;
  isPercepProf: boolean;
  passivePerception: number;
  handleConditionToggle: (condName: string) => void;
  handleConditionAdvance: () => void;
  equippedArmorEntry: any;
  activeConditions: string[];
}

const CharacterSheetContext = createContext<CharacterSheetContextType | undefined>(undefined);

export const useCharacterSheet = () => {
  const context = useContext(CharacterSheetContext);
  if (!context) throw new Error('useCharacterSheet must be used within CharacterSheetProvider');
  return context;
};

export const CharacterSheetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { character: c, updateCharacter: onUpdateCharacter, onQuickSkillRoll, onRollSave, onRollWeapon, onRollSpell, readOnly, focusSection } = useCharacter();

  const [activeTab, setActiveTab] = useState<TabKey>('stats');
  const [previewSubclass, setPreviewSubclass] = useState<string>('');
  const [sheetFocus, setSheetFocus] = useState<string>('');
  const canEdit = true;

  const cdef = CLASSES[c.className] || CLASSES['Guerrero'];

  const update = (partial: Partial<CharacterType>) => {
    if (!canEdit) return;
    onUpdateCharacter({ ...c, ...partial });
  };

  const handleImportSubclassSpells = (subclassSpells: SubclassSpellGrant[], subName: string) => {
    const unlockedSpells = subclassSpells.filter(sp => c.level >= sp.levelUnlocked);
    const existingNames = new Set((c.spellsKnown || []).map(s => s.name.toLowerCase()));
    const newSpells = unlockedSpells
      .filter(sp => !existingNames.has(sp.spellName.toLowerCase()))
      .map(sp => ({
        name: sp.spellName,
        level: sp.spellLevel,
        notes: sp.notes || `Otorgado por subclase ${subName}`
      }));

    if (newSpells.length > 0) {
      update({ spellsKnown: [...(c.spellsKnown || []), ...newSpells] });
      alert(`Se añadieron ${newSpells.length} conjuros de subclase a tu repertorio.`);
    } else {
      alert('Todos los conjuros desbloqueados de esta subclase ya están en tu repertorio.');
    }
  };

  const handleAddCompanionNote = (comp: SubclassCompanionGrant) => {
    const noteText = `\n\n[Compañero/Familiar: ${comp.name}]\n- Tipo: ${comp.type}\n- Resumen: ${comp.statsSummary}\n- Detalle: ${comp.description}`;
    update({ subclassNotes: (c.subclassNotes || '') + noteText });
    alert(`Se añadió la información de ${comp.name} a tus notas de subclase.`);
  };

  const handleAddProficientSkill = () => {
    const remaining = SKILLS.filter(s => !c.proficientSkills.includes(s.name));
    if (!remaining.length) {
      alert('Ya tienes todas las competencias disponibles.');
      return;
    }
    const chosen = prompt('¿Qué competencia nueva quieres agregar?\n' + remaining.map(s => s.name).join(', '));
    if (!chosen) return;
    const match = remaining.find(s => s.name.toLowerCase() === chosen.trim().toLowerCase());
    if (!match) {
      alert('No reconozco esa habilidad.');
      return;
    }
    if (!c.proficientSkills.includes(match.name)) {
      update({ proficientSkills: [...c.proficientSkills, match.name] });
    }
  };

  const handleSlotChange = (key: string, delta: number) => {
    const used = c.spellSlotsUsed[key] || 0;
    const next = Math.max(0, used + delta);
    update({ spellSlotsUsed: { ...c.spellSlotsUsed, [key]: next } });
  };

  const handleResourceChange = (key: string, delta: number, max: number) => {
    const used = c.classResourceUsed[key] || 0;
    const next = Math.max(0, Math.min(max, used + delta));
    update({ classResourceUsed: { ...c.classResourceUsed, [key]: next } });
  };

  // ─── Descanso Corto ───────────────────────────────────────────────
  // Restaura recursos de descanso corto y consume 1 Dado de Golpe para curar PG.
  // Se tranca/bloquea si los dados de golpe disponibles son 0.
  const handleShortRest = () => {
    if ((c.hitDiceRemaining ?? 0) <= 0) {
      alert(`⚠️ ¡No te quedan Dados de Golpe disponibles! (${c.hitDiceRemaining || 0}/${c.level})\n\n⛔ El Descanso Corto está bloqueado. Debes realizar un Descanso Largo para recuperar Dados de Golpe.`);
      return;
    }

    const hitDie = cdef.hitDie || 8;
    const conMod = abilityMod(c.abilities.con);

    // Consumes 1 hit die
    const diceToRoll = 1;
    const dieRoll = Math.ceil(Math.random() * hitDie);
    const hpGained = Math.max(1, dieRoll + conMod);
    const newHp = Math.min(c.hpMax, c.hpCur + hpGained);
    const newHitDice = Math.max(0, c.hitDiceRemaining - diceToRoll);

    // Restore short rest class resources
    const newSlotsUsed = { ...c.spellSlotsUsed };
    if (c.className === 'Brujo') {
      newSlotsUsed['pact'] = 0;
    }

    const newResourceUsed = { ...c.classResourceUsed };
    // Guerrero: Segundo Aliento, Acción Súbita
    if (c.className === 'Guerrero') {
      delete newResourceUsed['secondwind'];
      delete newResourceUsed['actionsurge'];
    }
    // Monje: Puntos de Ki
    if (c.className === 'Monje') {
      delete newResourceUsed['ki'];
    }
    // Druida: Forma Salvaje
    if (c.className === 'Druida') {
      delete newResourceUsed['wildshape'];
    }
    // Clérigo / Paladín: Canalizar Divinidad
    if (c.className === 'Clérigo' || c.className === 'Paladín') {
      delete newResourceUsed['channel'];
    }
    // Bardo (Nivel 5+): Fuente de Inspiración
    if (c.className === 'Bardo' && c.level >= 5) {
      delete newResourceUsed['inspiration'];
    }
    // Mago: Recuperación Arcana
    if (c.className === 'Mago') {
      delete newResourceUsed['arcanerecovery'];
    }
    // Hechicero (Nivel 20): Restauración Sorcière
    if (c.className === 'Hechicero' && c.level >= 20) {
      const sorceryUsed = newResourceUsed['sorcery'] || 0;
      newResourceUsed['sorcery'] = Math.max(0, sorceryUsed - 4);
    }

    update({
      hpCur: newHp,
      hitDiceRemaining: newHitDice,
      spellSlotsUsed: newSlotsUsed,
      classResourceUsed: newResourceUsed,
    });

    alert(`⏰ Descanso Corto completado.\n🎲 Consumido 1 Dado de Golpe (1d${hitDie} + ${fmtSigned(conMod)}): +${hpGained} PG recuperados (${c.hpCur} → ${newHp} PG).\n🎲 Dados de Golpe restantes: ${newHitDice}/${c.level}.`);
  };

  // ─── Descanso Largo ───────────────────────────────────────────────
  // Restaura PG al 100%, Dados de Golpe al 100%, todos los espacios de conjuro y recursos de clase.
  const handleLongRest = () => {
    update({
      hpCur: c.hpMax,
      hitDiceRemaining: c.level,
      spellSlotsUsed: {},
      classResourceUsed: {},
      deathSaves: { success: 0, fail: 0 },
      tempHp: 0,
    });
    alert(`🌙 Descanso Largo completado.\n❤️ PG restaurados al máximo (${c.hpMax}/${c.hpMax}).\n🎲 Todos los Dados de Golpe recuperados (${c.level}/${c.level}).\n✨ Espacios de conjuro y recursos de clase restaurados al 100%.`);
  };

  // ─── Estadísticas de Combate derivadas ──────────────────────────
  const dexMod = abilityMod(c.abilities.dex);
  const hasAlertFeat = (c.feats || []).includes('Alerta');
  const hasMobileFeat = (c.feats || []).includes('Móvil');
  const initiative = dexMod + (hasAlertFeat ? 5 : 0);
  const baseSpeed = RACES[c.race]?.speed ?? 9;
  const conditionList = (c.conditions || '').split(',').map(s => s.trim()).filter(Boolean);
  const hasExhaustion2 = conditionList.includes('Agotamiento 2');
  const hasExhaustion5 = conditionList.includes('Agotamiento 5');
  const speedMultiplier = hasExhaustion5 ? 0 : hasExhaustion2 ? 0.5 : 1;
  const speed = hasExhaustion5 ? 0 : Math.floor(baseSpeed * speedMultiplier) + (hasMobileFeat ? 3 : 0);
  const isPercepProf = c.proficientSkills.includes('Percepción');
  const passivePerception = 10 + abilityMod(c.abilities.wis) + (isPercepProf ? profBonus(c.level) : 0);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'stats', label: 'Estado y Stats' },
    { key: 'gear', label: 'Equipo e Inventario' },
    { key: 'crafting', label: 'Artesanía' },
    { key: 'journal', label: 'Diario' },
    { key: 'class', label: 'Clase' },
    { key: 'dynamic', label: cdef.tabName },
    { key: 'familiars', label: 'Familiares' },
    { key: 'companions', label: 'Compañeros' }
  ];

  useEffect(() => {
    if (!focusSection) return;
    setActiveTab((prev) => {
      let mapped: TabKey = prev;
      if (['stats', 'status', 'proficiencies', 'feats'].includes(focusSection)) {
        mapped = 'stats';
      } else if (['gear', 'inventory'].includes(focusSection)) {
        mapped = 'gear';
      } else if (['class', 'dynamic', 'familiars', 'companions'].includes(focusSection)) {
        mapped = focusSection as TabKey;
      }
      return mapped;
    });
    setSheetFocus(focusSection);
  }, [focusSection]);

  useEffect(() => {
    if (!sheetFocus) return;
    const target = document.getElementById(`sheet-section-${sheetFocus}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const timer = window.setTimeout(() => setSheetFocus(''), 600);
    return () => window.clearTimeout(timer);
  }, [sheetFocus]);

  const handleConditionToggle = (condName: string) => {
    const activeConditions = (c.conditions || '').split(',').map(s => s.trim()).filter(Boolean);
    const isActive = activeConditions.includes(condName);
    const next = isActive
      ? activeConditions.filter(x => x !== condName)
      : [...activeConditions, condName];
    const dur = c.conditionDurations?.[condName] ?? 1;
    update({
      conditions: next.join(', '),
      conditionDurations: { ...c.conditionDurations, [condName]: isActive ? 0 : dur }
    });
  };

  const handleConditionAdvance = () => {
    const nextDurations = { ...(c.conditionDurations || {}) };
    Object.keys(nextDurations).forEach(key => {
      if (nextDurations[key] > 0) nextDurations[key] -= 1;
      if (nextDurations[key] <= 0) delete nextDurations[key];
    });
    update({ conditionDurations: nextDurations });
  };

  // Find equipped armor details
  const equippedArmorEntry = c.equippedArmor ? ARMOR_CATALOG.find(a => a.name === c.equippedArmor) : null;

  const activeConditions = (c.conditions || '').split(',').map(s => s.trim()).filter(Boolean);

  const value = {
    c,
    update,
    onUpdateCharacter,
    onQuickSkillRoll,
    onRollSave,
    onRollWeapon,
    onRollSpell,
    readOnly,
    activeTab,
    setActiveTab,
    previewSubclass,
    setPreviewSubclass,
    sheetFocus,
    setSheetFocus,
    canEdit,
    cdef,
    handleImportSubclassSpells,
    handleAddCompanionNote,
    handleAddProficientSkill,
    handleSlotChange,
    handleResourceChange,
    handleShortRest,
    handleLongRest,
    dexMod,
    hasAlertFeat,
    hasMobileFeat,
    initiative,
    baseSpeed,
    conditionList,
    hasExhaustion2,
    hasExhaustion5,
    speedMultiplier,
    speed,
    isPercepProf,
    passivePerception,
    handleConditionToggle,
    handleConditionAdvance,
    equippedArmorEntry,
    activeConditions
  };

  return (
    <CharacterSheetContext.Provider value={value}>
      {children}
    </CharacterSheetContext.Provider>
  );
};
