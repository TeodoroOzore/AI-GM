import React, { useState } from 'react';
import {
  ABILITIES,
  SKILLS,
  RACES,
  CLASSES,
  POINTBUY_COST,
  AbilityKey,
  CharacterSheet,
  blankCharacter,
  hpMaxFor,
  abilityMod,
  secureRandInt
} from '../types';

type CharacterCreationProps = {
  onCreateCharacter: (character: CharacterSheet, introMessage: string, worldMemory: string) => void;
};

type CreationMethod = 'standard' | 'pointbuy' | 'rolled' | 'manual';

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

  const [proficientSkills, setProficientSkills] = useState<string[]>(['Atletismo', 'Supervivencia']);

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

  const handleToggleSkill = (skillName: string) => {
    setProficientSkills(prev =>
      prev.includes(skillName) ? prev.filter(s => s !== skillName) : [...prev, skillName]
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

  const handleSubmit = () => {
    const finalName = name.trim() || 'Sin nombre';
    const abilities = calculateFinalAbilities();
    const cdef = CLASSES[className] || CLASSES['Guerrero'];
    const conMod = abilityMod(abilities.con);

    const c = blankCharacter();
    c.name = finalName;
    c.race = race;
    c.raceChoiceA = raceChoiceA;
    c.raceChoiceB = raceChoiceB;
    c.background = background;
    c.className = className;
    c.level = level;
    c.abilities = abilities;
    c.hpMax = hpMaxFor(cdef.hitDie, level, conMod);
    c.hpCur = c.hpMax;
    c.hitDiceRemaining = level;
    c.ac = 10 + abilityMod(abilities.dex);
    c.proficientSkills = [...proficientSkills];

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
    c.equipment = [
      { name: 'Raciones de viaje', qty: 5, notes: 'una por día' },
      { name: 'Cuerda de cáñamo (15m)', qty: 1, notes: '' }
    ];
    c.weapons = [
      { name: 'Arco corto', ability: 'dex', dice: '1d6', type: 'perforante', proficient: true, notes: 'munición: 20 flechas' }
    ];

    const intro = 'La niebla del amanecer cubre el sendero que sale de Umbraluz. Cargás tu arco al hombro y el bosque empieza a susurrar. ¿Qué hacés?';
    const memory = 'La crónica comienza en las afueras del pueblo de Umbraluz, al amanecer, en el límite de un bosque.';
    onCreateCharacter(c, intro, memory);
  };

  const usedPoints = Object.values(pointBuy).reduce((sum, v) => sum + POINTBUY_COST[v], 0);
  const remainingPoints = 27 - usedPoints;
  const isHalfElf = RACES[race]?.choice;

  return (
    <div id="creation">
      <h2>Antes de cruzar el umbral…</h2>
      <p className="lead">Creá tu personaje. Todo lo que definas acá va a vivir después en tu hoja, organizada en solapas, y va a guiar cómo tira los dados el motor y cómo narra el DM.</p>

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
            <select value={className} onChange={e => setClassName(e.target.value)}>
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
      </div>

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
                  {ABILITIES.map(a => {
                    const pool = method === 'standard' ? standardPool : rolledPool || [];
                    return (
                      <div key={a.key} className="assign-row">
                        <label>{a.label}</label>
                        <select
                          value={assignments[a.key] || ''}
                          onChange={e => setAssignments({ ...assignments, [a.key]: e.target.value ? parseInt(e.target.value) : null })}
                        >
                          <option value="">—</option>
                          {pool.map((v, i) => (
                            <option key={i} value={v}>{v}</option>
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
      </div>

      <div className="creation-section">
        <h3>Competencias de habilidades</h3>
        <div className="skills-list">
          {SKILLS.map(s => (
            <div key={s.name} className="skill-row">
              <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={proficientSkills.includes(s.name)}
                  onChange={() => handleToggleSkill(s.name)}
                />
                <span>{s.name}</span>
              </label>
            </div>
          ))}
        </div>
        <p className="small-note" style={{ marginTop: '8px' }}>
          Estas competencias aparecen en la hoja y se pueden ampliar después durante la campaña.
        </p>
      </div>

      <button className="cta" onClick={handleSubmit}>Crear personaje y cruzar el umbral</button>
      <button className="quickstart" onClick={handleQuickStart}>…o probar rápido con un personaje de ejemplo (Kaelen Vent)</button>
    </div>
  );
};
