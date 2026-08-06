// ─── Panel de Diario de Aventura y Objetivos ────────────────────────
// Solapa dedicada a registrar misiones, pistas narrativas, objetivos activos
// y la búsqueda de artefactos legendarios (Quests) que descubre el personaje.

import React, { useState } from 'react';
import { CharacterSheet, JournalQuestDef, QuestItemDef, DiscoveredArtifactEntry, QUEST_ITEMS } from '../types';

type Props = {
  character: CharacterSheet;
  onUpdateCharacter: (updated: CharacterSheet) => void;
};

const normalizeArtifactEntry = (raw: string | DiscoveredArtifactEntry): DiscoveredArtifactEntry => {
  if (typeof raw === 'string') {
    return { artifactId: raw, stage: 'rumor' };
  }
  return raw;
};

export const JournalPanel: React.FC<Props> = ({ character, onUpdateCharacter }) => {
  const [activeSubTab, setActiveSubTab] = useState<'quests' | 'artifacts'>('quests');
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newGiver, setNewGiver] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const questsList: JournalQuestDef[] = character.journalQuests || [
    {
      id: 'inicio_aventura',
      title: 'El Comienzo de la Leyenda',
      description: 'Te encuentras en los confines del reino. Explora los parajes cercanos, habla con los habitantes en la taberna local y busca pistas sobre los males que acechan la región.',
      status: 'activa',
      giver: 'Narrativa del DM',
      location: 'Fronteras del Reino',
      rewardSummary: 'Experiencia y reconocimiento local',
    },
  ];

  const updateQuests = (newList: JournalQuestDef[]) => {
    onUpdateCharacter({ ...character, journalQuests: newList });
  };

  const handleAddQuest = () => {
    if (!newTitle.trim()) return;
    const newQuest: JournalQuestDef = {
      id: `quest_${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim() || 'Sin detalles narrativos.',
      status: 'activa',
      giver: newGiver.trim() || 'NPC / Rumor',
      location: newLocation.trim() || 'Región actual',
    };
    updateQuests([...questsList, newQuest]);
    setNewTitle('');
    setNewDesc('');
    setNewGiver('');
    setNewLocation('');
    setShowAddForm(false);
  };

  const handleToggleStatus = (id: string) => {
    const updated = questsList.map(q => {
      if (q.id === id) {
        const nextStatus: 'activa' | 'completada' | 'fallada' =
          q.status === 'activa' ? 'completada' : q.status === 'completada' ? 'fallada' : 'activa';
        return { ...q, status: nextStatus };
      }
      return q;
    });
    updateQuests(updated);
  };

  const handleDeleteQuest = (id: string) => {
    updateQuests(questsList.filter(q => q.id !== id));
  };

  return (
    <div className="journal-panel">
      {/* Sub-Navegación del Diario */}
      <div className="journal-tabbar">
        <button
          className={activeSubTab === 'quests' ? 'active' : ''}
          onClick={() => setActiveSubTab('quests')}
        >
          📖 Misiones y Objetivos ({questsList.filter(q => q.status === 'activa').length} Activas)
        </button>
        <button
          className={activeSubTab === 'artifacts' ? 'active' : ''}
          onClick={() => setActiveSubTab('artifacts')}
        >
          🧩 Búsqueda de Artefactos y Quests Legendarias
        </button>
      </div>

      {/* 📖 MISIONES Y OBJETIVOS */}
      {activeSubTab === 'quests' && (
        <div className="journal-section">
          <div className="journal-section-header">
            <div className="block-label" style={{ margin: 0 }}>📖 Registro de Misiones y Rumores</div>
            <button
              className="add-row-btn"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? '✕ Cancelar' : '+ Añadir Misión / Rumor'}
            </button>
          </div>

          {showAddForm && (
            <div className="journal-add-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Título de la misión u objetivo..."
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  className="journal-input"
                />
                <input
                  type="text"
                  placeholder="Quien otorga / Rumor (ej: Capataz, Oráculo)..."
                  value={newGiver}
                  onChange={e => setNewGiver(e.target.value)}
                  className="journal-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Ubicación o paraje (ej. Mazmorra del Abismo)..."
                  value={newLocation}
                  onChange={e => setNewLocation(e.target.value)}
                  className="journal-input"
                />
              </div>
              <textarea
                placeholder="Detalles narrativos, pistas o metas de la misión..."
                value={newDesc}
                onChange={e => setNewDesc(e.target.value)}
                className="journal-textarea"
                rows={3}
              />
              <button className="forge-btn craft" onClick={handleAddQuest} disabled={!newTitle.trim()}>
                ✍️ Guardar Misión en el Diario
              </button>
            </div>
          )}

          <div className="journal-quests-list">
            {questsList.map(quest => (
              <div key={quest.id} className={`journal-quest-card ${quest.status}`}>
                <div className="journal-card-header">
                  <span className="journal-quest-title">{quest.title}</span>
                  <div className="journal-card-actions">
                    <span
                      className={`journal-status-chip ${quest.status}`}
                      onClick={() => handleToggleStatus(quest.id)}
                      title="Haz clic para cambiar estado (Activa ➔ Completada ➔ Fallada)"
                    >
                      {quest.status === 'activa' ? '🟡 Activa' : quest.status === 'completada' ? '🟢 Completada' : '🔴 Fallada'}
                    </span>
                    <button className="rm" onClick={() => handleDeleteQuest(quest.id)} title="Eliminar entrada">✕</button>
                  </div>
                </div>

                <p className="journal-quest-desc">{quest.description}</p>

                <div className="journal-quest-meta">
                  {quest.giver && <span>👤 Otorgado por: <strong>{quest.giver}</strong></span>}
                  {quest.location && <span>📍 Ubicación: <strong>{quest.location}</strong></span>}
                  {quest.rewardSummary && <span>🎁 Recompensa: <strong>{quest.rewardSummary}</strong></span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🧩 BÚSQUEDA DE ARTEFACTOS Y QUESTS LEGENDARIAS */}
      {activeSubTab === 'artifacts' && (
        <div className="journal-section">
          <div className="block-label">🧩 Pistas de Objetos Legendarios y Artefactos</div>

          {(() => {
            const rawEntries = character.discoveredArtifacts || [];
            const normalizedEntries = rawEntries.map(normalizeArtifactEntry);

            if (normalizedEntries.length === 0) {
              return (
                <div className="flavor-box" style={{ margin: '14px 0', padding: '18px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px dashed var(--seam)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-light)', marginBottom: '6px' }}>
                    🗣️ "No has escuchado ningún rumor sobre esto todavía"
                  </div>
                  <p className="forge-hint" style={{ margin: 0, fontSize: '0.78rem' }}>
                    Esta sección se actualizará automáticamente cuando tu personaje descubra historias, pistas o se entere de la existencia de artefactos legendarios a través de la campaña.
                  </p>
                </div>
              );
            }

            return (
              <div className="forge-quest-list">
                {normalizedEntries.map((entry, idx) => {
                  const def = QUEST_ITEMS.find(q => q.id === entry.artifactId || q.name === entry.artifactId);
                  const name = def ? def.name : entry.artifactId;
                  const rarity = def ? def.rarity : 'legendario';
                  const stage = entry.stage || 'rumor';

                  return (
                    <div key={idx} className={`forge-quest-card stage-${stage}`}>
                      <div className="forge-quest-header">
                        <span className="forge-quest-name">{name}</span>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          {stage === 'rumor' && <span className="journal-status-chip activa">📜 Rumor Inicial</span>}
                          {stage === 'pistas' && <span className="journal-status-chip" style={{ background: '#7eb8e822', color: '#7eb8e8', borderColor: '#7eb8e8' }}>🔍 Pistas y Componentes</span>}
                          {stage === 'completo' && <span className="journal-status-chip completada">✨ Revelación Completa</span>}
                          <span className="forge-rarity-badge" style={{ borderColor: '#ffd700', color: '#ffd700' }}>
                            {rarity}
                          </span>
                        </div>
                      </div>

                      {/* PROGRESO NARRATIVO PROGRESIVO */}
                      {stage === 'rumor' && (
                        <div className="artifact-stage-box">
                          <p className="forge-quest-desc">
                            💬 <strong>Rumor escuchado:</strong> {entry.notes || def?.description || 'Se susurran historias lejanas sobre la existencia de esta reliquia...'}
                          </p>
                          <div className="artifact-locked-info">
                            <span>🧩 Fragmentos y Partes: <em>🔒 Incógnitas / Sin investigar (???/???)</em></span>
                            <span>📜 Requisitos de obtención: <em>🔒 Pistas no descubiertas</em></span>
                            <span>🏆 Propiedades exactas: <em>🔒 Se requiere investigar o consultar eruditos</em></span>
                          </div>
                        </div>
                      )}

                      {stage === 'pistas' && (
                        <div className="artifact-stage-box">
                          <p className="forge-quest-desc">
                            🔍 <strong>Pistas e Investigaciones:</strong> {entry.notes || def?.description}
                          </p>
                          <div className="forge-quest-parts">
                            <div className="forge-quest-parts-label">🧩 Fragmentos y Partes identificadas:</div>
                            <ul>
                              {(def?.parts || []).map((part, i) => {
                                const isFound = (entry.knownParts || []).includes(part);
                                return (
                                  <li key={i} style={{ color: isFound ? '#6dbf67' : 'var(--parchment-dim)' }}>
                                    {isFound ? '✅' : '🔍'} {part} {isFound ? '(Identificado/Encontrado)' : '(Ubicación aproximada)'}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="artifact-locked-info">
                            <span>📜 Requisitos narrativos: <em>🔒 Método de forja/obtención exacto aún sin desvelar</em></span>
                          </div>
                        </div>
                      )}

                      {stage === 'completo' && def && (
                        <div className="artifact-stage-box">
                          <p className="forge-quest-desc">{entry.notes || def.description}</p>
                          <div className="forge-quest-parts">
                            <div className="forge-quest-parts-label">🧩 Fragmentos y Partes requeridas:</div>
                            <ul>
                              {def.parts.map((part, i) => (
                                <li key={i}>✅ {part}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="forge-quest-req">📜 Requisitos de obtención: {def.requirements}</div>
                          <div className="forge-quest-reward">🏆 Recompensa final: {def.rewardSummary}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
