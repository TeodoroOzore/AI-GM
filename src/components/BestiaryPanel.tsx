import React, { useMemo, useState } from 'react';
import { BestiaryEntry } from '../types/core';
import { BESTIARY_TIERS, searchBestiary, getBestiaryTypes } from '../data/bestiary';
import { abilityMod } from '../data/abilities';

const ABILITY_LABELS: Record<string, string> = {
  str: 'FUE',
  dex: 'DES',
  con: 'CON',
  int: 'INT',
  wis: 'SAB',
  cha: 'CAR',
};

function formatCr(cr: number): string {
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}

type BestiaryPanelProps = {
  open: boolean;
  onClose: () => void;
};

export const BestiaryPanel: React.FC<BestiaryPanelProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [tierKey, setTierKey] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  // Ahora todas las tarjetas se muestran expandidas por defecto (sin colapso)
  // Se mantiene el estado para compatibilidad pero siempre se pasa expanded=true

  const types = useMemo(() => getBestiaryTypes(), []);

  const results = useMemo(
    () => searchBestiary({ query, tierKey, type: typeFilter }),
    [query, tierKey, typeFilter]
  );

  const clearFilters = () => {
    setQuery('');
    setTierKey(null);
    setTypeFilter(null);
  };

  return (
    <div className={`bestiary-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <aside className="bestiary-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="bestiary-header">
          <div>
            <div className="bestiary-title">📖 Bestiario del Director</div>
            <div className="bestiary-sub">Codex de criaturas para consultar en mesa</div>
          </div>
          <button className="bestiary-close" onClick={onClose} aria-label="Cerrar bestiario">
            ✕
          </button>
        </div>

        <div className="bestiary-toolbar">
          <input
            type="text"
            className="bestiary-search"
            placeholder="Buscar por nombre, tipo, hábitat…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="bestiary-filter-row">
            <select value={tierKey ?? ''} onChange={(e) => setTierKey(e.target.value || null)}>
              <option value="">Todos los escalones</option>
              {BESTIARY_TIERS.map((t) => (
                <option key={t.key} value={t.key}>
                  {t.emoji} {t.label} ({t.crRange})
                </option>
              ))}
            </select>
            <select value={typeFilter ?? ''} onChange={(e) => setTypeFilter(e.target.value || null)}>
              <option value="">Todos los tipos</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="bestiary-count-row">
            <span className="bestiary-count">
              {results.length} {results.length === 1 ? 'criatura' : 'criaturas'}
            </span>
            {(query || tierKey || typeFilter) && (
              <button className="bestiary-clear" onClick={clearFilters}>
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        <div className="bestiary-list">
          {results.length === 0 && (
            <div className="bestiary-empty">
              <div className="bestiary-empty-emoji">🕸️</div>
              <p>No se encontraron criaturas con esos filtros.</p>
              <button className="bestiary-clear" onClick={clearFilters}>
                Limpiar búsqueda
              </button>
            </div>
          )}

          {results.map((entry) => (
            <BestiaryCard
              key={entry.id}
              entry={entry}
              expanded={true}
              onToggle={() => {}}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};

type BestiaryCardProps = {
  entry: BestiaryEntry;
  expanded: boolean;
  onToggle: () => void;
};

const BestiaryCard: React.FC<BestiaryCardProps> = ({ entry, expanded, onToggle }) => {
  return (
    <div className={`bestiary-card ${expanded ? 'expanded' : ''}`}>
      <button className="bestiary-card-header" onClick={onToggle}>
        <span className="bestiary-card-emoji">{entry.emoji}</span>
        <span className="bestiary-card-info">
          <span className="bestiary-card-name">{entry.name}</span>
          <span className="bestiary-card-meta">
            {entry.size} · {entry.type} · {entry.alignment}
          </span>
        </span>
        <span className="bestiary-card-cr">CR {formatCr(entry.challenge)}</span>
        <span className="bestiary-card-chevron">{expanded ? '▾' : '▸'}</span>
      </button>

      {expanded && (
        <div className="bestiary-card-body">
          <div className="bestiary-stats-grid">
            <StatPill label="PG" value={String(entry.hp)} />
            <StatPill label="CA" value={String(entry.ac)} />
            <StatPill label="XP" value={entry.xp.toLocaleString('es-AR')} />
          </div>

          <div className="bestiary-block">
            <div className="bestiary-block-label">Atributos</div>
            <div className="bestiary-abilities">
              {Object.entries(entry.abilities).map(([key, value]) => (
                <div className="bestiary-ability" key={key}>
                  <span className="ba-name">{ABILITY_LABELS[key] ?? key}</span>
                  <span className="ba-score">{value}</span>
                  <span className="ba-mod">{abilityMod(value) >= 0 ? '+' : ''}{abilityMod(value)}</span>
                </div>
              ))}
            </div>
          </div>

          {entry.speed && (
            <div className="bestiary-block">
              <div className="bestiary-block-label">Movimiento</div>
              <p className="bestiary-text">{entry.speed}</p>
            </div>
          )}

          {entry.senses && entry.senses.length > 0 && (
            <div className="bestiary-block">
              <div className="bestiary-block-label">Sentidos</div>
              <div className="bestiary-tags">
                {entry.senses.map((s) => (
                  <span className="bestiary-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {entry.languages && entry.languages.length > 0 && (
            <div className="bestiary-block">
              <div className="bestiary-block-label">Idiomas</div>
              <p className="bestiary-text">{entry.languages.join(', ')}</p>
            </div>
          )}

          <div className="bestiary-defenses">
            {entry.resistances && entry.resistances.length > 0 && (
              <div className="bestiary-defense resist">
                <span className="defense-label">Resistencias</span>
                <span className="defense-value">{entry.resistances.join(', ')}</span>
              </div>
            )}
            {entry.immunities && entry.immunities.length > 0 && (
              <div className="bestiary-defense immune">
                <span className="defense-label">Inmunidades</span>
                <span className="defense-value">{entry.immunities.join(', ')}</span>
              </div>
            )}
            {entry.vulnerabilities && entry.vulnerabilities.length > 0 && (
              <div className="bestiary-defense vulnerable">
                <span className="defense-label">Vulnerabilidades</span>
                <span className="defense-value">{entry.vulnerabilities.join(', ')}</span>
              </div>
            )}
            {entry.conditionImmunities && entry.conditionImmunities.length > 0 && (
              <div className="bestiary-defense cond">
                <span className="defense-label">Inmune a condiciones</span>
                <span className="defense-value">{entry.conditionImmunities.join(', ')}</span>
              </div>
            )}
          </div>

          {entry.traits && entry.traits.length > 0 && (
            <div className="bestiary-block">
              <div className="bestiary-block-label">Rasgos</div>
              <ul className="bestiary-list-items">
                {entry.traits.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {entry.actions && entry.actions.length > 0 && (
            <div className="bestiary-block">
              <div className="bestiary-block-label">Acciones</div>
              <ul className="bestiary-list-items">
                {entry.actions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="bestiary-tactics">
            {entry.weaknesses.length > 0 && (
              <div className="bestiary-tactic weakness">
                <span className="tactic-icon">⚠️</span>
                <div>
                  <div className="tactic-title">Debilidades</div>
                  <p>{entry.weaknesses.join(' ')}</p>
                </div>
              </div>
            )}
            {entry.strengths.length > 0 && (
              <div className="bestiary-tactic strength">
                <span className="tactic-icon">💪</span>
                <div>
                  <div className="tactic-title">Fortalezas</div>
                  <p>{entry.strengths.join(' ')}</p>
                </div>
              </div>
            )}
          </div>

          {entry.habitat && (
            <div className="bestiary-block">
              <div className="bestiary-block-label">Hábitat</div>
              <p className="bestiary-text">{entry.habitat}</p>
            </div>
          )}

          <div className="bestiary-block lore">
            <div className="bestiary-block-label">Lore</div>
            <p className="bestiary-lore">{entry.lore}</p>
          </div>
        </div>
      )}
    </div>
  );
};

type StatPillProps = {
  label: string;
  value: string;
};

const StatPill: React.FC<StatPillProps> = ({ label, value }) => (
  <div className="bestiary-stat-pill">
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

