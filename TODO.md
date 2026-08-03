# TODO — Bestiario (Codex de Monstruos) + Español Neutro

## Fase 1 — Bestiario
- [x] 1. Agregar tipos `BestiaryEntry` y relacionados a `src/types/core.ts`
- [x] 2. Crear `src/data/bestiary/tier1.ts` (CR 0–1, ~50 criaturas)
- [x] 3. Crear `src/data/bestiary/tier2.ts` (CR 1–4, ~50 criaturas)
- [x] 4. Crear `src/data/bestiary/tier3.ts` (CR 5–10, ~40 criaturas)
- [x] 5. Crear `src/data/bestiary/tier4.ts` (CR 11–16, ~40 criaturas)
- [x] 6. Crear `src/data/bestiary/tier5.ts` (CR 17–24, ~35 criaturas)
- [x] 7. Crear `src/data/bestiary/tier6.ts` (CR 25–30, ~35 criaturas)
- [x] 8. Crear `src/data/bestiary/index.ts` (catálogo unificado + helpers de búsqueda)
- [x] 9. Actualizar barrel `src/types.ts`
- [x] 10. Crear `src/components/BestiaryPanel.tsx` (panel desplegable con búsqueda y filtros)
- [x] 11. Integrar panel en `App.tsx` + botón en `Header.tsx`
- [x] 12. Agregar estilos del bestiario a `src/styles.css`
- [x] 13. Verificar build (`npm run build`) — compila sin errores, total: 272 criaturas (56+52+36+49+38+41)

## Fase 2 — Español neutro en toda la app (proceso separado)
- [x] 14. Convertir voseo → neutro en componentes (Header, JournalConsole, App, DiceTray, CharacterSheet, CharacterCreation)
- [x] 15. Convertir voseo → neutro en catálogos de datos (conditions, races, classes, spells, feats, subclasses, backgrounds, etc.)
- [x] 16. Verificar build final — 389 reemplazos totales, build sin errores

## Fase 3 — Bestiario expandido por defecto
- [x] 1. Eliminar mecanismo de colapso en `src/components/BestiaryPanel.tsx` (tarjetas siempre expandidas, sin clic)
- [x] 2. Verificar build (`npm run build`) sin errores

## Fase 4 — Fix renderizado del bestiario (solapamiento + scroll)
- [ ] 1. Eliminar `content-visibility: auto` y `contain-intrinsic-size` de `.bestiary-card` en `src/styles.css` (causa del solapamiento y tarjetas que no aparecen con todos los tipos)
- [ ] 2. Agregar `flex-shrink: 0` a `.bestiary-card` para que conserve su altura real dentro del contenedor con scroll
- [ ] 3. Reforzar la barra de desplazamiento visible en `.bestiary-list` (WebKit + Firefox con `scrollbar-width`/`scrollbar-color`)
- [ ] 4. Verificar build (`npm run build`) sin errores

