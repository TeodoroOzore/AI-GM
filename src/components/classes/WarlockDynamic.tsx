import React from 'react';
import { ClassDynamicProps } from './types';
import { WARLOCK_INVOCATIONS } from '../../data/classFeatures';

export const WarlockDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const getInvocationsMax = (level: number) => {
    if (level < 2) return 0;
    if (level < 5) return 2;
    if (level < 7) return 3;
    if (level < 9) return 4;
    if (level < 12) return 5;
    if (level < 15) return 6;
    if (level < 18) return 7;
    return 8;
  };

  const maxInvocations = getInvocationsMax(c.level);
  const activeInvocations = c.warlockInvocations || [];

  const toggleInvocation = (invName: string) => {
    if (activeInvocations.includes(invName)) {
      update({ warlockInvocations: activeInvocations.filter(n => n !== invName) });
    } else {
      if (activeInvocations.length >= maxInvocations) {
        alert(`⚠️ Has alcanzado el límite de invocaciones activas (${maxInvocations}).`);
        return;
      }
      update({ warlockInvocations: [...activeInvocations, invName] });
    }
  };

  if (maxInvocations === 0) return null;

  return (
    <div className="warlock-invocations-container" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ margin: 0, color: '#d946ef', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>👁️</span> Invocaciones Sobrenaturales
        </h3>
        <span style={{ 
          background: 'rgba(217, 70, 239, 0.2)', 
          padding: '4px 10px', 
          borderRadius: '12px',
          color: '#f0abfc',
          fontWeight: 'bold',
          fontSize: '0.9em'
        }}>
          {activeInvocations.length} / {maxInvocations} Activas
        </span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '12px' 
      }}>
        {WARLOCK_INVOCATIONS.map((inv) => {
          const isActive = activeInvocations.includes(inv.name);
          return (
            <div 
              key={inv.name}
              onClick={() => toggleInvocation(inv.name)}
              style={{
                background: isActive 
                  ? 'linear-gradient(145deg, rgba(134,25,143,0.3) 0%, rgba(74,4,78,0.5) 100%)' 
                  : 'rgba(30,30,30,0.5)',
                border: isActive 
                  ? '1px solid rgba(217,70,239,0.5)' 
                  : '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                padding: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {isActive && (
                <div style={{ 
                  position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', 
                  background: '#d946ef', boxShadow: '0 0 10px #d946ef' 
                }} />
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ margin: '0 0 6px 0', color: isActive ? '#f0abfc' : '#e2e8f0', fontSize: '1em' }}>
                  {inv.name}
                </h4>
                {isActive && <span style={{ color: '#d946ef' }}>★</span>}
              </div>
              
              {inv.prerequisite && (
                <div style={{ fontSize: '0.75em', color: '#94a3b8', marginBottom: '8px', fontStyle: 'italic' }}>
                  Prerrequisito: {inv.prerequisite}
                </div>
              )}
              
              <p style={{ margin: 0, fontSize: '0.85em', color: isActive ? '#f8fafc' : '#94a3b8', lineHeight: 1.4 }}>
                {inv.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
