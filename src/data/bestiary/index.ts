// ─── Bestiario: Catálogo unificado + helpers de búsqueda ───────────
import { BestiaryEntry, BestiaryTier } from '../../types/core';
import { BESTIARY_TIER1 } from './tier1';
import { BESTIARY_TIER2 } from './tier2';
import { BESTIARY_TIER3 } from './tier3';
import { BESTIARY_TIER4 } from './tier4';
import { BESTIARY_TIER5 } from './tier5';
import { BESTIARY_TIER6 } from './tier6';

// Catálogo completo
export const BESTIARY: BestiaryEntry[] = [
  ...BESTIARY_TIER1,
  ...BESTIARY_TIER2,
  ...BESTIARY_TIER3,
  ...BESTIARY_TIER4,
  ...BESTIARY_TIER5,
  ...BESTIARY_TIER6,
];

// Definición de escalones (tiers) para los filtros de la UI
export const BESTIARY_TIERS: BestiaryTier[] = [
  {
    key: 'tier1',
    label: 'Escalón 1 · Novatos',
    crRange: 'CR 0–1',
    description: 'Bestias menores, esbirros, bandidos y alimañas.',
    emoji: '🐀',
  },
  {
    key: 'tier2',
    label: 'Escalón 2 · Aguerridos',
    crRange: 'CR 1–4',
    description: 'Soldados, orcos, ghouls, ogros y amenazas locales.',
    emoji: '⚔️',
  },
  {
    key: 'tier3',
    label: 'Escalón 3 · Veteranos',
    crRange: 'CR 5–10',
    description: 'Elementales, gólems, quimeras y campeones de guerra.',
    emoji: '🔥',
  },
  {
    key: 'tier4',
    label: 'Escalón 4 · Maestros',
    crRange: 'CR 11–16',
    description: 'Dragones jóvenes, gigantes mayores y demonios menores.',
    emoji: '🐉',
  },
  {
    key: 'tier5',
    label: 'Escalón 5 · Legendarios',
    crRange: 'CR 17–24',
    description: 'Dragones adultos, señores del abismo y no-muertos colosales.',
    emoji: '💀',
  },
  {
    key: 'tier6',
    label: 'Escalón 6 · Apocalípticos',
    crRange: 'CR 25–30',
    description: 'Dragones ancianos, avatares primordiales y horrores cósmicos.',
    emoji: '🌌',
  },
];

// Mapa de escalón → criaturas (para filtros rápidos)
export const BESTIARY_BY_TIER: Record<string, BestiaryEntry[]> = {
  tier1: BESTIARY_TIER1,
  tier2: BESTIARY_TIER2,
  tier3: BESTIARY_TIER3,
  tier4: BESTIARY_TIER4,
  tier5: BESTIARY_TIER5,
  tier6: BESTIARY_TIER6,
};

// Normaliza texto para búsqueda insensible a tildes/mayúsculas
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export type BestiaryFilter = {
  query?: string;
  tierKey?: string | null;
  type?: string | null;
};

export function searchBestiary(filter: BestiaryFilter = {}): BestiaryEntry[] {
  const { query = '', tierKey = null, type = null } = filter;
  const q = normalize(query.trim());

  let results = BESTIARY;

  if (tierKey) {
    results = BESTIARY_BY_TIER[tierKey] ?? [];
  }

  if (type) {
    results = results.filter((e) => e.type === type);
  }

  if (q) {
    results = results.filter((e) => {
      const haystack = normalize(
        [e.name, e.type, e.size, e.alignment, e.habitat || '', e.lore].join(' ')
      );
      return haystack.includes(q);
    });
  }

  return results;
}

export function getBestiaryById(id: string): BestiaryEntry | undefined {
  return BESTIARY.find((e) => e.id === id);
}

export function getBestiaryTypes(): string[] {
  const set = new Set<string>();
  BESTIARY.forEach((e) => set.add(e.type));
  return Array.from(set).sort();
}

export function getBestiaryByChallenge(min: number, max: number): BestiaryEntry[] {
  return BESTIARY.filter((e) => e.challenge >= min && e.challenge <= max);
}

