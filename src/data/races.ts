// ─── Races & Languages ─────────────────────────────────────────────
// Catálogo exhaustivo de razas jugables del D&D 5e (PHB) en español,
// con bonificadores de habilidad, tamaño, velocidad, idiomas, visión
// en la oscuridad, resistencias, competencias y rasgos raciales.

import { RaceDef } from '../types/core';

export const RACES: Record<string, RaceDef> = {
  // ════════════════════════════════════════════════════════════════
  // HUMANO
  // ════════════════════════════════════════════════════════════════
  'Humano': {
    fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    description: 'Los humanos son la raza más joven y versátil del multiverso. Su ambición, ingenio y capacidad de adaptación les han permitido prosperar en todos los rincones del mundo, alcanzando logros que otras razas más longevas apenas sueñan.',
    size: 'Mediano',
    speed: 9,
    age: 'Alcanzan la adultez a los 18 años y viven menos de un siglo.',
    alignment: 'Los humanos no tienen una tendencia innata hacia el bien o el mal. Pueden encontrarse en cualquier lugar.',
    languages: ['Común'],
    extraLanguages: 1,
    traits: [
      { name: 'Versátil', description: 'Tus puntuaciones de habilidad aumentan cada una en +1. Esto ya está reflejado en tus bonificadores raciales.', type: 'feature' },
      { name: 'Idioma adicional', description: 'Podés hablar, leer y escribir un idioma adicional a tu elección.', type: 'language' }
    ]
  },

// ════════════════════════════════════════════════════════════════
  // ELFO OSCURO (DROW)
  // ════════════════════════════════════════════════════════════════
  'Elfo Oscuro (Drow)': {
    fixed: { dex: 2, cha: 1 },
    description: 'Los elfos oscuros, también conocidos como drows, son una subraza élfica que habita en las profundidades del Submundo. Su piel de ébano y cabello blanco plateado son el sello de una raza forjada en la oscuridad eterna. Poseen una visión superior en la oscuridad y una afinidad innata con la magia de las sombras.',
    size: 'Mediano',
    speed: 9,
    age: 'Aunque alcanzan la adultez física a los 100 años, se los considera adultos a los 100. Pueden vivir hasta los 750 años.',
    alignment: 'Los drows han sido moldeados por una sociedad cruel y despiadada en el Submundo. La mayoría son neutrales malvados, aunque existen excepciones que abandonan su herencia.',
    languages: ['Común', 'Élfico'],
    darkvision: 36,
    weaponProf: ['Espada larga', 'Espada corta', 'Arco corto', 'Ballesta de mano'],
    traits: [
      { name: 'Visión en la Oscuridad Superior', description: 'Tu visión en la oscuridad tiene un alcance de 36 metros. Podés ver en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue. En la oscuridad total no podés distinguir colores, solo tonos de gris.', type: 'senses' },
      { name: 'Ascendencia Feérica', description: 'Tenés ventaja en las tiradas de salvación contra ser encantado y la magia no puede hacerte dormir.', type: 'defense' },
      { name: 'Trance', description: 'Los elfos no duermen. En su lugar meditan profundamente durante 4 horas al día (palabra común: "trance"). Mientras meditás, podés soñar con visiones de tu pasado. Después de este descanso, obtenés los mismos beneficios que un humano después de 8 horas de sueño.', type: 'feature' },
      { name: 'Entrenamiento Élfico', description: 'Tenés competencia con la espada larga, la espada corta, el arco corto y la ballesta de mano.', type: 'proficiency' },
      { name: 'Magia Drow', description: 'Conocés el truco Taumaturgia. Al alcanzar el nivel 3, podés lanzar Rayo de Fuego una vez por descanso largo. Al alcanzar el nivel 5, podés lanzar el conjuro Oscuridad una vez por descanso largo. El Carisma es tu habilidad para lanzar estos conjuros.', type: 'spell' },
      { name: 'Sensibilidad a la Luz Solar', description: 'Tenés desventaja en las tiradas de ataque y en las pruebas de Percepción que dependan de la vista cuando tú, tu objetivo o lo que intentés percibir está bajo la luz solar directa.', type: 'feature' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // ALTO ELFO
  // ════════════════════════════════════════════════════════════════
  'Alto Elfo': {
    fixed: { dex: 2, int: 1 },
    description: 'Los altos elfos son seres longevos y elegantes, profundamente conectados con la magia del mundo y las antiguas tradiciones de sus reinos feéricos. Su aguda percepción y gracia natural los convierten en arqueros y magos incomparables.',
    size: 'Mediano',
    speed: 9,
    age: 'Aunque alcanzan la adultez física a los 100 años, se los considera adultos a los 100. Pueden vivir hasta los 750 años.',
    alignment: 'Aman la libertad, la diversidad y la expresión personal, por lo que suelen inclinarse hacia el bien y el caos.',
    languages: ['Común', 'Élfico'],
    extraLanguages: 1,
    darkvision: 18,
    weaponProf: ['Espada larga', 'Espada corta', 'Arco largo', 'Arco corto'],
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Acostumbrado a los bosques y cielos nocturnos, tenés una visión superior en la oscuridad y en condiciones de poca luz. Podés ver a 18 metros en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue. En la oscuridad total no podés distinguir colores, solo tonos de gris.', type: 'senses' },
      { name: 'Ascendencia Feérica', description: 'Tenés ventaja en las tiradas de salvación contra ser encantado y la magia no puede hacerte dormir.', type: 'defense' },
      { name: 'Trance', description: 'Los elfos no duermen. En su lugar meditan profundamente durante 4 horas al día (palabra común: "trance"). Mientras meditás, podés soñar con visiones de tu pasado. Después de este descanso, obtenés los mismos beneficios que un humano después de 8 horas de sueño.', type: 'feature' },
      { name: 'Entrenamiento Élfico', description: 'Tenés competencia con la espada larga, la espada corta, el arco largo y el arco corto.', type: 'proficiency' },
      { name: 'Truco', description: 'Conocés un truco de tu elección de la lista de conjuros de mago. La Inteligencia es tu habilidad para lanzarlo.', type: 'spell' },
      { name: 'Idioma adicional', description: 'Podés hablar, leer y escribir un idioma adicional a tu elección.', type: 'language' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // ENANO DE LAS COLINAS
  // ════════════════════════════════════════════════════════════════
  'Enano de las Colinas': {
    fixed: { con: 2, wis: 1 },
    description: 'Los enanos de las colinas son pueblos resistentes y orgullosos, forjados en las montañas y profundidades de la tierra. Su resistencia legendaria y su habilidad artesanal con la piedra y el metal son insuperables.',
    size: 'Mediano',
    speed: 7.5,
    age: 'Maduran al mismo ritmo que los humanos, pero se los considera jóvenes hasta los 50. Viven unos 350 años.',
    alignment: 'Valoran el orden y la tradición, por lo que suelen ser legales. Son fiables y justos, aunque también orgullosos y testarudos.',
    languages: ['Común', 'Enano'],
    darkvision: 18,
    resistances: ['veneno'],
    weaponProf: ['Hacha de batalla', 'Hacha de mano', 'Martillo de guerra', 'Martillo ligero'],
    toolChoices: { count: 1, options: ['Herramientas de herrero', 'Herramientas de cervecero', 'Herramientas de cantero'] },
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Acostumbrado a la vida bajo tierra, tenés visión superior en la oscuridad y en condiciones de poca luz. Podés ver a 18 metros en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue. En la oscuridad total no podés distinguir colores, solo tonos de gris.', type: 'senses' },
      { name: 'Resistencia Enana', description: 'Tenés ventaja en las tiradas de salvación contra veneno y tenés resistencia al daño de veneno.', type: 'defense' },
      { name: 'Entrenamiento de Combate Enano', description: 'Tenés competencia con el hacha de batalla, el hacha de mano, el martillo de guerra y el martillo ligero.', type: 'proficiency' },
      { name: 'Competencia con Herramientas', description: 'Tenés competencia con una herramienta de artesano a tu elección (herrero, cervecero o cantero).', type: 'proficiency' },
      { name: 'Conocimiento de la Piedra', description: 'Siempre que hagas una prueba de Inteligencia (Historia) relacionada con el origen de un trabajo de piedra, se te considera competente y sumás el doble de tu bonificador de competencia.', type: 'skill' },
      { name: 'Robustez Enana', description: 'Tu máximo de Puntos de Golpe aumenta en 1, y aumenta en 1 cada vez que subís de nivel.', type: 'feature' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // MEDIANO PIÉS LIGERO
  // ════════════════════════════════════════════════════════════════
  'Mediano Piesligero': {
    fixed: { dex: 2, cha: 1 },
    description: 'Los medianos piesligeros son criaturas pequeñas y afortunadas que valoran la comodidad, la buena comida y la tranquilidad. Su naturaleza discreta y su suerte extraordinaria les permiten sortear peligros que doblegarían a otros.',
    size: 'Pequeño',
    speed: 7.5,
    age: 'Un mediano alcanza la adultez a los 20 años y puede vivir hasta los 150 años.',
    alignment: 'Suelen ser legales y buenos. Rara vez son malvados o caóticos, aunque los piesligeros a veces se inclinan al caos por su amor a la diversión.',
    languages: ['Común', 'Mediano'],
    traits: [
      { name: 'Suerte', description: 'Cuando tirás un 1 en un d20 para una tirada de ataque, prueba de habilidad o tirada de salvación, podés volver a tirar el dado y debés usar el nuevo resultado.', type: 'feature' },
      { name: 'Coraje', description: 'Tenés ventaja en las tiradas de salvación contra asustado.', type: 'defense' },
      { name: 'Agilidad Mediana', description: 'Podés moverte a través del espacio de cualquier criatura de tamaño mayor al tuyo.', type: 'movement' },
      { name: 'Sigiloso por Naturaleza', description: 'Podés intentar ocultarte incluso cuando solo te obstruye una criatura que sea al menos un tamaño más grande que tú.', type: 'skill' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // DRACÓNIDO
  // ════════════════════════════════════════════════════════════════
  'Dracónido': {
    fixed: { str: 2, cha: 1 },
    description: 'Los dracónidos son criaturas humanoides con aspecto de dragón, nacidas de los huevos de los dragones. Su herencia dracónica les otorga un arma de aliento devastadora y una resistencia elemental según su ancestro.',
    size: 'Mediano',
    speed: 9,
    age: 'Crecen rápido: caminan horas después de nacer y alcanzan la adultez a los 15 años. Pueden vivir hasta los 80 años.',
    alignment: 'Los dracónidos tienden a los extremos. Los buenos son justos y honorables, mientras que los malvados son crueles y despiadados.',
    languages: ['Común', 'Dracónico'],
    ancestryChoices: {
      label: 'Ancestro Dracónico',
      options: [
        { name: 'Negro', damageType: 'ácido', breath: 'Línea de 1.5m × 9m (salvación de DES)', resistance: 'ácido' },
        { name: 'Azul', damageType: 'relámpago', breath: 'Línea de 1.5m × 9m (salvación de DES)', resistance: 'relámpago' },
        { name: 'Verde', damageType: 'veneno', breath: 'Cono de 4.5m (salvación de CON)', resistance: 'veneno' },
        { name: 'Rojo', damageType: 'fuego', breath: 'Cono de 4.5m (salvación de DES)', resistance: 'fuego' },
        { name: 'Blanco', damageType: 'frío', breath: 'Cono de 4.5m (salvación de CON)', resistance: 'frío' },
        { name: 'Latón', damageType: 'fuego', breath: 'Línea de 1.5m × 9m (salvación de DES)', resistance: 'fuego' },
        { name: 'Bronce', damageType: 'relámpago', breath: 'Línea de 1.5m × 9m (salvación de DES)', resistance: 'relámpago' },
        { name: 'Cobre', damageType: 'ácido', breath: 'Línea de 1.5m × 9m (salvación de DES)', resistance: 'ácido' },
        { name: 'Oro', damageType: 'fuego', breath: 'Cono de 4.5m (salvación de DES)', resistance: 'fuego' },
        { name: 'Plata', damageType: 'frío', breath: 'Cono de 4.5m (salvación de CON)', resistance: 'frío' }
      ]
    },
    traits: [
      { name: 'Ancestro Dracónico', description: 'Tenés un ancestro dracónico que determina el tipo de tu arma de aliento y de tu resistencia al daño.', type: 'choice' },
      { name: 'Arma de Aliento', description: 'Podés usar tu acción para exhalar energía destructiva de tu ancestro. Tu arma de aliento inflige 2d6 de daño al nivel 1, y aumenta a 3d6 a nivel 6, 4d6 a nivel 11 y 5d6 a nivel 16. Después de usarla, no podés volver a usarla hasta completar un descanso corto o largo.', type: 'damage' },
      { name: 'Resistencia al Daño', description: 'Tenés resistencia al tipo de daño asociado a tu ancestro dracónico.', type: 'defense' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // GNOMO DE LAS ROCAS
  // ════════════════════════════════════════════════════════════════
  'Gnomo de las Rocas': {
    fixed: { int: 2, con: 1 },
    description: 'Los gnomos de las rocas son inventores ingeniosos y constructores de artefactos maravillosos. Su curiosidad insaciable y su intelecto agudo los convierten en expertos artífices y estudiosos.',
    size: 'Pequeño',
    speed: 7.5,
    age: 'Los gnomos maduran al mismo ritmo que los humanos, pero pueden vivir de 350 a 500 años.',
    alignment: 'Suelen ser buenos. Los que se inclinan a la ley son ingenieros y sabios, y los caóticos son bardos y pícaros.',
    languages: ['Común', 'Gnomo'],
    darkvision: 18,
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Acostumbrado a la vida bajo tierra, tenés visión superior en la oscuridad y en condiciones de poca luz. Podés ver a 18 metros en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue.', type: 'senses' },
      { name: 'Astucia Gnoma', description: 'Tenés ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra la magia.', type: 'defense' },
      { name: 'Artificio', description: 'Siempre que hagas una prueba de Inteligencia (Historia) relacionada con objetos mágicos, alquímicos o tecnológicos, podés sumar el doble de tu bonificador de competencia.', type: 'skill' },
      { name: 'Inventor', description: 'Cuando hacés una prueba de Inteligencia (Investigación) o una prueba de Destreza (Juego de Manos) para armar o desarmar un mecanismo, podés sumar el doble de tu bonificador de competencia.', type: 'skill' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // SEMIELFO
  // ════════════════════════════════════════════════════════════════
  'Semielfo': {
    fixed: { cha: 2 },
    choice: { count: 2, amount: 1 },
    description: 'Los semielfos caminan entre dos mundos: el reino feérico de sus ancestros elfos y la bulliciosa sociedad humana. Su carisma innato y su versatilidad les permiten adaptarse a cualquier situación.',
    size: 'Mediano',
    speed: 9,
    age: 'Los semielfos maduran al mismo ritmo que los humanos y viven unos 180 años.',
    alignment: 'Comparten la inclinación caótica de sus parientes élficos y el espíritu libre de los humanos. Suelen ser caóticos y neutrales.',
    languages: ['Común', 'Élfico'],
    extraLanguages: 1,
    darkvision: 18,
    skillChoices: { count: 2, options: ['Atletismo', 'Acrobacias', 'Juego de Manos', 'Sigilo', 'Arcanos', 'Historia', 'Investigación', 'Naturaleza', 'Religión', 'Trato con Animales', 'Perspicacia', 'Medicina', 'Percepción', 'Supervivencia', 'Engaño', 'Intimidación', 'Interpretación', 'Persuasión'] },
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Podés ver a 18 metros en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue. No podés distinguir colores en la oscuridad, solo tonos de gris.', type: 'senses' },
      { name: 'Ascendencia Feérica', description: 'Tenés ventaja en las tiradas de salvación contra ser encantado y la magia no puede hacerte dormir.', type: 'defense' },
      { name: 'Versatilidad de Habilidades', description: 'Ganás competencia en dos habilidades a tu elección.', type: 'skill' },
      { name: 'Idioma adicional', description: 'Podés hablar, leer y escribir un idioma adicional a tu elección.', type: 'language' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // SEMIORCO
  // ════════════════════════════════════════════════════════════════
  'Semiorco': {
    fixed: { str: 2, con: 1 },
    description: 'Los semiorcos combinan la imponente fuerza y ferocidad de sus ancestros orcos con la astucia y adaptabilidad humanas. Son guerreros temibles y supervivientes implacables.',
    size: 'Mediano',
    speed: 9,
    age: 'Maduran más rápido que los humanos y alcanzan la adultez a los 14 años. Rara vez viven más de 75 años.',
    alignment: 'Los semiorcos heredan la tendencia al caos de los orcos y no suelen ser buenos. Los que se integran en la sociedad humana suelen ser neutrales.',
    languages: ['Común', 'Orco'],
    darkvision: 18,
    skillProf: ['Intimidación'],
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Podés ver a 18 metros en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue. No distinguís colores en la oscuridad, solo tonos de gris.', type: 'senses' },
      { name: 'Ataques Salvajes', description: 'Cuando conseguís un golpe crítico con un ataque con arma cuerpo a cuerpo, podés tirar uno de los dados de daño del arma adicionalmente y sumarlo al daño extra del crítico.', type: 'damage' },
      { name: 'Resistencia Implacable', description: 'Cuando te reducen a 0 Puntos de Golpe pero no te matan, podés quedarte con 1 Punto de Golpe en su lugar. No podés volver a usar este rasgo hasta completar un descanso largo.', type: 'defense' },
      { name: 'Amenazas Poderosas', description: 'Ganás competencia en la habilidad Intimidación.', type: 'skill' }
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // TIEFLING
  // ════════════════════════════════════════════════════════════════
  'Tiefling': {
    fixed: { cha: 2, int: 1 },
    description: 'Los tieflings descienden de pactos antiguos forjados con entidades infernales. Su herencia demoníaca se manifiesta en su apariencia distintiva y en su afinidad con la magia de fuego y las tinieblas.',
    size: 'Mediano',
    speed: 9,
    age: 'Los tieflings maduran al mismo ritmo que los humanos y viven unos 100 años.',
    alignment: 'Los tieflings no tienen una tendencia innata hacia el mal, aunque muchos caen en él por el rechazo que sufren. Pueden tener cualquier alineamiento.',
    languages: ['Común', 'Infernal'],
    darkvision: 18,
    resistances: ['fuego'],
    traits: [
      { name: 'Visión en la Oscuridad', description: 'Gracias a tu herencia infernal, tenés visión superior en la oscuridad y en condiciones de poca luz. Podés ver a 18 metros en luz tenue como si fuera luz brillante y en la oscuridad como si fuera luz tenue.', type: 'senses' },
      { name: 'Resistencia Infernal', description: 'Tenés resistencia al daño de fuego.', type: 'defense' },
      { name: 'Legado Infernal', description: 'Conocés el truco Taumaturgia. Cuando alcanzás el nivel 3, podés lanzar el conjuro Rayo de Fuego una vez por descanso largo. Cuando alcanzás el nivel 5, podés lanzar el conjuro Oscuridad una vez por descanso largo. El Carisma es tu habilidad para lanzar estos conjuros.', type: 'spell' }
    ]
  }
};

// ─── Idiomas de cada raza (compatibilidad con getCharacterProficiencies) ───
export const RACE_LANGUAGES: Record<string, string[]> = {
  'Humano':              ['Común', 'Un idioma adicional (a elección)'],
  'Elfo Oscuro (Drow)':  ['Común', 'Élfico'],
  'Alto Elfo':           ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Enano de las Colinas':['Común', 'Enano'],
  'Mediano Piesligero':  ['Común', 'Mediano'],
  'Dracónido':           ['Común', 'Dracónico'],
  'Gnomo de las Rocas':  ['Común', 'Gnomo'],
  'Semielfo':            ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Semiorco':            ['Común', 'Orco'],
  'Tiefling':            ['Común', 'Infernal'],
};

