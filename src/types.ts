// ─── Barrel Export: Re-exports everything from modular files ─────
// All components import from '../types' — this file keeps compatibility.

// Core type definitions
export type {
  AbilityKey,
  AbilityDef,
  Skill,
  RaceDef,
  BaseRaceDef,
  SubraceDef,
  RaceTrait,
  RaceTraitType,
  RaceAncestryChoice,
  ClassDef,
  SubclassFeature,
  SubclassSpellGrant,
  SubclassAuraGrant,
  SubclassCompanionGrant,
  SubclassDetail,
  FeatDef,
  ConditionDef,
  ArmorProfType,
  WeaponProfType,
  ProficiencyBundle,
  ClassResource,
  DamageType,
  WeaponCategory,
  WeaponRange,
  WeaponProperty,
WeaponCatalogEntry,
  ArmorType,
  ArmorCatalogEntry,
  ItemRarity,
  EquipmentCatalogEntry,
  MaterialCategory,
  MaterialDef,
  MaterialNeed,
  CraftingRecipe,
  ModificationType,
  WeaponModification,
  ArmorModification,
  QuestItemDef,
  JournalQuestDef,
  DiscoveredArtifactEntry,
  CraftingProgressEntry,
  CraftingProgress,
  ToolCategory,
  ToolCatalogEntry,
  SpellSchool,
  CantripEntry,
  SpellLv1Entry,
  ClassRecommendation,
  EquipmentSlot,
  StartingPackDef,
  EquipmentItem,
  EquippedGearItem,
  WeaponItem,
  SpellItem,
  CompanionItem,
  FamiliarItem,
  WarlockInvocation,
  CharacterSheet,
  SpellcastingLimits,
  JournalEntry,
  PendingRoll,
  CampaignState,
FightingStyleDef,
  BaseClassFeature,
  BaseClassDetail,
} from './types/core';

// Core functions & constants
export { BODY_ZONE_ALIASES, NON_EQUIPPABLE_SLOTS, getBodyZone } from './types/core';

// Character-specific types
export type {
  EquipmentItem as EquipmentItem2,
  EquippedGearItem as EquippedGearItem2,
  WeaponItem as WeaponItem2,
  SpellItem as SpellItem2,
  CompanionItem as CompanionItem2,
  FamiliarItem as FamiliarItem2,
  CharacterSheet as CharacterSheet2,
  JournalEntry as JournalEntry2,
  PendingRoll as PendingRoll2,
  CampaignState as CampaignState2,
} from './types/character';

// Bestiary types
export type {
  MonsterSize,
  MonsterType,
  MonsterAbilities,
  BestiaryEntry,
  BestiaryTier,
} from './types/core';

// Data constants
export { ABILITIES, SKILLS, POINTBUY_COST, abilityMod, fmtSigned, DAMAGE_TYPE_EMOJI, DAMAGE_TYPE_COLOR } from './data/abilities';
export { RACES, BASE_RACES, RACE_LANGUAGES, resolveBaseRace, getSubraceCategoryLabel } from './data/races';
export { CLASSES, FULL_SLOTS, HALF_SLOTS, PACT_SLOTS, profBonus, hpMaxFor, classResources } from './data/classes';
export { CLASS_ARMOR_PROF, CLASS_WEAPON_PROF, CLASS_TOOL_PROF } from './data/classProficiencies';
export { BACKGROUND_EXTRAS, BACKGROUND_OPTIONS } from './data/backgrounds';
export { getCharacterProficiencies, isWeaponProficient, isArmorProficient } from './data/proficiencies';
export { WEAPONS_CATALOG } from './data/weapons';
export { ARMOR_CATALOG } from './data/armor';
export { EQUIPMENT_CATALOG } from './data/equipment';
export { MATERIALS_CATALOG } from './data/materials';
export { CRAFTING_RECIPES } from './data/craftingRecipes';
export { WEAPON_MODS, ARMOR_MODS } from './data/itemMods';
export { QUEST_ITEMS } from './data/questItems';
export { EXTENDED_EQUIPMENT_SLOTS } from './data/startingPacks';
export { TOOLS_CATALOG } from './data/tools';
export { CANTRIPS_CATALOG, SPELLS_LV1_CATALOG, SPELLS_LV1, SPELLS_LV2, SPELLS_LV3, SPELLS_LV4, SPELLS_LV5, SPELLS_LV6, SPELLS_LV7, SPELLS_LV8, SPELLS_LV9, ALL_SPELLS } from './data/spells';
export { DND_CONDITIONS } from './data/conditions';
export { FEAT_CATALOG, getMaxFeatsCount } from './data/feats';
export { FAMILIAR_FORMS } from './data/familiars';
export { WARLOCK_INVOCATIONS_CATALOG, getWarlockInvocationsLimit } from './data/invocations';
export { CLASS_RECOMMENDATIONS } from './data/recommendations';
export { STARTING_PACKS, EQUIPMENT_SLOTS } from './data/startingPacks';

// Bestiary data
export {
  BESTIARY,
  BESTIARY_TIERS,
  BESTIARY_BY_TIER,
  searchBestiary,
  getBestiaryById,
  getBestiaryTypes,
  getBestiaryByChallenge,
} from './data/bestiary';
export type { BestiaryFilter } from './data/bestiary';

// Utility functions
export { secureRandInt, rollD20, rollFormula } from './utils/dice';
export { blankCharacter, resolveToolCategory, getToolCategoryLimits, getRacialSpells, getRacialResistances } from './utils/character';
export { getSpellcastingLimits } from './utils/spellcasting';
// Crafting & Forge utilities
export {
  materialName,
  getMaxMods,
  getCraftingProgress,
  gatherMaterial,
  hasAllMaterialsForRecipe,
  hasRequiredTool,
  isCraftSuccess,
  applyCraftRecipe,
  improveWeapon,
  improveArmor,
  stepUpDice,
  countWeaponMods,
  getProgressForTarget,
  isTargetCompleted,
  getRecipeMaterialStatus,
  getKnownItemNames,
  addKnownItems,
  isItemKnown,
  computeAC,
  buildWeaponItem,
} from './utils/crafting';
