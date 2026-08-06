// ─── Tools Catalog ────────────────────────────────────────────────

import { ToolCatalogEntry } from '../types/core';

export const TOOLS_CATALOG: ToolCatalogEntry[] = [
  // Herramientas de artesano
  { name: 'Herramientas de alquimista', category: 'artesano', description: 'Viales de vidrio, alambique, mortero de piedra y reactivos para elaborar pociones, aceites y fuego alquímico.' },
  { name: 'Herramientas de herrero', category: 'artesano', description: 'Martillos de forja, tenazas, yunque portátil y limas para reparar o trabajar metal, cotas de malla y armas.' },
  { name: 'Herramientas de cervecero', category: 'artesano', description: 'Barriles de fermentación, lúpulo, levaduras, hidrómetros y sifones para elaborar hidromiel, cervezas y licores.' },
  { name: 'Herramientas de calígrafo', category: 'artesano', description: 'Plumas de ganso, tintas pigmentadas, pergaminos de ternera y reglas de latón para redactar documentos oficiales e iluminar manuscritos.' },
  { name: 'Herramientas de carpintero', category: 'artesano', description: 'Sierras de mano, cepillos de madera, formones, escuadras y clavos para construcciones de madera, escudos y barricadas.' },
  { name: 'Herramientas de cartógrafo', category: 'artesano', description: 'Compás de trazado, tinteros impermeables, papel fino y miras ópticas para elaborar mapas precisos de mazmorras y reinos.' },
  { name: 'Herramientas de zapatero', category: 'artesano', description: 'Cuchillas de curtidor, leznas, hilos encerados y suelas de cuero reforzado para confeccionar y reparar calzado de viaje y botas de combate.' },
  { name: 'Herramientas de cristalero', category: 'artesano', description: 'Sopladores de vidrio, tenazas térmicas, arena de sílice y moldes para fundir viales mágicos, lentes y vidrieras.' },
  { name: 'Herramientas de joyero', category: 'artesano', description: 'Lupas finas, limas diamantadas, balanzas de precisión y pinzas para tallar gemas, engarzar piedras rúnicas y forjar anillos.' },
  { name: 'Herramientas de curtidor', category: 'artesano', description: 'Cuchillos de raspado, sales de curado, aceites desengrasantes y prensas para tratar pieles salvajes y transformarlas en armaduras de cuero.' },
  { name: 'Herramientas de albañil', category: 'artesano', description: 'Paletas de hierro, plomadas, cinceles y martillos pesados para edificar fortificaciones de piedra y detectar pasajes secretos o puntos débiles en estructuras.' },
  { name: 'Herramientas de pintor', category: 'artesano', description: 'Pinceles de pelo de marta, pigmentos minerales, lienzos y aceites para crear retratos, mapas ilustrados y camuflajes artísticos.' },
  { name: 'Herramientas de alfarero', category: 'artesano', description: 'Torno portátil, arcillas especiales, espátulas y barnices para moldear vasijas, frascos herméticos y recipientes alquímicos.' },
  { name: 'Herramientas de tintorero', category: 'artesano', description: 'Cubas de tinte, mordientes vegetales, fijadores y esencias aromáticas para teñir vestimentas y capas con colores heráldicos o de sigilo.' },
  { name: 'Herramientas de tallador de madera', category: 'artesano', description: 'Gubias afiladas, formones pequeños, limas y ceras para esculpir bastones mágicos, figuras de canalización divina y empuñaduras decoradas.' },
  { name: 'Herramientas de tejedor', category: 'artesano', description: 'Agujas de telar, hilos de lino, seda y lana, lanzaderas y tijeras para confeccionar y reparar túnicas, capas y ropajes ceremoniales.' },
  { name: 'Herramientas de tallado de runas', category: 'artesano', description: 'Cinceles de plata, punzones rúnicos y reactivos mágicos para grabar runas elementales y encantamientos en armas y armaduras.' },

  // Instrumentos musicales
  { name: 'Gaita', category: 'instrumento', description: 'Instrumento de viento tradicional de fuelle de cuero que emite tonos resonantes e imponentes ideales para inspirar a las tropas en batalla.' },
  { name: 'Cuerno', category: 'instrumento', description: 'Cuerno de guerra de gran tamaño que produce bramidos profundos audibles a kilómetros para dar señales y llamar a aliados.' },
  { name: 'Dulcémele', category: 'instrumento', description: 'Instrumento de cuerdas percutidas con mazos ligeros que produce melodías cristalinas y nostálgicas en tabernas y salones.' },
  { name: 'Flauta', category: 'instrumento', description: 'Flauta dulce de madera noble o hueso pulido que emite notas agudas y virtuosas para canalizar magia bárdica o entretener a caminantes.' },
  { name: 'Flauta de pan', category: 'instrumento', description: 'Serie de tubos de caña de distintas longitudes que emiten melodías rústicas y envolventes del folclore silvano.' },
  { name: 'Laúd', category: 'instrumento', description: 'Instrumento de cuerda pulsada con caja de resonancia abombada, el clásico favorito de trovadores y bardos de leyenda.' },
  { name: 'Lira', category: 'instrumento', description: 'Instrumento de cuerdas con marco en forma de U, sagrado en rituales y poesía, capaz de calmar ánimos y canalizar encantos.' },
  { name: 'Tambor', category: 'instrumento', description: 'Tambor de madera y piel tensada que marca el ritmo marcial de la marcha, fortaleciendo el espíritu y la disciplina.' },
  { name: 'Viola', category: 'instrumento', description: 'Instrumento de arco de tono cálido y melancólico que cautiva audiencias nobles e interpreta piezas musicales elaboradas.' },

  // Kits
  { name: 'Herramientas de ladrón', category: 'kit', description: 'Ganchos de precisión, limas finas, alicates de alambre, estilete y espejo telescópico para forzar cerraduras y desactivar trampas de mazmorra.' },
  { name: 'Kit de herbolario', category: 'kit', description: 'Bolsas de recolección, tijeras de poda, frascos y manual ilustrado para identificar plantas curativas y elaborar pociones de sanación.' },
  { name: 'Kit de disfraz', category: 'kit', description: 'Cosméticos, tintes de cabello, prótesis de cera, vestimentas variadas y espejos para modificar la apariencia y suplantar identidades.' },
  { name: 'Kit de falsificación', category: 'kit', description: 'Tintas de sellado, cera de lacrar, plumas finas, pergaminos envejecidos y lupas para copiar firmas, edictos reales y pases oficiales.' },
  { name: 'Kit de envenenador', category: 'kit', description: 'Viales de cristal, extractos tóxicos, agujas de recubrimiento y tratado de ponzoñas para elaborar y neutralizar venenos de combate.' },
  { name: 'Kit de sanador', category: 'kit', description: 'Vendas de lino, antisépticos vegetales, agujas de sutura, ungüentos y férulas para estabilizar moribundos y tratar heridas de batalla.' },
  { name: 'Herramientas de navegante', category: 'kit', description: 'Sextante, astrolabio, cartas náuticas, compás estelar y catalejo para orientar navíos y expediciones en alta mar y tierras desérticas.' },

  // Juegos
  { name: 'Juego de dados', category: 'juego', description: 'Set de dados de hueso y latón tallados en estuche de cuero para juegos de azar en tabernas y apuestas de campamento.' },
  { name: 'Juego de cartas', category: 'juego', description: 'Mazo de naipes ilustrados con héroes y monstruos legendarios para partidas de póker de taberna y lectura de fortunas.' },
  { name: 'Juego de ajedrez draconiano', category: 'juego', description: 'Tablero de mármol con piezas finamente esculpidas de dragones y caballeros para medir estrategia e intelecto.' },
  { name: 'Juego de los Tres Dragones', category: 'juego', description: 'Popular juego de cartas y apuestas de estrategia con mazo temático dragontino jugado en todas las grandes ciudades del reino.' },
];
