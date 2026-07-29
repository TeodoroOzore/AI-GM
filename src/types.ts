export type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export type AbilityDef = {
  key: AbilityKey;
  label: string;
  full: string;
};

export const ABILITIES: AbilityDef[] = [
  { key: 'str', label: 'FUE', full: 'Fuerza' },
  { key: 'dex', label: 'DES', full: 'Destreza' },
  { key: 'con', label: 'CON', full: 'Constitución' },
  { key: 'int', label: 'INT', full: 'Inteligencia' },
  { key: 'wis', label: 'SAB', full: 'Sabiduría' },
  { key: 'cha', label: 'CAR', full: 'Carisma' }
];

export type Skill = {
  name: string;
  ab: AbilityKey;
};

export const SKILLS: Skill[] = [
  { name: 'Atletismo', ab: 'str' },
  { name: 'Acrobacias', ab: 'dex' },
  { name: 'Juego de Manos', ab: 'dex' },
  { name: 'Sigilo', ab: 'dex' },
  { name: 'Arcanos', ab: 'int' },
  { name: 'Historia', ab: 'int' },
  { name: 'Investigación', ab: 'int' },
  { name: 'Naturaleza', ab: 'int' },
  { name: 'Religión', ab: 'int' },
  { name: 'Trato con Animales', ab: 'wis' },
  { name: 'Perspicacia', ab: 'wis' },
  { name: 'Medicina', ab: 'wis' },
  { name: 'Percepción', ab: 'wis' },
  { name: 'Supervivencia', ab: 'wis' },
  { name: 'Engaño', ab: 'cha' },
  { name: 'Intimidación', ab: 'cha' },
  { name: 'Interpretación', ab: 'cha' },
  { name: 'Persuasión', ab: 'cha' }
];

export type RaceDef = {
  fixed?: Partial<Record<AbilityKey, number>>;
  choice?: { count: number; amount: number };
};

export const RACES: Record<string, RaceDef> = {
  'Humano': { fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
  'Alto Elfo': { fixed: { dex: 2, int: 1 } },
  'Enano de las Colinas': { fixed: { con: 2, wis: 1 } },
  'Mediano Piesligero': { fixed: { dex: 2, cha: 1 } },
  'Dracónido': { fixed: { str: 2, cha: 1 } },
  'Gnomo de las Rocas': { fixed: { int: 2, con: 1 } },
  'Semielfo': { fixed: { cha: 2 }, choice: { count: 2, amount: 1 } },
  'Semiorco': { fixed: { str: 2, con: 1 } },
  'Tiefling': { fixed: { cha: 2, int: 1 } }
};

export type ClassDef = {
  hitDie: number;
  saves: AbilityKey[];
  spellcasting: { type: 'full' | 'half' | 'pact'; ability: AbilityKey } | null;
  tabName: string;
  unlockLevel: number;
  subclasses: string[];
};

export const CLASSES: Record<string, ClassDef> = {
  'Bárbaro': { hitDie: 12, saves: ['str', 'con'], spellcasting: null, tabName: 'Furia e Instinto', unlockLevel: 3, subclasses: ['Camino del Berserker', 'Camino del Guerrero Totémico', 'Camino del Corazón Salvaje'] },
  'Bardo': { hitDie: 8, saves: ['dex', 'cha'], spellcasting: { type: 'full', ability: 'cha' }, tabName: 'Repertorio', unlockLevel: 3, subclasses: ['Colegio del Conocimiento', 'Colegio del Valor', 'Colegio de la Glamour'] },
  'Clérigo': { hitDie: 8, saves: ['wis', 'cha'], spellcasting: { type: 'full', ability: 'wis' }, tabName: 'Dones Divinos', unlockLevel: 1, subclasses: ['Dominio de la Vida', 'Dominio de la Guerra', 'Dominio de la Luz', 'Dominio Arcano'] },
  'Druida': { hitDie: 8, saves: ['int', 'wis'], spellcasting: { type: 'full', ability: 'wis' }, tabName: 'Cantos de la Naturaleza', unlockLevel: 2, subclasses: ['Círculo de la Tierra', 'Círculo de la Luna', 'Círculo de las Estrellas'] },
  'Explorador': { hitDie: 10, saves: ['str', 'dex'], spellcasting: { type: 'half', ability: 'wis' }, tabName: 'Senda Salvaje', unlockLevel: 3, subclasses: ['Cazador', 'Señor de las Bestias', 'Vagabundo Feérico'] },
  'Guerrero': { hitDie: 10, saves: ['str', 'con'], spellcasting: null, tabName: 'Técnicas de Combate', unlockLevel: 3, subclasses: ['Campeón', 'Maestro de Batalla', 'Caballero Arcano'] },
  'Hechicero': { hitDie: 6, saves: ['con', 'cha'], spellcasting: { type: 'full', ability: 'cha' }, tabName: 'Linaje Arcano', unlockLevel: 1, subclasses: ['Linaje Dracónico', 'Magia Salvaje', 'Alma Mecánica'] },
  'Mago': { hitDie: 6, saves: ['int', 'wis'], spellcasting: { type: 'full', ability: 'int' }, tabName: 'Grimorio', unlockLevel: 2, subclasses: ['Escuela de Evocación', 'Escuela de Abjuración', 'Escuela de Nigromancia'] },
  'Monje': { hitDie: 8, saves: ['str', 'dex'], spellcasting: null, tabName: 'Disciplinas de Ki', unlockLevel: 3, subclasses: ['Camino de la Mano Abierta', 'Camino de la Sombra', 'Camino de los Cuatro Elementos'] },
  'Paladín': { hitDie: 10, saves: ['wis', 'cha'], spellcasting: { type: 'half', ability: 'cha' }, tabName: 'Juramento Sagrado', unlockLevel: 3, subclasses: ['Juramento de Devoción', 'Juramento de Venganza', 'Juramento de los Ancestros'] },
  'Pícaro': { hitDie: 8, saves: ['dex', 'int'], spellcasting: null, tabName: 'Trucos del Oficio', unlockLevel: 3, subclasses: ['Ladrón', 'Asesino', 'Embaucador Arcano'] },
  'Brujo': { hitDie: 8, saves: ['wis', 'cha'], spellcasting: { type: 'pact', ability: 'cha' }, tabName: 'Pacto de Sangre', unlockLevel: 1, subclasses: ['Patrón Arquihada', 'Patrón Fiendish', 'Patrón Great Old One'] }
};

export type FeatDef = {
  name: string;
  description: string;
  prerequisite?: string;
  category: 'combat' | 'magic' | 'utility' | 'defense';
  spellcasterOnly?: boolean;
  martialOnly?: boolean;
};

export const FEAT_CATALOG: FeatDef[] = [
  {
    name: 'Alerta',
    description: '+5 a la Iniciativa. No podés ser sorprendido mientras estés consciente. Otras criaturas no ganan ventaja por atacar sin ser vistas.',
    category: 'utility'
  },
  {
    name: 'Afortunado',
    description: 'Tenés 3 puntos de suerte por descanso largo. Podés gastar 1 para tirar un d20 adicional en ataques, pruebas o salvaciones, o forzar a un enemigo a repetir su ataque.',
    category: 'utility'
  },
  {
    name: 'Duro de Pelar',
    description: 'Tu máximo de Puntos de Golpe aumenta en una cantidad igual al doble de tu nivel actual. Cada vez que subas de nivel, tus PG aumentan en 2 adicionales.',
    category: 'defense'
  },
  {
    name: 'Mago de Guerra',
    description: 'Ventaja en salvaciones de CON para mantener concentración en conjuros. Podés realizar componentes somáticos sosteniendo armas/escudo. Usás reacción para lanzar conjuros como ataque de oportunidad.',
    prerequisite: 'Capacidad de lanzar al menos un conjuro',
    category: 'magic',
    spellcasterOnly: true
  },
  {
    name: 'Maestro de Armas Grandes',
    description: 'Al asestar un crítico o reducir a 0 PG con un arma pesada cuerpo a cuerpo, podés realizar un ataque adicional como acción bonus. Podés elegir sufrir -5 al ataque para infligir +10 al daño.',
    prerequisite: 'Competencia en armas marciales',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Tirador Certero',
    description: 'Atacar a rango máximo con armas a distancia no impone desventaja. Tus ataques a distancia ignoran cobertura media (1/2) y tres cuartos (3/4). Podés sufrir -5 al ataque para infligir +10 al daño.',
    prerequisite: 'Competencia en armas a distancia',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Resiliente',
    description: 'Aumentás un atributo a tu elección en +1 y ganás competencia en las tiradas de salvación de ese atributo.',
    category: 'defense'
  },
  {
    name: 'Móvil',
    description: 'Tu velocidad aumenta en 3 metros. Al usar Esprintar, el terreno difícil no te frena. Al realizar un ataque cuerpo a cuerpo contra una criatura, no provocás ataques de oportunidad de ella el resto del turno.',
    category: 'utility'
  },
  {
    name: 'Iniciado en la Magia',
    description: 'Aprendés 2 trucos y 1 hechizo de nivel 1 de la lista de una clase mágica a tu elección (Mago, Clérigo, Druida, Bardo, Hechicero o Brujo). Podés lanzar el hechizo de nivel 1 gratis 1 vez por descanso largo.',
    category: 'magic'
  },
  {
    name: 'Curandero',
    description: 'Al usar un kit de curandero para estabilizar, la criatura recupera 1 PG. Además, podés gastar 1 uso del kit para curar 1d6 + 4 + nivel de PG a una criatura (1 vez por descanso).',
    category: 'utility'
  },
  {
    name: 'Maestro de los Escudos',
    description: 'Al usar la acción de Atacar con un escudo equipado, podés usar una acción bonus para empujar a una criatura a 1.5m. Sumás la CA del escudo a salvaciones de DES individuales.',
    prerequisite: 'Competencia en Escudos',
    category: 'defense',
    martialOnly: true
  },
  {
    name: 'Duelista Defensivo',
    description: 'Al empuñar un arma sutil en la que sos competente, podés usar tu reacción cuando te ataquen para sumar tu bono de competencia a la CA contra ese ataque.',
    prerequisite: 'Destreza 13 o superior',
    category: 'defense',
    martialOnly: true
  },
  {
    name: 'Francotirador de Conjuros',
    description: 'Duplica el alcance de los conjuros que requieren una tirada de ataque. Tus ataques de conjuro ignoran cobertura media y tres cuartos. Aprendés 1 truco con tirada de ataque.',
    prerequisite: 'Capacidad de lanzar al menos un conjuro',
    category: 'magic',
    spellcasterOnly: true
  },
  {
    name: 'Actor',
    description: 'Aumentá tu Carisma en +1. Tenés ventaja en Pruebas de Engaño e Interpretación al hacerte pasar por otra persona. Podés imitar la voz o sonidos de criaturas escuchadas durante 1 minuto.',
    category: 'utility'
  },
  {
    name: 'Observador',
    description: 'Aumentá Inteligencia o Sabiduría en +1. Ganás +5 a tu Percepción pasiva e Investigación pasiva. Podés leer los labios de cualquier criatura si comprendés su idioma.',
    category: 'utility'
  },
  {
    name: 'Atacante Salvaje',
    description: 'Una vez por turno, al tirar el daño de un ataque cuerpo a cuerpo con arma, podés volver a tirar los dados de daño y elegir el mayor de los dos resultados.',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Iniciador en el Combate',
    description: 'Aprendés un Estilo de Combate de la lista del Guerrero (Arqueria, Defensa, Duelista, Armas Grandes, Protección, etc.).',
    prerequisite: 'Competencia en armas marciales',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Contendiente Habilidoso',
    description: 'Ganás competencia inmediata en 3 habilidades o herramientas a tu elección.',
    category: 'utility'
  },
  {
    name: 'Centinela',
    description: 'Cuando golpeas a una criatura con un ataque de oportunidad, su velocidad se convierte en 0. Podés realizar ataques de oportunidad incluso si usan la acción de Destrabarse.',
    category: 'combat',
    martialOnly: true
  },
  {
    name: 'Adepto Elemental',
    description: 'Elegís un tipo de daño elemental (Fuego, Frío, Relámpago, Ácido o Trueno). Tus conjuros ignoran la resistencia a ese elemento y los 1s en dados de daño cuentan como 2s.',
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

export type ConditionDef = {
  name: string;
  emoji: string;
  description: string;
};

export const DND_CONDITIONS: ConditionDef[] = [
  { name: 'Cegado', emoji: '👁️‍🗨️', description: 'Fallas automáticas en pruebas de vista. Desventaja en tus ataques; ataques contra vos tienen ventaja.' },
  { name: 'Hechizado', emoji: '💖', description: 'No podés atacar al encantador. El encantador tiene ventaja en pruebas de interacción social contigo.' },
  { name: 'Ensordecido', emoji: '🔇', description: 'Fallas automáticas en pruebas de audición.' },
  { name: 'Asustado', emoji: '😱', description: 'Desventaja en pruebas y ataques mientras la fuente del miedo sea visible. No podés acercarte a ella.' },
  { name: 'Agarrado', emoji: '✊', description: 'Velocidad 0. Finaliza si el apresador queda incapacitado o si eres desplazado.' },
  { name: 'Incapacitado', emoji: '💤', description: 'No podés realizar acciones ni reacciones.' },
  { name: 'Invisible', emoji: '👻', description: 'Imposible de detectar visualmente sin magia. Ventaja en tus ataques; ataques contra vos tienen desventaja.' },
  { name: 'Paralizado', emoji: '⚡', description: 'Incapacitado y sin movimiento. Fallas automáticamente salvaciones de FUE y DES. Ataques contra vos tienen ventaja y a 1.5m son críticos.' },
  { name: 'Petrificado', emoji: '🗿', description: 'Transformado en piedra. Inmune a veneno y enfermedades. Resistencia a todo daño.' },
  { name: 'Envenenado', emoji: '☠️', description: 'Desventaja en tiradas de ataque y pruebas de habilidad.' },
  { name: 'Derribado', emoji: '🤼', description: 'Solo podés gatear. Desventaja en tus ataques. Ataques cuerpo a cuerpo a 1.5m tienen ventaja; a distancia tienen desventaja.' },
  { name: 'Apresado', emoji: '🕸️', description: 'Velocidad 0. Desventaja en tus ataques y en salvaciones de DES. Ataques contra vos tienen ventaja.' },
  { name: 'Aturdido', emoji: '💫', description: 'Incapacitado, no podés moverte. Fallas salvaciones de FUE y DES. Ataques contra vos tienen ventaja.' },
  { name: 'Inconsciente', emoji: '😵', description: 'Incapacitado e inconsciente, caes derribado. Fallas salvaciones de FUE y DES. Ataques contra vos tienen ventaja y a 1.5m son críticos.' },
  { name: 'Agotamiento 1', emoji: '🍖', description: 'Desventaja en pruebas de habilidad.' },
  { name: 'Agotamiento 2', emoji: '🍖🍖', description: 'Velocidad reducida a la mitad.' },
  { name: 'Agotamiento 3', emoji: '🍖🍖🍖', description: 'Desventaja en tiradas de ataque y salvaciones.' },
];

export const FAMILIAR_FORMS = [
  'Gato', 'Búho', 'Rata', 'Cuervo', 'Araña', 'Serpiente venenosa',
  'Mefita de fuego', 'Rana venenosa', 'Halcón', 'Tejón', 'Pez volador', 'Pseudodragón (nivel alto)'
];

// ─── PROFICIENCY TABLES ────────────────────────────────────────────
// Armor competencies per class (D&D 5e PHB)
export type ArmorProfType = 'Ligera' | 'Media' | 'Pesada' | 'Escudos';
export type WeaponProfType = 'Simples' | 'Marciales' | 'Arrojadizas';

export const CLASS_ARMOR_PROF: Record<string, ArmorProfType[]> = {
  'Bárbaro':    ['Ligera', 'Media', 'Escudos'],
  'Bardo':      ['Ligera'],
  'Clérigo':    ['Ligera', 'Media', 'Escudos'],
  'Druida':     ['Ligera', 'Media', 'Escudos'],
  'Explorador': ['Ligera', 'Media', 'Escudos'],
  'Guerrero':   ['Ligera', 'Media', 'Pesada', 'Escudos'],
  'Hechicero':  [],
  'Mago':       [],
  'Monje':      [],
  'Paladín':    ['Ligera', 'Media', 'Pesada', 'Escudos'],
  'Pícaro':     ['Ligera'],
  'Brujo':      ['Ligera'],
};

export const CLASS_WEAPON_PROF: Record<string, WeaponProfType[]> = {
  'Bárbaro':    ['Simples', 'Marciales', 'Arrojadizas'],
  'Bardo':      ['Simples', 'Arrojadizas'],
  'Clérigo':    ['Simples', 'Arrojadizas'],
  'Druida':     ['Simples', 'Arrojadizas'],
  'Explorador': ['Simples', 'Marciales', 'Arrojadizas'],
  'Guerrero':   ['Simples', 'Marciales', 'Arrojadizas'],
  'Hechicero':  ['Simples', 'Arrojadizas'],
  'Mago':       ['Arrojadizas'],
  'Monje':      ['Simples', 'Arrojadizas'],
  'Paladín':    ['Simples', 'Marciales', 'Arrojadizas'],
  'Pícaro':     ['Simples', 'Marciales', 'Arrojadizas'],
  'Brujo':      ['Simples', 'Arrojadizas'],
};

// Tool proficiencies per class
export const CLASS_TOOL_PROF: Record<string, string[]> = {
  'Bárbaro':    [],
  'Bardo':      ['Instrumento musical (a elección)'],
  'Clérigo':    [],
  'Druida':     ['Herborista'],
  'Explorador': [],
  'Guerrero':   [],
  'Hechicero':  [],
  'Mago':       [],
  'Monje':      ['Herramientas de artesano (a elección)', 'Instrumento musical (a elección)'],
  'Paladín':    [],
  'Pícaro':     ['Herramientas de ladrón'],
  'Brujo':      [],
};

// Languages per race (D&D 5e PHB — all speak Common + racial lang)
export const RACE_LANGUAGES: Record<string, string[]> = {
  'Humano':              ['Común', 'Un idioma adicional (a elección)'],
  'Alto Elfo':           ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Enano de las Colinas':['Común', 'Enano'],
  'Mediano Piesligero':  ['Común', 'Mediano'],
  'Dracónido':           ['Común', 'Dracónico'],
  'Gnomo de las Rocas':  ['Común', 'Gnomo'],
  'Semielfo':            ['Común', 'Élfico', 'Un idioma adicional (a elección)'],
  'Semiorco':            ['Común', 'Orco'],
  'Tiefling':            ['Común', 'Infernal'],
};

// Extra languages and tools per background (D&D 5e PHB)
export const BACKGROUND_EXTRAS: Record<string, { tools: string[]; languages: string[] }> = {
  'Acólito':          { tools: [], languages: ['Dos idiomas adicionales (a elección)', 'Celestial'] },
  'Artesano Gremial': { tools: ['Herramientas de artesano (oficio a elección)'], languages: ['Un idioma adicional (a elección)'] },
  'Artista':          { tools: ['Instrumento musical (a elección)'], languages: [] },
  'Charlatán':        { tools: ['Kit de disfraz', 'Herramientas de falsificador'], languages: [] },
  'Criminal':         { tools: ['Juego de azar (a elección)', 'Herramientas de ladrón'], languages: [] },
  'Ermitaño':         { tools: ['Herborista'], languages: ['Un idioma adicional (a elección)'] },
  'Forastero':        { tools: ['Instrumento musical (a elección)'], languages: ['Un idioma adicional (a elección)'] },
  'Héroe del Pueblo': { tools: ['Herramientas de artesano (a elección)', 'Vehículos terrestres'], languages: [] },
  'Marinero':         { tools: ['Kit de navegante', 'Vehículos acuáticos'], languages: [] },
  'Noble':            { tools: ['Juego de azar (a elección)'], languages: ['Un idioma adicional (a elección)'] },
  'Sabio':            { tools: [], languages: ['Dos idiomas adicionales (a elección)'] },
  'Soldado':          { tools: ['Juego de azar (a elección)', 'Vehículos terrestres'], languages: [] },
  'Proscrito':        { tools: ['Instrumento musical (a elección)', 'Kit de envenenamiento'], languages: ['Un idioma adicional (a elección)'] },
};

export type ProficiencyBundle = {
  armor: ArmorProfType[];
  weapons: WeaponProfType[];
  tools: string[];
  languages: string[];
};

/** Derives the complete, locked proficiency set from class + race + background */
export function getCharacterProficiencies(
  className: string,
  race: string,
  background: string,
  extraTools: string[] = []
): ProficiencyBundle {
  const armor: ArmorProfType[] = [...(CLASS_ARMOR_PROF[className] || [])];
  const weapons: WeaponProfType[] = [...(CLASS_WEAPON_PROF[className] || [])];

  const classTools = CLASS_TOOL_PROF[className] || [];
  const bgExtras = BACKGROUND_EXTRAS[background] || { tools: [], languages: [] };
  const tools = [...new Set([...classTools, ...bgExtras.tools, ...extraTools])];

  const raceLangs = RACE_LANGUAGES[race] || ['Común'];
  const bgLangs = bgExtras.languages || [];
  const languages = [...new Set([...raceLangs, ...bgLangs])];

  return { armor, weapons, tools, languages };
}

export const FULL_SLOTS: Record<number, number[]> = {
  1: [2,0,0,0,0,0,0,0,0], 2: [3,0,0,0,0,0,0,0,0], 3: [4,2,0,0,0,0,0,0,0], 4: [4,3,0,0,0,0,0,0,0],
  5: [4,3,2,0,0,0,0,0,0], 6: [4,3,3,0,0,0,0,0,0], 7: [4,3,3,1,0,0,0,0,0], 8: [4,3,3,2,0,0,0,0,0],
  9: [4,3,3,3,1,0,0,0,0], 10: [4,3,3,3,2,0,0,0,0], 11: [4,3,3,3,2,1,0,0,0], 12: [4,3,3,3,2,1,0,0,0],
  13: [4,3,3,3,2,1,1,0,0], 14: [4,3,3,3,2,1,1,0,0], 15: [4,3,3,3,2,1,1,1,0], 16: [4,3,3,3,2,1,1,1,0],
  17: [4,3,3,3,2,1,1,1,1], 18: [4,3,3,3,3,1,1,1,1], 19: [4,3,3,3,3,2,1,1,1], 20: [4,3,3,3,3,2,2,1,1]
};

export const HALF_SLOTS: Record<number, number[]> = {
  1: [0,0,0,0,0], 2: [2,0,0,0,0], 3: [3,0,0,0,0], 4: [3,0,0,0,0],
  5: [4,2,0,0,0], 6: [4,2,0,0,0], 7: [4,3,0,0,0], 8: [4,3,0,0,0],
  9: [4,3,2,0,0], 10: [4,3,2,0,0], 11: [4,3,3,0,0], 12: [4,3,3,0,0],
  13: [4,3,3,1,0], 14: [4,3,3,1,0], 15: [4,3,3,2,0], 16: [4,3,3,2,0],
  17: [4,3,3,3,1], 18: [4,3,3,3,1], 19: [4,3,3,3,2], 20: [4,3,3,3,2]
};

export const PACT_SLOTS: Record<number, { count: number; level: number }> = {
  1: { count: 1, level: 1 }, 2: { count: 2, level: 1 }, 3: { count: 2, level: 2 }, 4: { count: 2, level: 2 },
  5: { count: 2, level: 3 }, 6: { count: 2, level: 3 }, 7: { count: 2, level: 4 }, 8: { count: 2, level: 4 },
  9: { count: 2, level: 5 }, 10: { count: 2, level: 5 }, 11: { count: 3, level: 5 }, 12: { count: 3, level: 5 },
  13: { count: 3, level: 5 }, 14: { count: 3, level: 5 }, 15: { count: 3, level: 5 }, 16: { count: 3, level: 5 },
  17: { count: 4, level: 5 }, 18: { count: 4, level: 5 }, 19: { count: 4, level: 5 }, 20: { count: 4, level: 5 }
};

export const POINTBUY_COST: Record<number, number> = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
};

export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function profBonus(level: number): number {
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
}

export function fmtSigned(n: number): string {
  return n >= 0 ? `+${n}` : String(n);
}

export function hpMaxFor(hitDie: number, level: number, conMod: number): number {
  const avgPerLevel = Math.floor(hitDie / 2) + 1;
  return hitDie + conMod + (level - 1) * (avgPerLevel + conMod);
}

export type ClassResource = {
  key: string;
  label: string;
  max: number;
  info?: boolean;
};

export function classResources(className: string, level: number): ClassResource[] {
  const res: ClassResource[] = [];
  switch (className) {
    case 'Bárbaro': {
      const uses = level >= 20 ? 99 : level >= 17 ? 6 : level >= 12 ? 5 : level >= 6 ? 4 : level >= 3 ? 3 : 2;
      const bonus = level >= 16 ? 4 : level >= 9 ? 3 : 2;
      res.push({ key: 'rage', label: `Furia (usos, +${bonus} daño cuerpo a cuerpo)`, max: uses });
      break;
    }
    case 'Pícaro': {
      const dice = Math.ceil(level / 2);
      res.push({ key: 'sneak', label: `Ataque Furtivo — ${dice}d6 (informativo, no consume usos)`, max: 0, info: true });
      break;
    }
    case 'Monje': {
      const die = level >= 17 ? '1d10' : level >= 11 ? '1d8' : level >= 5 ? '1d6' : '1d4';
      res.push({ key: 'ki', label: `Puntos de Ki (dado de artes marciales ${die})`, max: level >= 2 ? level : 0 });
      break;
    }
    case 'Guerrero': {
      res.push({ key: 'secondwind', label: 'Aliento de Combate (1/descanso corto)', max: 1 });
      if (level >= 2) res.push({ key: 'actionsurge', label: 'Acción Adicional', max: level >= 17 ? 2 : 1 });
      break;
    }
    case 'Paladín': {
      res.push({ key: 'layonhands', label: `Imposición de Manos (reserva de ${level * 5} PG)`, max: level * 5 });
      break;
    }
    case 'Druida': {
      res.push({ key: 'wildshape', label: 'Forma Salvaje (usos/descanso corto)', max: level >= 20 ? 99 : level >= 2 ? 2 : 0 });
      break;
    }
    case 'Clérigo': {
      res.push({ key: 'channel', label: 'Canalizar Divinidad (usos)', max: level >= 6 ? 2 : level >= 2 ? 1 : 0 });
      break;
    }
    case 'Hechicero': {
      res.push({ key: 'sorcery', label: 'Puntos de Hechicería', max: level >= 2 ? level : 0 });
      break;
    }
    case 'Bardo': {
      const die = level >= 15 ? '1d12' : level >= 10 ? '1d10' : level >= 5 ? '1d8' : '1d6';
      res.push({ key: 'inspiration', label: `Inspiración Bárdica (dado ${die})`, max: 0, info: true });
      break;
    }
  }
  return res;
}

// ─── WEAPON PROPERTIES ────────────────────────────────────────────
export type DamageType = 'cortante' | 'contundente' | 'perforante'
  | 'fuego' | 'frío' | 'relámpago' | 'trueno' | 'ácido' | 'veneno'
  | 'necrótico' | 'radiante' | 'fuerza' | 'psíquico';

export type WeaponCategory = 'simple' | 'marcial';
export type WeaponRange = 'cuerpo a cuerpo' | 'a distancia';

export type WeaponProperty =
  | 'ligera' | 'pesada' | 'sutil' | 'arrojadiza' | 'versátil'
  | 'a dos manos' | 'munición' | 'alcance' | 'carga' | 'especial';

export type WeaponCatalogEntry = {
  name: string;
  category: WeaponCategory;
  range: WeaponRange;
  dice: string;
  damageType: DamageType;
  properties: WeaponProperty[];
  versatileDice?: string;
  throwRange?: string;
  ammoRange?: string;
  magical?: boolean;
};

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

// ─── ARMOR CATALOG ────────────────────────────────────────────────
export type ArmorType = 'ligera' | 'media' | 'pesada' | 'escudo';

export type ArmorCatalogEntry = {
  name: string;
  type: ArmorType;
  acBase: number;
  addDex: boolean;
  maxDex?: number;
  stealthDisadvantage: boolean;
  strRequirement?: number;
  cost: string;
};

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

// ─── TOOLS CATALOG ────────────────────────────────────────────────
export type ToolCategory = 'artesano' | 'instrumento' | 'kit' | 'juego' | 'otro';

export type ToolCatalogEntry = {
  name: string;
  category: ToolCategory;
};

export const TOOLS_CATALOG: ToolCatalogEntry[] = [
  // Herramientas de artesano
  { name: 'Herramientas de alquimista', category: 'artesano' },
  { name: 'Herramientas de herrero', category: 'artesano' },
  { name: 'Herramientas de cervecero', category: 'artesano' },
  { name: 'Herramientas de calígrafo', category: 'artesano' },
  { name: 'Herramientas de carpintero', category: 'artesano' },
  { name: 'Herramientas de cartógrafo', category: 'artesano' },
  { name: 'Herramientas de zapatero', category: 'artesano' },
  { name: 'Herramientas de cristalero', category: 'artesano' },
  { name: 'Herramientas de joyero', category: 'artesano' },
  { name: 'Herramientas de curtidor', category: 'artesano' },
  { name: 'Herramientas de albañil', category: 'artesano' },
  { name: 'Herramientas de pintor', category: 'artesano' },
  { name: 'Herramientas de alfarero', category: 'artesano' },
  { name: 'Herramientas de tintorero', category: 'artesano' },
  { name: 'Herramientas de tallador de madera', category: 'artesano' },
  { name: 'Herramientas de tejedor', category: 'artesano' },
  // Instrumentos musicales
  { name: 'Gaita', category: 'instrumento' },
  { name: 'Cuerno', category: 'instrumento' },
  { name: 'Dulcémele', category: 'instrumento' },
  { name: 'Flauta', category: 'instrumento' },
  { name: 'Flauta de pan', category: 'instrumento' },
  { name: 'Laúd', category: 'instrumento' },
  { name: 'Lira', category: 'instrumento' },
  { name: 'Tambor', category: 'instrumento' },
  { name: 'Viola', category: 'instrumento' },
  // Kits
  { name: 'Herramientas de ladrón', category: 'kit' },
  { name: 'Kit de herbolario', category: 'kit' },
  { name: 'Kit de disfraz', category: 'kit' },
  { name: 'Kit de falsificación', category: 'kit' },
  { name: 'Kit de envenenador', category: 'kit' },
  { name: 'Kit de sanador', category: 'kit' },
  { name: 'Herramientas de navegante', category: 'kit' },
  // Juegos
  { name: 'Juego de dados', category: 'juego' },
  { name: 'Juego de cartas', category: 'juego' },
  { name: 'Juego de ajedrez draconiano', category: 'juego' },
  { name: 'Juego de los Tres Dragones', category: 'juego' },
];

// ─── CANTRIPS & SPELLS ───────────────────────────────────────────
export type SpellSchool = 'abjuración' | 'conjuración' | 'adivinación' | 'encantamiento'
  | 'evocación' | 'ilusión' | 'nigromancia' | 'transmutación';

export type CantripEntry = {
  name: string;
  school: SpellSchool;
  damageType?: DamageType;
  classes: string[];
  description: string;
};

export const CANTRIPS_CATALOG: CantripEntry[] = [
  { name: 'Rayo de Fuego', school: 'evocación', damageType: 'fuego', classes: ['Mago', 'Hechicero'], description: '1d10 fuego, 36m' },
  { name: 'Rayo de Escarcha', school: 'evocación', damageType: 'frío', classes: ['Mago', 'Hechicero'], description: '1d8 frío, reduce vel. 3m' },
  { name: 'Descarga Eléctrica', school: 'evocación', damageType: 'relámpago', classes: ['Mago', 'Hechicero'], description: '1d8 relámpago, cuerpo a cuerpo' },
  { name: 'Toque Gélido', school: 'nigromancia', damageType: 'necrótico', classes: ['Mago', 'Hechicero', 'Brujo'], description: '1d8 necrótico, impide curación' },
  { name: 'Salpicadura Ácida', school: 'conjuración', damageType: 'ácido', classes: ['Mago', 'Hechicero'], description: '1d6 ácido, 2 objetivos adyacentes' },
  { name: 'Taumaturgia', school: 'transmutación', classes: ['Clérigo'], description: 'Efecto menor sobrenatural' },
  { name: 'Llama Sagrada', school: 'evocación', damageType: 'radiante', classes: ['Clérigo'], description: '1d8 radiante, sin cobertura' },
  { name: 'Palabra de Sanación', school: 'abjuración', classes: ['Clérigo'], description: 'Estabilizar criatura a 0 PG' },
  { name: 'Prestidigitación', school: 'transmutación', classes: ['Mago', 'Hechicero', 'Bardo', 'Brujo'], description: 'Truco menor mágico' },
  { name: 'Luz', school: 'evocación', classes: ['Mago', 'Clérigo', 'Hechicero', 'Bardo'], description: 'Objeto emite luz brillante' },
  { name: 'Mano de Mago', school: 'conjuración', classes: ['Mago', 'Hechicero', 'Bardo', 'Brujo'], description: 'Mano espectral manipula objetos' },
  { name: 'Mensaje', school: 'transmutación', classes: ['Mago', 'Hechicero', 'Bardo'], description: 'Susurro a distancia 36m' },
  { name: 'Trueno', school: 'evocación', damageType: 'trueno', classes: ['Mago', 'Hechicero', 'Bardo', 'Druida'], description: 'Sonido ensordecedor en cono' },
  { name: 'Burla Viciosa', school: 'encantamiento', damageType: 'psíquico', classes: ['Bardo'], description: '1d4 psíquico, desventaja' },
  { name: 'Producir Llama', school: 'conjuración', damageType: 'fuego', classes: ['Druida'], description: '1d8 fuego, luz y ataque' },
  { name: 'Druídica', school: 'transmutación', classes: ['Druida'], description: 'Efecto menor natural' },
  { name: 'Espinas', school: 'transmutación', damageType: 'perforante', classes: ['Druida'], description: '1d6 perforante, crecen espinas' },
  { name: 'Descarga Sobrecogedora', school: 'evocación', damageType: 'fuerza', classes: ['Brujo'], description: '1d10 fuerza, empuja 3m' },
  { name: 'Ilusión Menor', school: 'ilusión', classes: ['Mago', 'Hechicero', 'Bardo', 'Brujo'], description: 'Sonido o imagen ilusoria' },
  { name: 'Reparar', school: 'transmutación', classes: ['Mago', 'Clérigo', 'Druida'], description: 'Repara objeto pequeño roto' },
  { name: 'Hoja Verde', school: 'transmutación', damageType: 'fuego', classes: ['Mago', 'Hechicero', 'Brujo', 'Druida'], description: '1d8 + extra si se mueve' },
  { name: 'Golpe Certero', school: 'adivinación', classes: ['Mago', 'Hechicero', 'Bardo', 'Brujo'], description: 'Siguiente ataque con ventaja' },
];

export type SpellLv1Entry = {
  name: string;
  school: SpellSchool;
  damageType?: DamageType;
  classes: string[];
  description: string;
  ritual?: boolean;
};

export const SPELLS_LV1_CATALOG: SpellLv1Entry[] = [
  { name: 'Proyectil Mágico', school: 'evocación', damageType: 'fuerza', classes: ['Mago', 'Hechicero'], description: '3 dardos, 1d4+1 fuerza c/u, impacto seguro' },
  { name: 'Escudo', school: 'abjuración', classes: ['Mago', 'Hechicero'], description: '+5 CA hasta siguiente turno (reacción)' },
  { name: 'Detectar Magia', school: 'adivinación', classes: ['Mago', 'Clérigo', 'Bardo', 'Druida', 'Hechicero', 'Paladín', 'Explorador'], description: 'Sentir magia en 9m', ritual: true },
  { name: 'Manos Ardientes', school: 'evocación', damageType: 'fuego', classes: ['Mago', 'Hechicero'], description: '3d6 fuego en cono de 4.5m' },
  { name: 'Rayo de Brujo', school: 'evocación', damageType: 'fuerza', classes: ['Brujo'], description: '1d10 fuerza, empuja y derriba' },
  { name: 'Armadura de Mago', school: 'abjuración', classes: ['Mago', 'Hechicero'], description: 'CA base 13+DES (sin armadura)' },
  { name: 'Dormir', school: 'encantamiento', classes: ['Mago', 'Hechicero', 'Bardo'], description: '5d8 PG de criaturas caen dormidas' },
  { name: 'Curar Heridas', school: 'evocación', classes: ['Clérigo', 'Druida', 'Bardo', 'Paladín', 'Explorador'], description: '1d8+mod curación por toque' },
  { name: 'Infligir Heridas', school: 'nigromancia', damageType: 'necrótico', classes: ['Clérigo'], description: '3d10 necrótico, ataque cuerpo a cuerpo' },
  { name: 'Palabra Sanadora', school: 'evocación', classes: ['Clérigo', 'Bardo', 'Druida'], description: '1d4+mod curación a distancia (acción extra)' },
  { name: 'Bendición', school: 'encantamiento', classes: ['Clérigo', 'Paladín'], description: '+1d4 a ataques y salvaciones a 3 criaturas' },
  { name: 'Castigo Atronador', school: 'evocación', damageType: 'trueno', classes: ['Paladín'], description: '2d6 trueno extra en ataque cuerpo a cuerpo' },
  { name: 'Escudo de la Fe', school: 'abjuración', classes: ['Clérigo', 'Paladín'], description: '+2 CA a criatura (concentración)' },
  { name: 'Onda Atronadora', school: 'evocación', damageType: 'trueno', classes: ['Mago', 'Hechicero', 'Bardo', 'Druida'], description: '2d8 trueno en 4.5m cubo' },
  { name: 'Enmarañar', school: 'conjuración', classes: ['Druida', 'Explorador'], description: 'Terreno difícil y atrapamiento' },
  { name: 'Saeta Guía del Cazador', school: 'adivinación', classes: ['Explorador'], description: '1d6 extra al siguiente ataque a distancia' },
  { name: 'Hechizar Persona', school: 'encantamiento', classes: ['Mago', 'Hechicero', 'Bardo', 'Brujo', 'Druida'], description: 'Objetivo encantado te ve como amigo' },
  { name: 'Orbe Cromático', school: 'evocación', classes: ['Mago', 'Hechicero'], description: '3d8 daño de tipo elegido (ácido, frío, fuego, relámpago, veneno, trueno)' },
  { name: 'Comprensión Idiomática', school: 'adivinación', classes: ['Mago', 'Bardo', 'Hechicero', 'Brujo'], description: 'Entender cualquier idioma 1h', ritual: true },
  { name: 'Retirada Acelerada', school: 'transmutación', classes: ['Mago', 'Hechicero', 'Brujo'], description: 'Acción de Carrera como extra' },
  { name: 'Represalia Infernal', school: 'evocación', damageType: 'fuego', classes: ['Brujo'], description: '2d10 fuego como reacción al recibir daño' },
  { name: 'Favor del Cazador', school: 'adivinación', classes: ['Explorador'], description: '+1d6 daño extra a objetivo marcado' },
];

// ─── CLASS RECOMMENDATIONS ────────────────────────────────────────
export type ClassRecommendation = {
  skills: string[];
  tools: string[];
  cantrips: string[];
  spells: string[];
  weapons: string[];
  armor: string[];
  description: string;
};

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
    description: 'Sin competencia en armaduras. Conoce 3 trucos y 6 hechizos de nivel 1 en tu grimorio al inicio. Preparás INT + nivel cada día.'
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

// ─── EXPANDED ITEM TYPES ──────────────────────────────────────────
export type EquipmentItem = {
  name: string;
  qty: number;
  notes: string;
};

export type EquipmentSlot =
  | 'Torso'
  | 'Cabeza'
  | 'Manos'
  | 'Pies'
  | 'Cuello'
  | 'Anillo'
  | 'Cintura'
  | 'Espalda'
  | 'Mano Principal'
  | 'Mano Secundaria'
  | 'Accesorio';

export const EQUIPMENT_SLOTS: EquipmentSlot[] = [
  'Cabeza',
  'Torso',
  'Manos',
  'Pies',
  'Cuello',
  'Anillo',
  'Cintura',
  'Espalda',
  'Mano Principal',
  'Mano Secundaria',
  'Accesorio'
];

export type EquippedGearItem = {
  name: string;
  slot: EquipmentSlot | string;
  notes: string;
  properties: string;
  magical?: boolean;
};

export type StartingPackDef = {
  name: string;
  description: string;
  items: EquipmentItem[];
};

export const STARTING_PACKS: StartingPackDef[] = [
  {
    name: "Pack de Explorador",
    description: "Mochila, saco de dormir, kit de cocina, yesca/pedernal, 10 antorchas, 10 raciones, odre de agua, 15m de cuerda.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor de viaje" },
      { name: "Saco de dormir", qty: 1, notes: "Para descansos largos" },
      { name: "Kit de cocina", qty: 1, notes: "Cazo, cubiertos y sartén pequeña" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para encender fuego" },
      { name: "Antorcha", qty: 10, notes: "Arde durante 1 hora (luz brillante 6m)" },
      { name: "Raciones de viaje", qty: 10, notes: "1 ración por día" },
      { name: "Odre de agua", qty: 1, notes: "Lleno de agua potable" },
      { name: "Cuerda de cáñamo (15m)", qty: 1, notes: "Resistente" }
    ]
  },
  {
    name: "Pack de Mazmorreo",
    description: "Mochila, palanca, martillo, 10 pitones, 10 antorchas, yesca/pedernal, 10 raciones, odre de agua, 15m de cuerda.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor de viaje" },
      { name: "Palanca de hierro", qty: 1, notes: "Ventaja en pruebas de FUE para forzar" },
      { name: "Martillo de artesano", qty: 1, notes: "Para clavar pitones" },
      { name: "Pitones de hierro", qty: 10, notes: "Para anclaje de cuerdas" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para encender fuego" },
      { name: "Antorcha", qty: 10, notes: "Arde durante 1 hora" },
      { name: "Raciones de viaje", qty: 10, notes: "1 ración por día" },
      { name: "Odre de agua", qty: 1, notes: "Lleno de agua" },
      { name: "Cuerda de cáñamo (15m)", qty: 1, notes: "Resistente" }
    ]
  },
  {
    name: "Pack de Sacerdote",
    description: "Mochila, manta, 10 velas, yesca/pedernal, caja de limosnas, incienso (2 bloques), incensario, vestiduras, 2 raciones, odre.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor" },
      { name: "Manta de abrigo", qty: 1, notes: "Para el frío" },
      { name: "Velas", qty: 10, notes: "Luz tenue 1.5m" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para encender" },
      { name: "Bloques de incienso", qty: 2, notes: "Ritos sagrados" },
      { name: "Incensario", qty: 1, notes: "Bronce ritual" },
      { name: "Vestiduras sagradas", qty: 1, notes: "Ropa ceremonial" },
      { name: "Raciones de viaje", qty: 2, notes: "2 días de alimento" },
      { name: "Odre de agua", qty: 1, notes: "Agua bendita o potable" }
    ]
  },
  {
    name: "Pack de Diplómata",
    description: "Cofre, 2 estuches de pergaminos, ropa fina, frasco de tinta, pluma, 5 hojas de papel, perfume, cera de sellar, jabón.",
    items: [
      { name: "Cofre de madera", qty: 1, notes: "Cofre de viaje" },
      { name: "Estuche de mapas/pergaminos", qty: 2, notes: "Protege documentos" },
      { name: "Ropa fina de gala", qty: 1, notes: "Para audiencias nobiliarias" },
      { name: "Frasco de tinta", qty: 1, notes: "Tinta negra" },
      { name: "Pluma de caligrafía", qty: 1, notes: "Para escribir" },
      { name: "Hojas de papel fino", qty: 5, notes: "Documentos oficiales" },
      { name: "Frasco de perfume", qty: 1, notes: "Aroma refinado" },
      { name: "Cera para sellar", qty: 1, notes: "Sellos reales" }
    ]
  },
  {
    name: "Pack de Erudito",
    description: "Mochila, libro de estudio, frasco de tinta, pluma, 10 hojas de pergamino, bolsa de arena, cuchillo pequeño.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor" },
      { name: "Libro de estudio/apuntes", qty: 1, notes: "Grimorio o tratado" },
      { name: "Frasco de tinta", qty: 1, notes: "Tinta negra" },
      { name: "Pluma", qty: 1, notes: "Escribir" },
      { name: "Hojas de pergamino", qty: 10, notes: "Notas y mapas" },
      { name: "Bolsita de arena seca", qty: 1, notes: "Para secar tinta" },
      { name: "Cuchillo pequeño", qty: 1, notes: "Para afilar plumas" }
    ]
  }
];

export type WeaponItem = {
  name: string;
  ability: AbilityKey;
  dice: string;
  type: string; // kept for backward compat
  proficient: boolean;
  notes: string;
  category?: WeaponCategory;
  damageType?: DamageType;
  properties?: WeaponProperty[];
  magical?: boolean;
  range?: WeaponRange;
  versatileDice?: string;
};

export type SpellItem = {
  name: string;
  level: string;
  notes: string;
  damageType?: DamageType;
  school?: SpellSchool;
};

export type CompanionItem = {
  name: string;
  type: string;
  hp: number;
  notes: string;
};

export type FamiliarItem = {
  name: string;
  form: string;
  notes: string;
};

export type CharacterSheet = {
  name: string;
  race: string;
  raceChoiceA: AbilityKey;
  raceChoiceB: AbilityKey;
  background: string;
  className: string;
  subclass: string;
  subclassNotes?: string;
  level: number;
  abilities: Record<AbilityKey, number>;
  hpCur: number;
  hpMax: number;
  tempHp: number;
  ac: number;
  inspiration: boolean;
  conditions: string;
  deathSaves: { success: number; fail: number };
  hitDiceRemaining: number;
  proficientSkills: string[];
  armorProf: string[];
  weaponProf: string[];
  toolProf: string;
  languages: string;
  feats: string[];
  featsCustom: string;
  equipment: EquipmentItem[];
  equippedGear: EquippedGearItem[];
  gold: number;
  weapons: WeaponItem[];
  spellsKnown: SpellItem[];
  spellSlotsUsed: Record<string, number>;
  classResourceUsed: Record<string, number>;
  companions: CompanionItem[];
  familiars: FamiliarItem[];
  notes: string;
  // New fields
  equippedArmor?: string;
  equippedShield?: boolean;
  selectedTools: string[];
};

export function blankCharacter(): CharacterSheet {
  return {
    name: '',
    race: 'Humano',
    raceChoiceA: 'str',
    raceChoiceB: 'dex',
    background: '',
    className: 'Guerrero',
    subclass: '',
    subclassNotes: '',
    level: 1,
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    hpCur: 10,
    hpMax: 10,
    tempHp: 0,
    ac: 10,
    inspiration: false,
    conditions: '',
    deathSaves: { success: 0, fail: 0 },
    hitDiceRemaining: 1,
    proficientSkills: [],
    armorProf: [],
    weaponProf: [],
    toolProf: '',
    languages: '',
    feats: [],
    featsCustom: '',
    equipment: [],
    equippedGear: [],
    gold: 15,
    weapons: [],
    spellsKnown: [],
    spellSlotsUsed: {},
    classResourceUsed: {},
    companions: [],
    familiars: [],
    notes: '',
    equippedArmor: '',
    equippedShield: false,
    selectedTools: []
  };
}

export type JournalEntry = {
  role: 'player' | 'dm';
  text: string;
  rolls: string[];
};

export type PendingRoll = {
  text: string;
  cls?: string;
};

export type CampaignState = {
  character: CharacterSheet;
  log: JournalEntry[];
  worldMemory: string;
  started: boolean;
};

export function secureRandInt(max: number): number {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return (arr[0] % max) + 1;
}

export function rollD20({ advantage = false, disadvantage = false }: { advantage?: boolean; disadvantage?: boolean } = {}) {
  const r1 = secureRandInt(20);
  if (!advantage && !disadvantage) return { rolls: [r1], result: r1 };
  const r2 = secureRandInt(20);
  return { rolls: [r1, r2], result: advantage ? Math.max(r1, r2) : Math.min(r1, r2) };
}

export function rollFormula(formula: string) {
  const clean = formula.replace(/\s+/g, '');
  const m = clean.match(/^(\d*)d(\d+)([+-]\d+)?$/i);
  if (!m) {
    const n = parseInt(clean);
    return isNaN(n) ? null : { rolls: [], mod: 0, total: n, formula };
  }
  const n = m[1] ? parseInt(m[1]) : 1;
  const die = parseInt(m[2]);
  const mod = m[3] ? parseInt(m[3]) : 0;
  const rolls: number[] = [];
  for (let i = 0; i < n; i++) rolls.push(secureRandInt(die));
  return { rolls, mod, total: rolls.reduce((a, b) => a + b, 0) + mod, formula };
}

// ─── DAMAGE TYPE DISPLAY ──────────────────────────────────────────
export const DAMAGE_TYPE_EMOJI: Record<string, string> = {
  'cortante': '⚔️',
  'contundente': '🔨',
  'perforante': '🏹',
  'fuego': '🔥',
  'frío': '❄️',
  'relámpago': '⚡',
  'trueno': '💥',
  'ácido': '🧪',
  'veneno': '☠️',
  'necrótico': '💀',
  'radiante': '☀️',
  'fuerza': '✨',
  'psíquico': '🧠',
};

export const DAMAGE_TYPE_COLOR: Record<string, string> = {
  'cortante': '#e74c3c',
  'contundente': '#95a5a6',
  'perforante': '#27ae60',
  'fuego': '#e67e22',
  'frío': '#3498db',
  'relámpago': '#f1c40f',
  'trueno': '#8e44ad',
  'ácido': '#2ecc71',
  'veneno': '#16a085',
  'necrótico': '#2c3e50',
  'radiante': '#f39c12',
  'fuerza': '#9b59b6',
  'psíquico': '#e91e9b',
};
