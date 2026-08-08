import React from 'react';
import { ClassDynamicProps } from './types';
import { ROGUE_CUNNING_ACTION } from '../../data/classFeatures';

export const RogueDynamic: React.FC<ClassDynamicProps> = ({ c }) => {
  const sneakDice = Math.ceil(c.level / 2);

  return (
    <div className="rogue-tactics-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)',
        border: '1px solid rgba(148,163,184,0.3)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🗡️</span> Tácticas del Pícaro
          </h3>
          <div style={{ 
            background: 'rgba(0,0,0,0.5)', 
            border: '1px solid #cbd5e1', 
            padding: '4px 12px', 
            borderRadius: '16px',
            color: '#f8fafc',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{ fontSize: '0.8em', color: '#94a3b8' }}>Ataque Furtivo:</span>
            <span style={{ color: '#ef4444' }}>+{sneakDice}d6</span>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '0.85em', color: '#cbd5e1' }}>
          <strong>Ataque Furtivo:</strong> Una vez por turno, suma el daño extra si tienes ventaja en el ataque con un arma sutil/a distancia, o si hay un enemigo de tu objetivo a 5 pies de él y no tienes desventaja.
        </p>

        {c.level >= 2 && (
          <>
            <h4 style={{ margin: '8px 0 0 0', color: '#cbd5e1' }}>Acción Astuta (Acciones Adicionales)</h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '12px' 
            }}>
              {ROGUE_CUNNING_ACTION.map((action) => (
                <div 
                  key={action.name}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    padding: '12px',
                    transition: 'all 0.2s',
                  }}
                >
                  <h5 style={{ margin: '0 0 6px 0', color: '#f8fafc', fontSize: '0.95em' }}>
                    {action.name.split(': ')[1]}
                  </h5>
                  <p style={{ margin: 0, fontSize: '0.8em', color: '#94a3b8', lineHeight: 1.4 }}>
                    {action.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
