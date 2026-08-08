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

export const FamiliarsPanel: React.FC = () => {
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
                      const exists = (c.familiars || []).some(f => f.name === 'Búho');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Gato');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Cuervo');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Murciélago');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Rata');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Sapo');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Búho Salvaje');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Gato Salvaje');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Cuervo Salvaje');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Murciélago Salvaje');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Rata Salvaje');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Sapo Salvaje');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Diablillo');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Quasit');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Pseudodragón');
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
                      const exists = (c.familiars || []).some(f => f.name === 'Duendecillo');
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
              {(c.familiars || []).map((f, i) => (
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
                  <button className="rm" onClick={() => update({ familiars: (c.familiars || []).filter((_, idx) => idx !== i) })}>✕</button>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ familiars: [...c.familiars, { name: '', form: FAMILIAR_FORMS[0], notes: '' }] })}>
              + añadir familiar
            </button>
</>
);
};
