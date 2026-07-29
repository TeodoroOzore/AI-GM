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
  FAMILIAR_FORMS,
  AbilityKey,
  abilityMod,
  profBonus,
  fmtSigned,
  classResources
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
    { key: 'stats', label: 'Estadísticas' },
    { key: 'status', label: 'Estado' },
    { key: 'inventory', label: 'Inventario' },
    { key: 'dynamic', label: cdef.tabName },
    { key: 'proficiencies', label: 'Competencias' },
    { key: 'subclass', label: 'Subclase' },
    { key: 'gear', label: 'Equipo' },
    { key: 'feats', label: 'Dotes' },
    { key: 'companions', label: 'Compañeros' },
    { key: 'familiars', label: 'Familiares' }
  ];

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
            <div className="block-label">Atributos</div>
            <div className="grid3">
              {ABILITIES.map(a => (
                <div key={a.key} className="ability-box">
                  <div className="name">{a.label}</div>
                  <div className="mod">{fmtSigned(abilityMod(c.abilities[a.key]))}</div>
                  <div className="score">{c.abilities[a.key]}</div>
                </div>
              ))}
            </div>

            <div className="block-label" style={{ marginTop: '8px' }}>Habilidades</div>
            <div className="skills-list">
              {SKILLS.map(s => {
                const isProf = c.proficientSkills.includes(s.name);
                const mod = abilityMod(c.abilities[s.ab]) + (isProf ? profBonus(c.level) : 0);
                return (
                  <div key={s.name} className="skill-row">
                    <span className="abbr">{s.ab.toUpperCase()}</span>
                    <span>{s.name}</span>
                    <span className="mod">{fmtSigned(mod)}</span>
                    <span className="small-note">{isProf ? '✓' : '·'}</span>
                    <button onClick={() => onQuickSkillRoll(s.name, s.ab)}>tirar</button>
                  </div>
                );
              })}
            </div>
            <button className="add-row-btn" onClick={handleAddProficientSkill} style={{ marginTop: '6px' }}>
              + añadir competencia
            </button>
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

            <div className="field">
              <label>Condiciones activas</label>
              <textarea rows={2} value={c.conditions} onChange={e => update({ conditions: e.target.value })} />
            </div>
          </>
        )}

        {activeTab === 'inventory' && (
          <>
            <div className="block-label">Monedas</div>
            <div className="row">
              <div className="field">
                <label>Oro</label>
                <input type="number" value={c.gold} onChange={e => update({ gold: parseInt(e.target.value) || 0 })} />
              </div>
            </div>

            <div className="block-label" style={{ marginTop: '6px' }}>Objetos generales</div>
            <div className="list-rows">
              {c.equipment.map((item, i) => (
                <div key={i} className="list-row">
                  <input type="text" placeholder="Objeto" value={item.name} onChange={e => {
                    const next = [...c.equipment];
                    next[i].name = e.target.value;
                    update({ equipment: next });
                  }} />
                  <input type="number" placeholder="Cant." value={item.qty} onChange={e => {
                    const next = [...c.equipment];
                    next[i].qty = parseInt(e.target.value) || 0;
                    update({ equipment: next });
                  }} />
                  <input type="text" placeholder="Notas" value={item.notes} onChange={e => {
                    const next = [...c.equipment];
                    next[i].notes = e.target.value;
                    update({ equipment: next });
                  }} />
                  <button className="rm" onClick={() => update({ equipment: c.equipment.filter((_, idx) => idx !== i) })}>✕</button>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ equipment: [...c.equipment, { name: '', qty: 1, notes: '' }] })}>
              + añadir objeto
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
                <div key={i} className="list-row">
                  <input type="text" placeholder="Nombre" value={sp.name} onChange={e => {
                    const next = [...c.spellsKnown];
                    next[i].name = e.target.value;
                    update({ spellsKnown: next });
                  }} />
                  <input type="text" placeholder="Nivel" value={sp.level} onChange={e => {
                    const next = [...c.spellsKnown];
                    next[i].level = e.target.value;
                    update({ spellsKnown: next });
                  }} />
                  <input type="text" placeholder="Notas" value={sp.notes} onChange={e => {
                    const next = [...c.spellsKnown];
                    next[i].notes = e.target.value;
                    update({ spellsKnown: next });
                  }} />
                  <button className="rm" onClick={() => update({ spellsKnown: c.spellsKnown.filter((_, idx) => idx !== i) })}>✕</button>
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
            <div className="block-label">Armas y ataques</div>
            <div className="list-rows">
              {c.weapons.map((w, i) => {
                const mod = abilityMod(c.abilities[w.ability]) + (w.proficient ? profBonus(c.level) : 0);
                return (
                  <div key={i} className="list-row wide">
                    <input type="text" placeholder="Arma" value={w.name} onChange={e => {
                      const next = [...c.weapons];
                      next[i].name = e.target.value;
                      update({ weapons: next });
                    }} />
                    <select value={w.ability} onChange={e => {
                      const next = [...c.weapons];
                      next[i].ability = e.target.value as AbilityKey;
                      update({ weapons: next });
                    }}>
                      <option value="str">FUE</option>
                      <option value="dex">DES</option>
                    </select>
                    <input type="text" placeholder="Dado daño (1d8)" value={w.dice} onChange={e => {
                      const next = [...c.weapons];
                      next[i].dice = e.target.value;
                      update({ weapons: next });
                    }} />
                    <span className="small-note" style={{ alignSelf: 'center' }}>
                      Ataque {fmtSigned(mod)} · Comp.{' '}
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
                    </span>
                    <button className="rm" onClick={() => update({ weapons: c.weapons.filter((_, idx) => idx !== i) })}>✕</button>
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
            <div className="block-label">Catálogo</div>
            <div className="feat-grid">
              {FEAT_CATALOG.map(f => (
                <div key={f} className="feat-chip">
                  <label>
                    <input
                      type="checkbox"
                      checked={c.feats.includes(f)}
                      onChange={e => {
                        const next = e.target.checked ? [...c.feats, f] : c.feats.filter(x => x !== f);
                        update({ feats: next });
                      }}
                    />
                    {f}
                  </label>
                </div>
              ))}
            </div>

            <div className="field" style={{ marginTop: '10px' }}>
              <label>Dotes personalizadas / caseras</label>
              <textarea rows={3} value={c.featsCustom} onChange={e => update({ featsCustom: e.target.value })} />
            </div>
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
