import React from 'react';
import { CharacterSheet as CharacterType, AbilityKey, WeaponItem, SpellItem, TabKey } from '../types';
import { CharacterProvider, useCharacter } from '../context/CharacterContext';
import { CharacterSheetProvider, useCharacterSheet } from '../context/CharacterSheetContext';

import { StatsPanel } from './sheet/StatsPanel';
import { DynamicTabPanel } from './sheet/DynamicTabPanel';
import { ClassPanel } from './sheet/ClassPanel';
import { GearPanel } from './sheet/GearPanel';
import { CraftingTabPanel } from './sheet/CraftingTabPanel';
import { JournalTabPanel } from './sheet/JournalTabPanel';
import { CompanionsPanel } from './sheet/CompanionsPanel';
import { FamiliarsPanel } from './sheet/FamiliarsPanel';
import { profBonus, fmtSigned } from '../types';

type CharacterSheetProps = {
  character: CharacterType;
  onUpdateCharacter: (updated: CharacterType) => void;
  onQuickSkillRoll: (skillName: string, ability: AbilityKey) => void;
  onRollSave: (ability: AbilityKey) => void;
  onRollWeapon: (weapon: WeaponItem) => void;
  onRollSpell: (spell: SpellItem) => void;
  readOnly?: boolean;
  focusSection?: string;
};

const CharacterSheetLayout: React.FC = () => {
  const { c, activeTab, setActiveTab, readOnly, cdef } = useCharacterSheet();

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'stats', label: 'Estado y Stats' },
    { key: 'gear', label: 'Equipo e Inventario' },
    { key: 'crafting', label: 'Artesanía' },
    { key: 'journal', label: 'Diario' },
    { key: 'class', label: 'Clase' },
    { key: 'dynamic', label: cdef.tabName },
    { key: 'familiars', label: 'Familiares' },
    { key: 'companions', label: 'Compañeros' }
  ];

  return (
    <aside id="sheet-panel" className={readOnly ? 'readonly-mode' : ''}>
      <div className="sheet-header">
        <div className="who-name">{c.name || '—'}</div>
        <div className="who-sub">
          {`${c.gender || ''}${c.gender ? ' · ' : ''}${c.race} · ${c.className}${c.subclass ? ' (' + c.subclass + ')' : ''} · Nivel ${c.level}`}
        </div>
        <div className="who-vitals">
          <span>PG <b>{`${c.hpCur}/${c.hpMax}`}</b></span>
          <span>CA <b>{c.ac}</b></span>
          <span>Bono de Competencia <b>{fmtSigned(profBonus(c.level))}</b></span>
          <span>Inspiración <b>{c.inspiration ? 'Sí' : 'No'}</b></span>
        </div>
      </div>

      <div className="tabbar">
        {tabs.map(t => (
          <button
            key={t.key}
            className={activeTab === t.key ? 'active' : ''}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="tab-panel active">
        <fieldset className="sheet-fieldset">
          {activeTab === 'stats' && <StatsPanel />}
          {activeTab === 'dynamic' && <DynamicTabPanel />}
          {activeTab === 'class' && <ClassPanel />}
          {activeTab === 'gear' && <GearPanel />}
          {activeTab === 'crafting' && <CraftingTabPanel />}
          {activeTab === 'journal' && <JournalTabPanel />}
          {activeTab === 'companions' && <CompanionsPanel />}
          {activeTab === 'familiars' && <FamiliarsPanel />}
        </fieldset>
      </div>
    </aside>
  );
};

export const CharacterSheetPanel: React.FC<CharacterSheetProps> = (props) => {
  return (
    <CharacterProvider {...props}>
      <CharacterSheetProvider>
        <CharacterSheetLayout />
      </CharacterSheetProvider>
    </CharacterProvider>
  );
};
