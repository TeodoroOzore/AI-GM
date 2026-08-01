// ─── Character Utility Functions ──────────────────────────────────

import { AbilityKey, CharacterSheet } from '../types/core';
import { abilityMod, fmtSigned } from '../data/abilities';
import { profBonus, hpMaxFor } from '../data/classes';

export function blankCharacter(): CharacterSheet {
  return {
    name: '',
    race: 'Humano',
    raceChoiceA: 'str',
    raceChoiceB: 'dex',
    raceExtraLanguage: '',
    raceSkillChoices: [],
    raceAncestry: '',
    raceToolChoice: '',
    raceCantrip: '',
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
    conditionDurations: {},
    turnCounter: 0,
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
    selectedTools: [],
    warlockInvocations: []
  };
}
