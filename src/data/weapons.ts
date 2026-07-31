// ─── Weapons Catalog ──────────────────────────────────────────────

import { WeaponCatalogEntry } from '../types/core';

export const WEAPONS_CATALOG: WeaponCatalogEntry[] = [
  // ── Simples cuerpo a cuerpo ──
  { name: 'Bastón', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'contundente', properties: ['versátil'], versatileDice: '1d8' },
  { name: 'Clava', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d4', damageType: 'contundente', properties: ['ligera'] },
  { name: 'Daga', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d4', damageType: 'perforante', properties: ['ligera', 'sutil', 'arrojadiza'], throwRange: '6/18 m' },
  { name: 'Gran clava', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d8', damageType: 'contundente', properties: ['a dos manos'] },
  { name: 'Hacha de mano', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'cortante', properties: ['ligera', 'arrojadiza'], throwRange: '6/18 m' },
  { name: 'Hoz', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d4', damageType: 'cortante', properties: ['ligera'] },
  { name: 'Jabalina', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'perforante', properties: ['arrojadiza'], throwRange: '9/36 m' },
  { name: 'Lanza', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'perforante', properties: ['arrojadiza', 'versátil'], throwRange: '6/18 m', versatileDice: '1d8' },
  { name: 'Martillo ligero', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d4', damageType: 'contundente', properties: ['ligera', 'arrojadiza'], throwRange: '6/18 m' },
  { name: 'Maza', category: 'simple', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'contundente', properties: [] },
  // ── Simples a distancia ──
  { name: 'Arco corto', category: 'simple', range: 'a distancia', dice: '1d6', damageType: 'perforante', properties: ['munición', 'a dos manos'], ammoRange: '24/96 m' },
  { name: 'Ballesta ligera', category: 'simple', range: 'a distancia', dice: '1d8', damageType: 'perforante', properties: ['munición', 'carga', 'a dos manos'], ammoRange: '24/96 m' },
  { name: 'Dardo', category: 'simple', range: 'a distancia', dice: '1d4', damageType: 'perforante', properties: ['sutil', 'arrojadiza'], throwRange: '6/18 m' },
  { name: 'Honda', category: 'simple', range: 'a distancia', dice: '1d4', damageType: 'contundente', properties: ['munición'], ammoRange: '9/36 m' },
  // ── Marciales cuerpo a cuerpo ──
  { name: 'Alabarda', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d10', damageType: 'cortante', properties: ['pesada', 'alcance', 'a dos manos'] },
  { name: 'Cimitarra', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'cortante', properties: ['ligera', 'sutil'] },
  { name: 'Espada corta', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'perforante', properties: ['ligera', 'sutil'] },
  { name: 'Espada larga', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d8', damageType: 'cortante', properties: ['versátil'], versatileDice: '1d10' },
  { name: 'Espada ropera', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d8', damageType: 'perforante', properties: ['sutil'] },
  { name: 'Espadón', category: 'marcial', range: 'cuerpo a cuerpo', dice: '2d6', damageType: 'cortante', properties: ['pesada', 'a dos manos'] },
  { name: 'Gran hacha', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d12', damageType: 'cortante', properties: ['pesada', 'a dos manos'] },
  { name: 'Hacha de batalla', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d8', damageType: 'cortante', properties: ['versátil'], versatileDice: '1d10' },
  { name: 'Látigo', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d4', damageType: 'cortante', properties: ['sutil', 'alcance'] },
  { name: 'Lucero del alba', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d8', damageType: 'perforante', properties: [] },
  { name: 'Martillo de guerra', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d8', damageType: 'contundente', properties: ['versátil'], versatileDice: '1d10' },
  { name: 'Mazo', category: 'marcial', range: 'cuerpo a cuerpo', dice: '2d6', damageType: 'contundente', properties: ['pesada', 'a dos manos'] },
  { name: 'Pica', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d10', damageType: 'perforante', properties: ['pesada', 'alcance', 'a dos manos'] },
  { name: 'Tridente', category: 'marcial', range: 'cuerpo a cuerpo', dice: '1d6', damageType: 'perforante', properties: ['arrojadiza', 'versátil'], throwRange: '6/18 m', versatileDice: '1d8' },
  // ── Marciales a distancia ──
  { name: 'Arco largo', category: 'marcial', range: 'a distancia', dice: '1d8', damageType: 'perforante', properties: ['munición', 'pesada', 'a dos manos'], ammoRange: '45/180 m' },
  { name: 'Ballesta de mano', category: 'marcial', range: 'a distancia', dice: '1d6', damageType: 'perforante', properties: ['munición', 'ligera', 'carga'], ammoRange: '9/36 m' },
  { name: 'Ballesta pesada', category: 'marcial', range: 'a distancia', dice: '1d10', damageType: 'perforante', properties: ['munición', 'pesada', 'carga', 'a dos manos'], ammoRange: '30/120 m' },
  { name: 'Red', category: 'marcial', range: 'a distancia', dice: '—', damageType: 'contundente', properties: ['especial', 'arrojadiza'], throwRange: '1.5/4.5 m' },
];
