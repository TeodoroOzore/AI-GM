# TODO: Reglas de creación de personaje (razas, herramientas, resistencias)

## Pendiente
- [x] `src/utils/character.ts` — utilidades `resolveToolCategory`, `getToolCategoryLimits`, `getRacialSpells`, `getRacialResistances`
- [x] `src/types.ts` — exportar utilidades desde barrel
- [x] `CharacterCreation.tsx` — `handleToggleTool` aplica límites por categoría
- [x] `CharacterCreation.tsx` — UI de herramientas muestra límites `currentCount/catLimit`
- [x] `CharacterCreation.tsx` — `handleSubmit` agrega `getRacialSpells` a `c.spellsKnown`
- [x] `CharacterCreation.tsx` — `handleSubmit` agrega herramientas del trasfondo a `normalizedSelectedTools`
- [x] `src/components/CharacterSheet.tsx` — solapa `dynamic`: mostrar spells raciales (level === 'racial') en sección "Rasgos Raciales"
- [x] `src/components/CharacterSheet.tsx` — solapa `stats` y `status` (Estado): mostrar resistencias/ventajas raciales con `getRacialResistances`
- [x] `src/App.tsx` — `handleRollSpell`: manejar spells raciales con habilidad adecuada (CON para Arma de Aliento, CHA para Tiefling/Drow, INT para Alto Elfo)
- [x] `src/components/CharacterCreation.tsx` — panel de raza: mostrar resistencias derivadas (incl. ancestro dracónico)
- [x] `src/components/CharacterCreation.tsx` — revisión: mostrar resistencias/ventajas raciales
- [x] `src/components/CharacterCreation.tsx` — sección de herramientas: mostrar chips fijos del trasfondo (auto-equipadas)
- [x] Compilar con `npm run build` y verificar flujo

## Completado
- [x] Utilidades `resolveToolCategory`, `getToolCategoryLimits`, `getRacialSpells`, `getRacialResistances` en `src/utils/character.ts`
- [x] Exportar utilidades desde `src/types.ts` barrel
- [x] `CharacterCreation.tsx` — `handleToggleTool` aplica límites por categoría
- [x] `CharacterCreation.tsx` — UI de herramientas muestra límites `currentCount/catLimit`
- [x] `CharacterCreation.tsx` — `handleSubmit` agrega `getRacialSpells` a `c.spellsKnown`
- [x] `CharacterCreation.tsx` — `handleSubmit` agrega herramientas del trasfondo a `normalizedSelectedTools`
- [x] `CharacterSheet.tsx` — solapa `dynamic`: mostrar spells raciales
- [x] `CharacterSheet.tsx` — solapa `stats` y `status`: mostrar resistencias/ventajas raciales
- [x] `App.tsx` — `handleRollSpell` maneja spells raciales con habilidad adecuada
- [x] `CharacterCreation.tsx` — panel de raza muestra resistencias derivadas
- [x] `CharacterCreation.tsx` — revisión muestra resistencias/ventajas raciales
- [x] `CharacterCreation.tsx` — sección de herramientas muestra chips fijos del trasfondo
