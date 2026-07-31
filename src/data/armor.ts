// ─── Armor Catalog ────────────────────────────────────────────────

import { ArmorCatalogEntry } from '../types/core';

export const ARMOR_CATALOG: ArmorCatalogEntry[] = [
  // Ligera
  { name: 'Acolchada', type: 'ligera', acBase: 11, addDex: true, stealthDisadvantage: true, cost: '5 po' },
  { name: 'Cuero', type: 'ligera', acBase: 11, addDex: true, stealthDisadvantage: false, cost: '10 po' },
  { name: 'Cuero tachonado', type: 'ligera', acBase: 12, addDex: true, stealthDisadvantage: false, cost: '45 po' },
  // Media
  { name: 'Pieles', type: 'media', acBase: 12, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '10 po' },
  { name: 'Camisa de malla', type: 'media', acBase: 13, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '50 po' },
  { name: 'Coraza', type: 'media', acBase: 14, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '400 po' },
  { name: 'Cota de escamas', type: 'media', acBase: 14, addDex: true, maxDex: 2, stealthDisadvantage: true, cost: '50 po' },
  { name: 'Media armadura', type: 'media', acBase: 15, addDex: true, maxDex: 2, stealthDisadvantage: true, cost: '750 po' },
  // Pesada
  { name: 'Cota de anillas', type: 'pesada', acBase: 14, addDex: false, stealthDisadvantage: true, cost: '30 po' },
  { name: 'Cota de malla', type: 'pesada', acBase: 16, addDex: false, stealthDisadvantage: true, strRequirement: 13, cost: '75 po' },
  { name: 'Armadura de bandas', type: 'pesada', acBase: 17, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '200 po' },
  { name: 'Armadura de placas', type: 'pesada', acBase: 18, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '1500 po' },
  // Escudo
  { name: 'Escudo', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '10 po' },
];
