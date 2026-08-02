// ─── Spellcasting Limits & Slot Tables ────────────────────────────

import { AbilityKey, CharacterSheet, SpellcastingLimits } from '../types/core';
import { CLASSES, FULL_SLOTS, HALF_SLOTS, PACT_SLOTS, profBonus } from '../data/classes';
import { ABILITIES, abilityMod, fmtSigned } from '../data/abilities';

// FULL_SLOTS, HALF_SLOTS, PACT_SLOTS, POINTBUY_COST are now imported from '../data/classes'

function getMaxSlotLevel(slots?: number[]): number {
  if (!slots) return 1;
  for (let i = slots.length - 1; i >= 0; i--) {
    if (slots[i] > 0) return i + 1;
  }
  return 1;
}

export function getSpellcastingLimits(c: CharacterSheet): SpellcastingLimits {
  const cdef = CLASSES[c.className] || CLASSES['Guerrero'];
  const spellType = cdef.spellcasting?.type || null;

  const abKey: AbilityKey = cdef.spellcasting?.ability || (c.subclass === 'Caballero Arcano' || c.subclass === 'Embaucador Arcano' ? 'int' : 'int');
  const abVal = abilityMod(c.abilities[abKey]);
  const prof = profBonus(c.level);
  const dc = 8 + prof + abVal;
  const atk = prof + abVal;

  let cantripsMax = 0;
  let spellsMax = 0;
  let maxLvl = 1;
  let labelText = 'Conjuros Conocidos';
  let ritual = false;
  let ritualDesc = '';
  let pactLvl: number | undefined;
  let pactCnt: number | undefined;

  const lvl = c.level;

  switch (c.className) {
    case 'Mago':
      cantripsMax = lvl >= 10 ? 5 : lvl >= 4 ? 4 : 3;
      spellsMax = Math.max(1, abVal + lvl);
      labelText = 'Conjuros Preparados (Grimorio)';
      maxLvl = getMaxSlotLevel(FULL_SLOTS[lvl]);
      ritual = true;
      ritualDesc = 'Puedes lanzar cualquier conjuro con la etiqueta [Ritual] de tu grimorio sin tenerlo preparado y sin gastar espacios de conjuro (+10 minutos).';
      break;

    case 'Clérigo':
      cantripsMax = lvl >= 10 ? 5 : lvl >= 4 ? 4 : 3;
      spellsMax = Math.max(1, abVal + lvl);
      labelText = 'Dones Divinos Preparados';
      maxLvl = getMaxSlotLevel(FULL_SLOTS[lvl]);
      ritual = true;
      ritualDesc = 'Puedes lanzar cualquier conjuro preparado con la etiqueta [Ritual] sin gastar espacios de conjuro (+10 minutos).';
      break;

    case 'Druida':
      cantripsMax = lvl >= 10 ? 4 : lvl >= 4 ? 3 : 2;
      if (c.subclass === 'Círculo de la Tierra') cantripsMax += 1;
      spellsMax = Math.max(1, abVal + lvl);
      labelText = 'Cantos de la Naturaleza Preparados';
      maxLvl = getMaxSlotLevel(FULL_SLOTS[lvl]);
      ritual = true;
      ritualDesc = 'Puedes lanzar cualquier conjuro preparado con la etiqueta [Ritual] sin gastar espacios de conjuro (+10 minutos).';
      break;

    case 'Bardo':
      cantripsMax = lvl >= 10 ? 4 : lvl >= 4 ? 3 : 2;
      const bardoKnown = [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22];
      spellsMax = bardoKnown[Math.min(19, Math.max(0, lvl - 1))];
      if (c.subclass === 'Colegio del Conocimiento' && lvl >= 6) spellsMax += 2;
      labelText = 'Repertorio Conocido';
      maxLvl = getMaxSlotLevel(FULL_SLOTS[lvl]);
      ritual = true;
      ritualDesc = 'Puedes lanzar cualquier conjuro conocido de Bardo con la etiqueta [Ritual] sin gastar espacios de conjuro (+10 minutos).';
      break;

    case 'Hechicero':
      cantripsMax = lvl >= 10 ? 6 : lvl >= 4 ? 5 : 4;
      const sorcKnown = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15];
      spellsMax = sorcKnown[Math.min(19, Math.max(0, lvl - 1))];
      labelText = 'Conjuros Conocidos (Linaje)';
      maxLvl = getMaxSlotLevel(FULL_SLOTS[lvl]);
      ritual = false;
      break;

    case 'Brujo':
      cantripsMax = lvl >= 10 ? 4 : lvl >= 4 ? 3 : 2;
      const warlockKnown = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
      spellsMax = warlockKnown[Math.min(19, Math.max(0, lvl - 1))];
      labelText = 'Conjuros de Pacto Conocidos';
      pactLvl = PACT_SLOTS[lvl]?.level || 1;
      pactCnt = PACT_SLOTS[lvl]?.count || 1;
      maxLvl = pactLvl;
      ritual = c.classChoices?.['pactBoon'] === 'Pacto del Tomo';
      if (ritual) ritualDesc = 'Con el Pacto del Tomo, puedes lanzar conjuros rituales inscritos en tu Libro de Sombras.';
      break;

    case 'Paladín':
      cantripsMax = 0;
      spellsMax = Math.max(1, abVal + Math.floor(lvl / 2));
      labelText = 'Conjuros de Juramento Preparados';
      maxLvl = getMaxSlotLevel(HALF_SLOTS[lvl]);
      ritual = false;
      break;

    case 'Explorador':
      cantripsMax = 0;
      const rangerKnown = [0, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11];
      spellsMax = rangerKnown[Math.min(19, Math.max(0, lvl - 1))];
      labelText = 'Conjuros Conocidos';
      maxLvl = getMaxSlotLevel(HALF_SLOTS[lvl]);
      ritual = false;
      break;

    case 'Guerrero':
      if (c.subclass === 'Caballero Arcano' && lvl >= 3) {
        cantripsMax = lvl >= 10 ? 3 : 2;
        const ekKnown = [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13];
        spellsMax = ekKnown[Math.min(19, Math.max(0, lvl - 1))];
        maxLvl = lvl >= 19 ? 4 : lvl >= 13 ? 3 : lvl >= 7 ? 2 : 1;
        labelText = 'Conjuros Arcanos Conocidos';
      }
      break;

    case 'Pícaro':
      if (c.subclass === 'Embaucador Arcano' && lvl >= 3) {
        cantripsMax = lvl >= 10 ? 3 : 2;
        const atKnown = [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13];
        spellsMax = atKnown[Math.min(19, Math.max(0, lvl - 1))];
        maxLvl = lvl >= 19 ? 4 : lvl >= 13 ? 3 : lvl >= 7 ? 2 : 1;
        labelText = 'Trucos de Ilusión y Conjuros';
      }
      break;
  }

  const isCaster = spellType !== null || (cantripsMax > 0 || spellsMax > 0);

  return {
    isSpellcaster: isCaster,
    spellcastingType: spellType || (isCaster ? 'third' : null),
    abilityKey: abKey,
    abilityLabel: ABILITIES.find(a => a.key === abKey)?.label || 'INT',
    abilityModVal: abVal,
    saveDC: dc,
    attackBonus: atk,
    cantripsKnownMax: cantripsMax,
    spellsKnownOrPreparedMax: spellsMax,
    maxSpellLevel: maxLvl,
    labelKnownOrPrepared: labelText,
    pactSlotLevel: pactLvl,
    pactSlotsCount: pactCnt,
    ritualCasting: ritual,
    ritualDescription: ritualDesc
  };
}
