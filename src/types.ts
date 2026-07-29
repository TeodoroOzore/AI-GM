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

export const FEAT_CATALOG = [
  'Alerta', 'Duro de Pelar', 'Contendiente Habilidoso', 'Afortunado', 'Artillero',
  'Mago de Guerra', 'Curandero', 'Iniciado en la Magia', 'Móvil', 'Resiliente', 'Tirador Certero', 'Habilidoso'
];

export const FAMILIAR_FORMS = [
  'Gato', 'Búho', 'Rata', 'Cuervo', 'Araña', 'Serpiente venenosa',
  'Mefita de fuego', 'Rana venenosa', 'Halcón', 'Tejón', 'Pez volador', 'Pseudodragón (nivel alto)'
];

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

export type EquipmentItem = {
  name: string;
  qty: number;
  notes: string;
};

export type WeaponItem = {
  name: string;
  ability: AbilityKey;
  dice: string;
  type: string;
  proficient: boolean;
  notes: string;
};

export type SpellItem = {
  name: string;
  level: string;
  notes: string;
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
  gold: number;
  weapons: WeaponItem[];
  spellsKnown: SpellItem[];
  spellSlotsUsed: Record<string, number>;
  classResourceUsed: Record<string, number>;
  companions: CompanionItem[];
  familiars: FamiliarItem[];
  notes: string;
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
    gold: 0,
    weapons: [],
    spellsKnown: [],
    spellSlotsUsed: {},
    classResourceUsed: {},
    companions: [],
    familiars: [],
    notes: ''
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
