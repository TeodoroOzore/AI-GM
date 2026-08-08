// ─── Classes & Spell Slots ─────────────────────────────────────────

import { ClassDef, ClassResource, AbilityKey } from '../types/core';

export const CLASSES: Record<string, ClassDef> = {
  'Bárbaro': { hitDie: 12, saves: ['str', 'con'], spellcasting: null, tabName: 'Furia e Instinto', unlockLevel: 3, subclasses: ['Senda del Berserker', 'Senda del Espíritu Primigenio', 'Senda del Dios Guerrero', 'Senda de Yggdrasil'] },
  'Bardo': { hitDie: 8, saves: ['dex', 'cha'], spellcasting: { type: 'full', ability: 'cha' }, tabName: 'Repertorio', unlockLevel: 3, subclasses: ['Escuela del Conocimiento', 'Escuela del Equilibrio', 'Escuela del Exceso', 'Escuela de la Determinación'] },
  'Clérigo': { hitDie: 8, saves: ['wis', 'cha'], spellcasting: { type: 'full', ability: 'wis' }, tabName: 'Dones Divinos', unlockLevel: 3, subclasses: ['Doctrina de la Sanación', 'Doctrina de la Punición', 'Doctrina del Control', 'Doctrina de la Misión'] },
  'Druida': { hitDie: 8, saves: ['int', 'wis'], spellcasting: { type: 'full', ability: 'wis' }, tabName: 'Cantos de la Naturaleza', unlockLevel: 3, subclasses: ['Armonía con la Tierra', 'Armonía con lo Salvaje', 'Armonía con las Corrientes', 'Armonía con el Firmamento'] },
  'Explorador': { hitDie: 10, saves: ['str', 'dex'], spellcasting: { type: 'half', ability: 'wis' }, tabName: 'Senda Salvaje', unlockLevel: 3, subclasses: ['Clan de los Cazadores', 'Clan de los Depredadores', 'Clan del Favor Místico', 'Clan de la Manada'] },
  'Guerrero': { hitDie: 10, saves: ['str', 'con'], spellcasting: null, tabName: 'Técnicas de Combate', unlockLevel: 3, subclasses: ['Estilo del Legionario', 'Estilo del Estratega', 'Estilo del Misticismo', 'Estilo del Enfoque'] },
  'Hechicero': { hitDie: 6, saves: ['con', 'cha'], spellcasting: { type: 'full', ability: 'cha' }, tabName: 'Linaje Arcano', unlockLevel: 3, subclasses: ['Herencia Primordial', 'Herencia Divina', 'Herencia Corrupta', 'Herencia Caótica'] },
  'Mago': { hitDie: 6, saves: ['int', 'wis'], spellcasting: { type: 'full', ability: 'int' }, tabName: 'Grimorio', unlockLevel: 3, subclasses: ['Estudios en Destrucción', 'Estudios en Protección', 'Estudios en Profecías', 'Estudios en la Realidad'] },
  'Monje': { hitDie: 8, saves: ['str', 'dex'], spellcasting: null, tabName: 'Disciplinas de Ki', unlockLevel: 3, subclasses: ['Filosofía del Dominio', 'Filosofía de los Secretos', 'Filosofía del Equilibrio', 'Filosofía de la Restauración'] },
  'Paladín': { hitDie: 10, saves: ['wis', 'cha'], spellcasting: { type: 'half', ability: 'cha' }, tabName: 'Juramento Sagrado', unlockLevel: 3, subclasses: ['Orden del Cruzado', 'Orden del Grifo', 'Orden de los Antepasados', 'Orden del Cuervo'] },
  'Pícaro': { hitDie: 8, saves: ['dex', 'int'], spellcasting: null, tabName: 'Trucos del Oficio', unlockLevel: 3, subclasses: ['Hermandad de los Ladrones', 'Hermandad de los Silenciadores', 'Hermandad de los Susurradores', 'Hermandad de los Segadores'] },
  'Brujo': { hitDie: 8, saves: ['wis', 'cha'], spellcasting: { type: 'pact', ability: 'cha' }, tabName: 'Pacto de Sangre', unlockLevel: 3, subclasses: ['Contrato con el Abismo', 'Contrato con las Hadas', 'Pacto con los Cielos', 'Pacto con los Horrores'] }
};

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

export function profBonus(level: number): number {
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
}

export function hpMaxFor(hitDie: number, level: number, conMod: number): number {
  const avgPerLevel = Math.floor(hitDie / 2) + 1;
  return hitDie + conMod + (level - 1) * (avgPerLevel + conMod);
}

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
      res.push({ key: 'secondwind', label: 'Segundo Aliento (rasgo de clase Guerrero, 1/descanso corto)', max: 1 });
      if (level >= 2) res.push({ key: 'actionsurge', label: 'Acción Adicional', max: level >= 17 ? 2 : 1 });
      break;
    }
    case 'Paladín': {
      res.push({ key: 'layonhands', label: `Imposición de Manos (reserva de ${level * 5} PG)`, max: level * 5 });
      if (level >= 3) res.push({ key: 'channel', label: 'Canalizar Divinidad (1 uso/descanso corto)', max: 1 });
      break;
    }
    case 'Mago': {
      res.push({ key: 'arcanerecovery', label: `Recuperación Arcana (1/descanso corto — recupera ${Math.ceil(level / 2)} niveles de espacios)`, max: 1 });
      break;
    }
    case 'Druida': {
      res.push({ key: 'wildshape', label: 'Forma Salvaje (usos/descanso corto)', max: level >= 20 ? 99 : level >= 2 ? 2 : 0 });
      break;
    }
    case 'Clérigo': {
      res.push({ key: 'channel', label: 'Canalizar Divinidad (usos/descanso corto)', max: level >= 18 ? 3 : level >= 6 ? 2 : level >= 2 ? 1 : 0 });
      break;
    }
    case 'Hechicero': {
      res.push({ key: 'sorcery', label: 'Puntos de Hechicería (descanso largo)', max: level >= 2 ? level : 0 });
      break;
    }
    case 'Bardo': {
      const die = level >= 15 ? '1d12' : level >= 10 ? '1d10' : level >= 5 ? '1d8' : '1d6';
      const restType = level >= 5 ? 'descanso corto' : 'descanso largo';
      res.push({ key: 'inspiration', label: `Inspiración Bárdica (dado ${die}, recupera en ${restType})`, max: 3 });
      break;
    }
  }
  return res;
}
