import React from 'react';
import { ClassDynamicProps } from './types';
import { PALADIN_AURAS } from '../../data/classFeatures';

export const PaladinDynamic: React.FC<ClassDynamicProps> = ({ c }) => {
  const isUnconscious = c.hpCur <= 0 || c.conditions?.toLowerCase().includes('inconsciente') || c.conditions?.toLowerCase().includes('agonizando');
  
  const availableAuras = PALADIN_AURAS.filter(aura => {
    if (aura.prerequisite?.includes('Nivel 6') && c.level < 6) return false;
    if (aura.prerequisite?.includes('Nivel 10') && c.level < 10) return false;
    return true;
  });

  if (availableAuras.length === 0) return null;

  return (
    <div className="paladin-auras-container" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ margin: 0, color: '#fcd34d', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🛡️</span> Auras Sagradas
        </h3>
        {isUnconscious ? (
          <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.85em', background: 'rgba(239,68,68,0.2)', padding: '4px 8px', borderRadius: '4px' }}>
            Auras Desactivadas (Inconsciente)
          </span>
        ) : (
          <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.85em', background: 'rgba(16,185,129,0.2)', padding: '4px 8px', borderRadius: '4px' }}>
            Auras Activas
          </span>
        )}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '12px' 
      }}>
        {availableAuras.map((aura) => {
          return (
            <div 
              key={aura.name}
              style={{
                background: isUnconscious 
                  ? 'rgba(30,30,30,0.5)' 
                  : 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(217,119,6,0.2) 100%)',
                border: isUnconscious 
                  ? '1px solid rgba(255,255,255,0.05)' 
                  : '1px solid rgba(251,191,36,0.4)',
                borderRadius: '8px',
                padding: '14px',
                position: 'relative',
                overflow: 'hidden',
                opacity: isUnconscious ? 0.6 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              {!isUnconscious && (
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px', 
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(253,230,138,0.3) 0%, transparent 70%)',
                  animation: 'pulse 3s infinite'
                }} />
              )}
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: isUnconscious ? '#475569' : '#fbbf24',
                  boxShadow: isUnconscious ? 'none' : '0 0 8px #fbbf24'
                }} />
                <h4 style={{ margin: 0, color: isUnconscious ? '#94a3b8' : '#fde68a', fontSize: '1.05em' }}>
                  {aura.name}
                </h4>
              </div>
              
              <p style={{ margin: 0, fontSize: '0.85em', color: isUnconscious ? '#64748b' : '#fef3c7', lineHeight: 1.4 }}>
                {aura.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
