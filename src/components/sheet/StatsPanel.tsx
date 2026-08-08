import React from 'react';
import { useCharacterSheet } from '../../context/CharacterSheetContext';
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
  computeAC,
  buildWeaponItem,
  isWeaponProficient,
  isArmorProficient,
  TabKey
} from '../../types';
import { SUBCLASS_CATALOG } from '../../data/subclasses';
import { BASE_CLASSES_CATALOG, FIGHTING_STYLES } from '../../data/baseClasses';
import { TOOLS_CATALOG } from '../../data/tools';
import { EquipmentForgePanel } from '../EquipmentForgePanel';
import { JournalPanel } from '../JournalPanel';

const getItemDisplayNotes = (itemName: string, notes?: string): string => {
  const cleanNotes = (notes || '').trim();
  if (
    !cleanNotes ||
    cleanNotes === 'Herramienta de competencia' ||
    cleanNotes === 'Competencia' ||
    cleanNotes === 'Herramienta activa' ||
    cleanNotes.includes('Herramienta de competencia')
  ) {
    const foundTool = TOOLS_CATALOG.find(
      t => t.name.toLowerCase() === itemName.toLowerCase() || itemName.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(itemName.toLowerCase())
    );
    if (foundTool && foundTool.description) {
      return foundTool.description;
    }
  }
  return cleanNotes;
};

export const StatsPanel: React.FC = () => {
  const {
    c, update, onUpdateCharacter, onQuickSkillRoll, onRollSave, onRollWeapon, onRollSpell, readOnly,
    activeTab, setActiveTab, previewSubclass, setPreviewSubclass, sheetFocus, setSheetFocus,
    canEdit, cdef, handleImportSubclassSpells, handleAddCompanionNote, handleAddProficientSkill,
    handleSlotChange, handleResourceChange, handleShortRest, handleLongRest, dexMod, hasAlertFeat,
    hasMobileFeat, initiative, baseSpeed, conditionList, hasExhaustion2, hasExhaustion5,
    speedMultiplier, speed, isPercepProf, passivePerception, handleConditionToggle, handleConditionAdvance,
    equippedArmorEntry, activeConditions
  } = useCharacterSheet();

  return (
<>
<div id="sheet-section-stats">
              {/* ── VITALIDAD Y ESTADO ACTUAL ── */}
              <div id="sheet-section-status">
                <div className="block-label">Vitalidad y Estado Actual</div>
                <div className="vitals-status-grid">
                  <div className="vitals-card">
                    <span className="vitals-card-label">PG Actuales</span>
                    <span className="vitals-card-value">{c.hpCur}/{c.hpMax}</span>
                  </div>
                  <div className="vitals-card">
                    <span className="vitals-card-label">PG Máximos</span>
                    <span className="vitals-card-value">{c.hpMax}</span>
                  </div>
                  <div className="vitals-card">
                    <span className="vitals-card-label">PG Temporales</span>
                    <span className="vitals-card-value">{c.tempHp}</span>
                  </div>
                  <div className="vitals-card">
                    <span className="vitals-card-label">CA</span>
                    <span className="vitals-card-value">{c.ac}</span>
                  </div>
                  <div className="vitals-card">
                    <span className="vitals-card-label">Dados de Golpe</span>
                    <span className="vitals-card-value">{c.hitDiceRemaining}/{c.level}</span>
                  </div>
                </div>

                {/* ── ESTADÍSTICAS DE COMBATE ── */}
                <div className="combat-stats-row">
                  <div className="combat-stat-box" title="Modificador Destreza + bonus de dotes (Alerta +5)">
                    <div className="combat-stat-value">{fmtSigned(initiative)}</div>
                    <div className="combat-stat-label">⚡ Iniciativa</div>
                    {hasAlertFeat && <div className="combat-stat-note">+5 Alerta</div>}
                  </div>
                  <div className={`combat-stat-box ${hasExhaustion5 ? 'danger' : hasExhaustion2 ? 'warn' : ''}`} title="Velocidad de movimiento base de tu raza">
                    <div className="combat-stat-value">{hasExhaustion5 ? '0' : `${speed}m`}</div>
                    <div className="combat-stat-label">🏃 Velocidad</div>
                    {hasExhaustion2 && !hasExhaustion5 && <div className="combat-stat-note">½ Agotamiento</div>}
                    {hasMobileFeat && !hasExhaustion5 && <div className="combat-stat-note">+3m Móvil</div>}
                  </div>
                  <div className="combat-stat-box" title="Percepción pasiva = 10 + mod.Sabiduría + (competencia si competente en Percepción)">
                    <div className="combat-stat-value">{passivePerception}</div>
                    <div className="combat-stat-label">👁️ Percepción Pasiva</div>
                    {isPercepProf && <div className="combat-stat-note">con competencia</div>}
                  </div>
                  <div className="combat-stat-box" title="Bono de competencia por nivel">
                    <div className="combat-stat-value">{fmtSigned(profBonus(c.level))}</div>
                    <div className="combat-stat-label">📜 Bonificador Competencia</div>
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
                  const isProf = (c.proficientSkills || []).includes(s.name);
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
                      {cdef.saves.map((s: AbilityKey) => (
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
                  const acquiredCount = (c.feats || []).length;
                  const remaining = Math.max(0, maxFeats - acquiredCount);
                  const isSpellcaster = cdef.spellcasting !== null || (c.spellsKnown && c.spellsKnown.length > 0) || (c.feats || []).includes('Iniciado en la Magia');
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
                      {(c.feats || []).length > 0 && (
                        <>
                          <div className="block-label" style={{ marginTop: '12px' }}>🔒 Dotes Adquiridas</div>
                          <div className="acquired-feats-list">
                            {(c.feats || []).map(fName => {
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
                              const isAcquired = (c.feats || []).includes(f.name);
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
</>
);
};
