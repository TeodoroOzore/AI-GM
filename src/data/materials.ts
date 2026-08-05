// ─── Catálogo de Materiales de Crafteo ────────────────────────────
// Metales, maderas, cueros, piedras, cristales y elementos mágicos
// que se necesitan para crear items de alta rareza.

import { MaterialDef } from '../types/core';

export const MATERIALS_CATALOG: MaterialDef[] = [
  // ═══ METALES ═══
  { id: 'hierro', name: 'Lingote de hierro', category: 'metal', rarity: 'común', value: '10 po', description: 'Metal básico para forjar armas y armaduras comunes.', uses: ['armas', 'armaduras'] },
  { id: 'acero', name: 'Lingote de acero', category: 'metal', rarity: 'común', value: '25 po', description: 'Acero templado, la base de la mayoría de los equipos de calidad.', uses: ['armas', 'armaduras'] },
  { id: 'acero_estelar', name: 'Acero estelar', category: 'metal', rarity: 'raro', value: '500 po', description: 'Aleación que cayó de los cielos; forja armas más ligeras y agudas.', uses: ['armas', 'armaduras'] },
  { id: 'mitril', name: 'Mitril', category: 'metal', rarity: 'raro', value: '800 po', description: 'Metal ligero y resistente, ideal para armaduras sin desventaja en sigilo.', uses: ['armaduras', 'armas'] },
  { id: 'adamantita', name: 'Adamantita', category: 'metal', rarity: 'muy raro', value: '2000 po', description: 'Metal casi indestructible que resiste golpes críticos.', uses: ['armaduras'] },
  { id: 'oricalco', name: 'Oricalco', category: 'metal', rarity: 'legendario', value: '5000 po', description: 'Metal primordial que canaliza magia ancestral.', uses: ['armas', 'armaduras', 'encantamientos'] },

  // ═══ MADERAS ═══
  { id: 'roble', name: 'Madera de roble', category: 'madera', rarity: 'común', value: '5 po', description: 'Madera dura y resistente para bastones y arcos sencillos.', uses: ['armas'] },
  { id: 'tejo', name: 'Madera de tejo', category: 'madera', rarity: 'común', value: '15 po', description: 'Madera flexible y elástica, ideal para arcos.', uses: ['armas'] },
  { id: 'madera_feerica', name: 'Madera feérica', category: 'madera', rarity: 'raro', value: '600 po', description: 'Madera de los planos de las hadas, imbuida de magia ligera.', uses: ['armas', 'encantamientos'] },
  { id: 'madera_viva', name: 'Madera viva de bosque antiguo', category: 'madera', rarity: 'raro', value: '700 po', description: 'Madera que aún late con vida; flexa y se regenera.', uses: ['armas', 'equipamiento'] },

  // ═══ CUEROS ═══
  { id: 'cuero_crudo', name: 'Cuero crudo', category: 'cuero', rarity: 'común', value: '8 po', description: 'Cuero sin curtir, básico para armaduras ligeras.', uses: ['armaduras'] },
  { id: 'cuero_curtido', name: 'Cuero curtido', category: 'cuero', rarity: 'común', value: '20 po', description: 'Cuero tratado y resistente, la base de la armadura ligera.', uses: ['armaduras'] },
  { id: 'cuello_dragon', name: 'Cuero de dragón', category: 'cuero', rarity: 'legendario', value: '4000 po', description: 'Escamas y cuero de dragón, increíblemente resistentes y mágicos.', uses: ['armaduras'] },
  { id: 'cuero_aboleth', name: 'Cuero de aboleth', category: 'cuero', rarity: 'muy raro', value: '2500 po', description: 'Cuero de aberración que resiste la psiquis.', uses: ['armaduras'] },

  // ═══ PIEDRAS / CRISTALES ═══
  { id: 'piedra_runa', name: 'Piedra rúnica', category: 'piedra', rarity: 'poco común', value: '100 po', description: 'Piedra plana apta para grabar runas mágicas.', uses: ['encantamientos'] },
  { id: 'cristal_arcano', name: 'Cristal arcano', category: 'cristal', rarity: 'raro', value: '900 po', description: 'Cristal que almacena energía mágica, esencial para encantar.', uses: ['encantamientos'] },
  { id: 'zafiro', name: 'Zafiro', category: 'cristal', rarity: 'raro', value: '1000 po', description: 'Gema azul que canaliza daño de frío y agua.', uses: ['encantamientos'] },
  { id: 'rubi', name: 'Rubí', category: 'cristal', rarity: 'raro', value: '1000 po', description: 'Gema roja que canaliza daño de fuego.', uses: ['encantamientos'] },
  { id: 'esmeralda', name: 'Esmeralda', category: 'cristal', rarity: 'raro', value: '1000 po', description: 'Gema verde que canaliza daño de veneno y ácido.', uses: ['encantamientos'] },

  // ═══ ELEMENTOS MÁGICOS ═══
  { id: 'esencia_fuego', name: 'Esencia de fuego primordial', category: 'elemento mágico', rarity: 'raro', value: '1500 po', description: 'Chispa atrapada de la llama elemental.', uses: ['encantamientos'] },
  { id: 'esencia_hielo', name: 'Esencia de hielo eterno', category: 'elemento mágico', rarity: 'raro', value: '1500 po', description: 'Fragmento de una tormenta de hielo primordial.', uses: ['encantamientos'] },
  { id: 'esencia_rayo', name: 'Esencia de tormenta', category: 'elemento mágico', rarity: 'raro', value: '1500 po', description: 'Relámpago atrapado en un cristal.', uses: ['encantamientos'] },
  { id: 'esencia_caos', name: 'Esencia de caos', category: 'elemento mágico', rarity: 'muy raro', value: '3000 po', description: 'Magia salvaje concentrada, poderosa e impredecible.', uses: ['encantamientos'] },

  // ═══ PARTES DE MONSTRUO ═══
  { id: 'escama_dragon', name: 'Escama de dragón', category: 'parte de monstruo', rarity: 'legendario', value: '5000 po', description: 'Escama indestructible de un dragón, base de armaduras legendarias.', uses: ['armaduras'] },
  { id: 'corazon_elemental', name: 'Corazón de elemental', category: 'parte de monstruo', rarity: 'muy raro', value: '3500 po', description: 'Núcleo palpitante de un elemental, lleno de energía pura.', uses: ['encantamientos', 'armas'] },
  { id: 'colmillo_titan', name: 'Colmillo de titán', category: 'parte de monstruo', rarity: 'legendario', value: '6000 po', description: 'Colmillo de una criatura primordial, imbuye poder bruto.', uses: ['armas'] },
  { id: 'garras_basilisco', name: 'Garras de basilisco', category: 'parte de monstruo', rarity: 'raro', value: '1200 po', description: 'Garras que pueden petrificar, usadas para veneno y afilado.', uses: ['armas', 'encantamientos'] },

  // ═══ RELICTOS ═══
  { id: 'relicto_ancestral', name: 'Relicto ancestral', category: 'relicto', rarity: 'muy raro', value: '2800 po', description: 'Fragmento de un artefacto perdido cargado de historia.', uses: ['encantamientos'] },
  { id: 'arma_rota_heroica', name: 'Arma rota de un héroe', category: 'relicto', rarity: 'raro', value: '1000 po', description: 'Hoja rota de una espada legendaria que puede re-forjarse.', uses: ['armas'] },
];
