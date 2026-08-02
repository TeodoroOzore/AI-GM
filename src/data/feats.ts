// ─── Feats Catalog ────────────────────────────────────────────────

import { FeatDef } from '../types/core';

export const FEAT_CATALOG: FeatDef[] = [
  {
    name: 'Alerta',
    description: '+5 a la Iniciativa. No puedes ser sorprendido mientras estés consciente. Otras criaturas no ganan ventaja por atacar sin ser vistas.',
    category: 'utility'
  },
  {
    name: 'Afortunado',
    description: 'Tienes 3 puntos de suerte por descanso largo. Puedes gastar 1 para tirar un d20 adicional en ataques, pruebas o salvaciones, o forzar a un enemigo a repetir su ataque.',
    category: 'utility'
  },
  {
    name: 'Duro de Pelar',
    description: 'Tu máximo de Puntos de Golpe aumenta en una cantidad igual al doble de tu nivel actual. Cada vez que subas de nivel, tus PG aumentan en 2 adicionales.',
    category: 'defense'
  },
  {
    name: 'Mago de Guerra',
    description: 'Ventaja en salvaciones de CON para mantener concentración en conjuros. Puedes realizar componentes somáticos sosteniendo armas/escudo. Usas reacción para lanzar conjuros como ataque de oportunidad.',
    prerequisite: 'Capacidad de lanzar al menos un conjuro',
    category: 'magic',
    spellcasterOnly: true
  },
  {
    name: 'Maestro de Armas Grandes',
    description: 'Al asestar un crítico o reducir a 0 PG con un arma pesada cuerpo a cuerpo, puedes realizar un ataque adicional como acción bonus. Puedes elegir sufrir -5 al ataque para infligir +10 al daño.',
    prerequisite: 'Competencia en armas marciales',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Tirador Certero',
    description: 'Atacar a rango máximo con armas a distancia no impone desventaja. Tus ataques a distancia ignoran cobertura media (1/2) y tres cuartos (3/4). Puedes sufrir -5 al ataque para infligir +10 al daño.',
    prerequisite: 'Competencia en armas a distancia',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Resiliente',
    description: 'Aumentas un atributo a tu elección en +1 y ganas competencia en las tiradas de salvación de ese atributo.',
    category: 'defense'
  },
  {
    name: 'Móvil',
    description: 'Tu velocidad aumenta en 3 metros. Al usar Esprintar, el terreno difícil no te frena. Al realizar un ataque cuerpo a cuerpo contra una criatura, no provocás ataques de oportunidad de ella el resto del turno.',
    category: 'utility'
  },
  {
    name: 'Iniciado en la Magia',
    description: 'Aprendes 2 trucos y 1 hechizo de nivel 1 de la lista de una clase mágica a tu elección (Mago, Clérigo, Druida, Bardo, Hechicero o Brujo). Puedes lanzar el hechizo de nivel 1 gratis 1 vez por descanso largo.',
    category: 'magic'
  },
  {
    name: 'Curandero',
    description: 'Al usar un kit de curandero para estabilizar, la criatura recupera 1 PG. Además, puedes gastar 1 uso del kit para curar 1d6 + 4 + nivel de PG a una criatura (1 vez por descanso).',
    category: 'utility'
  },
  {
    name: 'Maestro de los Escudos',
    description: 'Al usar la acción de Atacar con un escudo equipado, puedes usar una acción bonus para empujar a una criatura a 1.5m. Sumas la CA del escudo a salvaciones de DES individuales.',
    prerequisite: 'Competencia en Escudos',
    category: 'defense',
    martialOnly: true
  },
  {
    name: 'Duelista Defensivo',
    description: 'Al empuñar un arma sutil en la que eres competente, puedes usar tu reacción cuando te ataquen para sumar tu bono de competencia a la CA contra ese ataque.',
    prerequisite: 'Destreza 13 o superior',
    category: 'defense',
    martialOnly: true
  },
  {
    name: 'Francotirador de Conjuros',
    description: 'Duplica el alcance de los conjuros que requieren una tirada de ataque. Tus ataques de conjuro ignoran cobertura media y tres cuartos. Aprendes 1 truco con tirada de ataque.',
    prerequisite: 'Capacidad de lanzar al menos un conjuro',
    category: 'magic',
    spellcasterOnly: true
  },
  {
    name: 'Actor',
    description: 'Aumenta tu Carisma en +1. Tienes ventaja en Pruebas de Engaño e Interpretación al hacerte pasar por otra persona. Puedes imitar la voz o sonidos de criaturas escuchadas durante 1 minuto.',
    category: 'utility'
  },
  {
    name: 'Observador',
    description: 'Aumenta Inteligencia o Sabiduría en +1. Ganas +5 a tu Percepción pasiva e Investigación pasiva. Puedes leer los labios de cualquier criatura si comprendes su idioma.',
    category: 'utility'
  },
  {
    name: 'Atacante Salvaje',
    description: 'Una vez por turno, al tirar el daño de un ataque cuerpo a cuerpo con arma, puedes volver a tirar los dados de daño y elegir el mayor de los dos resultados.',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Iniciador en el Combate',
    description: 'Aprendes un Estilo de Combate de la lista del Guerrero (Arqueria, Defensa, Duelista, Armas Grandes, Protección, etc.).',
    prerequisite: 'Competencia en armas marciales',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Contendiente Habilidoso',
    description: 'Ganas competencia inmediata en 3 habilidades o herramientas a tu elección.',
    category: 'utility'
  },
  {
    name: 'Centinela',
    description: 'Cuando golpeas a una criatura con un ataque de oportunidad, su velocidad se convierte en 0. Puedes realizar ataques de oportunidad incluso si usan la acción de Destrabarse.',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Adepto Elemental',
    description: 'Eliges un tipo de daño elemental (Fuego, Frío, Relámpago, Ácido o Trueno). Tus conjuros ignoran la resistencia a ese elemento y los 1s en dados de daño cuentan como 2s.',
    prerequisite: 'Capacidad de lanzar al menos un conjuro',
    category: 'magic',
    spellcasterOnly: true
  }
];

export function getMaxFeatsCount(className: string, level: number, race: string): number {
  let count = 0;
  if (race === 'Humano') count += 1;
  if (level >= 4) count += 1;
  if (className === 'Guerrero' && level >= 6) count += 1;
  if (level >= 8) count += 1;
  if (className === 'Pícaro' && level >= 10) count += 1;
  if (level >= 12) count += 1;
  if (className === 'Guerrero' && level >= 14) count += 1;
  if (level >= 16) count += 1;
  if (level >= 19) count += 1;
  return count;
}
