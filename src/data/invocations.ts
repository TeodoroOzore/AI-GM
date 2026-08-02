// ─── Warlock Invocations Catalog ──────────────────────────────────

import { WarlockInvocation } from '../types/core';

export const WARLOCK_INVOCATIONS_CATALOG: WarlockInvocation[] = [
  {
    name: 'Descarga Agónica',
    description: 'Cuando usas Descarga Sobrenatural, puedes empujar al objetivo hasta 3 metros si falla su salvación de Constitución.',
  },
  {
    name: 'Visión del Diablo',
    description: 'Puedes ver normalmente en oscuridad mágica y no mágica hasta 36 metros.',
  },
  {
    name: 'Armadura de Sombras',
    description: 'Puedes lanzar Escudo de Fe sobre ti mismo en cualquier momento, sin gastar espacios de conjuro. Requiere concentración.',
  },
  {
    name: 'Libro de los Secretos Antiguos',
    description: 'Puedes anotar rituales en tu Libro de Sombras y lanzarlos sin gastar espacios de conjuro.',
    prerequisite: 'Pacto del Tomo (Nivel 3)',
  },
  {
    name: 'Amo de las Cadenas',
    description: 'Puedes lanzar Buscar Familiar sin gastar espacios. Tu familiar puede atacar si usas tu Acción en tu turno.',
    prerequisite: 'Pacto de la Cadena (Nivel 3)',
  },
  {
    name: 'Hoja Sedienta',
    description: 'Tu arma del Pacto de la Hoja gana un bonificador de +1 a las tiradas de ataque y de daño.',
    prerequisite: 'Pacto de la Hoja (Nivel 5)',
  },
  {
    name: 'Salto Ascendente',
    description: 'Puedes lanzar Salto sobre ti mismo a voluntad, sin gastar espacios de conjuro.',
  },
  {
    name: 'Esculpido de Carne',
    description: 'Aprendes los trucos Ilusión Menor y Prestidigitación. No cuentan para tus trucos de Brujo.',
  },
  {
    name: 'Mirada del Cazador de Sombras',
    description: 'Puedes lanzar Comprensión Idiomas a voluntad, sin gastar espacios de conjuro.',
  },
  {
    name: 'Maldición Inficiada',
    description: 'Cuando matas a una criatura maldecida con tu Maldición del Brujo, puedes mover la maldición a otra criatura como acción bonus.',
  },
  {
    name: 'Tirón Repulsivo',
    description: 'Cuando usas Descarga Sobrenatural y el objetivo falla, lo empujás hasta 3 metros en lugar de hacia ti.',
    prerequisite: 'Nivel 5',
  },
  {
    name: 'Susurros de la Tumba',
    description: 'Puedes lanzar Hablar con los Muertos a voluntad, sin gastar espacios de conjuro.',
    prerequisite: 'Nivel 9',
  },
  {
    name: 'Ojos del Amo de Runas',
    description: 'Puedes lanzar Detectar Pensamientos a voluntad, sin gastar espacios de conjuro.',
    prerequisite: 'Nivel 7',
  },
];

/** Devuelve cuántas invocaciones puede tener activas el Brujo según su nivel (D&D 5e PHB). */
export function getWarlockInvocationsLimit(level: number): number {
  if (level >= 18) return 8;
  if (level >= 15) return 7;
  if (level >= 12) return 6;
  if (level >= 9)  return 5;
  if (level >= 7)  return 4;
  if (level >= 5)  return 3;
  if (level >= 2)  return 2;
  return 0;
}
