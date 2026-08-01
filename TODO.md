# TODO — Reordenar Equipo / Inventario + Fixes

## Tarea
1. En solapa Equipo: las armas primero, luego el resto de equipo equipado (para que "Tirada de daño con armas" muestre las armas con sus dados al abrir la solapa).
2. En Inventario: los objetos equipados primero con badge "⚔️ equipado".
3. Fix de import corrupto (`getSpellcastingL` / `imits` → `getSpellcastingLimits`).

## Pasos
- [ ] 1. CharacterSheet.tsx: corregir import `getSpellcastingL` + `imits` → `getSpellcastingLimits`
- [ ] 2. CharacterSheet.tsx: reordenar solapa gear → `⚔️ Armas y ataques` primero, luego `🛡️ Equipo (por Zonas)`
- [ ] 3. CharacterSheet.tsx: inventario → items equipados primero con leyenda "⚔️ equipado"
- [ ] 4. styles.css: estilos `.inventory-sheet-row.equipped` y `.equipped-legend`
- [ ] 5. Verificar build / TS (tsc / npm run build)

