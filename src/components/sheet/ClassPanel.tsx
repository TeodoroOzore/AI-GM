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

export const ClassPanel: React.FC = () => {
  const {
    c, update, onUpdateCharacter, onQuickSkillRoll, onRollSave, onRollWeapon, onRollSpell, readOnly,
    activeTab, setActiveTab, previewSubclass, setPreviewSubclass, sheetFocus, setSheetFocus,
    canEdit, cdef, handleImportSubclassSpells, handleAddCompanionNote, handleAddProficientSkill,
    handleSlotChange, handleResourceChange, handleShortRest, handleLongRest, dexMod, hasAlertFeat,
    hasMobileFeat, initiative, baseSpeed, conditionList, hasExhaustion2, hasExhaustion5,
    speedMultiplier, speed, isPercepProf, passivePerception, handleConditionToggle, handleConditionAdvance,
    equippedArmorEntry, activeConditions
  } = useCharacterSheet();

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
                      {cdef.subclasses.map((s: string) => (
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
};
