// ─── Panel de Equipamiento, Crafteo y Mejoras (Forja) ─────────────
// Secciones:
//  1. Catálogo de equipamiento por zonas del cuerpo (equipable)
//  2. Recetas de crafteo (recolectar materiales + CD + herramienta)
//  3. Mejoras de armas/armaduras (encantamientos, afilado, aleación)
//  4. Items de búsqueda / quest con requisitos

import React, { useState } from 'react';
import {
  CharacterSheet,
  EquipmentCatalogEntry,
  CraftingRecipe,
  WeaponModification,
  ArmorModification,
  QuestItemDef,
  EQUIPMENT_CATALOG,
  CRAFTING_RECIPES,
  WEAPON_MODS,
  ARMOR_MODS,
  QUEST_ITEMS,
  MATERIALS_CATALOG,
  gatherMaterial,
  hasAllMaterialsForRecipe,
  hasRequiredTool,
  applyCraftRecipe,
  improveWeapon,
  improveArmor,
  countWeaponMods,
  getMaxMods,
  getRecipeMaterialStatus,
  isTargetCompleted,
  getKnownItemNames,
  rollD20,
  getBodyZone,
} from '../types';

type Props = {
  character: CharacterSheet;
  onUpdateCharacter: (updated: CharacterSheet) => void;
};

type ForgeTab = 'equipment' | 'recipes' | 'upgrade' | 'quest';

const ITEM_RARITY_COLORS: Record<string, string> = {
  'común': 'var(--parchment-dim)',
  'poco común': '#6dbf67',
  'raro': '#7eb8e8',
  'muy raro': '#c08af0',
  'legendario': '#ffd700',
  'artefacto': '#ff8c5a',
};

export const EquipmentForgePanel: React.FC<Props> = ({ character, onUpdateCharacter }) => {
  const [tab, setTab] = useState<ForgeTab>('equipment');
  const [selectedWeaponIdx, setSelectedWeaponIdx] = useState<number>(0);
  // Vista: 'player' = solo objetos conocidos/poseídos; 'dm' = catálogo completo.
  const [viewMode, setViewMode] = useState<'player' | 'dm'>('player');
  const knownItems = getKnownItemNames(character);

  const update = (partial: Partial<CharacterSheet>) => {
    onUpdateCharacter({ ...character, ...partial });
  };

  const equipCatalogItem = (item: EquipmentCatalogEntry) => {
    const equipment = [...(character.equipment || [])];
    const bodyZone = getBodyZone(item.slot);

    // Si el slot no es una zona corporal equipable (contenedores, accesorios),
    // el objeto solo va al inventario, NO al cuerpo.
    if (!bodyZone) {
      if (!equipment.some(e => e.name.toLowerCase() === item.name.toLowerCase())) {
        equipment.push({
          name: item.name,
          qty: 1,
          notes: item.description,
          category: `Equipo: ${item.slot}`,
        });
      }
      update({ equipment });
      return;
    }

    // Regla de una sola pieza por zona corporal: se reemplaza lo que ocupe esa zona.
    let gear = [...(character.equippedGear || [])];
    gear = gear.filter(g => getBodyZone(g.slot) !== bodyZone);
    gear.push({
      name: item.name,
      slot: bodyZone,
      notes: item.description,
      properties: [item.effects, item.rarity, item.magical ? 'Mágico' : ''].filter(Boolean).join(' · '),
      magical: item.magical,
    });

    if (!equipment.some(e => e.name.toLowerCase() === item.name.toLowerCase())) {
      equipment.push({
        name: item.name,
        qty: 1,
        notes: item.description,
        category: `Equipo: ${bodyZone}`,
      });
    }
    update({ equippedGear: gear, equipment });
  };

  const handleGatherMaterial = (recipe: CraftingRecipe, materialId: string) => {
    const targetName = recipe.name;
    const next = gatherMaterial(character, recipe.id, targetName, materialId, 1);
    onUpdateCharacter(next);
  };

  const handleCraft = (recipe: CraftingRecipe) => {
    if (isTargetCompleted(character, recipe.id)) {
      alert(`Ya has creado «${recipe.resultName}».`);
      return;
    }
    if (!hasAllMaterialsForRecipe(character, recipe)) {
      alert('Aún no tienes todos los materiales necesarios. Recolecta los que faltan.');
      return;
    }
    if (!hasRequiredTool(character, recipe.toolRequired)) {
      alert(`Necesitas ${recipe.toolRequired} para intentar esta receta.`);
      return;
    }
    // Tirada de crafteo: d20 + competencia (si tiene la herramienta como competencia)
    const { result } = rollD20({});
    const toolProfHit = (character.selectedTools || []).some(t =>
      (t || '').toLowerCase().includes((recipe.toolRequired || '').toLowerCase())
    );
    const mod = toolProfHit ? 2 : 0; // simplificación: +2 si tiene la herramienta seleccionada
    const total = result + mod;
    if (total >= recipe.craftDC) {
      const next = applyCraftRecipe(character, recipe);
      onUpdateCharacter(next);
      alert(`¡Éxito! Forjaste «${recipe.resultName}». (Tirada: ${result} + ${mod} = ${total} ≥ CD ${recipe.craftDC})`);
      // Actualizar CA si es armadura
      setTimeout(() => {
        if (recipe.resultType === 'armor') window.dispatchEvent(new Event('craft-recalc-ac'));
      }, 0);
    } else {
      alert(`Fallo al forjar. (Tirada: ${result} + ${mod} = ${total} < CD ${recipe.craftDC}). Reúne más materiales o mejora tu destreza artesanal.`);
    }
  };

  const handleImproveWeapon = (mod: WeaponModification) => {
    const weapons = character.weapons || [];
    if (weapons.length === 0) {
      alert('No tienes armas equipadas para mejorar.');
      return;
    }
    const idx = Math.min(selectedWeaponIdx, weapons.length - 1);
    const weapon = weapons[idx];
    const maxMods = getMaxMods(weapon.magical ? 'poco común' : undefined);
    const currentMods = countWeaponMods(weapon);
    if (currentMods >= maxMods) {
      alert(`«${weapon.name}» ya tiene ${currentMods} mejora(s) y no puede recibir más.`);
      return;
    }
    if (!hasRequiredTool(character, mod.toolRequired)) {
      alert(`Necesitas ${mod.toolRequired} para aplicar ${mod.name}.`);
      return;
    }
    const { result } = rollD20({});
    const toolProfHit = (character.selectedTools || []).some(t =>
      (t || '').toLowerCase().includes((mod.toolRequired || '').toLowerCase())
    );
    const modTotal = result + (toolProfHit ? 2 : 0);
    if (modTotal >= mod.craftDC) {
      const next = improveWeapon(character, idx, mod);
      onUpdateCharacter(next);
      alert(`¡Mejora aplicada! «${weapon.name}» ahora es «${next.weapons[idx].name}».`);
    } else {
      alert(`Fallo al mejorar. (Tirada: ${result} + ${modTotal - result} = ${modTotal} < CD ${mod.craftDC})`);
    }
  };

  const handleImproveArmor = (mod: ArmorModification) => {
    if (!character.equippedArmor) {
      alert('No tienes armadura equipada para mejorar.');
      return;
    }
    if (!hasRequiredTool(character, mod.toolRequired)) {
      alert(`Necesitas ${mod.toolRequired} para aplicar ${mod.name}.`);
      return;
    }
    const { result } = rollD20({});
    const toolProfHit = (character.selectedTools || []).some(t =>
      (t || '').toLowerCase().includes((mod.toolRequired || '').toLowerCase())
    );
    const modTotal = result + (toolProfHit ? 2 : 0);
    if (modTotal >= mod.craftDC) {
      const next = improveArmor(character, mod);
      onUpdateCharacter(next);
      alert(`¡Armadura mejorada! Ahora llevas «${next.equippedArmor}».`);
      window.dispatchEvent(new Event('craft-recalc-ac'));
    } else {
      alert(`Fallo al mejorar. (Tirada: ${result} + ${modTotal - result} = ${modTotal} < CD ${mod.craftDC})`);
    }
  };

  const rarityBadge = (rarity: string) => (
    <span className="rarity-badge" style={{ color: ITEM_RARITY_COLORS[rarity] || 'var(--parchment-dim)' }}>
      {rarity}
    </span>
  );

  return (
    <div id="sheet-section-forge">
      <div className="forge-tabs">
        <button className={tab === 'equipment' ? 'active' : ''} onClick={() => setTab('equipment')}>🛡️ Equipables por Zona</button>
        <button className={tab === 'recipes' ? 'active' : ''} onClick={() => setTab('recipes')}>⚒️ Crafteo (Quests)</button>
        <button className={tab === 'upgrade' ? 'active' : ''} onClick={() => setTab('upgrade')}>✨ Mejoras y Encantamientos</button>
        <button className={tab === 'quest' ? 'active' : ''} onClick={() => setTab('quest')}>🗺️ Items de Búsqueda</button>
      </div>

{/* ═══════════ 1. EQUIPABLES POR ZONA ═══════════ */}
      {tab === 'equipment' && (
        <>
          <div className="view-toggle-row">
            <button
              className={`view-mode-btn ${viewMode === 'player' ? 'active' : ''}`}
              onClick={() => setViewMode('player')}
            >
              🎮 Modo Jugador (solo lo que posees)
            </button>
            <button
              className={`view-mode-btn ${viewMode === 'dm' ? 'active' : ''}`}
              onClick={() => setViewMode('dm')}
            >
              🧙 Modo DM (catálogo completo)
            </button>
          </div>
          <div className="block-label">🎒 Equipamiento por zonas del cuerpo</div>
          <p className="forge-hint">
            {viewMode === 'player'
              ? 'Solo ves los objetos que tu personaje posee o ha descubierto durante la aventura. Para permitir un objeto nuevo, el DM debe otorgarlo.'
              : 'Modo de Máster: ves el catálogo completo para asignar objetos como recompensa o durante quests.'}
          </p>
{(() => {
            const list: EquipmentCatalogEntry[] = EQUIPMENT_CATALOG as EquipmentCatalogEntry[];
            const visible = viewMode === 'dm'
              ? list
              : list.filter(item => knownItems.has(item.name.trim().toLowerCase()));
            const grouped = visible.reduce<Record<string, EquipmentCatalogEntry[]>>((acc: Record<string, EquipmentCatalogEntry[]>, item: EquipmentCatalogEntry) => {
              const slot = String(item.slot);
              if (!acc[slot]) acc[slot] = [];
              acc[slot].push(item);
              return acc;
            }, {});
            const alreadyEquipped = new Set((character.equippedGear || []).map(g => g.name.toLowerCase()));
            return Object.entries(grouped).map(([slot, items]) => (
              <div key={slot} className="forge-slot-group">
                <div className="forge-slot-label">📍 {slot}</div>
                <div className="forge-slot-items">
                  {(items || []).map((item: EquipmentCatalogEntry) => {
                    const isEquipped = alreadyEquipped.has(item.name.toLowerCase());
                    return (
                      <div key={item.name} className={`forge-equip-card ${isEquipped ? 'equipped' : ''} ${item.magical ? 'magical' : ''}`}>
                        <div className="forge-equip-name">
                          {item.name} {item.magical && <span className="magical-badge-inline">✨</span>}
                        </div>
                        <div className="forge-equip-meta">
                          {rarityBadge(item.rarity)}
                          <span className="forge-cost">{item.cost}</span>
                        </div>
                        <p className="forge-equip-desc">{item.description}</p>
                        {item.effects && <div className="forge-equip-effect">⚡ {item.effects}</div>}
                        {item.requirements && <div className="forge-equip-req">🔒 {item.requirements}</div>}
                        <button
                          className="forge-btn equip"
                          disabled={isEquipped}
                          onClick={() => equipCatalogItem(item)}
                        >
                          {isEquipped ? '✓ Equipado' : '➕ Equipar'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ));
          })()}
        </>
      )}

      {/* ═══════════ 2. CRAFTEO (QUESTS) ═══════════ */}
      {tab === 'recipes' && (
        <>
          <div className="block-label">⚒️ Forja y Crafteo</div>
          <p className="forge-hint">
            Cada receta requiere materiales, una herramienta y superar una CD con una tirada de d20. Recolecta materiales durante la aventura.
          </p>
          <div className="forge-recipes-list">
            {CRAFTING_RECIPES.map(recipe => {
              const completed = isTargetCompleted(character, recipe.id);
              const materialStatus = getRecipeMaterialStatus(character, recipe);
              const allMaterials = hasAllMaterialsForRecipe(character, recipe);
              const hasTool = hasRequiredTool(character, recipe.toolRequired);
              return (
                <div key={recipe.id} className={`forge-recipe-card ${completed ? 'completed' : ''} ${allMaterials && hasTool ? 'ready' : ''}`}>
                  <div className="forge-recipe-header">
                    <span className="forge-recipe-name">{recipe.name}</span>
                    {rarityBadge(recipe.rarity)}
                    {completed && <span className="forge-done-badge">✓ Creado</span>}
                  </div>
                  <p className="forge-recipe-desc">{recipe.description}</p>

                  <div className="forge-recipe-materials">
                    <div className="forge-mats-label">Materiales:</div>
                    {materialStatus.map(ms => (
                      <div key={ms.materialId} className={`forge-mat-row ${ms.complete ? 'complete' : ''}`}>
                        <span className="forge-mat-icon">{ms.complete ? '✅' : '🔘'}</span>
                        <span className="forge-mat-name">{ms.name}</span>
                        <span className="forge-mat-count">{ms.gathered}/{ms.required}</span>
                        <button
                          className="forge-btn gather"
                          onClick={() => handleGatherMaterial(recipe, ms.materialId)}
                        >
                          +1
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="forge-recipe-req">
                    <span>🔧 {recipe.toolRequired || 'Sin herramienta'}</span>
                    <span className={hasTool ? 'ok' : 'missing'}>{hasTool ? '✓ Disponible' : '✗ Falta'}</span>
                  </div>
                  <div className="forge-recipe-req">
                    <span>🎯 CD {recipe.craftDC}</span>
                    <span>{recipe.training || 'Entrenamiento básico'}</span>
                  </div>

                  <div className="forge-recipe-result">🏆 {recipe.resultName}: {recipe.resultSummary}</div>

                  <button
                    className="forge-btn craft"
                    disabled={completed || !allMaterials || !hasTool}
                    onClick={() => handleCraft(recipe)}
                  >
                    {completed ? '✓ Forjado' : allMaterials && hasTool ? '⚒️ Intentar Forja (CD ' + recipe.craftDC + ')' : '🔒 Reúne materiales y herramienta'}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* ═══════════ 3. MEJORAS Y ENCANTAMIENTOS ═══════════ */}
      {tab === 'upgrade' && (
        <>
          <div className="block-label">✨ Mejoras de Armas y Armaduras</div>
          <p className="forge-hint">
            Puedes afilar, encantar (cualquier tipo de daño mágico) o re-alear tus objetos. Cada mejora consume un espacio según la rareza del objeto.
          </p>

          {/* Selector de arma */}
          <div className="forge-upgrade-target">
            <div className="block-label" style={{ marginTop: 0 }}>⚔️ Arma seleccionada</div>
            <select value={selectedWeaponIdx} onChange={e => setSelectedWeaponIdx(parseInt(e.target.value) || 0)} className="forge-weapon-select">
              {(character.weapons || []).map((w, i) => (
                <option key={i} value={i}>{w.name} · {w.dice} {w.damageType || ''}</option>
              ))}
            </select>
            {character.weapons && character.weapons.length > 0 && (
              <div className="forge-mod-counter">
                Mejoras actuales: <strong>{countWeaponMods(character.weapons[Math.min(selectedWeaponIdx, character.weapons.length - 1)])}</strong>
              </div>
            )}
          </div>

          <div className="forge-mods-grid">
            {WEAPON_MODS.map(mod => (
              <div key={mod.id} className="forge-mod-card">
                <div className="forge-mod-name">
                  {mod.name}
                  {mod.damageType && <span className="dmg-badge-inline">{mod.damageType}</span>}
                </div>
                <p className="forge-mod-desc">{mod.description}</p>
                <div className="forge-mod-meta">
                  <span>🔧 {mod.toolRequired}</span>
                  <span className="forge-mod-dc">CD {mod.craftDC}</span>
                </div>
                <button className="forge-btn upgrade" onClick={() => handleImproveWeapon(mod)}>
                  ✨ Aplicar a arma
                </button>
              </div>
            ))}
          </div>

          {/* Armadura */}
          <div className="block-label" style={{ marginTop: '16px' }}>🛡️ Mejoras de Armadura</div>
          <div className="forge-armor-box">
            <div className="forge-armor-current">
              Armadura equipada: <strong>{character.equippedArmor || '—'}</strong>
            </div>
            {!character.equippedArmor && <p className="forge-hint">Equipa una armadura en la pestaña «Equipables» para poder mejorarla.</p>}
            {character.equippedArmor && (
              <div className="forge-mods-grid">
                {ARMOR_MODS.map(mod => (
                  <div key={mod.id} className="forge-mod-card">
                    <div className="forge-mod-name">{mod.name}</div>
                    <p className="forge-mod-desc">{mod.description}</p>
                    <div className="forge-mod-meta">
                      <span>🔧 {mod.toolRequired}</span>
                      <span className="forge-mod-dc">CD {mod.craftDC}</span>
                    </div>
                    <button className="forge-btn upgrade" onClick={() => handleImproveArmor(mod)}>
                      🛡️ Aplicar a armadura
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* ═══════════ 4. ITEMS DE BÚSQUEDA ═══════════ */}
      {tab === 'quest' && (
        <>
          <div className="block-label">🗺️ Items Legendarios de Búsqueda</div>
          <p className="forge-hint">
            Estos objetos requieren una aventura completa: reunir partes, cumplir requisitos narrativos y superar desafíos. El DM determina cuándo se obtienen.
          </p>
          <div className="forge-quest-list">
            {QUEST_ITEMS.map((qi: QuestItemDef) => (
              <div key={qi.id} className="forge-quest-card">
                <div className="forge-quest-header">
                  <span className="forge-quest-name">{qi.name}</span>
                  {rarityBadge(qi.rarity)}
                </div>
                <p className="forge-quest-desc">{qi.description}</p>
                <div className="forge-quest-parts">
                  <div className="forge-quest-parts-label">🧩 Partes necesarias:</div>
                  <ul>
                    {qi.parts.map((part, i) => (
                      <li key={i}>{part}</li>
                    ))}
                  </ul>
                </div>
                <div className="forge-quest-req">📜 Requisitos: {qi.requirements}</div>
                <div className="forge-quest-reward">🏆 Recompensa: {qi.rewardSummary}</div>
              </div>
            ))}
          </div>

          {/* Materiales de referencia */}
          <div className="block-label" style={{ marginTop: '16px' }}>🧱 Materiales conocidos para forja</div>
          <div className="forge-materials-ref">
            {MATERIALS_CATALOG.map(m => (
              <span key={m.id} className={`forge-material-chip ${m.rarity}`}>
                {m.name} · {m.value}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

