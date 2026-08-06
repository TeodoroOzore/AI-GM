// ─── Proficiency Tables & Functions ───────────────────────────────

import { ArmorProfType, WeaponProfType, ProficiencyBundle } from '../types/core';
import { CLASS_ARMOR_PROF, CLASS_WEAPON_PROF, CLASS_TOOL_PROF } from './classProficiencies';
import { RACES, RACE_LANGUAGES } from './races';
import { BACKGROUND_EXTRAS } from './backgrounds';

/** Derives the complete, locked proficiency set from class + race + background */
export function getCharacterProficiencies(
  className: string,
  race: string,
  background: string,
  extraTools: string[] = []
): ProficiencyBundle {
  const armor: ArmorProfType[] = [...(CLASS_ARMOR_PROF[className] || [])];
  const weapons: WeaponProfType[] = [...(CLASS_WEAPON_PROF[className] || [])];

const classTools = CLASS_TOOL_PROF[className] || [];
  const bgExtras = BACKGROUND_EXTRAS[background] || { tools: [], languages: [] };
  // Filtra los textos indicativos "a elección": los espacios ya fueron
  // llenados con elecciones concretas durante la creación del personaje.
  const isConcrete = (s: string) => !/\(a elección\)/i.test(s) && !/idioma[s]? adicional(es)?/i.test(s);
  const tools = [...new Set([...classTools, ...bgExtras.tools, ...extraTools].filter(isConcrete))];

  const raceDef = RACES[race];

  // ── Idiomas: raza (desde RACES.languages) + trasfondo ──
  const raceLangs = raceDef?.languages || RACE_LANGUAGES[race] || ['Común'];
  const bgLangs = bgExtras.languages || [];
  const languages = [...new Set([...raceLangs, ...bgLangs].filter(isConcrete))];

// ── Habilidades: rasgos raciales fijos (p.ej. Semiorco → Intimidación) ──
  const skills = [...(raceDef?.skillProf || [])];

  // ── Habilidades del trasfondo: competencias otorgadas por el trasfondo ──
  if (bgExtras.skills && bgExtras.skills.length > 0) {
    for (const s of bgExtras.skills) {
      if (!skills.includes(s)) skills.push(s);
    }
  }

  // ── Competencias raciales de armas específicas (para mostrar como chips) ──
  // Se añaden como armas "Marciales"/"Simples" si la clase aún no las tiene.
  if (raceDef?.weaponProf && raceDef.weaponProf.length > 0) {
    if (!weapons.includes('Simples')) weapons.push('Simples');
    if (!weapons.includes('Marciales')) weapons.push('Marciales');
  }

  // ── Competencias raciales de herramientas ──
  if (raceDef?.toolProf) {
    for (const t of raceDef.toolProf) {
      if (!tools.includes(t)) tools.push(t);
    }
  }

  return { armor, weapons, tools, languages, skills };
}

/** Comprueba si el personaje es competente con un arma concreta (considerando Clase + Raza + Trasfondo) */
export function isWeaponProficient(
  weaponName: string,
  category: 'simple' | 'marcial',
  className: string,
  raceName: string,
  backgroundName?: string
): boolean {
  const classWeapons = CLASS_WEAPON_PROF[className] || [];
  const raceDef = RACES[raceName];
  const raceWeapons = raceDef?.weaponProf || [];

  // 1. Competencia por categoría general (Simples / Marciales)
  if (category === 'simple' && (classWeapons.includes('Simples') || raceWeapons.includes('Simples'))) {
    return true;
  }
  if (category === 'marcial' && (classWeapons.includes('Marciales') || raceWeapons.includes('Marciales'))) {
    return true;
  }

  // 2. Competencia por nombre específico de arma (ej. Elfo → Arco largo, Enano → Hacha de batalla, etc.)
  const nameLower = weaponName.trim().toLowerCase();
  const allSpecific = [...classWeapons, ...raceWeapons].map(w => w.trim().toLowerCase());

  if (allSpecific.some(w => nameLower.includes(w) || w.includes(nameLower))) {
    return true;
  }

  return false;
}

/** Comprueba si el personaje es competente con una armadura / escudo (considerando Clase + Raza + Trasfondo) */
export function isArmorProficient(
  armorName: string,
  armorType: string,
  className: string,
  raceName: string,
  backgroundName?: string
): boolean {
  const typeLower = armorType.trim().toLowerCase();
  const nameLower = armorName.trim().toLowerCase();

  // Ropajes, túnicas y vestimentas comunes siempre son competentes para todas las clases
  if (typeLower === 'túnica' || typeLower === 'tunica' || typeLower === 'ropaje' || typeLower === 'cuerpo' || nameLower.includes('túnica') || nameLower.includes('ropa') || nameLower.includes('atavío')) {
    return true;
  }

  const classArmor = CLASS_ARMOR_PROF[className] || [];
  const raceDef = RACES[raceName];
  const raceArmor = raceDef?.armorProf || [];

  const combinedArmor = [...classArmor, ...raceArmor].map(a => a.trim().toLowerCase());

  // Escudos
  if (typeLower === 'escudo' || nameLower.includes('escudo')) {
    return combinedArmor.includes('escudo') || combinedArmor.includes('escudos');
  }

  // Tipo de armadura ('ligera', 'media', 'pesada')
  if (combinedArmor.includes(typeLower)) {
    return true;
  }

  // Nombre específico
  if (combinedArmor.some(a => nameLower.includes(a) || a.includes(nameLower))) {
    return true;
  }

  return false;
}


