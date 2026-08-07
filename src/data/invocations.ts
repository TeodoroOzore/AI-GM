// ─── Warlock Invocations Catalog (D&D 5.5e Rework) ───────────────────

import { WarlockInvocation } from '../types/core';

export const WARLOCK_INVOCATIONS_CATALOG: WarlockInvocation[] = [
  // ── Pact Boons as Level 1 Invocations (5.5e Rework) ──
  {
    name: 'Invocación: Hoja del Pacto',
    description: 'Pacto de la Hoja (5.5e): Conjuras un arma espectral o vinculas un arma mágica. Usas Carisma para sus tiradas de ataque y daño, y sus impactos se consideran mágicos.',
    prerequisite: 'Nivel 1 (Brujo)',
  },
  {
    name: 'Invocación: Tomo del Pacto',
    description: 'Pacto del Tomo (5.5e): Obtienes un Grimorio del Pacto con 3 trucos adicionales de cualquier lista de clase y 2 conjuros de ritual de Nivel 1.',
    prerequisite: 'Nivel 1 (Brujo)',
  },
  {
    name: 'Invocación: Cadena del Pacto',
    description: 'Pacto de la Cadena (5.5e): Aprendes el conjuro Buscar Familiar de forma innata. Tu familiar puede tomar formas avanzadas (Imp, Quasit, Pseudodragón, Esprite) y atacar usando una de tus acciones.',
    prerequisite: 'Nivel 1 (Brujo)',
  },

  // ── Invocaciones Sobrenaturales Generales ──
  {
    name: 'Descarga Agónica',
    description: 'Cuando lanzas Descarga Sobrenatural, sumas tu modificador de Carisma al daño de cada impacto.',
  },
  {
    name: 'Visión del Diablo',
    description: 'Puedes ver normalmente en oscuridad mágica y no mágica hasta 36 metros.',
  },
  {
    name: 'Armadura de Sombras',
    description: 'Puedes lanzar Armadura de Mago sobre ti mismo a voluntad, sin gastar espacios de conjuro ni componentes materiales.',
  },
  {
    name: 'Libro de los Secretos Antiguos',
    description: 'Puedes anotar cualquier conjuro etiquetado como Ritual en tu Tomo del Pacto y lanzarlo como ritual.',
    prerequisite: 'Invocación: Tomo del Pacto',
  },
  {
    name: 'Hoja Sedienta',
    description: 'Puedes atacar dos veces en lugar de una cuando realizas la acción de Atacar con tu arma del Pacto de la Hoja.',
    prerequisite: 'Invocación: Hoja del Pacto (Nivel 5)',
  },
  {
    name: 'Salto Ascendente',
    description: 'Puedes lanzar el conjuro Salto sobre ti mismo a voluntad, sin gastar espacios de conjuro.',
  },
  {
    name: 'Esculpido de Carne',
    description: 'Puedes lanzar Alterar el Propio Cuerpo a voluntad, sin gastar espacios de conjuro.',
    prerequisite: 'Nivel 9',
  },
  {
    name: 'Mirada del Cazador de Sombras',
    description: 'Puedes lanzar Comprensión de Idiomas a voluntad, sin gastar espacios de conjuro.',
  },
  {
    name: 'Tirón Repulsivo',
    description: 'Cuando usas Descarga Sobrenatural e impactas a una criatura, puedes empujarla hasta 3 metros en línea recta.',
  },
  {
    name: 'Susurros de la Tumba',
    description: 'Puedes lanzar Hablar con los Muertos a voluntad, sin gastar espacios de conjuro.',
    prerequisite: 'Nivel 9',
  },
  {
    name: 'Ojos del Amo de Runas',
    description: 'Puedes leer cualquier escritura y código, sin importar el idioma.',
  },
  {
    name: 'Vigor Vital del Abismo',
    description: 'Puedes lanzar Falsa Vida sobre ti mismo a voluntad como conjuro de 1.er nivel.',
  }
];

/** Devuelve cuántas invocaciones puede tener activas el Brujo según su nivel en D&D 5.5e. */
export function getWarlockInvocationsLimit(level: number): number {
  if (level >= 18) return 9;
  if (level >= 15) return 8;
  if (level >= 12) return 7;
  if (level >= 9)  return 6;
  if (level >= 7)  return 5;
  if (level >= 5)  return 4;
  if (level >= 3)  return 3;
  if (level >= 2)  return 2;
  if (level >= 1)  return 1;
  return 0;
}
