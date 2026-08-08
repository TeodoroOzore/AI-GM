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
    description: 'Humanoides de presencia imponente nacidos del aliento y la sangre de los grandes dragones antiguos. Su orgullo militar, escamas duras y devoción a sus ancestros definen su carácter noble y fiero.',
    size: 'Mediano',
    speed: 9,
    age: 'Alcanzan la adultez a los 15 años y viven unos 80 años.',
    alignment: 'Tienden a los extremos de honor noble o ferocidad implacable.',
    languages: ['Común', 'Dracónico'],
    fixed: { str: 2, cha: 1 },
    traits: [
      { name: 'Arma de Aliento Elemental', description: 'Exhala energía elemental (2d6 a 5d6 daño según tu ascendencia).', type: 'damage' }
    ],
    subraces: [
      {
        name: 'Dragonar Rojo',
        description: 'Ascendencia de dragón rojo. El calor de los volcanes arde en sus venas, otorgándoles resistencia natural al fuego (+2 FUE, +1 CAR) y un aliento abrasador de llamas en cono.',
        fixed: { str: 2, cha: 1 },
        resistances: ['fuego'],
        traits: [
          { name: 'Aliento de Fuego', description: 'Cono de fuego de 4.5m (salvación de DES). Daño de fuego 2d6 (+1d6 a niveles 6, 11 y 16).', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Azul',
        description: 'Ascendencia de dragón azul. Forjados bajo las tormentas del desierto, su cuerpo encauza descargas eléctricas (+2 FUE, +1 CAR) y proyectan un aliento lineal de relámpago.',
        fixed: { str: 2, cha: 1 },
        resistances: ['relámpago'],
        traits: [
          { name: 'Aliento de Relámpago', description: 'Línea de relámpago de 1.5m × 9m (salvación de DES). Daño de relámpago 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Verde',
        description: 'Ascendencia de dragón verde. Herederos de las selvas y brumas tóxicas, su biología filtra venenos ambientales (+2 FUE, +1 CAR) y expulsan una nube de gas venenoso.',
        fixed: { str: 2, cha: 1 },
        resistances: ['veneno'],
        traits: [
          { name: 'Aliento de Veneno', description: 'Cono de veneno de 4.5m (salvación de CON). Daño de veneno 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Blanco',
        description: 'Ascendencia de dragón blanco. Templados en glaciares eternos, su constitución resiste heladas bajo cero (+2 FUE, +1 CAR) y exhalan un soplo de escarcha.',
        fixed: { str: 2, cha: 1 },
        resistances: ['frío'],
        traits: [
          { name: 'Aliento de Frío', description: 'Cono de escarcha de 4.5m (salvación de CON). Daño de frío 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Negro',
        description: 'Ascendencia de dragón negro. Vinculados a los pantanos oscuros, su piel soporta sustancias corrosivas (+2 FUE, +1 CAR) y disparan un chorro ácido disolvente.',
        fixed: { str: 2, cha: 1 },
        resistances: ['ácido'],
        traits: [
          { name: 'Aliento de Ácido', description: 'Línea de ácido de 1.5m × 9m (salvación de DES). Daño de ácido 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Latón',
        description: 'Ascendencia de dragón de latón. Vivaces y amantes de los climas cálidos, canalizan resistencia al fuego (+2 FUE, +1 CAR) y un haz lineal de llamas.',
        fixed: { str: 2, cha: 1 },
        resistances: ['fuego'],
        traits: [
          { name: 'Aliento de Fuego', description: 'Línea de fuego de 1.5m × 9m (salvación de DES). Daño de fuego 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Bronce',
        description: 'Ascendencia de dragón de bronce. Protectores de las costas y mares tormentosos, soportan descargas eléctricas (+2 FUE, +1 CAR) y exhalan una línea de relámpago.',
        fixed: { str: 2, cha: 1 },
        resistances: ['relámpago'],
        traits: [
          { name: 'Aliento de Relámpago', description: 'Línea de relámpago de 1.5m × 9m (salvación de DES). Daño de relámpago 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Cobre',
        description: 'Ascendencia de dragón de cobre. Inquietos e ingeniosos, su linaje resiste fluidos corrosivos (+2 FUE, +1 CAR) y proyectan una línea de ácido.',
        fixed: { str: 2, cha: 1 },
        resistances: ['ácido'],
        traits: [
          { name: 'Aliento de Ácido', description: 'Línea de ácido de 1.5m × 9m (salvación de DES). Daño de ácido 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Oro',
        description: 'Ascendencia de dragón de oro. Majestuosos y solemnes, encarnan el fuego divino purificador (+2 FUE, +1 CAR) con inmunidad parcial al calor y aliento de fuego en cono.',
        fixed: { str: 2, cha: 1 },
        resistances: ['fuego'],
        traits: [
          { name: 'Aliento de Fuego', description: 'Cono de fuego de 4.5m (salvación de DES). Daño de fuego 2d6.', type: 'damage' }
        ]
      },
      {
        name: 'Dragonar Plata',
        description: 'Ascendencia de dragón de plata. Nobles caballeros del frío, su aliento de congelación paraliza amenazas (+2 FUE, +1 CAR) con resistencia natural al hielo.',
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
    description: 'Seres longevos y contemplativos que observan los siglos pasar. Su biología no requiere sueño terrenal sino un trance meditativo de 4 horas, y la sangre feérica en sus venas los vuelve inmunes al sueño mágico y resistentes al encantamiento.',
    size: 'Mediano',
    speed: 9,
    age: 'Alcanzan la adultez a los 100 años y pueden vivir hasta los 750 años.',
    alignment: 'Amantes de la libertad, la belleza y la autoexpresión.',
    languages: ['Común', 'Élfico'],
    darkvision: 18,
    traits: [
      { name: 'Ascendencia Feérica', description: 'Ventaja en salvaciones contra encantamiento e inmunidad a sueño mágico.', type: 'defense' },
      { name: 'Trance', description: 'Meditación profunda durante 4 horas al día en lugar de dormir.', type: 'feature' }
    ],
    subraces: [
      {
        name: 'Alto Elfo',
        description: 'Descendientes de los antiguos reinos arcanos. Su juventud transcurre entre manuscritos y la esgrima élfica (+2 DES por agilidad feérica, +1 INT por erudición), dominando además un truco de Mago innato.',
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
        description: 'Ermitaños y cazadores de selvas primigenias. Décadas de sigilo entre el follaje agudizan sus sentidos e intuición (+2 DES, +1 SAB), aumentando su velocidad a 10.5m y camuflándose en la naturaleza.',
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
        name: 'Elfo Oscuro',
        description: 'Exiliados en las cavernas del Submundo. Adaptados a milenios de sombras e intriga, poseen visión nocturna superior de 36m y magia de sombras (+2 DES por agilidad, +1 CAR por su temible magnetismo).',
        fixed: { dex: 2, cha: 1 },
        darkvision: 36,
        weaponProf: ['Espada ropera', 'Espada corta', 'Ballesta de mano'],
        traits: [
          { name: 'Magia del Elfo Oscuro', description: 'Conoces Luces danzantes (Nivel 1), Fuego feérico (Nivel 3) y Oscuridad (Nivel 5). Carisma es tu aptitud mágica.', type: 'spell' },
          { name: 'Entrenamiento del Elfo Oscuro en Armas', description: 'Competencia con espada ropera, espada corta y ballesta de mano.', type: 'proficiency' },
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
    description: 'Forjados en la piedra de las montañas, los enanos destacan por su cuerpo denso, orgullo de clan y maestría con martillos y hachas. Su metabolismo resiste toxinas e venenos ambientales.',
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
      { name: 'Entrenamiento en Armas Enanas', description: 'Competencia con hachas y martillos.', type: 'proficiency' },
      { name: 'Conocimiento de la Piedra', description: 'Doble bono de competencia en pruebas de Historia sobre trabajo de piedra.', type: 'skill' }
    ],
    subraces: [
      {
        name: 'Enano de las Colinas',
        description: 'Enanos de temple sereno y sabiduría arraigada en la tierra (+2 CON, +1 SAB). Su vitalidad corporal les otorga la Robustez Enana, incrementando sus Puntos de Golpe máximos en cada nivel.',
        fixed: { con: 2, wis: 1 },
        traits: [
          { name: 'Robustez Enana', description: 'Tu máximo de Puntos de Golpe aumenta en +1 por cada nivel.', type: 'feature' }
        ]
      },
      {
        name: 'Enano de las Montañas',
        description: 'Habitantes de las ciudadelas subterráneas profundas. Acostumbrados a cargar lingotes y vestir armaduras pesadas (+2 CON, +2 FUE), nacen con competencia innata en armaduras ligeras y medias.',
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
    description: 'Seres pequeños de energía inagotable y curiosidad desbordante. Su mente inquisitiva procesa la realidad rápidamente, otorgándoles Astucia Gnoma: ventaja en salvaciones de INT, SAB y CAR contra magia.',
    size: 'Pequeño',
    speed: 7.5,
    age: 'Viven de 350 a 500 años.',
    alignment: 'Creativos, alegres y enfocados al bien.',
    languages: ['Común', 'Gnomo'],
    darkvision: 18,
    traits: [
      { name: 'Astucia Gnoma', description: 'Ventaja en salvaciones de Inteligencia, Sabiduría y Carisma contra magia.', type: 'defense' }
    ],
    subraces: [
      {
        name: 'Gnomo de las Rocas',
        description: 'Inventores y relojeros compulsivos (+2 INT por genio analítico, +1 CON por vigor en el taller). Pasan la vida construyendo artefactos y pequeños artilugios mecánicos funcionales.',
        fixed: { int: 2, con: 1 },
        traits: [
          { name: 'Conocimiento del Artesano', description: 'Doble competencia en Inteligencia sobre objetos mágicos o tecnológicos.', type: 'skill' },
          { name: 'Artilugio', description: 'Construcción de pequeños mecanismos mágicos.', type: 'feature' }
        ]
      },
      {
        name: 'Gnomo de los Bosques',
        description: 'Protectores de la fauna forestal. Su naturaleza reservada y afinidad con la ilusión (+2 INT, +1 DES) les permite lanzar Ilusión Menor innata y comunicarse con bestias pequeñas.',
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
    description: 'La raza más ambiciosa, diversa y adaptable de todos los reinos. Al carecer de dones biológicos extremos, los humanos compensan con una tenacidad incansable que les permite prosperar en cualquier entorno.',
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
        description: 'Los humanos son la raza más proliferada del continente; seres que se adaptan a cualquier situación y amenaza. Esta versatilidad todoterreno justifica su aumento de +1 en TODOS sus atributos/estadísticas (FUE, DES, CON, INT, SAB, CAR).',
        fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
        traits: [
          { name: 'Versátil', description: '+1 a todas las puntuaciones de atributo (FUE, DES, CON, INT, SAB, CAR).', type: 'feature' }
        ]
      },
      {
        name: 'Humano Entrenado (Variante)',
        description: 'El humano entrenado enfoca sus esfuerzos en una disciplina específica. Su especialización intensiva justifica el +1 a dos atributos/estadísticas a elección, una competencia de habilidad adicional y un talento entrenado.',
        choice: { count: 2, amount: 1 },
        skillChoices: { count: 1, options: ['Atletismo', 'Acrobacias', 'Juego de Manos', 'Sigilo', 'Arcanos', 'Historia', 'Investigación', 'Naturaleza', 'Religión', 'Trato con Animales', 'Perspicacia', 'Medicina', 'Percepción', 'Supervivencia', 'Engaño', 'Intimidación', 'Interpretación', 'Persuasión'] },
        traits: [
          { name: 'Especialización Entrenada', description: '+1 a 2 atributos/estadísticas a elección y 1 competencia de habilidad adicional.', type: 'feature' }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 6. MEDIANO
  // ════════════════════════════════════════════════════════════════
  'Mediano': {
    name: 'Mediano',
    description: 'Criaturas afables de pequeña estatura que valoran la paz, el buen comer y la comunidad. Una bendición misteriosa del destino rodea a su pueblo, otorgándoles la habilidad Suerte para repetir cualquier 1 en dados.',
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
        description: 'Escurridizos, sociables y simpáticos. Su agilidad felina y encanto personal (+2 DES, +1 CAR) les permite deslizarse entre la multitud y ocultarse tras criaturas de mayor tamaño.',
        fixed: { dex: 2, cha: 1 },
        traits: [
          { name: 'Sigiloso por Naturaleza', description: 'Puedes ocultarte tras criaturas de mayor tamaño.', type: 'skill' }
        ]
      },
      {
        name: 'Mediano Fornido',
        description: 'Descendientes de linajes antiguos con sangre resistente (+2 DES, +1 CON). Su cuerpo denso y estómago fuerte les otorga resistencia natural al veneno y ventaja contra toxinas.',
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
    description: 'Hijos de dos mundos, los semielfos encarnan la elegancia y visión de sus ancestros élficos combinada con la energía apasionada y ambiciosa de la humanidad.',
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
      { name: 'Ascendencia Feérica', description: 'Ventaja contra encantamiento e inmunidad a sueño mágico.', type: 'defense' },
      { name: 'Versatilidad de Habilidades', description: 'Ganas competencia en 2 habilidades a tu elección.', type: 'skill' }
    ],
    subraces: [
      {
        name: 'Semielfo Versátil',
        description: 'Mediadores nacidos para navegar ambas sociedades. Su encanto personal y diplomacia innata (+2 CAR y +1 a dos atributos a elección) justifica su versatilidad, competencia en dos habilidades elegidas y visión nocturna.',
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
    description: 'Pobladores de frontera que unen la fuerza física bruta y ferocidad del pueblo orco con la voluntad humana. Su cuerpo atlético y resistencia imponen respeto en combate.',
    size: 'Mediano',
    speed: 9,
    age: 'Maduran a los 14 años y viven unos 75 años.',
    alignment: 'Intensos e independientes.',
    languages: ['Común', 'Orco'],
    darkvision: 18,
    fixed: { str: 2, con: 1 },
    skillProf: ['Intimidación'],
    traits: [
      { name: 'Ataques Salvajes', description: '1 dado extra de daño del arma en impactos críticos cuerpo a cuerpo.', type: 'damage' },
      { name: 'Resistencia Implacable', description: '1/día al caer a 0 PG permaneces con 1 PG.', type: 'defense' }
    ],
    subraces: [
      {
        name: 'Semiorco Indómito',
        description: 'Guerreros cuyo ardor combativo e instinto de supervivencia (+2 FUE, +1 CON) les permite propinar impactos críticos devastadores con armas y negarse a caer (Resistencia Implacable), manteniéndose con 1 PG.',
        fixed: { str: 2, con: 1 }
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 9. INFERNAL
  // ════════════════════════════════════════════════════════════════
  'Infernal': {
    name: 'Infernal',
    description: 'Humanoides tocados por la sombra de pactos o planos infernales antiguos. Portan cuernos, cola prensil y ojos profundos, conservando resistencia natural al fuego e inmunidad a quemaduras.',
    size: 'Mediano',
    speed: 9,
    age: 'Viven unos 100 años.',
    alignment: 'Perspicaces y de voluntad firme.',
    languages: ['Común', 'Infernal'],
    darkvision: 18,
    resistances: ['fuego'],
    fixed: { cha: 2, int: 1 },
    traits: [
      { name: 'Legado Infernal', description: 'Taumaturgia (Nivel 1), Reprensión infernal (Nivel 3) y Oscuridad (Nivel 5).', type: 'spell' }
    ],
    subraces: [
      {
        name: 'Infernal Astado',
        description: 'Herederos directos de la majestad de los señores de los infiernos. Su magnetismo oscuro e intelecto perspicaz (+2 CAR, +1 INT) justifica su dominio del Legado Infernal (Taumaturgia, Reprensión Infernal y Oscuridad).',
        fixed: { cha: 2, int: 1 }
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 10. CELESTIAL
  // ════════════════════════════════════════════════════════════════
  'Celestial': {
    name: 'Celestial',
    description: 'Descendientes de bendiciones angélicas y planos de luz pura. Nacen marcados por una vocación divina hacia la justicia, la protección de los débiles y la sanación de heridas.',
    size: 'Mediano',
    speed: 9,
    age: 'Viven hasta 160 años.',
    alignment: 'Generalmente leales y buenos.',
    languages: ['Común', 'Celestial'],
    darkvision: 18,
    resistances: ['radiante', 'necrótico'],
    fixed: { cha: 2, wis: 1 },
    traits: [
      { name: 'Manos Curativas', description: 'Como acción, tocas una criatura para curar PG iguales a tu nivel.', type: 'feature' }
    ],
    subraces: [
      {
        name: 'Celestial Protector',
        description: 'Guardianes imbuidos de luz espiritual (+2 CAR por magnetismo sagrado, +1 SAB por intuición divina). Su resistencia al daño radiante y necrótico justifica su poder de Manos Curativas para restaurar la vida con un toque.',
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
  'Infernal Astado':   ['Común', 'Infernal'],
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
