import React, { useState } from 'react';
import {
  CharacterSheet as CharacterType,
  ABILITIES,
  SKILLS,
  CLASSES,
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
} from '../types';

type CharacterSheetProps = {
  character: CharacterType;
  onUpdateCharacter: (updated: CharacterType) => void;
  onQuickSkillRoll: (skillName: string, ability: AbilityKey) => void;
};

type TabKey = 'stats' | 'status' | 'inventory' | 'dynamic' | 'proficiencies' | 'subclass' | 'gear' | 'feats' | 'companions' | 'familiars';

export const CharacterSheetPanel: React.FC<CharacterSheetProps> = ({
  character: c,
  onUpdateCharacter,
  onQuickSkillRoll
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('stats');

  const cdef = CLASSES[c.className] || CLASSES['Guerrero'];

  const update = (partial: Partial<CharacterType>) => {
    onUpdateCharacter({ ...c, ...partial });
  };

  const handleAddProficientSkill = () => {
    const remaining = SKILLS.filter(s => !c.proficientSkills.includes(s.name));
    if (!remaining.length) {
      alert('Ya tenés todas las competencias disponibles.');
      return;
    }
    const chosen = prompt('¿Qué competencia nueva querés agregar?\n' + remaining.map(s => s.name).join(', '));
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

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'stats', label: 'Estadísticas y Comp.' },
    { key: 'status', label: 'Estado' },
    { key: 'inventory', label: 'Inventario' },
    { key: 'dynamic', label: cdef.tabName },
    { key: 'subclass', label: 'Subclase' },
    { key: 'gear', label: 'Equipo' },
    { key: 'feats', label: 'Dotes' },
    { key: 'companions', label: 'Compañeros' },
    { key: 'familiars', label: 'Familiares' }
  ];

  // Find equipped armor details
  const equippedArmorEntry = c.equippedArmor ? ARMOR_CATALOG.find(a => a.name === c.equippedArmor) : null;

  return (
    <aside id="sheet-panel">
      <div className="sheet-header">
        <div className="who-name">{c.name || '—'}</div>
        <div className="who-sub">
          {`${c.race} · ${c.className}${c.subclass ? ' (' + c.subclass + ')' : ''} · Nivel ${c.level}`}
        </div>
        <div className="who-vitals">
          <span>PG <b>{`${c.hpCur}/${c.hpMax}`}</b></span>
          <span>CA <b>{c.ac}</b></span>
          <span>Comp. <b>{fmtSigned(profBonus(c.level))}</b></span>
          <span>Insp. <b>{c.inspiration ? 'sí' : 'no'}</b></span>
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
        {activeTab === 'stats' && (
          <>
            <div className="block-label">Atributos Principales</div>
            <div className="grid3">
              {ABILITIES.map(a => (
                <div key={a.key} className="ability-box">
                  <div className="name">{a.label}</div>
                  <div className="mod">{fmtSigned(abilityMod(c.abilities[a.key]))}</div>
                  <div className="score">{c.abilities[a.key]}</div>
                </div>
              ))}
            </div>

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

            {/* ── COMPETENCIAS: derived from class + race + background, read-only ── */}
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
                    {profs.languages.map(l => (
                      <span key={l} className="prof-chip lang-chip">{l}</span>
                    ))}
                  </div>

                  <div className="prof-lock-note">
                    🔒 Las competencias se asignan por clase, raza y trasfondo. Solo pueden expandirse durante la aventura.
                  </div>
                </>
              );
            })()}
          </>
        )}

        {activeTab === 'status' && (
          <>
            <div className="block-label">Vitalidad</div>
            <div className="row">
              <div className="field">
                <label>PG actuales</label>
                <input type="number" value={c.hpCur} onChange={e => update({ hpCur: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="field">
                <label>PG máximos</label>
                <input type="number" value={c.hpMax} onChange={e => update({ hpMax: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="field">
                <label>PG temporales</label>
                <input type="number" value={c.tempHp} onChange={e => update({ tempHp: parseInt(e.target.value) || 0 })} />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Clase de Armadura</label>
                <input type="number" value={c.ac} onChange={e => update({ ac: parseInt(e.target.value) || 10 })} />
              </div>
              <div className="field">
                <label>Dados de golpe restantes</label>
                <input type="number" value={c.hitDiceRemaining} onChange={e => update({ hitDiceRemaining: parseInt(e.target.value) || 0 })} />
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
                <input type="number" min={0} max={3} value={c.deathSaves.success} onChange={e => update({ deathSaves: { ...c.deathSaves, success: parseInt(e.target.value) || 0 } })} />
              </div>
              <div className="field">
                <label>Fallos (0-3)</label>
                <input type="number" min={0} max={3} value={c.deathSaves.fail} onChange={e => update({ deathSaves: { ...c.deathSaves, fail: parseInt(e.target.value) || 0 } })} />
              </div>
            </div>

            <div className="checks-row">
              <label>
                <input type="checkbox" checked={c.inspiration} onChange={e => update({ inspiration: e.target.checked })} />
                Inspiración
              </label>
            </div>

            {/* Interactive D&D Conditions Selection */}
            <div className="block-label" style={{ marginTop: '10px' }}>⚡ Condiciones Activas (D&D 5e)</div>
            <div className="conditions-grid">
              {DND_CONDITIONS.map(cond => {
                const activeConditions = (c.conditions || '').split(',').map(s => s.trim()).filter(Boolean);
                const isActive = activeConditions.includes(cond.name);
                return (
                  <button
                    key={cond.name}
                    type="button"
                    className={`condition-chip-btn ${isActive ? 'active' : ''}`}
                    title={`${cond.name}: ${cond.description}`}
                    onClick={() => {
                      const next = isActive
                        ? activeConditions.filter(x => x !== cond.name)
                        : [...activeConditions, cond.name];
                      update({ conditions: next.join(', ') });
                    }}
                  >
                    <span>{cond.emoji}</span>
                    <span>{cond.name}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {activeTab === 'inventory' && (
          <>
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

            <div className="block-label" style={{ marginTop: '12px' }}>🎒 Objetos e Inventario General</div>
            <div className="inventory-table-header">
              <span className="col-name">Nombre del Objeto</span>
              <span className="col-qty">Cantidad</span>
              <span className="col-notes">Descripción / Notas</span>
              <span className="col-actions"></span>
            </div>
            <div className="list-rows">
              {(c.equipment || []).map((item, i) => (
                <div key={i} className="inventory-sheet-row">
                  <input
                    type="text"
                    placeholder="Nombre del objeto"
                    value={item.name}
                    onChange={e => {
                      const next = [...(c.equipment || [])];
                      next[i].name = e.target.value;
                      update({ equipment: next });
                    }}
                    className="inv-name-input"
                  />
                  <input
                    type="number"
                    min={1}
                    placeholder="Cant."
                    value={item.qty}
                    onChange={e => {
                      const next = [...(c.equipment || [])];
                      next[i].qty = parseInt(e.target.value) || 1;
                      update({ equipment: next });
                    }}
                    className="inv-qty-input"
                  />
                  <input
                    type="text"
                    placeholder="Descripción o notas del objeto"
                    value={item.notes}
                    onChange={e => {
                      const next = [...(c.equipment || [])];
                      next[i].notes = e.target.value;
                      update({ equipment: next });
                    }}
                    className="inv-notes-input"
                  />
                  <button className="rm" onClick={() => update({ equipment: (c.equipment || []).filter((_, idx) => idx !== i) })}>✕</button>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ equipment: [...(c.equipment || []), { name: '', qty: 1, notes: '' }] })} style={{ marginTop: '8px' }}>
              + añadir objeto al inventario
            </button>
          </>
        )}

        {activeTab === 'dynamic' && (
          <>
            <div className="block-label">{cdef.tabName}</div>
            {cdef.spellcasting && (
              <>
                <div className="flavor">
                  Habilidad de lanzamiento: {ABILITIES.find(a => a.key === cdef.spellcasting?.ability)?.full}. CD de salvación de conjuro: {8 + profBonus(c.level) + abilityMod(c.abilities[cdef.spellcasting.ability])}. Bono de ataque con conjuro: {fmtSigned(profBonus(c.level) + abilityMod(c.abilities[cdef.spellcasting.ability]))}.
                </div>
                <div className="block-label" style={{ marginTop: '8px' }}>Ranuras de conjuro</div>
                <div>
                  {cdef.spellcasting.type === 'pact' ? (
                    (() => {
                      const p = PACT_SLOTS[c.level];
                      const used = c.spellSlotsUsed['pact'] || 0;
                      return (
                        <div className="resource">
                          <div className="rlabel">Ranuras de Pacto (nivel {p.level})</div>
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
                      return table.map((max, idx) => {
                        if (max <= 0) return null;
                        const lvl = idx + 1;
                        const used = c.spellSlotsUsed[lvl] || 0;
                        return (
                          <div key={lvl} className="resource">
                            <div className="rlabel">Nivel {lvl}</div>
                            <div className="rctrl">
                              <button onClick={() => handleSlotChange(String(lvl), 1)}>−</button>
                              <span>{max - used}/{max}</span>
                              <button onClick={() => handleSlotChange(String(lvl), -1)}>+</button>
                            </div>
                          </div>
                        );
                      });
                    })()
                  )}
                </div>
              </>
            )}

            <div className="block-label" style={{ marginTop: '8px' }}>Recursos de clase</div>
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

            <div className="block-label" style={{ marginTop: '8px' }}>
              {cdef.spellcasting ? 'Conjuros y trucos conocidos' : 'Técnicas y maniobras conocidas'}
            </div>
            <div className="list-rows">
              {c.spellsKnown.map((sp, i) => (
                <div key={i} className="spell-sheet-row">
                  <div className="spell-sheet-main">
                    <input type="text" placeholder="Nombre" value={sp.name} onChange={e => {
                      const next = [...c.spellsKnown];
                      next[i].name = e.target.value;
                      update({ spellsKnown: next });
                    }} />
                    <input type="text" placeholder="Nivel" value={sp.level} onChange={e => {
                      const next = [...c.spellsKnown];
                      next[i].level = e.target.value;
                      update({ spellsKnown: next });
                    }} style={{ width: '60px' }} />
                    <button className="rm" onClick={() => update({ spellsKnown: c.spellsKnown.filter((_, idx) => idx !== i) })}>✕</button>
                  </div>
                  <div className="spell-sheet-meta">
                    {sp.damageType && (
                      <span className="dmg-badge-inline" style={{ borderColor: DAMAGE_TYPE_COLOR[sp.damageType] || 'var(--seam)', color: DAMAGE_TYPE_COLOR[sp.damageType] || 'var(--parchment-dim)' }}>
                        {DAMAGE_TYPE_EMOJI[sp.damageType] || ''} {sp.damageType}
                      </span>
                    )}
                    {sp.school && <span className="spell-school-badge">{sp.school}</span>}
                    <input type="text" placeholder="Notas" value={sp.notes} onChange={e => {
                      const next = [...c.spellsKnown];
                      next[i].notes = e.target.value;
                      update({ spellsKnown: next });
                    }} className="spell-notes-input" />
                  </div>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ spellsKnown: [...c.spellsKnown, { name: '', level: '', notes: '' }] })}>
              + añadir {cdef.spellcasting ? 'conjuro' : 'técnica'}
            </button>
          </>
        )}

        {activeTab === 'proficiencies' && (
          <>
            <div className="block-label">Salvaciones (de clase)</div>
            <div className="save-badge">
              {cdef.saves.map(s => `${s.toUpperCase()} ${fmtSigned(abilityMod(c.abilities[s]) + profBonus(c.level))}`).join(' · ')}
            </div>

            <div className="block-label" style={{ marginTop: '8px' }}>Armaduras</div>
            <div className="checks-row">
              {['Ligera', 'Media', 'Pesada', 'Escudos'].map(o => (
                <label key={o}>
                  <input
                    type="checkbox"
                    checked={c.armorProf.includes(o)}
                    onChange={e => {
                      const next = e.target.checked ? [...c.armorProf, o] : c.armorProf.filter(x => x !== o);
                      update({ armorProf: next });
                    }}
                  />
                  {o}
                </label>
              ))}
            </div>

            <div className="block-label" style={{ marginTop: '8px' }}>Armas</div>
            <div className="checks-row">
              {['Simples', 'Marciales'].map(o => (
                <label key={o}>
                  <input
                    type="checkbox"
                    checked={c.weaponProf.includes(o)}
                    onChange={e => {
                      const next = e.target.checked ? [...c.weaponProf, o] : c.weaponProf.filter(x => x !== o);
                      update({ weaponProf: next });
                    }}
                  />
                  {o}
                </label>
              ))}
            </div>

            <div className="field" style={{ marginTop: '8px' }}>
              <label>Herramientas</label>
              <input type="text" value={c.toolProf} onChange={e => update({ toolProf: e.target.value })} />
              {c.selectedTools && c.selectedTools.length > 0 && (
                <div className="tool-tags">
                  {c.selectedTools.map(t => (
                    <span key={t} className="tool-tag">{t}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="field">
              <label>Idiomas</label>
              <input type="text" value={c.languages} onChange={e => update({ languages: e.target.value })} />
            </div>
          </>
        )}

        {activeTab === 'subclass' && (
          <>
            {c.level < cdef.unlockLevel ? (
              <div className="flavor">Tu subclase se desbloquea en nivel {cdef.unlockLevel}. Todavía sos nivel {c.level}.</div>
            ) : (
              <>
                <div className="block-label">Elegí tu senda</div>
                <select value={c.subclass} onChange={e => update({ subclass: e.target.value })}>
                  <option value="">— sin elegir —</option>
                  {cdef.subclasses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <div className="field" style={{ marginTop: '10px' }}>
                  <label>Notas de tu subclase (rasgos, votos, tradición)</label>
                  <textarea rows={5} value={c.subclassNotes || ''} onChange={e => update({ subclassNotes: e.target.value })} />
                </div>
              </>
            )}
          </>
        )}

        {activeTab === 'gear' && (
          <>
            <div className="block-label">🛡️ Equipo Equipado (por Zonas)</div>
            <div className="list-rows" style={{ marginBottom: '16px' }}>
              {(c.equippedGear || []).length === 0 ? (
                <div className="flavor">No hay objetos equipados por el momento. Podés añadir o sincronizar desde armas y armaduras.</div>
              ) : (
                (c.equippedGear || []).map((eg, i) => (
                  <div key={i} className="gear-sheet-card">
                    <div className="gear-sheet-top">
                      <input
                        type="text"
                        placeholder="Nombre del equipo"
                        value={eg.name}
                        onChange={e => {
                          const next = [...(c.equippedGear || [])];
                          next[i].name = e.target.value;
                          update({ equippedGear: next });
                        }}
                        className="gear-name-input"
                      />
                      <div className="gear-slot-selector">
                        <span className="slot-icon">📍 Zona:</span>
                        <select
                          value={eg.slot}
                          onChange={e => {
                            const next = [...(c.equippedGear || [])];
                            next[i].slot = e.target.value;
                            update({ equippedGear: next });
                          }}
                        >
                          {EQUIPMENT_SLOTS.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                      <label className="gear-magic-label">
                        <input
                          type="checkbox"
                          checked={eg.magical || false}
                          onChange={e => {
                            const next = [...(c.equippedGear || [])];
                            next[i].magical = e.target.checked;
                            update({ equippedGear: next });
                          }}
                        />
                        ✨ Mágica
                      </label>
                      <button className="rm" onClick={() => update({ equippedGear: (c.equippedGear || []).filter((_, idx) => idx !== i) })}>✕</button>
                    </div>
                    <div className="gear-sheet-details">
                      <input
                        type="text"
                        placeholder="Descripción o efecto del equipo"
                        value={eg.notes}
                        onChange={e => {
                          const next = [...(c.equippedGear || [])];
                          next[i].notes = e.target.value;
                          update({ equippedGear: next });
                        }}
                        className="gear-notes-input"
                      />
                      <input
                        type="text"
                        placeholder="Propiedades (ej: CA 16, 1d8 cortante, Sutil)"
                        value={eg.properties}
                        onChange={e => {
                          const next = [...(c.equippedGear || [])];
                          next[i].properties = e.target.value;
                          update({ equippedGear: next });
                        }}
                        className="gear-props-input"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <button className="add-row-btn" onClick={() => update({ equippedGear: [...(c.equippedGear || []), { name: '', slot: 'Torso', notes: '', properties: '' }] })}>
                + añadir objeto equipado
              </button>
              <button
                className="add-row-btn"
                style={{ borderColor: 'var(--brass-dim)', color: 'var(--brass)' }}
                onClick={() => {
                  const gearList: EquippedGearItem[] = [];
                  if (c.equippedArmor) {
                    const a = ARMOR_CATALOG.find(x => x.name === c.equippedArmor);
                    gearList.push({
                      name: c.equippedArmor,
                      slot: 'Torso',
                      notes: a ? `Armadura ${a.type}` : '',
                      properties: a ? `CA ${a.acBase}${a.addDex ? ' + DES' : ''}` : ''
                    });
                  }
                  if (c.equippedShield) {
                    gearList.push({ name: 'Escudo', slot: 'Mano Secundaria', notes: 'Protector', properties: 'CA +2' });
                  }
                  c.weapons.forEach((w, idx) => {
                    const slot = idx === 0 ? 'Mano Principal' : (w.range === 'a distancia' ? 'Espalda' : 'Mano Secundaria');
                    gearList.push({
                      name: w.name,
                      slot,
                      notes: `${w.dice} ${w.damageType || w.type}`,
                      properties: w.notes || (w.properties ? w.properties.join(', ') : ''),
                      magical: w.magical
                    });
                  });
                  update({ equippedGear: gearList });
                }}
              >
                🔄 Sincronizar desde armas y armadura
              </button>
            </div>

            <div className="block-label">⚔️ Armas y ataques</div>
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
                        Comp.
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
          </>
        )}

        {activeTab === 'feats' && (
          <>
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
                        ✨ ¡Tenés <strong>{remaining}</strong> dote(s) disponible(s) para elegir! Elegí una dote del catálogo para bloquearla en tu personaje.
                      </div>
                    ) : (
                      <div className="feat-locked-msg">
                        🔒 No tenés dotes disponibles en este momento. Alcanzarás tu siguiente dote al nivel <strong>{getNextFeatLevel(c.level, c.className)}</strong>.
                      </div>
                    )}
                  </div>

                  {/* Acquired / Locked Feats */}
                  {c.feats.length > 0 && (
                    <>
                      <div className="block-label" style={{ marginTop: '12px' }}>🔒 Dotes Adquiridas (Bloqueadas)</div>
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

                  {/* Feat Selection Catalog */}
                  <div className="block-label" style={{ marginTop: '12px' }}>📖 Catálogo de Dotes Elegibles para {c.className}</div>
                  <div className="feat-catalog-list">
                    {FEAT_CATALOG.map(f => {
                      const isAcquired = c.feats.includes(f.name);
                      if (isAcquired) return null; // already shown in acquired

                      // Class / prerequisite filtering
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
                        <div key={f.name} className={`feat-catalog-card ${!isEligible ? 'ineligible' : ''} ${remaining === 0 ? 'locked-out' : ''}`}>
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
                            ) : remaining > 0 ? (
                              <button
                                type="button"
                                className="choose-feat-btn"
                                onClick={() => {
                                  update({ feats: [...c.feats, f.name] });
                                }}
                              >
                                ➕ Elegir Dote ({f.name})
                              </button>
                            ) : (
                              <span className="feat-locked-badge">🔒 Bloqueado (Siguiente al nivel {getNextFeatLevel(c.level, c.className)})</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="field" style={{ marginTop: '14px' }}>
                    <label>Dotes personalizadas / notas caseras</label>
                    <textarea rows={2} value={c.featsCustom} onChange={e => update({ featsCustom: e.target.value })} placeholder="Añade rasgos o reglas caseras de tu DM..." />
                  </div>
                </>
              );
            })()}
          </>
        )}

        {activeTab === 'companions' && (
          <>
            <div className="block-label">Compañeros, monturas y aliados</div>
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
      </div>
    </aside>
  );
};
