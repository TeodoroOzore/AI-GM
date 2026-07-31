// ─── D&D Conditions ───────────────────────────────────────────────

import { ConditionDef } from '../types/core';

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
