import React from 'react';
import { ClassDynamicProps } from './types';

export const BarbarianDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const rageMax = c.level >= 20 ? 99 : c.level >= 17 ? 6 : c.level >= 12 ? 5 : c.level >= 6 ? 4 : c.level >= 3 ? 3 : 2;
  const rageUsed = c.classResourceUsed['rage'] || 0;
  const rageAvailable = rageMax - rageUsed;
  const rageBonus = c.level >= 16 ? 4 : c.level >= 9 ? 3 : 2;

  const toggleRage = (change: number) => {
    const nextUsed = Math.max(0, Math.min(rageMax, rageUsed + change));
    update({ classResourceUsed: { ...c.classResourceUsed, rage: nextUsed } });
  };

  return (
    <div className="barbarian-rage-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(153,27,27,0.2) 0%, rgba(69,10,10,0.5) 100%)',
        border: '1px solid rgba(220,38,38,0.4)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, color: '#f87171', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🪓</span> Furia del Bárbaro
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85em', color: '#fca5a5' }}>
              Bono de daño en furia: <strong>+{rageBonus}</strong>
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#fef2f2', lineHeight: 1 }}>
              {rageAvailable} <span style={{ fontSize: '0.4em', color: '#f87171' }}>/ {rageMax}</span>
            </div>
            <div style={{ fontSize: '0.7em', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Usos Disponibles
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            onClick={() => toggleRage(1)}
            disabled={rageAvailable <= 0}
            style={{
              background: rageAvailable > 0 ? '#dc2626' : 'rgba(220,38,38,0.3)',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: rageAvailable > 0 ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              transition: 'all 0.2s'
            }}
          >
            ¡Entrar en Furia! (Gastar 1)
          </button>
          <button 
            onClick={() => toggleRage(-1)}
            disabled={rageUsed <= 0}
            style={{
              background: 'rgba(0,0,0,0.4)',
              color: '#f87171',
              border: '1px solid rgba(248,113,113,0.3)',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: rageUsed > 0 ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              transition: 'all 0.2s'
            }}
          >
            Recuperar Uso
          </button>
        </div>

        <div style={{ fontSize: '0.8em', color: '#fecaca', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '4px' }}>
          <strong>En combate:</strong> Tienes ventaja en pruebas y salvaciones de Fuerza. Resistencia al daño contundente, perforante y cortante. No puedes lanzar ni concentrarte en hechizos.
        </div>
      </div>
    </div>
  );
};
