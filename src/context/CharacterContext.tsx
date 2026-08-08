import React, { createContext, useContext, ReactNode, useState } from 'react';
import { CharacterSheet as CharacterType, AbilityKey, WeaponItem, SpellItem, TabKey } from '../types';

interface CharacterContextType {
  character: CharacterType;
  updateCharacter: (partial: Partial<CharacterType>) => void;
  onUpdateCharacter: (updated: CharacterType) => void;
  onQuickSkillRoll: (skillName: string, ability: AbilityKey) => void;
  onRollSave: (ability: AbilityKey) => void;
  onRollWeapon: (weapon: WeaponItem) => void;
  onRollSpell: (spell: SpellItem) => void;
  readOnly: boolean;
  canEdit: boolean;
  focusSection: string;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter debe usarse dentro de un CharacterProvider');
  }
  return context;
};

interface CharacterProviderProps {
  children: ReactNode;
  character: CharacterType;
  onUpdateCharacter: (updated: CharacterType) => void;
  onQuickSkillRoll: (skillName: string, ability: AbilityKey) => void;
  onRollSave: (ability: AbilityKey) => void;
  onRollWeapon: (weapon: WeaponItem) => void;
  onRollSpell: (spell: SpellItem) => void;
  readOnly?: boolean;
  canEdit?: boolean;
  focusSection?: string;
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({
  children,
  character,
  onUpdateCharacter,
  onQuickSkillRoll,
  onRollSave,
  onRollWeapon,
  onRollSpell,
  readOnly = false,
  canEdit = true,
  focusSection = ''
}) => {

  // Helper para hacer actualizaciones parciales del estado del personaje de forma segura
  const updateCharacter = (partial: Partial<CharacterType>) => {
    onUpdateCharacter({ ...character, ...partial });
  };

  const value = {
    character,
    updateCharacter,
    onUpdateCharacter,
    onQuickSkillRoll,
    onRollSave,
    onRollWeapon,
    onRollSpell,
    readOnly,
    canEdit,
    focusSection
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
