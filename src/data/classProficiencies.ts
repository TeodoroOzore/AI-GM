// ─── Class Proficiency Tables ──────────────────────────────────────

import { ArmorProfType, WeaponProfType } from '../types/core';

export const CLASS_ARMOR_PROF: Record<string, ArmorProfType[]> = {
  'Bárbaro':    ['Ligera', 'Media', 'Escudos'],
  'Bardo':      ['Ligera'],
  'Clérigo':    ['Ligera', 'Media', 'Escudos'],
  'Druida':     ['Ligera', 'Media', 'Escudos'],
  'Explorador': ['Ligera', 'Media', 'Escudos'],
  'Guerrero':   ['Ligera', 'Media', 'Pesada', 'Escudos'],
  'Hechicero':  [],
  'Mago':       [],
  'Monje':      [],
  'Paladín':    ['Ligera', 'Media', 'Pesada', 'Escudos'],
  'Pícaro':     ['Ligera'],
  'Brujo':      ['Ligera'],
};

export const CLASS_WEAPON_PROF: Record<string, WeaponProfType[]> = {
  'Bárbaro':    ['Simples', 'Marciales', 'Arrojadizas'],
  'Bardo':      ['Simples', 'Arrojadizas'],
  'Clérigo':    ['Simples', 'Arrojadizas'],
  'Druida':     ['Simples', 'Arrojadizas'],
  'Explorador': ['Simples', 'Marciales', 'Arrojadizas'],
  'Guerrero':   ['Simples', 'Marciales', 'Arrojadizas'],
  'Hechicero':  ['Simples', 'Arrojadizas'],
  'Mago':       ['Arrojadizas'],
  'Monje':      ['Simples', 'Arrojadizas'],
  'Paladín':    ['Simples', 'Marciales', 'Arrojadizas'],
  'Pícaro':     ['Simples', 'Marciales', 'Arrojadizas'],
  'Brujo':      ['Simples', 'Arrojadizas'],
};

export const CLASS_TOOL_PROF: Record<string, string[]> = {
  'Bárbaro':    [],
  'Bardo':      ['Instrumento musical (a elección)'],
  'Clérigo':    [],
  'Druida':     ['Herborista'],
  'Explorador': [],
  'Guerrero':   [],
  'Hechicero':  [],
  'Mago':       [],
  'Monje':      ['Herramientas de artesano (a elección)', 'Instrumento musical (a elección)'],
  'Paladín':    [],
  'Pícaro':     ['Herramientas de ladrón'],
  'Brujo':      [],
};
