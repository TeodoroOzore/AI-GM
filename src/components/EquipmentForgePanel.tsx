// ─── Panel de Artesanía y Forja ────────────────────────────────────
// Acciones de artesanía habilitadas únicamente por las herramientas que el personaje posee.
// Recetas avanzadas/raras se descubren o son entregadas por el DM / NPCs.

import React, { useState } from 'react';
import {
  CharacterSheet,
  CraftingRecipe,
  WeaponModification,
  ArmorModification,
  CRAFTING_RECIPES,
  WEAPON_MODS,
  ARMOR_MODS,
  gatherMaterial,
  hasAllMaterialsForRecipe,
  hasRequiredTool,
  applyCraftRecipe,
  improveWeapon,
  improveArmor,
  countWeaponMods,
  getRecipeMaterialStatus,
  isTargetCompleted,
  rollD20,
} from '../types';

type Props = {
  character: CharacterSheet;
  onUpdateCharacter: (updated: CharacterSheet) => void;
};

// Recetas básicas universales que conoce cualquier personaje si tiene la herramienta
const BASIC_RECIPE_IDS = ['cuero_endurecido'];

export const EquipmentForgePanel: React.FC<Props> = ({ character, onUpdateCharacter }) => {
  const [selectedWeaponIdx, setSelectedWeaponIdx] = useState<number>(0);

  // Lista de herramientas de artesano/kits que posee el personaje (excluyendo instrumentos musicales)
  const ownedToolsList: string[] = Array.from(
    new Set([
      ...(character.selectedTools || []),
      ...((character.toolProf || '').split(',').map(s => s.trim()).filter(Boolean)),
      ...((character.equipment || []).map(e => e.name).filter(Boolean)),
      ...((character.equippedGear || []).map(g => g.name).filter(Boolean)),
    ])
  ).filter(name => {
    const lower = name.toLowerCase();
    const isInstrument = ['gaita', 'laúd', 'flauta', 'tambor', 'lira', 'cuerno', 'viola', 'dulcémele', 'instrumento'].some(inst => lower.includes(inst));
    if (isInstrument) return false;
    return lower.includes('herramienta') || lower.includes('kit');
  });

  // Lista de recetas desbloqueadas (básicas + las entregadas por el DM / NPCs)
  const unlockedRecipeIds = new Set([
    ...BASIC_RECIPE_IDS,
    ...(character.unlockedRecipes || []),
  ]);

  // Recetas visibles para el jugador: deben estar desbloqueadas Y requerir herramientas que posee (o requerir herramientas en general)
  const availableRecipes = CRAFTING_RECIPES.filter(r => {
    // Si no está desbloqueada por el DM/historia, no se muestra
    if (!unlockedRecipeIds.has(r.id)) return false;
    return hasRequiredTool(character, r.toolRequired);
  });

  // Acciones de mejora/encantamiento disponibles por herramienta
  const availableWeaponMods = WEAPON_MODS.filter(m => hasRequiredTool(character, m.toolRequired));
  const availableArmorMods = ARMOR_MODS.filter(m => hasRequiredTool(character, m.toolRequired));

  const handleGatherMaterial = (recipe: CraftingRecipe, materialId: string) => {
    const updated = gatherMaterial(character, recipe.id, recipe.name, materialId, 1);
    onUpdateCharacter(updated);
  };

  const handleCraft = (recipe: CraftingRecipe) => {
    const mod = 2;
    const roll = rollD20().result;
    const total = roll + mod;

    if (total >= recipe.craftDC) {
      const updated = applyCraftRecipe(character, recipe);
      alert(`🎉 ¡Éxito en la artesanía de "${recipe.name}"!\n🎲 Tirada: d20 (${roll}) + ${mod} = ${total} (CD ${recipe.craftDC}).\n🏆 Objeto creado y añadido a tu hoja: ${recipe.resultName}.`);
      onUpdateCharacter(updated);
    } else {
      alert(`❌ La tirada de artesanía falló (${total} vs CD ${recipe.craftDC}). Los materiales permanecen intactos.`);
    }
  };

  const handleImproveWeapon = (mod: WeaponModification) => {
    const wList = character.weapons || [];
    if (wList.length === 0) {
      alert('⚠️ No tienes armas en tu lista para aplicar acciones de artesanía.');
      return;
    }
    const idx = Math.min(selectedWeaponIdx, wList.length - 1);
    const targetWeapon = wList[idx];
    const roll = rollD20().result;
    const total = roll + 2;

    if (total >= mod.craftDC) {
      const updated = improveWeapon(character, idx, mod);
      alert(`✨ ¡Acción de artesanía aplicada con éxito a "${targetWeapon.name}"!\n🎲 Tirada: d20 (${roll}) + 2 = ${total} (CD ${mod.craftDC}).\n⚔️ Resultado: ${mod.name} (${mod.description}).`);
      onUpdateCharacter(updated);
    } else {
      alert(`❌ La tirada falló (${total} vs CD ${mod.craftDC}). Revisa tus herramientas e inténtalo de nuevo.`);
    }
  };

  const handleImproveArmor = (mod: ArmorModification) => {
    if (!character.equippedArmor) {
      alert('⚠️ Debes tener una armadura equipada para realizar trabajos de artesanía en ella.');
      return;
    }
    const roll = rollD20().result;
    const total = roll + 2;

    if (total >= mod.craftDC) {
      const updated = improveArmor(character, mod);
      alert(`🛡️ ¡Trabajo de artesanía aplicado con éxito a "${character.equippedArmor}"!\n🎲 Tirada: d20 (${roll}) + 2 = ${total} (CD ${mod.craftDC}).\n✨ Resultado: ${mod.name}.`);
      onUpdateCharacter(updated);
    } else {
      alert(`❌ La tirada falló (${total} vs CD ${mod.craftDC}).`);
    }
  };

  return (
    <div className="equipment-forge-panel">
      {/* 🛠️ HERRAMIENTAS ACTIVAS DEL PERSONAJE */}
      <div className="owned-tools-banner">
        <div className="owned-tools-header">
          <span>🛠️ <strong>Herramientas y Kits activos en tu inventario:</strong></span>
        </div>
        <div className="owned-tools-chips">
          {ownedToolsList.length === 0 ? (
            <span className="no-tools-warn">
              ⚠️ No llevas herramientas ni kits en tu inventario. Ve a "Equipo e Inventario" para llevar tus herramientas (Herrero, Tallado de runas, Herbolario, Joyero, Curtidor, etc.).
            </span>
          ) : (
            ownedToolsList.map((tName, i) => (
              <span key={i} className="tool-owned-chip">
                🔧 {tName}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ⚒️ ACCIONES DE ARTESANÍA PERMITIDAS POR TUS HERRAMIENTAS */}
      <div className="block-label" style={{ marginTop: '12px' }}>⚡ Acciones de Artesanía Disponibles con tus Herramientas</div>
      <p className="forge-hint">
        Las acciones de artesanía (afilar, tallar runas, ajustar armaduras) dependen directamente de las herramientas que posees en tu equipo.
      </p>

      {/* Selector de arma para acciones */}
      {character.weapons && character.weapons.length > 0 && (
        <div className="forge-upgrade-target">
          <div className="block-label" style={{ marginTop: 0 }}>⚔️ Arma seleccionada para trabajar</div>
          <select value={selectedWeaponIdx} onChange={e => setSelectedWeaponIdx(parseInt(e.target.value) || 0)} className="forge-weapon-select">
            {(character.weapons || []).map((w, i) => (
              <option key={i} value={i}>{w.name} · {w.dice} {w.damageType || ''}</option>
            ))}
          </select>
          <div className="forge-mod-counter">
            Trabajos aplicados: <strong>{countWeaponMods(character.weapons[Math.min(selectedWeaponIdx, character.weapons.length - 1)])}</strong>
          </div>
        </div>
      )}

      {availableWeaponMods.length === 0 && availableArmorMods.length === 0 ? (
        <div className="flavor-box" style={{ margin: '12px 0', padding: '12px', background: 'var(--card-bg)', borderRadius: '6px' }}>
          ℹ️ No tienes herramientas que permitan realizar trabajos de artesanía o encantamiento inmediatos. Lleva herramientas (ej. <i>Herramientas de herrero</i>, <i>Herramientas de tallado de runas</i>, <i>Kit de herbolario</i>) en tu inventario para habilitar acciones.
        </div>
      ) : (
        <div className="forge-mods-grid">
          {availableWeaponMods.map(mod => (
            <div key={mod.id} className="forge-mod-card">
              <div className="forge-mod-name">
                {mod.name}
                {mod.damageType && <span className="dmg-badge-inline">{mod.damageType}</span>}
              </div>
              <p className="forge-mod-desc">{mod.description}</p>
              <div className="forge-mod-meta">
                <span>🔧 Habilitado por: <strong>{mod.toolRequired}</strong></span>
                <span className="forge-mod-dc">CD {mod.craftDC}</span>
              </div>
              <button className="forge-btn upgrade" onClick={() => handleImproveWeapon(mod)}>
                ✨ Aplicar a arma
              </button>
            </div>
          ))}

          {character.equippedArmor && availableArmorMods.map(mod => (
            <div key={mod.id} className="forge-mod-card">
              <div className="forge-mod-name">{mod.name}</div>
              <p className="forge-mod-desc">{mod.description}</p>
              <div className="forge-mod-meta">
                <span>🔧 Habilitado por: <strong>{mod.toolRequired}</strong></span>
                <span className="forge-mod-dc">CD {mod.craftDC}</span>
              </div>
              <button className="forge-btn upgrade" onClick={() => handleImproveArmor(mod)}>
                🛡️ Aplicar a armadura
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 📜 RECETAS DE FABRICACIÓN DESBLOQUEADAS */}
      <div className="block-label" style={{ marginTop: '24px' }}>📜 Recetas de Fabricación Desbloqueadas</div>
      <p className="forge-hint">
        Las recetas de equipo raro y objetos especiales deben ser entregadas por el DM o encontrarse durante la aventura para figurar aquí.
      </p>

      {availableRecipes.length === 0 ? (
        <div className="flavor-box" style={{ margin: '12px 0', padding: '12px', background: 'var(--card-bg)', borderRadius: '6px' }}>
          📜 Actualmente no tienes recetas complejas desbloqueadas. Encuentra bocetos de forja, instruye a un herrero NPC o resuelve misiones para aprender nuevas recetas.
        </div>
      ) : (
        <div className="forge-recipes-list">
          {availableRecipes.map(recipe => {
            const completed = isTargetCompleted(character, recipe.id);
            const materialStatus = getRecipeMaterialStatus(character, recipe);
            const allMaterials = hasAllMaterialsForRecipe(character, recipe);
            const hasTool = hasRequiredTool(character, recipe.toolRequired);
            return (
              <div key={recipe.id} className={`forge-recipe-card ${completed ? 'completed' : ''} ${allMaterials && hasTool ? 'ready' : ''}`}>
                <div className="forge-recipe-header">
                  <span className="forge-recipe-name">{recipe.name}</span>
                  <span className="forge-rarity-badge">{recipe.rarity}</span>
                  {completed && <span className="forge-done-badge">✓ Fabricado</span>}
                </div>
                <p className="forge-recipe-desc">{recipe.description}</p>

                <div className="forge-recipe-materials">
                  <div className="forge-mats-label">📦 Materiales requeridos:</div>
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
                  <span>🔧 {recipe.toolRequired}</span>
                  <span className={hasTool ? 'ok' : 'missing'}>{hasTool ? '✓ Posees herramienta' : '🔒 Falta herramienta'}</span>
                </div>
                <div className="forge-recipe-req">
                  <span>🎯 CD {recipe.craftDC}</span>
                  <span>{recipe.training || 'Receta conocida'}</span>
                </div>

                <div className="forge-recipe-result">🏆 Resultado: {recipe.resultSummary}</div>

                <button
                  className="forge-btn craft"
                  disabled={completed || !allMaterials || !hasTool}
                  onClick={() => handleCraft(recipe)}
                >
                  {completed ? '✓ Fabricado' : allMaterials && hasTool ? '⚒️ Fabricar (Tirada CD ' + recipe.craftDC + ')' : '🔒 Reúne materiales y herramientas'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
