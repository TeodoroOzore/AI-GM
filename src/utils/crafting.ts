// ─── Sistema de Crafteo y Mejora (con reglas de balance) ─────────
// Valida automáticamente que:
//  - Se tengan los materiales necesarios (conteo recolectado)
//  - Se tenga la herramienta / artesano requerido
//  - Se supere la CD de tirada para éxito
//  - No se supere el límite de mejoras impuesto por la rareza

import {
  CharacterSheet,
  CraftingRecipe,
  WeaponItem,
  WeaponCatalogEntry,
  AbilityKey,
  WeaponModification,
  ArmorModification,
  CraftingProgress,
  CraftingProgressEntry,
  ItemRarity,
} from '../types/core';
import { MATERIALS_CATALOG } from '../data/materials';
import { WEAPONS_CATALOG } from '../data/weapons';
import { ARMOR_CATALOG } from '../data/armor';
import { abilityMod } from '../data/abilities';

// Convertir MATERIALS_CATALOG a un mapa de id->nombre
const MATERIAL_NAME_MAP: Record<string, string> = {};
MATERIALS_CATALOG.forEach(m => { MATERIAL_NAME_MAP[m.id] = m.name; });

export function materialName(id: string): string {
  return MATERIAL_NAME_MAP[id] || id;
}

// ─── Límite de modificaciones por rareza ──────────────────────────
// Regla de balance: cuántas mejoras puede acumular un objeto según su rareza.
export const MAX_MODS_BY_RARITY: Record<ItemRarity, number> = {
  'común': 1,
  'poco común': 2,
  'raro': 3,
  'muy raro': 4,
  'legendario': 5,
  'artefacto': 6,
};

export function getMaxMods(rarity: ItemRarity | undefined): number {
  return rarity ? (MAX_MODS_BY_RARITY[rarity] ?? 1) : 1;
}

// ─── Progreso de crafteo ──────────────────────────────────────────
export function getCraftingProgress(c: CharacterSheet): CraftingProgress {
  return c.craftingProgress || {};
}

// Añade/recolecta una cantidad de material para un objetivo (receta/mejora)
export function gatherMaterial(
  c: CharacterSheet,
  targetId: string,
  targetName: string,
  materialId: string,
  qty: number
): CharacterSheet {
  const progress = { ...getCraftingProgress(c) };
  const existing = progress[targetId] || { targetId, targetName, gathered: {}, completed: false };
  const gathered = { ...existing.gathered };
  gathered[materialId] = (gathered[materialId] || 0) + qty;
  progress[targetId] = { ...existing, gathered };
  return { ...c, craftingProgress: progress };
}

// Verifica si un objetivo de crafteo tiene todos los materiales necesarios
export function hasAllMaterialsForRecipe(
  c: CharacterSheet,
  recipe: CraftingRecipe
): boolean {
  const progress = getCraftingProgress(c);
  const entry = progress[recipe.id];
  if (!entry || entry.completed) return false;
  return recipe.materials.every(m => (entry.gathered[m.materialId] || 0) >= m.qty);
}

// Verifica si el personaje tiene la herramienta requerida (en competencias, inventario o equipo)
export function hasRequiredTool(c: CharacterSheet, toolRequired?: string): boolean {
  if (!toolRequired) return true;
  const toolReqLower = toolRequired.toLowerCase();

  const allItems = [
    ...((c.selectedTools || []).map((t: string) => t.toLowerCase())),
    ...((c.toolProf || '').split(',').map((t: string) => t.trim().toLowerCase())),
    ...((c.equipment || []).map(e => (e.name || '').toLowerCase())),
    ...((c.equippedGear || []).map(g => (g.name || '').toLowerCase())),
  ];

  // Búsqueda de palabra clave auxiliar
  const keywords = ['herrero', 'joyero', 'herbolario', 'envenenador', 'alquimista', 'curtidor', 'carpintero', 'ladrón', 'falsific', 'grabado', 'sanador', 'navegante', 'pintor', 'albañil', 'tejedor', 'alfeñique'];
  
  for (const item of allItems) {
    if (item.includes(toolReqLower) || toolReqLower.includes(item)) return true;
    for (const kw of keywords) {
      if (item.includes(kw) && toolReqLower.includes(kw)) return true;
    }
  }

  return false;
}

// ─── Tiradas (éxito/fallo) ────────────────────────────────────────
// Devuelve si se supera la CD dado el resultado de la tirada d20 + modificador.
export function isCraftSuccess(roll: number, mod: number, dc: number): boolean {
  return roll + mod >= dc;
}

// ─── Aplicar Crafteo: crear item (inventario + equipo) ────────────
export function applyCraftRecipe(c: CharacterSheet, recipe: CraftingRecipe): CharacterSheet {
  const updated = { ...c };

  // El objeto forjado pasa a ser "conocido" por el personaje.
  updated.knownItems = Array.from(new Set([...(c.knownItems || []), recipe.resultName]));

  // 1. Marcar receta como completada en el progreso
  const progress = { ...getCraftingProgress(c) };
  progress[recipe.id] = {
    targetId: recipe.id,
    targetName: recipe.name,
    gathered: progress[recipe.id]?.gathered || {},
    completed: true,
    resultName: recipe.resultName,
  };
  updated.craftingProgress = progress;

  // 2. Añadir al inventario
  const equipment = [...(updated.equipment || [])];
  const seen = new Set(equipment.map(e => (e.name || '').toLowerCase()));
  if (!seen.has(recipe.resultName.toLowerCase())) {
    equipment.push({
      name: recipe.resultName,
      qty: 1,
      notes: `Creado: ${recipe.resultSummary} (${recipe.rarity})`,
      category: recipe.resultType === 'weapon' ? 'Arma' : recipe.resultType === 'armor' ? 'Armadura' : 'Equipo',
    });
  }
  updated.equipment = equipment;

  // 3. Si es arma, añadir a la lista de armas del personaje
  if (recipe.resultType === 'weapon') {
    const weapon = buildWeaponFromRecipe(recipe);
    if (weapon) {
      updated.weapons = [...(updated.weapons || []), weapon];
      // Equipar en la primera mano libre
      const equippedGear = [...(updated.equippedGear || [])];
      equippedGear.push({
        name: recipe.resultName,
        slot: 'Mano Principal',
        notes: recipe.resultSummary,
        properties: recipe.rarity,
        magical: true,
      });
      updated.equippedGear = equippedGear;
    }
  }

  // 4. Si es armadura, equipar en Torso
  if (recipe.resultType === 'armor') {
    updated.equippedArmor = recipe.resultName;
    const ac = getArmorBaseAC(recipe.resultRef);
    const equippedGear = [...(updated.equippedGear || [])];
    equippedGear.push({
      name: recipe.resultName,
      slot: 'Torso',
      notes: recipe.resultSummary,
      properties: ac ? `CA ${ac}` : recipe.rarity,
      magical: true,
    });
    updated.equippedGear = equippedGear;
  }

  return updated;
}

// Construye un WeaponItem a partir de una receta
function buildWeaponFromRecipe(recipe: CraftingRecipe): WeaponItem | null {
  const ref = recipe.resultRef;
  const entry = WEAPONS_CATALOG.find(w => w.name === ref);
  if (!entry) {
    return {
      name: recipe.resultName,
      ability: 'str',
      dice: '1d8',
      type: 'cortante',
      proficient: true,
      notes: recipe.resultSummary,
      magical: true,
    };
  }
  const usesDex = entry.properties.includes('sutil') || entry.range === 'a distancia';
  return {
    name: recipe.resultName,
    ability: usesDex ? 'dex' : 'str',
    dice: entry.dice,
    type: entry.damageType,
    proficient: true,
    notes: recipe.resultSummary,
    category: entry.category,
    damageType: entry.damageType,
    properties: [...entry.properties],
    magical: true,
    range: entry.range,
    versatileDice: entry.versatileDice,
  };
}

function getArmorBaseAC(ref?: string): number | null {
  if (!ref) return null;
  const entry = ARMOR_CATALOG.find(a => a.name === ref);
  return entry ? entry.acBase : null;
}

// ─── Aplicar Mejora: reemplaza el item original ───────────────────
// La mejora NO añade un item nuevo: sustituye al original por la versión mejorada.
export function improveWeapon(
  c: CharacterSheet,
  weaponIndex: number,
  mod: WeaponModification
): CharacterSheet {
  const updated = { ...c };
  const weapons = [...(updated.weapons || [])];
  if (weaponIndex < 0 || weaponIndex >= weapons.length) return c;
  const original = { ...weapons[weaponIndex] };

  // Nuevo nombre: añade descriptor de la modificación
  const newName = `${original.name} (${mod.name})`;
  const improved: WeaponItem = {
    ...original,
    name: newName,
    magical: true,
    notes: [original.notes, mod.description].filter(Boolean).join(' · '),
  };

  // Aplicar bono de daño magico (1d4/1d6)
  if (mod.bonusDamage) {
    const base = improved.notes;
    improved.notes = `${base} · ${mod.bonusDamage} ${mod.damageType || 'daño'}`;
  }
  // Aplicar bono flat de daño
  if (mod.bonusDamageFlat) {
    improved.notes = `${improved.notes} · +${mod.bonusDamageFlat} daño`;
  }
  // Aplicar bono de ataque
  if (mod.bonusAttack) {
    improved.notes = `${improved.notes} · +${mod.bonusAttack} ataque`;
  }
  // Aleación: sube el dado de daño un paso
  if (mod.diceChange) {
    improved.dice = stepUpDice(improved.dice);
    if (improved.versatileDice) improved.versatileDice = stepUpDice(improved.versatileDice);
  }
  // Añadir propiedad
  if (mod.propertyAdd) {
    const props = improved.properties || [];
    if (!props.includes(mod.propertyAdd as any)) {
      improved.properties = [...props, mod.propertyAdd as any];
    }
  }

  // Reemplazar en la lista de armas
  weapons[weaponIndex] = improved;
  updated.weapons = weapons;

  // Reemplazar en el equipo (equippedGear) y en el inventario
  const gear = [...(updated.equippedGear || [])].map(g => {
    if (g.name.toLowerCase() === original.name.toLowerCase()) {
      return { ...g, name: newName, properties: improved.notes, magical: true };
    }
    return g;
  });
  updated.equippedGear = gear;

  const equipment = [...(updated.equipment || [])].map(e => {
    if (e.name.toLowerCase() === original.name.toLowerCase()) {
      return { ...e, name: newName, notes: improved.notes, category: 'Arma' };
    }
    return e;
  });
  updated.equipment = equipment;

  return updated;
}

// Sube el dado un paso: 1d4→1d6→1d8→1d10→1d12→2d6
export function stepUpDice(dice: string): string {
  const map: Record<string, string> = {
    '1d4': '1d6', '1d6': '1d8', '1d8': '1d10', '1d10': '1d12', '1d12': '2d6',
    '2d4': '2d6', '2d6': '2d8', '2d8': '2d10',
  };
  return map[dice] || dice;
}

// Cuenta cuántas mejoras ya tiene un arma (por el nombre o notas)
export function countWeaponMods(weapon: WeaponItem): number {
  // Contar marcadores de mejora en las notas
  const notes = weapon.notes || '';
  const markers = (notes.match(/\+\d+ ataque|\+\d+ daño|1d[46] (fuego|frío|relámpago|trueno|ácido|veneno|necrótico|radiante|fuerza|psíquico)/g) || []);
  return markers.length;
}

// ─── Mejora de armaduras ──────────────────────────────────────────
export function improveArmor(
  c: CharacterSheet,
  mod: ArmorModification
): CharacterSheet {
  const updated = { ...c };
  const armorName = updated.equippedArmor;
  if (!armorName) return c;

  const newName = `${armorName} (${mod.name})`;
  updated.equippedArmor = newName;

  const gear = [...(updated.equippedGear || [])].map(g => {
    if (g.name.toLowerCase() === armorName.toLowerCase()) {
      return { ...g, name: newName, properties: mod.description, magical: true };
    }
    return g;
  });
  updated.equippedGear = gear;

  const equipment = [...(updated.equipment || [])].map(e => {
    if (e.name.toLowerCase() === armorName.toLowerCase()) {
      return { ...e, name: newName, notes: mod.description, category: 'Armadura' };
    }
    return e;
  });
  updated.equipment = equipment;

  return updated;
}

// ─── Utilidades de progreso para la UI ────────────────────────────
export function getProgressForTarget(c: CharacterSheet, targetId: string): CraftingProgressEntry | undefined {
  return getCraftingProgress(c)[targetId];
}

export function isTargetCompleted(c: CharacterSheet, targetId: string): boolean {
  return getProgressForTarget(c, targetId)?.completed || false;
}

// Obtener estado de materiales de una receta (recolectado vs requerido)
export function getRecipeMaterialStatus(c: CharacterSheet, recipe: CraftingRecipe) {
  const entry = getProgressForTarget(c, recipe.id);
  return recipe.materials.map(m => {
    const gathered = entry?.gathered[m.materialId] || 0;
    return {
      materialId: m.materialId,
      name: materialName(m.materialId),
      required: m.qty,
      gathered,
      complete: gathered >= m.qty,
    };
  });
}

// ─── Visibilidad del jugador (Owner-based) ─────────────────────────
// El catálogo completo es referencia del DM/IA. El jugador solo ve los
// objetos que posee o ha descubierto. Se calcula el conjunto de nombres
// "conocidos" a partir del inventario, el equipo, las armas y la lista
// explícita knownItems (para recompensas de quest / descubrimientos).
export function getKnownItemNames(c: CharacterSheet): Set<string> {
  const known = new Set<string>();
  const add = (name?: string) => {
    const n = (name || '').trim();
    if (n) known.add(n.toLowerCase());
  };
  (c.equipment || []).forEach(e => add(e.name));
  (c.equippedGear || []).forEach(g => add(g.name));
  (c.weapons || []).forEach(w => add(w.name));
  (c.knownItems || []).forEach(add);
  if (c.equippedArmor) add(c.equippedArmor);
  return known;
}

// Añade objetos a la lista de conocidos (recompensas de quest, hallazgos).
export function addKnownItems(c: CharacterSheet, names: string[]): CharacterSheet {
  const known = new Set((c.knownItems || []).map(n => n.toLowerCase()));
  names.forEach(n => { const t = (n || '').trim().toLowerCase(); if (t) known.add(t); });
  return { ...c, knownItems: Array.from(known) };
}

// Filtra un catálogo de equipamiento a solo los objetos que el personaje
// posee o conoce. Devuelve false si el catálogo completo debe ocultarse.
export function isItemKnown(c: CharacterSheet, itemName: string): boolean {
  return getKnownItemNames(c).has(itemName.trim().toLowerCase());
}

// ─── Utility Helpers para Equipar Armas y Armaduras ────────────────
export function buildWeaponItem(entry: WeaponCatalogEntry): WeaponItem {
  const usesDex = entry.properties.includes('sutil') || entry.range === 'a distancia';
  return {
    name: entry.name,
    ability: usesDex ? 'dex' : 'str',
    dice: entry.dice,
    type: entry.damageType,
    proficient: true,
    notes: entry.properties.join(', '),
    category: entry.category,
    damageType: entry.damageType,
    properties: [...entry.properties],
    magical: entry.magical || false,
    range: entry.range,
    versatileDice: entry.versatileDice,
  };
}

export function computeAC(abilities: Record<AbilityKey, number>, armorName?: string, hasShield?: boolean, className?: string): number {
  const dexMod = abilityMod(abilities.dex);
  let ac = 10 + dexMod; // unarmored default

  if (armorName && armorName !== 'Sin armadura' && armorName !== 'Sin armadura/Túnica') {
    const armor = ARMOR_CATALOG.find(a => a.name.toLowerCase() === armorName.toLowerCase());
    if (armor) {
      if (armor.addDex) {
        const dexBonus = armor.maxDex !== undefined ? Math.min(dexMod, armor.maxDex) : dexMod;
        ac = armor.acBase + dexBonus;
      } else {
        ac = armor.acBase;
      }
    }
  }

  if (hasShield) {
    ac += 2;
  }

  // Bárbaro unarmored defense
  if (className === 'Bárbaro' && (!armorName || armorName.includes('Sin armadura'))) {
    ac = 10 + dexMod + abilityMod(abilities.con);
    if (hasShield) ac += 2;
  }
  // Monje unarmored defense
  if (className === 'Monje' && (!armorName || armorName.includes('Sin armadura')) && !hasShield) {
    ac = 10 + dexMod + abilityMod(abilities.wis);
  }

  return ac;
}

