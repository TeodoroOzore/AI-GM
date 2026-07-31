# Implementación de Razas Completas D&D 5e — COMPLETED ✅

## Plan de Implementación

### Paso 1: Expandir `RaceDef` en `src/types/core.ts` ✅
- [x] Agregar interfaz `RaceTrait` con name, description, type, levelUnlocked
- [x] Agregar tipo `RaceTraitType`
- [x] Agregar tipo `RaceAncestryChoice`
- [x] Expandir `RaceDef` con: description, size, speed, age, alignment, languages, darkvision, resistances, armorProf, weaponProf, toolProf, skillProfChoices, extraLanguages, toolChoices, ancestryChoices, cantripChoice, traits
- [x] Expandir `ProficiencyBundle` con skills

### Paso 2: Reescribir `src/data/races.ts` con datos completos del PHB ✅
- [x] **Humano**: +1 a todos, descripción, tamaño Mediano, velocidad 9m, 1 idioma adicional
- [x] **Alto Elfo**: +2 DES +1 INT, descripción, 9m, Mediano, visión oscuridad 18m, armas élficas, 1 truco de mago, 1 idioma adicional
- [x] **Enano de las Colinas**: +2 CON +1 SAB, descripción, 7.5m, Mediano, visión oscuridad 18m, competencias, Resistencia Enana, Dureza Enana, herramienta artesano
- [x] **Mediano Piesligero**: +2 DES +1 CAR, descripción, 7.5m, Pequeño, Afortunado, Valiente, Sigiloso
- [x] **Dracónido**: +2 FUE +1 CAR, descripción, 9m, Mediano, ascendencia dracónica (6 ancestros), Arma de Aliento, Resistencia daño
- [x] **Gnomo de las Rocas**: +2 INT +1 CON, descripción, 7.5m, Pequeño, visión oscuridad 18m, Astucia Gnoma, Conocimiento Artesano
- [x] **Semielfo**: +2 CAR +2 a elección, descripción, 9m, Mediano, visión oscuridad 18m, 2 habilidades a elección, 1 idioma adicional
- [x] **Semiorco**: +2 FUE +1 CON, descripción, 9m, Mediano, visión oscuridad 18m, competencia Intimidación, Resistencia Temeraria, Ataques Salvajes
- [x] **Tiefling**: +2 CAR +1 INT, descripción, 9m, Mediano, visión oscuridad 18m, Resistencia al fuego, Legado Infernal (taumaturgia + hechizos)

### Paso 3: Actualizar `getCharacterProficiencies` en `src/data/proficiencies.ts` ✅
- [x] Fusionar competencias de armas raciales (armas élficas, enanas)
- [x] Fusionar competencias de herramientas raciales
- [x] Fusionar competencias de habilidades raciales (Intimidación Semielfo/Semiorco)
- [x] Fusionar idiomas raciales desde `RACES[race].languages`

### Paso 4: Actualizar `CharacterSheet` en `src/types/character.ts` ✅
- [x] Agregar campos: raceExtraLanguage, raceSkillChoices, raceAncestry, raceToolChoice, raceCantrip

### Paso 5: Actualizar `blankCharacter` en `src/utils/character.ts` ✅
- [x] Inicializar nuevos campos en blanco

### Paso 6: Panel de raza y selectores en `CharacterCreation.tsx` ✅
- [x] Agregar estados para las elecciones raciales
- [x] Panel informativo con descripción, stats, idiomas, resistencias, competencias
- [x] Tarjetas de rasgos raciales
- [x] Selector de idioma adicional (Humano, Semielfo, Alto Elfo)
- [x] Selector de competencias de habilidad (Semielfo)
- [x] Selector de ascendencia dracónica (Dracónido)
- [x] Selector de herramienta de artesano (Enano)
- [x] Selector de truco de mago (Alto Elfo)
- [x] Guardar elecciones en handleSubmit

### Paso 7: Sección de rasgos raciales en `CharacterSheet.tsx` ✅
- [x] Mostrar rasgos raciales en la pestaña de estadísticas
- [x] Estado de bloqueo por nivel (Dureza Enana)
- [x] Estilos para tarjetas de rasgos

### Estilos CSS ✅
- [x] `.race-info-panel` - panel principal de raza
- [x] `.race-stat-chip` - chips de estadísticas
- [x] `.race-trait-card` - tarjetas de rasgos (wizard)
- [x] `.race-trait-card-compact` - tarjetas de rasgos (hoja)
- [x] `.race-choice-row` - selectores de elecciones
- [x] `.prof-chip.resist-chip` - chips de resistencia
- [x] `.prof-chip.skill-chip` - chips de competencias

### Verificación Final ✅
- [x] `npx tsc --noEmit` — compilación sin errores
