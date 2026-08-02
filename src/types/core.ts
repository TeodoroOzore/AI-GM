// ─── Core Game Type Definitions ─────────────────────────────────────

export type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export type AbilityDef = {
  key: AbilityKey;
  label: string;
  full: string;
};

export type Skill = {
  name: string;
  ab: AbilityKey;
};

export type RaceTraitType =
  | 'feature'
  | 'movement'
  | 'senses'
  | 'damage'
  | 'defense'
  | 'skill'
  | 'spell'
  | 'proficiency'
  | 'language'
  | 'choice';

export type RaceTrait = {
  name: string;
  description: string;
  type?: RaceTraitType;
  level?: number; // nivel mínimo para desbloquear (p.ej. Legado Infernal del Tiefling)
};

export type RaceAncestryChoice = {
  label: string;
  options: {
    name: string;
    damageType: DamageType;
    breath: string; // descripción del arma de aliento
    resistance: string; // tipo de daño al que se resiste
  }[];
};

export type RaceDef = {
  fixed?: Partial<Record<AbilityKey, number>>;
  choice?: { count: number; amount: number };
  // ── Información general ──
  description: string;
  size: string;
  speed: number; // en metros
  age: string;
  alignment: string;
  // ── Rasgos raciales ──
  languages: string[];
  darkvision?: number; // en metros
  resistances?: string[];
  armorProf?: string[];
  weaponProf?: string[];
  toolProf?: string[];
  toolChoices?: { count: number; options: string[] };
  skillProf?: string[]; // habilidades en las que se es competente
  skillChoices?: { count: number; options: string[] };
  extraLanguages?: number; // idiomas adicionales a elección
  ancestryChoices?: RaceAncestryChoice;
  traits: RaceTrait[];
};

export type ClassDef = {
  hitDie: number;
  saves: AbilityKey[];
  spellcasting: { type: 'full' | 'half' | 'pact'; ability: AbilityKey } | null;
  tabName: string;
  unlockLevel: number;
  subclasses: string[];
};

export type SubclassFeature = {
  level: number;
  title: string;
  description: string;
  type?: 'feature' | 'spell' | 'aura' | 'companion' | 'proficiency' | 'maneuver';
};

export type SubclassSpellGrant = {
  levelUnlocked: number;
  spellName: string;
  spellLevel: string;
  notes?: string;
};

export type SubclassAuraGrant = {
  levelUnlocked: number;
  name: string;
  range: string;
  description: string;
};

export type SubclassCompanionGrant = {
  name: string;
  type: string;
  description: string;
  statsSummary: string;
};

export type SubclassDetail = {
  name: string;
  className: string;
  description: string;
  coreMechanic: string;
  keyRole: string;
  proficienciesGranted?: string[];
  features: SubclassFeature[];
  spells?: SubclassSpellGrant[];
  auras?: SubclassAuraGrant[];
  companion?: SubclassCompanionGrant;
  maneuversOrAbilities?: string[];
};

export type FeatDef = {
  name: string;
  description: string;
  prerequisite?: string;
  category: 'combat' | 'magic' | 'utility' | 'defense';
  spellcasterOnly?: boolean;
  martialOnly?: boolean;
};

export type ConditionDef = {
  name: string;
  emoji: string;
  description: string;
};

export type ArmorProfType = 'Ligera' | 'Media' | 'Pesada' | 'Escudos';
export type WeaponProfType = 'Simples' | 'Marciales' | 'Arrojadizas';

export type ProficiencyBundle = {
  armor: ArmorProfType[];
  weapons: WeaponProfType[];
  tools: string[];
  languages: string[];
  skills: string[];
};

export type ClassResource = {
  key: string;
  label: string;
  max: number;
  info?: boolean;
};

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

export type ToolCategory = 'artesano' | 'instrumento' | 'kit' | 'juego' | 'otro';

export type ToolCatalogEntry = {
  name: string;
  category: ToolCategory;
};

export type SpellSchool = 'abjuración' | 'conjuración' | 'adivinación' | 'encantamiento'
  | 'evocación' | 'ilusión' | 'nigromancia' | 'transmutación';

export type CantripEntry = {
  name: string;
  school: SpellSchool;
  damageType?: DamageType;
  classes: string[];
  description: string;
};

export type SpellEntry = {
  name: string;
  level: number; // 1-9
  school: SpellSchool;
  damageType?: DamageType;
  classes: string[];
  description: string;
  ritual?: boolean;
};

/** @deprecated Usar SpellEntry en lugar de SpellLv1Entry */
export type SpellLv1Entry = SpellEntry;

export type ClassRecommendation = {
  skills: string[];
  tools: string[];
  cantrips: string[];
  spells: string[];
  weapons: string[];
  armor: string[];
  description: string;
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

export type StartingPackDef = {
  name: string;
  description: string;
  items: EquipmentItem[];
};

export type EquipmentItem = {
  name: string;
  qty: number;
  notes: string;
  category?: string;
};

export type EquippedGearItem = {
  name: string;
  slot: EquipmentSlot | string;
  notes: string;
  properties: string;
  magical?: boolean;
};

export type WeaponItem = {
  name: string;
  ability: AbilityKey;
  dice: string;
  type: string;
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

export type WarlockInvocation = {
  name: string;
  description: string;
  prerequisite?: string;
};

export type CharacterSheet = {
  name: string;
  race: string;
  raceChoiceA: AbilityKey;
  raceChoiceB: AbilityKey;
  raceExtraLanguage?: string;
  raceSkillChoices?: string[];
  raceAncestry?: string;
  raceToolChoice?: string;
  raceCantrip?: string;
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
  conditionDurations?: Record<string, number>;
  turnCounter?: number;
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
  equippedArmor?: string;
  equippedShield?: boolean;
  selectedTools: string[];
  fightingStyle?: string;
  classChoices?: Record<string, string>;
  concentratingOnSpell?: string;
  warlockInvocations?: string[];
};

export type SpellcastingLimits = {
  isSpellcaster: boolean;
  spellcastingType: 'full' | 'half' | 'pact' | 'third' | null;
  abilityKey: AbilityKey;
  abilityLabel: string;
  abilityModVal: number;
  saveDC: number;
  attackBonus: number;
  cantripsKnownMax: number;
  spellsKnownOrPreparedMax: number;
  maxSpellLevel: number;
  labelKnownOrPrepared: string;
  pactSlotLevel?: number;
  pactSlotsCount?: number;
  ritualCasting: boolean;
  ritualDescription?: string;
};

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

export type FightingStyleDef = {
  name: string;
  description: string;
  classes: string[];
};

export type BaseClassFeature = {
  level: number;
  title: string;
  description: string;
};

export type BaseClassDetail = {
  name: string;
  hitDie: string;
  primaryAbilities: string;
  saves: string[];
  description: string;
  coreGimmick: string;
  fightingStyles?: FightingStyleDef[];
  specialChoices?: {
    label: string;
    key: string;
    options: { name: string; description: string }[];
  };
  featuresTimeline: BaseClassFeature[];
};

// ─── Bestiary (Codex de Monstruos y Enemigos) ────────────────────

export type MonsterSize =
  | 'Diminuto'
  | 'Pequeño'
  | 'Mediano'
  | 'Grande'
  | 'Enorme'
  | 'Colosal';

export type MonsterType =
  | 'bestia'
  | 'humanoide'
  | 'no-muerto'
  | 'monstruosidad'
  | 'dragón'
  | 'gigante'
  | 'elemental'
  | 'demonio'
  | 'diablo'
  | 'celestial'
  | 'fey'
  | 'planta'
  | 'constructo'
  | 'aberración'
  | 'baba'
  | 'titán'
  | 'sombra';

export type MonsterAbilities = Record<'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha', number>;

export type BestiaryEntry = {
  id: string;
  name: string;
  emoji: string;
  size: MonsterSize;
  type: MonsterType;
  alignment: string;
  hp: number;          // puntos de golpe promedio
  hitDice: string;     // fórmula de dados de golpe, p. ej. '2d8+4'
  ac: number;          // clase de armadura
  acNotes?: string;    // p. ej. 'armadura natural'
  speed: string;       // p. ej. '9 m, nado 9 m'
  abilities: MonsterAbilities;
  challenge: number;   // CR (0.125 = 1/8, 0.25 = 1/4, 0.5 = 1/2, luego enteros 1–30)
  xp: number;
  resistances?: string[];
  immunities?: string[];
  vulnerabilities?: string[];
  conditionImmunities?: string[];
  senses?: string[];
  languages?: string[];
  traits?: string[];
  actions?: string[];
  weaknesses: string[];   // debilidades tácticas para el DM
  strengths: string[];    // fortalezas / tácticas destacadas
  habitat?: string;
  lore: string;           // contexto narrativo básico
};

export type BestiaryTier = {
  key: string;
  label: string;
  crRange: string;
  description: string;
  emoji: string;
};

