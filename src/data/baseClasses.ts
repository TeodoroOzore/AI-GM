import { BaseClassDetail, FightingStyleDef } from '../types';

export const FIGHTING_STYLES: FightingStyleDef[] = [
  {
    name: 'Arquería',
    description: 'Ganas un bonificador de +2 a las tiradas de ataque que realices con armas a distancia.',
    classes: ['Guerrero', 'Explorador']
  },
  {
    name: 'Combate con Dos Armas',
    description: 'Cuando combates con dos armas, podés sumar tu modificador de atributo al daño del segundo ataque (acción bonus).',
    classes: ['Guerrero', 'Explorador']
  },
  {
    name: 'Defensa',
    description: 'Ganas un bonificador de +1 a la Clase de Armadura (CA) mientras lleves puesta cualquier armadura.',
    classes: ['Guerrero', 'Paladín', 'Explorador']
  },
  {
    name: 'Duelista',
    description: 'Cuando empuñás un arma cuerpo a cuerpo en una mano y ninguna otra arma, ganas un +2 al daño con ese arma.',
    classes: ['Guerrero', 'Paladín', 'Explorador']
  },
  {
    name: 'Protección',
    description: 'Cuando un enemigo ataca a un aliado a 1.5m de ti y llevás un escudo, podés usar tu reacción para imponer desventaja en la tirada de ataque.',
    classes: ['Guerrero', 'Paladín']
  },
  {
    name: 'Armas Grandes',
    description: 'Al obtener un 1 o 2 en un dado de daño de un ataque con un arma a dos manos o versátil (a 2 manos), podés volver a tirar el dado.',
    classes: ['Guerrero', 'Paladín']
  }
];

export const BASE_CLASSES_CATALOG: Record<string, BaseClassDetail> = {
  // ==========================================
  // GUERRERO
  // ==========================================
  'Guerrero': {
    name: 'Guerrero',
    hitDie: 'd10',
    primaryAbilities: 'Fuerza o Destreza',
    saves: ['Fuerza', 'Constitución'],
    description: 'Maestros del combate militar, expertos en todo tipo de armas y armaduras. Combinan atletismo sobresaliente con tácticas letales en el campo de batalla.',
    coreGimmick: 'Aliento de Combate (curación rápida), Acción Adicional (Action Surge) para turno doble, Estilos de Combate y hasta 4 ataques por turno.',
    fightingStyles: FIGHTING_STYLES.filter(fs => fs.classes.includes('Guerrero')),
    featuresTimeline: [
      { level: 1, title: 'Estilo de Combate', description: 'Adoptás una especialización en combate (Arquería, Defensa, Duelista, Armas Grandes, Protección o Dos Armas).' },
      { level: 1, title: 'Aliento de Combate (Second Wind)', description: 'Recuperás 1d10 + nivel de Guerrero PG como Acción Bonus (1 uso por descanso corto o largo).' },
      { level: 2, title: 'Acción Adicional (Action Surge)', description: 'Podés realizar una Acción extra adicional en tu turno (1 uso por descanso corto o largo; 2 usos a nivel 17).' },
      { level: 3, title: 'Arquetipo Marcial (Subclase)', description: 'Elegís tu subclase (Campeón, Maestro de Batalla o Caballero Arcano).' },
      { level: 4, title: 'Mejora de Característica / Dote', description: 'Aumentás un atributo en +2, dos en +1, o elegís una dote.' },
      { level: 5, title: 'Ataque Extra (2 ataques)', description: 'Podés atacar 2 veces en lugar de 1 cuando realizás la acción de Atacar.' },
      { level: 6, title: 'Mejora de Característica Adicional', description: 'Los guerreros ganan una mejora de característica o dote extra a nivel 6.' },
      { level: 8, title: 'Mejora de Característica / Dote', description: 'Aumentás un atributo en +2, dos en +1, o elegís una dote.' },
      { level: 9, title: 'Indomable (1 uso)', description: 'Podés volver a tirar una tirada de salvación fallida (1 uso por descanso largo).' },
      { level: 11, title: 'Ataque Extra Mejorado (3 ataques)', description: 'Podés atacar 3 veces en lugar de 2 cuando realizás la acción de Atacar.' },
      { level: 12, title: 'Mejora de Característica / Dote', description: 'Aumentás un atributo en +2, dos en +1, o elegís una dote.' },
      { level: 13, title: 'Indomable (2 usos)', description: 'Ganas un segundo uso de Indomable por descanso largo.' },
      { level: 14, title: 'Mejora de Característica Adicional', description: 'Ganas una mejora de característica o dote extra a nivel 14.' },
      { level: 16, title: 'Mejora de Característica / Dote', description: 'Aumentás un atributo en +2, dos en +1, o elegís una dote.' },
      { level: 17, title: 'Acción Adicional (2 usos) & Indomable (3 usos)', description: 'Ganas un segundo uso de Acción Adicional y un tercer uso de Indomable.' },
      { level: 19, title: 'Mejora de Característica / Dote', description: 'Aumentás un atributo en +2, dos en +1, o elegís una dote.' },
      { level: 20, title: 'Ataque Extra Definitivo (4 ataques)', description: 'Podés realizar 4 ataques cada vez que hacés la acción de Atacar.' }
    ]
  },

  // ==========================================
  // BÁRBARO
  // ==========================================
  'Bárbaro': {
    name: 'Bárbaro',
    hitDie: 'd12',
    primaryAbilities: 'Fuerza',
    saves: ['Fuerza', 'Constitución'],
    description: 'Guerreros salvajes e indomables alimentados por una furia primigenia que les otorga resistencia sobrenatural y fuerza devastadora.',
    coreGimmick: 'Furia (resistencia a daño físico y +daño), Defensa sin Armadura (10+DES+CON) y Ataque Temerario.',
    featuresTimeline: [
      { level: 1, title: 'Furia Primigenia', description: 'Entrás en Furia como Acción Bonus: ganas resistencia a daño contundente, perforante y cortante, +2 al daño cuerpo a cuerpo y ventaja en pruebas/salvaciones de Fuerza.' },
      { level: 1, title: 'Defensa sin Armadura', description: 'Si no llevás armadura, tu CA es igual a 10 + Modificador de Destreza + Modificador de Constitución (+ Escudo).' },
      { level: 2, title: 'Ataque Temerario', description: 'Ganas ventaja en ataques cuerpo a cuerpo con Fuerza en este turno, pero los ataques contra ti tienen ventaja hasta tu siguiente turno.' },
      { level: 2, title: 'Sentido del Peligro', description: 'Ventaja en salvaciones de Destreza contra efectos que podés ver (ej. trampas y conjuros).' },
      { level: 3, title: 'Senda Primal (Subclase)', description: 'Elegís tu subclase (Camino del Berserker, Guerrero Totémico o Corazón Salvaje).' },
      { level: 4, title: 'Mejora de Característica / Dote', description: 'Aumentás atributos o elegís una dote.' },
      { level: 5, title: 'Ataque Extra & Movimiento Rápido', description: 'Atacás 2 veces por acción y tu velocidad aumenta en 3 metros sin armadura pesada.' },
      { level: 7, title: 'Instinto Salvaje', description: 'Ventaja en tiradas de Iniciativa y podés actuar normalmente si entrás en furia en el primer turno aunque te sorprendan.' },
      { level: 9, title: 'Crítico Brutal (+1 dado)', description: 'Sumás 1 dado de daño adicional al asestar un golpe crítico cuerpo a cuerpo.' },
      { level: 11, title: 'Furia Inexorable', description: 'Si caés a 0 PG durante Furia, podés hacer salvación de CON CD 10 para quedar a 1 PG. La CD aumenta en 5 con cada uso.' },
      { level: 15, title: 'Furia Persistente', description: 'Tu Furia solo termina si quedás inconsciente o elegís finalizarla.' },
      { level: 20, title: 'Campeón Primal', description: 'Tu Fuerza y Constitución aumentan en +4 y su máximo posible pasa a ser 24.' }
    ]
  },

  // ==========================================
  // BARDO
  // ==========================================
  'Bardo': {
    name: 'Bardo',
    hitDie: 'd8',
    primaryAbilities: 'Carisma',
    saves: ['Destreza', 'Carisma'],
    description: 'Artistas y eruditos de la magia cuya música y palabras tejen encantamientos, inspiran a sus aliados y manipulan la realidad.',
    coreGimmick: 'Inspiración Bárdica (dados bonus a aliados), Todoterreno (+mitad de prof a todo) y Secretos Mágicos de cualquier clase.',
    featuresTimeline: [
      { level: 1, title: 'Inspiración Bárdica (d6)', description: 'Otorgás un dado d6 como acción bonus a un aliado a 18m para sumar a un ataque, prueba o salvación.' },
      { level: 1, title: 'Lanzamiento de Conjuros', description: 'Utilizás Carisma como aptitud mágica para lanzar conjuros de la lista de Bardo.' },
      { level: 2, title: 'Todoterreno (Jack of All Trades)', description: 'Sumás la mitad de tu bonificador de competencia a cualquier prueba de habilidad que no tenga competencia.' },
      { level: 2, title: 'Canción de Descanso (d6)', description: 'Aliados que curen PG durante un descanso corto recuperan 1d6 PG adicionales.' },
      { level: 3, title: 'Colegio Bárdico (Subclase) & Pericia', description: 'Elegís tu subclase y ganás Pericia (doble competencia) en 2 habilidades.' },
      { level: 5, title: 'Fuente de Inspiración & Dado d8', description: 'Inspiración Bárdica pasa a ser d8 y recuperás todos los usos en descansos cortos o largos.' },
      { level: 10, title: 'Secretos Mágicos (2 conjuros)', description: 'Aprendés 2 conjuros cualesquiera de cualquier lista de clase del juego.' },
      { level: 20, title: 'Inspiración Superior', description: 'Si no te quedan usos de Inspiración Bárdica al tirar iniciativa, recuperás 1 uso automáticamente.' }
    ]
  },

  // ==========================================
  // CLÉRIGO
  // ==========================================
  'Clérigo': {
    name: 'Clérigo',
    hitDie: 'd8',
    primaryAbilities: 'Sabiduría',
    saves: ['Sabiduría', 'Carisma'],
    description: 'Intercesores divinos que canalizan la voluntad y el poder de sus deidades para curar heridas, proteger aliados y smitear a los impíos.',
    coreGimmick: 'Canalizar Divinidad, Expulsar Muertos Vivientes, Dominio Divino desde Nivel 1 e Intercesión Divina.',
    featuresTimeline: [
      { level: 1, title: 'Dominio Divino (Subclase a Nivel 1)', description: 'Elegís tu Dominio (Vida, Guerra, Luz, Arcano) recibiendo conjuros de dominio y competencias inmediatas.' },
      { level: 1, title: 'Lanzamiento de Conjuros Divinos', description: 'Preparás conjuros diariamente usando Sabiduría.' },
      { level: 2, title: 'Canalizar Divinidad: Expulsar Muertos Vivientes', description: 'Forzás a muertos vivientes a 9m a huir durante 1 minuto si fallan salvación de Sabiduría (1 uso/descanso).' },
      { level: 5, title: 'Destrucción de Muertos Vivientes (CR 1/2)', description: 'Los muertos vivientes de CR 1/2 o menor expulsados son destruidos al instante.' },
      { level: 6, title: 'Canalizar Divinidad (2 usos)', description: 'Podés usar Canalizar Divinidad 2 veces por descanso corto.' },
      { level: 10, title: 'Intercesión Divina', description: 'Podés rogar la ayuda directa de tu dios (porcentaje de éxito = tu nivel de Clérigo).' },
      { level: 20, title: 'Intercesión Divina Definitiva', description: 'Tu llamada a tu deidad tiene éxito automáticamente sin necesidad de tirada.' }
    ]
  },

  // ==========================================
  // DRUIDA
  // ==========================================
  'Druida': {
    name: 'Druida',
    hitDie: 'd8',
    primaryAbilities: 'Sabiduría',
    saves: ['Inteligencia', 'Sabiduría'],
    description: 'Sacerdotes de la fe antigua que encarnan la furia de la naturaleza, capaces de transformarse en bestias y moldear los elementos.',
    coreGimmick: 'Forma Salvaje (transformación en bestias), Magia Natural y Círculo Druídico.',
    featuresTimeline: [
      { level: 1, title: 'Druídico & Lanzamiento de Conjuros', description: 'Aprendés el idioma secreto de los druidas y preparás conjuros naturales usando Sabiduría.' },
      { level: 2, title: 'Forma Salvaje (2 usos)', description: 'Te transformás en una bestia que hayas visto (CR 1/4 máximo sin volar/nadar). Tenés 2 usos por descanso corto.' },
      { level: 2, title: 'Círculo Druídico (Subclase)', description: 'Elegís tu subclase (Círculo de la Tierra, Luna o Estrellas).' },
      { level: 4, title: 'Forma Salvaje Mejorada (Natación)', description: 'Podés transformarte en bestias con velocidad de natación (CR 1/2 máximo).' },
      { level: 8, title: 'Forma Salvaje Mejorada (Vuelo)', description: 'Podés transformarte en bestias voladoras (CR 1 máximo).' },
      { level: 18, title: 'Cuerpo Atemporal & Conjuros de Bestia', description: 'Envejecés a 1/10 de velocidad y podés lanzar conjuros en Forma Salvaje.' },
      { level: 20, title: 'Archidruida', description: 'Tenés usos ILIMITADOS de Forma Salvaje.' }
    ]
  },

  // ==========================================
  // EXPLORADOR
  // ==========================================
  'Explorador': {
    name: 'Explorador',
    hitDie: 'd10',
    primaryAbilities: 'Destreza y Sabiduría',
    saves: ['Fuerza', 'Destreza'],
    description: 'Cazadores y rastreadores de las tierras salvajes especializados en dar caza a amenazas específicas y sobrevivir en los terrenos más hostiles.',
    coreGimmick: 'Enemigo Favorecido, Explorador de Terreno, Estilos de Combate y Magia Primigenia.',
    fightingStyles: FIGHTING_STYLES.filter(fs => fs.classes.includes('Explorador')),
    featuresTimeline: [
      { level: 1, title: 'Enemigo Favorecido', description: 'Ventaja en Rastreo y Sabiduría para interactuar con tu tipo de enemigo elegido (ej. Orcos, Dragones, No-Muertos).' },
      { level: 1, title: 'Explorador del Terreno', description: 'Ignorás terreno difícil en tu bioma preferido y el grupo no puede perderse.' },
      { level: 2, title: 'Estilo de Combate & Conjuros', description: 'Elegís un Estilo de Combate (Arquería, Defensa, Duelista o Dos Armas) y aprendés conjuros de explorador.' },
      { level: 3, title: 'Senda de Explorador (Subclase)', description: 'Elegís tu subclase (Cazador, Señor de las Bestias o Vagabundo Feérico).' },
      { level: 5, title: 'Ataque Extra', description: 'Podés atacar 2 veces por acción de Atacar.' },
      { level: 8, title: 'Zancada de Tierra', description: 'Moverte por terreno difícil no mágico no te cuesta movimiento extra.' },
      { level: 14, title: 'Desvanecerse', description: 'Podés usar Ocultarse como Acción Bonus en tu turno.' },
      { level: 20, title: 'Matador de Monstruos', description: 'Sumás tu Modificador de Sabiduría a tiradas de ataque o daño contra tu enemigo favorecido.' }
    ]
  },

  // ==========================================
  // HECHICERO
  // ==========================================
  'Hechicero': {
    name: 'Hechicero',
    hitDie: 'd6',
    primaryAbilities: 'Carisma',
    saves: ['Constitución', 'Carisma'],
    description: 'Lanzadores de conjuros innatos cuya magia fluye por su sangre debido a un linaje dracónico, toque del caos o bendición cósmica.',
    coreGimmick: 'Puntos de Hechicería, Metamagia (modificar conjuros al lanzarlos) y Linaje Arcano a Nivel 1.',
    specialChoices: {
      label: 'Opciones de Metamagia Aprendidas',
      key: 'metamagic',
      options: [
        { name: 'Conjuro Acelerado (2 Pts)', description: 'Cambia el tiempo de lanzamiento de 1 acción a 1 Acción Bonus.' },
        { name: 'Conjuro Duplicado (Pts = Nivel)', description: 'Permite hacer objetivo a 2 criaturas en lugar de 1 con un conjuro monometa.' },
        { name: 'Conjuro Sutil (1 Pt)', description: 'Lanzás el conjuro sin componentes somáticos ni verbales (indetectable).' },
        { name: 'Conjuro Potenciado (1 Pt)', description: 'Repetís dados de daño hasta tu Mod CAR.' },
        { name: 'Conjuro Cuidadoso (1 Pt)', description: 'Protegés a Mod CAR aliados de salvaciones de tus conjuros.' }
      ]
    },
    featuresTimeline: [
      { level: 1, title: 'Linaje Arcano (Subclase a Nivel 1)', description: 'Elegís tu origen (Linaje Dracónico, Magia Salvaje o Alma Mecánica).' },
      { level: 2, title: 'Fuente de Magia (Puntos de Hechicería)', description: 'Ganas Puntos de Hechicería iguales a tu nivel para crear espacios de conjuro o alimentar Metamagia.' },
      { level: 3, title: 'Metamagia (2 opciones)', description: 'Aprendés 2 opciones de Metamagia para alterar la mecánica de tus conjuros.' },
      { level: 10, title: 'Metamagia Adicional (3ra opción)', description: 'Aprendés una 3ra opción de Metamagia.' },
      { level: 17, title: 'Metamagia Adicional (4ta opción)', description: 'Aprendés una 4ta opción de Metamagia.' },
      { level: 20, title: 'Restauración Sorcière', description: 'Recuperás 4 Puntos de Hechicería tras un descanso corto.' }
    ]
  },

  // ==========================================
  // MAGO
  // ==========================================
  'Mago': {
    name: 'Mago',
    hitDie: 'd6',
    primaryAbilities: 'Inteligencia',
    saves: ['Inteligencia', 'Sabiduría'],
    description: 'Eruditos supremos del arte arcano que dominan la magia mediante el estudio riguroso, grimorios e investigación meticulosa.',
    coreGimmick: 'Grimorio de conjuros copiables, Recuperación Arcana en descansos cortos y Tradición Arcana.',
    featuresTimeline: [
      { level: 1, title: 'Grimorio & Lanzamiento Arcano', description: 'Registrás conjuros en tu grimorio y preparás conjuros usando Inteligencia.' },
      { level: 1, title: 'Recuperación Arcana', description: 'Recuperás espacios de conjuro en un descanso corto con nivel combinado = mitad de tu nivel de Mago.' },
      { level: 2, title: 'Tradición Arcana (Subclase)', description: 'Elegís tu Escuela (Evocación, Abjuración o Nigromancia).' },
      { level: 18, title: 'Dominio de Conjuros', description: 'Elegís 1 conjuro de Nv 1 y 1 de Nv 2 para lanzarlos a voluntad sin gastar espacios.' },
      { level: 20, title: 'Conjuros de Firma', description: 'Elegís 2 conjuros de Nivel 3 siempre preparados que podés lanzar gratis 1 vez por descanso.' }
    ]
  },

  // ==========================================
  // MONJE
  // ==========================================
  'Monje': {
    name: 'Monje',
    hitDie: 'd8',
    primaryAbilities: 'Destreza y Sabiduría',
    saves: ['Fuerza', 'Destreza'],
    description: 'Maestros del control mental y físico que canalizan la energía Ki para ejecutar proezas marciales imposibles sin armas ni armadura.',
    coreGimmick: 'Artes Marciales (d4 a d10), Defensa sin Armadura (10+DES+SAB), Puntos de Ki y Golpe Aturdidor.',
    featuresTimeline: [
      { level: 1, title: 'Defensa sin Armadura (10+DES+SAB)', description: 'Sin armadura ni escudo, tu CA es 10 + Mod DES + Mod SAB.' },
      { level: 1, title: 'Artes Marciales (d4)', description: 'Usás DES para ataques sin armas y armadura monástica. Podés atacar con la mano como Acción Bonus.' },
      { level: 2, title: 'Puntos de Ki (Ráfaga, Paciencia, Paso)', description: 'Usás Ki para Ráfaga de Golpes (2 ataques bonus), Paciencia del Viento (Esquivar bonus) o Paso del Viento (Esprintar bonus).' },
      { level: 3, title: 'Tradición Monástica (Subclase) & Desviar Proyectiles', description: 'Elegís subclase y podés atrapar o reducir daño de proyectiles a distancia.' },
      { level: 5, title: 'Ataque Extra & Golpe Aturdidor', description: 'Atacás 2 veces por acción y podés gastar 1 Ki al golpear para aturdir al enemigo si falla salvación de CON.' },
      { level: 7, title: 'Evasión & Mente Espectacular', description: 'No recibís daño en salvaciones de DES exitosas (mitad si fallás).' },
      { level: 14, title: 'Alma de Diamante', description: 'Ganas competencia en TODAS las tiradas de salvación.' },
      { level: 20, title: 'Auto-Perfección', description: 'Recuperás 4 Puntos de Ki al tirar iniciativa si no te quedaba ninguno.' }
    ]
  },

  // ==========================================
  // PALADÍN
  // ==========================================
  'Paladín': {
    name: 'Paladín',
    hitDie: 'd10',
    primaryAbilities: 'Fuerza y Carisma',
    saves: ['Sabiduría', 'Carisma'],
    description: 'Caballeros sagrados vinculados por un juramento inquebrantable que combina destreza marcial pesada con la gloria radiante del smite divinatorio.',
    coreGimmick: 'Sentido Divino, Imposición de Manos, Castigo Divino (Divine Smite), Estilos de Combate y Auras Divinas.',
    fightingStyles: FIGHTING_STYLES.filter(fs => fs.classes.includes('Paladín')),
    featuresTimeline: [
      { level: 1, title: 'Sentido Divino', description: 'Detectás la presencia de abisales, celestiales o no-muertos a 18m.' },
      { level: 1, title: 'Imposición de Manos', description: 'Reserva de curación de (5 x Nivel de Paladín) PG para sanar heridas o curar enfermedades.' },
      { level: 2, title: 'Castigo Divino (Divine Smite)', description: 'Al golpear con un arma, gastás un espacio de conjuro para infligir +2d8 de daño radiante (+1d8 extra por nivel sobre 1º).' },
      { level: 2, title: 'Estilo de Combate & Conjuros', description: 'Elegís un Estilo de Combate (Defensa, Duelista, Protección o Armas Grandes) y preparás conjuros.' },
      { level: 3, title: 'Juramento Sagrado (Subclase) & Canalizar Divinidad', description: 'Elegís tu Juramento (Devoción, Venganza o Ancestros).' },
      { level: 5, title: 'Ataque Extra', description: 'Podés atacar 2 veces por acción de Atacar.' },
      { level: 6, title: 'Aura de Protección', description: 'Tú y tus aliados a 3m sumáis tu Modificador de Carisma a TODAS las tiradas de salvación.' },
      { level: 10, title: 'Aura de Coraje', description: 'Tú y los aliados dentro de 3m no podés ser asustados mientras estés consciente.' },
      { level: 11, title: 'Castigo Divino Mejorado', description: 'Todos tus ataques con arma infligen 1d8 de daño radiante adicional de forma pasiva.' }
    ]
  },

  // ==========================================
  // PÍCARO
  // ==========================================
  'Pícaro': {
    name: 'Pícaro',
    hitDie: 'd8',
    primaryAbilities: 'Destreza',
    saves: ['Destreza', 'Inteligencia'],
    description: 'Especialistas en sigilo, precisión mortífera, vulnerabilidad enemiga y superación de cualquier cerradura o trampa.',
    coreGimmick: 'Ataque Furtivo (d6s por nivel), Acción Astuta (bonus esprintar/sigilo), Pericia y Esquiva Asombrosa.',
    featuresTimeline: [
      { level: 1, title: 'Ataque Furtivo (1d6)', description: 'Infligís 1d6 de daño extra 1 vez por turno a enemigos si tenés ventaja o un aliado adyacente al objetivo.' },
      { level: 1, title: 'Pericia (Expertise)', description: 'Duplicás tu bonificador de competencia en 2 habilidades elegidas.' },
      { level: 2, title: 'Acción Astuta', description: 'Podés usar Esprintar, Destrabar o Ocultarse como Acción Bonus en tu turno.' },
      { level: 3, title: 'Arquetipo Picaresco (Subclase) & Furtivo (2d6)', description: 'Elegís subclase (Ladrón, Asesino o Embaucador Arcano).' },
      { level: 5, title: 'Esquiva Asombrosa', description: 'Usá tu reacción al ser atacado para reducir a la mitad el daño infligido por el atacante.' },
      { level: 7, title: 'Evasión', description: 'No recibís daño en salvaciones de DES exitosas.' },
      { level: 11, title: 'Talentoso (Reliable Talent)', description: 'Al hacer una prueba con competencia, cualquier tirada de d20 menor a 10 se considera un 10.' },
      { level: 20, title: 'Golpe de Suerte', description: 'Convertís un fallo de ataque en un impacto o una prueba fallida en un 20 automático (1 uso/descanso).' }
    ]
  },

  // ==========================================
  // BRUJO
  // ==========================================
  'Brujo': {
    name: 'Brujo',
    hitDie: 'd8',
    primaryAbilities: 'Carisma',
    saves: ['Sabiduría', 'Carisma'],
    description: 'Lanzadores pragmáticos que han sellado un pacto con entidades extraplanarias obteniendo magia de pacto recargable y secretos prohibidos.',
    coreGimmick: 'Magia de Pacto (espacios maximizados recargables en corto), Invocaciones Mágicas y Don del Pacto.',
    specialChoices: {
      label: 'Don del Pacto (Nivel 3)',
      key: 'pactBoon',
      options: [
        { name: 'Pacto de la Cadena', description: 'Aprendés el conjuro Buscar Familiar e invocás formas especiales (Diablillo, Quasit, Seudodragón).' },
        { name: 'Pacto de la Hoja', description: 'Podés crear o vincular un arma mágica pactada en tu mano que cuenta como mágica.' },
        { name: 'Pacto del Tomo', description: 'Recibís un Libro de Sombras con 3 trucos de cualquier lista de clase.' }
      ]
    },
    featuresTimeline: [
      { level: 1, title: 'Patrón Extraplanar (Subclase a Nivel 1)', description: 'Elegís tu patrón (Arquihada, Fiendish o Great Old One).' },
      { level: 1, title: 'Magia del Pacto', description: 'Lanzás conjuros de pacto que siempre se lanzan al máximo nivel posible y se recargan en descansos CORTOS.' },
      { level: 2, title: 'Invocaciones Mágicas (2 opciones)', description: 'Elegís invocaciones arcanas (ej. Descarga Agónica, Visión del Diablo, Armadura de Sombras).' },
      { level: 3, title: 'Don del Pacto', description: 'Elegís tu Pacto: Cadena (Familiar superior), Hoja (Arma de pacto) o Tomo (Libro de Sombras).' },
      { level: 11, title: 'Arcano Místico (Conjuro Nv 6)', description: 'Tu patrón te otorga un conjuro secreto de Nivel 6 gratis 1 vez por descanso largo.' },
      { level: 20, title: 'Maestro del Pacto', description: 'Meditás 1 minuto para recuperar todos tus espacios de conjuro de pacto gastados (1/descanso largo).' }
    ]
  }
};
