// ─── Modificaciones / Mejoras de Objetos ──────────────────────────
// Permiten mejorar un item ya existente mediante tirada de dados (CD).
// Las armas pueden encantarse con CUALQUIER tipo de daño mágico.
// Al aplicarse, el item mejorado REEMPLAZA al original.

import { WeaponModification, ArmorModification } from '../types/core';

// ── Modificaciones de ARMAS ───────────────────────────────────────
export const WEAPON_MODS: WeaponModification[] = [
  // ── Encantamientos de daño (cualquier tipo elemental/mágico) ──
  { id: 'enc_fuego', name: 'Runa de Fuego', type: 'encantamiento de daño', damageType: 'fuego', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 13, description: 'Grabas una runa de fuego que añade 1d4 de daño de fuego al impacto.' },
  { id: 'enc_frio', name: 'Grabado de Escarcha', type: 'encantamiento de daño', damageType: 'frío', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 13, description: 'Grabas runas de hielo que añaden 1d4 de daño de frío al impacto.' },
  { id: 'enc_rayo', name: 'Filigrana Relámpago', type: 'encantamiento de daño', damageType: 'relámpago', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 13, description: 'Filigrana de cobre que añade 1d4 de daño de relámpago al impacto.' },
  { id: 'enc_trueno', name: 'Runa Sónica', type: 'encantamiento de daño', damageType: 'trueno', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 13, description: 'Runa que añade 1d4 de daño de trueno al impacto.' },
  { id: 'enc_acido', name: 'Ácido Corrosivo', type: 'encantamiento de daño', damageType: 'ácido', bonusDamage: '+1d4', toolRequired: 'Herramientas de alquimista', craftDC: 13, description: 'Recubres la hoja con un ácido mágico que añade 1d4 de daño de ácido.' },
  { id: 'enc_veneno', name: 'Esencia Venenosa', type: 'encantamiento de daño', damageType: 'veneno', bonusDamage: '+1d4', toolRequired: 'Kit de envenenador', craftDC: 13, description: 'Impregnas el arma con veneno mágico que añade 1d4 de daño de veneno.' },
  { id: 'enc_necrotico', name: 'Runa de la Muerte', type: 'encantamiento de daño', damageType: 'necrótico', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 14, description: 'Runa necrótica que añade 1d4 de daño necrótico al impacto.' },
  { id: 'enc_radiante', name: 'Luz Sagrada', type: 'encantamiento de daño', damageType: 'radiante', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 14, description: 'Símbolo sagrado que añade 1d4 de daño radiante, especialmente eficaz contra no-muertos.' },
  { id: 'enc_fuerza', name: 'Hoja de Fuerza', type: 'encantamiento de daño', damageType: 'fuerza', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 15, description: 'Runa de energía pura que añade 1d4 de daño de fuerza.' },
  { id: 'enc_psiquico', name: 'Runa Mental', type: 'encantamiento de daño', damageType: 'psíquico', bonusDamage: '+1d4', toolRequired: 'Herramientas de grabado', craftDC: 15, description: 'Runa psíquica que añade 1d4 de daño psíquico, afectando directamente la mente.' },

  // ── Encantamientos avanzados (1d6) ──
  { id: 'enc_fuego_grande', name: 'Runa de Fuego Mayor', type: 'encantamiento de daño', damageType: 'fuego', bonusDamage: '+1d6', toolRequired: 'Herramientas de grabado', craftDC: 18, description: 'La runa de fuego se intensifica, añadiendo 1d6 de daño de fuego.' },
  { id: 'enc_frio_grande', name: 'Grabado de Escarcha Mayor', type: 'encantamiento de daño', damageType: 'frío', bonusDamage: '+1d6', toolRequired: 'Herramientas de grabado', craftDC: 18, description: 'Escarcha poderosa que añade 1d6 de daño de frío.' },
  { id: 'enc_rayo_grande', name: 'Filigrana Relámpago Mayor', type: 'encantamiento de daño', damageType: 'relámpago', bonusDamage: '+1d6', toolRequired: 'Herramientas de grabado', craftDC: 18, description: 'Relámpago intenso que añade 1d6 de daño de relámpago.' },
  { id: 'enc_necrotico_grande', name: 'Runa de la Muerte Mayor', type: 'encantamiento de daño', damageType: 'necrótico', bonusDamage: '+1d6', toolRequired: 'Herramientas de grabado', craftDC: 19, description: 'Necrosis poderosa que añade 1d6 de daño necrótico.' },
  { id: 'enc_radiante_grande', name: 'Luz Sagrada Mayor', type: 'encantamiento de daño', damageType: 'radiante', bonusDamage: '+1d6', toolRequired: 'Herramientas de grabado', craftDC: 19, description: 'Luz divina que añade 1d6 de daño radiante.' },

  // ── Afilado ──
  { id: 'afilado', name: 'Afilado de Hoja', type: 'afilado', bonusDamageFlat: 1, toolRequired: 'Herramientas de herrero', craftDC: 11, description: 'Afilar la hoja en una piedra de afilar mágica otorga +1 de daño plano.' },
  { id: 'afilado_maestro', name: 'Afilado Maestro', type: 'afilado', bonusAttack: 1, bonusDamageFlat: 1, toolRequired: 'Herramientas de herrero', craftDC: 15, description: 'Un afilado experto otorga +1 a ataques y +1 a daño.' },

  // ── Aleaciones (cambian el dado de daño) ──
  { id: 'aleacion_estelar', name: 'Aleación de Acero Estelar', type: 'aleación', diceChange: 'sube un dado', toolRequired: 'Herramientas de herrero', craftDC: 17, description: 'Re-forjas el arma con acero estelar, subiendo un paso el dado de daño (p. ej. 1d6 → 1d8).' },
  { id: 'aleacion_ligera', name: 'Forja de Ligereza', type: 'ligereza', propertyAdd: 'sutil', toolRequired: 'Herramientas de herrero', craftDC: 14, description: 'Reequilibras el arma para hacerla sutil, permitiendo usar Destreza.' },

  // ── Reequilibrio ──
  { id: 'reequilibrio_precision', name: 'Reequilibrio Arcano', type: 'reequilibrio', bonusAttack: 1, toolRequired: 'Herramientas de grabado', craftDC: 16, description: 'Grabas equilibrio arcano que otorga +1 a ataques.' },
];

// ── Modificaciones de ARMADURAS ───────────────────────────────────
export const ARMOR_MODS: ArmorModification[] = [
  { id: 'ar_placas', name: 'Refuerzo de Placas', type: 'otro', acBonus: 1, toolRequired: 'Herramientas de herrero', craftDC: 15, description: 'Añades placas de refuerzo que otorgan +1 a la CA.' },
  { id: 'ar_sigilo', name: 'Forja de Sigilo', type: 'ligereza', propertyRemove: 'Desventaja en sigilo', toolRequired: 'Herramientas de herrero', craftDC: 17, description: 'Ligas la armadura con mitril para eliminar la desventaja en sigilo.' },
  { id: 'ar_res_fuego', name: 'Resistencia al Fuego', type: 'runas', resistanceAdd: 'fuego', toolRequired: 'Herramientas de grabado', craftDC: 16, description: 'Grabas runas de protección que otorgan resistencia al fuego.' },
  { id: 'ar_res_frio', name: 'Resistencia al Frío', type: 'runas', resistanceAdd: 'frío', toolRequired: 'Herramientas de grabado', craftDC: 16, description: 'Grabas runas de protección que otorgan resistencia al frío.' },
  { id: 'ar_res_rayo', name: 'Resistencia al Relámpago', type: 'runas', resistanceAdd: 'relámpago', toolRequired: 'Herramientas de grabado', craftDC: 16, description: 'Grabas runas de protección que otorgan resistencia al relámpago.' },
  { id: 'ar_res_veneno', name: 'Resistencia al Veneno', type: 'runas', resistanceAdd: 'veneno', toolRequired: 'Herramientas de grabado', craftDC: 16, description: 'Grabas runas de protección que otorgan resistencia al veneno.' },
  { id: 'ar_res_necrotico', name: 'Resistencia Necrótica', type: 'runas', resistanceAdd: 'necrótico', toolRequired: 'Herramientas de grabado', craftDC: 17, description: 'Grabas runas de protección que otorgan resistencia al daño necrótico.' },
];
