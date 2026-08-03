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
  const tools = [...new Set([...classTools, ...bgExtras.tools, ...extraTools])];

  const raceDef = RACES[race];

  // ── Idiomas: raza (desde RACES.languages) + trasfondo ──
  const raceLangs = raceDef?.languages || RACE_LANGUAGES[race] || ['Común'];
  const bgLangs = bgExtras.languages || [];
  const languages = [...new Set([...raceLangs, ...bgLangs])];

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

