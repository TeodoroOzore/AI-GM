import React, { useState, useMemo } from 'react';
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
} from '../types';

type CharacterCreationProps = {
  onCreateCharacter: (character: CharacterSheet, introMessage: string, worldMemory: string) => void;
};

type CreationMethod = 'standard' | 'pointbuy' | 'rolled' | 'manual';
type CreationStep = 'identity' | 'abilities' | 'skills' | 'equipment' | 'review';

export const CharacterCreation: React.FC<CharacterCreationProps> = ({ onCreateCharacter }) => {
  const [name, setName] = useState('Kaelen Vent');
  const [level, setLevel] = useState(1);
  const [race, setRace] = useState('Humano');
  const [className, setClassName] = useState('Guerrero');
  const [background, setBackground] = useState('Forastero');
  const [raceChoiceA, setRaceChoiceA] = useState<AbilityKey>('str');
  const [raceChoiceB, setRaceChoiceB] = useState<AbilityKey>('dex');

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

  const rollAbilityScore4d6 = () => {
    const rolls = [secureRandInt(6), secureRandInt(6), secureRandInt(6), secureRandInt(6)];
    rolls.sort((a, b) => a - b);
    rolls.shift();
    return rolls.reduce((a, b) => a + b, 0);
  };

  const handleRollPool = () => {
    const newPool = ABILITIES.map(() => rollAbilityScore4d6());
    setRolledPool(newPool);
    setAssignments({ str: null, dex: null, con: null, int: null, wis: null, cha: null });
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

  const handleToggleSkill = (skillName: string) => {
    setProficientSkills(prev =>
      prev.includes(skillName) ? prev.filter(s => s !== skillName) : [...prev, skillName]
    );
  };

  const handleToggleTool = (toolName: string) => {
    setSelectedTools(prev =>
      prev.includes(toolName) ? prev.filter(t => t !== toolName) : [...prev, toolName]
    );
  };

  const handleToggleWeapon = (weaponName: string) => {
    setSelectedWeapons(prev =>
      prev.includes(weaponName) ? prev.filter(w => w !== weaponName) : [...prev, weaponName]
    );
  };

  const handleToggleCantrip = (name: string) => {
    setSelectedCantrips(prev =>
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const handleToggleSpell = (name: string) => {
    setSelectedSpells(prev =>
      prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
    );
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
      setProficientSkills(prev => {
        const merged = new Set([...prev, ...rec.skills.slice(0, getSkillCount())]);
        return Array.from(merged);
      });
    }
  };

  const handleApplyRecommendedTools = () => {
    if (rec) {
      setSelectedTools(prev => {
        const merged = new Set([...prev, ...rec.tools]);
        return Array.from(merged);
      });
    }
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
        const merged = new Set([...prev, ...rec.cantrips]);
        return Array.from(merged);
      });
      setSelectedSpells(prev => {
        const merged = new Set([...prev, ...rec.spells]);
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
    const profs = getCharacterProficiencies(className, race, background, selectedTools);

    const c = blankCharacter();
    c.name = finalName;
    c.race = race;
    c.raceChoiceA = raceChoiceA;
    c.raceChoiceB = raceChoiceB;
    c.background = background;
    c.className = className;
    c.level = level;
    c.abilities = abilities;
    c.hpMax = hpMaxFor(classDef.hitDie, level, conMod);
    c.hpCur = c.hpMax;
    c.hitDiceRemaining = level;
    c.proficientSkills = [...proficientSkills];
    c.selectedTools = [...selectedTools];
    c.armorProf = profs.armor;
    c.weaponProf = profs.weapons;
    c.toolProf = profs.tools.join(', ');
    c.languages = profs.languages.join(', ');
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
    const spells: SpellItem[] = [];
    for (const cName of selectedCantrips) {
      const cantrip = CANTRIPS_CATALOG.find(c => c.name === cName);
      spells.push({
        name: cName,
        level: 'Truco',
        notes: cantrip?.description || '',
        damageType: cantrip?.damageType,
        school: cantrip?.school,
      });
    }
    for (const sName of selectedSpells) {
      const spell = SPELLS_LV1_CATALOG.find(s => s.name === sName);
      spells.push({
        name: sName,
        level: '1',
        notes: spell?.description || '',
        damageType: spell?.damageType,
        school: spell?.school,
      });
    }
    c.spellsKnown = spells;

    // 1. Build Equipment list for Inventory (Nombre, Cantidad, Descripción/Notas)
    const equipList: EquipmentItem[] = [];
    const packDef = STARTING_PACKS.find(p => p.name === selectedPack) || STARTING_PACKS[0];
    if (packDef) {
      equipList.push(...packDef.items.map(item => ({ ...item })));
    }
    for (const toolName of selectedTools) {
      equipList.push({ name: toolName, qty: 1, notes: 'Herramienta de competencia' });
    }
    if (selectedArmor) {
      const a = ARMOR_CATALOG.find(x => x.name === selectedArmor);
      equipList.push({ name: selectedArmor, qty: 1, notes: a ? `Armadura ${a.type} (CA ${a.acBase})` : 'Armadura' });
    }
    if (selectedShield) {
      equipList.push({ name: 'Escudo', qty: 1, notes: '+2 a la CA' });
    }
    for (const wName of selectedWeapons) {
      const w = WEAPONS_CATALOG.find(x => x.name === wName);
      equipList.push({ name: wName, qty: 1, notes: w ? `${w.dice} ${w.damageType}` : 'Arma' });
    }
    c.equipment = equipList;
    c.gold = startingGold;

    // 2. Build Equipped Gear list (Nombre, Ubicación/Zona equipada, Descripción, Propiedades)
    const gearList: EquippedGearItem[] = [];
    if (selectedArmor) {
      const a = ARMOR_CATALOG.find(x => x.name === selectedArmor);
      const propsStr = a ? `CA ${a.acBase}${a.addDex ? ' + DES' : ''}${a.stealthDisadvantage ? ', Desventaja sigilo' : ''}` : '';
      gearList.push({
        name: selectedArmor,
        slot: 'Torso',
        notes: a ? `Armadura ${a.type}` : 'Armadura equipada',
        properties: propsStr
      });
    }
    if (selectedShield) {
      gearList.push({
        name: 'Escudo',
        slot: 'Mano Secundaria',
        notes: 'Escudo protector',
        properties: 'CA +2'
      });
    }
    selectedWeapons.forEach((wName, idx) => {
      const w = WEAPONS_CATALOG.find(x => x.name === wName);
      const slot = idx === 0 ? 'Mano Principal' : (w?.range === 'a distancia' ? 'Espalda' : 'Mano Secundaria');
      gearList.push({
        name: wName,
        slot,
        notes: w ? `${w.dice} ${w.damageType}` : '',
        properties: w ? w.properties.join(', ') : '',
        magical: w?.magical || false
      });
    });
    selectedTools.forEach(tName => {
      gearList.push({
        name: tName,
        slot: 'Cintura',
        notes: 'Herramienta activa',
        properties: 'Competencia'
      });
    });
    c.equippedGear = gearList;

    const intro = `${finalName}, ${race.toLowerCase()} de vocación ${className.toLowerCase()}, se detiene un instante antes del umbral. La aventura todavía no tiene forma — decidí vos cómo empieza.`;
    const memory = `La crónica de ${finalName} (${race}, ${className}, nivel ${level}) está por comenzar.`;
    onCreateCharacter(c, intro, memory);
  };

  const handleQuickStart = () => {
    const c = blankCharacter();
    c.name = 'Kaelen Vent';
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

    const intro = 'La niebla del amanecer cubre el sendero que sale de Umbraluz. Cargás tu arco al hombro y el bosque empieza a susurrar. ¿Qué hacés?';
    const memory = 'La crónica comienza en las afueras del pueblo de Umbraluz, al amanecer, en el límite de un bosque.';
    onCreateCharacter(c, intro, memory);
  };

  const usedPoints = Object.values(pointBuy).reduce((sum, v) => sum + POINTBUY_COST[v], 0);
  const remainingPoints = 27 - usedPoints;
  const isHalfElf = RACES[race]?.choice;

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
      <p className="lead">Creá tu personaje. Todo lo que definas acá va a vivir después en tu hoja, organizada en solapas, y va a guiar cómo tira los dados el motor y cómo narra el DM.</p>

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

      {/* ══════ STEP 1: IDENTITY ══════ */}
      {currentStep === 'identity' && (
        <div className="creation-section">
          <h3>Identidad</h3>
          <div className="row">
            <div className="field">
              <label>Nombre</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Kaelen Vent" />
            </div>
            <div className="field">
              <label>Nivel inicial</label>
              <input type="number" min={1} max={20} value={level} onChange={e => setLevel(parseInt(e.target.value) || 1)} />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>Raza</label>
              <select value={race} onChange={e => setRace(e.target.value)}>
                {Object.keys(RACES).map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Clase</label>
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

          {isHalfElf && (
            <div className="row">
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

          <div className="field" style={{ marginTop: '6px' }}>
            <label>Trasfondo</label>
            <input type="text" list="bg-list" value={background} onChange={e => setBackground(e.target.value)} placeholder="Acólito, Soldado, Criminal..." />
            <datalist id="bg-list">
              <option value="Acólito" />
              <option value="Criminal" />
              <option value="Forastero" />
              <option value="Sabio" />
              <option value="Soldado" />
              <option value="Charlatán" />
              <option value="Ermitaño" />
              <option value="Artesano Gremial" />
              <option value="Héroe del Pueblo" />
              <option value="Noble" />
              <option value="Marino" />
              <option value="Huérfano" />
            </datalist>
          </div>

          {/* Class recommendation summary */}
          {rec && (
            <div className="rec-panel">
              <div className="rec-header">💡 Descripción de clase: {className}</div>
              <p className="rec-description">{rec.description}</p>
            </div>
          )}

          <div className="step-nav">
            <span />
            <button className="step-next-btn" onClick={() => setCurrentStep('abilities')}>Siguiente →</button>
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

      {/* ══════ STEP 3: SKILLS + TOOLS + SPELLS ══════ */}
      {currentStep === 'skills' && (
        <div className="creation-section">
          <h3>Competencias, herramientas y magia</h3>

          {/* Skill selection with stat labels */}
          <div className="subsection">
            <div className="block-label">
              Competencias de habilidades
              <span className="skill-count-badge">
                {proficientSkills.length} / {getSkillCount()} sugeridas
              </span>
            </div>
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
                return (
                  <div key={s.name} className={`skill-row-creation ${isRec ? 'recommended' : ''}`}>
                    <label style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1 }}>
                      <input
                        type="checkbox"
                        checked={proficientSkills.includes(s.name)}
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
                    {isRec && <span className="rec-star" title="Recomendada para esta clase">★</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools selection */}
          <div className="subsection">
            <div className="block-label">Herramientas</div>
            {rec && rec.tools.length > 0 && (
              <button className="rec-apply-btn" onClick={handleApplyRecommendedTools}>
                ✨ Aplicar recomendadas para {className}
              </button>
            )}
            <div className="tools-grid">
              {(['kit', 'instrumento', 'artesano', 'juego'] as const).map(cat => {
                const tools = TOOLS_CATALOG.filter(t => t.category === cat);
                const catLabels: Record<string, string> = {
                  kit: '🔧 Kits y herramientas especiales',
                  instrumento: '🎵 Instrumentos musicales',
                  artesano: '⚒️ Herramientas de artesano',
                  juego: '🎲 Juegos'
                };
                return (
                  <div key={cat} className="tool-category">
                    <div className="tool-cat-label">{catLabels[cat]}</div>
                    <div className="tool-items">
                      {tools.map(t => {
                        const isRecTool = rec?.tools.includes(t.name);
                        return (
                          <label key={t.name} className={`tool-chip ${selectedTools.includes(t.name) ? 'selected' : ''} ${isRecTool ? 'recommended' : ''}`}>
                            <input
                              type="checkbox"
                              checked={selectedTools.includes(t.name)}
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

          {/* Cantrips & Spells (only for spellcasters) */}
          {cdef.spellcasting && (
            <div className="subsection">
              <div className="block-label">Trucos y hechizos iniciales</div>
              {rec && (rec.cantrips.length > 0 || rec.spells.length > 0) && (
                <button className="rec-apply-btn" onClick={handleApplyRecommendedSpells}>
                  ✨ Aplicar recomendados para {className}
                </button>
              )}

              {classCantrips.length > 0 && (
                <>
                  <div className="spell-section-label">Trucos (nivel 0)</div>
                  <div className="spell-grid">
                    {classCantrips.map(c => {
                      const isRecCantrip = rec?.cantrips.includes(c.name);
                      return (
                        <label key={c.name} className={`spell-chip ${selectedCantrips.includes(c.name) ? 'selected' : ''} ${isRecCantrip ? 'recommended' : ''}`}>
                          <input
                            type="checkbox"
                            checked={selectedCantrips.includes(c.name)}
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
                  <div className="spell-section-label">Hechizos de nivel 1</div>
                  <div className="spell-grid">
                    {classSpells.map(s => {
                      const isRecSpell = rec?.spells.includes(s.name);
                      return (
                        <label key={s.name} className={`spell-chip ${selectedSpells.includes(s.name) ? 'selected' : ''} ${isRecSpell ? 'recommended' : ''}`}>
                          <input
                            type="checkbox"
                            checked={selectedSpells.includes(s.name)}
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
              {ARMOR_CATALOG.filter(a => a.type !== 'escudo').map(a => {
                const isRecArmor = rec?.armor.includes(a.name);
                return (
                  <label key={a.name} className={`armor-option ${selectedArmor === a.name ? 'selected' : ''} ${isRecArmor ? 'recommended' : ''}`}>
                    <input type="radio" name="armor" checked={selectedArmor === a.name} onChange={() => setSelectedArmor(a.name)} />
                    <div className="armor-option-content">
                      <div className="armor-option-top">
                        <span className="armor-option-name">{a.name}</span>
                        <span className={`armor-type-badge ${a.type}`}>{a.type}</span>
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
              <label className={`tool-chip ${selectedShield ? 'selected' : ''}`}>
                <input type="checkbox" checked={selectedShield} onChange={e => setSelectedShield(e.target.checked)} />
                <span>🛡️ Escudo (+2 CA)</span>
              </label>
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
              const catLabel = cat === 'simple' ? 'Armas simples' : 'Armas marciales';
              const weapons = WEAPONS_CATALOG.filter(w => w.category === cat);
              return (
                <div key={cat} className="weapon-category-section">
                  <div className="weapon-cat-label">{catLabel}</div>
                  <div className="weapon-grid">
                    {weapons.map(w => {
                      const isRecWeapon = rec?.weapons.includes(w.name);
                      const isSelected = selectedWeapons.includes(w.name);
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
              <div className="review-value">{name || 'Sin nombre'} · {race} · {className} · Nivel {level}</div>
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
