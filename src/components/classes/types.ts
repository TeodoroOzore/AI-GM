import React from 'react';
import { CharacterSheet } from '../../types';

export interface ClassDynamicProps {
  c: CharacterSheet;
  update: (updates: Partial<CharacterSheet>) => void;
  limits: any; // Podemos usar ReturnType<typeof getSpellcastingLimits> pero `any` está bien por ahora para no importarlo directamente.
}
