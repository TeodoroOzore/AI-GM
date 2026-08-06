// ─── Equipamiento por zonas del cuerpo ────────────────────────────
// Items equipables para todas las zonas: cabeza, torso, manos, piernas,
// pies, cuello, capa, capucha, anillo, cintura, morral, bandolera, etc.
// Cada item es COMPLETO y se puede equipar directamente.

import { EquipmentCatalogEntry } from '../types/core';

export const EQUIPMENT_CATALOG: EquipmentCatalogEntry[] = [
  // ═══════════ CABEZA / YELMOS ═══════════
  { name: 'Yelmo de hierro', slot: 'Cabeza', rarity: 'común', cost: '25 po', description: 'Yelmo de hierro básico que protege el cráneo.', requirements: 'Competencia en armadura media o pesada', weightKg: 2 },
  { name: 'Yelmo forjado', slot: 'Cabeza', rarity: 'poco común', cost: '150 po', description: 'Yelmo de acero de buena forja, +1 a salvaciones contra deslumbramiento.', weightKg: 2 },
  { name: 'Yelmo de la noche', slot: 'Cabeza', rarity: 'poco común', cost: '400 po', magical: true, description: 'Yelmo que otorga visión en la oscuridad a 18m.', effects: 'Visión en la oscuridad 18m', weightKg: 2 },
  { name: 'Yelmo de batalla', slot: 'Cabeza', rarity: 'raro', cost: '900 po', magical: true, description: 'Yelmo de guerra, +1 CA, ventaja contra el miedo.', effects: '+1 CA, ventaja vs miedo', weightKg: 2.5 },
  { name: 'Yelmo del Guardián', slot: 'Cabeza', rarity: 'muy raro', cost: '5000 po', magical: true, description: 'Yelmo legendario, +2 salvaciones contra encantamientos, alerta incesante.', effects: '+2 vs encantamiento, alerta', weightKg: 2.5 },
  { name: 'Corona del Rey Caído', slot: 'Cabeza', rarity: 'legendario', cost: '14000 po', magical: true, description: 'Corona del monarca perdido, +2 Carisma, ventaja en persuasión e intimidación.', effects: '+2 CAR, ventaja persuasión/intimidación', weightKg: 1 },

// ═══════════ TOCADOS / DIADEMAS (van en Cabeza) ═══════════
  { name: 'Diadema de la mente clara', slot: 'Cabeza', rarity: 'raro', cost: '1200 po', magical: true, description: 'Diadema que otorga ventaja en salvaciones contra encantamientos.', effects: 'Ventaja vs encantamiento', weightKg: 0.5 },
  { name: 'Tocado de la corona', slot: 'Cabeza', rarity: 'raro', cost: '1800 po', magical: true, description: 'Tocado ceremonial que otorga ventaja en carisma.', effects: 'Ventaja en Carisma', weightKg: 0.5 },
  { name: 'Diadema del Saber', slot: 'Cabeza', rarity: 'muy raro', cost: '4500 po', magical: true, description: 'Diadema que otorga +2 a Inteligencia mientras se lleva.', effects: 'INT +2', weightKg: 0.5 },

  // ═══════════ MANOS / GUANTELETES ═══════════
  { name: 'Guantes de herrero', slot: 'Manos', rarity: 'común', cost: '10 po', description: 'Guantes resistentes al calor para trabajar el metal.', weightKg: 1 },
  { name: 'Guanteletes de agarre', slot: 'Manos', rarity: 'poco común', cost: '300 po', magical: true, description: 'Guanteletes que otorgan ventaja en pruebas de fuerza para agarrar y trepar.', effects: 'Ventaja en FUE para agarrar/trepar', weightKg: 1.5 },
  { name: 'Guanteletes de poder', slot: 'Manos', rarity: 'raro', cost: '1500 po', magical: true, description: 'Guanteletes que otorgan +2 a tiradas de daño cuerpo a cuerpo.', effects: '+2 daño cuerpo a cuerpo', weightKg: 2 },
  { name: 'Guanteletes del Titán', slot: 'Manos', rarity: 'muy raro', cost: '7000 po', magical: true, description: 'Guanteletes de fuerza colosal, +2 a daño cuerpo a cuerpo, ventaja en pruebas de fuerza.', effects: '+2 daño, ventaja FUE', weightKg: 2.5 },

  // ═══════════ MUÑEQUERAS ═══════════
  { name: 'Muñequeras de arquero', slot: 'Muñecas', rarity: 'poco común', cost: '600 po', magical: true, description: 'Muñequeras que otorgan +2 a las tiradas de daño con arcos.', effects: '+2 daño con arcos', weightKg: 0.5 },
  { name: 'Brazales de defensa', slot: 'Muñecas', rarity: 'raro', cost: '2000 po', magical: true, description: 'Brazales que otorgan +2 a la CA cuando no llevas armadura.', effects: '+2 CA sin armadura', weightKg: 1 },
  { name: 'Muñequeras del lanzador', slot: 'Muñecas', rarity: 'raro', cost: '1800 po', magical: true, description: 'Muñequeras que permiten canalizar mejor la magia, +1 a la CD de salvación de conjuros.', effects: '+1 CD de conjuros', weightKg: 0.5 },

  // ═══════════ PIERNAS / GREBAS ═══════════
  { name: 'Grebas de viaje', slot: 'Piernas', rarity: 'común', cost: '15 po', description: 'Protectores de pierna ligeros para largas caminatas.', weightKg: 2 },
  { name: 'Grebas del velocista', slot: 'Piernas', rarity: 'raro', cost: '1400 po', magical: true, description: 'Grebas que aumentan la velocidad en 3m.', effects: '+3m velocidad', weightKg: 2 },
  { name: 'Grebas de la montaña', slot: 'Piernas', rarity: 'muy raro', cost: '4000 po', magical: true, description: 'Grebas que otorgan estabilidad, ventaja contra derribos y +3m velocidad.', effects: '+3m velocidad, ventaja vs derribo', weightKg: 2.5 },

  // ═══════════ TOBILLOS (van en Pies) ═══════════
  { name: 'Tobilleras de grulla', slot: 'Pies', rarity: 'raro', cost: '1600 po', magical: true, description: 'Tobilleras que otorgan +1 a la CA cuando no llevas armadura.', effects: '+1 CA sin armadura', weightKg: 0.5 },
  { name: 'Tobilleras del saltador', slot: 'Pies', rarity: 'muy raro', cost: '3500 po', magical: true, description: 'Tobilleras que triplican la distancia de salto.', effects: 'Salto ×3', weightKg: 0.5 },

  // ═══════════ PIES / BOTAS ═══════════
  { name: 'Botas de cuero', slot: 'Pies', rarity: 'común', cost: '8 po', description: 'Botas resistentes para viajar.', weightKg: 1 },
  { name: 'Botas del sigilo', slot: 'Pies', rarity: 'poco común', cost: '500 po', magical: true, description: 'Botas que otorgan ventaja en pruebas de sigilo.', effects: 'Ventaja en Sigilo', weightKg: 1 },
  { name: 'Botas de velocidad', slot: 'Pies', rarity: 'raro', cost: '2000 po', magical: true, description: 'Botas que aumentan la velocidad en 6m durante 10 minutos al día.', effects: 'Velocidad +6m (10 min/día)', weightKg: 1 },
  { name: 'Botas de las siete leguas', slot: 'Pies', rarity: 'muy raro', cost: '8000 po', magical: true, description: 'Botas que triplican la velocidad de viaje y permiten cruzar terreno fácilmente.', effects: 'Velocidad de viaje ×3', weightKg: 1 },

  // ═══════════ COLLAR / AMULETO / CUELGO ═══════════
  { name: 'Amuleto de la salud', slot: 'Cuello', rarity: 'raro', cost: '2000 po', magical: true, description: 'Amuleto que fija la Constitución en 19 mientras se lleva.', effects: 'CON fija en 19', weightKg: 0.2 },
  { name: 'Collar de protección', slot: 'Cuello', rarity: 'poco común', cost: '600 po', magical: true, description: 'Collar que otorga +1 a las salvaciones contra daño.', effects: '+1 salvaciones', weightKg: 0.2 },
  { name: 'Collar de lenguas', slot: 'Cuello', rarity: 'raro', cost: '1500 po', magical: true, description: 'Collar que permite comprender y hablar cualquier idioma.', effects: 'Comprende todos los idiomas', weightKg: 0.2 },
  { name: 'Amuleto de la resistencia', slot: 'Cuello', rarity: 'muy raro', cost: '5000 po', magical: true, description: 'Amuleto que otorga resistencia a un tipo de daño elegido.', effects: 'Resistencia (1 tipo de daño)', weightKg: 0.2 },
  { name: 'Amuleto del Mago de Guerra', slot: 'Cuello', rarity: 'raro', cost: '2500 po', magical: true, description: 'Amuleto que permite usarse como foco arcanista, +1 a ataques de conjuro.', effects: 'Foco arcano, +1 ataque conjuro', weightKg: 0.2 },

  // ═══════════ ANILLO ═══════════
  { name: 'Anillo de protección', slot: 'Anillo', rarity: 'raro', cost: '2000 po', magical: true, description: 'Anillo que otorga +1 a la CA y a las salvaciones.', effects: '+1 CA y +1 salvaciones', weightKg: 0.05 },
  { name: 'Anillo del nadador', slot: 'Anillo', rarity: 'poco común', cost: '500 po', magical: true, description: 'Anillo que otorga velocidad de nado y respiración bajo el agua.', effects: 'Respira y nada bajo el agua', weightKg: 0.05 },
  { name: 'Anillo de resistencia al fuego', slot: 'Anillo', rarity: 'raro', cost: '1800 po', magical: true, description: 'Anillo que da resistencia al daño de fuego.', effects: 'Resistencia al fuego', weightKg: 0.05 },
  { name: 'Anillo de saltos', slot: 'Anillo', rarity: 'poco común', cost: '800 po', magical: true, description: 'Anillo que otorga triple distancia de salto.', effects: 'Salto ×3', weightKg: 0.05 },
  { name: 'Anillo de la mente serena', slot: 'Anillo', rarity: 'raro', cost: '2200 po', magical: true, description: 'Anillo que otorga inmunidad al miedo y ventaja contra encantamientos.', effects: 'Inmune al miedo, ventaja vs encantamiento', weightKg: 0.05 },
  { name: 'Anillo del Rey Caído', slot: 'Anillo', rarity: 'legendario', cost: '15000 po', magical: true, description: 'El anillo que gobernó un reino, +2 Carisma, ventaja en persuasión e intimidación.', effects: '+2 CAR, ventaja persuasión/intimidación', weightKg: 0.05 },

  // ═══════════ CINTURA / FAJÍN ═══════════
  { name: 'Cinturón de fuerza de gigante', slot: 'Cintura', rarity: 'muy raro', cost: '9000 po', magical: true, description: 'Cinturón que fija la Fuerza en 21 mientras se lleva.', effects: 'FUE fija en 21', weightKg: 1 },
  { name: 'Cinturón de dagas', slot: 'Cintura', rarity: 'poco común', cost: '150 po', description: 'Cinturón con fundas para 6 dagas de fácil acceso.', effects: 'Almacena 6 dagas', weightKg: 0.5 },
  { name: 'Fajín del guardia', slot: 'Cintura', rarity: 'común', cost: '20 po', description: 'Fajín resistente con bolsillos para documentos.', weightKg: 0.5 },
  { name: 'Cinturón del ladrón', slot: 'Cintura', rarity: 'raro', cost: '1500 po', magical: true, description: 'Cinturón con bolsillos dimensionales que otorga +2 a pruebas de hurto.', effects: '+2 a hurto', weightKg: 0.5 },
  { name: 'Fajín del sanador', slot: 'Cintura', rarity: 'poco común', cost: '400 po', magical: true, description: 'Fajín con vendajes mágicos, una vez al día cura 2d8 PG.', effects: 'Cura 2d8 PG (1/día)', weightKg: 0.5 },

  // ═══════════ CAPA (va en Espalda) / CAPUCHA (va en Cabeza) ═══════════
  { name: 'Capa de desplazamiento', slot: 'Espalda', rarity: 'muy raro', cost: '10000 po', magical: true, description: 'Capa que crea una ilusión desplazada, desventaja a los ataques contra ti.', effects: 'Desventaja a ataques vs ti', weightKg: 2 },
  { name: 'Capa del murciélago', slot: 'Espalda', rarity: 'raro', cost: '2500 po', magical: true, description: 'Capa que permite planear y otorga ventaja en sigilo en la oscuridad.', effects: 'Planeo + sigilo en oscuridad', weightKg: 2 },
  { name: 'Capa de magia protectora', slot: 'Espalda', rarity: 'raro', cost: '3000 po', magical: true, description: 'Capa que otorga +1 a las salvaciones de Destreza.', effects: '+1 salvación DES', weightKg: 2 },
  { name: 'Capa élfica de la élite', slot: 'Espalda', rarity: 'poco común', cost: '800 po', magical: true, description: 'Capa que otorga +1 a sigilo y +1 a la destreza al ocultarse.', effects: '+1 sigilo', weightKg: 1.5 },
  { name: 'Capa del Vacío', slot: 'Espalda', rarity: 'legendario', cost: '16000 po', magical: true, description: 'Capa tejida con la esencia de la nada, desventaja a ataques contra ti, una vez al día volverse intangible 1 minuto.', effects: 'Intangible 1 min/día', weightKg: 2 },
  { name: 'Capucha del ermitaño', slot: 'Cabeza', rarity: 'común', cost: '12 po', description: 'Capucha simple que oculta el rostro en la penumbra.', effects: 'Oculta el rostro', weightKg: 0.5 },
  { name: 'Capucha de la niebla', slot: 'Cabeza', rarity: 'raro', cost: '2200 po', magical: true, description: 'Capucha que genera una niebla ligera ocultando tu identidad.', effects: 'Disfraza la identidad', weightKg: 0.5 },

  // ═══════════ ESPALDA / MUNICIONES ═══════════
  { name: 'Aljaba Infinita', slot: 'Espalda', rarity: 'poco común', cost: '300 po', magical: true, description: 'Aljaba que produce flechas mágicas ilimitadas.', effects: 'Flechas infinitas', weightKg: 1 },
  { name: 'Estandarte del valor', slot: 'Espalda', rarity: 'raro', cost: '2000 po', magical: true, description: 'Estandarte que otorga ventaja contra el miedo a ti y aliados adyacentes.', effects: 'Ventaja vs miedo (aliados)', weightKg: 2 },

  // ═══════════ MUNICIÓN Y CONSUMIBLES DE COMBATE 🏹 ═══════════
  { name: 'Flechas', slot: 'Mochila', rarity: 'común', cost: '1 po', description: 'Carcaj con 20 flechas estándar para arco.', effects: 'Munición de arco (20)', weightKg: 1 },
  { name: 'Virotes de ballesta', slot: 'Mochila', rarity: 'común', cost: '1 po', description: 'Caja con 20 virotes de madera y acero para ballesta.', effects: 'Munición de ballesta (20)', weightKg: 1.5 },
  { name: 'Balas de honda', slot: 'Mochila', rarity: 'común', cost: '4 pp', description: 'Bolsa con 20 balas de plomo para honda.', effects: 'Munición de honda (20)', weightKg: 1.5 },
  { name: 'Dardos de cerbatana', slot: 'Mochila', rarity: 'común', cost: '1 po', description: 'Funda con 10 dardos finos para cerbatana.', effects: 'Munición de cerbatana (10)', weightKg: 0.5 },
];
