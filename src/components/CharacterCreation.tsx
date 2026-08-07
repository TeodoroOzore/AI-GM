import React, { useState, useMemo } from 'react';
import { getSpellcastingLimits } from '../utils/spellcasting';
import { ActiveRollAnimation } from './DiceAnimationOverlay';
import {
  ABILITIES,
  SKILLS,
  RACES,
  CLASSES,
  POINTBUY_COST,
  WEAPONS_CATALOG,
  ARMOR_CATALOG,
  TOOLS_CATALOG,
  CANTRIPS_CATALOG,
  SPELLS_LV1_CATALOG,
  CLASS_RECOMMENDATIONS,
  DAMAGE_TYPE_EMOJI,
  AbilityKey,
  CharacterSheet,
  WeaponItem,
  SpellItem,
  blankCharacter,
  hpMaxFor,
  abilityMod,
  secureRandInt,
  WeaponCatalogEntry,
  ArmorCatalogEntry,
STARTING_PACKS,
  EquipmentItem,
  EquippedGearItem,
  getCharacterProficiencies,
  isWeaponProficient,
  isArmorProficient,
  getToolCategoryLimits,
  getRacialSpells,
  getRacialResistances,
  resolveToolCategory,
  RaceDef,
  BASE_RACES,
  resolveBaseRace,
  getSubraceCategoryLabel,
  RaceTrait,
  BACKGROUND_EXTRAS,
  BACKGROUND_OPTIONS,
} from '../types';

// ─── Catálogo de idiomas del mundo de D&D 5e ───
const LANGUAGE_OPTIONS = [
  'Común', 'Enano', 'Élfico', 'Gigante', 'Gnomo', 'Goblin', 'Mediano', 'Orco',
  'Abisal', 'Celestial', 'Dracónico', 'Infernal', 'Primigenio', 'Silvano',
  'Subcomún', 'Bajocomún', 'Lenguaje de las Bestias', 'Jerga de los Ladrones'
];

// ─── Trucos de Mago para el rasgo "Truco" del Alto Elfo ───
const WIZARD_CANTRIPS = CANTRIPS_CATALOG.filter(c => c.classes.includes('Mago')).map(c => c.name);

type CharacterCreationProps = {
  onCreateCharacter: (character: CharacterSheet, introMessage: string, worldMemory: string) => void;
  onTriggerAnimation?: (anim: ActiveRollAnimation) => void;
};

type CreationMethod = 'standard' | 'pointbuy' | 'rolled' | 'manual';
type CreationStep = 'identity' | 'abilities' | 'skills' | 'equipment' | 'review';

export const CharacterCreation: React.FC<CharacterCreationProps> = ({ onCreateCharacter, onTriggerAnimation }) => {
  const [name, setName] = useState('Kaelen Vent');
  const [gender, setGender] = useState('Masculino');
  const [level, setLevel] = useState(1);
  const [baseRace, setBaseRace] = useState('Humano');
  const [race, setRace] = useState('Humano Estándar');
  const [className, setClassName] = useState('Guerrero');
  const [background, setBackground] = useState('Forastero');
  const [bgSearch, setBgSearch] = useState('');
  const [bgOpen, setBgOpen] = useState(false);
const [raceChoiceA, setRaceChoiceA] = useState<AbilityKey>('str');
  const [raceChoiceB, setRaceChoiceB] = useState<AbilityKey>('dex');
  const [extraLanguages, setExtraLanguages] = useState<string[]>([]);
  const [raceSkillChoices, setRaceSkillChoices] = useState<string[]>([]);
  const [raceAncestry, setRaceAncestry] = useState<string>('');
  const [raceToolChoice, setRaceToolChoice] = useState<string>('');
  const [raceCantrip, setRaceCantrip] = useState<string>('');

  const [method, setMethod] = useState<CreationMethod>('standard');
  const standardPool = [15, 14, 13, 12, 10, 8];
  const [rolledPool, setRolledPool] = useState<number[] | null>(null);

  const [assignments, setAssignments] = useState<Record<AbilityKey, number | null>>({
    str: null, dex: null, con: null, int: null, wis: null, cha: null
  });

  const [pointBuy, setPointBuy] = useState<Record<AbilityKey, number>>({
    str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8
  });

  const [manual, setManual] = useState<Record<AbilityKey, number>>({
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10
  });

  const [proficientSkills, setProficientSkills] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedWeapons, setSelectedWeapons] = useState<string[]>([]);
  const [selectedArmor, setSelectedArmor] = useState<string>('');
  const [selectedShield, setSelectedShield] = useState(false);
  const [selectedCantrips, setSelectedCantrips] = useState<string[]>([]);
  const [selectedSpells, setSelectedSpells] = useState<string[]>([]);
  const [selectedPack, setSelectedPack] = useState<string>('Pack de Explorador');
  const [startingGold, setStartingGold] = useState<number>(15);
  const [currentStep, setCurrentStep] = useState<CreationStep>('identity');

  const rec = CLASS_RECOMMENDATIONS[className];
  const cdef = CLASSES[className];

  const calculateFinalAbilities = (): Record<AbilityKey, number> => {
    let base: Record<AbilityKey, number>;
    if (method === 'manual') {
      base = { ...manual };
    } else if (method === 'pointbuy') {
      base = { ...pointBuy };
    } else {
      base = {
        str: assignments.str || 10,
        dex: assignments.dex || 10,
        con: assignments.con || 10,
        int: assignments.int || 10,
        wis: assignments.wis || 10,
        cha: assignments.cha || 10
      };
    }

    const rdef = RACES[race];
    const final = { ...base };
    if (rdef?.fixed) {
      Object.entries(rdef.fixed).forEach(([k, v]) => {
        const key = k as AbilityKey;
        final[key] = (final[key] || 10) + (v || 0);
      });
    }
    if (rdef?.choice) {
      final[raceChoiceA] = (final[raceChoiceA] || 10) + rdef.choice.amount;
      if (raceChoiceB !== raceChoiceA) {
        final[raceChoiceB] = (final[raceChoiceB] || 10) + rdef.choice.amount;
      }
    }
    return final;
  };

  const finalAbilities = useMemo(() => calculateFinalAbilities(), [method, manual, pointBuy, assignments, race, raceChoiceA, raceChoiceB]);
  const spellLimits = useMemo(() => {
    const previewCharacter: CharacterSheet = {
      ...blankCharacter(),
      className,
      level,
      abilities: finalAbilities,
    };
    return getSpellcastingLimits(previewCharacter);
  }, [className, level, finalAbilities]);

  // ── Competencias de habilidad otorgadas automáticamente por Trasfondo o Raza ──
  const lockedSkills = useMemo(() => {
    const bgSkills = BACKGROUND_EXTRAS[background]?.skills || [];
    const racialSkills = RACES[race]?.skillProf || [];
    return Array.from(new Set([...bgSkills, ...racialSkills, ...raceSkillChoices]));
  }, [background, race, raceSkillChoices]);

  const classChosenSkills = useMemo(() => {
    return proficientSkills.filter(s => !lockedSkills.includes(s));
  }, [proficientSkills, lockedSkills]);

  const rollAbilityScore4d6WithDetails = () => {
    const rawRolls = [secureRandInt(6), secureRandInt(6), secureRandInt(6), secureRandInt(6)];
    const sorted = [...rawRolls].sort((a, b) => a - b);
    const dropped = sorted[0];
    const kept = sorted.slice(1);
    const sum = kept.reduce((a, b) => a + b, 0);
    return {
      rawRolls,
      dropped,
      kept,
      sum
    };
  };

  const handleRollPool = () => {
    const results = ABILITIES.map(() => rollAbilityScore4d6WithDetails());
    const newPool = results.map(r => r.sum);

    const applyNewPool = () => {
      setRolledPool(newPool);
      setAssignments({ str: null, dex: null, con: null, int: null, wis: null, cha: null });
    };

    if (onTriggerAnimation) {
      const details = results.map((r, i) =>
        `Tirada ${i + 1}: 4d6 [${r.rawRolls.join(', ')}] ➔ ${r.sum} (descartando ${r.dropped})`
      );
      const topScore = Math.max(...newPool);
      onTriggerAnimation({
        dieType: 'd6',
        label: 'Generando Atributos (4d6 × 6)',
        rolls: newPool,
        finalResult: topScore,
        rollDetails: details,
        onComplete: () => {
          applyNewPool();
        }
      });
    } else {
      applyNewPool();
    }
  };

  // ── Fix: Track available values with multiplicity ──
  const getAvailableValues = (forKey: AbilityKey) => {
    const pool = method === 'standard' ? standardPool : (rolledPool || []);
    // Count how many times each value appears in pool
    const poolCounts = new Map<number, number>();
    for (const v of pool) {
      poolCounts.set(v, (poolCounts.get(v) || 0) + 1);
    }
    // Count how many times each value is assigned (excluding current key)
    const assignedCounts = new Map<number, number>();
    for (const [key, val] of Object.entries(assignments)) {
      if (key !== forKey && val !== null) {
        assignedCounts.set(val, (assignedCounts.get(val) || 0) + 1);
      }
    }
    // Build available options: values where pool count > assigned count
    const available: { value: number; index: number }[] = [];
    const seen = new Map<number, number>();
    for (let i = 0; i < pool.length; i++) {
      const v = pool[i];
      const timesAvailableInPool = poolCounts.get(v) || 0;
      const timesAssigned = assignedCounts.get(v) || 0;
      const timesSeen = seen.get(v) || 0;
      // Only add unique options up to the remaining count
      if (timesSeen < timesAvailableInPool - timesAssigned) {
        available.push({ value: v, index: i });
        seen.set(v, timesSeen + 1);
      }
    }
    // Also always include the current assignment if any
    const currentVal = assignments[forKey];
    if (currentVal !== null && !available.some(a => a.value === currentVal)) {
      available.push({ value: currentVal, index: -1 });
    }
    return available;
  };


  const handleToggleSkill = (skillName: string) => {
    if (lockedSkills.includes(skillName)) return; // Bloqueada por trasfondo/raza
    setProficientSkills(prev => {
      if (prev.includes(skillName)) {
        return prev.filter(s => s !== skillName);
      }
      const currentClassSkillsCount = prev.filter(s => !lockedSkills.includes(s)).length;
      if (currentClassSkillsCount >= getSkillCount()) {
        return prev; // Límite de habilidades alcanzado
      }
      return [...prev, skillName];
    });
  };

  const handleToggleTool = (toolName: string) => {
    setSelectedTools(prev => {
      if (prev.includes(toolName)) {
        return prev.filter(t => t !== toolName);
      }
      const limits = getToolCategoryLimits(className, race, background);
      const cat = resolveToolCategory(toolName);
      const currentCount = prev.filter(t => resolveToolCategory(t) === cat).length;
      if (currentCount >= (limits[cat] || 1)) {
        return prev; // bloqueado: se superaría el límite de la categoría
      }
      return Array.from(new Set([...prev, toolName].filter(Boolean)));
    });
  };

  const handleToggleWeapon = (weaponName: string) => {
    setSelectedWeapons(prev =>
      prev.includes(weaponName) ? prev.filter(w => w !== weaponName) : [...prev, weaponName]
    );
  };

  const handleToggleCantrip = (name: string) => {
    setSelectedCantrips(prev => {
      if (prev.includes(name)) {
        return prev.filter(c => c !== name);
      }
      if (spellLimits.cantripsKnownMax > 0 && prev.length >= spellLimits.cantripsKnownMax) {
        return prev;
      }
      return [...prev, name];
    });
  };

  const handleToggleSpell = (name: string) => {
    setSelectedSpells(prev => {
      if (prev.includes(name)) {
        return prev.filter(s => s !== name);
      }
      if (spellLimits.spellsKnownOrPreparedMax > 0 && prev.length >= spellLimits.spellsKnownOrPreparedMax) {
        return prev;
      }
      return [...prev, name];
    });
  };

  const handlePointBuyChange = (key: AbilityKey, delta: number) => {
    const cur = pointBuy[key];
    const next = cur + delta;
    if (next < 8 || next > 15) return;

    const used = Object.values(pointBuy).reduce((sum, v) => sum + POINTBUY_COST[v], 0);
    const costDiff = POINTBUY_COST[next] - POINTBUY_COST[cur];
    if (27 - used - costDiff < 0) return;

    setPointBuy(prev => ({ ...prev, [key]: next }));
  };

  const handleApplyRecommendedSkills = () => {
    if (rec) {
      const availableRecs = rec.skills.filter(s => !lockedSkills.includes(s));
      const toPick = availableRecs.slice(0, getSkillCount());
      setProficientSkills(prev => Array.from(new Set([...prev.filter(s => !lockedSkills.includes(s)), ...toPick])));
    }
  };

  const handleApplyRecommendedTools = () => {
    if (!rec) return;
    const limits = getToolCategoryLimits(className, race, background);
    setSelectedTools(prev => {
      const merged = new Set(prev);
      for (const toolName of rec.tools) {
        const cat = resolveToolCategory(toolName);
        const currentCount = Array.from(merged).filter(t => resolveToolCategory(t) === cat).length;
        if (currentCount >= (limits[cat] || 1)) continue;
        merged.add(toolName);
      }
      return Array.from(merged);
    });
  };

  const handleApplyRecommendedWeapons = () => {
    if (rec) {
      setSelectedWeapons(prev => {
        const merged = new Set([...prev, ...rec.weapons]);
        return Array.from(merged);
      });
    }
  };

  const handleApplyRecommendedSpells = () => {
    if (rec) {
      setSelectedCantrips(prev => {
        const merged = new Set(prev);
        for (const name of rec.cantrips) {
          if (spellLimits.cantripsKnownMax > 0 && merged.size >= spellLimits.cantripsKnownMax) break;
          merged.add(name);
        }
        return Array.from(merged);
      });
      setSelectedSpells(prev => {
        const merged = new Set(prev);
        for (const name of rec.spells) {
          if (spellLimits.spellsKnownOrPreparedMax > 0 && merged.size >= spellLimits.spellsKnownOrPreparedMax) break;
          merged.add(name);
        }
        return Array.from(merged);
      });
    }
  };

  const getSkillCount = () => {
    switch (className) {
      case 'Pícaro': return 4;
      case 'Bardo': return 3;
      case 'Explorador': return 3;
      default: return 2;
    }
  };

  const buildWeaponItem = (entry: WeaponCatalogEntry): WeaponItem => {
    const usesDex = entry.properties.includes('sutil') || entry.range === 'a distancia';
    return {
      name: entry.name,
      ability: usesDex ? 'dex' : 'str',
      dice: entry.dice,
      type: entry.damageType,
      proficient: true,
      notes: entry.properties.join(', '),
      category: entry.category,
      damageType: entry.damageType,
      properties: [...entry.properties],
      magical: entry.magical || false,
      range: entry.range,
      versatileDice: entry.versatileDice,
    };
  };

  const computeAC = (abilities: Record<AbilityKey, number>, armorName: string, hasShield: boolean): number => {
    const dexMod = abilityMod(abilities.dex);
    let ac = 10 + dexMod; // unarmored default

    if (armorName) {
      const armor = ARMOR_CATALOG.find(a => a.name === armorName);
      if (armor) {
        if (armor.addDex) {
          const dexBonus = armor.maxDex !== undefined ? Math.min(dexMod, armor.maxDex) : dexMod;
          ac = armor.acBase + dexBonus;
        } else {
          ac = armor.acBase;
        }
      }
    }
    if (hasShield) {
      ac += 2;
    }

    // Bárbaro unarmored defense
    if (className === 'Bárbaro' && !armorName) {
      ac = 10 + dexMod + abilityMod(abilities.con);
      if (hasShield) ac += 2;
    }
    // Monje unarmored defense
    if (className === 'Monje' && !armorName && !hasShield) {
      ac = 10 + dexMod + abilityMod(abilities.wis);
    }

    return ac;
  };

  const handleSubmit = () => {
    const finalName = name.trim() || 'Sin nombre';
    const abilities = calculateFinalAbilities();
    const classDef = CLASSES[className] || CLASSES['Guerrero'];
    const conMod = abilityMod(abilities.con);

    // Auto-derive proficiencies from class + race + background + selectedTools
    // Incluye herramientas del trasfondo (auto-equipo) y la opción racial de herramienta
    const bgDef = BACKGROUND_EXTRAS[background];
    const bgTools = (bgDef?.tools || []).filter(t => !t.toLowerCase().includes('a elección'));
    const normalizedSelectedTools = Array.from(new Set([
      ...selectedTools,
      ...bgTools,
      ...(raceToolChoice ? [raceToolChoice] : [])
    ].filter(Boolean)));
    const profs = getCharacterProficiencies(className, race, background, normalizedSelectedTools);

    const c = blankCharacter();
    c.name = finalName;
    c.gender = gender;
    c.race = race;
c.raceChoiceA = raceChoiceA;
    c.raceChoiceB = raceChoiceB;
    c.raceExtraLanguage = extraLanguages.join(', ');
    c.extraLanguages = [...extraLanguages];
    c.raceSkillChoices = raceSkillChoices;
    c.raceAncestry = raceAncestry;
    c.raceToolChoice = raceToolChoice;
    c.raceCantrip = raceCantrip;
    c.background = background;
    c.className = className;
    c.level = level;
    c.abilities = abilities;
    c.hpMax = hpMaxFor(classDef.hitDie, level, conMod);
    c.hpCur = c.hpMax;
    c.hitDiceRemaining = level;
    c.proficientSkills = Array.from(new Set([...lockedSkills, ...proficientSkills]));
    c.selectedTools = normalizedSelectedTools;
    c.armorProf = profs.armor;
    c.weaponProf = profs.weapons;
    c.toolProf = profs.tools.join(', ');
c.languages = Array.from(new Set([...(profs.languages || []), ...extraLanguages])).join(', ');
    c.equippedArmor = selectedArmor;
    c.equippedShield = selectedShield;
    c.ac = computeAC(abilities, selectedArmor, selectedShield);


    // Build weapons from selection
    c.weapons = selectedWeapons.map(wName => {
      const entry = WEAPONS_CATALOG.find(w => w.name === wName);
      if (entry) return buildWeaponItem(entry);
      return { name: wName, ability: 'str' as AbilityKey, dice: '1d6', type: 'contundente', proficient: true, notes: '' };
    });

    // Build spells from selection
    const allowedCantrips = spellLimits.cantripsKnownMax > 0 ? selectedCantrips.slice(0, spellLimits.cantripsKnownMax) : [];
    const allowedSpells = spellLimits.spellsKnownOrPreparedMax > 0 ? selectedSpells.slice(0, spellLimits.spellsKnownOrPreparedMax) : [];

    const spells: SpellItem[] = [];
    for (const cName of allowedCantrips) {
      const cantrip = CANTRIPS_CATALOG.find(c => c.name === cName);
      spells.push({
        name: cName,
        level: 'Truco',
        notes: cantrip?.description || '',
        damageType: cantrip?.damageType,
        school: cantrip?.school,
      });
    }
    for (const sName of allowedSpells) {
      const spell = SPELLS_LV1_CATALOG.find(s => s.name === sName);
      spells.push({
        name: sName,
        level: '1',
        notes: spell?.description || '',
        damageType: spell?.damageType,
        school: spell?.school,
      });
    }

    // ── Hechizos/acciones raciales (Dracónido, Tiefling, Drow, Alto Elfo) ──
    const racialSpells = getRacialSpells(race, raceAncestry, raceCantrip, level);
    for (const rspell of racialSpells) {
      spells.push(rspell);
    }
    c.spellsKnown = spells;

    // 1. Build Equipment list for Inventory (Nombre, Cantidad, Descripción/Notas, Categoría)
    const equipList: EquipmentItem[] = [];
    const seenEquipment = new Set<string>();
    const addEquipmentItem = (name: string, qty: number, notes: string, category?: string) => {
      const key = name.trim().toLowerCase();
      if (!key || seenEquipment.has(key)) return;
      seenEquipment.add(key);
      equipList.push({ name, qty, notes, category });
    };

    const packDef = STARTING_PACKS.find(p => p.name === selectedPack) || STARTING_PACKS[0];
    if (packDef) {
      packDef.items.forEach(item => addEquipmentItem(item.name, item.qty, item.notes, item.category));
    }
    for (const toolName of normalizedSelectedTools) {
      const toolDef = TOOLS_CATALOG.find(t => t.name === toolName);
      const category = toolDef?.category === 'instrumento' ? 'Instrumento' : (toolDef?.category === 'kit' ? 'Kit' : 'Herramientas');
      const desc = toolDef?.description || `Herramienta de competencia especializada (${toolName}).`;
      addEquipmentItem(toolName, 1, desc, category);
    }
    for (const wName of selectedWeapons) {
      const w = WEAPONS_CATALOG.find(x => x.name === wName);
      if (w && w.properties.includes('munición')) {
        if (wName.includes('Arco')) {
          addEquipmentItem('Flechas', 20, 'Carcaj de munición para arco (20)', 'Consumible');
        } else if (wName.includes('Ballesta')) {
          addEquipmentItem('Virotes de ballesta', 20, 'Caja de munición para ballesta (20)', 'Consumible');
        } else if (wName.includes('Honda')) {
          addEquipmentItem('Balas de honda', 20, 'Bolsa de munición para honda (20)', 'Consumible');
        } else if (wName.includes('Cerbatana')) {
          addEquipmentItem('Dardos de cerbatana', 10, 'Funda de munición para cerbatana (10)', 'Consumible');
        }
      }
    }
    c.equipment = equipList;
    c.gold = startingGold;


    // 2. Build Equipped Gear list (Nombre, Ubicación/Zona equipada, Descripción, Propiedades)
    const gearList: EquippedGearItem[] = [];
    const seenGear = new Set<string>();
    const addGearItem = (name: string, slot: string, notes: string, properties: string, magical?: boolean) => {
      const key = name.trim().toLowerCase();
      if (!key || seenGear.has(key)) return;
      seenGear.add(key);
      gearList.push({ name, slot, notes, properties, magical });
    };

    if (selectedArmor) {
      const a = ARMOR_CATALOG.find(x => x.name === selectedArmor);
      const propsStr = a ? `CA ${a.acBase}${a.addDex ? ' + DES' : ''}${a.stealthDisadvantage ? ', Desventaja sigilo' : ''}` : '';
      addGearItem(selectedArmor, 'Torso', a ? `Armadura ${a.type}` : 'Armadura equipada', propsStr);
    }
    if (selectedShield) {
      addGearItem('Escudo', 'Mano Secundaria', 'Escudo protector', 'CA +2');
    }
    selectedWeapons.forEach((wName, idx) => {
      const w = WEAPONS_CATALOG.find(x => x.name === wName);
      const slot = idx === 0 ? 'Mano Principal' : (w?.range === 'a distancia' ? 'Espalda' : 'Mano Secundaria');
      addGearItem(wName, slot, w ? `${w.dice} ${w.damageType}` : '', w ? w.properties.join(', ') : '', w?.magical || false);
    });
    normalizedSelectedTools.forEach(tName => {
      const toolDef = TOOLS_CATALOG.find(t => t.name.toLowerCase() === tName.toLowerCase() || tName.toLowerCase().includes(t.name.toLowerCase()));
      const desc = toolDef?.description || 'Herramienta útil para labores especializadas.';
      addGearItem(tName, 'Cintura', desc, 'Útil / Trabajo');
    });
    c.equippedGear = gearList;

const intro = `${finalName}, ${gender.toLowerCase()} ${race.toLowerCase()} de vocación ${className.toLowerCase()}, se detiene un instante antes del umbral. La aventura todavía no tiene forma — decide tú cómo empieza.`;
    const memory = `La crónica de ${finalName} (${gender}, ${race}, ${className}, nivel ${level}) está por comenzar.`;
    onCreateCharacter(c, intro, memory);
  };

const handleQuickStart = () => {
    const c = blankCharacter();
    c.name = 'Kaelen Vent';
    c.gender = 'Masculino';
    c.race = 'Semielfo';
    c.raceChoiceA = 'str';
    c.raceChoiceB = 'dex';
    c.background = 'Forastero';
    c.className = 'Explorador';
    c.level = 3;
    c.abilities = { str: 13, dex: 17, con: 14, int: 10, wis: 15, cha: 12 };
    const conMod = abilityMod(c.abilities.con);
    c.hpMax = hpMaxFor(CLASSES['Explorador'].hitDie, 3, conMod);
    c.hpCur = c.hpMax;
    c.hitDiceRemaining = 3;
    c.ac = 14;
    c.proficientSkills = ['Sigilo', 'Percepción', 'Supervivencia'];
    c.equippedArmor = 'Cuero tachonado';
    c.selectedTools = ['Herramientas de cartógrafo'];
    c.gold = 25;

    // Auto-derive proficiencies
    const profs = getCharacterProficiencies('Explorador', 'Semielfo', 'Forastero', ['Herramientas de cartógrafo']);
    c.armorProf = profs.armor;
    c.weaponProf = profs.weapons;
    c.toolProf = profs.tools.join(', ');
    c.languages = profs.languages.join(', ');


    c.equipment = [
      { name: 'Mochila de explorador', qty: 1, notes: 'Capacidad de carga' },
      { name: 'Saco de dormir', qty: 1, notes: 'Para descansos' },
      { name: 'Raciones de viaje', qty: 5, notes: '1 por día' },
      { name: 'Cuerda de cáñamo (15m)', qty: 1, notes: 'Resistente' },
      { name: 'Antorcha', qty: 5, notes: 'Arde 1 hora' },
      { name: 'Odre de agua', qty: 1, notes: 'Agua potable' },
      { name: 'Cuero tachonado', qty: 1, notes: 'Armadura ligera (CA 12)' },
      { name: 'Arco corto', qty: 1, notes: '1d6 perforante' }
    ];
    c.equippedGear = [
      { name: 'Cuero tachonado', slot: 'Torso', notes: 'Armadura ligera', properties: 'CA 12 + DES' },
      { name: 'Arco corto', slot: 'Espalda', notes: '1d6 perforante', properties: 'munición, a dos manos' }
    ];
    c.weapons = [
      { name: 'Arco corto', ability: 'dex', dice: '1d6', type: 'perforante', proficient: true, notes: 'munición: 20 flechas', category: 'simple', damageType: 'perforante', properties: ['munición', 'a dos manos'], range: 'a distancia' }
    ];

    const intro = 'La niebla del amanecer cubre el sendero que sale de Umbraluz. Cargas tu arco al hombro y el bosque empieza a susurrar. ¿Qué haces?';
    const memory = 'La crónica comienza en las afueras del pueblo de Umbraluz, al amanecer, en el límite de un bosque.';
    onCreateCharacter(c, intro, memory);
  };

const usedPoints = Object.values(pointBuy).reduce((sum, v) => sum + POINTBUY_COST[v], 0);
  const remainingPoints = 27 - usedPoints;
  const isHalfElf = RACES[race]?.choice;

  // ── Idiomas adicionales: raza + trasfondo ──
  const raceExtraLangCount = RACES[race]?.extraLanguages || 0;
  const bgDef = BACKGROUND_EXTRAS[background];
  const bgExtraLangCount = (bgDef?.languages || []).reduce((sum, l) => {
    const m = l.match(/(\d+|Un|Dos|Tres|Cuatro|Cinco|Seis)\s*(idioma|idiomas)/i) || l.match(/(\d+|Un|Dos|Tres|Cuatro|Cinco|Seis)\s*(idioma|idiomas)/i);
    if (!m) return sum;
    const word = m[1].toLowerCase();
    const numMap: Record<string, number> = { un: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6 };
    return sum + (parseInt(word) || numMap[word] || 0);
  }, 0);
  const totalExtraLanguages = raceExtraLangCount + bgExtraLangCount;

  const toggleExtraLanguage = (lang: string) => {
    setExtraLanguages(prev => {
      if (prev.includes(lang)) {
        return prev.filter(l => l !== lang);
      }
      if (prev.length >= totalExtraLanguages) {
        return prev;
      }
      return [...prev, lang];
    });
  };

  // Filter cantrips/spells for current class
  const classCantrips = CANTRIPS_CATALOG.filter(c => c.classes.includes(className));
  const classSpells = SPELLS_LV1_CATALOG.filter(s => s.classes.includes(className));

  const steps: { key: CreationStep; label: string }[] = [
    { key: 'identity', label: '① Identidad' },
    { key: 'abilities', label: '② Atributos' },
    { key: 'skills', label: '③ Habilidades' },
    { key: 'equipment', label: '④ Equipo' },
    { key: 'review', label: '⑤ Revisión' },
  ];

  return (
    <div id="creation">
      <h2>Antes de cruzar el umbral…</h2>
      <p className="lead">Crea tu personaje. Todo lo que definas aquí va a vivir después en tu hoja, organizada en solapas, y va a guiar cómo tira los dados el motor y cómo narra el DM.</p>

      {/* Step navigation */}
      <div className="creation-steps">
        {steps.map(s => (
          <button
            key={s.key}
            className={`creation-step-btn ${currentStep === s.key ? 'active' : ''}`}
            onClick={() => setCurrentStep(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ══════ STEP 1: IDENTITY, RACE, CLASS, BACKGROUND ══════ */}
      {currentStep === 'identity' && (
        <div className="creation-section">
          <h3>Identidad y Orígenes</h3>

          {/* 1. Identidad básica */}
          <div className="subsection">
            <div className="block-label">👤 Identidad Básica</div>
            <div className="row">
              <div className="field">
                <label>Nombre</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Kaelen Vent" />
              </div>
              <div className="field">
                <label>Género</label>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div className="field">
                <label>Nivel inicial</label>
                <input type="number" min={1} max={20} value={level} onChange={e => setLevel(parseInt(e.target.value) || 1)} />
              </div>
            </div>
          </div>

          {/* 2. Raza y Subraza / Ascendencia / Linaje */}
          <div className="subsection">
            <div className="block-label">🧬 Raza y Linaje</div>
            <div className="row">
              <div className="field">
                <label>Raza Base</label>
                <select value={baseRace} onChange={e => {
                  const newBase = e.target.value;
                  setBaseRace(newBase);
                  const firstSub = BASE_RACES[newBase]?.subraces[0]?.name || newBase;
                  setRace(firstSub);
                  setExtraLanguages([]);
                  setRaceSkillChoices([]);
                  setRaceAncestry('');
                  setRaceToolChoice('');
                  setRaceCantrip('');
                }}>
                  {Object.keys(BASE_RACES).sort().map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>{getSubraceCategoryLabel(baseRace)}</label>
                <select value={race} onChange={e => {
                  setRace(e.target.value);
                  setExtraLanguages([]);
                  setRaceSkillChoices([]);
                  setRaceAncestry('');
                  setRaceToolChoice('');
                  setRaceCantrip('');
                }}>
                  {(BASE_RACES[baseRace]?.subraces || []).map(s => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bonificación opcional de atributos raciales (+1 / +1) */}
            {isHalfElf && (
              <div className="row" style={{ marginTop: '8px' }}>
                <div className="field">
                  <label>Bonificación racial +1 (opción A)</label>
                  <select value={raceChoiceA} onChange={e => setRaceChoiceA(e.target.value as AbilityKey)}>
                    {ABILITIES.map(a => <option key={a.key} value={a.key}>{a.full}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>Bonificación racial +1 (opción B)</label>
                  <select value={raceChoiceB} onChange={e => setRaceChoiceB(e.target.value as AbilityKey)}>
                    {ABILITIES.map(a => <option key={a.key} value={a.key}>{a.full}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* Tarjeta de Información de Raza / Subraza */}
            {(() => {
              const rdef: RaceDef | undefined = RACES[race];
              if (!rdef) return null;
              const sizeLabel = rdef.size === 'M' ? 'Mediano' : rdef.size === 'P' ? 'Pequeño' : rdef.size || '';
              return (
                <div className="race-info-panel" style={{ marginTop: '12px' }}>
                  <div className="race-info-header">🧬 Información de Raza: {race}</div>
                  {rdef.description && <p className="race-description">{rdef.description}</p>}
                  <div className="race-stats-grid">
                    {rdef.speed && <span className="race-stat-chip">🏃 Velocidad: {rdef.speed}m</span>}
                    {sizeLabel && <span className="race-stat-chip">📏 Tamaño: {sizeLabel}</span>}
                    {rdef.darkvision && <span className="race-stat-chip">👁️ Visión en oscuridad: {rdef.darkvision}m</span>}
                    {rdef.age && <span className="race-stat-chip">📅 Edad: {rdef.age}</span>}
                    {rdef.alignment && <span className="race-stat-chip">⚖️ Tendencia: {rdef.alignment}</span>}
                  </div>

                  {/* Idiomas */}
                  {rdef.languages && rdef.languages.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">🗣️ Idiomas raciales</div>
                      <div className="prof-chips-row">
                        {rdef.languages.map((l: string) => (
                          <span key={l} className="prof-chip lang-chip">{l}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resistencias */}
                  {(() => {
                    const derived = getRacialResistances(race, raceAncestry);
                    if (derived.length === 0) return null;
                    return (
                      <div className="race-detail-section">
                        <div className="race-detail-label">🛡️ Resistencias</div>
                        <div className="prof-chips-row">
                          {derived.map((res: string) => (
                            <span key={res} className="prof-chip resist-chip">✓ {res}</span>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Competencias de armas raciales */}
                  {rdef.weaponProf && rdef.weaponProf.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">⚔️ Competencias de armas raciales</div>
                      <div className="prof-chips-row">
                        {rdef.weaponProf.map((w: string) => (
                          <span key={w} className="prof-chip weapon-chip active">{w}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Competencias de armadura raciales */}
                  {rdef.armorProf && rdef.armorProf.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">🛡️ Competencias de armadura raciales</div>
                      <div className="prof-chips-row">
                        {rdef.armorProf.map((a: string) => (
                          <span key={a} className="prof-chip armor-chip active">{a}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Competencias de herramientas raciales */}
                  {rdef.toolProf && rdef.toolProf.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">🔧 Competencias de herramientas raciales</div>
                      <div className="prof-chips-row">
                        {rdef.toolProf.map((t: string) => (
                          <span key={t} className="prof-chip tool-chip active">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Competencias de habilidad raciales */}
                  {rdef.skillProf && rdef.skillProf.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">🎯 Competencias de habilidad raciales</div>
                      <div className="prof-chips-row">
                        {rdef.skillProf.map((s: string) => (
                          <span key={s} className="prof-chip skill-chip">✓ {s}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rasgos raciales */}
                  {rdef.traits && rdef.traits.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">✨ Rasgos Raciales</div>
                      <div className="race-traits-list">
                        {rdef.traits.map((trait: RaceTrait, idx: number) => (
                          <div key={idx} className="race-trait-card">
                            <div className="trait-card-name">{trait.name}</div>
                            <p className="trait-card-desc">{trait.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}



                  {/* Habilidades raciales adicionales */}
                  {(rdef.skillChoices && rdef.skillChoices.options && rdef.skillChoices.options.length > 0) && (
                    <div className="race-choice-row" style={{ marginTop: '10px' }}>
                      <label>🎯 Competencias de habilidad adicionales (elige {rdef.skillChoices.count})</label>
                      <div className="race-skill-choices">
                        {SKILLS.filter(s => rdef.skillChoices!.options.includes(s.name)).map(s => (
                          <label key={s.name} className={`tool-chip ${raceSkillChoices.includes(s.name) ? 'selected' : ''}`}>
                            <input
                              type="checkbox"
                              checked={raceSkillChoices.includes(s.name)}
                              onChange={() => {
                                setRaceSkillChoices(prev =>
                                  prev.includes(s.name)
                                    ? prev.filter(x => x !== s.name)
                                    : prev.length < (rdef.skillChoices?.count || 2)
                                      ? [...prev, s.name]
                                      : prev
                                );
                              }}
                            />
                            <span>{s.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Herramientas de artesano raciales */}
                  {(rdef.toolChoices && rdef.toolChoices.options && rdef.toolChoices.options.length > 0) && (
                    <div className="race-choice-row" style={{ marginTop: '10px' }}>
                      <label>🔧 Herramienta de artesano (a elección)</label>
                      <select value={raceToolChoice} onChange={e => setRaceToolChoice(e.target.value)}>
                        <option value="">— Elegir herramienta —</option>
                        {rdef.toolChoices.options.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Truco de Alto Elfo */}
                  {race === 'Alto Elfo' && (
                    <div className="race-choice-row" style={{ marginTop: '10px' }}>
                      <label>✨ Truco de Mago (rasgo élfico)</label>
                      <select value={raceCantrip} onChange={e => setRaceCantrip(e.target.value)}>
                        <option value="">— Elegir truco —</option>
                        {WIZARD_CANTRIPS.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>

          {/* 3. Clase del personaje y su Tarjeta de Información */}
          <div className="subsection">
            <div className="block-label">⚔️ Clase del Personaje</div>
            <div className="row">
              <div className="field">
                <label>Seleccionar Clase</label>
                <select value={className} onChange={e => {
                  setClassName(e.target.value);
                  setProficientSkills([]);
                  setSelectedTools([]);
                  setSelectedWeapons([]);
                  setSelectedCantrips([]);
                  setSelectedSpells([]);
                  setSelectedArmor('');
                  setSelectedShield(false);
                }}>
                  {Object.keys(CLASSES).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Tarjeta de Información de la Clase seleccionada */}
            {rec && (
              <div className="rec-panel" style={{ marginTop: '12px' }}>
                <div className="rec-header">💡 Información de Clase: {className}</div>
                <p className="rec-description">{rec.description}</p>
              </div>
            )}
          </div>

          {/* 4. Trasfondo del personaje y su Tarjeta de Información */}
          <div className="subsection">
            <div className="block-label">📜 Trasfondo del Personaje</div>
            <div className="field">
              <div className="bg-search-wrap">
                <input
                  type="text"
                  className="bg-search-input"
                  placeholder="Buscar trasfondo: Acólito, Soldado, Criminal, Forastero..."
                  value={bgOpen ? bgSearch : background}
                  onFocus={() => { setBgOpen(true); setBgSearch(background); }}
                  onClick={() => setBgOpen(true)}
                  onChange={e => { setBgSearch(e.target.value); setBgOpen(true); }}
                />
                {bgOpen && (
                  <div className="bg-search-dropdown">
                    {BACKGROUND_OPTIONS.map(bg => {
                      return (
                        <div
                          key={bg}
                          className={`bg-search-option ${background === bg ? 'selected' : ''}`}
                          onMouseDown={() => {
                            setBackground(bg);
                            setExtraLanguages([]);
                            setBgSearch(bg);
                            setBgOpen(false);
                          }}
                        >
                          <div className="bg-opt-name">{bg}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Tarjeta de Información del Trasfondo seleccionado */}
            {(() => {
              const bgDef = BACKGROUND_EXTRAS[background];
              if (!bgDef) return null;
              return (
                <div className="race-info-panel" style={{ marginTop: '12px' }}>
                  <div className="race-info-header">📜 Información de Trasfondo: {background}</div>
                  <p className="race-description">{bgDef.description}</p>
                  <div className="race-detail-section">
                    <div className="race-detail-label">🎯 Competencias de habilidades otorgadas</div>
                    <div className="prof-chips-row">
                      {bgDef.skills.map(s => <span key={s} className="prof-chip skill-chip">✓ {s}</span>)}
                    </div>
                  </div>
                  {bgDef.tools.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">🔧 Herramientas otorgadas</div>
                      <div className="prof-chips-row">
                        {bgDef.tools.map(t => <span key={t} className="prof-chip tool-chip">✓ {t}</span>)}
                      </div>
                    </div>
                  )}
                  {bgDef.languages.length > 0 && (
                    <div className="race-detail-section">
                      <div className="race-detail-label">🗣️ Idiomas otorgados</div>
                      <div className="prof-chips-row">
                        {bgDef.languages.map(l => <span key={l} className="prof-chip lang-chip">✓ {l}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ══════ STEP 2: ABILITIES ══════ */}
      {currentStep === 'abilities' && (
        <div className="creation-section">
          <h3>Generación de atributos</h3>
          <div className="method-tabs">
            <button className={method === 'standard' ? 'active' : ''} onClick={() => setMethod('standard')}>Standard Array</button>
            <button className={method === 'pointbuy' ? 'active' : ''} onClick={() => setMethod('pointbuy')}>Point Buy</button>
            <button className={method === 'rolled' ? 'active' : ''} onClick={() => setMethod('rolled')}>Tirada de dados</button>
            <button className={method === 'manual' ? 'active' : ''} onClick={() => setMethod('manual')}>Manual</button>
          </div>

          <div>
            {(method === 'standard' || method === 'rolled') && (
              <div>
                {method === 'rolled' && !rolledPool ? (
                  <button className="add-row-btn" onClick={handleRollPool}>🎲 Tirar 4d6 (descartando el menor) × 6</button>
                ) : (
                  <>
                    <div className="small-note" style={{ marginBottom: '8px' }}>
                      Valores disponibles: {(method === 'standard' ? standardPool : rolledPool || []).join(', ')}
                    </div>
                    {method === 'rolled' && (
                      <button className="add-row-btn" onClick={handleRollPool} style={{ marginBottom: '8px', fontSize: '0.62rem' }}>
                        🎲 Volver a tirar
                      </button>
                    )}
                    {ABILITIES.map(a => {
                      const available = getAvailableValues(a.key);
                      return (
                        <div key={a.key} className="assign-row">
                          <label>{a.label} <span className="assign-full">({a.full})</span></label>
                          <select
                            value={assignments[a.key] ?? ''}
                            onChange={e => setAssignments({ ...assignments, [a.key]: e.target.value ? parseInt(e.target.value) : null })}
                          >
                            <option value="">—</option>
                            {available.map((av, i) => (
                              <option key={`${av.value}-${i}`} value={av.value}>{av.value}</option>
                            ))}
                          </select>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            )}

            {method === 'pointbuy' && (
              <div>
                {ABILITIES.map(a => (
                  <div key={a.key} className="pb-row">
                    <label>{a.label}</label>
                    <button onClick={() => handlePointBuyChange(a.key, -1)}>−</button>
                    <span className="pbval">{pointBuy[a.key]}</span>
                    <button onClick={() => handlePointBuyChange(a.key, 1)}>+</button>
                  </div>
                ))}
                <div id="pb-remaining">Puntos restantes: {remainingPoints} / 27</div>
              </div>
            )}

            {method === 'manual' && (
              <div className="grid3">
                {ABILITIES.map(a => (
                  <div key={a.key} className="field">
                    <label>{a.label}</label>
                    <input
                      type="number"
                      value={manual[a.key]}
                      onChange={e => setManual({ ...manual, [a.key]: parseInt(e.target.value) || 10 })}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="small-note" style={{ marginTop: '8px' }}>
            Los valores finales ya incluirán la bonificación racial seleccionada.
          </p>

          {/* Preview final abilities */}
          <div className="abilities-preview">
            <div className="block-label">Vista previa (con raciales)</div>
            <div className="grid3" style={{ marginTop: '6px' }}>
              {ABILITIES.map(a => {
                const val = finalAbilities[a.key];
                const mod = abilityMod(val);
                return (
                  <div key={a.key} className="ability-box mini">
                    <div className="name">{a.label}</div>
                    <div className="mod">{mod >= 0 ? `+${mod}` : mod}</div>
                    <div className="score">{val}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="step-nav">
            <button className="step-prev-btn" onClick={() => setCurrentStep('identity')}>← Anterior</button>
            <button className="step-next-btn" onClick={() => setCurrentStep('skills')}>Siguiente →</button>
          </div>
        </div>
      )}

      {/* ══════ STEP 3: SKILLS + LANGUAGES + TOOLS + SPELLS ══════ */}
      {currentStep === 'skills' && (
        <div className="creation-section">
          <h3>Competencias, idiomas, herramientas y magia</h3>

          {/* Skill selection with stat labels */}
          <div className="subsection">
            <div className="block-label">
              Competencias de habilidades
              <span className="skill-count-badge">
                {classChosenSkills.length} / {getSkillCount()} elegidas
                {lockedSkills.length > 0 && (
                  <span className="bg-skill-badge">+ {lockedSkills.length} del trasfondo</span>
                )}
              </span>
            </div>
            {lockedSkills.length > 0 && (
              <div className="bg-skills-note">
                🔒 Las habilidades marcadas con candado provienen de tu trasfondo «{background}» y no consumen puntos de competencia.
              </div>
            )}
            {rec && rec.skills.length > 0 && (
              <button className="rec-apply-btn" onClick={handleApplyRecommendedSkills}>
                ✨ Aplicar recomendadas para {className}
              </button>
            )}
            <div className="skills-list">
              {SKILLS.map(s => {
                const abLabel = ABILITIES.find(a => a.key === s.ab)?.label || s.ab.toUpperCase();
                const mod = abilityMod(finalAbilities[s.ab]);
                const isRec = rec?.skills.includes(s.name);
                const isLocked = lockedSkills.includes(s.name);
                const isChecked = isLocked || proficientSkills.includes(s.name);
                const isAtLimit = !isLocked && !proficientSkills.includes(s.name) && classChosenSkills.length >= getSkillCount();
                return (
                  <div key={s.name} className={`skill-row-creation ${isRec && !isLocked ? 'recommended' : ''} ${isLocked ? 'locked-by-bg' : ''} ${isAtLimit ? 'at-limit' : ''}`}>
                    <label style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1, opacity: isAtLimit ? 0.45 : 1 }}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        disabled={isLocked || isAtLimit}
                        onChange={() => handleToggleSkill(s.name)}
                      />
                      <span className="skill-name-label">{s.name}</span>
                      <span className="skill-stat-badge" title={ABILITIES.find(a => a.key === s.ab)?.full}>
                        {abLabel}
                      </span>
                      <span className={`skill-mod-preview ${mod >= 0 ? 'positive' : 'negative'}`}>
                        {mod >= 0 ? `+${mod}` : mod}
                      </span>
                    </label>
                    {isLocked && <span className="locked-bg-tag" title={`Otorgada por trasfondo: ${background}`}>🔒 {background}</span>}
                    {isRec && !isLocked && <span className="rec-star" title="Recomendada para esta clase">★</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Elección de Idiomas */}
          <div className="subsection">
            <div className="block-label">
              🗣️ Elección de Idiomas
              {totalExtraLanguages > 0 && (
                <span className="skill-count-badge">
                  {extraLanguages.length} / {totalExtraLanguages} elegidos
                </span>
              )}
            </div>

            <div className="bg-skills-note" style={{ marginBottom: '10px' }}>
              🗣️ <strong>Idiomas por defecto ({race}):</strong> {(RACES[race]?.languages || ['Común']).join(', ')}
              {bgDef?.languages && bgDef.languages.length > 0 && (
                <span> | <strong>Del trasfondo ({background}):</strong> {bgDef.languages.join(', ')}</span>
              )}
            </div>

            {totalExtraLanguages > 0 ? (
              <div>
                <div className="small-note" style={{ marginBottom: '8px' }}>
                  Selecciona {totalExtraLanguages} {totalExtraLanguages === 1 ? 'idioma adicional' : 'idiomas adicionales'} según tu raza y trasfondo:
                </div>
                <div className="race-skill-choices" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {LANGUAGE_OPTIONS.filter(l => l !== 'Común' && !(RACES[race]?.languages || []).includes(l)).map(l => {
                    const isSelected = extraLanguages.includes(l);
                    const isDisabled = !isSelected && extraLanguages.length >= totalExtraLanguages;
                    return (
                      <label key={l} className={`tool-chip ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          disabled={isDisabled}
                          onChange={() => toggleExtraLanguage(l)}
                        />
                        <span>{l}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flavor" style={{ fontSize: '0.8rem', color: 'var(--parchment-dim)' }}>
                Tu raza y trasfondo ya determinan tus idiomas conocidos. No se requieren elecciones adicionales.
              </div>
            )}
          </div>

{/* Tools selection */}
          <div className="subsection">
            <div className="block-label">Herramientas</div>
            {rec && rec.tools.length > 0 && (
              <button className="rec-apply-btn" onClick={handleApplyRecommendedTools}>
                ✨ Aplicar recomendadas para {className}
              </button>
            )}

            {/* Herramientas fijas del trasfondo (auto-equipadas) */}
            {(() => {
              const bgDef = BACKGROUND_EXTRAS[background];
              if (!bgDef || !bgDef.tools || bgDef.tools.length === 0) return null;
              return (
                <div className="bg-fixed-tools-row" style={{ marginBottom: '10px' }}>
                  <div className="small-note" style={{ fontWeight: 600, marginBottom: '4px' }}>
                    🔧 Herramientas del trasfondo «{background}» (fijas, se equipan automáticamente):
                  </div>
                  <div className="prof-chips-row">
                    {bgDef.tools.map(t => (
                      <span key={t} className="prof-chip tool-chip fixed">✓ {t}</span>
                    ))}
                  </div>
                </div>
              );
            })()}
            <div className="tools-grid">
              {(['kit', 'instrumento', 'artesano', 'juego'] as const).map(cat => {
                const tools = TOOLS_CATALOG.filter(t => t.category === cat);
                const catLabels: Record<string, string> = {
                  kit: '🔧 Kits y herramientas especiales',
                  instrumento: '🎵 Instrumentos musicales',
                  artesano: '⚒️ Herramientas de artesano',
                  juego: '🎲 Juegos'
                };
                const limits = getToolCategoryLimits(className, race, background);
                const catLimit = limits[cat] || 1;
                const currentCount = selectedTools.filter(t => resolveToolCategory(t) === cat).length;
                const atLimit = currentCount >= catLimit;
                return (
                  <div key={cat} className="tool-category">
                    <div className="tool-cat-label">
                      {catLabels[cat]}
                      <span className="tool-limit-badge">
                        {currentCount}/{catLimit}
                      </span>
                    </div>
                    <div className="tool-items">
                      {tools.map(t => {
                        const isRecTool = rec?.tools.includes(t.name);
                        const isSelected = selectedTools.includes(t.name);
                        const isDisabled = !isSelected && atLimit;
                        return (
                          <label key={t.name} className={`tool-chip ${isSelected ? 'selected' : ''} ${isRecTool ? 'recommended' : ''} ${isDisabled ? 'disabled' : ''}`}>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              disabled={isDisabled}
                              onChange={() => handleToggleTool(t.name)}
                            />
                            <span>{t.name}</span>
                            {isRecTool && <span className="rec-star">★</span>}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

{/* Ventajas y bonificaciones raciales */}
          <div className="subsection">
            <div className="block-label">🛡️ Ventajas y Bonificaciones</div>
            {(() => {
              const rdef = RACES[race];
              if (!rdef) return null;
              const resistances = getRacialResistances(race, raceAncestry);
              const items: { label: string; value: string }[] = [];
              if (resistances.length > 0) {
                items.push({ label: 'Resistencias al daño', value: resistances.join(', ') });
              }
              if (rdef.darkvision) {
                items.push({ label: 'Visión en la oscuridad', value: `${rdef.darkvision} m` });
              }
              if (rdef.traits) {
                for (const t of rdef.traits) {
                  if (t.type === 'defense' || t.type === 'senses' || t.type === 'movement') {
                    items.push({ label: t.name, value: t.description });
                  }
                }
              }
              if (items.length === 0) {
                return <div className="flavor">Esta raza no otorga ventajas o bonificaciones adicionales.</div>;
              }
              return (
                <div className="race-advantage-list">
                  {items.map((it, idx) => (
                    <div key={idx} className="race-advantage-item">
                      <span className="advantage-label">{it.label}</span>
                      <span className="advantage-value">{it.value}</span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Racial Spells & Cantrips (granted by race, locked) */}
          {(() => {
            const racialSpells = getRacialSpells(race, raceAncestry, raceCantrip, level);
            if (racialSpells.length === 0) return null;
            return (
              <div className="subsection">
                <div className="block-label">✨ Conjuros y Magia Racial (Herencia de {race})</div>
                <div className="bg-skills-note" style={{ marginBottom: '10px' }}>
                  🔒 Los siguientes trucos y conjuros se aprenden automáticamente por tu raza (<b>{race}</b>). Vienen marcados con candado y no consumen tus límites de clase.
                </div>
                <div className="spell-grid">
                  {racialSpells.map(rspell => (
                    <div key={rspell.name} className="spell-chip selected locked-racial" style={{ borderColor: 'var(--brass)', background: 'var(--card-bg)', cursor: 'default' }}>
                      <input type="checkbox" checked={true} disabled={true} />
                      <div className="spell-chip-content">
                        <span className="spell-chip-name">{rspell.name}</span>
                        <span className="spell-chip-meta">
                          {rspell.damageType && (
                            <span className="dmg-badge-small" style={{ color: `var(--dmg-${rspell.damageType}, var(--parchment-dim))` }}>
                              {DAMAGE_TYPE_EMOJI[rspell.damageType] || ''} {rspell.damageType}
                            </span>
                          )}
                          <span className="spell-school">{rspell.notes || 'Magia racial'}</span>
                        </span>
                      </div>
                      <span className="locked-bg-tag" title={`Otorgado por rasgo racial de ${race}`}>🔒 {race}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Cantrips & Spells (for class spellcasters) */}
          {cdef.spellcasting && (
            <div className="subsection">
              <div className="block-label">Trucos y hechizos iniciales de clase ({className})</div>
              <div className="small-note" style={{ marginBottom: '8px' }}>
                Selección actual de clase: {selectedCantrips.length} truco(s) / {selectedSpells.length} hechizo(s). Límite por nivel: {spellLimits.cantripsKnownMax > 0 ? `${spellLimits.cantripsKnownMax} truco(s)` : '0 trucos'} y {spellLimits.spellsKnownOrPreparedMax > 0 ? `${spellLimits.spellsKnownOrPreparedMax} hechizo(s)` : '0 hechizos'}.
              </div>
              {rec && (rec.cantrips.length > 0 || rec.spells.length > 0) && (
                <button className="rec-apply-btn" onClick={handleApplyRecommendedSpells}>
                  ✨ Aplicar recomendados para {className}
                </button>
              )}

              {classCantrips.length > 0 && (
                <>
                  <div className="spell-section-label">Trucos de clase (nivel 0) {spellLimits.cantripsKnownMax > 0 ? `· máx. ${spellLimits.cantripsKnownMax}` : ''}</div>
                  <div className="spell-grid">
                    {classCantrips.map(c => {
                      const isRecCantrip = rec?.cantrips.includes(c.name);
                      return (
                        <label key={c.name} className={`spell-chip ${selectedCantrips.includes(c.name) ? 'selected' : ''} ${isRecCantrip ? 'recommended' : ''}`}>
                          <input
                            type="checkbox"
                            checked={selectedCantrips.includes(c.name)}
                            disabled={!selectedCantrips.includes(c.name) && spellLimits.cantripsKnownMax > 0 && selectedCantrips.length >= spellLimits.cantripsKnownMax}
                            onChange={() => handleToggleCantrip(c.name)}
                          />
                          <div className="spell-chip-content">
                            <span className="spell-chip-name">{c.name}</span>
                            <span className="spell-chip-meta">
                              {c.damageType && (
                                <span className="dmg-badge-small" style={{ color: `var(--dmg-${c.damageType}, var(--parchment-dim))` }}>
                                  {DAMAGE_TYPE_EMOJI[c.damageType] || ''} {c.damageType}
                                </span>
                              )}
                              <span className="spell-school">{c.school}</span>
                            </span>
                            <span className="spell-chip-desc">{c.description}</span>
                          </div>
                          {isRecCantrip && <span className="rec-star">★</span>}
                        </label>
                      );
                    })}
                  </div>
                </>
              )}

              {classSpells.length > 0 && (
                <>
                  <div className="spell-section-label">Hechizos de clase de nivel 1 {spellLimits.spellsKnownOrPreparedMax > 0 ? `· máx. ${spellLimits.spellsKnownOrPreparedMax}` : ''}</div>
                  <div className="spell-grid">
                    {classSpells.map(s => {
                      const isRecSpell = rec?.spells.includes(s.name);
                      return (
                        <label key={s.name} className={`spell-chip ${selectedSpells.includes(s.name) ? 'selected' : ''} ${isRecSpell ? 'recommended' : ''}`}>
                          <input
                            type="checkbox"
                            checked={selectedSpells.includes(s.name)}
                            disabled={!selectedSpells.includes(s.name) && spellLimits.spellsKnownOrPreparedMax > 0 && selectedSpells.length >= spellLimits.spellsKnownOrPreparedMax}
                            onChange={() => handleToggleSpell(s.name)}
                          />
                          <div className="spell-chip-content">
                            <span className="spell-chip-name">{s.name}</span>
                            <span className="spell-chip-meta">
                              {s.damageType && (
                                <span className="dmg-badge-small">
                                  {DAMAGE_TYPE_EMOJI[s.damageType] || ''} {s.damageType}
                                </span>
                              )}
                              <span className="spell-school">{s.school}</span>
                              {s.ritual && <span className="ritual-badge">ritual</span>}
                            </span>
                            <span className="spell-chip-desc">{s.description}</span>
                          </div>
                          {isRecSpell && <span className="rec-star">★</span>}
                        </label>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="step-nav">
            <button className="step-prev-btn" onClick={() => setCurrentStep('abilities')}>← Anterior</button>
            <button className="step-next-btn" onClick={() => setCurrentStep('equipment')}>Siguiente →</button>
          </div>
        </div>
      )}

      {/* ══════ STEP 4: EQUIPMENT ══════ */}
      {currentStep === 'equipment' && (
        <div className="creation-section">
          <h3>Equipo inicial</h3>

          {/* Starting Pack Selection */}
          <div className="subsection">
            <div className="block-label">🎒 Pack de aventuras inicial</div>
            <div className="pack-grid">
              {STARTING_PACKS.map(p => (
                <label key={p.name} className={`armor-option ${selectedPack === p.name ? 'selected' : ''}`}>
                  <input type="radio" name="startingPack" checked={selectedPack === p.name} onChange={() => setSelectedPack(p.name)} />
                  <div className="armor-option-content">
                    <span className="armor-option-name">{p.name}</span>
                    <span className="armor-option-details" style={{ marginTop: '4px', display: 'block' }}>{p.description}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Starting Gold */}
          <div className="subsection">
            <div className="block-label">🪙 Monedas iniciales</div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div className="field" style={{ maxWidth: '180px' }}>
                <label>Piezas de Oro (PO)</label>
                <input type="number" min={0} value={startingGold} onChange={e => setStartingGold(parseInt(e.target.value) || 0)} />
              </div>
              <span className="small-note" style={{ alignSelf: 'center', marginTop: '12px' }}>
                Fondo inicial para alimentos, posadas y compras durante la aventura.
              </span>
            </div>
          </div>

          {/* Armor selection */}
          <div className="subsection">
            <div className="block-label">🛡️ Armadura</div>
            <div className="armor-grid">
              <label className={`armor-option ${selectedArmor === '' ? 'selected' : ''}`}>
                <input type="radio" name="armor" checked={selectedArmor === ''} onChange={() => setSelectedArmor('')} />
                <div className="armor-option-content">
                  <span className="armor-option-name">Sin armadura</span>
                  <span className="armor-option-ac">CA 10 + DES{className === 'Bárbaro' ? ' + CON' : className === 'Monje' ? ' + SAB' : ''}</span>
                </div>
              </label>
              {ARMOR_CATALOG.filter(a => ['Túnica de aprendiz', 'Cuero', 'Cuero tachonado', 'Cota de escamas', 'Cota de malla'].includes(a.name)).map(a => {
                const isRecArmor = rec?.armor.includes(a.name);
                const isProf = isArmorProficient(a.name, a.type, className, race, background);
                return (
                  <label key={a.name} className={`armor-option ${selectedArmor === a.name ? 'selected' : ''} ${isRecArmor ? 'recommended' : ''}`}>
                    <input type="radio" name="armor" checked={selectedArmor === a.name} onChange={() => setSelectedArmor(a.name)} />
                    <div className="armor-option-content">
                      <div className="armor-option-top">
                        <span className="armor-option-name">{a.name}</span>
                        <span className={`armor-type-badge ${a.type}`}>{a.type}</span>
                        {isProf ? (
                          <span className="prof-badge star" title="Competencia otorgada por tu Clase, Raza o Trasfondo">⭐ Competente</span>
                        ) : (
                          <span className="prof-badge non-prof" title="⚠️ Sin competencia: Otorga desventaja en tiradas de FUE/DES y bloquea conjuros">⚠️ Sin competencia</span>
                        )}
                        {isRecArmor && <span className="rec-star">★</span>}
                      </div>
                      <span className="armor-option-ac">
                        CA {a.acBase}{a.addDex ? ` + DES${a.maxDex !== undefined ? ` (máx ${a.maxDex})` : ''}` : ''}
                      </span>
                      <span className="armor-option-details">
                        {a.stealthDisadvantage && '⚠️ Desventaja sigilo'}
                        {a.strRequirement && ` · FUE ${a.strRequirement} req.`}
                        {' · '}{a.cost}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="shield-toggle">
              {(() => {
                const isProfShield = isArmorProficient('Escudo', 'escudo', className, race, background);
                return (
                  <label className={`tool-chip ${selectedShield ? 'selected' : ''}`}>
                    <input type="checkbox" checked={selectedShield} onChange={e => setSelectedShield(e.target.checked)} />
                    <span>🛡️ Escudo (+2 CA)</span>
                    {isProfShield ? (
                      <span className="prof-badge star" style={{ marginLeft: '6px' }}>⭐ Competente</span>
                    ) : (
                      <span className="prof-badge non-prof" style={{ marginLeft: '6px' }}>⚠️ Sin competencia</span>
                    )}
                  </label>
                );
              })()}
            </div>
          </div>

          {/* Weapons selection */}
          <div className="subsection">
            <div className="block-label">⚔️ Armas</div>
            {rec && rec.weapons.length > 0 && (
              <button className="rec-apply-btn" onClick={handleApplyRecommendedWeapons}>
                ✨ Aplicar recomendadas para {className}
              </button>
            )}

            {(['simple', 'marcial'] as const).map(cat => {
              const catLabel = cat === 'simple' ? 'Armas simples (básicas)' : 'Armas marciales (básicas)';
              const weapons = WEAPONS_CATALOG.filter(w => w.category === cat && (w.rarity === 'común' || !w.rarity));
              return (
                <div key={cat} className="weapon-category-section">
                  <div className="weapon-cat-label">{catLabel}</div>
                  <div className="weapon-grid">
                    {weapons.map(w => {
                      const isRecWeapon = rec?.weapons.includes(w.name);
                      const isSelected = selectedWeapons.includes(w.name);
                      const isProf = isWeaponProficient(w.name, w.category, className, race, background);
                      return (
                        <label key={w.name} className={`weapon-card ${isSelected ? 'selected' : ''} ${isRecWeapon ? 'recommended' : ''}`}>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleWeapon(w.name)}
                          />
                          <div className="weapon-card-content">
                            <div className="weapon-card-top">
                              <span className="weapon-card-name">{w.name}</span>
                              {isProf ? (
                                <span className="prof-badge star" title="Competente por Clase, Raza o Trasfondo">⭐ Competente</span>
                              ) : (
                                <span className="prof-badge non-prof" title="⚠️ Sin competencia: No sumas tu bono de competencia al ataque">⚠️ Sin competencia</span>
                              )}
                              {isRecWeapon && <span className="rec-star">★</span>}
                            </div>
                            <div className="weapon-card-stats">
                              <span className="weapon-dice">{w.dice}</span>
                              <span className="weapon-dmg-type">
                                {DAMAGE_TYPE_EMOJI[w.damageType] || ''} {w.damageType}
                              </span>
                            </div>
                            <div className="weapon-card-props">
                              {w.properties.map(p => (
                                <span key={p} className="weapon-prop-chip">{p}</span>
                              ))}
                              {w.versatileDice && <span className="weapon-prop-chip">versátil {w.versatileDice}</span>}
                            </div>
                            {w.ammoRange && <div className="weapon-range-note">Alcance: {w.ammoRange}</div>}
                            {w.throwRange && !w.ammoRange && <div className="weapon-range-note">Lanzamiento: {w.throwRange}</div>}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="step-nav">
            <button className="step-prev-btn" onClick={() => setCurrentStep('skills')}>← Anterior</button>
            <button className="step-next-btn" onClick={() => setCurrentStep('review')}>Siguiente →</button>
          </div>
        </div>
      )}

      {/* ══════ STEP 5: REVIEW ══════ */}
      {currentStep === 'review' && (
        <div className="creation-section">
          <h3>Resumen del personaje</h3>
          <div className="review-grid">
            <div className="review-block">
<div className="review-label">Identidad</div>
              <div className="review-value">{name || 'Sin nombre'} · {gender} · {race} · {className} · Nivel {level}</div>
              <div className="review-value" style={{ fontSize: '0.78rem' }}>Trasfondo: {background || '—'}</div>
            </div>
            <div className="review-block">
              <div className="review-label">Atributos (finales)</div>
              <div className="review-abilities">
                {ABILITIES.map(a => (
                  <span key={a.key} className="review-ability">
                    <strong>{a.label}</strong> {finalAbilities[a.key]} ({abilityMod(finalAbilities[a.key]) >= 0 ? '+' : ''}{abilityMod(finalAbilities[a.key])})
                  </span>
                ))}
              </div>
            </div>
            <div className="review-block">
              <div className="review-label">Competencias ({proficientSkills.length})</div>
              <div className="review-value">{proficientSkills.length > 0 ? proficientSkills.join(', ') : '— Ninguna seleccionada —'}</div>
            </div>
{selectedTools.length > 0 && (
              <div className="review-block">
                <div className="review-label">Herramientas</div>
                <div className="review-value">{selectedTools.join(', ')}</div>
              </div>
            )}
            {(() => {
              const resistances = getRacialResistances(race, raceAncestry);
              if (resistances.length === 0) return null;
              return (
                <div className="review-block">
                  <div className="review-label">🛡️ Ventajas y Resistencias</div>
                  <div className="review-value">{resistances.join(', ')}</div>
                </div>
              );
            })()}
            <div className="review-block">
              <div className="review-label">Armadura</div>
              <div className="review-value">
                {selectedArmor || 'Sin armadura'}{selectedShield ? ' + Escudo' : ''} · CA estimada: {computeAC(finalAbilities, selectedArmor, selectedShield)}
              </div>
            </div>
            {selectedWeapons.length > 0 && (
              <div className="review-block">
                <div className="review-label">Armas ({selectedWeapons.length})</div>
                <div className="review-value">{selectedWeapons.join(', ')}</div>
              </div>
            )}
            {(selectedCantrips.length > 0 || selectedSpells.length > 0) && (
              <div className="review-block">
                <div className="review-label">Magia</div>
                {selectedCantrips.length > 0 && <div className="review-value">Trucos: {selectedCantrips.join(', ')}</div>}
                {selectedSpells.length > 0 && <div className="review-value">Hechizos nv.1: {selectedSpells.join(', ')}</div>}
              </div>
            )}
          </div>

          <button className="cta" onClick={handleSubmit}>Crear personaje y cruzar el umbral</button>
          <button className="quickstart" onClick={handleQuickStart}>…o probar rápido con un personaje de ejemplo (Kaelen Vent)</button>
        </div>
      )}
    </div>
  );
};
