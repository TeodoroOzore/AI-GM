import { AbilityKey, SpellSchool, DamageType, WeaponCategory, WeaponProperty, WeaponRange, ArmorType, ToolCategory, EquipmentSlot, StartingPackDef } from './core';

export type EquipmentItem = {
  name: string;
  qty: number;
  notes: string;
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
  prepared?: boolean;
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
  gender: string;
  race: string;
  raceChoiceA: AbilityKey;
  raceChoiceB: AbilityKey;
raceExtraLanguage?: string;
  extraLanguages?: string[];
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
  metamagicChoices?: string[];
  activeAuras?: string[];
  hunterMarkActive?: boolean;
  hunterMarkTarget?: string;
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


