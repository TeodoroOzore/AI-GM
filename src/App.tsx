// @ts-nocheck
import { useEffect, useMemo, useState } from 'react';

type AbilityKey = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

type CharacterSheet = {
  name: string;
  race: string;
  className: string;
  subclass: string;
  background: string;
  alignment: string;
  level: number;
  experience: number;
  proficiencyBonus: number;
  hp: number;
  maxHp: number;
  tempHp: number;
  armorClass: number;
  speed: number;
  initiative: number;
  passivePerception: number;
  inspiration: boolean;
  abilities: Record<AbilityKey, number>;
  savingThrows: Record<AbilityKey, number>;
  skills: string[];
  inventory: string[];
  equipment: string[];
  spells: string[];
  cantrips: string[];
  features: string[];
  traits: string[];
  languages: string[];
  proficiencies: string[];
  attackFormulas: Array<{ name: string; formula: string; notes: string }>;
  conditions: string[];
  notes: string[];
};

type CampaignState = {
  id: string;
  title: string;
  world: string;
  summary: string;
  lore: string[];
  history: string[];
  location: string;
  lastAction: string;
  mood: string;
};

type DraftCharacter = {
  name: string;
  race: string;
  className: string;
  subclass: string;
  background: string;
  alignment: string;
  level: string;
  experience: string;
  proficiencyBonus: string;
  hp: string;
  maxHp: string;
  armorClass: string;
  speed: string;
  initiative: string;
  passivePerception: string;
  inspiration: boolean;
  abilities: Record<AbilityKey, string>;
  skills: string;
  inventory: string;
  equipment: string;
  spells: string;
  cantrips: string;
  features: string;
  traits: string;
  languages: string;
  proficiencies: string;
  attackFormulas: string;
  conditions: string;
  notes: string;
};

const STORAGE_KEY = 'ai-gm-state-v1';
const abilityKeys: AbilityKey[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

function createDraftCharacter(): DraftCharacter {
  return {
    name: 'Aelrin',
    race: 'Elfo',
    className: 'Mago',
    subclass: 'Evocador',
    background: 'Erudito',
    alignment: 'Neutral Bueno',
    level: '3',
    experience: '6500',
    proficiencyBonus: '2',
    hp: '18',
    maxHp: '18',
    armorClass: '13',
    speed: '30',
    initiative: '2',
    passivePerception: '13',
    inspiration: true,
    abilities: {
      STR: '8',
      DEX: '14',
      CON: '12',
      INT: '16',
      WIS: '13',
      CHA: '10'
    },
    skills: 'Arcana\nHistoria\nInvestigación',
    inventory: 'Libro de runas\nPiedra luminosa',
    equipment: 'Daga de práctica\nCapa antigua',
    spells: 'Mago armado\nDetectar magia',
    cantrips: 'Llamarada\nMano de mago',
    features: 'Visión en la penumbra\nInstinto de erudito',
    traits: 'Curioso\nPaciente',
    languages: 'Común\nElfico\nDracónico',
    proficiencies: 'Herramientas de alquimia\nIdiomas',
    attackFormulas: 'Daga: 1d4+2',
    conditions: 'Ninguno',
    notes: 'Llegó a la costa tras un suceso extraño.'
  };
}

function parseList(input: string): string[] {
  return input
    .split('\n')
    .map((value) => value.trim())
    .filter(Boolean);
}

function parseAttackFormulas(input: string) {
  return parseList(input).map((line) => {
    const [name, ...rest] = line.split(':');
    return {
      name: name?.trim() || 'Ataque',
      formula: rest.join(':').trim() || '1d4+2',
      notes: ''
    };
  });
}

function createCharacterFromDraft(draft: DraftCharacter): CharacterSheet {
  return {
    name: draft.name.trim() || 'Jugador',
    race: draft.race.trim() || 'Humano',
    className: draft.className.trim() || 'Explorador',
    subclass: draft.subclass.trim() || 'Sin subtipo',
    background: draft.background.trim() || 'Aventurero',
    alignment: draft.alignment.trim() || 'Neutral',
    level: Number(draft.level) || 1,
    experience: Number(draft.experience) || 0,
    proficiencyBonus: Number(draft.proficiencyBonus) || 2,
    hp: Number(draft.hp) || 8,
    maxHp: Number(draft.maxHp) || Number(draft.hp) || 8,
    tempHp: 0,
    armorClass: Number(draft.armorClass) || 10,
    speed: Number(draft.speed) || 30,
    initiative: Number(draft.initiative) || 0,
    passivePerception: Number(draft.passivePerception) || 10,
    inspiration: draft.inspiration,
    abilities: {
      STR: Number(draft.abilities.STR) || 10,
      DEX: Number(draft.abilities.DEX) || 10,
      CON: Number(draft.abilities.CON) || 10,
      INT: Number(draft.abilities.INT) || 10,
      WIS: Number(draft.abilities.WIS) || 10,
      CHA: Number(draft.abilities.CHA) || 10
    },
    savingThrows: {
      STR: Number(draft.abilities.STR) || 10,
      DEX: Number(draft.abilities.DEX) || 10,
      CON: Number(draft.abilities.CON) || 10,
      INT: Number(draft.abilities.INT) || 10,
      WIS: Number(draft.abilities.WIS) || 10,
      CHA: Number(draft.abilities.CHA) || 10
    },
    skills: parseList(draft.skills),
    inventory: parseList(draft.inventory),
    equipment: parseList(draft.equipment),
    spells: parseList(draft.spells),
    cantrips: parseList(draft.cantrips),
    features: parseList(draft.features),
    traits: parseList(draft.traits),
    languages: parseList(draft.languages),
    proficiencies: parseList(draft.proficiencies),
    attackFormulas: parseAttackFormulas(draft.attackFormulas),
    conditions: parseList(draft.conditions),
    notes: parseList(draft.notes)
  };
}

function createCampaign(character: CharacterSheet): CampaignState {
  const motifs = [
    'Círculo de Luz Negra',
    'Reino de la Costa Quemada',
    'Laberinto de los Faros',
    'Nexo de Ciudades Perdidas',
    'Senda de Vientos Rotos'
  ];
  const index = Math.abs(hashString(`${character.name}${character.className}${Date.now()}`)) % motifs.length;
  const title = `${character.name} y ${motifs[index]}`;

  return {
    id: `${Date.now()}`,
    title,
    world: 'Un mundo de reinos en conflicto donde las ruinas antiguas despiertan cuando la voluntad del protagonista cambia el curso del destino.',
    summary: `La campaña se abre para ${character.name}, un ${character.race} ${character.className.toLowerCase()} que debe decidir el futuro de una región marcada por secretos y leyendas.`,
    lore: [
      'Cada faro encendido modifica la geografía invisible de la región.',
      'Los antiguos pactos entre linajes y fuerzas elementales aún vibran en los lugares más oscuros.',
      'La memoria del mundo se conserva en objetos pequeños que parecen insignificantes.'
    ],
    history: [
      `Inicio de campaña para ${character.name}.`,
      'El DM ha generado una nueva ruta narrativa basada en la ficha del personaje.'
    ],
    location: 'Puerto de Nareth',
    lastAction: 'El personaje aún no ha tomado una decisión.',
    mood: 'misterio y ambición'
  };
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function App() {
  const [draftCharacter, setDraftCharacter] = useState<DraftCharacter>(createDraftCharacter);
  const [character, setCharacter] = useState<CharacterSheet | null>(null);
  const [campaign, setCampaign] = useState<CampaignState | null>(null);
  const [actionInput, setActionInput] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { character?: CharacterSheet; campaign?: CampaignState };
        setCharacter(parsed.character ?? null);
        setCampaign(parsed.campaign ?? null);
      }
    } catch {
      // Se ignora el estado inicial si no existe almacenamiento válido.
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !character || !campaign) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ character, campaign }));
  }, [character, campaign, isLoaded]);

  const startCampaign = (event: React.FormEvent) => {
    event.preventDefault();
    const nextCharacter = createCharacterFromDraft(draftCharacter);
    const nextCampaign = createCampaign(nextCharacter);
    setCharacter(nextCharacter);
    setCampaign(nextCampaign);
    setActionInput('');
  };

  const startNewCampaign = () => {
    if (!character) return;
    const nextCampaign = createCampaign(character);
    setCampaign(nextCampaign);
    setActionInput('');
  };

  const nextTurn = () => {
    if (!actionInput.trim() || !character || !campaign) return;

    const action = actionInput.trim();
    const dmReply = generateDMReply(campaign, character, action);
    const updatedCampaign: CampaignState = {
      ...campaign,
      history: [`DM: ${dmReply}`, `Jugador: ${action}`, ...campaign.history.slice(0, 4)],
      lastAction: action,
      lore: [`Tras la acción de ${character.name}, ${campaign.location} adquirió un nuevo secreto.`, ...campaign.lore.slice(0, 2)]
    };

    const updatedCharacter: CharacterSheet = {
      ...character,
      notes: [`${new Date().toLocaleDateString()}: ${dmReply}`, ...character.notes.slice(0, 4)],
      conditions: character.conditions.includes('Explorando') ? character.conditions : ['Explorando', ...character.conditions]
    };

    setCampaign(updatedCampaign);
    setCharacter(updatedCharacter);
    setActionInput('');
  };

  const updateByDM = () => {
    if (!character || !campaign) return;

    const nextCharacter: CharacterSheet = {
      ...character,
      notes: [`${new Date().toLocaleDateString()}: El DM ha actualizado la ficha con nuevas consecuencias de campaña.`, ...character.notes.slice(0, 4)],
      attackFormulas: character.attackFormulas.map((formula) => {
        if (formula.name.toLowerCase() === 'daga' && formula.formula.includes('1d4')) {
          return { ...formula, formula: '1d6+2', notes: 'Mejora por avance de combate' };
        }
        return formula;
      })
    };

    const nextCampaign: CampaignState = {
      ...campaign,
      history: [`DM: la campaña ha evolucionado y la ficha se ha actualizado.`, ...campaign.history.slice(0, 4)]
    };

    setCharacter(nextCharacter);
    setCampaign(nextCampaign);
  };

  const stats = useMemo(() => {
    if (!character || !campaign) return [];
    return [
      { label: 'Personaje', value: `${character.name} (${character.race} ${character.className})` },
      { label: 'Nivel', value: character.level },
      { label: 'Ubicación', value: campaign.location },
      { label: 'Última acción', value: campaign.lastAction }
    ];
  }, [character, campaign]);

  if (!isLoaded) {
    return <div className="app-shell"><p>Cargando...</p></div>;
  }

  if (!character || !campaign) {
    return (
      <div className="app-shell">
        <header className="hero">
          <div>
            <p className="eyebrow">AI GM • creación de personaje</p>
            <h1>Crear tu héroe para una campaña viva</h1>
            <p>Tu ficha se conservará de forma persistente y el DM actualizará su estado conforme avance la historia.</p>
          </div>
        </header>

        <form className="panel form-panel" onSubmit={startCampaign}>
          <div className="form-grid">
            <label>
              Nombre
              <input value={draftCharacter.name} onChange={(event) => setDraftCharacter({ ...draftCharacter, name: event.target.value })} />
            </label>
            <label>
              Raza
              <input value={draftCharacter.race} onChange={(event) => setDraftCharacter({ ...draftCharacter, race: event.target.value })} />
            </label>
            <label>
              Clase
              <input value={draftCharacter.className} onChange={(event) => setDraftCharacter({ ...draftCharacter, className: event.target.value })} />
            </label>
            <label>
              Subclase
              <input value={draftCharacter.subclass} onChange={(event) => setDraftCharacter({ ...draftCharacter, subclass: event.target.value })} />
            </label>
            <label>
              Trasfondo
              <input value={draftCharacter.background} onChange={(event) => setDraftCharacter({ ...draftCharacter, background: event.target.value })} />
            </label>
            <label>
              Alineación
              <input value={draftCharacter.alignment} onChange={(event) => setDraftCharacter({ ...draftCharacter, alignment: event.target.value })} />
            </label>
            <label>
              Nivel
              <input type="number" value={draftCharacter.level} onChange={(event) => setDraftCharacter({ ...draftCharacter, level: event.target.value })} />
            </label>
            <label>
              Experiencia
              <input type="number" value={draftCharacter.experience} onChange={(event) => setDraftCharacter({ ...draftCharacter, experience: event.target.value })} />
            </label>
            <label>
              Bono de competencia
              <input type="number" value={draftCharacter.proficiencyBonus} onChange={(event) => setDraftCharacter({ ...draftCharacter, proficiencyBonus: event.target.value })} />
            </label>
            <label>
              Vida actual
              <input type="number" value={draftCharacter.hp} onChange={(event) => setDraftCharacter({ ...draftCharacter, hp: event.target.value })} />
            </label>
            <label>
              Vida máxima
              <input type="number" value={draftCharacter.maxHp} onChange={(event) => setDraftCharacter({ ...draftCharacter, maxHp: event.target.value })} />
            </label>
            <label>
              CA
              <input type="number" value={draftCharacter.armorClass} onChange={(event) => setDraftCharacter({ ...draftCharacter, armorClass: event.target.value })} />
            </label>
            <label>
              Velocidad
              <input type="number" value={draftCharacter.speed} onChange={(event) => setDraftCharacter({ ...draftCharacter, speed: event.target.value })} />
            </label>
            <label>
              Iniciativa
              <input type="number" value={draftCharacter.initiative} onChange={(event) => setDraftCharacter({ ...draftCharacter, initiative: event.target.value })} />
            </label>
            <label>
              Percepción pasiva
              <input type="number" value={draftCharacter.passivePerception} onChange={(event) => setDraftCharacter({ ...draftCharacter, passivePerception: event.target.value })} />
            </label>
          </div>

          <div className="ability-grid">
            {abilityKeys.map((ability) => (
              <label key={ability}>
                {ability}
                <input type="number" value={draftCharacter.abilities[ability]} onChange={(event) => setDraftCharacter({ ...draftCharacter, abilities: { ...draftCharacter.abilities, [ability]: event.target.value } })} />
              </label>
            ))}
          </div>

          <div className="form-grid">
            <label>
              Habilidades
              <textarea value={draftCharacter.skills} onChange={(event) => setDraftCharacter({ ...draftCharacter, skills: event.target.value })} />
            </label>
            <label>
              Inventario
              <textarea value={draftCharacter.inventory} onChange={(event) => setDraftCharacter({ ...draftCharacter, inventory: event.target.value })} />
            </label>
            <label>
              Equipo
              <textarea value={draftCharacter.equipment} onChange={(event) => setDraftCharacter({ ...draftCharacter, equipment: event.target.value })} />
            </label>
            <label>
              Hechizos
              <textarea value={draftCharacter.spells} onChange={(event) => setDraftCharacter({ ...draftCharacter, spells: event.target.value })} />
            </label>
            <label>
              Trucos
              <textarea value={draftCharacter.cantrips} onChange={(event) => setDraftCharacter({ ...draftCharacter, cantrips: event.target.value })} />
            </label>
            <label>
              Rasgos y talentos
              <textarea value={draftCharacter.features} onChange={(event) => setDraftCharacter({ ...draftCharacter, features: event.target.value })} />
            </label>
            <label>
              Rasgos raciales
              <textarea value={draftCharacter.traits} onChange={(event) => setDraftCharacter({ ...draftCharacter, traits: event.target.value })} />
            </label>
            <label>
              Idiomas y competencias
              <textarea value={draftCharacter.proficiencies} onChange={(event) => setDraftCharacter({ ...draftCharacter, proficiencies: event.target.value })} />
            </label>
            <label>
              Fórmulas de ataque
              <textarea value={draftCharacter.attackFormulas} onChange={(event) => setDraftCharacter({ ...draftCharacter, attackFormulas: event.target.value })} />
            </label>
            <label>
              Condiciones
              <textarea value={draftCharacter.conditions} onChange={(event) => setDraftCharacter({ ...draftCharacter, conditions: event.target.value })} />
            </label>
            <label>
              Notas del personaje
              <textarea value={draftCharacter.notes} onChange={(event) => setDraftCharacter({ ...draftCharacter, notes: event.target.value })} />
            </label>
          </div>

          <button type="submit">Crear personaje y abrir campaña</button>
        </form>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">AI GM • campaña viva</p>
          <h1>{campaign.title}</h1>
          <p>{campaign.world}</p>
        </div>
        <div className="panel stats-panel">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.label}</strong>
              <div>{item.value}</div>
            </div>
          ))}
          <div className="button-row">
            <button onClick={startNewCampaign}>Nueva campaña</button>
            <button className="secondary" onClick={updateByDM}>Actualizar por el DM</button>
          </div>
        </div>
      </header>

      <main className="content-grid">
        <section className="panel">
          <h2>Resumen de campaña</h2>
          <p>{campaign.summary}</p>
          <p><strong>Estado:</strong> {campaign.mood}</p>
          <h3>Lore persistente</h3>
          <ul>
            {campaign.lore.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>Historia reciente</h2>
          <ul>
            {campaign.history.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
          <textarea
            value={actionInput}
            onChange={(event) => setActionInput(event.target.value)}
            placeholder="Escribe lo que hace tu personaje..."
          />
          <div className="button-row">
            <button onClick={nextTurn}>Avanzar la historia</button>
          </div>
        </section>
      </main>

      <section className="panel sheet-panel">
        <h2>Hoja de personaje</h2>
        <div className="sheet-grid">
          <div>
            <h3>Datos básicos</h3>
            <p><strong>Nombre:</strong> {character.name}</p>
            <p><strong>Raza:</strong> {character.race}</p>
            <p><strong>Clase:</strong> {character.className}</p>
            <p><strong>Subclase:</strong> {character.subclass}</p>
            <p><strong>Trasfondo:</strong> {character.background}</p>
            <p><strong>Alineación:</strong> {character.alignment}</p>
            <p><strong>Nivel:</strong> {character.level}</p>
            <p><strong>Experiencia:</strong> {character.experience}</p>
            <p><strong>Bono de competencia:</strong> +{character.proficiencyBonus}</p>
          </div>
          <div>
            <h3>Estado de combate</h3>
            <p><strong>Vida:</strong> {character.hp}/{character.maxHp}</p>
            <p><strong>Temp HP:</strong> {character.tempHp}</p>
            <p><strong>CA:</strong> {character.armorClass}</p>
            <p><strong>Velocidad:</strong> {character.speed}</p>
            <p><strong>Iniciativa:</strong> {character.initiative}</p>
            <p><strong>Percepción pasiva:</strong> {character.passivePerception}</p>
            <p><strong>Inspiración:</strong> {character.inspiration ? 'Sí' : 'No'}</p>
            <p><strong>Condiciones:</strong> {character.conditions.join(', ') || 'Ninguna'}</p>
          </div>
          <div>
            <h3>Atributos</h3>
            {abilityKeys.map((ability) => (
              <p key={ability}><strong>{ability}:</strong> {character.abilities[ability]}</p>
            ))}
          </div>
        </div>

        <div className="sheet-grid secondary-grid">
          <div>
            <h3>Habilidades y competencias</h3>
            <ul>{character.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            <p><strong>Idiomas:</strong> {character.languages.join(', ')}</p>
            <p><strong>Competencias:</strong> {character.proficiencies.join(', ')}</p>
          </div>
          <div>
            <h3>Inventario, equipo y recursos</h3>
            <p><strong>Inventario:</strong> {character.inventory.join(', ') || 'Vacío'}</p>
            <p><strong>Equipo:</strong> {character.equipment.join(', ') || 'Vacío'}</p>
            <p><strong>Hechizos:</strong> {character.spells.join(', ') || 'Ninguno'}</p>
            <p><strong>Trucos:</strong> {character.cantrips.join(', ') || 'Ninguno'}</p>
          </div>
          <div>
            <h3>Rasgos, fórmulas y notas</h3>
            <p><strong>Rasgos:</strong> {character.features.join(', ')}</p>
            <p><strong>Rasgos raciales:</strong> {character.traits.join(', ')}</p>
            <p><strong>Fórmulas:</strong></p>
            <ul>
              {character.attackFormulas.map((formula) => (
                <li key={`${formula.name}-${formula.formula}`}>{formula.name}: {formula.formula}</li>
              ))}
            </ul>
            <p><strong>Notas:</strong></p>
            <ul>
              {character.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function generateDMReply(campaign: CampaignState, character: CharacterSheet, action: string) {
  const normalized = action.toLowerCase();
  if (normalized.includes('ataco') || normalized.includes('combato')) {
    return `${character.name} se adentra en el peligro y el entorno responde con un eco de guerra que cambia la atmósfera de ${campaign.location}.`;
  }
  if (normalized.includes('investigo') || normalized.includes('busco')) {
    return `El pasado de ${campaign.location} empieza a abrirse y revela un detalle que solo ${character.name} podría entender.`;
  }
  if (normalized.includes('hablo') || normalized.includes('negocio')) {
    return `Un personaje importante escucha a ${character.name} y la conversación marca el comienzo de una alianza.`;
  }
  return `El DM interpreta la acción de ${character.name} como una decisión que transforma ${campaign.location} y deja una huella duradera.`;
}

export default App;
