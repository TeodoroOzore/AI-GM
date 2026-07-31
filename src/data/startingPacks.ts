// ─── Starting Packs ───────────────────────────────────────────────

import { StartingPackDef, EquipmentSlot } from '../types/core';

export const EQUIPMENT_SLOTS: EquipmentSlot[] = [
  'Cabeza',
  'Torso',
  'Manos',
  'Pies',
  'Cuello',
  'Anillo',
  'Cintura',
  'Espalda',
  'Mano Principal',
  'Mano Secundaria',
  'Accesorio'
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
  }
];
