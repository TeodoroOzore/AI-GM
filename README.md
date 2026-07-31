# AI GM — El Cuaderno del Explorador

Aplicación web de ejemplo para un DM de IA orientada a partidas de D&D 5e en modo un jugador, con una campaña persistente y un sistema de lore que evoluciona con cada acción.

## 🚀 Inicio Rápido

### Opción 1: Desde el explorador de archivos (Windows)
Hacé **doble-click** en `start.bat`. Se abrirá automáticamente el navegador en `http://localhost:3000`.

### Opción 2: VS Code
- **F5** → Arranca el servidor de desarrollo y abre el navegador con debugger.
- **Ctrl+Shift+B** → Arranca el servidor de desarrollo.

### Opción 3: Terminal
```bash
npm install
npm run start    # Arranca y abre el navegador automáticamente
# o bien:
npm run dev      # Arranca sin abrir el navegador
```

## 📦 Qué incluye
- Interfaz web completa para crear personajes y jugar campañas.
- Creación de personaje con Standard Array, Point Buy, tirada de dados o manual.
- Hoja de personaje interactiva con estadísticas, inventario, equipo, dotes, compañeros y familiares.
- Persistencia de estado local en `localStorage`.
- Tablero de dados físicos con animaciones 3D (WebGL + Three.js).
- Catálogo completo de D&D 5e: armas, armaduras, herramientas, conjuros, dotes, condiciones, razas, clases, subclases.
- Diseño pensado para integrar una IA que genere escenarios, NPCs y resultados de acción.

## 🏗️ Estructura del Proyecto

```
src/
├── types.ts              ← Barrel export (compatibilidad con imports existentes)
├── types/
│   ├── core.ts           ← Tipos base del juego (AbilityKey, ClassDef, FeatDef, etc.)
│   └── character.ts      ← Tipos de personaje (CharacterSheet, JournalEntry, etc.)
├── data/
│   ├── abilities.ts      ← ABILITIES, SKILLS, abilityMod, fmtSigned, damage types
│   ├── races.ts          ← RACES, RACE_LANGUAGES
│   ├── classes.ts        ← CLASSES, FULL_SLOTS, HALF_SLOTS, PACT_SLOTS, classResources
│   ├── classProficiencies.ts ← CLASS_ARMOR_PROF, CLASS_WEAPON_PROF, CLASS_TOOL_PROF
│   ├── proficiencies.ts  ← getCharacterProficiencies()
│   ├── backgrounds.ts    ← BACKGROUND_EXTRAS
│   ├── weapons.ts        ← WEAPONS_CATALOG
│   ├── armor.ts          ← ARMOR_CATALOG
│   ├── tools.ts          ← TOOLS_CATALOG
│   ├── spells.ts         ← CANTRIPS_CATALOG, SPELLS_LV1_CATALOG
│   ├── conditions.ts     ← DND_CONDITIONS
│   ├── feats.ts          ← FEAT_CATALOG, getMaxFeatsCount
│   ├── familiars.ts      ← FAMILIAR_FORMS
│   ├── invocations.ts    ← WARLOCK_INVOCATIONS_CATALOG
│   ├── recommendations.ts ← CLASS_RECOMMENDATIONS
│   ├── startingPacks.ts  ← STARTING_PACKS, EQUIPMENT_SLOTS
│   ├── baseClasses.ts    ← BASE_CLASSES_CATALOG, FIGHTING_STYLES
│   └── subclasses.ts     ← SUBCLASS_CATALOG
├── utils/
│   ├── dice.ts           ← secureRandInt, rollD20, rollFormula
│   ├── character.ts      ← blankCharacter
│   └── spellcasting.ts   ← getSpellcastingLimits
├── components/
│   ├── CharacterSheet.tsx    ← Hoja de personaje
│   ├── CharacterCreation.tsx ← Creación de personaje
│   ├── DiceTray.tsx          ← Tablero de dados
│   ├── DiceAnimationOverlay.tsx ← Animación 3D de dados
│   ├── Header.tsx            ← Cabecera
│   └── JournalConsole.tsx    ← Consola de bitácora
├── App.tsx               ← Componente principal
├── main.tsx              ← Punto de entrada
└── styles.css            ← Estilos
```

## 🛠️ Configuración de VS Code

El proyecto incluye configuraciones predefinidas en `.vscode/`:

- **`tasks.json`**: Tarea `dev` (Ctrl+Shift+B) para arrancar el servidor.
- **`launch.json`**: Configuración de depuración (F5) para Chrome + Vite.

## 📝 Próximos Pasos

Para convertir esta base en una app funcional con IA, conviene conectar un backend con un modelo como OpenAI o Gemini y guardar la campaña en una base de datos.

## Requisitos

- Node.js 20+
- Navegador moderno (Chrome, Firefox, Edge)

