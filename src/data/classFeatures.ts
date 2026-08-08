export type FeatureDef = {
  name: string;
  description: string;
  prerequisite?: string;
};

export const WARLOCK_INVOCATIONS: FeatureDef[] = [
  { name: 'Ráfaga Agonizante', description: 'Cuando lanzas Descarga Sobrenatural, suma tu modificador de Carisma al daño que inflige cada rayo.', prerequisite: 'Truco Descarga Sobrenatural' },
  { name: 'Armadura de Sombras', description: 'Puedes lanzar Armadura de Mago sobre ti mismo a voluntad, sin gastar un espacio de conjuro ni componentes materiales.' },
  { name: 'Vista del Diablo', description: 'Puedes ver con normalidad en la oscuridad, tanto mágica como no mágica, hasta una distancia de 120 pies.' },
  { name: 'Influencia Seductora', description: 'Ganas competencia en las habilidades de Engaño y Persuasión.' },
  { name: 'Ladrón de Cinco Destinos', description: 'Puedes lanzar Perdición usando un espacio de conjuro de brujo. Una vez que lo haces, no puedes volver a hacerlo hasta terminar un descanso largo.', prerequisite: 'Nivel 5' },
  { name: 'Mirada de dos Mentes', description: 'Puedes usar tu acción para tocar a un humanoide voluntario y percibir a través de sus sentidos hasta el final de tu siguiente turno.' },
  { name: 'Lenguaje de las Bestias', description: 'Puedes lanzar Hablar con los Animales a voluntad, sin gastar un espacio de conjuro.' },
  { name: 'Salto Sobrenatural', description: 'Puedes lanzar Saltar sobre ti mismo a voluntad, sin gastar un espacio de conjuro ni componentes materiales.', prerequisite: 'Nivel 9' },
  { name: 'Visiones Distantes', description: 'Puedes lanzar Ojo Arcano a voluntad, sin gastar un espacio de conjuro.', prerequisite: 'Nivel 15' },
  { name: 'Susurros de la Tumba', description: 'Puedes lanzar Hablar con los Muertos a voluntad, sin gastar un espacio de conjuro.', prerequisite: 'Nivel 9' },
  { name: 'Cadenas de Carceri', description: 'Puedes lanzar Inmovilizar Monstruo a voluntad (enfocado en celestiales, infernales o elementales).', prerequisite: 'Nivel 15, Pacto de la Cadena' }
];

export const METAMAGIC_OPTIONS: FeatureDef[] = [
  { name: 'Hechizo Cuidadoso', description: 'Gasta 1 punto de hechicería. Las criaturas que elijas superan automáticamente la tirada de salvación del hechizo.' },
  { name: 'Hechizo Distante', description: 'Gasta 1 punto de hechicería. Duplica el alcance del hechizo (o 30 pies si el alcance es toque).' },
  { name: 'Hechizo Potenciado', description: 'Gasta 1 punto de hechicería. Vuelve a tirar hasta una cantidad de dados de daño igual a tu modificador de Carisma.' },
  { name: 'Hechizo Extendido', description: 'Gasta 1 punto de hechicería. Duplica la duración del hechizo, hasta un máximo de 24 horas.' },
  { name: 'Hechizo Elevado', description: 'Gasta 3 puntos de hechicería. Una criatura afectada tiene desventaja en la primera tirada de salvación.' },
  { name: 'Hechizo Acelerado', description: 'Gasta 2 puntos de hechicería. Cambia el tiempo de lanzamiento de 1 acción a 1 acción adicional.' },
  { name: 'Hechizo Sutil', description: 'Gasta 1 punto de hechicería. Lanzas el hechizo sin componentes somáticos ni verbales.' },
  { name: 'Hechizo Gemelo', description: 'Gasta puntos iguales al nivel del hechizo (1 si es truco). Afecta a una segunda criatura dentro del alcance (el hechizo debe ser de un solo objetivo).' },
  { name: 'Hechizo Buscador', description: 'Gasta 2 puntos de hechicería. Si fallas una tirada de ataque del hechizo, puedes volver a tirar el d20 y debes usar la nueva tirada.' },
  { name: 'Hechizo Transmutado', description: 'Gasta 1 punto de hechicería. Cambia el tipo de daño del hechizo a ácido, frío, fuego, rayo, veneno o trueno.' }
];

export const PALADIN_AURAS: FeatureDef[] = [
  { name: 'Aura de Protección', description: 'Tú y tus aliados a 10 pies (30 pies a nvl 18) ganan un bono a todas sus tiradas de salvación igual a tu modificador de Carisma (mínimo +1).', prerequisite: 'Nivel 6' },
  { name: 'Aura de Valor', description: 'Tú y tus aliados a 10 pies (30 pies a nvl 18) no pueden ser asustados.', prerequisite: 'Nivel 10' }
];

export const DRUID_WILD_SHAPES: FeatureDef[] = [
  { name: 'Familiar Salvaje', description: 'Gasta un uso de Forma Salvaje para lanzar "Encontrar Familiar" sin componentes. El familiar es una fey y desaparece tras un descanso largo.' },
  { name: 'Lobo', description: 'CR 1/4. Bestia mediana. Excelente para combate en manada y rastreo táctico.' },
  { name: 'Araña Gigante', description: 'CR 1. Bestia grande. Excelente para emboscadas, escalar paredes y tejer telarañas.', prerequisite: 'Nivel 2' },
  { name: 'Oso Pardo', description: 'CR 1. Bestia grande. Un tanque de primera línea con ataques múltiples.', prerequisite: 'Nivel 2' },
  { name: 'Pulpo Gigante', description: 'CR 1. Bestia grande. Velocidad de nado, camuflaje y agarre bajo el agua.', prerequisite: 'Nivel 4' },
  { name: 'Águila Gigante', description: 'CR 1. Bestia grande. Velocidad de vuelo y ventaja en percepción visual.', prerequisite: 'Nivel 8' },
  { name: 'Triceratops', description: 'CR 5. Bestia enorme. Gran poder de embestida.', prerequisite: 'Nivel 15' }
];

export const CLERIC_CHANNEL_DIVINITY: FeatureDef[] = [
  { name: 'Expulsar Muertos Vivientes', description: 'Presentas tu símbolo sagrado y censuras a los muertos vivientes a 30 pies. Si fallan su salvación de Sabiduría, son expulsados por 1 minuto (o hasta que reciban daño).' },
  { name: 'Resurgimiento Divino', description: 'Recuperas espacios de conjuro gastados. La suma del nivel de los espacios recuperados no puede exceder la mitad de tu nivel de Clérigo (redondeado hacia arriba).' }
];

export const ROGUE_CUNNING_ACTION: FeatureDef[] = [
  { name: 'Acción Astuta: Esconderse', description: 'Puedes realizar la acción de Esconderse como una Acción Adicional.' },
  { name: 'Acción Astuta: Destrabarse', description: 'Puedes realizar la acción de Destrabarse como una Acción Adicional (tu movimiento no provoca ataques de oportunidad).' },
  { name: 'Acción Astuta: Correr', description: 'Puedes realizar la acción de Correr como una Acción Adicional (obtienes movimiento extra igual a tu velocidad).' }
];

export const FIGHTER_MANEUVERS: FeatureDef[] = [
  { name: 'Segundo Aliento', description: 'Como Acción Adicional, recuperas 1d10 + tu nivel de guerrero en puntos de golpe. (Usos múltiples en nivel alto).' },
  { name: 'Mente Táctica', description: 'Puedes gastar un uso de Segundo Aliento para sumar 1d10 a una prueba de habilidad fallida. Si la prueba falla de todas formas, el uso no se gasta.', prerequisite: 'Nivel 2' },
  { name: 'Acción Adicional', description: 'Puedes realizar una acción adicional en tu turno. (No puedes usarlo más de una vez por turno).', prerequisite: 'Nivel 2' },
  { name: 'Indomable', description: 'Puedes volver a tirar una tirada de salvación fallida, y debes usar la nueva tirada.', prerequisite: 'Nivel 9' }
];
