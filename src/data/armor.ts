// ─── Armor Catalog ────────────────────────────────────────────────
// Colección completa de armaduras: desde las básicas (opciones de
// inicio) hasta armaduras épicas y legendarias, incluyendo escudos
// variados y túnicas/ropajes para clases que no usan armadura
// (Mago, Hechicero, Sacerdote, etc.). Cada item es COMPLETO y se
// puede equipar directamente.

import { ArmorCatalogEntry } from '../types/core';

export const ARMOR_CATALOG: ArmorCatalogEntry[] = [
  // ═══════════ TÚNICAS Y ROPAJES (sin armadura) 🧥 ═══════════
  // Para Magos, Hechiceros, Sacerdotes y demás clases sin competencia en armaduras.
  { name: 'Túnica de aprendiz', type: 'túnica', acBase: 10, addDex: true, stealthDisadvantage: false, cost: '1 po', rarity: 'común', description: 'Una túnica sencilla de lino, apenas protege.', magical: false, weightKg: 2 },
  { name: 'Túnica de erudito', type: 'túnica', acBase: 10, addDex: true, stealthDisadvantage: false, cost: '5 po', rarity: 'común', description: 'Túnica resistente con bolsillos para libros y pergaminos.', magical: false, weightKg: 2.5 },
  { name: 'Ropajes de sacerdote', type: 'túnica', acBase: 10, addDex: true, stealthDisadvantage: false, cost: '8 po', rarity: 'común', description: 'Ropajes ceremoniales de un clérigo o sacerdote.', magical: false, weightKg: 2 },
  { name: 'Túnica del Mago Viajero', type: 'túnica', acBase: 12, addDex: true, stealthDisadvantage: false, cost: '120 po', rarity: 'poco común', magical: true, description: 'Túnica mágica con tejidos reforzados, CA 12 + DES.', weightKg: 2 },
  { name: 'Ropajes del Acólito Sagrado', type: 'túnica', acBase: 12, addDex: true, stealthDisadvantage: false, cost: '150 po', rarity: 'poco común', magical: true, description: 'Ropajes bendecidos que otorgan CA 12 + DES y ventaja contra el miedo.', weightKg: 2 },
  { name: 'Túnica de Resistencia Arcana', type: 'túnica', acBase: 13, addDex: true, stealthDisadvantage: false, cost: '800 po', rarity: 'raro', magical: true, description: 'Túnica tejida con hilos de maná, CA 13 + DES, resistencia a un tipo de daño elemental.', weightKg: 2.5 },
  { name: 'Túnica del Archimago', type: 'túnica', acBase: 13, addDex: true, stealthDisadvantage: false, cost: '6000 po', rarity: 'muy raro', magical: true, description: 'La túnica definitiva del archimago, CA 13 + DES, +1 CD de salvación de conjuros.', weightKg: 2.5 },
  { name: 'Túnica del Tejedor de Realidades', type: 'túnica', acBase: 14, addDex: true, stealthDisadvantage: false, cost: '12000 po', rarity: 'legendario', magical: true, description: 'Túnica legendaria tejida con la tela de los planos, CA 14 + DES, ventaja en salvaciones mágicas.', weightKg: 2 },

  // ═══════════ ARMADURA LIGERA 🥷 ═══════════
  { name: 'Acolchada', type: 'ligera', acBase: 11, addDex: true, stealthDisadvantage: true, cost: '5 po', rarity: 'común', description: 'Ropa acolchada que amortigua golpes.', weightKg: 4 },
  { name: 'Cuero', type: 'ligera', acBase: 11, addDex: true, stealthDisadvantage: false, cost: '10 po', rarity: 'común', description: 'Armadura de cuero endurecido.', weightKg: 5 },
  { name: 'Cuero tachonado', type: 'ligera', acBase: 12, addDex: true, stealthDisadvantage: false, cost: '45 po', rarity: 'común', description: 'Cuero reforzado con tachuelas de metal.', weightKg: 6.5 },
  // ── Ligeras con rareza ──
  { name: 'Cuero del Cazador del Bosque', type: 'ligera', acBase: 12, addDex: true, stealthDisadvantage: false, cost: '150 po', rarity: 'poco común', magical: true, description: 'Cuero curtido con esencia del bosque, CA 12 + DES, ventaja en sigilo en zonas boscosas.', weightKg: 5.5 },
  { name: 'Cuero de las Sombras', type: 'ligera', acBase: 13, addDex: true, stealthDisadvantage: false, cost: '700 po', rarity: 'raro', magical: true, description: 'Cuero negro que se funde con la oscuridad, CA 13 + DES, ventaja en sigilo.', weightKg: 5 },
  { name: 'Cuero de Dragón Primordial', type: 'ligera', acBase: 14, addDex: true, stealthDisadvantage: false, cost: '4500 po', rarity: 'muy raro', magical: true, description: 'Cuero de dragón, CA 14 + DES, resistencia al tipo de daño del dragón.', weightKg: 5 },
  { name: 'Malla del Viento Etéreo', type: 'ligera', acBase: 14, addDex: true, stealthDisadvantage: false, cost: '10000 po', rarity: 'legendario', magical: true, description: 'Armadura ligera legendaria, CA 14 + DES, desventaja a ataques contra ti.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 4.5 },

  // ═══════════ ARMADURA MEDIA 🛡️ ═══════════
  { name: 'Pieles', type: 'media', acBase: 12, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '10 po', rarity: 'común', description: 'Pieles de animales crudas.', weightKg: 6 },
  { name: 'Camisa de malla', type: 'media', acBase: 13, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '50 po', rarity: 'común', description: 'Camisa de anillas de metal.', weightKg: 9 },
  { name: 'Coraza', type: 'media', acBase: 14, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '400 po', rarity: 'común', description: 'Coraza de cuero endurecido con placas.', weightKg: 10 },
  { name: 'Cota de escamas', type: 'media', acBase: 14, addDex: true, maxDex: 2, stealthDisadvantage: true, cost: '50 po', rarity: 'común', description: 'Escamas de metal superpuestas.', weightKg: 14 },
  { name: 'Media armadura', type: 'media', acBase: 15, addDex: true, maxDex: 2, stealthDisadvantage: true, cost: '750 po', rarity: 'común', description: 'Armadura media completa.', weightKg: 11 },
  // ── Medias con rareza ──
  { name: 'Escamas de Acero Enano', type: 'media', acBase: 15, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '1200 po', rarity: 'poco común', magical: true, description: 'Escamas de acero enano con runas, CA 15 + DES (máx 2), sin penalización de sigilo.', weightKg: 12 },
  { name: 'Coraza de la Tormenta', type: 'media', acBase: 16, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '5000 po', rarity: 'muy raro', magical: true, description: 'Coraza imbuida de tormentas, CA 16 + DES (máx 2), resistencia a relámpago y trueno.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 9 },
  { name: 'Cota de Malla de Mitril', type: 'media', acBase: 16, addDex: true, maxDex: 2, stealthDisadvantage: false, cost: '8000 po', rarity: 'muy raro', magical: true, description: 'Camisa de malla de mitril, ligera y silenciosa, CA 16 + DES (máx 2).', weightKg: 4 },

  // ═══════════ ARMADURA PESADA 🦾 ═══════════
  { name: 'Cota de anillas', type: 'pesada', acBase: 14, addDex: false, stealthDisadvantage: true, cost: '30 po', rarity: 'común', description: 'Anillas de metal cosidas a una base.', weightKg: 18 },
  { name: 'Cota de malla', type: 'pesada', acBase: 16, addDex: false, stealthDisadvantage: true, strRequirement: 13, cost: '75 po', rarity: 'común', description: 'Malla completa de metal entrelazado.', weightKg: 20 },
  { name: 'Armadura de bandas', type: 'pesada', acBase: 17, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '200 po', rarity: 'común', description: 'Bandas de metal verticales.', weightKg: 21 },
  { name: 'Armadura de placas', type: 'pesada', acBase: 18, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '1500 po', rarity: 'común', description: 'Placas completas de metal pulido.', weightKg: 29 },
  // ── Pesadas con rareza ──
  { name: 'Placas de Adamantita', type: 'pesada', acBase: 19, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '8000 po', rarity: 'muy raro', magical: true, description: 'Placas forjadas con adamantita, CA 19, los críticos recibidos se vuelven golpes normales.', weightKg: 28 },
  { name: 'Placas de Escamas Dracónicas', type: 'pesada', acBase: 19, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '12000 po', rarity: 'muy raro', magical: true, description: 'Placas forjadas con escamas de dragón, CA 19, resistencia a un elemento.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 26 },
  { name: 'Coraza del Guardián Eterno', type: 'pesada', acBase: 20, addDex: false, stealthDisadvantage: false, strRequirement: 15, cost: '20000 po', rarity: 'legendario', magical: true, description: 'Armadura legendaria, CA 20, sin penalización de sigilo, resistencia a daño no mágico.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 22 },
  { name: 'Placas de Mitril Ancestral', type: 'pesada', acBase: 20, addDex: false, stealthDisadvantage: false, strRequirement: 15, cost: '25000 po', rarity: 'legendario', magical: true, description: 'La cima de la forja élfica y enana, CA 20, sin penalización de sigilo, +1 salvaciones.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 20 },

  // ═══════════ ESCUDOS ⛨ ═══════════
  { name: 'Escudo', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '10 po', rarity: 'común', description: 'Escudo estándar de madera y metal, +2 CA.', weightKg: 3 },
  { name: 'Escudo de Madera Reforzada', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '50 po', rarity: 'poco común', description: 'Escudo robusto de roble y hierro, +2 CA, +1 a salvaciones de Destreza.', weightKg: 3.5 },
  { name: 'Escudo de Torre', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: true, strRequirement: 13, cost: '300 po', rarity: 'poco común', description: 'Escudo enorme que cubre el cuerpo, +2 CA, permite cobertura tres cuartos.', weightKg: 13 },
  { name: 'Escudo de la Guardia de Hierro', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '400 po', rarity: 'poco común', magical: true, description: 'Escudo pesado de guardia, +2 CA, ventaja en salvaciones para evitar derribos y empujones.', weightKg: 4 },
  { name: 'Escudo de la Fe', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '800 po', rarity: 'raro', magical: true, description: 'Escudo bendecido, +2 CA, +2 a salvaciones de Sabiduría contra el miedo.', weightKg: 3 },
  { name: 'Escudo de Espejo', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '1500 po', rarity: 'raro', magical: true, description: 'Escudo pulido que refleja la magia, +2 CA, ventaja en salvaciones contra hechizos.', weightKg: 3 },
  { name: 'Escudo de Gorgona', type: 'escudo', acBase: 2, addDex: false, stealthDisadvantage: false, cost: '2200 po', rarity: 'raro', magical: true, description: 'Escudo esculpido con el rostro de una gorgona, +2 CA, 1/día puede petrificar brevemente a un atacante.', weightKg: 3.5 },
  { name: 'Escudo del Centinela', type: 'escudo', acBase: 3, addDex: false, stealthDisadvantage: false, cost: '6000 po', rarity: 'muy raro', magical: true, description: 'Escudo legendario que reacciona al peligro, +3 CA, puedes cubrir aliados adyacentes.', weightKg: 3 },
  { name: 'Escudo del Dragón Rojo', type: 'escudo', acBase: 3, addDex: false, stealthDisadvantage: false, cost: '8500 po', rarity: 'muy raro', magical: true, description: 'Escudo forjado con escamas de dragón, +3 CA, resistencia a daño de fuego, contraataca con 1d6 fuego.', weightKg: 4 },
  { name: 'Escudo del Rey Caído', type: 'escudo', acBase: 3, addDex: false, stealthDisadvantage: false, cost: '15000 po', rarity: 'legendario', magical: true, description: 'El escudo del monarca perdido, +3 CA, resistencia a daño mágico, inmunidad al miedo.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 3 },
  { name: 'Escudo de la Muralla Inexpugnable', type: 'escudo', acBase: 3, addDex: false, stealthDisadvantage: true, strRequirement: 15, cost: '18000 po', rarity: 'legendario', magical: true, description: 'Escudo colosal encantado, +3 CA, inmunidad a derribos, concede cobertura total a aliados detrás.', requirements: 'Item de búsqueda (ver misiones)', weightKg: 10 },
  { name: 'Brote del Árbol del Mundo', type: 'escudo', acBase: 3, addDex: false, stealthDisadvantage: false, cost: '35000 po', rarity: 'artefacto', magical: true, description: 'Escudo viviente de la naturaleza, +3 CA, regenera 2d6 PG por turno y refleja hechizos de daño.', requirements: 'Item de búsqueda épica (ver misiones)', weightKg: 2.5 },
];
