import React from 'react';
import { ClassDynamicProps } from './types';
import { SpellItem } from '../../types';

export const WizardDynamic: React.FC<ClassDynamicProps> = ({ c, update, limits }) => {
  const nonRacialSpells = (c.spellsKnown || []).filter(s => s.level !== 'racial');
  const cantrips = nonRacialSpells.filter(s => s.level === '0' || s.level?.toLowerCase().includes('truco'));
  const spells = nonRacialSpells.filter(s => s.level !== '0' && !s.level?.toLowerCase().includes('truco'));
  
  const preparedCount = spells.filter(s => s.prepared).length;
  const maxPrepared = limits.spellsKnownOrPreparedMax || (c.level + Math.max(1, limits.abilityModVal));

  const togglePrepare = (spellIndex: number) => {
    const originalSpells = [...(c.spellsKnown || [])];
    const targetSpell = originalSpells[spellIndex];
    
    if (!targetSpell.prepared && preparedCount >= maxPrepared) {
      alert(`⚠️ Has alcanzado el límite de hechizos preparados (${maxPrepared}).`);
      return;
    }
    
    targetSpell.prepared = !targetSpell.prepared;
    update({ spellsKnown: originalSpells });
  };

  return (
    <div className="wizard-prep-container">
      <div className="wizard-prep-header" style={{
        background: 'linear-gradient(135deg, rgba(30,58,138,0.2) 0%, rgba(15,23,42,0.5) 100%)',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid rgba(59,130,246,0.3)',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📖</span> Preparación de Hechizos
        </h3>
        <p style={{ margin: '0 0 12px 0', fontSize: '0.9em', color: '#cbd5e1' }}>
          Como mago, preparas tu lista de hechizos al final de cada descanso largo.
        </p>
        
        <div className="prep-progress" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1, height: '8px', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${Math.min(100, (preparedCount / maxPrepared) * 100)}%`, 
              height: '100%', 
              background: preparedCount === maxPrepared ? '#fbbf24' : '#3b82f6',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <span style={{ fontWeight: 'bold', color: preparedCount === maxPrepared ? '#fbbf24' : '#fff' }}>
            {preparedCount} / {maxPrepared} Preparados
          </span>
        </div>
      </div>

      <div className="wizard-spells-grid" style={{ display: 'grid', gap: '8px' }}>
        {c.spellsKnown.map((sp, idx) => {
          if (sp.level === 'racial' || sp.level === '0' || sp.level?.toLowerCase().includes('truco')) return null;
          
          return (
            <div key={idx} 
                 style={{
                   display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                   padding: '10px 14px',
                   background: sp.prepared ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                   border: sp.prepared ? '1px solid rgba(59,130,246,0.5)' : '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '6px',
                   cursor: 'pointer',
                   transition: 'all 0.2s ease'
                 }}
                 onClick={() => togglePrepare(idx)}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '4px',
                  border: sp.prepared ? '2px solid #60a5fa' : '2px solid rgba(255,255,255,0.3)',
                  background: sp.prepared ? '#60a5fa' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {sp.prepared && <span style={{ color: '#0f172a', fontSize: '14px', lineHeight: 1 }}>✓</span>}
                </div>
                
                <div>
                  <div style={{ fontWeight: 'bold', color: sp.prepared ? '#bfdbfe' : '#e2e8f0' }}>
                    {sp.name || '(Sin nombre)'}
                  </div>
                  <div style={{ fontSize: '0.8em', color: '#94a3b8' }}>
                    Nivel {sp.level} {sp.school ? `· ${sp.school}` : ''}
                  </div>
                </div>
              </div>
              
              <div style={{ fontSize: '1.2em', opacity: sp.prepared ? 1 : 0.2 }}>
                {sp.prepared ? '🔮' : '📘'}
              </div>
            </div>
          );
        })}
        {spells.length === 0 && (
          <div style={{ padding: '16px', textAlign: 'center', color: '#64748b', fontStyle: 'italic' }}>
            No tienes hechizos de nivel 1 o superior conocidos.
          </div>
        )}
      </div>
    </div>
  );
};
