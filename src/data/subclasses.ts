import { SubclassDetail } from '../types';

export interface SubclassCategoryInfo {
  singular: string;
  plural: string;
  fullName: string;
  titleWithClass: string;
  gender: 'm' | 'f';
  spellsTitle: string;
  companionTitle: string;
}

export function getSubclassCategoryInfo(className: string): SubclassCategoryInfo {
  switch (className) {
    case 'Explorador':
      return {
        singular: 'Clan',
        plural: 'Clanes',
        fullName: 'Clanes del Explorador',
        titleWithClass: 'Subclase / Clanes del Explorador',
        gender: 'm',
        spellsTitle: '🪄 Conjuros / Trucos del Clan',
        companionTitle: '🐾 Compañero / Bestia del Clan'
      };
    case 'Bárbaro':
      return {
        singular: 'Senda',
        plural: 'Sendas',
        fullName: 'Sendas del Bárbaro',
        titleWithClass: 'Subclase / Sendas del Bárbaro',
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Trucos de la Senda',
        companionTitle: '🐾 Compañero / Familiar de la Senda'
      };
    case 'Bardo':
      return {
        singular: 'Escuela',
        plural: 'Escuelas',
        fullName: 'Escuelas del Bardo',
        titleWithClass: 'Subclase / Escuelas del Bardo',
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Trucos de la Escuela',
        companionTitle: '🐾 Compañero / Familiar de la Escuela'
      };
    case 'Clérigo':
      return {
        singular: 'Doctrina',
        plural: 'Doctrinas',
        fullName: 'Doctrinas del Clérigo',
        titleWithClass: 'Subclase / Doctrinas del Clérigo',
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Dones de la Doctrina',
        companionTitle: '🐾 Compañero / Familiar de la Doctrina'
      };
    case 'Druida':
      return {
        singular: 'Armonía',
        plural: 'Armonías',
        fullName: 'Armonías del Druida',
        titleWithClass: 'Subclase / Armonías del Druida',
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Ritos de la Armonía',
        companionTitle: '🐾 Compañero / Familiar de la Armonía'
      };
    case 'Guerrero':
      return {
        singular: 'Estilo',
        plural: 'Estilos',
        fullName: 'Estilos del Guerrero',
        titleWithClass: 'Subclase / Estilos del Guerrero',
        gender: 'm',
        spellsTitle: '🪄 Conjuros / Técnicas del Estilo',
        companionTitle: '🐾 Compañero / Escudero del Estilo'
      };
    case 'Hechicero':
      return {
        singular: 'Herencia',
        plural: 'Herencias',
        fullName: 'Herencias del Hechicero',
        titleWithClass: 'Subclase / Herencias del Hechicero',
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Magias de la Herencia',
        companionTitle: '🐾 Compañero / Familiar de la Herencia'
      };
    case 'Mago':
      return {
        singular: 'Estudios',
        plural: 'Estudios',
        fullName: 'Estudios del Mago',
        titleWithClass: 'Subclase / Estudios del Mago',
        gender: 'm',
        spellsTitle: '🪄 Conjuros / Fórmulas de los Estudios',
        companionTitle: '🐾 Familiar / Constructo de los Estudios'
      };
    case 'Monje':
      return {
        singular: 'Filosofía',
        plural: 'Filosofías',
        fullName: 'Filosofías del Monje',
        titleWithClass: 'Subclase / Filosofías del Monje',
        gender: 'f',
        spellsTitle: '🪄 Técnicas / Artes de la Filosofía',
        companionTitle: '🐾 Compañero / Espíritu de la Filosofía'
      };
    case 'Paladín':
      return {
        singular: 'Orden',
        plural: 'Órdenes',
        fullName: 'Órdenes del Paladín',
        titleWithClass: 'Subclase / Órdenes del Paladín',
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Dones de la Orden',
        companionTitle: '🐾 Montura / Compañero de la Orden'
      };
    case 'Pícaro':
      return {
        singular: 'Hermandad',
        plural: 'Hermandades',
        fullName: 'Hermandades del Pícaro',
        titleWithClass: 'Subclase / Hermandades del Pícaro',
        gender: 'f',
        spellsTitle: '🪄 Trucos / Maniobras de la Hermandad',
        companionTitle: '🐾 Compañero / Informante de la Hermandad'
      };
    case 'Brujo':
      return {
        singular: 'Contrato',
        plural: 'Contratos',
        fullName: 'Contratos del Brujo',
        titleWithClass: 'Subclase / Contratos del Brujo',
        gender: 'm',
        spellsTitle: '🪄 Conjuros / Concesiones del Contrato',
        companionTitle: '🐾 Familiar / Siervo del Contrato'
      };
    default:
      return {
        singular: 'Subclase',
        plural: 'Subclases',
        fullName: `Subclases de ${className}`,
        titleWithClass: `Subclase / ${className}`,
        gender: 'f',
        spellsTitle: '🪄 Conjuros / Trucos de la Subclase',
        companionTitle: '🐾 Compañero / Familiar de la Subclase'
      };
  }
}

export const SUBCLASS_CATALOG: Record<string, SubclassDetail> = {
  // ==========================================
  // BÁRBARO (Sendas)
  // ==========================================
  'Senda del Berserker': {
    name: 'Senda del Berserker',
    className: 'Bárbaro',
    description: 'Canalizas una furia incontrolable, entregándote a la violencia pura en batalla sin importar el agotamiento o las heridas.',
    coreMechanic: 'Ataques adicionales mediante Frenesí de 5.5e e inmunidad a miedo y encanto durante tu furia.',
    keyRole: 'Daño Físico Devastador & Tanque Implacable',
    features: [
      { level: 3, title: 'Frenesí de Batalla', description: 'Al entrar en Furia, infliges 2d6 de daño adicional con tu primer impacto cuerpo a cuerpo en cada turno.', type: 'feature' },
      { level: 6, title: 'Furia Inconcebible', description: 'Inmunidad a ser encantado o asustado durante tu Furia.', type: 'feature' },
      { level: 10, title: 'Presencia Intimidadora', description: 'Aterrorizas a una criatura a 9m (salvación de Sabiduría o queda asustada).', type: 'feature' },
      { level: 14, title: 'Represalia Implacable', description: 'Cuando recibes daño de un enemigo adyacente, usas tu reacción para contraatacar.', type: 'feature' }
    ]
  },
  'Senda del Espíritu Primigenio': {
    name: 'Senda del Espíritu Primigenio',
    className: 'Bárbaro',
    description: 'Sintonizas tu alma con los espíritus bestiales de la naturaleza, obteniendo el vigor del Oso, la agilidad del Águila o la ferocidad del Lobo.',
    coreMechanic: 'Resistencia a múltiples tipos de daño y auras de apoyo táctico para tus aliados.',
    keyRole: 'Super-Tanque & Apoyo de Combate Táctico',
    proficienciesGranted: ['Hablar con Animales (Ritual)', 'Sentido Bestial (Ritual)'],
    features: [
      { level: 3, title: 'Buscador de Espíritus', description: 'Lanzas Hablar con Animales y Sentido Bestial como rituales.', type: 'spell' },
      { level: 3, title: 'Aspecto Totémico Bestial', description: 'Resistencia a todo daño excepto psíquico durante la Furia, o dar ventaja a aliados adyacentes.', type: 'feature' },
      { level: 6, title: 'Vigor de la Naturaleza', description: 'Duplica capacidad de carga y otorga ventaja en pruebas físicas de Fuerza.', type: 'feature' },
      { level: 10, title: 'Comunión Silvestre', description: 'Lanzas Comunión con la Naturaleza como ritual.', type: 'spell' },
      { level: 14, title: 'Sintonía de la Manada', description: 'Derriba enemigos o vuela temporalmente durante tu turno en Furia.', type: 'feature' }
    ]
  },
  'Senda del Dios Guerrero': {
    name: 'Senda del Dios Guerrero',
    className: 'Bárbaro',
    description: 'Imbuido por el fervor de una deidad de la contienda, te vuelves un instrumento divino imparable que desafía a la muerte.',
    coreMechanic: 'Daño radiante/necrótico adicional en furia y resurrección sin coste de componentes.',
    keyRole: 'Guerrero Santo Imparable & Ejecutor Físico',
    features: [
      { level: 3, title: 'Furia Celestial/Furia Divina', description: 'Tu primer ataque en Furia en cada turno inflige 1d6 + mitad de nivel de bárbaro de daño radiante o necrótico.', type: 'feature' },
      { level: 3, title: 'Alma del Fervor', description: 'Los conjuros para resucitarte no requieren componentes materiales.', type: 'feature' },
      { level: 6, title: 'Fanatismo Inquebrantable', description: 'Reiteras una tirada de salvación fallida una vez por Furia.', type: 'feature' },
      { level: 14, title: 'Furia del Más Allá', description: 'Estar a 0 PG no te deja inconsciente mientras tu Furia siga activa.', type: 'feature' }
    ]
  },
  'Senda de Yggdrasil': {
    name: 'Senda de Yggdrasil',
    className: 'Bárbaro',
    description: 'Canalizas las raíces vivas y la fuerza del Árbol del Mundo, extendiendo ramas espectrales para proteger y controlar el terreno.',
    coreMechanic: 'Alcance extendido con raíces mágicas, PG temporales compartidos y teletransporte a través de la madera.',
    keyRole: 'Controlador de Terreno & Protector Cosmológico',
    features: [
      { level: 3, title: 'Vitalidad de Yggdrasil', description: 'Al entrar en Furia, ganas PG temporales y aumentas el alcance de tus armas cuerpo a cuerpo en 1.5m mediante raíces luminosas.', type: 'feature' },
      { level: 6, title: 'Ramas Entrelazadas', description: 'Cuando un enemigo intenta alejarse a 9m, puedes teletransportarlo a un espacio adyacente a ti con tus raíces.', type: 'feature' },
      { level: 10, title: 'Raíces del Cosmos', description: 'Otorgas PG temporales a aliados a 9m cuando entras en Furia.', type: 'feature' },
      { level: 14, title: 'Viaje por el Gran Árbol', description: 'Puedes teletransportarte a ti y a tus aliados a través de los nodos de Yggdrasil en combate.', type: 'feature' }
    ]
  },

  // ==========================================
  // BARDO (Escuelas)
  // ==========================================
  'Escuela del Conocimiento': {
    name: 'Escuela del Conocimiento',
    className: 'Bardo',
    description: 'Eruditos y coleccionistas de secretos. Usan su ingenio mordaz para manipular el combate y aprender magia de cualquier tradición.',
    coreMechanic: 'Palabras Cortantes para restar a tiradas enemigas y Secretos Mágicos Adicionales tempranos.',
    keyRole: 'Saboteador, Apoyo Versátil & Lanzador Adaptable',
    proficienciesGranted: ['3 Competencias en Habilidades'],
    features: [
      { level: 3, title: 'Competencias Adicionales', description: 'Ganas competencia en 3 habilidades a elección.', type: 'proficiency' },
      { level: 3, title: 'Palabras Cortantes', description: 'Resta tu dado de Inspiración Bárdica a tiradas de ataque, habilidad o daño de enemigos a 18m.', type: 'feature' },
      { level: 6, title: 'Secretos Mágicos Adicionales', description: 'Aprendes 2 conjuros cualesquiera de cualquier clase.', type: 'spell' },
      { level: 14, title: 'Habilidad Insuperable', description: 'Suma tu dado de Inspiración Bárdica a tus propias pruebas de habilidad.', type: 'feature' }
    ]
  },
  'Escuela del Equilibrio': {
    name: 'Escuela del Equilibrio',
    className: 'Bardo',
    description: 'Canalizan la armonía del movimiento corporal y la danza mística para esquivar ataques y guiar los pasos de sus aliados.',
    coreMechanic: 'Danza ágil que aumenta la velocidad, otorga ataques sin armas perfeccionados y movilidad fluida.',
    keyRole: 'Bardo Ágil & Movilidad de Grupo',
    features: [
      { level: 3, title: 'Danza Armónica', description: 'Al lanzar un conjuro o usar Inspiración Bárdica, puedes moverte la mitad de tu velocidad sin provocar ataques de oportunidad.', type: 'feature' },
      { level: 3, title: 'Artes del Movimiento', description: 'Tus ataques sin armas usan Carisma o Destreza y causan daño igual a tu dado de Inspiración Bárdica.', type: 'feature' },
      { level: 6, title: 'Paso Coordinado', description: 'Permites a un aliado mover su velocidad como reacción cuando usas tu danza.', type: 'feature' },
      { level: 14, title: 'Evasión Perfecta del Equilibrio', description: 'Ganas Evasión para no recibir daño en salvaciones de Destreza exitosas.', type: 'feature' }
    ]
  },
  'Escuela del Exceso': {
    name: 'Escuela del Exceso',
    className: 'Bardo',
    description: 'Tejida con la magia cautivadora del Reino Feérico, dominas el campo de batalla con belleza deslumbrante y Manto de Inspiración.',
    coreMechanic: 'Manto de Inspiración para otorgar PG temporales y reposicionar aliados instantáneamente.',
    keyRole: 'Control de Masas & Movilidad de Aliados',
    features: [
      { level: 3, title: 'Manto de Inspiración', description: 'Gastá 1 Inspiración para dar PG temporales a aliados a 18m y permitirles mover su velocidad de inmediato.', type: 'feature' },
      { level: 3, title: 'Presencia Cautivadora', description: 'Fascina a espectadores tras 1 minuto de actuación.', type: 'feature' },
      { level: 6, title: 'Manto de Majestad', description: 'Lanzas el conjuro Orden como acción bonus durante 1 minuto sin gastar espacios.', type: 'spell' },
      { level: 14, title: 'Majestad Inquebrantable', description: 'Los enemigos que intenten atacarte deben superar salvación de Carisma o perder su ataque.', type: 'feature' }
    ]
  },
  'Escuela de la Determinación': {
    name: 'Escuela de la Determinación',
    className: 'Bardo',
    description: 'Cantan las proezas de grandes héroes e inspiran a sus compañeros en primera línea sosteniendo armas y armadura marcial.',
    coreMechanic: 'Inspiración aplicable a la Clase de Armadura o daño, armadura media y ataque extra.',
    keyRole: 'Bardo Marcial de Primera Línea',
    proficienciesGranted: ['Armaduras Medias', 'Escudos', 'Armas Marciales'],
    features: [
      { level: 3, title: 'Competencias Marciales', description: 'Competencia en Armaduras Medias, Escudos y Armas Marciales.', type: 'proficiency' },
      { level: 3, title: 'Inspiración de Combate', description: 'El aliado suma tu dado de Inspiración al daño o a su CA como reacción.', type: 'feature' },
      { level: 6, title: 'Ataque Extra', description: 'Atacas dos veces al usar la acción de Atacar.', type: 'feature' },
      { level: 14, title: 'Magia Marcial', description: 'Tras lanzar un conjuro de Bardo, haces un ataque con arma como acción bonus.', type: 'feature' }
    ]
  },

  // ==========================================
  // CLÉRIGO (Doctrinas)
  // ==========================================
  'Doctrina de la Sanación': {
    name: 'Doctrina de la Sanación',
    className: 'Clérigo',
    description: 'Promueve la vitalidad, la curación y la preservación de las almas contra la muerte y la podredumbre.',
    coreMechanic: 'Curación potenciada y Canalizar Divinidad para sanar masivamente.',
    keyRole: 'Curador Supremo & Soporte Vital',
    proficienciesGranted: ['Armaduras Pesadas'],
    spells: [
      { levelUnlocked: 1, spellName: 'Bendecir', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Curar Heridas', spellLevel: '1', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Discípulo de la Vida', description: 'Tus conjuros de curación sanan +2 + nivel de conjuro adicionales.', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Preservar Vida', description: 'Cura PG repartidos entre aliados a 9m por un total de 5 x Nivel.', type: 'feature' },
      { level: 6, title: 'Curación Bendita', description: 'Te curas a ti mismo al sanar a otros.', type: 'feature' },
      { level: 8, title: 'Golpe Divino / Conjuro Potente', description: 'Suma daño radiante a tus ataques o trucos.', type: 'feature' }
    ]
  },
  'Doctrina de la Punición': {
    name: 'Doctrina de la Punición',
    className: 'Clérigo',
    description: 'Erradica las tinieblas a través de llamas sagradas, destellos protectores y fuego purificador.',
    coreMechanic: 'Destello Protector para imponer desventaja a los enemigos y daño de Fuego/Radiante masivo en área.',
    keyRole: 'Evocador Sagrado & Destrucción Radiante',
    spells: [
      { levelUnlocked: 1, spellName: 'Manos Ardientes', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Fuego Feérico', spellLevel: '1', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Truco de Luz Gratuito', description: 'Aprendes el truco Luz.', type: 'spell' },
      { level: 1, title: 'Destello Protector', description: 'Impones desventaja al ataque de un enemigo a 9m como reacción.', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Radiancia del Sol', description: 'Inflige 2d10 + Nivel daño radiante en área de 9m y disipa oscuridad.', type: 'feature' },
      { level: 6, title: 'Destello Mejorado', description: 'Proteges aliados con tu Destello Protector.', type: 'feature' }
    ]
  },
  'Doctrina del Control': {
    name: 'Doctrina del Control',
    className: 'Clérigo',
    description: 'Especialistas en ilusión, engaño y manipulación del campo de batalla para desorientar a los rivales.',
    coreMechanic: 'Duplicado ilusorio con Canalizar Divinidad e invisibilidad táctica.',
    keyRole: 'Infiltrado Arcano & Engaño Táctico',
    spells: [
      { levelUnlocked: 1, spellName: 'Disfrazarse', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Fuerza Ilusoria', spellLevel: '1', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Bendición del Engañador', description: 'Otorga ventaja en pruebas de Sigilo a un aliado.', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Duplicado Ilusorio', description: 'Creas un duplicado perfecto de ti mismo que puedes mover e invocar conjuros desde su posición.', type: 'feature' },
      { level: 6, title: 'Manto de Sombras', description: 'Te vuelves invisible como acción hasta el final de tu siguiente turno.', type: 'feature' }
    ]
  },
  'Doctrina de la Misión': {
    name: 'Doctrina de la Misión',
    className: 'Clérigo',
    description: 'Veneran el combate honorable, la fuerza armada y la dirección de la batalla.',
    coreMechanic: 'Ataques adicionales como acción bonus y Golpe Guiado (+10 al ataque).',
    keyRole: 'Clérigo de Batalla de Vanguardia',
    proficienciesGranted: ['Armaduras Pesadas', 'Armas Marciales'],
    spells: [
      { levelUnlocked: 1, spellName: 'Escudo de Fe', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Favor Divino', spellLevel: '1', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Sacerdote de Batalla', description: 'Ataque con arma adicional como acción bonus (usos = Mod SAB por descanso largo).', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Golpe Guiado', description: 'Sumas +10 a una tirada de ataque propia.', type: 'feature' },
      { level: 6, title: 'Bendición del Comandante', description: 'Otorgas +10 a la tirada de ataque de un aliado a 9m.', type: 'feature' }
    ]
  },

  // ==========================================
  // DRUIDA (Armonías)
  // ==========================================
  'Armonía con la Tierra': {
    name: 'Armonía con la Tierra',
    className: 'Druida',
    description: 'Guardianes de los paisajes salvajes, enfocados en la magia terrenal y recuperación arcana.',
    coreMechanic: 'Recuperación de espacios de conjuro en descanso corto y hechizos adicionales según bioma.',
    keyRole: 'Lanzador de Conjuros de Control Terrenal',
    features: [
      { level: 2, title: 'Recuperación Natural', description: 'Recuperas espacios de conjuro gastados durante un descanso corto.', type: 'feature' },
      { level: 6, title: 'Paso por la Naturaleza', description: 'Moverte por terreno difícil no consumirá movimiento extra.', type: 'feature' }
    ]
  },
  'Armonía con lo Salvaje': {
    name: 'Armonía con lo Salvaje',
    className: 'Druida',
    description: 'Especialistas en la Forma Salvaje, capaces de transformarse en bestias feroces y gigantescas como acción bonus.',
    coreMechanic: 'Forma Salvaje Combativa como acción bonus con Criaturas de mayor Valor de Desafío.',
    keyRole: 'Tanque Bestial & Cazador de Vanguardia',
    features: [
      { level: 2, title: 'Forma Salvaje de Combate', description: 'Te transformas en Forma Salvaje como acción bonus.', type: 'feature' },
      { level: 6, title: 'Golpes Salvajes', description: 'Tus ataques en Forma Salvaje se consideran mágicos.', type: 'feature' }
    ]
  },
  'Armonía con las Corrientes': {
    name: 'Armonía con las Corrientes',
    className: 'Druida',
    description: 'Sintonizados con los océanos, ríos y tormentas acuáticas, controlando olas y nieblas heladas.',
    coreMechanic: 'Navegación fluida, respiración acuática y ráfagas de agua de empuje.',
    keyRole: 'Control de Masas de Agua & Daño de Frío/Rayo',
    features: [
      { level: 2, title: 'Embate de las Olas', description: 'Desatas una ráfaga de agua como acción bonus que empuja a enemigos a 4.5m o los derriba.', type: 'feature' },
      { level: 6, title: 'Forma Acuática Fluidificada', description: 'Respiración acuática permanente y velocidad de nado.', type: 'feature' }
    ]
  },
  'Armonía con el Firmamento': {
    name: 'Armonía con el Firmamento',
    className: 'Druida',
    description: 'Canalizan la luz de las constelaciones en Formas Estelares (Arquero, Cáliz, Dragón).',
    coreMechanic: 'Forma Estelar para lanzar disparos radiantes, potencia de curación o concentración inquebrantable.',
    keyRole: 'Soporte Radiante & Francotirador Mágico',
    features: [
      { level: 2, title: 'Forma Estelar', description: 'Adoptas la Forma Estelar (Arquero: disparo radiante bonus 1d8+Mod; Cáliz: curación extra; Dragón: mínimo 10 en concentración).', type: 'feature' },
      { level: 6, title: 'Presagio Cósmico', description: 'Lanzas 1d6 al inicio del día para sumar o restar a tiradas de aliados/enemigos.', type: 'feature' }
    ]
  },

  // ==========================================
  // GUERRERO (Estilos de Combate)
  // ==========================================
  'Estilo del Legionario': {
    name: 'Estilo del Legionario',
    className: 'Guerrero',
    description: 'Especialista en la maestría física pura, perfeccionando impactos críticos e incansable atletismo.',
    coreMechanic: 'Critico Mejorado (19-20) y Atletismo Extraordinario.',
    keyRole: 'Daño Físico Consistente & Tanque Marcial',
    features: [
      { level: 3, title: 'Crítico Mejorado', description: 'Tus ataques con arma logran impacto crítico con un resultado de 19 o 20 en el d20.', type: 'feature' },
      { level: 7, title: 'Atleta Insuperable', description: 'Sumas la mitad de tu bonificador de competencia a pruebas físicas y aumenta tu salto.', type: 'feature' },
      { level: 10, title: 'Estilo de Combate Adicional', description: 'Obtienes un segundo Estilo de Combate.', type: 'feature' }
    ]
  },
  'Estilo del Estratega': {
    name: 'Estilo del Estratega',
    className: 'Guerrero',
    description: 'Táctico consumado que usa Maniobras de Combate y Dados de Superioridad para dirigir la batalla.',
    coreMechanic: 'Maniobras tácticas (Empujar, Desarmar, Finta, Comandar) impulsadas por Dados de Superioridad (d8).',
    keyRole: 'Líder Táctico & Control de Combate Cuerpo a Cuerpo',
    features: [
      { level: 3, title: 'Maniobras de Superioridad', description: 'Aprendes 3 Maniobras y ganas 4 Dados de Superioridad (d8) que se recuperan en descanso corto.', type: 'feature' },
      { level: 7, title: 'Estudiar al Enemigo', description: 'Comparas tus capacidades de Fuerza/CA/Vida con las del rival tras 1 minuto.', type: 'feature' }
    ]
  },
  'Estilo del Misticismo': {
    name: 'Estilo del Misticismo',
    className: 'Guerrero',
    description: 'Combina el arte de la espada con la magia arcana de Evocación y Abjuración.',
    coreMechanic: 'Lanzamiento de conjuros de Mago, Vínculo con Armas y magia de combate.',
    keyRole: 'Tanque Mágico & Guerrero Arcano',
    features: [
      { level: 3, title: 'Lanzamiento de Conjuros Arcanos', description: 'Aprendes trucos y conjuros de Mago (Inteligencia es tu aptitud mágica).', type: 'spell' },
      { level: 3, title: 'Vínculo con el Arma', description: 'Puedes convocar tu arma vinculada a tu mano como acción bonus.', type: 'feature' }
    ]
  },
  'Estilo del Enfoque': {
    name: 'Estilo del Enfoque',
    className: 'Guerrero',
    description: 'Desarrolla la energía psiónica de su mente para potenciar sus ataques, crear escudos telequinéticos y dar saltos imposibles.',
    coreMechanic: 'Dados de Energía Psiónica para mitigar daño, infligir daño psíquico extra y mover objetos.',
    keyRole: 'Tanque Psiónico & Control Telequinético',
    features: [
      { level: 3, title: 'Fuerza Psiónica', description: 'Ganas Dados Psiónicos (d6) para Campo Reductor, Golpe Psiónico y Movimiento Telequinético.', type: 'feature' },
      { level: 7, title: 'Salto Telequinético', description: 'Vuelas temporalmente durante tu turno.', type: 'feature' }
    ]
  },

  // ==========================================
  // MONJE (Filosofías)
  // ==========================================
  'Filosofía del Dominio': {
    name: 'Filosofía del Dominio',
    className: 'Monje',
    description: 'Maestros del combate cuerpo a cuerpo y control del Ki mediante Ráfaga de Golpes perfeccionada.',
    coreMechanic: 'Derribar, empujar o quitar reacciones a los enemigos con Ráfaga de Golpes.',
    keyRole: 'Control de Enemigos & Combate Sin Armas',
    features: [
      { level: 3, title: 'Técnica de la Mano Abierta', description: 'Al usar Ráfaga de Golpes, puedes derribar al enemigo, empujarlo 4.5m o quitarle sus reacciones.', type: 'feature' },
      { level: 6, title: 'Integridad Corporal', description: 'Te curas PG iguales a 3 x Nivel de Monje una vez por descanso largo.', type: 'feature' }
    ]
  },
  'Filosofía de los Secretos': {
    name: 'Filosofía de los Secretos',
    className: 'Monje',
    description: 'Infiltrados sombríos que manipulan la oscuridad, se teletransportan de sombra en sombra y silencian a sus enemigos.',
    coreMechanic: 'Paso Sombrío (teletransporte entre sombras) e invisibilidad.',
    keyRole: 'Infiltrado Sigiloso & Asesino Sombrío',
    features: [
      { level: 3, title: 'Artes de la Penumbra', description: 'Gastas Ki para lanzar Oscuridad, Visión en la Oscuridad, Silencio o Pasar sin Rastro.', type: 'spell' },
      { level: 6, title: 'Paso Sombrío', description: 'Te teletransportas hasta 18m de una sombra a otra como acción bonus.', type: 'feature' }
    ]
  },
  'Filosofía del Equilibrio': {
    name: 'Filosofía del Equilibrio',
    className: 'Monje',
    description: 'Canalizan la energía elemental pura de Fuego, Agua, Tierra y Aire en sus puños.',
    coreMechanic: 'Ataques con alcance elemental de 6m y ráfagas de daño elemental de área.',
    keyRole: 'Combate Elemental Zonal & Daño Variado',
    features: [
      { level: 3, title: 'Sintonía Elemental', description: 'Tus ataques sin armas alcanzan 6m e infligen daño de Fuego, Frío, Ácido o Rayo.', type: 'feature' },
      { level: 6, title: 'Embate de los Elementos', description: 'Gastas Ki para empujar o atraer a enemigos con ráfagas elementales.', type: 'feature' }
    ]
  },
  'Filosofía de la Restauración': {
    name: 'Filosofía de la Restauración',
    className: 'Monje',
    description: 'Manipulan la energía vital del Ki para curar heridas con el Toque de Vida o infligir sufrimiento con el Toque de Muerte.',
    coreMechanic: 'Toque de Curación y Toque de Daño Necrótico integrados en las Artes Marciales.',
    keyRole: 'Monje Sanador & Ejecutor Táctico',
    features: [
      { level: 3, title: 'Manos de Curación / Manos de Daño', description: 'Gastas Ki para curar a una criatura o infligir daño necrótico adicional en un golpe sin armas.', type: 'feature' },
      { level: 6, title: 'Misericordia del Médico', description: 'Curar a una criatura también elimina condiciones de ceguera, sordera, parálisis o envenenamiento.', type: 'feature' }
    ]
  },

  // ==========================================
  // PALADÍN (Órdenes)
  // ==========================================
  'Orden del Cruzado': {
    name: 'Orden del Cruzado',
    className: 'Paladín',
    description: 'Encarna el ideal clásico de justicia, honor y protección radiante contra la maldad.',
    coreMechanic: 'Arma Sagrada (+Mod CAR al ataque) y Aura de Devoción.',
    keyRole: 'Líder Radiante & Tanque Protector',
    features: [
      { level: 3, title: 'Canalizar Divinidad: Arma Sagrada', description: 'Imbuyes tu arma con luz bendita sumando tu Mod CAR a las tiradas de ataque.', type: 'feature' },
      { level: 7, title: 'Aura de Devoción', description: 'Tú y los aliados a 3m no pueden ser encantados.', type: 'aura' }
    ]
  },
  'Orden del Grifo': {
    name: 'Orden del Grifo',
    className: 'Paladín',
    description: 'Busca la gloria en el combate heroico, la velocidad impetuosa y el triunfo deslumbrante.',
    coreMechanic: 'Zancada Gloriosa (velocidad extra) y Castigo Guiado.',
    keyRole: 'Paladín de Carga Rápida & Daño Impactante',
    features: [
      { level: 3, title: 'Zancada Gloriosa', description: 'Aumenta tu velocidad en 3m y puedes moverte como acción bonus al usar Canalizar Divinidad.', type: 'feature' },
      { level: 7, title: 'Aura de Alacridad', description: 'Aumenta la velocidad de movimiento de todos los aliados a 3m.', type: 'aura' }
    ]
  },
  'Orden de los Antepasados': {
    name: 'Orden de los Antepasados',
    className: 'Paladín',
    description: 'Defensores de la luz natural, la vida silvestre y las tradiciones antiguas de la tierra.',
    coreMechanic: 'Ira de la Naturaleza para apresar enemigos y Aura de Resistencia al daño de conjuros.',
    keyRole: 'Tanque Anti-Magia & Protector Natural',
    features: [
      { level: 3, title: 'Canalizar Divinidad: Ira de la Naturaleza', description: 'Enredaderas espectrales apresan a un enemigo a 3m.', type: 'feature' },
      { level: 7, title: 'Aura de Protección Antigua', description: 'Tú y los aliados a 3m tienen resistencia al daño producido por conjuros.', type: 'aura' }
    ]
  },
  'Orden del Cuervo': {
    name: 'Orden del Cuervo',
    className: 'Paladín',
    description: 'Juramentados a cazar y castigar a los malvados sin piedad mediante Voto de Enemistad.',
    coreMechanic: 'Voto de Enemistad para ventaja en tiradas de ataque contra un objetivo específico.',
    keyRole: 'Asesino de Objetivos Individuales & Ejecutor Santo',
    features: [
      { level: 3, title: 'Canalizar Divinidad: Voto de Enemistad', description: 'Ganas ventaja en todas las tiradas de ataque contra un objetivo a 9m durante 1 minuto.', type: 'feature' },
      { level: 7, title: 'Vengador Implacable', description: 'Al golpear a un enemigo con ataque de oportunidad, puedes moverte la mitad de tu velocidad.', type: 'feature' }
    ]
  },

  // ==========================================
  // EXPLORADOR (Clanes)
  // ==========================================
  'Clan de los Cazadores': {
    name: 'Clan de los Cazadores',
    className: 'Explorador',
    description: 'Especialista en la cacería de presas y monstruos, adaptando sus tácticas marciales para abatir gigantes, hordas o presas veloces.',
    coreMechanic: 'Tácticas de Cazador (Asesino de Gigantes, Caza-Hordas) y defensas marciales.',
    keyRole: 'Daño Físico Adaptable & Cazador de Monstruos',
    features: [
      { level: 3, title: 'Presa del Cazador', description: 'Elige: Caza-Hordas (ataque extra a enemigo adyacente) o Asesino de Gigantes (1d8 extra a presas dañadas).', type: 'feature' },
      { level: 7, title: 'Táctica Defensiva', description: 'Desventaja en ataques de oportunidad enemigos o bonus a salvaciones.', type: 'feature' }
    ]
  },
  'Clan de los Depredadores': {
    name: 'Clan de los Depredadores',
    className: 'Explorador',
    description: 'Acechadores de las profundidades sin luz y cavernas subterráneas, emboscando con velocidad aterradora.',
    coreMechanic: 'Emboscada Temible (ataque y movimiento extra en primer turno) e invisibilidad ante visión en la oscuridad.',
    keyRole: 'Emboscador Sigiloso de Primer Turno',
    features: [
      { level: 3, title: 'Emboscada Temible', description: 'En el primer turno de combate ganas +3m de velocidad y un ataque extra con 1d8 daño adicional.', type: 'feature' },
      { level: 3, title: 'Sombra de la Profundidad', description: 'Invisibilidad para criaturas que dependen de la visión en la oscuridad para verte.', type: 'feature' }
    ]
  },
  'Clan del Favor Místico': {
    name: 'Clan del Favor Místico',
    className: 'Explorador',
    description: 'Bendecidos por el glamour del Reino Feérico, combinando ataques carismáticos, control mental y engaño mágico.',
    coreMechanic: 'Daño psíquico de Favor Feérico y bonificador de Carisma en pruebas sociales.',
    keyRole: 'Explorador Carismático & Control Mágico',
    features: [
      { level: 3, title: 'Presencia Feérica', description: 'Suma tu Modificador de Sabiduría a pruebas de Carisma e inflige 1d4 daño psíquico extra.', type: 'feature' },
      { level: 7, title: 'Torcedura Mente Feérica', description: 'Ventaja en salvaciones contra ser encantado o asustado.', type: 'feature' }
    ]
  },
  'Clan de la Manada': {
    name: 'Clan de la Manada',
    className: 'Explorador',
    description: 'Forma un vínculo inquebrantable con un compañero bestial que lucha codo a codo en el campo de batalla.',
    coreMechanic: 'Compañero Bestial convocado con estadísticas escaladas por nivel.',
    keyRole: 'Compañero de Combate & Control Doble',
    companion: { name: 'Compañero Bestial', type: 'Tierra/Aire/Agua', description: 'Tu compañero ataca y obedece tus órdenes verbales en combate.', statsSummary: 'Escala con tu nivel y bonificador de competencia.' },
    features: [
      { level: 3, title: 'Compañero de la Manada', description: 'Convocas un espíritu bestial de la tierra, aire o mar como compañero leal.', type: 'companion' },
      { level: 7, title: 'Entrenamiento Marcial Bestial', description: 'Los ataques de tu compañero se consideran mágicos.', type: 'feature' }
    ]
  },

  // ==========================================
  // PÍCARO (Hermandades)
  // ==========================================
  'Hermandad de los Ladrones': {
    name: 'Hermandad de los Ladrones',
    className: 'Pícaro',
    description: 'Especialista en agilidad callejera, sigilo, ganzúas y acciones veloces en combate.',
    coreMechanic: 'Manos Rápidas (usar objetos o abrir cerraduras como acción adicional) y trepador nato.',
    keyRole: 'Infiltrador & Utilidad de Combate',
    features: [
      { level: 3, title: 'Manos Rápidas', description: 'Usar objeto o Juego de Manos como acción adicional.', type: 'feature' },
      { level: 3, title: 'Trabajo de Segundo Piso', description: 'Trepar no cuesta movimiento adicional y saltas más lejos.', type: 'feature' }
    ]
  },
  'Hermandad de los Silenciadores': {
    name: 'Hermandad de los Silenciadores',
    className: 'Pícaro',
    description: 'Maestros del asesinato frío y la sorpresa letal con venenos y disfraces.',
    coreMechanic: 'Golpe Asesino (ventaja contra enemigos que no han actuado y crítico automático en sorpresa).',
    keyRole: 'Daño Explosivo de Apertura',
    features: [
      { level: 3, title: 'Asesinar', description: 'Ventaja en ataques contra criaturas que no han actuado. Crítico automático en sorpresa.', type: 'feature' },
      { level: 3, title: 'Competencias de Asesino', description: 'Competencia con kit de disfraz y kit de venenos.', type: 'feature' }
    ]
  },
  'Hermandad de los Susurradores': {
    name: 'Hermandad de los Susurradores',
    className: 'Pícaro',
    description: 'Combina el sigilo furtivo con trucos y conjuros de Ilusión y Encantamiento de Mago.',
    coreMechanic: 'Lanzamiento de conjuros de Mago e Invisibilidad/Ilusiones furtivas.',
    keyRole: 'Infiltrado Arcano & Engañador Mágico',
    features: [
      { level: 3, title: 'Conjuros de Susurros', description: 'Aprendes trucos y conjuros de Mago (Inteligencia es tu aptitud mágica).', type: 'spell' },
      { level: 3, title: 'Versatilidad de Manos Arcanas', description: 'Controlas la Mano Mágica de forma invisible para abrir cerraduras o robar.', type: 'feature' }
    ]
  },
  'Hermandad de los Segadores': {
    name: 'Hermandad de los Segadores',
    className: 'Pícaro',
    description: 'Manifiesta hojas de energía psiónica pura con sus mentes para atacar en silencio y comunicarse telepáticamente.',
    coreMechanic: 'Cuchillas Psiónicas de daño psíquico y comunicación mental con el equipo.',
    keyRole: 'Asesino Psiónico Silencioso',
    features: [
      { level: 3, title: 'Cuchillas Psiónicas', description: 'Manifiestas dagas de energía psiónica (1d6 daño psíquico + Furtivo) que desaparecen sin dejar rastro.', type: 'feature' },
      { level: 3, title: 'Red Telepática', description: 'Estableces comunicación mental con tus aliados.', type: 'feature' }
    ]
  },

  // ==========================================
  // HECHICERO (Herencias)
  // ==========================================
  'Herencia Primordial': {
    name: 'Herencia Primordial',
    className: 'Hechicero',
    description: 'Tu magia proviene de la sangre ancestral de dragones legendarios, otorgándote escamas de dragón y afinidad elemental.',
    coreMechanic: 'Resiliencia Dracónica (+1 PG por nivel, CA 13 pasiva) y daño elemental potenciado.',
    keyRole: 'Lanzador Elemental Resistente & Destrucción',
    features: [
      { level: 3, title: 'Resiliencia Dracónica', description: 'Tu CA sin armadura es 13 + Mod DES y ganas +1 PG máximo por nivel.', type: 'feature' },
      { level: 6, title: 'Afinidad Elemental', description: 'Sumas tu Mod CAR al daño del elemento de tu linaje.', type: 'feature' }
    ]
  },
  'Herencia Divina': {
    name: 'Herencia Divina',
    className: 'Hechicero',
    description: 'Sintonizado con el orden perfecto del cosmos o la gracia divina, previniendo el caos en el campo de batalla.',
    coreMechanic: 'Restaurar Orden (neutralizar ventaja/desventaja) y Escudo de Engranajes temporales.',
    keyRole: 'Lanzador Defensivo & Neutralizador de Azar',
    features: [
      { level: 3, title: 'Restaurar el Orden', description: 'Como reacción, cancelas una ventaja o desventaja a 18m (usos = Mod CAR).', type: 'feature' },
      { level: 6, title: 'Protección Cósmica', description: 'Creas un escudo de fuerza temporal que absorbe daño recibido.', type: 'feature' }
    ]
  },
  'Herencia Corrupta': {
    name: 'Herencia Corrupta',
    className: 'Hechicero',
    description: 'Tocado por la influencia aberrante del Vacío Exterior, otorgándote telepatía y conjuros psiónicos invisibles.',
    coreMechanic: 'Telepatía mental, conjuros psiónicos sin componentes somáticos/verbales y metamagia psiónica.',
    keyRole: 'Control Mental & Hechicero Psiónico',
    features: [
      { level: 3, title: 'Habla Telepática', description: 'Te comunicas mentalmente con cualquier criatura a 9m.', type: 'feature' },
      { level: 6, title: 'Hechicería Psiónica', description: 'Lanzas conjuros psiónicos usando Puntos de Hechicería sin componentes verbales o somáticos.', type: 'feature' }
    ]
  },
  'Herencia Caótica': {
    name: 'Herencia Caótica',
    className: 'Hechicero',
    description: 'Canalizas la magia pura e impredecible del Caos Primigenio, provocando mareas de azar extraordinario.',
    coreMechanic: 'Mareas de Azar para obtener ventaja a voluntad y Oleadas de Magia Salvaje aleatorias.',
    keyRole: 'Lanzador Impredecible & Caos Táctico',
    features: [
      { level: 3, title: 'Mareas de Azar', description: 'Ganas ventaja en una tirada de ataque, prueba o salvación (se recupera tras una Oleada).', type: 'feature' },
      { level: 3, title: 'Oleada de Magia Salvaje', description: 'Al lanzar un conjuro de nivel 1+, el caos puede desatar efectos mágicos aleatorios.', type: 'feature' }
    ]
  },

  // ==========================================
  // BRUJO (Contratos) — REWORK 5.5E
  // ==========================================
  'Contrato con el Abismo': {
    name: 'Contrato con el Abismo',
    className: 'Brujo',
    description: 'Forjas tu pacto con señores demoníacos o diabólicos de los planos inferiores, obteniendo fuego abisal y resiliencia.',
    coreMechanic: 'Bendición del Oscuro (PG temporales al abatir enemigos) y Suerte del Abismo.',
    keyRole: 'Brujo Destructivo de Fuego & Auto-Sustento',
    features: [
      { level: 3, title: 'Bendición del Oscuro', description: 'Al reducir un enemigo a 0 PG, ganas PG temporales iguales a tu Mod CAR + Nivel de Brujo.', type: 'feature' },
      { level: 6, title: 'Suerte del Abismo', description: 'Añades 1d10 a una prueba de habilidad o salvación una vez por descanso corto.', type: 'feature' }
    ]
  },
  'Contrato con las Hadas': {
    name: 'Contrato con las Hadas',
    className: 'Brujo',
    description: 'Pacto suscrito con señores del Reino Feérico, otorgando ilusión encantadora y teletransporte de niebla.',
    coreMechanic: 'Paso Feérico mejorado con efectos de encantamiento o invisibilidad al teletransportarse.',
    keyRole: 'Movilidad Escurridiza & Control Feérico',
    features: [
      { level: 3, title: 'Pasos del Reino Feérico', description: 'Te teletransportas 9m como acción bonus (usos = Mod CAR).', type: 'feature' },
      { level: 6, title: 'Escape de la Niebla', description: 'Al recibir daño, te vuelves invisible y te teletransportas 18m como reacción.', type: 'feature' }
    ]
  },
  'Pacto con los Cielos': {
    name: 'Pacto con los Cielos',
    className: 'Brujo',
    description: 'Pacto establecido con entes celestiales y solares, infundido con luz radiante y milagros de sanación.',
    coreMechanic: 'Luz Sanadora (reserva de d6s para curar como acción bonus) y resistencia radiante.',
    keyRole: 'Brujo Sanador & Soporte Radiante',
    features: [
      { level: 3, title: 'Luz Sanadora', description: 'Reserva de dados (d6s = 1 + Nivel) para curar a aliados a 18m como acción bonus.', type: 'feature' },
      { level: 6, title: 'Resplandor Celestial', description: 'Resistencia al daño radiante y sumas Mod CAR a conjuros de fuego o radiante.', type: 'feature' }
    ]
  },
  'Pacto con los Horrores': {
    name: 'Pacto con los Horrores',
    className: 'Brujo',
    description: 'Vínculo misterioso con entidades alienígenas del Vacío Astral, otorgando mente despierta y escudos psíquicos.',
    coreMechanic: 'Mente Despierta (telepatía) y Escudo Telepático de reflexión de daño psíquico.',
    keyRole: 'Control Psiónico & Saboteador Mental',
    features: [
      { level: 3, title: 'Mente Despierta', description: 'Comunicación telepática a 9m con cualquier criatura sin importar el idioma.', type: 'feature' },
      { level: 6, title: 'Escudo Telepático', description: 'Resistencia al daño psíquico y reflejas el daño psíquico recibido a tu atacante.', type: 'feature' }
    ]
  },

  // ==========================================
  // MAGO (Estudios)
  // ==========================================
  'Estudios en Destrucción': {
    name: 'Estudios en Destrucción',
    className: 'Mago',
    description: 'Especialistas en canalizar energía elemental pura en ráfagas destructivas (fuego, hielo, rayo).',
    coreMechanic: 'Esculpir Conjuros para proteger aliados de tus áreas de efecto de evocar.',
    keyRole: 'Lanzador de Daño Masivo en Área',
    features: [
      { level: 2, title: 'Esculpir Conjuros', description: 'Los aliados seleccionados superan automáticamente las salvaciones de tus conjuros de evocación y no reciben daño.', type: 'feature' },
      { level: 6, title: 'Truco Potente', description: 'Tus trucos dañinos infringen la mitad de daño aunque el enemigo supere la salvación.', type: 'feature' }
    ]
  },
  'Estudios en Protección': {
    name: 'Estudios en Protección',
    className: 'Mago',
    description: 'Eruditos de la magia defensiva, creando escudos de fuerza arcana para protegerse a sí mismos y al grupo.',
    coreMechanic: 'Baluarte Arcano que absorbe daño recibido y se recarga al lanzar magia de protección.',
    keyRole: 'Mago Defensivo & Escudo de Fuerza',
    features: [
      { level: 2, title: 'Baluarte Arcano', description: 'Creas un escudo mágico con (2 x Nivel + Mod INT) PG que absorbe el daño recibido antes que tus PG.', type: 'feature' },
      { level: 6, title: 'Baluarte Compartido', description: 'Proyectas tu Baluarte Arcano para absorber daño dirigido a un aliado a 9m.', type: 'feature' }
    ]
  },
  'Estudios en Profecías': {
    name: 'Estudios en Profecías',
    className: 'Mago',
    description: 'Adivinos que vislumbran los hilos del tiempo y el destino, alterando tiradas clave antes de que sucedan.',
    coreMechanic: 'Dados de Augurio (2d20 lanzados al inicio del día para sustituir cualquier d20).',
    keyRole: 'Manipulador del Destino & Adivino Táctico',
    features: [
      { level: 2, title: 'Augurio del Destino', description: 'Lanzas 2d20 tras un descanso largo. Puedes reemplazar cualquier tirada de ataque, prueba o salvación por uno de estos dados.', type: 'feature' },
      { level: 6, title: 'Adivinación Experta', description: 'Recuperas espacios de conjuro de nivel inferior al lanzar conjuros de adivinación.', type: 'spell' }
    ]
  },
  'Estudios en la Realidad': {
    name: 'Estudios en la Realidad',
    className: 'Mago',
    description: 'Ilusionistas maestros capaces de tejer espejismos tan convincentes que distorsionan la propia realidad física.',
    coreMechanic: 'Ilusiones perfeccionadas como acción bonus y duplicados ilusorios de defensa.',
    keyRole: 'Maestro de Espejismos & Engaño Absoluto',
    features: [
      { level: 2, title: 'Ilusión Rápida', description: 'Lanzas la ilusión menor como acción bonus.', type: 'feature' },
      { level: 6, title: 'Misterio Ilusorio', description: 'Creas un duplicado ilusorio como reacción cuando eres atacado, haciendo que el ataque falle automáticamente.', type: 'feature' }
    ]
  }
};

// ─── Alias para compatibilidad con datos guardados / nombres previos ───
SUBCLASS_CATALOG['Camino del Berserker'] = SUBCLASS_CATALOG['Senda del Berserker'];
SUBCLASS_CATALOG['Camino del Guerrero Totémico'] = SUBCLASS_CATALOG['Senda del Espíritu Primigenio'];
SUBCLASS_CATALOG['Camino del Corazón Salvaje'] = SUBCLASS_CATALOG['Senda del Espíritu Primigenio'];
SUBCLASS_CATALOG['Colegio del Conocimiento'] = SUBCLASS_CATALOG['Escuela del Conocimiento'];
SUBCLASS_CATALOG['Colegio del Valor'] = SUBCLASS_CATALOG['Escuela de la Determinación'];
SUBCLASS_CATALOG['Colegio de la Glamour'] = SUBCLASS_CATALOG['Escuela del Exceso'];
SUBCLASS_CATALOG['Dominio de la Vida'] = SUBCLASS_CATALOG['Doctrina de la Sanación'];
SUBCLASS_CATALOG['Dominio de la Guerra'] = SUBCLASS_CATALOG['Doctrina de la Misión'];
SUBCLASS_CATALOG['Dominio de la Luz'] = SUBCLASS_CATALOG['Doctrina de la Punición'];
SUBCLASS_CATALOG['Círculo de la Tierra'] = SUBCLASS_CATALOG['Armonía con la Tierra'];
SUBCLASS_CATALOG['Círculo de la Luna'] = SUBCLASS_CATALOG['Armonía con lo Salvaje'];
SUBCLASS_CATALOG['Círculo de las Estrellas'] = SUBCLASS_CATALOG['Armonía con el Firmamento'];
SUBCLASS_CATALOG['Campeón'] = SUBCLASS_CATALOG['Estilo del Legionario'];
SUBCLASS_CATALOG['Maestro de Batalla'] = SUBCLASS_CATALOG['Estilo del Estratega'];
SUBCLASS_CATALOG['Caballero Arcano'] = SUBCLASS_CATALOG['Estilo del Misticismo'];
SUBCLASS_CATALOG['Camino de la Mano Abierta'] = SUBCLASS_CATALOG['Filosofía del Dominio'];
SUBCLASS_CATALOG['Camino de la Sombra'] = SUBCLASS_CATALOG['Filosofía de los Secretos'];
SUBCLASS_CATALOG['Camino de los Cuatro Elementos'] = SUBCLASS_CATALOG['Filosofía del Equilibrio'];
SUBCLASS_CATALOG['Juramento de Devoción'] = SUBCLASS_CATALOG['Orden del Cruzado'];
SUBCLASS_CATALOG['Juramento de Venganza'] = SUBCLASS_CATALOG['Orden del Cuervo'];
SUBCLASS_CATALOG['Juramento de los Ancestros'] = SUBCLASS_CATALOG['Orden de los Antepasados'];
SUBCLASS_CATALOG['Cazador'] = SUBCLASS_CATALOG['Clan de los Cazadores'];
SUBCLASS_CATALOG['Señor de las Bestias'] = SUBCLASS_CATALOG['Clan de la Manada'];
SUBCLASS_CATALOG['Vagabundo Feérico'] = SUBCLASS_CATALOG['Clan del Favor Místico'];
SUBCLASS_CATALOG['Acechador Sombrío'] = SUBCLASS_CATALOG['Clan de los Depredadores'];
SUBCLASS_CATALOG['Marca del Cazador'] = SUBCLASS_CATALOG['Clan de los Cazadores'];
SUBCLASS_CATALOG['Marca del Depredador'] = SUBCLASS_CATALOG['Clan de los Depredadores'];
SUBCLASS_CATALOG['Marca del Favor Místico'] = SUBCLASS_CATALOG['Clan del Favor Místico'];
SUBCLASS_CATALOG['Marca de la Manada'] = SUBCLASS_CATALOG['Clan de la Manada'];
SUBCLASS_CATALOG['Ladrón'] = SUBCLASS_CATALOG['Hermandad de los Ladrones'];
SUBCLASS_CATALOG['Asesino'] = SUBCLASS_CATALOG['Hermandad de los Silenciadores'];
SUBCLASS_CATALOG['Embaucador Arcano'] = SUBCLASS_CATALOG['Hermandad de los Susurradores'];
SUBCLASS_CATALOG['Linaje Dracónico'] = SUBCLASS_CATALOG['Herencia Primordial'];
SUBCLASS_CATALOG['Magia Salvaje'] = SUBCLASS_CATALOG['Herencia Caótica'];
SUBCLASS_CATALOG['Alma Mecánica'] = SUBCLASS_CATALOG['Herencia Divina'];
SUBCLASS_CATALOG['Patrón Arquihada'] = SUBCLASS_CATALOG['Contrato con las Hadas'];
SUBCLASS_CATALOG['Patrón Fiendish'] = SUBCLASS_CATALOG['Contrato con el Abismo'];
SUBCLASS_CATALOG['Patrón Great Old One'] = SUBCLASS_CATALOG['Pacto con los Horrores'];
SUBCLASS_CATALOG['Escuela de Evocación'] = SUBCLASS_CATALOG['Estudios en Destrucción'];
SUBCLASS_CATALOG['Escuela de Abjuración'] = SUBCLASS_CATALOG['Estudios en Protección'];
SUBCLASS_CATALOG['Escuela de Nigromancia'] = SUBCLASS_CATALOG['Estudios en la Realidad'];
