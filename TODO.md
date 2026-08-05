# TODO — Colección de Armas, Armaduras y Sistema de Crafteo/Mejora

## Objetivo
Crear una colección completa de armas y armaduras (desde básicas hasta legendarias) para todas las clases/razas/trasfondos, items equipables por todas las zonas del cuerpo, items de quest, y un sistema de crafteo/mejora con reglas automáticas de balance.

> **Regla clave:** El crafteo queda **reservado a unos pocos items extremadamente raros/artefactos** (los de `craftingRecipes.ts`). El resto de la colección (básicos → legendarios) son **items completos ya registrados** en los catálogos para equipar directamente.

## Pasos

### 1. Tipos nuevos (`src/types/core.ts`)
- [x] Añadir `ItemRarity` ('común' | 'poco común' | 'raro' | 'muy raro' | 'legendario' | 'artefacto')
- [x] Extender `WeaponCatalogEntry` y `ArmorCatalogEntry` con `rarity`, `cost`, `description`, `requirements`
- [x] Añadir `MaterialDef`, `MaterialCategory` (metal, madera, cuero, elemento mágico, etc.)
- [x] Añadir `CraftingRecipe` (materiales + conteo, herramienta/artesano, CD, resultado, rareza)
- [x] Añadir `WeaponModification` / `ArmorModification` (daño mágico de cualquier tipo, afilado, aleación, etc.)
- [x] Añadir `QuestItemDef` (item de búsqueda con materiales/partes)
- [x] Añadir `CraftingProgress` (materiales recolectados por receta/mejora)
- [x] Ampliar `EquipmentSlot` con zonas faltantes (Piernas, Tocado, Amuleto, Muñecas, Tobillos, etc.)
- [x] Añadir campo `craftingProgress` a `CharacterSheet`
- [ ] **Ampliar `EquipmentSlot`** con las zonas nuevas que usan los catálogos: Piernas, Tocado, Casco, Muñecas, Tobillos, Capa, Capucha, Amuleto, Morral, Bandolera, Broche, Fajín, Armadura, Guanteletes, Grebas, Botas

### 2. Catálogos de datos
- [ ] `src/data/weapons.ts`: conservar básicas + añadir armas de rareza (común→legendaria) como items completos
- [ ] `src/data/armor.ts`: conservar + añadir armaduras raras/legendarias + **túnicas/ropajes para clases sin armadura (Mago, Hechicero, Sacerdote)** + escudos variados
- [ ] `src/data/equipment.ts`: ampliar objetos por todas las zonas corporales (cabeza, manos, piernas, pies, escudos, capas, capuchas, morrales, bandoleras, cinturones, anillos, collares, etc.)
- [x] `src/data/materials.ts`: catálogo de materiales
- [x] `src/data/craftingRecipes.ts`: recetas estilo quest (solo objetos extremadamente raros/artefactos)
- [x] `src/data/itemMods.ts`: modificaciones (encantamiento de cualquier daño, afilado, aleación)
- [ ] `src/data/questItems.ts`: ampliar items de búsqueda legendarios que requieren reunir partes/materiales

### 3. Lógica (`src/utils/crafting.ts`)
- [x] `canCraft(recipe, materials, tools)` — valida materiales y herramienta/artesano
- [x] `applyCraft` — crea item → inventario + equipo
- [x] `improveItem` — reemplaza el item original por la versión mejorada
- [x] `attemptCraft` / `attemptImprove` con tirada de dados (CD)
- [x] límite de mejoras por rareza

### 4. Barrel exports (`src/types.ts`)
- [x] Exportar todos los nuevos tipos y datos

### 5. UI en `CharacterSheet.tsx`
- [x] Botones "Craftear" / "Mejorar" en sección Equipo/Inventario
- [x] Panel de crafteo con recetas y materiales (seguimiento)
- [x] Integrar nuevo campo craftingProgress en update/blank

### 6. Estilos (`src/styles.css`)
- [ ] NUEVOS estilos: badges de rareza, tarjetas de crafteo/mejora, grids de materiales, panel de forja

### 7. Verificación
- [ ] Compilar (`npx tsc --noEmit`)
- [ ] Revisar que no haya errores de tipos
