import { SubclassDetail } from '../types';

export const SUBCLASS_CATALOG: Record<string, SubclassDetail> = {
  // ==========================================
  // BÁRBARO
  // ==========================================
  'Camino del Berserker': {
    name: 'Camino del Berserker',
    className: 'Bárbaro',
    description: 'El Berserker canaliza una furia salvaje e incontrolable, entregándose a la violencia pura en el campo de batalla sin importar el agotamiento o las heridas.',
    coreMechanic: 'Ataques adicionales mediante Frenesí a costa de agotamiento, e inmunidad al miedo y al encanto mientras estás en furia.',
    keyRole: 'Daño Físico Devastador & Tanque Inmune a Control Mental',
    features: [
      { level: 3, title: 'Frenesí', description: 'Al entrar en Furia, puedes elegir hacer un Frenesí. Durante la furia, puedes hacer un ataque cuerpo a cuerpo adicional como acción bonus en cada turno. Cuando la furia termina, sufres 1 nivel de agotamiento.', type: 'feature' },
      { level: 6, title: 'Furia Inconcebible', description: 'No puedes ser encantado ni asustado mientras estés en Furia. Si entras en furia estando encantado o asustado, el efecto se suspende durante la furia.', type: 'feature' },
      { level: 10, title: 'Presencia Intimidadora', description: 'Usá tu acción para aterrorizar a una criatura a 9 metros. Debe superar salvación de Sabiduría (CD 8 + prof + Mod CAR) o quedar asustada hasta el final de tu siguiente turno.', type: 'feature' },
      { level: 14, title: 'Represalia', description: 'Cuando recibes daño de una criatura adyacente, puedes usar tu reacción para hacer un ataque cuerpo a cuerpo contra ella.', type: 'feature' }
    ]
  },
  'Camino del Guerrero Totémico': {
    name: 'Camino del Guerrero Totémico',
    className: 'Bárbaro',
    description: 'Aprendes a sintonizar tu alma con los espíritus de la naturaleza y las bestias, obteniendo la fuerza del Oso, la agilidad del Águila o la ferocidad del Lobo.',
    coreMechanic: 'Resistencia casi total a todo tipo de daño (Oso) o ventajas tácticas para tus aliados en combate (Lobo/Águila).',
    keyRole: 'Super-Tanque & Apoyo de Combate Táctico',
    proficienciesGranted: ['Hablar con Animales (Ritual)', 'Sentido Bestial (Ritual)'],
    features: [
      { level: 3, title: 'Buscador de Espíritus', description: 'Ganas la capacidad de lanzar los conjuros "Hablar con Animales" y "Sentido Bestial" únicamente como rituales.', type: 'spell' },
      { level: 3, title: 'Espíritu Totémico (Oso / Lobo / Águila)', description: 'Oso: Tienes resistencia a todo daño excepto psíquico mientras estás en Furia. Lobo: Tus aliados tienen ventaja en ataques cuerpo a cuerpo contra enemigos adyacentes a ti. Águila: Los enemigos tienen desventaja en ataques de oportunidad contra ti y puedes Esprintar como acción bonus.', type: 'feature' },
      { level: 6, title: 'Aspecto de la Bestia', description: 'Oso: Tu capacidad de carga se duplica y tienes ventaja en pruebas de Fuerza para empujar/levantar. Lobo: Puedes rastrear a paso rápido y moverte en sigilo a paso normal. Águila: Puedes ver hasta 1 km sin problemas.', type: 'feature' },
      { level: 10, title: 'Caminante Espiritual', description: 'Puedes lanzar el conjuro "Comunión con la Naturaleza" como ritual.', type: 'spell' },
      { level: 14, title: 'Sintonía Totémica', description: 'Oso: Enemigos adyacentes tienen desventaja al atacar a aliados. Águila: Puedes volar temporalmente durante tu turno mientras estás en Furia. Lobo: Puedes derribar criaturas grandes o menores como acción bonus al atacar.', type: 'feature' }
    ]
  },
  'Camino del Corazón Salvaje': {
    name: 'Camino del Corazón Salvaje',
    className: 'Bárbaro',
    description: 'Canalizás la magia primaria y elemental del entorno salvaje. Tu furia desata auras de fuego, hielo o tormenta eléctrica a tu alrededor.',
    coreMechanic: 'Auras elementales activas que dañan enemigos o protegen a aliados automáticamente durante tu Furia.',
    keyRole: 'Tanque Zonal & Daño Elemental de Área',
    auras: [
      { levelUnlocked: 3, name: 'Aura de Tormenta (Desierto/Tundra/Mar)', range: '3 metros', description: 'Inflige daño de fuego/frío a enemigos o concede PG temporales a aliados al entrar en furia.' }
    ],
    features: [
      { level: 3, title: 'Aura de Tormenta', description: 'Emanas un aura de 3m durante la furia. Elige entorno: Desierto (2 daño de fuego a enemigos como acción bonus), Tundra (2 PG temporales a aliados) o Mar (1d6 daño de rayo a una criatura).', type: 'aura' },
      { level: 6, title: 'Alma Elemental', description: 'Ganas resistencia a Fuego (Desierto), Frío (Tundra) o Rayo (Mar), y puedes respirar bajo el agua o tolerar temperaturas extremas.', type: 'feature' },
      { level: 10, title: 'Escudo de la Tormenta', description: 'Tus aliados a 3 metros dentro de tu aura ganan tu resistencia elemental.', type: 'aura' },
      { level: 14, title: 'Ira Furiosa', description: 'Efectos adicionales en tu aura: derribar enemigos con relámpagos, congelar su movimiento o quemar a quienes te golpeen.', type: 'feature' }
    ]
  },

  // ==========================================
  // BARDO
  // ==========================================
  'Colegio del Conocimiento': {
    name: 'Colegio del Conocimiento',
    className: 'Bardo',
    description: 'Eruditos y coleccionistas de secretos. Usan su ingenio mordaz para manipular el combate y aprender magia de cualquier tradición existente.',
    coreMechanic: 'Palabras Cortantes para restar a las tiradas de enemigos y Secretos Mágicos Adicionales en niveles tempranos.',
    keyRole: 'Saboteador, Apoyo Versátil & Lanzador de Conjuros Adaptable',
    proficienciesGranted: ['3 Competencias en Habilidades a elección'],
    features: [
      { level: 3, title: 'Competencias Adicionales', description: 'Obtienes competencia en 3 habilidades cualesquiera a tu elección.', type: 'proficiency' },
      { level: 3, title: 'Palabras Cortantes', description: 'Usá tu reacción y 1 dado de Inspiración Bárdica para restar el resultado a una tirada de ataque, prueba de habilidad o tirada de daño de un enemigo a 18m.', type: 'feature' },
      { level: 6, title: 'Secretos Mágicos Adicionales', description: 'Aprendes 2 conjuros cualesquiera de cualquier lista de clase (de nivel de conjuro que puedas lanzar). Se consideran conjuros de bardo.', type: 'spell' },
      { level: 14, title: 'Habilidad Insuperable', description: 'Cuando hagas una prueba de habilidad, puedes lanzar 1 dado de Inspiración Bárdica y sumarlo al total.', type: 'feature' }
    ]
  },
  'Colegio del Valor': {
    name: 'Colegio del Valor',
    className: 'Bardo',
    description: 'Relatan las hazañas de grandes héroes e inspiran a sus compañeros en primera línea de batalla sosteniendo espada y escudo.',
    coreMechanic: 'Inspiración Bárdica aplicada al daño o a la Clase de Armadura de los aliados, más competencia en armadura media y ataque extra.',
    keyRole: 'Bardo Marcial & Tanque de Apoyo de Primera Línea',
    proficienciesGranted: ['Armaduras Medias', 'Escudos', 'Armas Marciales'],
    features: [
      { level: 3, title: 'Competencias Marciales', description: 'Ganas competencia en Armaduras Medias, Escudos y Armas Marciales.', type: 'proficiency' },
      { level: 3, title: 'Inspiración de Combate', description: 'El aliado con tu Inspiración Bárdica puede añadir el dado a una tirada de daño o usarlo como reacción para sumar el dado a su CA contra un ataque.', type: 'feature' },
      { level: 6, title: 'Ataque Extra', description: 'Puedes atacar dos veces en lugar de una cuando realizas la acción de Atacar en tu turno.', type: 'feature' },
      { level: 14, title: 'Magia de Combate', description: 'Cuando usas tu acción para lanzar un conjuro de Bardo, puedes realizar un ataque con arma como acción bonus.', type: 'feature' }
    ]
  },
  'Colegio de la Glamour': {
    name: 'Colegio de la Glamour',
    className: 'Bardo',
    description: 'Tejida con la magia silvestre y cautivadora de las Feéricas. Dominan el campo de batalla mediante encanto irresistible y presencia regia.',
    coreMechanic: 'Manto de Inspiración para otorgar PG temporales y reposicionar aliados sin provocar ataques de oportunidad.',
    keyRole: 'Control de Masas & Movilidad Aliada',
    features: [
      { level: 3, title: 'Manto de Inspiración', description: 'Gastá 1 Inspiración Bárdica como acción bonus para otorgar PG temporales a hasta tu Mod CAR aliados a 18m. Cada aliado puede usar su reacción para moverse su velocidad sin provocar ataques de oportunidad.', type: 'feature' },
      { level: 3, title: 'Performance Cautivadora', description: 'Tras una actuación de 1 minuto, puedes encantar a un grupo de espectadores que deben superar salvación de Sabiduría o quedar fascinados por ti.', type: 'feature' },
      { level: 6, title: 'Manto de Majestad', description: 'Lanza el conjuro "Orden" como acción bonus durante 1 minuto sin gastar espacio de conjuro. Las criaturas encantadas fallan automáticamente su salvación.', type: 'spell' },
      { level: 14, title: 'Majestad Inquebrantable', description: 'Adquirís una presencia regia. Las criaturas que intenten atacarte deben hacer una salvación de Carisma; si fallan, no pueden atacarte este turno.', type: 'feature' }
    ]
  },

  // ==========================================
  // CLÉRIGO
  // ==========================================
  'Dominio de la Vida': {
    name: 'Dominio de la Vida',
    className: 'Clérigo',
    description: 'El dominio de la vida promueve la vitalidad, la curación y la preservación de las almas contra las fuerzas de la muerte y la podredumbre.',
    coreMechanic: 'Curación potenciada de forma pasiva y Canalizar Divinidad para sanar masivamente sin gastar espacios de conjuro.',
    keyRole: 'Curador Supremo & Soporte Defensivo',
    proficienciesGranted: ['Armaduras Pesadas'],
    spells: [
      { levelUnlocked: 1, spellName: 'Bendecir', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Curar Heridas', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Restablecimiento Menor', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Plegaria de Curación', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Farol de Esperanza', spellLevel: '3', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Revivir', spellLevel: '3', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Discípulo de la Vida', description: 'Tus conjuros de curación sanan PG adicionales iguales a 2 + el nivel del conjuro lanzado.', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Preservar Vida', description: 'Restaura PG a criaturas aliadas a 9m por un valor total de (5 x Nivel de Clérigo). No puede curar más allá del 50% de PG máximo de una criatura.', type: 'feature' },
      { level: 6, title: 'Curación Bendita', description: 'Cuando lanzas un conjuro de curación sobre otra criatura, también te curás a ti mismo 2 + nivel del conjuro PG.', type: 'feature' },
      { level: 8, title: 'Golpe Divino', description: 'Una vez por turno, puedes infligir 1d8 de daño radiante adicional al golpear con un ataque con arma.', type: 'feature' }
    ]
  },
  'Dominio de la Guerra': {
    name: 'Dominio de la Guerra',
    className: 'Clérigo',
    description: 'Los clérigos de la guerra veneran la valentía, el combate honorable y la fuerza en el campo de batalla como la mayor muestra de fe.',
    coreMechanic: 'Ataques adicionales con armas como acción bonus y bonificador masivo (+10) a las tiradas de ataque propias o de aliados.',
    keyRole: 'Clérigo Combatiente de Vanguardia',
    proficienciesGranted: ['Armaduras Pesadas', 'Armas Marciales'],
    spells: [
      { levelUnlocked: 1, spellName: 'Escudo de Fe', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Favor Divino', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Arma Mágica', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Arma Espiritual', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Manto del Cruzado', spellLevel: '3', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Guardias Espirituales', spellLevel: '3', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Sacerdote de la Guerra', description: 'Al realizar la acción de Atacar, puedes realizar un ataque con arma adicional como acción bonus (usos = Modificador de Sabiduría por descanso largo).', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Golpe Guiado', description: 'Puedes sumar +10 a una tirada de ataque propia justo después de ver el resultado del d20.', type: 'feature' },
      { level: 6, title: 'Canalizar Divinidad: Bendición de la Guerra', description: 'Puedes otorgar el bonificador de +10 en el ataque a una criatura aliada a 9 metros.', type: 'feature' },
      { level: 8, title: 'Golpe Divino', description: 'Infliges 1d8 de daño físico adicional (del tipo del arma) una vez por turno al impactar.', type: 'feature' }
    ]
  },
  'Dominio de la Luz': {
    name: 'Dominio de la Luz',
    className: 'Clérigo',
    description: 'Promueven la verdad, la pauta solar y la erradicación de las tinieblas a través de llamas divinas y resplandor purificador.',
    coreMechanic: 'Desventaja a los ataques enemigos con Destello Protector y daño de Fuego/Radiante masivo en área.',
    keyRole: 'Lanzador de Evocación / Fuego Divine',
    spells: [
      { levelUnlocked: 1, spellName: 'Manos Ardientes', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Fuego Feérico', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Esfera Flamígera', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Rayo abrasador', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Bola de Fuego', spellLevel: '3', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Luz del Alba', spellLevel: '3', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Truco de Luz Gratuito', description: 'Aprendes el truco "Luz" si no lo tenías ya.', type: 'spell' },
      { level: 1, title: 'Destello Protector', description: 'Usá tu reacción cuando seas atacado a 9m para imponer desventaja en la tirada de ataque del enemigo lanzando un destello de luz.', type: 'feature' },
      { level: 2, title: 'Canalizar Divinidad: Radiancia del Sol', description: 'Disipa la oscuridad mágica a 9m e inflige 2d10 + nivel de Clérigo de daño radiante a todos los enemigos en el área (salvación de Constitución para la mitad).', type: 'feature' },
      { level: 6, title: 'Destello Mejorado', description: 'Puedes usar Destello Protector para proteger a un aliado atacado a 9m de ti.', type: 'feature' },
      { level: 8, title: 'Conjuro Potente', description: 'Sumas tu modificador de Sabiduría al daño que infliges con cualquier truco de clérigo.', type: 'feature' }
    ]
  },
  'Dominio Arcano': {
    name: 'Dominio Arcano',
    className: 'Clérigo',
    description: 'Clérigos dedicados a los misterios de la urdimbre mágica. Tienden puentes entre la fe divina y el estudio erudito de los magos.',
    coreMechanic: 'Acceso a trucos y conjuros de Mago, y disipación divina de efectos mágicos al curar.',
    keyRole: 'Soporte Anti-Mágico & Utilitario Arcano',
    proficienciesGranted: ['Arcanos (Habilidad)'],
    spells: [
      { levelUnlocked: 1, spellName: 'Detectar Magia', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 1, spellName: 'Proyectil Mágico', spellLevel: '1', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Paso Brumoso', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 3, spellName: 'Llama Persistente', spellLevel: '2', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Anular Magia', spellLevel: '3', notes: 'Siempre preparado' },
      { levelUnlocked: 5, spellName: 'Disipar Magia', spellLevel: '3', notes: 'Siempre preparado' }
    ],
    features: [
      { level: 1, title: 'Iniciado Arcano', description: 'Ganas competencia en Arcanos y aprendes 2 trucos de la lista de Mago que se cuentan como trucos de clérigo.', type: 'spell' },
      { level: 2, title: 'Canalizar Divinidad: Expulsar Extraplanarios', description: 'Funciona como expulsar muertos vivientes pero afecta a Celestiales, Elementales, Feéricos o Infernales.', type: 'feature' },
      { level: 6, title: 'Brecha Arcana', description: 'Cuando curás a una criatura con un conjuro de nivel 1+, puedes disipar un conjuro activo sobre ella de nivel igual o menor al espacio usado.', type: 'feature' }
    ]
  },

  // ==========================================
  // DRUIDA
  // ==========================================
  'Círculo de la Tierra': {
    name: 'Círculo de la Tierra',
    className: 'Druida',
    description: 'Guardianes de la antigua magia de los paisajes salvajes. Se enfocan en el lanzamiento de conjuros naturales y la comunión con el ecosistema.',
    coreMechanic: 'Recuperación de espacios de conjuro en descansos cortos y hechizos adicionales según el bioma elegido.',
    keyRole: 'Lanzador de Conjuros de Control Terrenal',
    spells: [
      { levelUnlocked: 3, spellName: 'Paso sin Rastro (Bosque)', spellLevel: '2', notes: 'Conjuro de Círculo' },
      { levelUnlocked: 3, spellName: 'Crecimiento Espinoso (Montaña)', spellLevel: '2', notes: 'Conjuro de Círculo' },
      { levelUnlocked: 5, spellName: 'Llamar a los Rayos', spellLevel: '3', notes: 'Conjuro de Círculo' },
      { levelUnlocked: 5, spellName: 'Muro de Viento', spellLevel: '3', notes: 'Conjuro de Círculo' }
    ],
    features: [
      { level: 2, title: 'Truco Adicional', description: 'Aprendes un truco de druida adicional a tu elección.', type: 'spell' },
      { level: 2, title: 'Recuperación Natural', description: 'Durante un descanso corto, puedes recuperar espacios de conjuro gastados con un nivel combinado igual a la mitad de tu nivel de druida.', type: 'feature' },
      { level: 3, title: 'Conjuros de Círculo', description: 'Ganas acceso a conjuros preparados adicionales según tu bioma elegido (Bosque, Montaña, Costa, Pantano, etc.).', type: 'spell' },
      { level: 6, title: 'Zancada de Tierra', description: 'El terreno difícil no mágico no te cuesta movimiento extra y puedes pasar por vegetación espinosa sin sufrir daño.', type: 'feature' }
    ]
  },
  'Círculo de la Luna': {
    name: 'Círculo de la Luna',
    className: 'Druida',
    description: 'Fierosa orden de druidas que dominan la transformación en bestias feroces para luchar en la vanguardia.',
    coreMechanic: 'Forma Salvaje Combativa como acción bonus con acceso a bestias de alto Valor de Desafío (CR) y curación con espacios de conjuro.',
    keyRole: 'Metamorfo Combatiente & Tanque de Bestia',
    features: [
      { level: 2, title: 'Forma Salvaje Combativa', description: 'Puedes usar Forma Salvaje como Acción Bonus en lugar de Acción Normal.', type: 'feature' },
      { level: 2, title: 'Formas del Círculo', description: 'Puedes transformarte en bestias más poderosas (CR 1 a nivel 2, CR 2 a nivel 6, etc.), ignorando restricciones normales de CR.', type: 'feature' },
      { level: 2, title: 'Curación Lunar', description: 'Mientras estés en Forma Salvaje, puedes gastar 1 espacio de conjuro como acción bonus para recuperar 1d8 PG por cada nivel del espacio gastado.', type: 'feature' },
      { level: 6, title: 'Golpes Bestiales', description: 'Tus ataques en Forma Salvaje se consideran mágicos a efectos de superar resistencias y humunidades.', type: 'feature' },
      { level: 10, title: 'Forma Salvaje Elemental', description: 'Puedes gastar 2 usos de Forma Salvaje para transformarte en un Elemental de Aire, Tierra, Fuego o Agua.', type: 'feature' }
    ]
  },
  'Círculo de las Estrellas': {
    name: 'Círculo de las Estrellas',
    className: 'Druida',
    description: 'Aprovechan el poder de los astros y las constelaciones para canalizar luz estelar, adivinación y formas astronómicas.',
    coreMechanic: 'Forma Estelar con tres modalidades (Arquero, Cáliz, Dragón) para potenciar ataque, curación o concentración.',
    keyRole: 'Lanzador Estelar & Versatilidad Astral',
    features: [
      { level: 2, title: 'Mapa Estelar', description: 'Puedes lanzar el conjuro "Guiado" sin gastar espacios de conjuro un número de veces igual a tu bono de competencia.', type: 'spell' },
      { level: 2, title: 'Forma Estelar', description: 'Asumes un aspecto luminoso. Elige constelación: Arquero (disparar flecha estelar 1d8+SAB como acción bonus), Cáliz (curación extra 1d8+SAB al curar) o Dragón (mínimo 10 en d20 para mantener concentración).', type: 'feature' },
      { level: 6, title: 'Presagio Cósmico', description: 'Tiras un d6 tras un descanso largo (Par: Weal / Impar: Woe) para sumar o restar 1d6 a tiradas de aliados o enemigos.', type: 'feature' }
    ]
  },

  // ==========================================
  // EXPLORADOR
  // ==========================================
  'Cazador': {
    name: 'Cazador',
    className: 'Explorador',
    description: 'Especialista en adaptarse para abatir las amenazas más mortíferas del mundo salvaje, desde hordas de ghouls hasta gigantes de las colinas.',
    coreMechanic: 'Tácticas de combate a elección para destrozar presas solitarias grandes o múltiples enemigos adyacentes.',
    keyRole: 'Dañador Físico Táctico de Rango o Cuerpo a Cuerpo',
    features: [
      { level: 3, title: 'Táctica de Cazador', description: 'Elige 1 opción: Asesino de Gigantes (+1d8 de daño a enemigos heridos), Matagigantes (reacción para atacar a criaturas Grandes que te fallen) o Deflector de Hordas (ataque extra a una segunda criatura adyacente).', type: 'feature' },
      { level: 7, title: 'Defensa de Cazador', description: 'Elige 1 opción: Escapar de la Horda (desventaja en ataques de oportunidad contra ti), Táctica Acero (+4 CA contra ataques subsecuentes del mismo enemigo) o Esquivar en un Santiamén.', type: 'feature' },
      { level: 11, title: 'Multiataque', description: 'Ataque en Volea a distancia o Ataque en Torbellino cuerpo a cuerpo a todos los enemigos en un área determinada.', type: 'feature' }
    ]
  },
  'Señor de las Bestias': {
    name: 'Señor de las Bestias',
    className: 'Explorador',
    description: 'Crea un vínculo espiritual y físico indisoluble con una bestia salvaje que lucha en perfecta coordinación junto a él.',
    coreMechanic: 'Compañero Bestia personalizado que actúa en combate recibiendo órdenes con tus acciones o bonus.',
    keyRole: 'Compañero de Combate Doble & Control del Campo',
    companion: {
      name: 'Compañero Bestia (Tierra / Aire / Agua)',
      type: 'Bestia Leal',
      description: 'Lucha en tu turno. Suma tu Bonificador de Competencia a su CA, tiradas de ataque, daño y salvaciones.',
      statsSummary: 'PG = 5 x Nivel de Explorador | CA = 13 + Prof | Daño = 1d6+2+Prof'
    },
    features: [
      { level: 3, title: 'Compañero Bestia', description: 'Invocás o vinculás un espíritu bestial. En combate actúa en tu turno. Puedes ordenarle atacar usando uno de tus ataques de la acción de Atacar.', type: 'companion' },
      { level: 7, title: 'Entrenamiento Práctico', description: 'Si la bestia no ataca, puede usar Ayudar, Destrabar o Esprintar como acción bonus en su turno.', type: 'feature' },
      { level: 11, title: 'Furia Bestial', description: 'Tu compañero bestia puede hacer dos ataques cuando le ordenás atacar.', type: 'feature' }
    ]
  },
  'Vagabundo Feérico': {
    name: 'Vagabundo Feérico',
    className: 'Explorador',
    description: 'Bendecido con la magia caprichosa y deslumbrante de la Selva Feérica. Combina carisma encantador con impactos psíquicos.',
    coreMechanic: 'Daño psíquico extra en cada impacto y bonificador de Sabiduría sumado a pruebas de Persuasión.',
    keyRole: 'Dañador Psíquico & Cara Social del Grupo',
    spells: [
      { levelUnlocked: 3, spellName: 'Fuego Feérico', spellLevel: '1', notes: 'Conjuro de Vagabundo Feérico' },
      { levelUnlocked: 5, spellName: 'Paso Brumoso', spellLevel: '2', notes: 'Conjuro de Vagabundo Feérico' }
    ],
    features: [
      { level: 3, title: 'Golpes Terroríficos', description: 'Una vez por turno al golpear a una criatura con un arma, infliges 1d4 de daño psíquico extra.', type: 'feature' },
      { level: 3, title: 'Presencia Feérica', description: 'Sumas tu modificador de Sabiduría a cualquier prueba de habilidad de Carisma que realices.', type: 'feature' },
      { level: 7, title: 'Giro Encantador', description: 'Ganas ventaja en salvaciones contra ser Encantado o Asustado. Si tú o un aliado salvan, puedes redirigir el efecto a un enemigo.', type: 'feature' }
    ]
  },

  // ==========================================
  // GUERRERO
  // ==========================================
  'Campeón': {
    name: 'Campeón',
    className: 'Guerrero',
    description: 'El Campeón persigue la perfección física y el dominio atlético puro, convirtiéndose en una máquina imparable de críticos.',
    coreMechanic: 'Rango de crítico ampliado (19-20 y 18-20) y bonificaciones pasivas de atletismo e iniciativa.',
    keyRole: 'Dañador Físico Directo & Tanque Pasivo Robusto',
    features: [
      { level: 3, title: 'Crítico Mejorado', description: 'Tus ataques con arma consiguen un golpe crítico con una tirada de 19 o 20 en el d20.', type: 'feature' },
      { level: 7, title: 'Atleta Notable', description: 'Sumas la mitad de tu bonificador de competencia (redondeado hacia arriba) a cualquier prueba de Fuerza, Destreza o Constitución que no la tenga ya. Además, aumenta tu distancia de salto.', type: 'feature' },
      { level: 10, title: 'Estilo de Combate Adicional', description: 'Puedes elegir un segundo Estilo de Combate de la lista de Guerrero.', type: 'proficiency' },
      { level: 15, title: 'Crítico Superior', description: 'Tus ataques con arma consiguen un golpe crítico con una tirada de 18, 19 o 20 en el d20.', type: 'feature' },
      { level: 18, title: 'Superviviente', description: 'Al inicio de tu turno en combate, recuperas 5 + Modificador de CON PG si tienes menos de la mitad de tus PG máximos.', type: 'feature' }
    ]
  },
  'Maestro de Batalla': {
    name: 'Maestro de Batalla',
    className: 'Guerrero',
    description: 'Estudiosos del combate táctico y la esgrima refinada. Perciben la batalla como un tablero donde cada movimiento está calculado.',
    coreMechanic: 'Maniobras de combate impulsadas por Dados de Superioridad (d8) que modifican ataques, mueven aliados o derriban enemigos.',
    keyRole: 'Controlador Táctico de Combate & Comandante',
    proficienciesGranted: ['1 Herramienta de Artesano a elección'],
    maneuversOrAbilities: [
      'Empuje Tactico (Derriba o empuja 4.5m)',
      'Maniobra de Parada (Resta d8+DES al daño recibido)',
      'Riposta (Ataque de reacción al fallarte un enemigo)',
      'Desarme (Fuerza a soltar el arma al enemigo)',
      'Ataque del Comandante (Un aliado ataca usando su reacción)',
      'Finta (Ventaja en el ataque + daño extra d8)'
    ],
    features: [
      { level: 3, title: 'Superioridad Táctica', description: 'Aprendes 3 Maniobras de combate y recibes 4 Dados de Superioridad (d8). Gastas un dado para ejecutar una maniobra. Se recuperan en descansos cortos o largos.', type: 'maneuver' },
      { level: 3, title: 'Estudiante de la Guerra', description: 'Obtienes competencia con un tipo de herramientas de artesano a tu elección.', type: 'proficiency' },
      { level: 7, title: 'Conoce a tu Enemigo', description: 'Si observás a una criatura durante 1 minuto fuera de combate, el DM te dirá si sus atributos (FUE, DES, CON, CA o PG) son superiores o inferiores a los tuyos.', type: 'feature' },
      { level: 10, title: 'Superioridad Mejorada', description: 'Tus Dados de Superioridad se convierten en d10.', type: 'feature' }
    ]
  },
  'Caballero Arcano': {
    name: 'Caballero Arcano',
    className: 'Guerrero',
    description: 'Combina la destreza marcial del guerrero con el estudio erudito de la magia de Evocación y Abjuración de los magos.',
    coreMechanic: 'Lanzamiento de conjuros basado en Inteligencia y Vínculo con Arma para invocar tus armas mágicamente a la mano.',
    keyRole: 'Guerrero Mágico & Tanque Defensivo Arcano',
    spells: [
      { levelUnlocked: 3, spellName: 'Escudo', spellLevel: '1', notes: 'Conjuro de Abjuración (+5 CA)' },
      { levelUnlocked: 3, spellName: 'Proyectil Mágico', spellLevel: '1', notes: 'Conjuro de Evocación' },
      { levelUnlocked: 7, spellName: 'Paso Brumoso', spellLevel: '2', notes: 'Conjuro de Transmutación' }
    ],
    features: [
      { level: 3, title: 'Lanzamiento de Conjuros', description: 'Usas Inteligencia para lanzar conjuros de la lista de Mago (enfocado en Evocación y Abjuración). Aprendes 2 trucos y 3 conjuros de nivel 1.', type: 'spell' },
      { level: 3, title: 'Vínculo con Arma', description: 'Realizas un ritual de 1 hora para vincularte con hasta 2 armas. No puedes ser desarmado de ellas y puedes invocarlas a tu mano como acción bonus.', type: 'feature' },
      { level: 7, title: 'Magia de Combate', description: 'Cuando usas tu acción para lanzar un truco, puedes realizar un ataque con arma como acción bonus.', type: 'feature' },
      { level: 10, title: 'Golpe Mágico', description: 'Cuando golpeas a una criatura con un arma, esta tiene desventaja en la siguiente salvación contra un conjuro tuyo.', type: 'feature' }
    ]
  },

  // ==========================================
  // HECHICERO
  // ==========================================
  'Linaje Dracónico': {
    name: 'Linaje Dracónico',
    className: 'Hechicero',
    description: 'Tu magia innata proviene del torrente sanguíneo de un poderoso dragón ancestral, otorgándote escamas de dragón y afinidad elemental.',
    coreMechanic: 'Resiliencia Dracónica pasiva (+1 PG/nivel y CA 13+DES sin armadura) y daño elemental potenciado.',
    keyRole: 'Dañador Elemental & Lanzador Resistente',
    features: [
      { level: 1, title: 'Ancestro Dracónico', description: 'Elige un color de dragón (ej. Rojo/Fuego, Azul/Rayo, Blanco/Frío). Aprendes a hablar Dracónico y tienes ventaja en pruebas de interacción con dragones.', type: 'feature' },
      { level: 1, title: 'Resiliencia Dracónica', description: 'Tu máximo de PG aumenta en 1 por cada nivel de hechicero. Además, si no llevas armadura, tu CA base es 13 + Modificador de Destreza.', type: 'feature' },
      { level: 6, title: 'Afinidad Elemental', description: 'Al lanzar un conjuro que inflija el tipo de daño de tu ancestro dracónico, sumas tu modificador de Carisma al daño. Puedes gastar 1 Punto de Hechicería para ganar resistencia a ese elemento durante 1 hora.', type: 'feature' },
      { level: 14, title: 'Alas Dracónicas', description: 'Brotan alas de dragón de tu espalda otorgándote una velocidad de vuelo igual a tu velocidad en tierra.', type: 'feature' }
    ]
  },
  'Magia Salvaje': {
    name: 'Magia Salvaje',
    className: 'Hechicero',
    description: 'Tu poder proviene de las fuerzas del caos primigenio del plano del Limbo. Tu magia es tan impredecible como devastadora.',
    coreMechanic: 'Mareas de Caos para ganar ventaja a voluntad y la tabla de Oleada de Magia Salvaje (d100) al lanzar conjuros.',
    keyRole: 'Lanzador Caótico de Alto Riesgo / Alta Recompensa',
    features: [
      { level: 1, title: 'Oleada de Magia Salvaje', description: 'Al lanzar un conjuro de nivel 1+, el DM puede hacerte tirar 1d20. Si sale 1, tiras en la tabla de Oleada de Magia Salvaje (d100) produciendo efectos aleatorios.', type: 'feature' },
      { level: 1, title: 'Mareas de Caos', description: 'Ganas ventaja en una tirada de ataque, prueba de habilidad o salvación. Recuperas este uso tras un descanso largo o cuando el DM active una Oleada de Magia Salvaje.', type: 'feature' },
      { level: 6, title: 'Manipular la Suerte', description: 'Gastá 2 Puntos de Hechicería como reacción para tirar 1d4 y sumarlo o restarlo a la tirada de d20 de otra criatura.', type: 'feature' }
    ]
  },
  'Alma Mecánica': {
    name: 'Alma Mecánica',
    className: 'Hechicero',
    description: 'Sintonizado con el plano de Modron y el orden absoluto del multiverso. Anulas el caos y restableces la precisión matemática.',
    coreMechanic: 'Conjuros mecánicos siempre preparados y la habilidad de anular ventajas o desventajas en tiradas cercanas.',
    keyRole: 'Manipulador del Orden & Escudo Mecánico',
    spells: [
      { levelUnlocked: 1, spellName: 'Alarma', spellLevel: '1', notes: 'Conjuro Mecánico' },
      { levelUnlocked: 1, spellName: 'Armadura de Agathys', spellLevel: '1', notes: 'Conjuro Mecánico' },
      { levelUnlocked: 3, spellName: 'Restablecimiento Menor', spellLevel: '2', notes: 'Conjuro Mecánico' }
    ],
    features: [
      { level: 1, title: 'Restaurar el Orden', description: 'Como reacción cuando una criatura a 18m va a tirar con ventaja o desventaja, puedes anular esa ventaja o desventaja. Usos = Bonificador de competencia.', type: 'feature' },
      { level: 6, title: 'Escudo de Orden', description: 'Gastá de 1 a 5 Puntos de Hechicería para crear un escudo alrededor de ti o un aliado que absorbe daño (d8s igual a los puntos gastados).', type: 'feature' }
    ]
  },

  // ==========================================
  // MAGO
  // ==========================================
  'Escuela de Evocación': {
    name: 'Escuela de Evocación',
    className: 'Mago',
    description: 'Especialistas en manipular la energía elemental pura para crear explosiones de fuego, relámpagos devastadores y hielo mortal.',
    coreMechanic: 'Esculpido de Conjuros para proteger a los aliados de tus propios conjuros de área (ej. Bola de Fuego).',
    keyRole: 'Dañador de Área Masivo & Artillería Mágica',
    features: [
      { level: 2, title: 'Sabio de Evocación', description: 'El oro y tiempo requeridos para copiar un conjuro de Evocación en tu grimorio se reducen a la mitad.', type: 'feature' },
      { level: 2, title: 'Esculpido de Conjuros', description: 'Al lanzar un conjuro de evocación de área, puedes elegir un número de criaturas (1 + nivel del conjuro) para que tengan éxito automáticamente en la salvación y no reciban daño si normalmente recibirían la mitad.', type: 'feature' },
      { level: 6, title: 'Potentísima Cantrip', description: 'Tus trucos que requieren una tirada de salvación infligen la mitad de su daño si el objetivo supera la salvación.', type: 'feature' },
      { level: 10, title: 'Evocación Potenciada', description: 'Sumas tu modificador de Inteligencia a una tirada de daño de cualquier conjuro de evocación de mago que lances.', type: 'feature' }
    ]
  },
  'Escuela de Abjuración': {
    name: 'Escuela de Abjuración',
    className: 'Mago',
    description: 'Maestros de la magia defensiva, barreras protectoras, anulación de hechizos enemigos y desvanecimiento de maldiciones.',
    coreMechanic: 'Bastión Arcano que genera un escudo de energía que absorbe daño al lanzar conjuros defensivos.',
    keyRole: 'Protector Defensivo & Mago Anti-Conjuros',
    auras: [
      { levelUnlocked: 6, name: 'Abjuración Proyectada', range: '9 metros', description: 'Interpone tu Bastión Arcano para absorber daño dirigido a un aliado.' }
    ],
    features: [
      { level: 2, title: 'Sabio de Abjuración', description: 'Costo y tiempo de copiado de conjuros de Abjuración reducidos al 50%.', type: 'feature' },
      { level: 2, title: 'Bastión Arcano', description: 'Al lanzar un conjuro de abjuración de nivel 1+, creas un escudo mágico que absorbe daño igual a (2 x Nivel de Mago + Mod INT). Se recarga al lanzar más abjuraciones.', type: 'feature' },
      { level: 6, title: 'Abjuración Proyectada', description: 'Usá tu reacción cuando un aliado a 9m reciba daño para interponer tu Bastión Arcano y recibir el daño con tu escudo en su lugar.', type: 'aura' },
      { level: 10, title: 'Abjurador Robusto', description: 'Sumas tu bonificador de competencia a las pruebas de habilidad para Anular Magia o Disipar Magia.', type: 'feature' }
    ]
  },
  'Escuela de Nigromancia': {
    name: 'Escuela de Nigromancia',
    className: 'Mago',
    description: 'Estudian las fuerzas de la vida, la muerte y la no-vida, aprendiendo a drenar la energía vital enemiga y alzar sirvientes no-muertos.',
    coreMechanic: 'Cosecha Oscura para curarse al matar enemigos con magia y potenciar a los muertos vivientes creados.',
    keyRole: 'Invocador de No-Muertos & Drenador Vital',
    companion: {
      name: 'Ejército No-Muerto (Esqueletos / Zombies)',
      type: 'Servidores de la Muerte',
      description: 'Sirvientes creados con Animar a los Muertos. Tienen PG extra y añaden tu bonificador de competencia a sus tiradas de daño.',
      statsSummary: 'PG + Nivel de Mago | Daño + Prof'
    },
    features: [
      { level: 2, title: 'Sabio de Nigromancia', description: 'Copiar conjuros de Nigromancia cuesta la mitad de tiempo y oro.', type: 'feature' },
      { level: 2, title: 'Cosecha Oscura', description: 'Una vez por turno, al matar a una criatura con un conjuro de nivel 1+, recuperas PG iguales al doble del nivel del conjuro (el triple si es de Nigromancia).', type: 'feature' },
      { level: 6, title: 'Servidores de la Muerte', description: 'Añades "Animar a los Muertos" a tu grimorio. Al lanzarlo, puedes alzar un esqueleto o zombi adicional. Sus PG máximos aumentan en tu nivel de mago y su daño suma tu bonificador de competencia.', type: 'companion' }
    ]
  },

  // ==========================================
  // MONJE
  // ==========================================
  'Camino de la Mano Abierta': {
    name: 'Camino de la Mano Abierta',
    className: 'Monje',
    description: 'Maestros absolutos del combate cuerpo a cuerpo y la manipulación de la energía Ki a través de golpes marciales precisos.',
    coreMechanic: 'Técnica de la Mano Abierta para empujar, derribar o quitar reacciones a los enemigos mediante Ráfaga de Golpes.',
    keyRole: 'Controlador Marcial Cerca a Cerca & Inhabilitador',
    features: [
      { level: 3, title: 'Técnica de la Mano Abierta', description: 'Al impactar con un golpe de Ráfaga de Golpes, puedes imponer 1 efecto: derribar al objetivo (salvación de FUE), empujarlo 4.5m (salvación de FUE) o impedirle usar reacciones hasta el final de tu siguiente turno.', type: 'feature' },
      { level: 6, title: 'Claridad de Cuerpo', description: 'Como acción en tu turno, puedes curarte PG iguales a (3 x tu nivel de Monje). Requiere descanso largo para reutilizar.', type: 'feature' },
      { level: 11, title: 'Tranquilidad', description: 'Ganas el efecto del conjuro "Santuario" permanentemente tras completar un descanso largo (CD de salvación = 8 + prof + Mod SAB).', type: 'feature' },
      { level: 17, title: 'Palma Temblorosa', description: 'Puedes imbuir vibraciones mortales con 3 Puntos de Ki. Más tarde, como acción, puedes detener las vibraciones: la criatura cae a 0 PG si falla salvación de Constitución (o recibe 10d10 de daño si la supera).', type: 'feature' }
    ]
  },
  'Camino de la Sombra': {
    name: 'Camino de la Sombra',
    className: 'Monje',
    description: 'Asesinos sigilosos y espías que canalizan la energía del Plano de las Sombras para volverse invisibles y teletransportarse.',
    coreMechanic: 'Artes de la Sombra para lanzar conjuros de sigilo/oscuridad con Ki y teletransporte entre penumbras.',
    keyRole: 'Infiltrador, Asesino Sigiloso & Escaramuzador',
    features: [
      { level: 3, title: 'Artes de la Sombra', description: 'Gastá 2 Puntos de Ki para lanzar los conjuros: Oscuridad, Visión Oscura, Pasar sin Rastro o Silencio sin componentes materiales. Aprendes el truco Ilusión Menor.', type: 'spell' },
      { level: 6, title: 'Paso de las Sombras', description: 'Mientras estés en penumbra u oscuridad, puedes teletransportarte hasta 18 metros a otra zona de penumbra como Acción Bonus y ganar ventaja en tu primer ataque cuerpo a cuerpo.', type: 'feature' },
      { level: 11, title: 'Manto de Sombras', description: 'Mientras estés en penumbra u oscuridad, puedes usar tu acción para volverte invisible hasta que ataques o lances un conjuro.', type: 'feature' }
    ]
  },
  'Camino de los Cuatro Elementos': {
    name: 'Camino de los Cuatro Elementos',
    className: 'Monje',
    description: 'Sintonizan su Ki con las fuerzas elementales del fuego, la tierra, el agua y el aire para lanzar disciplinas devastadoras.',
    coreMechanic: 'Disciplinas elementales alimentadas por Ki que replican hechizos y efectos de área elementales.',
    keyRole: 'Monje Striker Elemental & Control Distanciado',
    features: [
      { level: 3, title: 'Disciplinas del Ki Elemental', description: 'Aprendes disciplinas como "Colmillo del Dragón de Fuego" (ataque a distancia con fuego) o "Empuje de las Olas" para moldear los elementos con Puntos de Ki.', type: 'feature' },
      { level: 6, title: 'Moldear los Elementos', description: 'Acceso a nuevas disciplinas de nivel medio (ej. Puño de Aire Desafortunado o Forma del Agua).', type: 'feature' }
    ]
  },

  // ==========================================
  // PALADÍN
  // ==========================================
  'Juramento de Devoción': {
    name: 'Juramento de Devoción',
    className: 'Paladín',
    description: 'El paladín idealizado: virtuoso, justo y protector. Empuñan armas bendecidas para erradicar el mal y proteger a los inocentes.',
    coreMechanic: 'Canalizar Divinidad para bendecir armas con carisma (+CAR a ataques y luz) y Aura de Devoción que impide ser Encantado.',
    keyRole: 'Tanque Sagrado, Líder & Protector Aural',
    auras: [
      { levelUnlocked: 7, name: 'Aura de Devoción', range: '3 metros (6m a Nv 18)', description: 'Tú y los aliados adyacentes no pueden ser encantados mientras estés consciente.' }
    ],
    spells: [
      { levelUnlocked: 3, spellName: 'Protección contra el Bien y el Mal', spellLevel: '1', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 3, spellName: 'Escudo de Fe', spellLevel: '1', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 5, spellName: 'Zona de Verdad', spellLevel: '2', notes: 'Conjuro de Juramento' }
    ],
    features: [
      { level: 3, title: 'Canalizar Divinidad: Arma Sagrada', description: 'Imbues tu arma con energía positiva durante 1 minuto. Sumas tu Modificador de Carisma a las tiradas de ataque y el arma emite luz brillante a 6m.', type: 'feature' },
      { level: 3, title: 'Canalizar Divinidad: Expulsar a los Impíos', description: 'Los abisales y muertos vivientes a 9m deben superar salvación de Sabiduría o ser expulsados durante 1 minuto.', type: 'feature' },
      { level: 7, title: 'Aura de Devoción', description: 'Tú y los aliados dentro de 3m no pueden ser encantados mientras estés consciente.', type: 'aura' },
      { level: 15, title: 'Pureza de Espíritu', description: 'Estás permanentemente bajo los efectos del conjuro "Protección contra el Bien y el Mal".', type: 'feature' }
    ]
  },
  'Juramento de Venganza': {
    name: 'Juramento de Venganza',
    className: 'Paladín',
    description: 'Un juramento despiadado enfocado en dar caza y aniquilar a los malhechores a cualquier precio sin mostrar misericordia.',
    coreMechanic: 'Voto de Enemistad para obtener ventaja en todas las tiradas de ataque contra un objetivo prioritario durante 1 minuto.',
    keyRole: 'Cazador de Jefes & Dañador Físico Implacable',
    auras: [
      { levelUnlocked: 7, name: 'Paso Implacable', range: 'Personal', description: 'Al realizar un ataque de oportunidad, puedes moverte la mitad de tu velocidad como parte de la misma reacción sin provocar O.A.' }
    ],
    spells: [
      { levelUnlocked: 3, spellName: 'Marca del Cazador', spellLevel: '1', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 3, spellName: 'Persecución Feroz', spellLevel: '1', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 5, spellName: 'Paso Brumoso', spellLevel: '2', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 9, spellName: 'Acelerar (Haste)', spellLevel: '3', notes: 'Conjuro de Juramento' }
    ],
    features: [
      { level: 3, title: 'Canalizar Divinidad: Voto de Enemistad', description: 'Como Acción Bonus, jurás enemistad a un enemigo a 9m. Tienes VENTAJA en todas las tiradas de ataque contra él durante 1 minuto o hasta que caiga a 0 PG.', type: 'feature' },
      { level: 3, title: 'Canalizar Divinidad: Abjurar Enemigo', description: 'Asustá y paralizá el movimiento de una criatura que falle salvación de Sabiduría.', type: 'feature' },
      { level: 7, title: 'Paso Implacable', description: 'Cuando golpeas a una criatura con un ataque de oportunidad, puedes moverte hasta la mitad de tu velocidad como parte de la reacción sin provocar ataques de oportunidad.', type: 'aura' }
    ]
  },
  'Juramento de los Ancestros': {
    name: 'Juramento de los Ancestros',
    className: 'Paladín',
    description: 'Defensores de la luz, la naturaleza y la belleza del mundo primigenio, conocidos como Caballeros Feéricos o Verdes.',
    coreMechanic: 'Aura de Salvaguarda que otorga RESISTENCIA al daño de todos los conjuros a ti y a los aliados cercanos.',
    keyRole: 'Super-Tanque Defensivo Anti-Magia',
    auras: [
      { levelUnlocked: 7, name: 'Aura de Salvaguarda', range: '3 metros (6m a Nv 18)', description: 'Tú y los aliados dentro del aura tenéis resistencia al daño infligido por conjuros.' }
    ],
    spells: [
      { levelUnlocked: 3, spellName: 'Enredar', spellLevel: '1', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 3, spellName: 'Fuego Feérico', spellLevel: '1', notes: 'Conjuro de Juramento' },
      { levelUnlocked: 5, spellName: 'Paso sin Rastro', spellLevel: '2', notes: 'Conjuro de Juramento' }
    ],
    features: [
      { level: 3, title: 'Canalizar Divinidad: Ira de la Naturaleza', description: 'Invocás enredaderas mágicas para apresarle las piernas a un enemigo a 3m si falla salvación de Fuerza/Destreza.', type: 'feature' },
      { level: 7, title: 'Aura de Salvaguarda', description: 'Tú y tus aliados a 3 metros ganáis RESISTENCIA al daño proveniente de cualquier conjuro.', type: 'aura' },
      { level: 15, title: 'Sentinela Indomable', description: 'Cuando caes a 0 PG y no morís al instante, puedes elegir caer a 1 PG en su lugar (1 vez por descanso largo). Tampoco sufres achaques por vejez.', type: 'feature' }
    ]
  },

  // ==========================================
  // PÍCARO
  // ==========================================
  'Ladrón': {
    name: 'Ladrón',
    className: 'Pícaro',
    description: 'Especialistas en agilidad deslumbrante, infiltración de guante blanco, uso veloz de herramientas y manipulación de artefactos mágicos.',
    coreMechanic: 'Manos Rápidas para interactuar con objetos, desarmar trampas o hurtar como Acción Bonus.',
    keyRole: 'Escaramuzador Veloz & Utilitario de Campo',
    features: [
      { level: 3, title: 'Manos Rápidas', description: 'Puedes usar la Acción Bonus concedida por Acción Astuta para realizar una prueba de Juego de Manos, usar tus herramientas de ladrón para desarmar una trampa o abrir una cerradura, o usar la acción de Usar un Objeto.', type: 'feature' },
      { level: 3, title: 'Trabajo en las Alturas', description: 'Trepar ya no te cuesta movimiento extra. Además, aumentas tu distancia de salto una cantidad de metros igual a tu Modificador de Destreza.', type: 'feature' },
      { level: 9, title: 'Sigilo Supremo', description: 'Tienes ventaja en las pruebas de Destreza (Sigilo) si te movés a no más de la mitad de tu velocidad en ese turno.', type: 'feature' },
      { level: 13, title: 'Uso de Dispositivos Mágicos', description: 'Ignoras todos los requisitos de clase, raza y nivel para la sintonización y uso de cualquier objeto mágico.', type: 'feature' }
    ]
  },
  'Asesino': {
    name: 'Asesino',
    className: 'Pícaro',
    description: 'Maestros del arte de la muerte sigilosa, el disfraz engañoso y los venenos mortales para eliminar objetivos antes de ser detectados.',
    coreMechanic: 'Ventaja automática contra enemigos que no hayan actuado y Golpes Críticos automáticos si sorprendes al objetivo.',
    keyRole: 'Striker Sorpresa de Un Solo Golpe Devastador',
    proficienciesGranted: ['Kit de Disfraz', 'Kit de Venenos'],
    features: [
      { level: 3, title: 'Competencias de Asesino', description: 'Ganas competencia con el Kit de Disfraz y el Kit de Venenos.', type: 'proficiency' },
      { level: 3, title: 'Asesinar', description: 'Tienes VENTAJA en las tiradas de ataque contra cualquier criatura que aún no haya actuado en el combate. Además, cualquier ataque que impacte a una criatura sorprendida es automáticamente un GOLPE CRÍTICO.', type: 'feature' },
      { level: 9, title: 'Infiltración Experta', description: 'Puedes crear falsas identidades creíbles con historial, documentación y vestimenta tras dedicar 7 días de estudio y 25 po.', type: 'feature' },
      { level: 17, title: 'Golpe Mortal', description: 'Al golpear a una criatura sorprendida, esta debe superar una salvación de Constitución (CD 8 + prof + Mod DES) o el daño del ataque se DUPLICA.', type: 'feature' }
    ]
  },
  'Embaucador Arcano': {
    name: 'Embaucador Arcano',
    className: 'Pícaro',
    description: 'Pícaros que combinan el sigilo físico con la magia de Ilusión y Encantamiento para realizar hurtos imposibles y engaños deslumbrantes.',
    coreMechanic: 'Mano de Mago Mejorada e invisible que realiza tareas picarescas a distancia como abrir cerraduras o robar de bolsillos.',
    keyRole: 'Pícaro Infiltrador Mágico & Utilitario de Ilusión',
    spells: [
      { levelUnlocked: 3, spellName: 'Mano de Mago', spellLevel: 'Truco', notes: 'Mano Invisible' },
      { levelUnlocked: 3, spellName: 'Risas Espantosas de Tasha', spellLevel: '1', notes: 'Encantamiento' },
      { levelUnlocked: 3, spellName: 'Disfrazarse', spellLevel: '1', notes: 'Ilusión' },
      { levelUnlocked: 7, spellName: 'Invisibilidad', spellLevel: '2', notes: 'Ilusión' }
    ],
    features: [
      { level: 3, title: 'Lanzamiento de Conjuros', description: 'Lanzas conjuros de la lista de Mago (enfocado en Ilusión y Encantamiento) usando Inteligencia.', type: 'spell' },
      { level: 3, title: 'Mano de Mago Mejorada', description: 'Tu truco Mano de Mago es invisible. Puedes usarla como Acción Bonus para hurtar objetos de recipientes, poner objetos en bolsillos de otros o abrir cerraduras/desactivar trampas a distancia.', type: 'feature' },
      { level: 9, title: 'Emboscada Mágica', description: 'Si estás oculto de una criatura cuando le lanzas un conjuro, esa criatura tiene desventaja en las salvaciones contra el conjuro ese turno.', type: 'feature' }
    ]
  },

  // ==========================================
  // BRUJO
  // ==========================================
  'Patrón Arquihada': {
    name: 'Patrón Arquihada',
    className: 'Brujo',
    description: 'Tu pacto está firmado con un señor o señora de las cortes feéricas, otorgándote magia de ilusiones, encantamiento y escapismo elegante.',
    coreMechanic: 'Presencia Feérica para encantar/asustar en área y teletransporte invisible de reacción al recibir daño.',
    keyRole: 'Encantador Feérico & Escaramuzador Involuntario',
    spells: [
      { levelUnlocked: 1, spellName: 'Fuego Feérico', spellLevel: '1', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 1, spellName: 'Sueño', spellLevel: '1', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 3, spellName: 'Paso Brumoso', spellLevel: '2', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 3, spellName: 'Calmar Emociones', spellLevel: '2', notes: 'Conjuro de Patrón' }
    ],
    features: [
      { level: 1, title: 'Presencia Feérica', description: 'Como acción, puedes hacer que todas las criaturas en un cubo de 3m se sometan a una salvación de Carisma o queden Asustadas o Encantadas por ti hasta tu siguiente turno (1 vez por descanso).', type: 'feature' },
      { level: 6, title: 'Escape Feérico', description: 'Como reacción al sufrir daño, te volvés invisible y te teletransportás hasta 18 metros a un espacio no ocupado que veas.', type: 'feature' },
      { level: 10, title: 'Mente Beguiling', description: 'Eres inmune a ser Encantado. Cuando otra criatura intente encantarte, puedes usar tu reacción para redirigir el encanto a ella.', type: 'feature' }
    ]
  },
  'Patrón Fiendish': {
    name: 'Patrón Fiendish',
    className: 'Brujo',
    description: 'Has forjado una alianza diabólica o demoníaca con un Señor del Infierno o del Abismo. Tu magia arde con fuego destructivo.',
    coreMechanic: 'Bendición del Oscuro que concede Puntos de Golpe temporales al aniquilar enemigos.',
    keyRole: 'Brujo de Fuego Destructivo & Tanque Temporal',
    spells: [
      { levelUnlocked: 1, spellName: 'Manos Ardientes', spellLevel: '1', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 1, spellName: 'Rayo de Hechizo', spellLevel: '1', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 3, spellName: 'Esfera Flamígera', spellLevel: '2', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 5, spellName: 'Bola de Fuego', spellLevel: '3', notes: 'Conjuro de Patrón' }
    ],
    features: [
      { level: 1, title: 'Bendición del Oscuro', description: 'Cuando reducís a una criatura hostil a 0 PG, ganas PG temporales iguales a tu Modificador de Carisma + tu nivel de Brujo.', type: 'feature' },
      { level: 6, title: 'Propia Suerte Oscura', description: 'Puedes sumar 1d10 a una prueba de habilidad o salvación que realices (1 vez por descanso corto o largo).', type: 'feature' },
      { level: 10, title: 'Resiliencia Infernal', description: 'Tras un descanso, elige un tipo de daño: ganas resistencia a ese daño (salvo armas mágicas o de plata).', type: 'feature' }
    ]
  },
  'Patrón Great Old One': {
    name: 'Patrón Great Old One',
    className: 'Brujo',
    description: 'Tu patrono es una entidad incomprensible de los vacíos entre las estrellas, como Cthulhu o Hadar. Canalizás magia psíquica y locura.',
    coreMechanic: 'Mente Despierta para comunicación telepática instantánea con cualquier criatura y escudos de interferencia mental.',
    keyRole: 'Controlador Psíquico & Telepata Dimensional',
    spells: [
      { levelUnlocked: 1, spellName: 'Disonancia Susurrante', spellLevel: '1', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 1, spellName: 'Risas Espantosas de Tasha', spellLevel: '1', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 3, spellName: 'Detectar Pensamientos', spellLevel: '2', notes: 'Conjuro de Patrón' },
      { levelUnlocked: 3, spellName: 'Sugestión', spellLevel: '2', notes: 'Conjuro de Patrón' }
    ],
    features: [
      { level: 1, title: 'Mente Despierta', description: 'Puedes comunicarte telepáticamente con cualquier criatura que veas a 9m de ti, independientemente de si comparten idioma.', type: 'feature' },
      { level: 6, title: 'Escudo Psíquico', description: 'Cuando una criatura te haga una tirada de ataque, puedes usar tu reacción para imponerle desventaja. Si falla, tu siguiente ataque contra ella tiene ventaja.', type: 'feature' },
      { level: 10, title: 'Escudo Mental', description: 'Tus pensamientos no pueden ser leídos por magia salvo que lo permitas. Además, tienes resistencia al daño Psíquico.', type: 'feature' }
    ]
  }
};
