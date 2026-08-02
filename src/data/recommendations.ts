// ─── Class Recommendations ────────────────────────────────────────

import { ClassRecommendation } from '../types/core';

export const CLASS_RECOMMENDATIONS: Record<string, ClassRecommendation> = {
  'Bárbaro': {
    skills: ['Atletismo', 'Percepción', 'Intimidación', 'Supervivencia'],
    tools: [],
    cantrips: [],
    spells: [],
    weapons: ['Gran hacha', 'Hacha de mano', 'Jabalina'],
    armor: ['Sin armadura (FUE+CON)', 'Escudo'],
    description: 'Competente en armaduras ligeras y medias, escudos, armas simples y marciales. Tu CA sin armadura = 10 + DES + CON.'
  },
  'Bardo': {
    skills: ['Persuasión', 'Interpretación', 'Engaño', 'Perspicacia', 'Acrobacias'],
    tools: ['Laúd', 'Flauta', 'Viola'],
    cantrips: ['Burla Viciosa', 'Prestidigitación', 'Luz'],
    spells: ['Curar Heridas', 'Hechizar Persona', 'Dormir', 'Palabra Sanadora', 'Onda Atronadora'],
    weapons: ['Espada ropera', 'Daga', 'Espada corta'],
    armor: ['Cuero', 'Cuero tachonado'],
    description: 'Competente en armaduras ligeras, armas simples, espadas cortas, roperas y largas. Conoce 2 trucos y 4 hechizos de nivel 1 al inicio. Elige 3 instrumentos musicales.'
  },
  'Clérigo': {
    skills: ['Religión', 'Medicina', 'Perspicacia', 'Historia', 'Persuasión'],
    tools: [],
    cantrips: ['Llama Sagrada', 'Taumaturgia', 'Palabra de Sanación'],
    spells: ['Curar Heridas', 'Bendición', 'Escudo de la Fe', 'Infligir Heridas', 'Detectar Magia'],
    weapons: ['Maza', 'Martillo de guerra', 'Ballesta ligera'],
    armor: ['Cota de malla', 'Cota de escamas', 'Escudo'],
    description: 'Competente en armaduras ligeras, medias, escudos y armas simples. Conoce 3 trucos al inicio. Prepara hechizos de la lista completa de clérigo cada día (SAB + nivel).'
  },
  'Druida': {
    skills: ['Naturaleza', 'Percepción', 'Supervivencia', 'Trato con Animales', 'Medicina'],
    tools: ['Kit de herbolario'],
    cantrips: ['Producir Llama', 'Druídica', 'Espinas'],
    spells: ['Curar Heridas', 'Enmarañar', 'Detectar Magia', 'Onda Atronadora', 'Palabra Sanadora'],
    weapons: ['Cimitarra', 'Bastón', 'Daga'],
    armor: ['Cuero', 'Pieles', 'Escudo'],
    description: 'Competente en armaduras ligeras y medias (no metálicas), escudos (no metálicos). Conoce 2 trucos al inicio. Prepara hechizos cada día (SAB + nivel).'
  },
  'Explorador': {
    skills: ['Percepción', 'Supervivencia', 'Sigilo', 'Naturaleza', 'Atletismo'],
    tools: [],
    cantrips: [],
    spells: ['Favor del Cazador', 'Saeta Guía del Cazador', 'Curar Heridas', 'Detectar Magia', 'Enmarañar'],
    weapons: ['Arco largo', 'Espada larga', 'Espada corta', 'Daga'],
    armor: ['Cuero tachonado', 'Cota de escamas'],
    description: 'Competente en armaduras ligeras, medias, escudos, armas simples y marciales. Hechizos desde nivel 2 (SAB).'
  },
  'Guerrero': {
    skills: ['Atletismo', 'Percepción', 'Intimidación', 'Supervivencia', 'Acrobacias'],
    tools: [],
    cantrips: [],
    spells: [],
    weapons: ['Espada larga', 'Espadón', 'Arco largo', 'Hacha de batalla', 'Escudo'],
    armor: ['Cota de malla', 'Cuero tachonado', 'Escudo'],
    description: 'Competente en TODAS las armaduras, escudos, armas simples y marciales. Elige un estilo de combate al nivel 1. Aliento de combate 1d10+nivel PG.'
  },
  'Hechicero': {
    skills: ['Arcanos', 'Persuasión', 'Engaño', 'Intimidación', 'Religión'],
    tools: [],
    cantrips: ['Rayo de Fuego', 'Prestidigitación', 'Descarga Eléctrica', 'Luz'],
    spells: ['Proyectil Mágico', 'Escudo', 'Manos Ardientes', 'Dormir'],
    weapons: ['Daga', 'Dardo', 'Honda', 'Bastón'],
    armor: [],
    description: 'Sin competencia en armaduras. Conoce 4 trucos y 2 hechizos de nivel 1 al inicio. La magia proviene de tu linaje innato (CAR).'
  },
  'Mago': {
    skills: ['Arcanos', 'Investigación', 'Historia', 'Religión', 'Perspicacia'],
    tools: [],
    cantrips: ['Rayo de Fuego', 'Prestidigitación', 'Mano de Mago', 'Luz', 'Rayo de Escarcha'],
    spells: ['Proyectil Mágico', 'Escudo', 'Detectar Magia', 'Manos Ardientes', 'Armadura de Mago', 'Dormir'],
    weapons: ['Bastón', 'Daga', 'Ballesta ligera'],
    armor: [],
    description: 'Sin competencia en armaduras. Conoces 3 trucos y 6 hechizos de nivel 1 en tu grimorio al inicio. Preparas INT + nivel cada día.'
  },
  'Monje': {
    skills: ['Acrobacias', 'Atletismo', 'Sigilo', 'Historia', 'Perspicacia'],
    tools: [],
    cantrips: [],
    spells: [],
    weapons: ['Espada corta', 'Daga', 'Bastón'],
    armor: [],
    description: 'Sin competencia en armaduras. Armas simples y espadas cortas. CA sin armadura = 10 + DES + SAB. Dado de artes marciales 1d4.'
  },
  'Paladín': {
    skills: ['Atletismo', 'Persuasión', 'Religión', 'Medicina', 'Perspicacia'],
    tools: [],
    cantrips: [],
    spells: ['Bendición', 'Curar Heridas', 'Castigo Atronador', 'Escudo de la Fe', 'Detectar Magia'],
    weapons: ['Espada larga', 'Espadón', 'Martillo de guerra', 'Jabalina'],
    armor: ['Cota de malla', 'Escudo', 'Armadura de placas'],
    description: 'Competente en TODAS las armaduras, escudos, armas simples y marciales. Hechizos desde nivel 2 (CAR). Imposición de manos: nivel×5 PG.'
  },
  'Pícaro': {
    skills: ['Sigilo', 'Juego de Manos', 'Acrobacias', 'Engaño', 'Percepción', 'Investigación', 'Persuasión'],
    tools: ['Herramientas de ladrón'],
    cantrips: [],
    spells: [],
    weapons: ['Espada ropera', 'Espada corta', 'Daga', 'Arco corto', 'Ballesta de mano'],
    armor: ['Cuero', 'Cuero tachonado'],
    description: 'Competente en armaduras ligeras, armas simples, ballestas de mano, espadas cortas y roperas. Elige 4 pericias. Ataque furtivo 1d6. Competente en herramientas de ladrón.'
  },
  'Brujo': {
    skills: ['Arcanos', 'Engaño', 'Intimidación', 'Investigación', 'Naturaleza', 'Religión'],
    tools: [],
    cantrips: ['Descarga Sobrecogedora', 'Toque Gélido', 'Prestidigitación'],
    spells: ['Rayo de Brujo', 'Represalia Infernal', 'Hechizar Persona', 'Retirada Acelerada'],
    weapons: ['Daga', 'Bastón', 'Ballesta ligera'],
    armor: ['Cuero'],
    description: 'Competente en armaduras ligeras y armas simples. Conoce 2 trucos y 2 hechizos de nivel 1. Ranuras de pacto: se recuperan en descanso corto (CAR).'
  }
};
