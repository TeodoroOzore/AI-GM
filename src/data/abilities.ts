// ─── Abilities & Skills ────────────────────────────────────────────

import { AbilityKey, AbilityDef, Skill } from '../types/core';

export const ABILITIES: AbilityDef[] = [
  { key: 'str', label: 'FUE', full: 'Fuerza' },
  { key: 'dex', label: 'DES', full: 'Destreza' },
  { key: 'con', label: 'CON', full: 'Constitución' },
  { key: 'int', label: 'INT', full: 'Inteligencia' },
  { key: 'wis', label: 'SAB', full: 'Sabiduría' },
  { key: 'cha', label: 'CAR', full: 'Carisma' }
];

export const SKILLS: Skill[] = [
  { name: 'Atletismo', ab: 'str' },
  { name: 'Acrobacias', ab: 'dex' },
  { name: 'Juego de Manos', ab: 'dex' },
  { name: 'Sigilo', ab: 'dex' },
  { name: 'Arcanos', ab: 'int' },
  { name: 'Historia', ab: 'int' },
  { name: 'Investigación', ab: 'int' },
  { name: 'Naturaleza', ab: 'int' },
  { name: 'Religión', ab: 'int' },
  { name: 'Trato con Animales', ab: 'wis' },
  { name: 'Perspicacia', ab: 'wis' },
  { name: 'Medicina', ab: 'wis' },
  { name: 'Percepción', ab: 'wis' },
  { name: 'Supervivencia', ab: 'wis' },
  { name: 'Engaño', ab: 'cha' },
  { name: 'Intimidación', ab: 'cha' },
  { name: 'Interpretación', ab: 'cha' },
  { name: 'Persuasión', ab: 'cha' }
];

export const POINTBUY_COST: Record<number, number> = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
};

export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function fmtSigned(n: number): string {
  return n >= 0 ? `+${n}` : String(n);
}

export const DAMAGE_TYPE_EMOJI: Record<string, string> = {
  'cortante': '⚔️',
  'contundente': '🔨',
  'perforante': '🏹',
  'fuego': '🔥',
  'frío': '❄️',
  'relámpago': '⚡',
  'trueno': '💥',
  'ácido': '🧪',
  'veneno': '☠️',
  'necrótico': '💀',
  'radiante': '☀️',
  'fuerza': '✨',
  'psíquico': '🧠',
};

export const DAMAGE_TYPE_COLOR: Record<string, string> = {
  'cortante': '#e74c3c',
  'contundente': '#95a5a6',
  'perforante': '#27ae60',
  'fuego': '#e67e22',
  'frío': '#3498db',
  'relámpago': '#f1c40f',
  'trueno': '#8e44ad',
  'ácido': '#2ecc71',
  'veneno': '#16a085',
  'necrótico': '#2c3e50',
  'radiante': '#f39c12',
  'fuerza': '#9b59b6',
  'psíquico': '#e91e9b',
};

