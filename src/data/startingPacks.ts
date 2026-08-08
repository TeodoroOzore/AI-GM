// ─── Starting Packs ───────────────────────────────────────────────

import { StartingPackDef, EquipmentSlot } from '../types/core';

// Zonas canónicas del cuerpo: cada zona admite UN solo objeto equipado.
// Los contenedores (morral, bandolera) y accesorios (broche) NO son zonas
// equipables — van en el inventario/accesorios.
export const EQUIPMENT_SLOTS: EquipmentSlot[] = [
  'Cabeza',
  'Cuerpo',
  'Espalda',
  'Brazos',
  'Piernas',
  'Cuello',
  'Anillo',
  'Cintura',
  'Mano Principal',
  'Mano Secundaria'
];

// Zonas extendidas para items equipables de todas las zonas del cuerpo
export const EXTENDED_EQUIPMENT_SLOTS: string[] = [
  'Cabeza', 'Cuerpo', 'Espalda', 'Brazos', 'Piernas',
  'Cuello', 'Anillo', 'Cintura',
  'Mano Principal', 'Mano Secundaria'
];


export const STARTING_PACKS: StartingPackDef[] = [
  {
    name: "Pack de Explorador",
    description: "Mochila, saco de dormir, kit de cocina, yesca/pedernal, 10 antorchas, 10 raciones, odre de agua, 15m de cuerda.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor de viaje" },
      { name: "Saco de dormir", qty: 1, notes: "Para descansos largos" },
      { name: "Kit de cocina", qty: 1, notes: "Cazo, cubiertos y sartén pequeña" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para encender fuego" },
      { name: "Antorcha", qty: 10, notes: "Arde durante 1 hora (luz brillante 6m)" },
      { name: "Raciones de viaje", qty: 10, notes: "1 ración por día" },
      { name: "Odre de agua", qty: 1, notes: "Lleno de agua potable" },
      { name: "Cuerda de cáñamo (15m)", qty: 1, notes: "Resistente" }
    ]
  },
  {
    name: "Pack de Mazmorreo",
    description: "Mochila, palanca, martillo, 10 pitones, 10 antorchas, yesca/pedernal, 10 raciones, odre de agua, 15m de cuerda.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor de viaje" },
      { name: "Palanca de hierro", qty: 1, notes: "Ventaja en pruebas de FUE para forzar" },
      { name: "Martillo de artesano", qty: 1, notes: "Para clavar pitones" },
      { name: "Pitones de hierro", qty: 10, notes: "Para anclaje de cuerdas" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para encender fuego" },
      { name: "Antorcha", qty: 10, notes: "Arde durante 1 hora" },
      { name: "Raciones de viaje", qty: 10, notes: "1 ración por día" },
      { name: "Odre de agua", qty: 1, notes: "Lleno de agua" },
      { name: "Cuerda de cáñamo (15m)", qty: 1, notes: "Resistente" }
    ]
  },
  {
    name: "Pack de Sacerdote",
    description: "Mochila, manta, 10 velas, yesca/pedernal, caja de limosnas, incienso (2 bloques), incensario, vestiduras, 2 raciones, odre.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor" },
      { name: "Manta de abrigo", qty: 1, notes: "Para el frío" },
      { name: "Velas", qty: 10, notes: "Luz tenue 1.5m" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para encender" },
      { name: "Bloques de incienso", qty: 2, notes: "Ritos sagrados" },
      { name: "Incensario", qty: 1, notes: "Bronce ritual" },
      { name: "Vestiduras sagradas", qty: 1, notes: "Ropa ceremonial" },
      { name: "Raciones de viaje", qty: 2, notes: "2 días de alimento" },
      { name: "Odre de agua", qty: 1, notes: "Agua bendita o potable" }
    ]
  },
  {
    name: "Pack de Diplómata",
    description: "Cofre, 2 estuches de pergaminos, ropa fina, frasco de tinta, pluma, 5 hojas de papel, perfume, cera de sellar, jabón.",
    items: [
      { name: "Cofre de madera", qty: 1, notes: "Cofre de viaje" },
      { name: "Estuche de mapas/pergaminos", qty: 2, notes: "Protege documentos" },
      { name: "Ropa fina de gala", qty: 1, notes: "Para audiencias nobiliarias" },
      { name: "Frasco de tinta", qty: 1, notes: "Tinta negra" },
      { name: "Pluma de caligrafía", qty: 1, notes: "Para escribir" },
      { name: "Hojas de papel fino", qty: 5, notes: "Documentos oficiales" },
      { name: "Frasco de perfume", qty: 1, notes: "Aroma refinado" },
      { name: "Cera para sellar", qty: 1, notes: "Sellos reales" }
    ]
  },
  {
    name: "Pack de Erudito",
    description: "Mochila, libro de estudio, frasco de tinta, pluma, 10 hojas de pergamino, bolsa de arena, cuchillo pequeño.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor" },
      { name: "Libro de estudio/apuntes", qty: 1, notes: "Grimorio o tratado" },
      { name: "Frasco de tinta", qty: 1, notes: "Tinta negra" },
      { name: "Pluma", qty: 1, notes: "Escribir" },
      { name: "Hojas de pergamino", qty: 10, notes: "Notas y mapas" },
      { name: "Bolsita de arena seca", qty: 1, notes: "Para secar tinta" },
      { name: "Cuchillo pequeño", qty: 1, notes: "Para afilar plumas" }
    ]
  },
  {
    name: "Pack de Artista",
    description: "Mochila, saco de dormir, 2 vestuarios de actuación, 5 velas, 5 raciones de viaje, odre de agua, espejo de acero y kit de maquillaje.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor de viaje" },
      { name: "Saco de dormir", qty: 1, notes: "Descansos largos" },
      { name: "Vestuario de actuación", qty: 2, notes: "Trajes vistosos" },
      { name: "Velas", qty: 5, notes: "Iluminación tenue" },
      { name: "Raciones de viaje", qty: 5, notes: "5 días de alimento" },
      { name: "Odre de agua", qty: 1, notes: "Agua potable" },
      { name: "Espejo pequeño de acero", qty: 1, notes: "Para retoques" },
      { name: "Kit de caracterización", qty: 1, notes: "Maquillaje y disfraces" }
    ]
  },
  {
    name: "Pack de Sombra",
    description: "Mochila, 100 abrojos, 15m de cuerda de seda, garfio de escalada, linterna sorda, 2 frascos de aceite, 5 raciones y yesca/pedernal.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor táctico" },
      { name: "Bolsa de abrojos", qty: 1, notes: "100 abrojos metálicos" },
      { name: "Cuerda de seda (15m)", qty: 1, notes: "Ligera y silenciosa" },
      { name: "Garfio de hierro", qty: 1, notes: "Para anclaje de escalada" },
      { name: "Linterna sorda", qty: 1, notes: "Dirige haz de luz con tapa" },
      { name: "Frascos de aceite", qty: 2, notes: "Combustible o lubricante" },
      { name: "Raciones de viaje", qty: 5, notes: "5 días de alimento" },
      { name: "Yesca y pedernal", qty: 1, notes: "Para fuego rápido" }
    ]
  },
  {
    name: "Pack Arcano",
    description: "Mochila, libro de apuntes/conjuros, bolsa de componentes mágicos, túnica erudita, 10 pergaminos, frasco de tinta, pluma y candelas.",
    items: [
      { name: "Mochila", qty: 1, notes: "Contenedor de pergaminos" },
      { name: "Libro de conjuros en blanco", qty: 1, notes: "Anotaciones mágicas" },
      { name: "Bolsa de componentes", qty: 1, notes: "Materiales de conjuración" },
      { name: "Túnica de estudiante arcano", qty: 1, notes: "Vestimenta académica" },
      { name: "Hojas de pergamino", qty: 10, notes: "Bocetos y pergaminos" },
      { name: "Frasco de tinta arcana", qty: 1, notes: "Tinta especial" },
      { name: "Pluma de caligrafía", qty: 1, notes: "Fina" },
      { name: "Candelas", qty: 5, notes: "Para estudio nocturno" }
    ]
  }
];
