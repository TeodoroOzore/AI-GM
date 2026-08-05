import React, { useState, useEffect } from 'react';
import {
  CharacterSheet as CharacterType,
  ABILITIES,
  SKILLS,
  RACES,
  CLASSES,
  WeaponItem,
  SpellItem,
  FULL_SLOTS,
  HALF_SLOTS,
  PACT_SLOTS,
  FEAT_CATALOG,
  FeatDef,
  getMaxFeatsCount,
  DND_CONDITIONS,
  ConditionDef,
  FAMILIAR_FORMS,
  ARMOR_CATALOG,
  DAMAGE_TYPE_EMOJI,
  DAMAGE_TYPE_COLOR,
  AbilityKey,
  abilityMod,
  profBonus,
  fmtSigned,
  classResources,
  EQUIPMENT_SLOTS,
  EquippedGearItem,
  EquipmentSlot,
  WEAPONS_CATALOG,
  getCharacterProficiencies,
  getRacialResistances,
  SubclassSpellGrant,
  SubclassCompanionGrant,
  getSpellcastingLimits,
  WARLOCK_INVOCATIONS_CATALOG,
getWarlockInvocationsLimit,
  RaceDef,
  RaceTrait,
} from '../types';
import { SUBCLASS_CATALOG } from '../data/subclasses';
import { BASE_CLASSES_CATALOG, FIGHTING_STYLES } from '../data/baseClasses';
import { EquipmentForgePanel } from './EquipmentForgePanel';

type CharacterSheetProps = {
  character: CharacterType;
  onUpdateCharacter: (updated: CharacterType) => void;
  onQuickSkillRoll: (skillName: string, ability: AbilityKey) => void;
  onRollSave: (ability: AbilityKey) => void;
  onRollWeapon: (weapon: WeaponItem) => void;
  onRollSpell: (spell: SpellItem) => void;
  readOnly?: boolean;
  focusSection?: string;
};

type TabKey = 'stats' | 'gear' | 'class' | 'dynamic' | 'familiars' | 'companions';

export const CharacterSheetPanel: React.FC<CharacterSheetProps> = ({
  character: c,
  onUpdateCharacter,
  onQuickSkillRoll,
  onRollSave,
  onRollWeapon,
  onRollSpell,
  readOnly = false,
  focusSection
}) => {
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
  // Restaura recursos de descanso corto: Furias (Bárbaro ya las tiene),
  // Ki (Monje), Segundo Aliento / Acción Adicional (Guerrero), Espacios
  // de Pacto (Brujo), y lanza dados de golpe para recuperar PG.
  const handleShortRest = () => {
    const hitDie = cdef.hitDie;
    const diceToRoll = Math.max(1, Math.floor(c.hitDiceRemaining / 2) || 1);
    const hpGained = Array.from({ length: diceToRoll }, () => Math.ceil(Math.random() * hitDie) + abilityMod(c.abilities.con)).reduce((a, b) => a + b, 0);
    const newHp = Math.min(c.hpMax, c.hpCur + Math.max(0, hpGained));
    const newHitDice = Math.max(0, c.hitDiceRemaining - diceToRoll);
    // Short rest resources: Warlock pact slots, some class resources
    const newSlotsUsed = { ...c.spellSlotsUsed };
    if (c.className === 'Brujo') newSlotsUsed['pact'] = 0;
    const newResourceUsed = { ...c.classResourceUsed };
    // Guerrero: Segundo Aliento, Acción Adicional
    if (c.className === 'Guerrero') { delete newResourceUsed['secondwind']; }
    // Monje: Puntos de Ki
    if (c.className === 'Monje') { delete newResourceUsed['ki']; }
    update({
      hpCur: newHp,
      hitDiceRemaining: newHitDice,
      spellSlotsUsed: newSlotsUsed,
      classResourceUsed: newResourceUsed,
    });
    alert(`⏰ Descanso Corto completado.\n🎲 Lanzaste ${diceToRoll}d${hitDie}: +${Math.max(0, hpGained)} PG recuperados (${c.hpCur} → ${newHp} PG).\n🎲 Dados de golpe restantes: ${newHitDice}.`);
  };

  // ─── Descanso Largo ───────────────────────────────────────────────
  // Restaura PG completos, slots de conjuro, dados de golpe (mitad),
  // todos los recursos de clase y reinicia salvaciones de muerte.
  const handleLongRest = () => {
    const maxHitDiceRestore = Math.max(1, Math.floor((cdef.hitDie === 0 ? 8 : 1) + c.level / 2));
    const newHitDice = Math.min(c.level, c.hitDiceRemaining + maxHitDiceRestore);
    update({
      hpCur: c.hpMax,
      hitDiceRemaining: newHitDice,
      spellSlotsUsed: {},
      classResourceUsed: {},
      deathSaves: { success: 0, fail: 0 },
      tempHp: 0,
    });
    alert(`🌙 Descanso Largo completado.\n❤️ PG restaurados al máximo (${c.hpMax}).\n✨ Todos los espacios de conjuro y recursos de clase restaurados.\n🎲 Dados de golpe recuperados: ${newHitDice}/${c.level}.`);
  };

  // ─── Estadísticas de Combate derivadas ──────────────────────────
  const dexMod = abilityMod(c.abilities.dex);
  const hasAlertFeat = c.feats.includes('Alerta');
  const hasMobileFeat = c.feats.includes('Móvil');
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

  return (
    <aside id="sheet-panel">
      <div className="sheet-header">
        <div className="who-name">{c.name || '—'}</div>
<div className="who-sub">
          {`${c.gender || ''}${c.gender ? ' · ' : ''}${c.race} · ${c.className}${c.subclass ? ' (' + c.subclass + ')' : ''} · Nivel ${c.level}`}
        </div>
        <div className="who-vitals">
          <span>PG <b>{`${c.hpCur}/${c.hpMax}`}</b></span>
          <span>CA <b>{c.ac}</b></span>
          <span>Bono de Competencia <b>{fmtSigned(profBonus(c.level))}</b></span>
          <span>Inspiración <b>{c.inspiration ? 'Sí' : 'No'}</b></span>
        </div>

      </div>

      <div className="tabbar">
        {tabs.map(t => (
          <button
            key={t.key}
            className={activeTab === t.key ? 'active' : ''}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="tab-panel active">
        <fieldset className="sheet-fieldset">
          {activeTab === 'stats' && (
            <div id="sheet-section-stats">
              {/* ── VITALIDAD Y ESTADO ACTUAL ── */}
              <div id="sheet-section-status">
                <div className="block-label">Vitalidad y Estado Actual</div>
                <div className="row">
                  <div className="field">
                    <label>PG actuales</label>
                    <div className="value-pill">{c.hpCur}/{c.hpMax}</div>
                  </div>
                  <div className="field">
                    <label>PG máximos</label>
                    <div className="value-pill">{c.hpMax}</div>
                  </div>
                  <div className="field">
                    <label>PG temporales</label>
                    <div className="value-pill">{c.tempHp}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label>Clase de Armadura</label>
                    <div className="value-pill">{c.ac}</div>
                  </div>
                  <div className="field">
                    <label>Dados de golpe restantes</label>
                    <div className="value-pill">{c.hitDiceRemaining}/{c.level}</div>
                  </div>
                </div>

                {/* ── ESTADÍSTICAS DE COMBATE ── */}
                <div className="combat-stats-row">
                  <div className="combat-stat-box" title="Modificador DES + bonus de dotes (Alerta +5)">
                    <div className="combat-stat-value">{fmtSigned(initiative)}</div>
                    <div className="combat-stat-label">⚡ Iniciativa</div>
                    {hasAlertFeat && <div className="combat-stat-note">+5 Alerta</div>}
                  </div>
                  <div className={`combat-stat-box ${hasExhaustion5 ? 'danger' : hasExhaustion2 ? 'warn' : ''}`} title="Velocidad de movimiento base de tu raza">
                    <div className="combat-stat-value">{hasExhaustion5 ? '0' : `${speed}m`}</div>
                    <div className="combat-stat-label">🏃 Velocidad</div>
                    {hasExhaustion2 && !hasExhaustion5 && <div className="combat-stat-note">½ Agot.</div>}
                    {hasMobileFeat && !hasExhaustion5 && <div className="combat-stat-note">+3m Móvil</div>}
                  </div>
                  <div className="combat-stat-box" title="Percepción pasiva = 10 + mod.SAB + (comp. si competente en Percepción)">
                    <div className="combat-stat-value">{passivePerception}</div>
                    <div className="combat-stat-label">👁️ Perc. Pasiva</div>
                    {isPercepProf && <div className="combat-stat-note">con comp.</div>}
                  </div>
                  <div className="combat-stat-box" title="Bono de competencia por nivel">
                    <div className="combat-stat-value">{fmtSigned(profBonus(c.level))}</div>
                    <div className="combat-stat-label">📜 Bono Comp.</div>
                  </div>
                </div>

                {/* Armor info */}
                {equippedArmorEntry && (
                  <div className="armor-info-box">
                    <span className="armor-info-name">🛡️ {equippedArmorEntry.name}</span>
                    <span className={`armor-type-badge ${equippedArmorEntry.type}`}>{equippedArmorEntry.type}</span>
                    {equippedArmorEntry.stealthDisadvantage && <span className="armor-warn">⚠️ Sigilo</span>}
                    {c.equippedShield && <span className="armor-info-shield">+ Escudo</span>}
                  </div>
                )}

                <div className="block-label" style={{ marginTop: '6px' }}>Salvaciones de muerte</div>
                <div className="row">
                  <div className="field">
                    <label>Éxitos (0-3)</label>
                    <div className="value-pill">{c.deathSaves.success}</div>
                  </div>
                  <div className="field">
                    <label>Fallos (0-3)</label>
                    <div className="value-pill">{c.deathSaves.fail}</div>
                  </div>
                </div>

                <div className="checks-row">
                  <label>
                    <input type="checkbox" checked={c.inspiration} onChange={e => update({ inspiration: e.target.checked })} />
                    Inspiración
                  </label>
                </div>

                {/* ── BOTONES DE DESCANSO ── */}
                <div className="rest-buttons-row">
                  <button className="rest-btn short-rest" onClick={handleShortRest} title="Descanso Corto: lanza dados de golpe para recuperar PG. Restaura recursos de descanso corto (Slots de Pacto, Ki, Segundo Aliento).">
                    ⏱️ Descanso Corto
                    <span className="rest-btn-sub">Recupera PG · Ki · Pacto</span>
                  </button>
                  <button className="rest-btn long-rest" onClick={handleLongRest} title="Descanso Largo: restaura todos los PG, slots de conjuro, recursos de clase y reinicia salvaciones de muerte.">
                    🌙 Descanso Largo
                    <span className="rest-btn-sub">Restaura todo · PG · Slots</span>
                  </button>
                </div>

                <div className="status-actions-row">
                  <button className="add-row-btn" onClick={handleConditionAdvance}>⏭️ Avanzar turno / limpiar duraciones</button>
                  <span className="status-hint">Las condiciones se activan desde la narrativa y se desactivan automáticamente cuando su duración termina.</span>
                </div>

                <div className="block-label" style={{ marginTop: '10px' }}>⚡ Condiciones Activas (D&D 5e)</div>
                <div className="conditions-grid">
                  {DND_CONDITIONS.map(cond => {
                    const isActive = activeConditions.includes(cond.name);
                    const turnsLeft = c.conditionDurations?.[cond.name] ?? 0;
                    return (
                      <button
                        key={cond.name}
                        type="button"
                        className={`condition-chip-btn ${isActive ? 'active' : ''}`}
                        title={`${cond.name}: ${cond.description}`}
                        onClick={() => handleConditionToggle(cond.name)}
                      >
                        <span>{cond.emoji}</span>
                        <span>{cond.name}</span>
                        {isActive && turnsLeft > 0 && <span className="condition-duration">{turnsLeft}t</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── ATRIBUTOS PRINCIPALES ── */}
              <div className="block-label" style={{ marginTop: '14px' }}>Atributos Principales</div>
              <div className="grid3">
                {ABILITIES.map(a => (
                  <div key={a.key} className="ability-box">
                    <div className="name">{a.label}</div>
                    <div className="mod">{fmtSigned(abilityMod(c.abilities[a.key]))}</div>
                    <div className="score">{c.abilities[a.key]}</div>
                    <button className="roll-btn" onClick={() => onRollSave(a.key as AbilityKey)} title={`Salvación de ${a.label}`}>🛡️</button>
                  </div>
                ))}
              </div>

              {/* ── HABILIDADES DE PERSONAJE ── */}
              <div className="block-label" style={{ marginTop: '10px' }}>Habilidades de Personaje</div>
              <div className="skills-grid-2col">
                {SKILLS.map(s => {
                  const isProf = c.proficientSkills.includes(s.name);
                  const mod = abilityMod(c.abilities[s.ab]) + (isProf ? profBonus(c.level) : 0);
                  const abLabel = ABILITIES.find(a => a.key === s.ab)?.label || s.ab.toUpperCase();
                  return (
                    <div key={s.name} className={`skill-row-card ${isProf ? 'proficient' : ''}`}>
                      <span className="abbr" title={ABILITIES.find(a => a.key === s.ab)?.full}>{abLabel}</span>
                      <span className="skill-title">{s.name}</span>
                      <span className="mod">{fmtSigned(mod)}</span>
                      <span className="prof-check">{isProf ? '✓' : '·'}</span>
                      <button className="roll-btn" onClick={() => onQuickSkillRoll(s.name, s.ab)}>🎲</button>
                    </div>
                  );
                })}
              </div>
              <button className="add-row-btn" onClick={handleAddProficientSkill} style={{ marginTop: '8px' }}>
                + añadir competencia de habilidad
              </button>

              {/* ── COMPETENCIAS: derived from class + race + background ── */}
              {(() => {
                const profs = getCharacterProficiencies(c.className, c.race, c.background, c.selectedTools);
                return (
                  <>
                    <div className="block-label" style={{ marginTop: '12px' }}>Salvaciones de Clase</div>
                    <div className="prof-chips-row">
                      {cdef.saves.map(s => (
                        <span key={s} className="prof-chip save-chip">
                          {s.toUpperCase()} {fmtSigned(abilityMod(c.abilities[s]) + profBonus(c.level))}
                        </span>
                      ))}
                    </div>

                    <div className="block-label" style={{ marginTop: '10px' }}>Competencias de Armaduras</div>
                    <div className="prof-chips-row">
                      {['Ligera', 'Media', 'Pesada', 'Escudos'].map(o => {
                        const has = profs.armor.includes(o as any);
                        return (
                          <span key={o} className={`prof-chip armor-chip ${has ? 'active' : 'inactive'}`}>
                            {has ? '✓' : '✗'} {o}
                          </span>
                        );
                      })}
                    </div>

                    <div className="block-label" style={{ marginTop: '10px' }}>Competencias de Armas</div>
                    <div className="prof-chips-row">
                      {['Simples', 'Marciales', 'Arrojadizas'].map(o => {
                        const has = profs.weapons.includes(o as any);
                        return (
                          <span key={o} className={`prof-chip weapon-chip ${has ? 'active' : 'inactive'}`}>
                            {has ? '✓' : '✗'} {o}
                          </span>
                        );
                      })}
                    </div>

                    <div className="block-label" style={{ marginTop: '10px' }}>Herramientas</div>
                    <div className="prof-chips-row">
                      {profs.tools.length > 0
                        ? profs.tools.map(t => (
                            <span key={t} className="prof-chip tool-chip active">{t}</span>
                          ))
                        : <span className="prof-none">Ninguna</span>
                      }
                    </div>

                    <div className="block-label" style={{ marginTop: '10px' }}>Idiomas</div>
                    <div className="prof-chips-row">
                      {Array.from(new Set([...(c.languages ? c.languages.split(',').map(l => l.trim()) : []), ...(c.raceExtraLanguage ? [c.raceExtraLanguage] : []), ...profs.languages]))
                        .filter(Boolean)
                        .filter(l => !/\(a elección\)/i.test(l) && !/idioma[s]? adicional(es)?/i.test(l))
                        .map(l => (
                          <span key={l} className="prof-chip lang-chip">{l}</span>
                        ))}
                    </div>

                    {/* ── RASGOS RACIALES ── */}
                    {(() => {
                      const rdef: RaceDef | undefined = RACES[c.race];
                      if (!rdef || !rdef.traits || rdef.traits.length === 0) return null;
                      return (
                        <>
                          <div className="block-label" style={{ marginTop: '10px' }}>🧬 Rasgos Raciales: {c.race}</div>
                          <div className="race-traits-list-compact">
                            {rdef.traits.map((trait: RaceTrait, idx: number) => {
                              let isUnlocked = true;
                              let unlockNote = '';
                              if (trait.name === 'Dureza Enana' && c.level >= 4) {
                                isUnlocked = true;
                                unlockNote = `✓ Activo (Nv ${c.level}) — +${c.level} PG máximos`;
                              } else if (trait.name === 'Dureza Enana' && c.level < 4) {
                                isUnlocked = false;
                                unlockNote = `🔒 Se desbloquea en Nivel 4: +Nivel PG máximos`;
                              }
                              return (
                                <div key={idx} className={`race-trait-card-compact ${isUnlocked ? 'unlocked' : 'locked'}`}>
                                  <div className="trait-compact-name">{trait.name}</div>
                                  <p className="trait-compact-desc">{trait.description}</p>
                                  {unlockNote && <div className="trait-compact-status">{unlockNote}</div>}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      );
                    })()}

                    {/* ── RESISTENCIAS Y VENTAJAS RACIALES ── */}
                    {(() => {
                      const resistances = getRacialResistances(c.race, c.raceAncestry || '');
                      const rdef: RaceDef | undefined = RACES[c.race];
                      const defenseTraits = rdef?.traits?.filter(t => t.type === 'defense' || t.type === 'feature') || [];
                      if (resistances.length === 0 && defenseTraits.length === 0) return null;
                      return (
                        <>
                          <div className="block-label" style={{ marginTop: '10px' }}>🛡️ Resistencias y Ventajas Raciales</div>
                          {resistances.length > 0 && (
                            <div className="prof-chips-row">
                              {resistances.map(res => (
                                <span key={res} className="prof-chip resist-chip">✓ Resistencia a {res}</span>
                              ))}
                            </div>
                          )}
                          {defenseTraits.length > 0 && (
                            <div className="race-traits-list-compact">
                              {defenseTraits.map((trait, idx) => (
                                <div key={idx} className="race-trait-card-compact unlocked">
                                  <div className="trait-compact-name">✨ {trait.name}</div>
                                  <p className="trait-compact-desc">{trait.description}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      );
                    })()}

                    <div className="prof-lock-note">
                      🔒 Las competencias se asignan por clase, raza y trasfondo. Solo pueden expandirse durante la aventura.
                    </div>
                  </>
                );
              })()}

              {/* ── DOTES, TALENTOS Y PASIVAS ── */}
              <div id="sheet-section-feats" style={{ marginTop: '16px' }}>
                <div className="block-label">🎯 Dotes, Talentos y Rasgos Pasivos</div>
                {(() => {
                  const maxFeats = getMaxFeatsCount(c.className, c.level, c.race);
                  const acquiredCount = c.feats.length;
                  const remaining = Math.max(0, maxFeats - acquiredCount);
                  const isSpellcaster = cdef.spellcasting !== null || (c.spellsKnown && c.spellsKnown.length > 0) || c.feats.includes('Iniciado en la Magia');
                  const isMartial = ['Bárbaro', 'Guerrero', 'Paladín', 'Explorador', 'Monje'].includes(c.className) || (c.weaponProf && c.weaponProf.includes('Marciales'));

                  const getNextFeatLevel = (lvl: number, cls: string): number => {
                    const levels = [4, 8, 12, 16, 19];
                    if (cls === 'Guerrero') levels.push(6, 14);
                    if (cls === 'Pícaro') levels.push(10);
                    levels.sort((a, b) => a - b);
                    return levels.find(l => l > lvl) || 20;
                  };

                  return (
                    <>
                      <div className="feat-header-card">
                        <div className="feat-counter-title">🎯 Progreso de Dotes (Nivel {c.level})</div>
                        <div className="feat-counter-badge">
                          Dotes adquiridas: <strong>{acquiredCount} / {maxFeats}</strong>
                        </div>
                        {remaining > 0 ? (
                          <div className="feat-unlocked-msg">
                            ✨ ¡Tienes <strong>{remaining}</strong> dote(s) disponible(s) para elegir! Elige una dote del catálogo para bloquearla en tu personaje.
                          </div>
                        ) : (
                          <div className="feat-locked-msg">
                            🔒 No tienes dotes disponibles en este momento. Alcanzarás tu siguiente dote al nivel <strong>{getNextFeatLevel(c.level, c.className)}</strong>.
                          </div>
                        )}
                      </div>

                      {/* Acquired / Locked Feats */}
                      {c.feats.length > 0 && (
                        <>
                          <div className="block-label" style={{ marginTop: '12px' }}>🔒 Dotes Adquiridas</div>
                          <div className="acquired-feats-list">
                            {c.feats.map(fName => {
                              const fDef = FEAT_CATALOG.find(x => x.name === fName);
                              return (
                                <div key={fName} className="acquired-feat-card">
                                  <div className="acquired-feat-header">
                                    <span className="acquired-feat-title">✨ {fName}</span>
                                    <span className="acquired-feat-locked-tag">🔒 Bloqueada en personaje</span>
                                  </div>
                                  <p className="acquired-feat-desc">{fDef?.description || 'Dote adquirida.'}</p>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}

                      {/* Feat Selection Catalog: ONLY displayed when player has a feat choice available (remaining > 0) */}
                      {remaining > 0 && (
                        <>
                          <div className="block-label" style={{ marginTop: '12px' }}>✨ Elige una Nueva Dote para tu Personaje (Dotes Disponibles: {remaining})</div>
                          <div className="feat-catalog-list">
                            {FEAT_CATALOG.map(f => {
                              const isAcquired = c.feats.includes(f.name);
                              if (isAcquired) return null;

                              let isEligible = true;
                              let ineligibleReason = '';

                              if (f.spellcasterOnly && !isSpellcaster) {
                                isEligible = false;
                                ineligibleReason = 'Requiere capacidad de lanzar conjuros (Brujo, Mago, Clérigo, Bardo, etc.)';
                              }
                              if (f.martialOnly && !isMartial) {
                                isEligible = false;
                                ineligibleReason = 'Requiere clase marcial o competencia en armas marciales';
                              }

                              return (
                                <div key={f.name} className={`feat-catalog-card ${!isEligible ? 'ineligible' : ''}`}>
                                  <div className="feat-card-header">
                                    <span className="feat-card-name">{f.name}</span>
                                    <span className={`feat-cat-chip ${f.category}`}>{f.category}</span>
                                  </div>
                                  {f.prerequisite && (
                                    <div className="feat-prereq-note">Prerrequisito: {f.prerequisite}</div>
                                  )}
                                  <p className="feat-card-desc">{f.description}</p>

                                  <div className="feat-card-footer">
                                    {!isEligible ? (
                                      <span className="feat-reason-badge">⚠️ {ineligibleReason}</span>
                                    ) : (
                                      <button
                                        type="button"
                                        className="choose-feat-btn"
                                        onClick={() => {
                                          update({ feats: [...c.feats, f.name] });
                                        }}
                                      >
                                        ➕ Elegir Dote ({f.name})
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}

                      <div className="field" style={{ marginTop: '14px' }}>
                        <label>Dotes personalizadas / notas caseras</label>
                        <textarea rows={2} value={c.featsCustom} onChange={e => update({ featsCustom: e.target.value })} placeholder="Añade rasgos o reglas caseras de tu DM..." />
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

        {activeTab === 'dynamic' && (() => {
          const limits = getSpellcastingLimits(c);
          const nonRacialSpells = (c.spellsKnown || []).filter(s => s.level !== 'racial');
          const currentCantripsCount = nonRacialSpells.filter(s => s.level === '0' || s.level?.toLowerCase().includes('truco')).length;
          const currentSpellsCount = nonRacialSpells.length - currentCantripsCount;

          return (
            <div id="sheet-section-dynamic" className="spellcasting-tab-container">
              {limits.isSpellcaster && (
                <>
                  {/* MAGICAL LIMITS DASHBOARD */}
                  <div className="spell-limits-dashboard">
                    <div className="dashboard-title-row">
                      <span className="dash-icon">🔮</span>
                      <div>
                        <strong>Capacidad Mágica · Nivel {c.level} ({c.className})</strong>
                        <span className="dash-sub">Aptitud: <b>{limits.abilityLabel}</b> ({fmtSigned(limits.abilityModVal)})</span>
                      </div>
                    </div>

                    <div className="limit-stats-grid">
                      <div className="limit-stat-card">
                        <span className="stat-value">{limits.saveDC}</span>
                        <span className="stat-label">CD Salvación</span>
                      </div>
                      <div className="limit-stat-card">
                        <span className="stat-value">{fmtSigned(limits.attackBonus)}</span>
                        <span className="stat-label">Bono Ataque</span>
                      </div>
                      <div className={`limit-stat-card ${limits.cantripsKnownMax > 0 && currentCantripsCount > limits.cantripsKnownMax ? 'over-limit' : ''}`}>
                        <span className="stat-value">{limits.cantripsKnownMax > 0 ? `${currentCantripsCount} / ${limits.cantripsKnownMax}` : '—'}</span>
                        <span className="stat-label">Trucos Conocidos</span>
                      </div>
                      <div className={`limit-stat-card ${limits.spellsKnownOrPreparedMax > 0 && currentSpellsCount > limits.spellsKnownOrPreparedMax ? 'over-limit' : ''}`}>
                        <span className="stat-value">{limits.spellsKnownOrPreparedMax > 0 ? `${currentSpellsCount} / ${limits.spellsKnownOrPreparedMax}` : '—'}</span>
                        <span className="stat-label">{limits.labelKnownOrPrepared}</span>
                      </div>
                      <div className="limit-stat-card highlight">
                        <span className="stat-value">Nv {limits.maxSpellLevel}</span>
                        <span className="stat-label">Nivel Máx. Conjuro</span>
                      </div>
                    </div>
                  </div>

                  {/* WARLOCK SCALING BANNER */}
                  {c.className === 'Brujo' && limits.pactSlotLevel && (
                    <div className="warlock-scaling-banner">
                      <span className="banner-icon">⚡</span>
                      <div>
                        <strong>Escalado de Pacto de Brujo (Nivel {limits.pactSlotLevel})</strong>
                        <p>Tus espacios de pacto se recargan en descansos cortos. Todos los conjuros que lances escalan automáticamente y se ejecutan con la fuerza de un espacio de <strong>Nivel {limits.pactSlotLevel}</strong>.</p>
                      </div>
                    </div>
                  )}

                  {/* RITUAL CASTING BANNER */}
                  {limits.ritualCasting && limits.ritualDescription && (
                    <div className="ritual-info-banner">
                      <span className="ritual-icon">📜</span>
                      <div>
                        <strong>Capacidad de Lanzamiento Ritual Activa</strong>
                        <p>{limits.ritualDescription}</p>
                      </div>
                    </div>
                  )}

                  {/* CONCENTRATION TRACKER */}
                  <div className="concentration-tracker-box">
                    <div className="tracker-top-row">
                      <span className="tracker-title">🧠 Control de Concentración Activa</span>
                      <select
                        value={c.concentratingOnSpell || ''}
                        onChange={e => update({ concentratingOnSpell: e.target.value })}
                        className="concentration-select"
                      >
                        <option value="">— Sin Concentración —</option>
                        {c.spellsKnown
                          .filter(s => s.name && s.level !== '0' && !s.level?.toLowerCase().includes('truco'))
                          .map((s, idx) => (
                            <option key={idx} value={s.name}>🧠 Mantener: {s.name}</option>
                          ))}
                      </select>
                    </div>

                    {c.concentratingOnSpell ? (
                      <div className="concentration-active-banner">
                        <div className="active-spell-title">
                          ⚡ MANTENIENDO CONCENTRACIÓN EN: <strong>"{c.concentratingOnSpell}"</strong>
                        </div>
                        <p className="concentration-save-reminder">
                          ⚠️ <strong>Al recibir daño en combate:</strong> Debes realizar una tirada de salvación de Constitución (CD 10 o la mitad del daño sufrido, lo que sea mayor). Si la fallas, pierdes el conjuro.
                        </p>
                        <button
                          className="cancel-concentration-btn"
                          onClick={() => update({ concentratingOnSpell: '' })}
                        >
                          ✕ Romper Concentración
                        </button>
                      </div>
                    ) : (
                      <div className="concentration-idle-note">
                        Actualmente no estás manteniendo la concentración en ningún hechizo. Al lanzar un hechizo de concentración, selecciónalo arriba para activar el monitoreo de salvación por daño.
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* SPOTS AND SLOTS RESTORATION */}
              {cdef.spellcasting && (
                <>
                  <div className="block-label" style={{ marginTop: '12px' }}>Espacios de conjuro disponibles</div>
                  <div>
                    {cdef.spellcasting.type === 'pact' ? (
                      (() => {
                        const p = PACT_SLOTS[c.level];
                        const used = c.spellSlotsUsed['pact'] || 0;
                        return (
                          <div className="resource">
                            <div className="rlabel">Espacios de Pacto (Nivel {p.level})</div>
                            <div className="rctrl">
                              <button onClick={() => handleSlotChange('pact', 1)}>−</button>
                              <span>{p.count - used}/{p.count}</span>
                              <button onClick={() => handleSlotChange('pact', -1)}>+</button>
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      (() => {
                        const table = cdef.spellcasting.type === 'full' ? FULL_SLOTS[c.level] : HALF_SLOTS[c.level];
                        return (
                          <div className="spell-slots-visual-grid">
                            {table.map((max, idx) => {
                              if (max <= 0) return null;
                              const lvl = idx + 1;
                              const used = c.spellSlotsUsed[lvl] || 0;
                              const available = max - used;
                              return (
                                <div key={lvl} className="spell-slot-row">
                                  <div className="slot-level-label">Nv {lvl}</div>
                                  <div className="slot-pips">
                                    {Array.from({ length: max }, (_, i) => (
                                      <button
                                        key={i}
                                        className={`slot-pip ${i < available ? 'available' : 'used'}`}
                                        title={i < available ? `Gastar espacio nivel ${lvl}` : `Recuperar espacio nivel ${lvl}`}
                                        onClick={() => {
                                          if (i < available) {
                                            handleSlotChange(String(lvl), 1);
                                          } else {
                                            handleSlotChange(String(lvl), -1);
                                          }
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <div className="slot-count-text">{available}/{max}</div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()
                    )}
                  </div>
                </>
              )}

              <div className="block-label" style={{ marginTop: '12px' }}>Recursos de clase y particularidades</div>
              <div>
                {classResources(c.className, c.level).map(r => {
                  if (r.info) return <div key={r.key} className="resource"><div className="rlabel">{r.label}</div></div>;
                  const used = c.classResourceUsed[r.key] || 0;
                  return (
                    <div key={r.key} className="resource">
                      <div className="rlabel">{r.label}</div>
                      <div className="rctrl">
                        <button onClick={() => handleResourceChange(r.key, 1, r.max)}>−</button>
                        <span>{r.max - used}/{r.max}</span>
                        <button onClick={() => handleResourceChange(r.key, -1, r.max)}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>

{/* RACIAL SPELLS / ACTIONS SECTION */}
              {(() => {
                const racialSpells = (c.spellsKnown || []).filter(s => s.level === 'racial');
                if (racialSpells.length === 0) return null;
                return (
                  <>
                    <div className="block-label" style={{ marginTop: '12px' }}>✨ Rasgos Raciales / Acciones</div>
                    <div className="list-rows">
                      {racialSpells.map((sp, i) => (
                        <div key={i} className="spell-sheet-row racial">
                          <div className="spell-sheet-main">
                            <span className="racial-spell-name">🐉 {sp.name}</span>
                            <button className="rm" onClick={() => update({ spellsKnown: c.spellsKnown.filter((_, idx) => idx !== c.spellsKnown.indexOf(sp)) })}>✕</button>
                          </div>
                          <div className="spell-sheet-meta">
                            <button className="roll-btn" title={`Usar ${sp.name || 'acción racial'}`} onClick={() => onRollSpell(sp)}>🎲</button>
                            <span className="spell-level-chip racial-chip">✨ Racial</span>
                            {sp.damageType && (
                              <span className="dmg-badge-inline" style={{ borderColor: DAMAGE_TYPE_COLOR[sp.damageType] || 'var(--seam)', color: DAMAGE_TYPE_COLOR[sp.damageType] || 'var(--parchment-dim)' }}>
                                {DAMAGE_TYPE_EMOJI[sp.damageType] || ''} {sp.damageType}
                              </span>
                            )}
                            <span className="spell-notes-text">{sp.notes}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}

              {/* SPELLS KNOWN / PREPARED LIST WITH LEVEL BADGES */}
              <div className="block-label" style={{ marginTop: '12px' }}>
                {cdef.spellcasting ? 'Repertorio / Conjuros preparados' : 'Técnicas y maniobras conocidas'}
              </div>

              <div className="list-rows">
                {c.spellsKnown.filter(sp => sp.level !== 'racial').map((sp, i) => {
                  const isCantrip = sp.level === '0' || sp.level?.toLowerCase().includes('truco');
                  const isWarlock = c.className === 'Brujo' && !isCantrip;

                  return (
                    <div key={i} className="spell-sheet-row">
                      <div className="spell-sheet-main">
                        <input
                          type="text"
                          placeholder="Nombre del conjuro"
                          value={sp.name}
                          onChange={e => {
                            const next = [...c.spellsKnown];
                            next[i].name = e.target.value;
                            update({ spellsKnown: next });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Nivel (0-9)"
                          value={sp.level}
                          onChange={e => {
                            const next = [...c.spellsKnown];
                            next[i].level = e.target.value;
                            update({ spellsKnown: next });
                          }}
                          style={{ width: '70px' }}
                        />
                        <button className="rm" onClick={() => update({ spellsKnown: c.spellsKnown.filter((_, idx) => idx !== i) })}>✕</button>
                      </div>

                      <div className="spell-sheet-meta">
                        <button className="roll-btn" title={`Lanzar ${sp.name || 'conjuro'}`} onClick={() => onRollSpell(sp)}>🎲</button>
                        <span className={`spell-level-chip ${isCantrip ? 'cantrip' : 'spell'}`}>
                          {isCantrip ? '✨ Truco (Nvl 0)' : `🔮 Nivel ${sp.level || '1'}`}
                        </span>

                        {isWarlock && limits.pactSlotLevel && (
                          <span className="warlock-scaled-chip">
                            ⚡ Escala a Nivel {limits.pactSlotLevel}
                          </span>
                        )}

                        {sp.damageType && (
                          <span className="dmg-badge-inline" style={{ borderColor: DAMAGE_TYPE_COLOR[sp.damageType] || 'var(--seam)', color: DAMAGE_TYPE_COLOR[sp.damageType] || 'var(--parchment-dim)' }}>
                            {DAMAGE_TYPE_EMOJI[sp.damageType] || ''} {sp.damageType}
                          </span>
                        )}
                        {sp.school && <span className="spell-school-badge">{sp.school}</span>}
                        <input
                          type="text"
                          placeholder="Notas o componentes (ej. [Ritual], Concentración)"
                          value={sp.notes}
                          onChange={e => {
                            const next = [...c.spellsKnown];
                            next[i].notes = e.target.value;
                            update({ spellsKnown: next });
                          }}
                          className="spell-notes-input"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="add-row-btn" onClick={() => update({ spellsKnown: [...c.spellsKnown, { name: '', level: '1', notes: '' }] })}>
                + añadir {cdef.spellcasting ? 'conjuro' : 'técnica'}
              </button>
            </div>
          );
        })()}



        {activeTab === 'class' && (() => {
          const baseDetail = BASE_CLASSES_CATALOG[c.className] || BASE_CLASSES_CATALOG['Guerrero'];
          const selectedOrPreviewSubclass = c.subclass || previewSubclass;
          const subDetail = selectedOrPreviewSubclass ? SUBCLASS_CATALOG[selectedOrPreviewSubclass] : null;
          const isSubclassUnlocked = c.level >= cdef.unlockLevel;

          return (
            <div className="class-tab-container">
              {/* SECTION 1: BASE CLASS OVERVIEW HERO */}
              <div className="base-class-hero-box">
                <div className="class-hero-top">
                  <div>
                    <h2 className="class-hero-title">📜 Clase: {baseDetail.name}</h2>
                    <span className="class-hero-sub">
                      Dado de Golpe: <b>{baseDetail.hitDie}</b> · Atributos Primarios: <b>{baseDetail.primaryAbilities}</b>
                    </span>
                  </div>
                  <div className="class-saves-badges">
                    <span className="save-badge-label">Salvaciones:</span>
                    {baseDetail.saves.map(s => (
                      <span key={s} className="class-save-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <p className="class-hero-desc">{baseDetail.description}</p>

                <div className="class-gimmick-banner">
                  <span className="gimmick-icon">⚡</span>
                  <div>
                    <strong>Mecánicas e Identidad Base:</strong>
                    <p>{baseDetail.coreGimmick}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: CLASS SPECIFIC CHOICES (e.g. FIGHTING STYLES / METAMAGIC / PATTS) */}
              {baseDetail.fightingStyles && baseDetail.fightingStyles.length > 0 && (
                <div className="class-section-box">
                  <div className="block-label">⚔️ Estilos de Combate de {baseDetail.name}</div>
                  <p className="section-subtitle-text">
                    Como {c.className}, puedes adoptar un estilo de combate especializado para potenciar tus ataques y defensa.
                  </p>

                  <div className="fighting-style-selector-row">
                    <select
                      value={c.fightingStyle || ''}
                      onChange={e => update({ fightingStyle: e.target.value })}
                      className="fighting-style-select"
                    >
                      <option value="">— Elegir Estilo de Combate —</option>
                      {baseDetail.fightingStyles.map(fs => (
                        <option key={fs.name} value={fs.name}>{fs.name}</option>
                      ))}
                    </select>

                    {c.fightingStyle && (
                      <span className="style-active-badge">✓ Estilo Activo: {c.fightingStyle}</span>
                    )}
                  </div>

                  {c.fightingStyle ? (() => {
                    const currentStyle = baseDetail.fightingStyles!.find(fs => fs.name === c.fightingStyle);
                    return currentStyle ? (
                      <div className="fighting-style-active-card">
                        <div className="style-card-name">🛡️ {currentStyle.name}</div>
                        <div className="style-card-desc">{currentStyle.description}</div>
                      </div>
                    ) : null;
                  })() : (
                    <div className="fighting-styles-preview-grid">
                      {baseDetail.fightingStyles.map(fs => (
                        <div
                          key={fs.name}
                          className="fighting-style-preview-card"
                          onClick={() => update({ fightingStyle: fs.name })}
                        >
                          <div className="style-prev-title">{fs.name}</div>
                          <div className="style-prev-desc">{fs.description}</div>
                          <button className="style-select-btn">+ Seleccionar</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Special choices (e.g. Metamagic for Sorcerer, Pact Boon for Warlock) */}
              {baseDetail.specialChoices && (
                <div className="class-section-box">
                  <div className="block-label">✨ {baseDetail.specialChoices.label}</div>
                  <div className="special-choices-grid">
                    {baseDetail.specialChoices.options.map(opt => {
                      const isSelected = c.classChoices?.[baseDetail.specialChoices!.key] === opt.name;
                      return (
                        <div
                          key={opt.name}
                          className={`special-choice-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => update({
                            classChoices: { ...(c.classChoices || {}), [baseDetail.specialChoices!.key]: opt.name }
                          })}
                        >
                          <div className="choice-header">
                            <span className="choice-title">{opt.name}</span>
                            {isSelected && <span className="choice-badge">✓ Elegido</span>}
                          </div>
                          <p className="choice-desc">{opt.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* WARLOCK: Invocaciones Mágicas */}
              {c.className === 'Brujo' && c.level >= 2 && (() => {
                const invLimit = getWarlockInvocationsLimit(c.level);
                const activeInvocations: string[] = c.warlockInvocations || [];

                const toggleInvocation = (name: string) => {
                  const isActive = activeInvocations.includes(name);
                  if (isActive) {
                    update({ warlockInvocations: activeInvocations.filter(n => n !== name) });
                  } else {
                    if (activeInvocations.length >= invLimit) {
                      alert(`Ya alcanzaste el límite de ${invLimit} invocación${invLimit !== 1 ? 'es' : ''} para Nivel ${c.level}.`);
                      return;
                    }
                    update({ warlockInvocations: [...activeInvocations, name] });
                  }
                };

                return (
                  <div className="class-section-box">
                    <div className="block-label">🔮 Invocaciones Mágicas de Brujo</div>
                    <div className="invocations-meta-bar">
                      <span className="inv-counter">
                        Activas: <strong>{activeInvocations.length}</strong> / {invLimit}
                      </span>
                      <span className="inv-level-note">
                        Límite para Nivel {c.level}: {invLimit} invocación{invLimit !== 1 ? 'es' : ''}
                      </span>
                    </div>
                    <div className="invocations-grid">
                      {WARLOCK_INVOCATIONS_CATALOG.map(inv => {
                        const isActive = activeInvocations.includes(inv.name);
                        return (
                          <div
                            key={inv.name}
                            className={`invocation-card ${isActive ? 'active' : ''}`}
                            onClick={() => toggleInvocation(inv.name)}
                          >
                            <div className="inv-card-header">
                              <span className="inv-name">{inv.name}</span>
                              {isActive && <span className="inv-badge">✓ Activa</span>}
                            </div>
                            <p className="inv-desc">{inv.description}</p>
                            {inv.prerequisite && (
                              <span className="inv-prereq">🔒 {inv.prerequisite}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              {/* SECTION 3: BASE CLASS PROGRESSION TIMELINE (LEVEL 1-20) */}
              <div className="class-section-box">
                <div className="block-label">📜 Progresión de {baseDetail.name} (Niveles 1 a 20)</div>
                <div className="class-features-timeline">
                  {baseDetail.featuresTimeline.map((feat, idx) => {
                    const isUnlocked = c.level >= feat.level;
                    return (
                      <div key={idx} className={`timeline-feature-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                        <div className="feature-card-top">
                          <span className="feature-title">{feat.title}</span>
                          <span className={`feature-level-pill ${isUnlocked ? 'pill-unlocked' : 'pill-locked'}`}>
                            {isUnlocked ? `Nivel ${feat.level} (Activo)` : `🔒 Nivel ${feat.level}`}
                          </span>
                        </div>
                        <p className="feature-desc">{feat.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4: INTEGRATED SUBCLASS SECTION */}
              <div className="subclass-embedded-container">
                <div className="subclass-embedded-header">
                  <h3 className="embedded-title">🔮 Subclase / Senda de {c.className}</h3>
                  <span className="embedded-subtitle">
                    Desbloqueo en Nivel {cdef.unlockLevel} · Nivel actual: Nivel {c.level}
                  </span>
                </div>

                {!isSubclassUnlocked && (
                  <div className="subclass-unlock-warning">
                    <span className="warning-icon">💡</span>
                    <div>
                      <strong>Senda en desarrollo (Nivel {c.level})</strong>
                      <p>Las subclases para <em>{c.className}</em> se desbloquean en <strong>Nivel {cdef.unlockLevel}</strong>. A continuación puedes previsualizar las opciones disponibles para planificar la evolución de tu personaje.</p>
                    </div>
                  </div>
                )}

                <div className="subclass-selector-card">
                  <div className="block-label">
                    {isSubclassUnlocked ? '⚔️ Tu Subclase Elegida' : '🔮 Previsualizador de Subclases'}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <select
                      value={c.subclass || previewSubclass}
                      onChange={e => {
                        const val = e.target.value;
                        if (isSubclassUnlocked) {
                          update({ subclass: val });
                        }
                        setPreviewSubclass(val);
                      }}
                      className="subclass-select-main"
                    >
                      <option value="">— Seleccionar Subclase de {c.className} —</option>
                      {cdef.subclasses.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>

                    {c.subclass && (
                      <span className="subclass-active-badge">
                        ✓ Subclase Activa en Nivel {c.level}
                      </span>
                    )}
                  </div>
                </div>

                {subDetail ? (
                  <div className="subclass-details-view">
                    {/* Hero Box */}
                    <div className="subclass-hero-box">
                      <div className="subclass-hero-header">
                        <div>
                          <h3 className="subclass-hero-title">{subDetail.name}</h3>
                          <span className="subclass-class-tag">{subDetail.className} · {subDetail.keyRole}</span>
                        </div>
                      </div>
                      <p className="subclass-hero-desc">{subDetail.description}</p>

                      <div className="subclass-gimmick-box">
                        <div className="gimmick-label">⚡ Mecánica Única Principal:</div>
                        <div className="gimmick-text">{subDetail.coreMechanic}</div>
                      </div>

                      {subDetail.proficienciesGranted && subDetail.proficienciesGranted.length > 0 && (
                        <div className="subclass-profs-box">
                          <span className="profs-label">🛡️ Competencias Otorgadas:</span>
                          <div className="profs-tags">
                            {subDetail.proficienciesGranted.map(p => (
                              <span key={p} className="subclass-prof-tag">{p}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions Bar */}
                    <div className="subclass-actions-bar">
                      {subDetail.spells && subDetail.spells.length > 0 && (
                        <button
                          className="subclass-btn-action spell-btn"
                          onClick={() => handleImportSubclassSpells(subDetail.spells!, subDetail.name)}
                        >
                          ✨ Importar Conjuros de Subclase al Conjurador
                        </button>
                      )}
                      {subDetail.companion && (
                        <button
                          className="subclass-btn-action companion-btn"
                          onClick={() => handleAddCompanionNote(subDetail.companion!)}
                        >
                          🐾 Registrar {subDetail.companion.name} en Notas
                        </button>
                      )}
                    </div>

                    {/* Spells */}
                    {subDetail.spells && subDetail.spells.length > 0 && (
                      <div className="subclass-section">
                        <div className="subclass-section-title">🪄 Conjuros / Trucos de la Senda</div>
                        <div className="subclass-spells-grid">
                          {subDetail.spells.map((sp, idx) => {
                            const spellUnlocked = c.level >= sp.levelUnlocked;
                            return (
                              <div key={idx} className={`subclass-spell-card ${spellUnlocked ? 'unlocked' : 'locked'}`}>
                                <div className="spell-card-header">
                                  <span className="spell-card-name">{sp.spellName}</span>
                                  <span className="spell-card-lvl">Nivel {sp.spellLevel}</span>
                                </div>
                                <div className="spell-card-status">
                                  {spellUnlocked ? (
                                    <span className="badge-ok">✓ Desbloqueado (Nv {sp.levelUnlocked})</span>
                                  ) : (
                                    <span className="badge-lock">🔒 Requiere Nivel {sp.levelUnlocked}</span>
                                  )}
                                </div>
                                {sp.notes && <div className="spell-card-notes">{sp.notes}</div>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Auras */}
                    {subDetail.auras && subDetail.auras.length > 0 && (
                      <div className="subclass-section">
                        <div className="subclass-section-title">🛡️ Auras y Efectos Zonal</div>
                        <div className="subclass-auras-list">
                          {subDetail.auras.map((aura, idx) => {
                            const auraUnlocked = c.level >= aura.levelUnlocked;
                            return (
                              <div key={idx} className={`subclass-aura-card ${auraUnlocked ? 'unlocked' : 'locked'}`}>
                                <div className="aura-card-header">
                                  <span className="aura-name">✨ {aura.name}</span>
                                  <span className="aura-range">📍 Alcance: {aura.range}</span>
                                </div>
                                <div className="aura-status">
                                  {auraUnlocked ? '✅ Aura Activa' : `🔒 Se desbloquea a Nivel ${aura.levelUnlocked}`}
                                </div>
                                <p className="aura-desc">{aura.description}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Companion */}
                    {subDetail.companion && (
                      <div className="subclass-section">
                        <div className="subclass-section-title">🐾 Compañero / Familiar de la Senda</div>
                        <div className="subclass-companion-box">
                          <div className="companion-header">
                            <span className="comp-name">{subDetail.companion.name}</span>
                            <span className="comp-type">{subDetail.companion.type}</span>
                          </div>
                          <p className="comp-desc">{subDetail.companion.description}</p>
                          <div className="comp-stats">📊 {subDetail.companion.statsSummary}</div>
                        </div>
                      </div>
                    )}

                    {/* Maneuvers */}
                    {subDetail.maneuversOrAbilities && subDetail.maneuversOrAbilities.length > 0 && (
                      <div className="subclass-section">
                        <div className="subclass-section-title">⚔️ Maniobras y Capacidades Disponibles</div>
                        <div className="maneuvers-list">
                          {subDetail.maneuversOrAbilities.map((man, idx) => (
                            <div key={idx} className="maneuver-item">
                              🗡️ {man}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features Timeline */}
                    <div className="subclass-section">
                      <div className="subclass-section-title">📜 Progresión de Rasgos de Subclase</div>
                      <div className="subclass-features-timeline">
                        {subDetail.features.map((feat, idx) => {
                          const featUnlocked = c.level >= feat.level;
                          return (
                            <div key={idx} className={`timeline-feature-card ${featUnlocked ? 'unlocked' : 'locked'}`}>
                              <div className="feature-card-top">
                                <span className="feature-title">{feat.title}</span>
                                <span className={`feature-level-pill ${featUnlocked ? 'pill-unlocked' : 'pill-locked'}`}>
                                  {featUnlocked ? `Nivel ${feat.level} (Activo)` : `🔒 Nivel ${feat.level}`}
                                </span>
                              </div>
                              <p className="feature-desc">{feat.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flavor" style={{ marginTop: '16px', textAlign: 'center', padding: '20px' }}>
                    Elige una subclase arriba para ver toda su descripción, mecánicas únicas, conjuros, auras y progresión por nivel.
                  </div>
                )}

                {/* Subclass Notes */}
                <div className="field" style={{ marginTop: '20px' }}>
                  <label>📝 Notas de tu subclase (votos, tradición, juramentos, historial)</label>
                  <textarea
                    rows={5}
                    value={c.subclassNotes || ''}
                    onChange={e => update({ subclassNotes: e.target.value })}
                    placeholder="Escribe aquí tus votos sagrados, patrón del brujo, libro de sombras o anotaciones sobre tu subclase..."
                  />
                </div>
              </div>
            </div>
          );
        })()}

        {activeTab === 'gear' && (() => {
          // Helper to classify equipment item into one of the 3 sections
          const getItemSection = (item: { name: string; category?: string }): 'equipo' | 'accesorios' | 'inventario' => {
            const cat = (item.category || '').toLowerCase().trim();
            const name = (item.name || '').toLowerCase().trim();

            // Explicit accessory / container check
            if (
              ['anillo', 'collar', 'cuello', 'pulsera', 'mochila', 'bandolera', 'morral', 'cinturón', 'amuleto', 'accesorio', 'accesorios', 'contenedor'].includes(cat) ||
              /anillo|collar|pulsera|amuleto|cinturón|mochila|bandolera|morral|bolsa|saco de viaje/.test(name)
            ) {
              return 'accesorios';
            }

            // Body wearable check
            if (
              ['cabeza', 'cuerpo', 'torso', 'armadura', 'espalda', 'brazos', 'manos', 'muñecas', 'piernas', 'pies', 'equipo'].includes(cat) ||
              /casco|sombrero|capucha|yelmo|diadema/.test(name) ||
              /armadura|pechera|túnica|ropas|coraza|peto|cuero/.test(name) ||
              /capa|manto|carcaj/.test(name) ||
              /guantes|guanteletes|brazales/.test(name) ||
              /botas|grebas|pantalones|calzado/.test(name)
            ) {
              return 'equipo';
            }

            // Otherwise: miscelánea, herramientas, kits, instrumentos -> inventario
            return 'inventario';
          };

          const BODY_SLOT_ORDER: Record<string, number> = {
            'cabeza': 1,
            'cuerpo': 2,
            'torso': 2,
            'armadura': 2,
            'espalda': 3,
            'brazos': 4,
            'manos': 4,
            'muñecas': 4,
            'piernas': 5,
            'pies': 5,
          };

          const indexedEquipment = (c.equipment || []).map((item, idx) => ({ item, idx }));

          // 1. Equipo (ordered top to bottom: Cabeza, Cuerpo, Espalda, Brazos, Piernas)
          const equipoItems = indexedEquipment
            .filter(({ item }) => getItemSection(item) === 'equipo')
            .sort((a, b) => {
              const catA = (a.item.category || '').toLowerCase().trim();
              const catB = (b.item.category || '').toLowerCase().trim();
              const orderA = BODY_SLOT_ORDER[catA] ?? 2;
              const orderB = BODY_SLOT_ORDER[catB] ?? 2;
              return orderA - orderB;
            });

          // 2. Accesorios
          const accesoriosItems = indexedEquipment
            .filter(({ item }) => getItemSection(item) === 'accesorios');

          // 3. Inventario / Mochila (Herramientas, kits, instrumentos, consumibles, etc.)
          const inventarioItems = indexedEquipment
            .filter(({ item }) => getItemSection(item) === 'inventario');

          return (
            <div id="sheet-section-gear">
              {/* ── MONEDAS Y RIQUEZAS ── */}
              <div className="block-label">💰 Monedas y Riquezas</div>
              <div className="gold-card-panel">
                <div className="field" style={{ flex: 1, maxWidth: '220px' }}>
                  <label>🪙 Piezas de Oro (PO)</label>
                  <input
                    type="number"
                    min={0}
                    value={c.gold || 0}
                    onChange={e => update({ gold: parseInt(e.target.value) || 0 })}
                    style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--brass)' }}
                  />
                </div>
                <div className="gold-summary-badge">
                  Tesoro actual: <strong>{c.gold || 0} PO</strong>
                </div>
              </div>

              {/* ── ARMAS Y ATAQUES ── */}
              <div className="block-label" style={{ marginTop: '16px' }}>⚔️ Armas y ataques</div>
              <div className="list-rows">
                {c.weapons.map((w, i) => {
                  const mod = abilityMod(c.abilities[w.ability]) + (w.proficient ? profBonus(c.level) : 0);
                  return (
                    <div key={i} className="weapon-sheet-card">
                      <div className="weapon-sheet-header">
                        <input type="text" placeholder="Arma" value={w.name} onChange={e => {
                          const next = [...c.weapons];
                          next[i].name = e.target.value;
                          update({ weapons: next });
                        }} className="weapon-name-input" />
                        {w.magical && <span className="magical-badge">✨ Mágica</span>}
                        <button className="rm" onClick={() => update({ weapons: c.weapons.filter((_, idx) => idx !== i) })}>✕</button>
                      </div>
                      <div className="weapon-sheet-stats">
                        <button className="roll-btn" title={`Atacar con ${w.name || 'arma'}`} onClick={() => onRollWeapon(w)}>🎲</button>
                        <select value={w.ability} onChange={e => {
                          const next = [...c.weapons];
                          next[i].ability = e.target.value as AbilityKey;
                          update({ weapons: next });
                        }}>
                          <option value="str">FUE</option>
                          <option value="dex">DES</option>
                        </select>
                        <input type="text" placeholder="Dado daño" value={w.dice} onChange={e => {
                          const next = [...c.weapons];
                          next[i].dice = e.target.value;
                          update({ weapons: next });
                        }} style={{ width: '60px' }} />
                        <span className="weapon-sheet-attack">
                          Ataque {fmtSigned(mod)}
                        </span>
                        <label className="weapon-prof-label">
                          <input
                            type="checkbox"
                            checked={w.proficient}
                            onChange={e => {
                              const next = [...c.weapons];
                              next[i].proficient = e.target.checked;
                              update({ weapons: next });
                            }}
                            style={{ width: 'auto', verticalAlign: 'middle' }}
                          />
                          Competencia
                        </label>

                      </div>
                      <div className="weapon-sheet-badges">
                        {w.category && (
                          <span className={`weapon-cat-badge ${w.category}`}>
                            {w.category === 'simple' ? 'Simple' : 'Marcial'}
                          </span>
                        )}
                        {w.range && (
                          <span className="weapon-range-badge">{w.range}</span>
                        )}
                        {w.damageType && (
                          <span className="dmg-badge-inline" style={{ borderColor: DAMAGE_TYPE_COLOR[w.damageType] || 'var(--seam)', color: DAMAGE_TYPE_COLOR[w.damageType] || 'var(--parchment-dim)' }}>
                            {DAMAGE_TYPE_EMOJI[w.damageType] || ''} {w.damageType}
                          </span>
                        )}
                        {w.properties && w.properties.map(p => (
                          <span key={p} className="weapon-prop-badge">{p}</span>
                        ))}
                        {w.versatileDice && (
                          <span className="weapon-prop-badge">versátil {w.versatileDice}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="add-row-btn" onClick={() => update({ weapons: [...c.weapons, { name: '', ability: 'str', dice: '1d6', type: 'contundente', proficient: true, notes: '' }] })}>
                + añadir arma
              </button>

              {/* ── EQUIPO ── */}
              <div className="block-label" style={{ marginTop: '20px' }}>🛡️ Equipo</div>
              <div className="inventory-section-note">
                Objetos vestibles en el cuerpo ordenados de arriba a abajo: <b>Cabeza</b>, <b>Cuerpo</b>, <b>Espalda</b>, <b>Brazos</b> y <b>Piernas</b> (incluye calzado).
              </div>
              <div className="inventory-table-header">
                <span className="col-name">Objeto</span>
                <span className="col-category">Zona / Categoría</span>
                <span className="col-qty">Cant.</span>
                <span className="col-notes">Descripción / Efecto</span>
                <span className="col-actions"></span>
              </div>
              <div className="list-rows">
                {equipoItems.length === 0 ? (
                  <div className="flavor">No hay vestimentas o piezas de equipo registradas.</div>
                ) : (
                  equipoItems.map(({ item, idx }) => {
                    const currentCategory = item.category === 'Pies' ? 'Piernas' : (item.category || 'Cuerpo');
                    return (
                      <div key={idx} className="inventory-sheet-row">
                        <input
                          type="text"
                          placeholder="Ej: Casco de placas, Capa de camuflaje..."
                          value={item.name}
                          onChange={e => {
                            const next = [...(c.equipment || [])];
                            next[idx].name = e.target.value;
                            update({ equipment: next });
                          }}
                          className="inv-name-input"
                        />
                        <select
                          value={currentCategory}
                          onChange={e => {
                            const next = [...(c.equipment || [])];
                            next[idx].category = e.target.value;
                            update({ equipment: next });
                          }}
                          className="inv-category-select"
                        >
                          <option value="Cabeza">👑 Cabeza</option>
                          <option value="Cuerpo">🛡️ Cuerpo</option>
                          <option value="Espalda">🧥 Espalda</option>
                          <option value="Brazos">🥊 Brazos</option>
                          <option value="Piernas">🦵 Piernas (y pies)</option>
                        </select>
                        <input
                          type="number"
                          min={1}
                          placeholder="Cant."
                          value={item.qty}
                          onChange={e => {
                            const next = [...(c.equipment || [])];
                            next[idx].qty = parseInt(e.target.value) || 1;
                            update({ equipment: next });
                          }}
                          className="inv-qty-input"
                        />
                        <input
                          type="text"
                          placeholder="Efectos, CA, propiedades..."
                          value={item.notes}
                          onChange={e => {
                            const next = [...(c.equipment || [])];
                            next[idx].notes = e.target.value;
                            update({ equipment: next });
                          }}
                          className="inv-notes-input"
                        />
                        <button className="rm" onClick={() => update({ equipment: (c.equipment || []).filter((_, i2) => i2 !== idx) })}>✕</button>
                      </div>
                    );
                  })
                )}
              </div>
              <button
                className="add-row-btn"
                onClick={() => update({ equipment: [...(c.equipment || []), { name: '', qty: 1, notes: '', category: 'Cuerpo' }] })}
                style={{ marginTop: '8px' }}
              >
                + añadir equipo
              </button>

              {/* ── ACCESORIOS ── */}
              <div className="block-label" style={{ marginTop: '20px' }}>💍 Accesorios</div>
              <div className="inventory-section-note">
                Anillos, pulseras, collares, mochilas, bandoleras, morrales, cinturones y otros contenedores o joyas.
              </div>
              <div className="inventory-table-header">
                <span className="col-name">Accesorio</span>
                <span className="col-category">Tipo</span>
                <span className="col-qty">Cant.</span>
                <span className="col-notes">Descripción / Efecto</span>
                <span className="col-actions"></span>
              </div>
              <div className="list-rows">
                {accesoriosItems.length === 0 ? (
                  <div className="flavor">No hay accesorios o contenedores registrados.</div>
                ) : (
                  accesoriosItems.map(({ item, idx }) => (
                    <div key={idx} className="inventory-sheet-row">
                      <input
                        type="text"
                        placeholder="Ej: Anillo de protección, Mochila de viaje..."
                        value={item.name}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].name = e.target.value;
                          update({ equipment: next });
                        }}
                        className="inv-name-input"
                      />
                      <select
                        value={item.category || 'Accesorio'}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].category = e.target.value;
                          update({ equipment: next });
                        }}
                        className="inv-category-select"
                      >
                        <option value="Anillo">💍 Anillo</option>
                        <option value="Collar">📿 Collar / Amuleto</option>
                        <option value="Pulsera">📿 Pulsera / Brazalete</option>
                        <option value="Mochila">🎒 Mochila</option>
                        <option value="Bandolera">💼 Bandolera</option>
                        <option value="Morral">👛 Morral / Bolsa</option>
                        <option value="Cinturón">🥋 Cinturón</option>
                        <option value="Accesorio">✨ Accesorio General</option>
                      </select>
                      <input
                        type="number"
                        min={1}
                        placeholder="Cant."
                        value={item.qty}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].qty = parseInt(e.target.value) || 1;
                          update({ equipment: next });
                        }}
                        className="inv-qty-input"
                      />
                      <input
                        type="text"
                        placeholder="Capacidad, encantamiento, notas..."
                        value={item.notes}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].notes = e.target.value;
                          update({ equipment: next });
                        }}
                        className="inv-notes-input"
                      />
                      <button className="rm" onClick={() => update({ equipment: (c.equipment || []).filter((_, i2) => i2 !== idx) })}>✕</button>
                    </div>
                  ))
                )}
              </div>
              <button
                className="add-row-btn"
                onClick={() => update({ equipment: [...(c.equipment || []), { name: '', qty: 1, notes: '', category: 'Accesorio' }] })}
                style={{ marginTop: '8px' }}
              >
                + añadir accesorio
              </button>

              {/* ── INVENTARIO / MOCHILA ── */}
              <div className="block-label" style={{ marginTop: '20px' }}>🎒 Inventario / Mochila</div>
              <div className="inventory-section-note">
                Instrumentos musicales, kits de herramientas, pociones, raciones y objetos misceláneos. No se equipan en el cuerpo.
              </div>
              <div className="inventory-table-header">
                <span className="col-name">Objeto</span>
                <span className="col-category">Categoría</span>
                <span className="col-qty">Cant.</span>
                <span className="col-notes">Descripción / Notas</span>
                <span className="col-actions"></span>
              </div>
              <div className="list-rows">
                {inventarioItems.length === 0 ? (
                  <div className="flavor">No hay objetos misceláneos o herramientas en la mochila.</div>
                ) : (
                  inventarioItems.map(({ item, idx }) => (
                    <div key={idx} className="inventory-sheet-row">
                      <input
                        type="text"
                        placeholder="Ej: Kit de curación, Odre de agua, Antorcha..."
                        value={item.name}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].name = e.target.value;
                          update({ equipment: next });
                        }}
                        className="inv-name-input"
                      />
                      <select
                        value={item.category || 'Miscelánea'}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].category = e.target.value;
                          update({ equipment: next });
                        }}
                        className="inv-category-select"
                      >
                        <option value="Herramientas">🛠️ Herramientas</option>
                        <option value="Kit">🧰 Kit de Aventura</option>
                        <option value="Instrumento">🪕 Instrumento Musical</option>
                        <option value="Consumible">🧪 Consumible / Poción</option>
                        <option value="Miscelánea">📦 Miscelánea / Varios</option>
                      </select>
                      <input
                        type="number"
                        min={1}
                        placeholder="Cant."
                        value={item.qty}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].qty = parseInt(e.target.value) || 1;
                          update({ equipment: next });
                        }}
                        className="inv-qty-input"
                      />
                      <input
                        type="text"
                        placeholder="Descripción o uso..."
                        value={item.notes}
                        onChange={e => {
                          const next = [...(c.equipment || [])];
                          next[idx].notes = e.target.value;
                          update({ equipment: next });
                        }}
                        className="inv-notes-input"
                      />
                      <button className="rm" onClick={() => update({ equipment: (c.equipment || []).filter((_, i2) => i2 !== idx) })}>✕</button>
                    </div>
                  ))
                )}
              </div>
              <button
                className="add-row-btn"
                onClick={() => update({ equipment: [...(c.equipment || []), { name: '', qty: 1, notes: '', category: 'Miscelánea' }] })}
                style={{ marginTop: '8px' }}
              >
                + añadir objeto al inventario
              </button>

              {/* ── FORJA / CRAFTEO / MEJORAS ── */}
              <div className="block-label" style={{ marginTop: '24px' }}>⚒️ Forja, Crafteo y Mejoras</div>
              <EquipmentForgePanel
                character={c}
                onUpdateCharacter={onUpdateCharacter}
              />
            </div>
          );
        })()}



        {activeTab === 'companions' && (
          <>
            <div className="block-label">Compañeros, monturas y aliados</div>

            {/* PALADIN: Find Steed (Nv.5+) */}
            {c.className === 'Paladín' && c.level >= 5 && (
              <div className="paladin-steed-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">🐴</span>
                  <div>
                    <div className="pact-banner-title" style={{ color: '#f0c674' }}>Invocar Corcel (Nivel 5+)</div>
                    <div className="pact-banner-sub">Conjuro Find Steed · Montura divina con vínculo telepático</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn steed-horse"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Caballo de Guerra');
                      if (exists) { alert('El Caballo de Guerra ya está en tu lista de compañeros.'); return; }
                      // Remove any existing steed (only one at a time)
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Caballo de Guerra',
                          type: 'Montura (Corcel)',
                          hp: 19,
                          notes: `CA 11 | Velocidad 18m | Inteligencia 6 | Vínculo telepático 1.5km | Montura leal, lucha solo si la montas.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐴</span>
                    <span className="summon-label">Caballo de Guerra</span>
                  </button>
                  <button
                    className="familiar-summon-btn steed-mastiff"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Mastín');
                      if (exists) { alert('El Mastín ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Mastín',
                          type: 'Montura (Corcel)',
                          hp: 15,
                          notes: `CA 12 | Velocidad 12m | Olfato +4 | Puede montar criaturas Medianas | Vínculo telepático 1.5km.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐕</span>
                    <span className="summon-label">Mastín</span>
                  </button>
                  <button
                    className="familiar-summon-btn steed-elk"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Alce');
                      if (exists) { alert('El Alce ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Alce',
                          type: 'Montura (Corcel)',
                          hp: 22,
                          notes: `CA 10 | Velocidad 24m | Derriba al cargar (CD 13 FUE) | Montura rápida y resistente.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦌</span>
                    <span className="summon-label">Alce</span>
                  </button>
                  <button
                    className="familiar-summon-btn steed-camel"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Camello');
                      if (exists) { alert('El Camello ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Camello',
                          type: 'Montura (Corcel)',
                          hp: 15,
                          notes: `CA 9 | Velocidad 15m | Resistencia a clima desértico | Puede llevar carga pesada | 2 días sin agua.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐪</span>
                    <span className="summon-label">Camello</span>
                  </button>
                </div>
              </div>
            )}

            {/* PALADIN: Find Greater Steed (Nv.13+) */}
            {c.className === 'Paladín' && c.level >= 13 && (
              <div className="paladin-greater-steed-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">🦄</span>
                  <div>
                    <div className="pact-banner-title" style={{ color: '#ffd700' }}>Invocar Corcel Mayor (Nivel 13+)</div>
                    <div className="pact-banner-sub">Conjuro Find Greater Steed · Montura épica mítica</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn steed-pegasus"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Pegaso');
                      if (exists) { alert('El Pegaso ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Pegaso',
                          type: 'Montura Épica (Corcel Mayor)',
                          hp: 59,
                          notes: `CA 12 | Vuelo 27m | Velocidad 27m | Vínculo telepático 1.5km | Puede cargar a un jinete.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦄</span>
                    <span className="summon-label">Pegaso</span>
                  </button>
                  <button
                    className="familiar-summon-btn steed-griffon"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Grifo');
                      if (exists) { alert('El Grifo ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Grifo',
                          type: 'Montura Épica (Corcel Mayor)',
                          hp: 59,
                          notes: `CA 12 | Vuelo 24m | Velocidad 9m | Ataques: Pico 1d8+4 + Garras 2d6+4 | Montura agresiva.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦅</span>
                    <span className="summon-label">Grifo</span>
                  </button>
                  <button
                    className="familiar-summon-btn steed-direwolf"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Lobo Terrible');
                      if (exists) { alert('El Lobo Terrible ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Lobo Terrible',
                          type: 'Montura Épica (Corcel Mayor)',
                          hp: 45,
                          notes: `CA 14 | Velocidad 15m | Derriba al golpear (CD 14 FUE) | Ventaja ataque si aliado adyacente | Montura sigilosa y letal.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐺</span>
                    <span className="summon-label">Lobo Terrible</span>
                  </button>
                  <button
                    className="familiar-summon-btn steed-sabertooth"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Tigre Dientes de Sable');
                      if (exists) { alert('El Tigre Dientes de Sable ya está en tu lista de compañeros.'); return; }
                      const filtered = c.companions.filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
                      update({
                        companions: [...filtered, {
                          name: 'Tigre Dientes de Sable',
                          type: 'Montura Épica (Corcel Mayor)',
                          hp: 52,
                          notes: `CA 12 | Velocidad 12m | Olfato +5 | Abalanzarse: derriba + mordisco 1d10+5 | Sigilo +6.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐯</span>
                    <span className="summon-label">Tigre D. de Sable</span>
                  </button>
                </div>
              </div>
            )}

            {/* RANGER: Señor de las Bestias - beast companion presets */}
            {c.className === 'Explorador' && c.subclass === 'Señor de las Bestias' && (
              <div className="ranger-beast-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">🐾</span>
                  <div>
                    <div className="pact-banner-title" style={{ color: '#6dbf67' }}>Señor de las Bestias</div>
                    <div className="pact-banner-sub">Invocación rápida de tu compañero bestia</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn beast-wolf"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Lobo');
                      if (exists) { alert('El Lobo ya está en tu lista de compañeros.'); return; }
                      update({
                        companions: [...c.companions, {
                          name: 'Lobo',
                          type: 'Bestia (Lobo)',
                          hp: 5 * c.level,
                          notes: `CA ${13 + profBonus(c.level)} | Daño 1d6+2+${profBonus(c.level)} | Derriba criaturas Grandes o menores al golpear (CD FUE). Actúa en tu turno.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐺</span>
                    <span className="summon-label">Convocar Lobo</span>
                  </button>

                  <button
                    className="familiar-summon-btn beast-bear"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Oso');
                      if (exists) { alert('El Oso ya está en tu lista de compañeros.'); return; }
                      update({
                        companions: [...c.companions, {
                          name: 'Oso',
                          type: 'Bestia (Oso Pardo)',
                          hp: 5 * c.level,
                          notes: `CA ${13 + profBonus(c.level)} | Daño 1d8+4+${profBonus(c.level)} | Dos ataques por turno. Abrazo: apresa al objetivo. Actúa en tu turno.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐻</span>
                    <span className="summon-label">Convocar Oso</span>
                  </button>

                  <button
                    className="familiar-summon-btn beast-eagle"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Águila');
                      if (exists) { alert('El Águila ya está en tu lista de compañeros.'); return; }
                      update({
                        companions: [...c.companions, {
                          name: 'Águila',
                          type: 'Bestia (Águila Gigante)',
                          hp: 5 * c.level,
                          notes: `CA ${13 + profBonus(c.level)} | Daño 1d6+1+${profBonus(c.level)} | Vuela 24m. Sentido agudo. Puede llevar a un aliado mediano. Actúa en tu turno.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦅</span>
                    <span className="summon-label">Convocar Águila</span>
                  </button>

                  <button
                    className="familiar-summon-btn beast-panther"
                    onClick={() => {
                      const exists = c.companions.some(f => f.name === 'Pantera');
                      if (exists) { alert('La Pantera ya está en tu lista de compañeros.'); return; }
                      update({
                        companions: [...c.companions, {
                          name: 'Pantera',
                          type: 'Bestia (Pantera)',
                          hp: 5 * c.level,
                          notes: `CA ${13 + profBonus(c.level)} | Daño 1d6+3+${profBonus(c.level)} | Sigilo. Abalanzarse: derriba si falla CD FUE. Actúa en tu turno.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐆</span>
                    <span className="summon-label">Convocar Pantera</span>
                  </button>
                </div>
              </div>
            )}

            {/* MAGO: Escuela de Nigromancia - undead servants presets */}
            {c.className === 'Mago' && c.subclass === 'Escuela de Nigromancia' && c.level >= 6 && (
              <div className="necro-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">💀</span>
                  <div>
                    <div className="pact-banner-title" style={{ color: '#b0c4de' }}>Servidores de la Muerte</div>
                    <div className="pact-banner-sub">Creación rápida de no-muertos (Animar a los Muertos)</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn undead-skeleton"
                    onClick={() => {
                      update({
                        companions: [...c.companions, {
                          name: 'Esqueleto',
                          type: 'No-Muerto (Esqueleto)',
                          hp: 13 + c.level,
                          notes: `CA 13 | Daño 1d6+2+${profBonus(c.level)} (arco/espada) | Inmune a veneno y al cansancio. Obedece tus órdenes.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">💀</span>
                    <span className="summon-label">Animar Esqueleto</span>
                  </button>

                  <button
                    className="familiar-summon-btn undead-zombie"
                    onClick={() => {
                      update({
                        companions: [...c.companions, {
                          name: 'Zombie',
                          type: 'No-Muerto (Zombie)',
                          hp: 22 + c.level,
                          notes: `CA 8 | Daño 1d6+1+${profBonus(c.level)} (puñetazo) | Resistencia No-Muerta: si recibe daño mortal, salvación CD 5+daño; si lo supera, queda a 1 PG.`
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🧟</span>
                    <span className="summon-label">Animar Zombie</span>
                  </button>
                </div>
              </div>
            )}

            <div className="list-rows">
              {c.companions.map((comp, i) => (
                <div key={i} className="list-row wide">
                  <input type="text" placeholder="Nombre" value={comp.name} onChange={e => {
                    const next = [...c.companions];
                    next[i].name = e.target.value;
                    update({ companions: next });
                  }} />
                  <input type="text" placeholder="Tipo" value={comp.type} onChange={e => {
                    const next = [...c.companions];
                    next[i].type = e.target.value;
                    update({ companions: next });
                  }} />
                  <input type="number" placeholder="PG" value={comp.hp || ''} onChange={e => {
                    const next = [...c.companions];
                    next[i].hp = parseInt(e.target.value) || 0;
                    update({ companions: next });
                  }} />
                  <input type="text" placeholder="Notas" value={comp.notes} onChange={e => {
                    const next = [...c.companions];
                    next[i].notes = e.target.value;
                    update({ companions: next });
                  }} />
                  <button className="rm" onClick={() => update({ companions: c.companions.filter((_, idx) => idx !== i) })}>✕</button>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ companions: [...c.companions, { name: '', type: '', hp: 0, notes: '' }] })}>
              + añadir compañero
            </button>
          </>
        )}

        {activeTab === 'familiars' && (
          <>
            <div className="block-label">Familiares</div>

            {/* MAGO: Buscar Familiar - standard D&D familiars */}
            {c.className === 'Mago' && (
              <div className="wizard-familiar-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">📜</span>
                  <div>
                    <div className="pact-banner-title" style={{ color: '#7eb8e8' }}>Buscar Familiar</div>
                    <div className="pact-banner-sub">Invocación rápida de familiar arcano (ritual de 1h)</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn fam-owl"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Búho');
                      if (exists) { alert('El Búho ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Búho',
                          form: 'Búho',
                          notes: 'Vuelo 18m. Visión en oscuridad 36m. Percepción +3. Puede entregar objetos. Ayudar como acción en combate.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦉</span>
                    <span className="summon-label">Buscar Búho</span>
                  </button>

                  <button
                    className="familiar-summon-btn fam-cat"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Gato');
                      if (exists) { alert('El Gato ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Gato',
                          form: 'Gato',
                          notes: 'Velocidad 12m. Trepar 9m. Sigilo +4. Percepción +3. Sentidos agudizados de olfato. Ayudar como acción en combate.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐱</span>
                    <span className="summon-label">Buscar Gato</span>
                  </button>

                  <button
                    className="familiar-summon-btn fam-raven"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Cuervo');
                      if (exists) { alert('El Cuervo ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Cuervo',
                          form: 'Cuervo',
                          notes: 'Vuelo 15m. Puede imitar sonidos simples. Percepción +3. Multiataques con pico. Vínculo telepático 30m.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐦‍⬛</span>
                    <span className="summon-label">Buscar Cuervo</span>
                  </button>

                  <button
                    className="familiar-summon-btn fam-bat"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Murciélago');
                      if (exists) { alert('El Murciélago ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Murciélago',
                          form: 'Murciélago',
                          notes: 'Vuelo 9m. Ecolocalización 18m. Ciego fuera de ese rango. Percepción +3 (sonido). Ayudar como acción en combate.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦇</span>
                    <span className="summon-label">Buscar Murciélago</span>
                  </button>

                  <button
                    className="familiar-summon-btn fam-rat"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Rata');
                      if (exists) { alert('La Rata ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Rata',
                          form: 'Rata',
                          notes: 'Velocidad 9m. Ventaja en percepción de olfato. Puede infiltrarse en espacios diminutos. Ayudar como acción en combate.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐭</span>
                    <span className="summon-label">Buscar Rata</span>
                  </button>

                  <button
                    className="familiar-summon-btn fam-toad"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Sapo');
                      if (exists) { alert('El Sapo ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Sapo',
                          form: 'Sapo',
                          notes: 'Velocidad 6m, nado 6m. Anfibio: puede respirar bajo agua. Visión en oscuridad 9m. Ayudar como acción en combate.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐸</span>
                    <span className="summon-label">Buscar Sapo</span>
                  </button>
                </div>
              </div>
            )}

            {/* DRUID: Wild Companion (TCoE) - any druid */}
            {c.className === 'Druida' && (
              <div className="druid-familiar-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">🌿</span>
                  <div>
                    <div className="pact-banner-title" style={{ color: '#6dbf67' }}>Compañero Salvaje (Wild Companion)</div>
                    <div className="pact-banner-sub">Gasta 1 uso de Forma Salvaje para invocar un familiar espiritual</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn druid-fam-owl"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Búho Salvaje');
                      if (exists) { alert('El Búho Salvaje ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Búho Salvaje',
                          form: 'Búho',
                          notes: '🌿 Compañero Salvaje (gasta 1 uso de Forma Salvaje). Vuelo 18m. Visión en oscuridad 36m. Percepción +3. Ayudar como acción en combate.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦉</span>
                    <span className="summon-label">Búho Salvaje</span>
                  </button>
                  <button
                    className="familiar-summon-btn druid-fam-cat"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Gato Salvaje');
                      if (exists) { alert('El Gato Salvaje ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Gato Salvaje',
                          form: 'Gato',
                          notes: '🌿 Compañero Salvaje (gasta 1 uso de Forma Salvaje). Velocidad 12m. Trepar 9m. Sigilo +4. Percepción +3. Ayudar como acción.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐱</span>
                    <span className="summon-label">Gato Salvaje</span>
                  </button>
                  <button
                    className="familiar-summon-btn druid-fam-raven"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Cuervo Salvaje');
                      if (exists) { alert('El Cuervo Salvaje ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Cuervo Salvaje',
                          form: 'Cuervo',
                          notes: '🌿 Compañero Salvaje (gasta 1 uso de Forma Salvaje). Vuelo 15m. Imita sonidos. Percepción +3. Vínculo telepático 30m.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐦‍⬛</span>
                    <span className="summon-label">Cuervo Salvaje</span>
                  </button>
                  <button
                    className="familiar-summon-btn druid-fam-bat"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Murciélago Salvaje');
                      if (exists) { alert('El Murciélago Salvaje ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Murciélago Salvaje',
                          form: 'Murciélago',
                          notes: '🌿 Compañero Salvaje (gasta 1 uso de Forma Salvaje). Vuelo 9m. Ecolocalización 18m. Percepción +3 (sonido). Ayudar.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🦇</span>
                    <span className="summon-label">Murciélago Salvaje</span>
                  </button>
                  <button
                    className="familiar-summon-btn druid-fam-rat"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Rata Salvaje');
                      if (exists) { alert('La Rata Salvaje ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Rata Salvaje',
                          form: 'Rata',
                          notes: '🌿 Compañero Salvaje (gasta 1 uso de Forma Salvaje). Velocidad 9m. Ventaja percepción olfato. Infiltración. Ayudar.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐭</span>
                    <span className="summon-label">Rata Salvaje</span>
                  </button>
                  <button
                    className="familiar-summon-btn druid-fam-toad"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Sapo Salvaje');
                      if (exists) { alert('El Sapo Salvaje ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Sapo Salvaje',
                          form: 'Sapo',
                          notes: '🌿 Compañero Salvaje (gasta 1 uso de Forma Salvaje). Velocidad 6m, nado 6m. Anfibio. Visión en oscuridad 9m. Ayudar.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐸</span>
                    <span className="summon-label">Sapo Salvaje</span>
                  </button>
                </div>
              </div>
            )}

            {/* WARLOCK: Pacto de la Cadena - familiar presets */}
            {c.className === 'Brujo' && c.classChoices?.pactBoon === 'Pacto de la Cadena' && (
              <div className="warlock-pact-banner">
                <div className="pact-banner-header">
                  <span className="pact-banner-icon">⛓️</span>
                  <div>
                    <div className="pact-banner-title">Pacto de la Cadena</div>
                    <div className="pact-banner-sub">Convocación instantánea de tu familiar superior</div>
                  </div>
                </div>
                <div className="warlock-familiar-preset-row">
                  <button
                    className="familiar-summon-btn imp"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Diablillo');
                      if (exists) { alert('El Diablillo ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Diablillo',
                          form: 'Diablillo (Imp)',
                          notes: 'Resistencia mágica. Invisibilidad. Resistencia a daño no mágico. Veneno: CD 11 CON o 3d6 veneno. Visión en oscuridad 36m. Puede cambiar de forma (rata, cuervo, araña, diablillo).'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">😈</span>
                    <span className="summon-label">Convocar Diablillo</span>
                  </button>

                  <button
                    className="familiar-summon-btn quasit"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Quasit');
                      if (exists) { alert('El Quasit ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Quasit',
                          form: 'Quasit',
                          notes: 'Garras venenosas: CD 13 CON o 2d4 veneno. Invisibilidad. Asustar: CD 10 SAB o asustado. Puede cambiar de forma (murciélago, rata, sapo, quasit). Resistencia mágica.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">👿</span>
                    <span className="summon-label">Convocar Quasit</span>
                  </button>

                  <button
                    className="familiar-summon-btn pseudo"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Pseudodragón');
                      if (exists) { alert('El Pseudodragón ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Pseudodragón',
                          form: 'Pseudodragón',
                          notes: 'Telepatía 80 pies. Aguijón somnífero: CD 11 CON o inconsciente 1 hora. Resistencia mágica. Sentidos mágicos 10 pies. Visión en penumbra 18m.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🐉</span>
                    <span className="summon-label">Convocar Pseudodragón</span>
                  </button>

                  <button
                    className="familiar-summon-btn sprite"
                    onClick={() => {
                      const exists = c.familiars.some(f => f.name === 'Duendecillo');
                      if (exists) { alert('El Duendecillo ya está en tu lista de familiares.'); return; }
                      update({
                        familiars: [...c.familiars, {
                          name: 'Duendecillo',
                          form: 'Duendecillo (Sprite)',
                          notes: 'Flechas somnoléferas: CD 10 CON o inconsciente 1 min. Detección del Corazón: percibe si está asustado, envenenado o miente. Invisibilidad. Volar 40 pies.'
                        }]
                      });
                    }}
                  >
                    <span className="summon-emoji">🧙</span>
                    <span className="summon-label">Convocar Duendecillo</span>
                  </button>
                </div>
              </div>
            )}

            <div className="list-rows">
              {c.familiars.map((f, i) => (
                <div key={i} className="list-row">
                  <input type="text" placeholder="Nombre" value={f.name} onChange={e => {
                    const next = [...c.familiars];
                    next[i].name = e.target.value;
                    update({ familiars: next });
                  }} />
                  <select value={f.form} onChange={e => {
                    const next = [...c.familiars];
                    next[i].form = e.target.value;
                    update({ familiars: next });
                  }}>
                    {FAMILIAR_FORMS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <input type="text" placeholder="Notas (sentidos, vínculo)" value={f.notes} onChange={e => {
                    const next = [...c.familiars];
                    next[i].notes = e.target.value;
                    update({ familiars: next });
                  }} />
                  <button className="rm" onClick={() => update({ familiars: c.familiars.filter((_, idx) => idx !== i) })}>✕</button>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ familiars: [...c.familiars, { name: '', form: FAMILIAR_FORMS[0], notes: '' }] })}>
              + añadir familiar
            </button>
          </>
        )}
        </fieldset>
      </div>
    </aside>
  );
};
