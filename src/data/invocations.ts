// ─── Warlock Invocations Catalog ──────────────────────────────────

import { WarlockInvocation } from '../types/core';

export const WARLOCK_INVOCATIONS_CATALOG: WarlockInvocation[] = [
  {
    name: 'Descarga Agónica',
    description: 'Cuando usás Descarga Sobrenatural, podés empujar al objetivo hasta 3 metros si falla su salvación de Constitución.',
  },
  {
    name: 'Visión del Diablo',
    description: 'Podés ver normalmente en oscuridad mágica y no mágica hasta 36 metros.',
  },
  {
    name: 'Armadura de Sombras',
    description: 'Podés lanzar Escudo de Fe sobre vos mismo en cualquier momento, sin gastar espacios de conjuro. Requiere concentración.',
  },
  {
    name: 'Libro de los Secretos Antiguos',
    description: 'Podés anotar rituales en tu Libro de Sombras y lanzarlos sin gastar espacios de conjuro.',
    prerequisite: 'Pacto del Tomo (Nivel 3)',
  },
  {
    name: 'Amo de las Cadenas',
    description: 'Podés lanzar Buscar Familiar sin gastar espacios. Tu familiar puede atacar si usás tu Acción en tu turno.',
    prerequisite: 'Pacto de la Cadena (Nivel 3)',
  },
  {
    name: 'Hoja Sedienta',
    description: 'Tu arma del Pacto de la Hoja gana un bonificador de +1 a las tiradas de ataque y de daño.',
    prerequisite: 'Pacto de la Hoja (Nivel 5)',
  },
  {
    name: 'Salto Ascendente',
    description: 'Podés lanzar Salto sobre vos mismo a voluntad, sin gastar espacios de conjuro.',
  },
  {
    name: 'Esculpido de Carne',
    description: 'Aprendés los trucos Ilusión Menor y Prestidigitación. No cuentan para tus trucos de Brujo.',
  },
  {
    name: 'Mirada del Cazador de Sombras',
    description: 'Podés lanzar Comprensión Idiomas a voluntad, sin gastar espacios de conjuro.',
  },
  {
    name: 'Maldición Inficiada',
    description: 'Cuando matás a una criatura maldecida con tu Maldición del Brujo, podés mover la maldición a otra criatura como acción bonus.',
  },
  {
    name: 'Tirón Repulsivo',
    description: 'Cuando usás Descarga Sobrenatural y el objetivo falla, lo empujás hasta 3 metros en lugar de hacia vos.',
    prerequisite: 'Nivel 5',
  },
  {
    name: 'Susurros de la Tumba',
    description: 'Podés lanzar Hablar con los Muertos a voluntad, sin gastar espacios de conjuro.',
    prerequisite: 'Nivel 9',
  },
  {
    name: 'Ojos del Amo de Runas',
    description: 'Podés lanzar Detectar Pensamientos a voluntad, sin gastar espacios de conjuro.',
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
