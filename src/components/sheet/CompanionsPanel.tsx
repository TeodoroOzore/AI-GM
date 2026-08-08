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

export const CompanionsPanel: React.FC = () => {
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
                      const exists = (c.companions || []).some(f => f.name === 'Caballo de Guerra');
                      if (exists) { alert('El Caballo de Guerra ya está en tu lista de compañeros.'); return; }
                      // Remove any existing steed (only one at a time)
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Mastín');
                      if (exists) { alert('El Mastín ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Alce');
                      if (exists) { alert('El Alce ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Camello');
                      if (exists) { alert('El Camello ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Pegaso');
                      if (exists) { alert('El Pegaso ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Grifo');
                      if (exists) { alert('El Grifo ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Lobo Terrible');
                      if (exists) { alert('El Lobo Terrible ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Tigre Dientes de Sable');
                      if (exists) { alert('El Tigre Dientes de Sable ya está en tu lista de compañeros.'); return; }
                      const filtered = (c.companions || []).filter(f => !['Caballo de Guerra', 'Mastín', 'Alce', 'Camello', 'Pegaso', 'Grifo', 'Lobo Terrible', 'Tigre Dientes de Sable'].includes(f.name));
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
                      const exists = (c.companions || []).some(f => f.name === 'Lobo');
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
                      const exists = (c.companions || []).some(f => f.name === 'Oso');
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
                      const exists = (c.companions || []).some(f => f.name === 'Águila');
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
                      const exists = (c.companions || []).some(f => f.name === 'Pantera');
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
              {(c.companions || []).map((comp, i) => (
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
                  <button className="rm" onClick={() => update({ companions: (c.companions || []).filter((_, idx) => idx !== i) })}>✕</button>
                </div>
              ))}
            </div>
            <button className="add-row-btn" onClick={() => update({ companions: [...c.companions, { name: '', type: '', hp: 0, notes: '' }] })}>
              + añadir compañero
            </button>
</>
);
};
