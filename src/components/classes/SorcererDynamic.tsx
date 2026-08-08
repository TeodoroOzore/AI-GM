import React from 'react';
import { ClassDynamicProps } from './types';
import { METAMAGIC_OPTIONS } from '../../data/classFeatures';

export const SorcererDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const getMaxMetamagic = (level: number) => {
    if (level < 2) return 0;
    if (level < 10) return 2;
    if (level < 17) return 3;
    return 4;
  };

  const maxOptions = getMaxMetamagic(c.level);
  const activeChoices = c.metamagicChoices || [];
  const sorceryMax = c.level >= 2 ? c.level : 0;
  const sorceryUsed = c.classResourceUsed['sorcery'] || 0;
  const sorceryAvailable = sorceryMax - sorceryUsed;

  const toggleMetamagic = (name: string) => {
    if (activeChoices.includes(name)) {
      update({ metamagicChoices: activeChoices.filter(n => n !== name) });
    } else {
      if (activeChoices.length >= maxOptions) {
        alert(`⚠️ Has alcanzado el límite de opciones de metamagia (${maxOptions}).`);
        return;
      }
      update({ metamagicChoices: [...activeChoices, name] });
    }
  };

  if (maxOptions === 0) return null;

  return (
    <div className="sorcerer-metamagic-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(127,29,29,0.3) 100%)',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid rgba(239,68,68,0.3)',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✨</span> Metamagia y Puntos de Hechicería
            </h3>
            <p style={{ margin: 0, fontSize: '0.85em', color: '#f87171' }}>
              Puedes usar puntos de hechicería para potenciar tus hechizos.
            </p>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#fef2f2', lineHeight: 1 }}>
              {sorceryAvailable} <span style={{ fontSize: '0.4em', color: '#fca5a5' }}>/ {sorceryMax}</span>
            </div>
            <div style={{ fontSize: '0.7em', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Puntos Disponibles
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, color: '#f87171' }}>Opciones de Metamagia ({activeChoices.length}/{maxOptions})</h4>
        <span style={{ fontSize: '0.8em', color: '#94a3b8' }}>Selecciona tus opciones conocidas</span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '12px' 
      }}>
        {METAMAGIC_OPTIONS.map((meta) => {
          const isActive = activeChoices.includes(meta.name);
          return (
            <div 
              key={meta.name}
              onClick={() => toggleMetamagic(meta.name)}
              style={{
                background: isActive 
                  ? 'rgba(127,29,29,0.4)' 
                  : 'rgba(30,30,30,0.5)',
                border: isActive 
                  ? '1px solid rgba(248,113,113,0.5)' 
                  : '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                padding: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <h5 style={{ margin: 0, color: isActive ? '#fecaca' : '#e2e8f0', fontSize: '1em' }}>
                  {meta.name}
                </h5>
                <div style={{ 
                  width: '18px', height: '18px', borderRadius: '50%',
                  border: isActive ? 'none' : '2px solid rgba(255,255,255,0.3)',
                  background: isActive ? '#ef4444' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {isActive && <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%' }} />}
                </div>
              </div>
              
              <p style={{ margin: 0, fontSize: '0.85em', color: isActive ? '#fee2e2' : '#94a3b8', lineHeight: 1.4 }}>
                {meta.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
