// ─── Character Utility Functions ──────────────────────────────────

import { AbilityKey, CharacterSheet, SpellItem, ToolCategory } from '../types/core';
import { abilityMod, fmtSigned } from '../data/abilities';
import { profBonus, hpMaxFor } from '../data/classes';
import { RACES } from '../data/races';
import { TOOLS_CATALOG } from '../data/tools';
import { BACKGROUND_EXTRAS } from '../data/backgrounds';
import { CLASS_TOOL_PROF } from '../data/classProficiencies';

// ─── Categorías de herramientas ───────────────────────────────────
export function resolveToolCategory(toolName: string): ToolCategory {
  const name = (toolName || '').trim().toLowerCase();
  if (!name) return 'otro';

  // Coincidencia exacta en el catálogo
  const entry = TOOLS_CATALOG.find(t => t.name.toLowerCase() === name);
  if (entry) return entry.category;

  // Coincidencias parciales / genéricas ("a elección")
  if (name.includes('instrumento')) return 'instrumento';
  if (name.includes('juego de azar') || name.includes('juego')) return 'juego';
  if (name.includes('kit de')) return 'kit';
  if (name.includes('herramientas de ladrón')) return 'kit';
  if (name.includes('herramientas de navegante')) return 'kit';
  if (name.includes('vehículos')) return 'otro';
  if (name.includes('herramientas de artesano')) return 'artesano';
  if (name.includes('herramientas de')) return 'artesano';
  return 'otro';
}

// ─── Límites de herramientas por categoría ────────────────────────
// Regla base: 1 por categoría (kit, instrumento, artesano, juego).
// Clases/razas/trasfondos pueden aumentar el límite.
export function getToolCategoryLimits(className: string, race: string, background: string): Record<ToolCategory, number> {
  const limits: Record<ToolCategory, number> = {
    artesano: 1,
    instrumento: 1,
    kit: 1,
    juego: 1,
    otro: 1
  };

  // Bardo: 3 instrumentos musicales
  if (className === 'Bardo') limits.instrumento = 3;
  // Monje: 1 instrumento + 1 herramienta de artesano (2 total, pero cada categoría base 1)
  if (className === 'Monje') limits.instrumento = 2;

  // Trasfondos que otorgan herramientas aumentan la categoría correspondiente
  const bgDef = BACKGROUND_EXTRAS[background];
  if (bgDef && bgDef.tools) {
    for (const tool of bgDef.tools) {
      const cat = resolveToolCategory(tool);
      if (cat !== 'otro') limits[cat] += 1;
    }
  }

  // Razas que otorgan herramientas
  const raceDef = RACES[race];
  if (raceDef) {
    if (raceDef.toolProf) {
      for (const tool of raceDef.toolProf) {
        const cat = resolveToolCategory(tool);
        if (cat !== 'otro') limits[cat] += 1;
      }
    }
    if (raceDef.toolChoices) {
      for (const tool of raceDef.toolChoices.options) {
        const cat = resolveToolCategory(tool);
        if (cat !== 'otro') limits[cat] += 1;
      }
    }
  }

  // Clase: herramientas de clase (p.ej. Bardo: instrumento, Pícaro: kit)
  const classTools = CLASS_TOOL_PROF[className] || [];
  for (const tool of classTools) {
    const cat = resolveToolCategory(tool);
    if (cat !== 'otro') {
      // El bono explícito de Bardo (3 instrumentos) y Monje (2 instrumentos)
      // ya representa la competencia de clase; evitar el doble conteo.
      if (cat === 'instrumento' && (className === 'Bardo' || className === 'Monje')) continue;
      limits[cat] += 1;
    }
  }

  return limits;
}

// ─── Hechizos/acciones raciales ───────────────────────────────────
// Devuelve SpellItem[] con level='racial' para los rasgos que otorgan
// conjuros o acciones por raza (Dracónido, Tiefling, Drow, Alto Elfo, etc.)
export function getRacialSpells(
  race: string,
  raceAncestry: string,
  raceCantrip: string,
  level: number
): SpellItem[] {
  const spells: SpellItem[] = [];
  const rdef = RACES[race];
  if (!rdef) return spells;

  // ── Dracónido: Arma de Aliento ──
  if (rdef.ancestryChoices && raceAncestry) {
    const ancestry = rdef.ancestryChoices.options.find(a => a.name === raceAncestry);
    if (ancestry) {
      const dice = level >= 16 ? '5d6' : level >= 11 ? '4d6' : level >= 6 ? '3d6' : '2d6';
      spells.push({
        name: 'Arma de Aliento',
        level: 'racial',
        notes: `Ancestro: ${ancestry.name}. ${ancestry.breath}. Daño: ${dice} ${ancestry.damageType}. Una vez por descanso corto/largo.`,
        damageType: ancestry.damageType,
        school: 'evocación'
      });
    }
  }

  // ── Tiefling: Legado Infernal ──
  if (race === 'Tiefling') {
    spells.push({
      name: 'Taumaturgia',
      level: 'racial',
      notes: 'Truco racial. Carisma es tu habilidad para lanzarlo.',
      school: 'transmutación'
    });
    if (level >= 3) {
      spells.push({
        name: 'Rayo de Fuego',
        level: 'racial',
        notes: 'Una vez por descanso largo. Carisma es tu habilidad para lanzarlo.',
        damageType: 'fuego',
        school: 'evocación'
      });
    }
    if (level >= 5) {
      spells.push({
        name: 'Oscuridad',
        level: 'racial',
        notes: 'Una vez por descanso largo. Carisma es tu habilidad para lanzarlo.',
        school: 'evocación'
      });
    }
  }

  // ── Elfo Oscuro (Drow): Magia Drow ──
  if (race === 'Elfo Oscuro (Drow)') {
    spells.push({
      name: 'Taumaturgia',
      level: 'racial',
      notes: 'Truco racial. Carisma es tu habilidad para lanzarlo.',
      school: 'transmutación'
    });
    if (level >= 3) {
      spells.push({
        name: 'Rayo de Fuego',
        level: 'racial',
        notes: 'Una vez por descanso largo. Carisma es tu habilidad para lanzarlo.',
        damageType: 'fuego',
        school: 'evocación'
      });
    }
    if (level >= 5) {
      spells.push({
        name: 'Oscuridad',
        level: 'racial',
        notes: 'Una vez por descanso largo. Carisma es tu habilidad para lanzarlo.',
        school: 'evocación'
      });
    }
  }

  // ── Alto Elfo: Truco de mago elegido ──
  if (race === 'Alto Elfo' && raceCantrip) {
    spells.push({
      name: raceCantrip,
      level: 'racial',
      notes: 'Truco racial de Alto Elfo. Inteligencia es tu habilidad para lanzarlo.',
      school: 'evocación'
    });
  }

  return spells;
}

// ─── Resistencias raciales ────────────────────────────────────────
// Devuelve las resistencias derivadas de la raza (+ ancestro dracónico)
export function getRacialResistances(race: string, raceAncestry: string): string[] {
  const res: string[] = [];
  const rdef = RACES[race];
  if (!rdef) return res;

  if (rdef.resistances) {
    res.push(...rdef.resistances);
  }

  // Ancestro dracónico
  if (rdef.ancestryChoices && raceAncestry) {
    const ancestry = rdef.ancestryChoices.options.find(a => a.name === raceAncestry);
    if (ancestry && ancestry.resistance) {
      res.push(ancestry.resistance);
    }
  }

  return Array.from(new Set(res));
}

export function blankCharacter(): CharacterSheet {
  return {
name: '',
    gender: 'Masculino',
    race: 'Humano',
    raceChoiceA: 'str',
    raceChoiceB: 'dex',
raceExtraLanguage: '',
    extraLanguages: [],
    raceSkillChoices: [],
    raceAncestry: '',
    raceToolChoice: '',
    raceCantrip: '',
    background: '',
    className: 'Guerrero',
    subclass: '',
    subclassNotes: '',
    level: 1,
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    hpCur: 10,
    hpMax: 10,
    tempHp: 0,
    ac: 10,
    inspiration: false,
    conditions: '',
    deathSaves: { success: 0, fail: 0 },
    conditionDurations: {},
    turnCounter: 0,
    hitDiceRemaining: 1,
    proficientSkills: [],
    armorProf: [],
    weaponProf: [],
    toolProf: '',
    languages: '',
    feats: [],
    featsCustom: '',
    equipment: [],
    equippedGear: [],
    gold: 15,
    weapons: [],
    spellsKnown: [],
    spellSlotsUsed: {},
    classResourceUsed: {},
    companions: [],
    familiars: [],
    notes: '',
    equippedArmor: '',
    equippedShield: false,
    selectedTools: [],
    warlockInvocations: []
  };
}
