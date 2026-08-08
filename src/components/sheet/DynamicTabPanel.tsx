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

export const DynamicTabPanel: React.FC = () => {
  const {
    c, update, onUpdateCharacter, onQuickSkillRoll, onRollSave, onRollWeapon, onRollSpell, readOnly,
    activeTab, setActiveTab, previewSubclass, setPreviewSubclass, sheetFocus, setSheetFocus,
    canEdit, cdef, handleImportSubclassSpells, handleAddCompanionNote, handleAddProficientSkill,
    handleSlotChange, handleResourceChange, handleShortRest, handleLongRest, dexMod, hasAlertFeat,
    hasMobileFeat, initiative, baseSpeed, conditionList, hasExhaustion2, hasExhaustion5,
    speedMultiplier, speed, isPercepProf, passivePerception, handleConditionToggle, handleConditionAdvance,
    equippedArmorEntry, activeConditions
  } = useCharacterSheet();

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
                        {(c.spellsKnown || [])
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
                            <button className="rm" onClick={() => update({ spellsKnown: (c.spellsKnown || []).filter((_, idx) => idx !== (c.spellsKnown || []).indexOf(sp)) })}>✕</button>
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
                {(c.spellsKnown || []).filter(sp => sp.level !== 'racial').map((sp, i) => {
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
                            const next = [...(c.spellsKnown || [])];
                            next[i].name = e.target.value;
                            update({ spellsKnown: next });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Nivel (0-9)"
                          value={sp.level}
                          onChange={e => {
                            const next = [...(c.spellsKnown || [])];
                            next[i].level = e.target.value;
                            update({ spellsKnown: next });
                          }}
                          style={{ width: '70px' }}
                        />
                        <button className="rm" onClick={() => update({ spellsKnown: (c.spellsKnown || []).filter((_, idx) => idx !== i) })}>✕</button>
                      </div>

                      <div className="spell-sheet-meta">
                        <button
                          className="roll-btn"
                          title={`Lanzar ${sp.name || 'conjuro'}`}
                          onClick={() => {
                            if (!isCantrip) {
                              if (c.className === 'Brujo') {
                                const p = PACT_SLOTS[c.level];
                                const used = c.spellSlotsUsed['pact'] || 0;
                                if (p && used >= p.count) {
                                  alert(`⚠️ ¡No te quedan Espacios de Conjuro de Pacto! (0/${p.count})\n\nRealiza un Descanso Corto o Largo para recuperarlos.`);
                                  return;
                                }
                                handleSlotChange('pact', 1);
                              } else if (cdef.spellcasting) {
                                const lvlNum = parseInt(sp.level || '1') || 1;
                                const table = cdef.spellcasting.type === 'full' ? FULL_SLOTS[c.level] : HALF_SLOTS[c.level];
                                if (table) {
                                  const maxForLvl = table[lvlNum - 1] || 0;
                                  const usedForLvl = c.spellSlotsUsed[lvlNum] || 0;
                                  if (maxForLvl > 0 && usedForLvl >= maxForLvl) {
                                    alert(`⚠️ ¡No te quedan espacios de conjuro de nivel ${lvlNum}! (0/${maxForLvl})\n\nRealiza un Descanso Largo para recuperarlos.`);
                                    return;
                                  }
                                  if (maxForLvl > 0) {
                                    handleSlotChange(String(lvlNum), 1);
                                  }
                                }
                              }
                            }
                            onRollSpell(sp);
                          }}
                        >
                          🎲
                        </button>
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
                            const next = [...(c.spellsKnown || [])];
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

              <button className="add-row-btn" onClick={() => update({ spellsKnown: [...(c.spellsKnown || []), { name: '', level: '1', notes: '' }] })}>
                + añadir {cdef.spellcasting ? 'conjuro' : 'técnica'}
              </button>
            </div>
  );
};
