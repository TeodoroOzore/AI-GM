// ─── Base Races & Subraces (D&D 5e SRD / PHB Standard) ─────────────
// Catálogo estructurado en Raza Base y Subrazas / Variantes / Ascendencias
// ordenadas alfabéticamente.

import { RaceDef, BaseRaceDef } from '../types/core';

export const BASE_RACES: Record<string, BaseRaceDef> = {
  // ════════════════════════════════════════════════════════════════
  // 1. DRAGONAR
  // ════════════════════════════════════════════════════════════════
  'Dragonar': {
    name: 'Dragonar',
    description: 'Humanoides orgullosos nacidos del linaje dracónico, poseedores de un arma de aliento elemental y resistencia natural.',
    size: 'Mediano',
    speed: 9,
    age: 'Alcanzan la adultez a los 15 años y viven unos 80 años.',
    alignment: 'Tienden a los extremos de honor noble o ferocidad implacable.',
    languages: ['Común', 'Dracónico'],
    fixed: { str: 2, cha: 1 },
    traits: [
      { name: 'Arma de Aliento Elemental', description: 'Exhala energía elemental (2d6 a 5d6 daño según tu ascendencia).', type: 'damage' },
      { name: 'Resistencia Dracónica', description: 'Resistencia al tipo de daño elemental de tu linaje dracónico.', type: 'defense' }
    ],
    subraces: [
      {
        name: 'Dragonar Rojo',
        description: 'Ascendencia de dragón rojo. Resistencia al fuego y aliento de fuego en cono de 4.5m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['fuego'],
        traits: [
          { name: 'Aliento de Fuego', description: 'Cono de fuego de 4.5m (salvación de DES). Daño de fuego 2d6 (+1d6 a niveles 6, 11 y 16).', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Azul',
        description: 'Ascendencia de dragón azul. Resistencia al relámpago y aliento de relámpago en línea de 9m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['relámpago'],
        traits: [
          { name: 'Aliento de Relámpago', description: 'Línea de relámpago de 1.5m × 9m (salvación de DES). Daño de relámpago 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Verde',
        description: 'Ascendencia de dragón verde. Resistencia al veneno y aliento de veneno en cono de 4.5m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['veneno'],
        traits: [
          { name: 'Aliento de Veneno', description: 'Cono de veneno de 4.5m (salvación de CON). Daño de veneno 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Blanco',
        description: 'Ascendencia de dragón blanco. Resistencia al frío y aliento de escarcha en cono de 4.5m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['frío'],
        traits: [
          { name: 'Aliento de Frío', description: 'Cono de escarcha de 4.5m (salvación de CON). Daño de frío 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Negro',
        description: 'Ascendencia de dragón negro. Resistencia al ácido y aliento de ácido en línea de 9m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['ácido'],
        traits: [
          { name: 'Aliento de Ácido', description: 'Línea de ácido de 1.5m × 9m (salvación de DES). Daño de ácido 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Latón',
        description: 'Ascendencia de dragón de latón. Resistencia al fuego y aliento de fuego en línea de 9m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['fuego'],
        traits: [
          { name: 'Aliento de Fuego', description: 'Línea de fuego de 1.5m × 9m (salvación de DES). Daño de fuego 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Bronce',
        description: 'Ascendencia de dragón de bronce. Resistencia al relámpago y aliento de relámpago en línea de 9m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['relámpago'],
        traits: [
          { name: 'Aliento de Relámpago', description: 'Línea de relámpago de 1.5m × 9m (salvación de DES). Daño de relámpago 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Cobre',
        description: 'Ascendencia de dragón de cobre. Resistencia al ácido y aliento de ácido en línea de 9m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['ácido'],
        traits: [
          { name: 'Aliento de Ácido', description: 'Línea de ácido de 1.5m × 9m (salvación de DES). Daño de ácido 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Oro',
        description: 'Ascendencia de dragón de oro. Resistencia al fuego y aliento de fuego en cono de 4.5m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['fuego'],
        traits: [
          { name: 'Aliento de Fuego', description: 'Cono de fuego de 4.5m (salvación de DES). Daño de fuego 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Plata',
        description: 'Ascendencia de dragón de plata. Resistencia al frío y aliento de escarcha en cono de 4.5m.',
        fixed: { str: 2, cha: 1 },
        resistances: ['frío'],
        traits: [
          { name: 'Aliento de Frío', description: 'Cono de frío de 4.5m (salvación de CON). Daño 2d6.', type: 'damage' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 2. ELFO
  // ════════════════════════════════════════════════════════════════
  'Elfo': {
    name: 'Elfo',
    description: 'Seres longevos y elegantes, profundamente conectados con la magia y la naturaleza.',
    size: 'Mediano',
    speed: 9,
    age: 'Alcanzan la adultez a los 100 años y pueden vivir hasta los 750 años.',
    alignment: 'Amantes de la libertad, la belleza y la autoexpresión.',
    languages: ['Común', 'Élfico'],
    darkvision: 18,
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad hasta 18 metros.', type: 'senses' },
      { name: 'Ascendencia Feérica', description: 'Ventaja en salvaciones contra encantamiento e inmunidad a sueño mágico.', type: 'defense' },
      { name: 'Trance', description: 'Meditación profunda durante 4 horas al día en lugar de dormir.', type: 'feature' }
    ],
    subraces: [
      {
        name: 'Alto Elfo',
        description: 'Dominio innato de la magia arcana y erudición de reinos antiguos.',
        fixed: { dex: 2, int: 1 },
        extraLanguages: 1,
        weaponProf: ['Espada larga', 'Espada corta', 'Arco largo', 'Arco corto'],
        traits: [
          { name: 'Entrenamiento Élfico en Armas', description: 'Competencia con espada larga, espada corta, arco largo y arco corto.', type: 'proficiency' },
          { name: 'Truco de Mago', description: 'Conoces un truco a elección de la lista de conjuros de Mago (Inteligencia es tu aptitud mágica).', type: 'spell' },
          { name: 'Idioma adicional', description: 'Puedes hablar, leer y escribir un idioma adicional.', type: 'language' }
        ]
      },
      {
        name: 'Elfo de los Bosques',
        description: 'Sentidos aguzados y pies veloces, adaptados a la naturaleza indómita.',
        fixed: { dex: 2, wis: 1 },
        speed: 10.5,
        weaponProf: ['Espada larga', 'Espada corta', 'Arco largo', 'Arco corto'],
        traits: [
          { name: 'Pies Veloces', description: 'Tu velocidad base de movimiento aumenta a 10.5 metros (35 pies).', type: 'movement' },
          { name: 'Entrenamiento Élfico en Armas', description: 'Competencia con espada larga, espada corta, arco largo y arco corto.', type: 'proficiency' },
          { name: 'Máscara de la Naturaleza', description: 'Puedes intentarte ocultar cuando solo estás ligeramente obstruido por la naturaleza.', type: 'feature' }
        ]
      },
      {
        name: 'Elfo Oscuro (Drow)',
        description: 'Habitantes del Submundo con visión superior en sombras y magia drow.',
        fixed: { dex: 2, cha: 1 },
        darkvision: 36,
        weaponProf: ['Espada ropera', 'Espada corta', 'Ballesta de mano'],
        traits: [
          { name: 'Visión en la Oscuridad Superior', description: 'Tu visión en la oscuridad se extiende a los 36 metros.', type: 'senses' },
          { name: 'Magia Drow', description: 'Conoces Luces danzantes (Nivel 1), Fuego feérico (Nivel 3) y Oscuridad (Nivel 5). Carisma es tu aptitud mágica.', type: 'spell' },
          { name: 'Entrenamiento Drow en Armas', description: 'Competencia con espada ropera, espada corta y ballesta de mano.', type: 'proficiency' },
          { name: 'Sensibilidad a la Luz Solar', description: 'Desventaja en ataques y pruebas de vista bajo luz solar directa.', type: 'feature' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 3. ENANO
  // ════════════════════════════════════════════════════════════════
  'Enano': {
    name: 'Enano',
    description: 'Pueblos fuertes, tradicionales y persistentes, tallados en las piedras de las montañas.',
    size: 'Mediano',
    speed: 7.5,
    age: 'Viven unos 350 años.',
    alignment: 'Valoran el orden, el honor y la tradición.',
    languages: ['Común', 'Enano'],
    darkvision: 18,
    resistances: ['veneno'],
    weaponProf: ['Hacha de batalla', 'Hacha de mano', 'Martillo de guerra', 'Martillo ligero'],
    toolChoices: { count: 1, options: ['Herramientas de herrero', 'Herramientas de cervecero', 'Herramientas de cantero'] },
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad a 18 metros.', type: 'senses' },
      { name: 'Resistencia Enana', description: 'Resistencia y ventaja en tiradas de salvación contra veneno.', type: 'defense' },
      { name: 'Entrenamiento en Armas Enanas', description: 'Competencia con hachas y martillos.', type: 'proficiency' },
      { name: 'Conocimiento de la Piedra', description: 'Doble bono de competencia en pruebas de Historia sobre trabajo de piedra.', type: 'skill' }
    ],
    subraces: [
      {
        name: 'Enano de las Colinas',
        description: 'Intuición aguzada y resistencia corporal sobrenatural.',
        fixed: { con: 2, wis: 1 },
        traits: [
          { name: 'Robustez Enana', description: 'Tu máximo de Puntos de Golpe aumenta en +1 por cada nivel.', type: 'feature' }
        ]
      },
      {
        name: 'Enano de las Montañas',
        description: 'Corpulentos y fuertes, adiestrados en vestir armaduras de metal.',
        fixed: { con: 2, str: 2 },
        armorProf: ['Ligera', 'Media'],
        traits: [
          { name: 'Entrenamiento en Armaduras Enanas', description: 'Competencia con armadura ligera y media.', type: 'proficiency' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 4. GNOMO
  // ════════════════════════════════════════════════════════════════
  'Gnomo': {
    name: 'Gnomo',
    description: 'Inventores entusiastas y curiosos de gran intelecto y vitalidad.',
    size: 'Pequeño',
    speed: 7.5,
    age: 'Viven de 350 a 500 años.',
    alignment: 'Creativos, alegres y enfocados al bien.',
    languages: ['Común', 'Gnomo'],
    darkvision: 18,
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad a 18 metros.', type: 'senses' },
      { name: 'Astucia Gnoma', description: 'Ventaja en salvaciones de Inteligencia, Sabiduría y Carisma contra magia.', type: 'defense' }
    ],
    subraces: [
      {
        name: 'Gnomo de las Rocas',
        description: 'Ingeniosos mecánicos y constructores de artefactos.',
        fixed: { int: 2, con: 1 },
        traits: [
          { name: 'Conocimiento del Artesano', description: 'Doble competencia en Inteligencia sobre objetos mágicos o tecnológicos.', type: 'skill' },
          { name: 'Artilugio', description: 'Construcción de pequeños mecanismos mágicos.', type: 'feature' }
        ]
      },
      {
        name: 'Gnomo de los Bosques',
        description: 'Afinidad con la magia de ilusión y las criaturas de los bosques.',
        fixed: { int: 2, dex: 1 },
        traits: [
          { name: 'Ilusión Innata', description: 'Conoces el truco Ilusión Menor (Inteligencia es tu aptitud mágica).', type: 'spell' },
          { name: 'Hablar con Bestias Pequeñas', description: 'Comunicación sencilla con criaturas de tamaño Pequeño o menor.', type: 'feature' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 5. HUMANO
  // ════════════════════════════════════════════════════════════════
  'Humano': {
    name: 'Humano',
    description: 'La raza más adaptable, ambiciosa y versátil del mundo.',
    size: 'Mediano',
    speed: 9,
    age: 'Alcanzan la adultez a los 18 años y viven menos de un siglo.',
    alignment: 'Sin tendencia innata fixed, muy variados.',
    languages: ['Común'],
    extraLanguages: 1,
    traits: [],
    subraces: [
      {
        name: 'Humano Estándar',
        description: 'Aumenta todas tus puntuaciones de habilidad en +1.',
        fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
        traits: [
          { name: 'Versátil', description: '+1 a todas las puntuaciones de habilidad.', type: 'feature' }
        ]
      },
      {
        name: 'Humano Entrenado (Variante)',
        description: 'Ganas +1 en dos atributos a tu elección y 1 habilidad adicional.',
        choice: { count: 2, amount: 1 },
        skillChoices: { count: 1, options: ['Atletismo', 'Acrobacias', 'Juego de Manos', 'Sigilo', 'Arcanos', 'Historia', 'Investigación', 'Naturaleza', 'Religión', 'Trato con Animales', 'Perspicacia', 'Medicina', 'Percepción', 'Supervivencia', 'Engaño', 'Intimidación', 'Interpretación', 'Persuasión'] },
        traits: [
          { name: 'Especialización Entrenada', description: '+1 a 2 atributos a elección y 1 habilidad extra.', type: 'feature' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 6. MEDIANO
  // ════════════════════════════════════════════════════════════════
  'Mediano': {
    name: 'Mediano',
    description: 'Pequeños, afables y dotados de una suerte extraordinaria.',
    size: 'Pequeño',
    speed: 7.5,
    age: 'Viven unos 150 años.',
    alignment: 'Pacíficos, legales y amables.',
    languages: ['Común', 'Mediano'],
    traits: [
      { name: 'Suerte', description: 'Tirar un 1 en un d20 te permite volver a tirar el dado.', type: 'feature' },
      { name: 'Coraje', description: 'Ventaja en tiradas de salvación contra asustado.', type: 'defense' },
      { name: 'Agilidad Mediana', description: 'Puedes moverte a través del espacio de criaturas mayores.', type: 'movement' }
    ],
    subraces: [
      {
        name: 'Mediano Piesligero',
        description: 'Sigilosos y diestros en pasar desapercibidos.',
        fixed: { dex: 2, cha: 1 },
        traits: [
          { name: 'Sigiloso por Naturaleza', description: 'Puedes ocultarte tras criaturas de mayor tamaño.', type: 'skill' }
        ]
      },
      {
        name: 'Mediano Fornido',
        description: 'Fuertes de constitución y resistentes a toxinas.',
        fixed: { dex: 2, con: 1 },
        resistances: ['veneno'],
        traits: [
          { name: 'Resiliencia Fornida', description: 'Resistencia y ventaja contra veneno.', type: 'defense' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 7. SEMIELFO
  // ════════════════════════════════════════════════════════════════
  'Semielfo': {
    name: 'Semielfo',
    description: 'Unen la gracia feérica élfica con el espíritu ambicioso humano.',
    size: 'Mediano',
    speed: 9,
    age: 'Viven unos 180 años.',
    alignment: 'Caóticos y de espíritu libre.',
    languages: ['Común', 'Élfico'],
    extraLanguages: 1,
    darkvision: 18,
    fixed: { cha: 2 },
    choice: { count: 2, amount: 1 },
    skillChoices: { count: 2, options: ['Atletismo', 'Acrobacias', 'Juego de Manos', 'Sigilo', 'Arcanos', 'Historia', 'Investigación', 'Naturaleza', 'Religión', 'Trato con Animales', 'Perspicacia', 'Medicina', 'Percepción', 'Supervivencia', 'Engaño', 'Intimidación', 'Interpretación', 'Persuasión'] },
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad a 18 metros.', type: 'senses' },
      { name: 'Ascendencia Feérica', description: 'Ventaja contra encantamiento e inmunidad a sueño mágico.', type: 'defense' },
      { name: 'Versatilidad de Habilidades', description: 'Ganas competencia en 2 habilidades a tu elección.', type: 'skill' }
    ],
    subraces: [
      {
        name: 'Semielfo Versátil',
        description: 'Herencia combinada con gran adaptabilidad.',
        fixed: { cha: 2 },
        choice: { count: 2, amount: 1 }
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 8. SEMIORCO
  // ════════════════════════════════════════════════════════════════
  'Semiorco': {
    name: 'Semiorco',
    description: 'Combinan la ferocidad imparable orca con la tenacidad humana.',
    size: 'Mediano',
    speed: 9,
    age: 'Maduran a los 14 años y viven unos 75 años.',
    alignment: 'Intensos e independientes.',
    languages: ['Común', 'Orco'],
    darkvision: 18,
    fixed: { str: 2, con: 1 },
    skillProf: ['Intimidación'],
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad a 18 metros.', type: 'senses' },
      { name: 'Ataques Salvajes', description: '1 dado extra de daño del arma en impactos críticos cuerpo a cuerpo.', type: 'damage' },
      { name: 'Resistencia Implacable', description: '1/día al caer a 0 PG permaneces con 1 PG.', type: 'defense' }
    ],
    subraces: [
      {
        name: 'Semiorco Indómito',
        description: 'Fuerza física temible e instinto de combate.',
        fixed: { str: 2, con: 1 }
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 9. INFERNAL
  // ════════════════════════════════════════════════════════════════
  'Infernal': {
    name: 'Infernal',
    description: 'Humanoides con herencia infernal, cuernos y afinidad con el fuego y las sombras.',
    size: 'Mediano',
    speed: 9,
    age: 'Viven unos 100 años.',
    alignment: 'Perspicaces y de voluntad firme.',
    languages: ['Común', 'Infernal'],
    darkvision: 18,
    resistances: ['fuego'],
    fixed: { cha: 2, int: 1 },
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad a 18 metros.', type: 'senses' },
      { name: 'Resistencia Infernal', description: 'Resistencia al daño de fuego.', type: 'defense' },
      { name: 'Legado Infernal', description: 'Taumaturgia (Nivel 1), Reprensión infernal (Nivel 3) y Oscuridad (Nivel 5).', type: 'spell' }
    ],
    subraces: [
      {
        name: 'Infernal Infernal',
        description: 'Legado del Señor de los Infiernos.',
        fixed: { cha: 2, int: 1 }
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 10. CELESTIAL
  // ════════════════════════════════════════════════════════════════
  'Celestial': {
    name: 'Celestial',
    description: 'Humanoides tocados por la gracia de planos celestiales, guardianes del bien y la luz divina.',
    size: 'Mediano',
    speed: 9,
    age: 'Viven hasta 160 años.',
    alignment: 'Generalmente leales y buenos.',
    languages: ['Común', 'Celestial'],
    darkvision: 18,
    resistances: ['radiante', 'necrótico'],
    fixed: { cha: 2, wis: 1 },
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Visión en la oscuridad a 18 metros.', type: 'senses' },
      { name: 'Resistencia Celestial', description: 'Resistencia al daño radiante y necrótico.', type: 'defense' },
      { name: 'Manos Curativas', description: 'Como acción, tocas una criatura para curar PG iguales a tu nivel.', type: 'feature' }
    ],
    subraces: [
      {
        name: 'Celestial Protector',
        description: 'Tocado por la luz espiritual celestial.',
        fixed: { cha: 2, wis: 1 }
      }
    ]
  }
};

// ─── Diccionario de Razas compuestas para compatibilidad global ───
export const RACES: Record<string, RaceDef> = {};

for (const baseKey of Object.keys(BASE_RACES)) {
  const base = BASE_RACES[baseKey];
  for (const sub of base.subraces) {
    const compositeKey = sub.name;
    const composite: RaceDef = {
      description: sub.description || base.description,
      size: base.size,
      speed: sub.speed || base.speed,
      age: base.age,
      alignment: base.alignment,
      languages: base.languages,
      extraLanguages: (base.extraLanguages || 0) + (sub.extraLanguages || 0),
      darkvision: sub.darkvision || base.darkvision,
      fixed: { ...(base.fixed || {}), ...(sub.fixed || {}) },
      choice: sub.choice || base.choice,
      resistances: [...(base.resistances || []), ...(sub.resistances || [])],
      weaponProf: [...(base.weaponProf || []), ...(sub.weaponProf || [])],
      armorProf: [...(base.armorProf || []), ...(sub.armorProf || [])],
      toolProf: [...(base.toolProf || []), ...(sub.toolProf || [])],
      toolChoices: sub.toolChoices || base.toolChoices,
      skillProf: [...(base.skillProf || []), ...(sub.skillProf || [])],
      skillChoices: sub.skillChoices || base.skillChoices,
      traits: [...base.traits, ...(sub.traits || [])]
    };
    RACES[compositeKey] = composite;

    if (!RACES[baseKey]) {
      RACES[baseKey] = composite;
    }
  }
}

// ─── Idiomas raciales ───
export const RACE_LANGUAGES: Record<string, string[]> = {
  'Humano':              ['Común', 'Un idioma adicional (a elección)'],
  'Humano Estándar':     ['Común', 'Un idioma adicional (a elección)'],
  'Humano Entrenado (Variante)': ['Común', 'Un idioma adicional (a elección)'],
  'Elfo':                ['Común', 'Élfico'],
  'Elfo Oscuro':         ['Común', 'Élfico'],
  'Elfo Oscuro (Drow)':  ['Común', 'Élfico'],
  'Alto Elfo':           ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Elfo de los Bosques': ['Común', 'Élfico'],
  'Enano':               ['Común', 'Enano'],
  'Enano de las Colinas':['Común', 'Enano'],
  'Enano de las Montañas':['Común', 'Enano'],
  'Mediano':             ['Común', 'Mediano'],
  'Mediano Piesligero':  ['Común', 'Mediano'],
  'Mediano Fornido':     ['Común', 'Mediano'],
  'Dragonar':            ['Común', 'Dracónico'],
  'Dragonar Rojo':       ['Común', 'Dracónico'],
  'Dragonar Azul':       ['Común', 'Dracónico'],
  'Dragonar Verde':      ['Común', 'Dracónico'],
  'Dragonar Blanco':     ['Común', 'Dracónico'],
  'Dragonar Negro':      ['Común', 'Dracónico'],
  'Dragonar Latón':      ['Común', 'Dracónico'],
  'Dragonar Bronce':     ['Común', 'Dracónico'],
  'Dragonar Cobre':      ['Común', 'Dracónico'],
  'Dragonar Oro':        ['Común', 'Dracónico'],
  'Dragonar Plata':      ['Común', 'Dracónico'],
  'Gnomo':               ['Común', 'Gnomo'],
  'Gnomo de las Rocas':  ['Común', 'Gnomo'],
  'Gnomo de los Bosques':['Común', 'Gnomo'],
  'Semielfo':            ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Semielfo Versátil':   ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Semiorco':            ['Común', 'Orco'],
  'Semiorco Indómito':   ['Común', 'Orco'],
  'Infernal':            ['Común', 'Infernal'],
  'Infernal Infernal':   ['Común', 'Infernal'],
  'Celestial':           ['Común', 'Celestial'],
  'Celestial Protector': ['Común', 'Celestial'],
};

/** Devuelve el título original de la categoría según la Raza Base */
export function getSubraceCategoryLabel(baseRace: string): string {
  switch (baseRace) {
    case 'Dragonar':
    case 'Dracónido':
      return 'Ascendencia Dracónica';
    case 'Humano':
      return 'Variante Humana';
    case 'Elfo':
      return 'Linaje Élfico';
    case 'Enano':
      return 'Clan Enano';
    case 'Gnomo':
      return 'Comunidad Gnoma';
    case 'Mediano':
      return 'Rama Mediana';
    case 'Semielfo':
      return 'Herencia Élfica';
    case 'Semiorco':
      return 'Linaje Orco';
    case 'Infernal':
    case 'Tiefling':
      return 'Legado Infernal';
    case 'Celestial':
      return 'Legado Celestial';
    default:
      return 'Subraza / Variante';
  }
}

/** Devuelve la Raza Base dada una subraza o nombre compuesto */
export function resolveBaseRace(raceOrSubrace: string): string {
  for (const [bKey, bDef] of Object.entries(BASE_RACES)) {
    if (bKey.toLowerCase() === raceOrSubrace.toLowerCase()) return bKey;
    if (bDef.subraces.some(s => s.name.toLowerCase() === raceOrSubrace.toLowerCase())) {
      return bKey;
    }
  }
  return 'Dragonar';
}
