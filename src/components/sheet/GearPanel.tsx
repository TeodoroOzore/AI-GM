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

export const GearPanel: React.FC = () => {
  const {
    c, update, onUpdateCharacter, onQuickSkillRoll, onRollSave, onRollWeapon, onRollSpell, readOnly,
    activeTab, setActiveTab, previewSubclass, setPreviewSubclass, sheetFocus, setSheetFocus,
    canEdit, cdef, handleImportSubclassSpells, handleAddCompanionNote, handleAddProficientSkill,
    handleSlotChange, handleResourceChange, handleShortRest, handleLongRest, dexMod, hasAlertFeat,
    hasMobileFeat, initiative, baseSpeed, conditionList, hasExhaustion2, hasExhaustion5,
    speedMultiplier, speed, isPercepProf, passivePerception, handleConditionToggle, handleConditionAdvance,
    equippedArmorEntry, activeConditions
  } = useCharacterSheet();

  // Helper to check if an item is a garment / armor
  const isGarmentOrArmor = (item: { name: string; category?: string }): boolean => {
    const cat = (item.category || '').toLowerCase().trim();
    const name = (item.name || '').toLowerCase().trim();
    if (['cabeza', 'cuerpo', 'torso', 'armadura', 'espalda', 'brazos', 'manos', 'muñecas', 'piernas', 'pies', 'equipo', 'ropaje', 'ropa'].includes(cat)) {
      return true;
    }
    return /armadura|pechera|túnica|tunica|ropa|ropas|coraza|peto|cuero|vestido|hábito|habito|atavío|atavio|gala|sayo|camisa|pantalón|pantalon|casco|sombrero|capucha|yelmo|diadema|capa|manto|carcaj|guantes|guanteletes|brazales|botas|grebas|calzado/.test(name) || ARMOR_CATALOG.some(a => a.name.toLowerCase() === name);
  };

  // Helper to check if an item is a weapon
  const isWeaponItem = (item: { name: string; category?: string }): boolean => {
    const cat = (item.category || '').toLowerCase().trim();
    const name = (item.name || '').toLowerCase().trim();
    if (cat === 'arma') return true;
    return /daga|espada|bastón|baston|hacha|martillo|arco|ballesta|honda|lanza|maza|jabalina|tridente|garrote|hoja|cetro|vara/.test(name) || WEAPONS_CATALOG.some(w => w.name.toLowerCase() === name);
  };

  const isEquipableItem = (item: { name: string; category?: string }): boolean => {
    return isGarmentOrArmor(item) || isWeaponItem(item);
  };

  // Deduplicación estricta de la mochila: si un objeto ya está equipado (en c.weapons o como c.equippedArmor),
  // NO debe figurar simultáneamente en c.equipment (la mochila).
  const equippedWeaponNames = new Set((c.weapons || []).map(w => w.name.trim().toLowerCase()).filter(Boolean));
  const equippedArmorName = (c.equippedArmor || '').trim().toLowerCase();

  const indexedEquipment = (c.equipment || [])
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => {
      const nameLower = (item.name || '').trim().toLowerCase();
      if (!nameLower) return false;
      if (equippedWeaponNames.has(nameLower)) return false;
      if (equippedArmorName && equippedArmorName !== 'sin armadura' && equippedArmorName !== 'sin armadura/túnica' && nameLower === equippedArmorName) return false;
      return true;
    });

  // Accesorios explícitos (anillos, collares, morrales)
  const accesoriosItems = indexedEquipment.filter(({ item }) => {
    const cat = (item.category || '').toLowerCase().trim();
    const name = (item.name || '').toLowerCase().trim();
    return ['anillo', 'collar', 'cuello', 'pulsera', 'mochila', 'bandolera', 'morral', 'cinturón', 'amuleto', 'accesorio', 'accesorios', 'contenedor'].includes(cat) ||
      /anillo|collar|pulsera|amuleto|cinturón|mochila|bandolera|morral|bolsa|saco de viaje/.test(name);
  });

  // Todos los demás objetos en la mochila (ordenando los equipables SIEMPRE AL PRINCIPIO)
  const accesoriosIndices = new Set(accesoriosItems.map(acc => acc.idx));
  const inventarioItems = indexedEquipment
    .filter(({ idx }) => !accesoriosIndices.has(idx))
    .sort((a, b) => {
      const equipableA = isEquipableItem(a.item);
      const equipableB = isEquipableItem(b.item);
      if (equipableA && !equipableB) return -1;
      if (!equipableA && equipableB) return 1;
      return 0;
    });

  // Acciones de equipar / desequipar armadura y ropajes
  const handleEquipGarment = (itemIdx: number) => {
    const item = c.equipment[itemIdx];
    if (!item) return;

    const oldArmor = c.equippedArmor;
    // Purga todas las instancias duplicadas del objeto recién equipado de c.equipment
    let nextEq = (c.equipment || []).filter(e => e.name.trim().toLowerCase() !== item.name.trim().toLowerCase());

    if (oldArmor && oldArmor !== 'Sin armadura' && oldArmor !== 'Sin armadura/Túnica') {
      // Purga la armadura anterior para evitar duplicados en la mochila
      nextEq = nextEq.filter(e => e.name.trim().toLowerCase() !== oldArmor.trim().toLowerCase());
      const oldEntry = ARMOR_CATALOG.find(a => a.name === oldArmor);
      nextEq.push({
        name: oldArmor,
        qty: 1,
        notes: oldEntry ? `Armadura ${oldEntry.type} (CA ${oldEntry.acBase})` : 'Ropaje / Armadura desequipada',
        category: 'Cuerpo',
      });
    }

    const newAc = computeAC(c.abilities, item.name, c.equippedShield);
    update({
      equippedArmor: item.name,
      ac: newAc,
      equipment: nextEq,
    });
  };

  const handleUnequipGarment = () => {
    if (!c.equippedArmor || c.equippedArmor === 'Sin armadura' || c.equippedArmor === 'Sin armadura/Túnica') return;
    const oldArmor = c.equippedArmor;
    // Purga duplicados previos en la mochila e inserta 1 sola copia limpia
    const cleanEq = (c.equipment || []).filter(e => e.name.trim().toLowerCase() !== oldArmor.trim().toLowerCase());
    const nextEq = [...cleanEq, {
      name: oldArmor,
      qty: 1,
      notes: 'Ropaje / Armadura desequipada',
      category: 'Cuerpo',
    }];
    const newAc = computeAC(c.abilities, 'Sin armadura', c.equippedShield);
    update({
      equippedArmor: 'Sin armadura/Túnica',
      ac: newAc,
      equipment: nextEq,
    });
  };

  const handleEquipWeapon = (itemIdx: number) => {
    const item = c.equipment[itemIdx];
    if (!item) return;

    const catalogEntry = WEAPONS_CATALOG.find(w => w.name.toLowerCase() === item.name.toLowerCase());
    const newWeapon: WeaponItem = catalogEntry ? buildWeaponItem(catalogEntry) : {
      name: item.name,
      ability: 'str',
      dice: '1d6',
      type: 'contundente',
      proficient: true,
      notes: item.notes || '',
    };

    // Purga el arma de la mochila al equiparla
    const nextEq = (c.equipment || []).filter(e => e.name.trim().toLowerCase() !== item.name.trim().toLowerCase());
    update({
      weapons: [...(c.weapons || []), newWeapon],
      equipment: nextEq,
    });
  };

  const handleUnequipWeapon = (wIdx: number) => {
    const w = c.weapons[wIdx];
    if (!w) return;

    const nextWeapons = (c.weapons || []).filter((_, idx) => idx !== wIdx);
    // Purga cualquier duplicado previo del arma en la mochila e inserta 1 sola copia limpia
    const cleanEq = (c.equipment || []).filter(e => e.name.trim().toLowerCase() !== w.name.trim().toLowerCase());
    const nextEq = [...cleanEq, {
      name: w.name,
      qty: 1,
      notes: w.notes || `Arma ${w.dice} (${w.damageType || ''})`,
      category: 'Arma',
    }];

    update({
      weapons: nextWeapons,
      equipment: nextEq,
    });
  };

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
              <div className="block-label" style={{ marginTop: '16px' }}>⚔️ Armas y Ataques Equipados (En Manos)</div>
              <div className="list-rows">
                {(c.weapons || []).map((w, i) => {
                  const mod = abilityMod(c.abilities[w.ability]) + (w.proficient ? profBonus(c.level) : 0);
                  const isRanged = (w.properties && w.properties.includes('munición')) || w.range === 'a distancia' || ['Arco', 'Ballesta', 'Honda', 'Cerbatana'].some(kw => w.name.includes(kw));

                  // Find matching ammunition in character equipment
                  let ammoItemIdx = -1;
                  let ammoItem = null;
                  if (isRanged) {
                    let targetKeyword = 'flecha';
                    if (w.name.toLowerCase().includes('ballesta')) targetKeyword = 'virote';
                    else if (w.name.toLowerCase().includes('honda')) targetKeyword = 'bala';
                    else if (w.name.toLowerCase().includes('cerbatana')) targetKeyword = 'dardo';

                    ammoItemIdx = (c.equipment || []).findIndex(eq => eq.name.toLowerCase().includes(targetKeyword));
                    if (ammoItemIdx !== -1) {
                      ammoItem = c.equipment[ammoItemIdx];
                    }
                  }

                  const handleAttackWithAmmoCheck = () => {
                    if (isRanged && ammoItem) {
                      if ((ammoItem.qty || 0) <= 0) {
                        alert(`⚠️ ¡No te quedan ${ammoItem.name} para disparar con ${w.name || 'tu arma'}!`);
                        return;
                      }
                      // Deduct 1 ammo
                      const nextEq = [...(c.equipment || [])];
                      nextEq[ammoItemIdx] = { ...ammoItem, qty: Math.max(0, (ammoItem.qty || 1) - 1) };
                      update({ equipment: nextEq });
                    }
                    onRollWeapon(w);
                  };

                  return (
                    <div key={i} className="weapon-sheet-card">
                      <div className="weapon-sheet-header">
                        <input type="text" placeholder="Arma" value={w.name} onChange={e => {
                          const next = [...c.weapons];
                          next[i].name = e.target.value;
                          update({ weapons: next });
                        }} className="weapon-name-input" />
                        {w.magical && <span className="magical-badge">✨ Mágica</span>}
                        <button
                          className="equip-btn unequip"
                          title="Desequipar arma y guardar en la mochila"
                          onClick={() => handleUnequipWeapon(i)}
                          style={{ marginLeft: 'auto', marginRight: '6px' }}
                        >
                          🎒 Guardar en Mochila
                        </button>
                        <button className="rm" onClick={() => update({ weapons: (c.weapons || []).filter((_, idx) => idx !== i) })}>✕</button>
                      </div>
                      <div className="weapon-sheet-stats">
                        <button className="roll-btn" title={`Atacar con ${w.name || 'arma'}`} onClick={handleAttackWithAmmoCheck}>🎲</button>
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

                      {/* Ammo tracker if ranged */}
                      {isRanged && ammoItem && (
                        <div className="weapon-ammo-pill">
                          <span className="ammo-label">🏹 Munición ({ammoItem.name}):</span>
                          <button
                            className="ammo-qty-btn"
                            title="Restar 1 munición"
                            onClick={() => {
                              const nextEq = [...(c.equipment || [])];
                              nextEq[ammoItemIdx] = { ...ammoItem, qty: Math.max(0, (ammoItem.qty || 1) - 1) };
                              update({ equipment: nextEq });
                            }}
                          >
                            -1
                          </button>
                          <span className="ammo-count">{ammoItem.qty || 0} rest.</span>
                          <button
                            className="ammo-qty-btn"
                            title="Sumar 1 munición"
                            onClick={() => {
                              const nextEq = [...(c.equipment || [])];
                              nextEq[ammoItemIdx] = { ...ammoItem, qty: (ammoItem.qty || 0) + 1 };
                              update({ equipment: nextEq });
                            }}
                          >
                            +1
                          </button>
                        </div>
                      )}

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

              {/* ── EQUIPO / VESTIMENTAS EN CUERPO ── */}
              <div className="block-label" style={{ marginTop: '20px' }}>🛡️ Equipo (Vestimenta y Armadura en Uso)</div>
              <div className="inventory-section-note">
                Vestimenta o armadura puesta activamente en el cuerpo.
              </div>
              <div className="list-rows">
                {/* 1. Armadura / Ropaje actualmente equipado */}
                {c.equippedArmor && c.equippedArmor !== 'Sin armadura' && c.equippedArmor !== 'Sin armadura/Túnica' ? (() => {
                  const entry = ARMOR_CATALOG.find(a => a.name.toLowerCase() === (c.equippedArmor || '').toLowerCase());
                  const armorType = entry?.type || 'media';
                  const isProfArmor = isArmorProficient(c.equippedArmor, armorType, c.className, c.race, c.background);

                  return (
                    <div className={`equipment-sheet-card equipped-active ${!isProfArmor ? 'non-prof-equipped' : ''}`} style={{ borderColor: isProfArmor ? 'var(--brass)' : '#e55353', background: 'var(--card-bg)' }}>
                      <div className="equipment-sheet-header">
                        <span className="equipment-title-display">🛡️ <strong>{c.equippedArmor}</strong> (Equipado en Cuerpo)</span>
                        <button
                          className="equip-btn unequip"
                          title="Desequipar y guardar en la mochila"
                          onClick={handleUnequipGarment}
                          style={{ marginLeft: 'auto', marginRight: '6px' }}
                        >
                          🎒 Desequipar y Guardar en Mochila
                        </button>
                      </div>
                      <div className="equipment-sheet-sub">
                        <span className="equipment-slot-badge">
                          ✨ Ropaje / Armadura activa · Otorgando CA {c.ac}
                        </span>
                        {isProfArmor ? (
                          <span className="prof-badge star" style={{ marginLeft: '8px' }}>⭐ Competente</span>
                        ) : (
                          <span className="prof-badge non-prof" style={{ marginLeft: '8px', background: 'rgba(229,83,83,0.2)', color: '#ff9b8e', border: '1px solid #e55353', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem' }}>
                            ⚠️ Sin competencia
                          </span>
                        )}
                      </div>
                      {!isProfArmor && (
                        <div className="non-prof-warning-banner" style={{ marginTop: '8px', padding: '8px 10px', background: 'rgba(90,24,24,0.4)', border: '1px dashed #e55353', borderRadius: '4px', fontSize: '0.72rem', color: '#ffc1c1' }}>
                          <strong>⚠️ Penalización por falta de competencia en armadura:</strong>
                          <div style={{ marginTop: '2px' }}>• Desventaja en tiradas de características, salvaciones y ataques basados en <strong>Fuerza</strong> o <strong>Destreza</strong>.</div>
                          <div>• <strong>Imposibilidad de lanzar conjuros</strong> mientras viste esta armadura.</div>
                        </div>
                      )}
                    </div>
                  );
                })() : (
                  <div className="flavor">Sin vestimenta especial equipada (Ropajes comunes / Túnica básica). Equipa prendas o armaduras desde la mochila con el botón <b>[🛡️ Equipar en Cuerpo]</b>.</div>
                )}
              </div>

              {/* ── ACCESORIOS ── */}
              <div className="block-label" style={{ marginTop: '20px' }}>💍 Accesorios y Joyas</div>
              <div className="inventory-section-note">
                Anillos, collares, mochilas, bandoleras, morrales, cinturones y otros contenedores o talismanes.
              </div>
              <div className="list-rows">
                {accesoriosItems.length === 0 ? (
                  <div className="flavor">No hay accesorios o contenedores registrados.</div>
                ) : (
                  accesoriosItems.map(({ item, idx }) => (
                    <div key={idx} className="equipment-sheet-card">
                      <div className="equipment-sheet-header">
                        <span className="equipment-title-display">{item.name || 'Accesorio'}</span>
                        <div className="equipment-qty-pill">
                          <button
                            className="qty-btn"
                            title="Restar 1"
                            onClick={() => {
                              const next = [...(c.equipment || [])];
                              next[idx].qty = Math.max(0, (next[idx].qty || 1) - 1);
                              update({ equipment: next });
                            }}
                          >
                            -
                          </button>
                          <span className="qty-val">x{item.qty || 1}</span>
                          <button
                            className="qty-btn"
                            title="Sumar 1"
                            onClick={() => {
                              const next = [...(c.equipment || [])];
                              next[idx].qty = (next[idx].qty || 1) + 1;
                              update({ equipment: next });
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button className="rm" title="Eliminar accesorio" onClick={() => update({ equipment: (c.equipment || []).filter((_, i2) => i2 !== idx) })}>✕</button>
                      </div>
                      <div className="equipment-sheet-sub">
                        <span className="equipment-slot-badge">
                          ✨ Tipo / Ubicación: <b>{item.category || 'Accesorio'}</b>
                        </span>
                      </div>
                      {getItemDisplayNotes(item.name, item.notes) && (
                        <div className="equipment-notes-display">
                          {getItemDisplayNotes(item.name, item.notes)}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
              <button
                className="add-row-btn"
                onClick={() => {
                  const name = prompt('Nombre del accesorio a añadir:');
                  if (!name) return;
                  const category = prompt('Tipo (Anillo, Collar, Pulsera, Mochila, Cinturón, Accesorio):', 'Accesorio') || 'Accesorio';
                  const notes = prompt('Efectos mágicos o notas:') || '';
                  update({ equipment: [...(c.equipment || []), { name, qty: 1, notes, category }] });
                }}
                style={{ marginTop: '8px' }}
              >
                + añadir accesorio
              </button>

              {/* ── INVENTARIO / MOCHILA ── */}
              <div className="block-label" style={{ marginTop: '20px' }}>🎒 Inventario / Mochila</div>
              <div className="inventory-section-note">
                Objetos guardados en la mochila. Los <b>objetos equipables (ropajes, armaduras, armas guardadas)</b> se muestran <b>arriba del todo</b> con botón de equipar.
              </div>
              <div className="list-rows">
                {inventarioItems.length === 0 ? (
                  <div className="flavor">No hay objetos o ropajes guardados en la mochila.</div>
                ) : (
                  inventarioItems.map(({ item, idx }) => {
                    const isGarment = isGarmentOrArmor(item);
                    const isWeapon = isWeaponItem(item);

                    return (
                      <div key={idx} className={`equipment-sheet-card ${isGarment || isWeapon ? 'equipable-backpack-card' : ''}`}>
                        <div className="equipment-sheet-header">
                          <span className="equipment-title-display">{item.name || 'Objeto'}</span>

                          {/* BOTONES DE EQUIPAR PARA OBJETOS EN MOCHILA */}
                          {isGarment && (
                            <button
                              className="equip-btn equip"
                              title="Equipar esta vestimenta / armadura en el cuerpo"
                              onClick={() => handleEquipGarment(idx)}
                              style={{ marginLeft: 'auto', marginRight: '8px' }}
                            >
                              🛡️ Equipar en Cuerpo
                            </button>
                          )}
                          {isWeapon && (
                            <button
                              className="equip-btn equip"
                              title="Equipar como arma activa"
                              onClick={() => handleEquipWeapon(idx)}
                              style={{ marginLeft: 'auto', marginRight: '8px' }}
                            >
                              ⚔️ Equipar como Arma
                            </button>
                          )}

                          <div className="equipment-qty-pill" style={{ marginLeft: (isGarment || isWeapon) ? 0 : 'auto' }}>
                            <button
                              className="qty-btn"
                              title="Restar 1"
                              onClick={() => {
                                const next = [...(c.equipment || [])];
                                next[idx].qty = Math.max(0, (next[idx].qty || 1) - 1);
                                update({ equipment: next });
                              }}
                            >
                              -
                            </button>
                            <span className="qty-val">x{item.qty || 1}</span>
                            <button
                              className="qty-btn"
                              title="Sumar 1"
                              onClick={() => {
                                const next = [...(c.equipment || [])];
                                next[idx].qty = (next[idx].qty || 1) + 1;
                                update({ equipment: next });
                              }}
                            >
                              +
                            </button>
                          </div>
                          <button className="rm" title="Eliminar objeto" onClick={() => update({ equipment: (c.equipment || []).filter((_, i2) => i2 !== idx) })}>✕</button>
                        </div>
                        <div className="equipment-sheet-sub">
                          <span className="equipment-slot-badge">
                            {isGarment ? '👕 Ropaje / Armadura (sin equipar)' : isWeapon ? '⚔️ Arma guardada en mochila' : `📦 Categoría: ${item.category || 'Miscelánea'}`}
                          </span>
                        </div>
                        {getItemDisplayNotes(item.name, item.notes) && (
                          <div className="equipment-notes-display">
                            {getItemDisplayNotes(item.name, item.notes)}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
              <button
                className="add-row-btn"
                onClick={() => {
                  const name = prompt('Nombre del objeto o ropaje a añadir:');
                  if (!name) return;
                  const category = prompt('Categoría (Ropaje, Arma, Herramientas, Kit, Instrumento, Consumible, Miscelánea):', 'Miscelánea') || 'Miscelánea';
                  const notes = prompt('Descripción o uso del objeto:') || '';
                  update({ equipment: [...(c.equipment || []), { name, qty: 1, notes, category }] });
                }}
                style={{ marginTop: '8px' }}
              >
                + añadir objeto a mochila
              </button>

            </div>
  );
};
