// ─── Background Extras (Skills, Tools & Languages) ────────────────

export type BackgroundDef = {
  skills: string[];          // competencias de habilidades que otorga
  tools: string[];           // herramientas que otorga
  languages: string[];       // idiomas que otorga
  description: string;       // descripción mecánica clara
};

export const BACKGROUND_EXTRAS: Record<string, BackgroundDef> = {
  'Acólito': {
    skills: ['Perspicacia', 'Religión'],
    tools: [],
    languages: ['Dos idiomas adicionales (a elección)'],
    description: 'Conoces los ritos y doctrinas de tu fe. Obtienes competencia en Perspicacia y Religión, y hablas 2 idiomas adicionales a tu elección. En tu santuario puedes encontrar curación y refugio.',
  },
  'Artesano Gremial': {
    skills: ['Perspicacia', 'Persuasión'],
    tools: ['Herramientas de artesano (oficio a elección)'],
    languages: ['Un idioma adicional (a elección)'],
    description: 'Tienes un oficio y un gremio que te respaldan. Obtienes competencia en Perspicacia y Persuasión, una herramienta de artesano a elección y 1 idioma adicional. Puedes alojarte y encontrar trabajo en tu gremio.',
  },
  'Artista': {
    skills: ['Acrobacias', 'Interpretación'],
    tools: ['Instrumento musical (a elección)'],
    languages: [],
    description: 'Vives del espectáculo. Obtienes competencia en Acrobacias e Interpretación, y un instrumento musical a elección. En una ciudad puedes encontrar alojamiento gratis a cambio de una actuación.',
  },
  'Charlatán': {
    skills: ['Engaño', 'Juego de Manos'],
    tools: ['Kit de disfraz', 'Herramientas de falsificador'],
    languages: [],
    description: 'Eres un maestro del engaño y la estafa. Obtienes competencia en Engaño y Juego de Manos, más un kit de disfraz y herramientas de falsificador. Puedes crear una identidad falsa convincente.',
  },
  'Criminal': {
    skills: ['Engaño', 'Sigilo'],
    tools: ['Juego de azar (a elección)', 'Herramientas de ladrón'],
    languages: [],
    description: 'Tienes contactos en el hampa. Obtienes competencia en Engaño y Sigilo, herramientas de ladrón y un juego de azar a elección. Conoces una red de criminales que te da información y refugio.',
  },
  'Ermitaño': {
    skills: ['Medicina', 'Religión'],
    tools: ['Herborista'],
    languages: ['Un idioma adicional (a elección)'],
    description: 'Viviste en aislamiento, dedicado a la contemplación. Obtienes competencia en Medicina y Religión, un kit de herborista y 1 idioma adicional. Tienes un descubrimiento personal único que te obsesiona.',
  },
  'Forastero': {
    skills: ['Atletismo', 'Supervivencia'],
    tools: ['Instrumento musical (a elección)'],
    languages: ['Un idioma adicional (a elección)'],
    description: 'Creciste alejado de la civilización. Obtienes competencia en Atletismo y Supervivencia, un instrumento musical a elección y 1 idioma adicional. Tienes un excelente sentido de la orientación.',
  },
  'Héroe del Pueblo': {
    skills: ['Trato con Animales', 'Supervivencia'],
    tools: ['Herramientas de artesano (a elección)', 'Vehículos terrestres'],
    languages: [],
    description: 'Eres un plebeyo que hizo algo heroico. Obtienes competencia en Trato con Animales y Supervivencia, herramientas de artesano a elección y vehículos terrestres. La gente común te recibe con los brazos abiertos.',
  },
  'Marinero': {
    skills: ['Atletismo', 'Percepción'],
    tools: ['Kit de navegante', 'Vehículos acuáticos'],
    languages: [],
    description: 'Has surcado los mares. Obtienes competencia en Atletismo y Percepción, un kit de navegante y vehículos acuáticos. Puedes conseguir pasaje gratis en un barco mercante.',
  },
  'Noble': {
    skills: ['Historia', 'Persuasión'],
    tools: ['Juego de azar (a elección)'],
    languages: ['Un idioma adicional (a elección)'],
    description: 'Naciste en la cuna de la nobleza. Obtienes competencia en Historia y Persuasión, un juego de azar a elección y 1 idioma adicional. Por tu título, la gente te muestra respeto y deferencia.',
  },
  'Sabio': {
    skills: ['Arcanos', 'Historia'],
    tools: [],
    languages: ['Dos idiomas adicionales (a elección)'],
    description: 'Pasaste años estudiando la naturaleza del cosmos. Obtienes competencia en Arcanos e Historia, y hablas 2 idiomas adicionales a tu elección. Puedes responder (o saber dónde encontrar) cualquier pregunta.',
  },
  'Soldado': {
    skills: ['Atletismo', 'Intimidación'],
    tools: ['Juego de azar (a elección)', 'Vehículos terrestres'],
    languages: [],
    description: 'Has servido en un ejército. Obtienes competencia en Atletismo e Intimidación, un juego de azar a elección y vehículos terrestres. Conoces la jerarquía militar y puedes reconocer a soldados veteranos.',
  },
  'Proscrito': {
    skills: ['Engaño', 'Supervivencia'],
    tools: ['Instrumento musical (a elección)', 'Kit de envenenamiento'],
    languages: ['Un idioma adicional (a elección)'],
    description: 'Eres un fugitivo con una recompensa sobre tu cabeza. Obtienes competencia en Engaño y Supervivencia, un instrumento musical o kit de envenenamiento a elección, y 1 idioma adicional. Vives escondido de la ley.',
  },
};

// Lista ordenada de opciones de trasfondo para el selector
export const BACKGROUND_OPTIONS: string[] = Object.keys(BACKGROUND_EXTRAS);
