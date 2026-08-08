import React from 'react';
import { ClassDynamicProps } from './types';

export const MonkDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const kiMax = c.level >= 2 ? c.level : 0;
  const kiUsed = c.classResourceUsed['ki'] || 0;
  const kiAvailable = kiMax - kiUsed;
  
  const martialArtsDie = c.level >= 17 ? '1d10' : c.level >= 11 ? '1d8' : c.level >= 5 ? '1d6' : '1d4';

  const toggleKi = (change: number) => {
    const nextUsed = Math.max(0, Math.min(kiMax, kiUsed + change));
    update({ classResourceUsed: { ...c.classResourceUsed, ki: nextUsed } });
  };

  if (kiMax === 0) return null;

  return (
    <div className="monk-ki-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(14,116,144,0.2) 0%, rgba(8,51,68,0.5) 100%)',
        border: '1px solid rgba(6,182,212,0.4)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, color: '#22d3ee', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>☯️</span> Puntos de Ki
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85em', color: '#67e8f9' }}>
              Dado de Artes Marciales: <strong>{martialArtsDie}</strong>
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#cffafe', lineHeight: 1 }}>
              {kiAvailable} <span style={{ fontSize: '0.4em', color: '#22d3ee' }}>/ {kiMax}</span>
            </div>
            <div style={{ fontSize: '0.7em', color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Ki Disponible
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '8px' 
        }}>
          {Array.from({ length: kiMax }).map((_, i) => {
            const isAvailable = i < kiAvailable;
            return (
              <div 
                key={i}
                onClick={() => {
                  if (isAvailable) toggleKi(1); // Usar Ki
                  else toggleKi(-1); // Recuperar Ki
                }}
                style={{
                  background: isAvailable ? 'rgba(6,182,212,0.2)' : 'rgba(0,0,0,0.5)',
                  border: isAvailable ? '1px solid rgba(34,211,238,0.5)' : '1px solid rgba(255,255,255,0.1)',
                  height: '32px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: isAvailable ? '#67e8f9' : '#334155',
                  fontSize: '1.2em'
                }}
                title={isAvailable ? "Gastar 1 Ki" : "Recuperar 1 Ki"}
              >
                {isAvailable ? '✨' : '·'}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85em' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '4px', color: '#a5f3fc' }}>
            <strong>Ráfaga de Golpes (1 Ki):</strong> Tras atacar en tu turno, haz 2 ataques desarmados adicionales como acción extra.
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '4px', color: '#a5f3fc' }}>
            <strong>Defensa del Paciente (1 Ki):</strong> Acción adicional para esquivar.
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '4px', color: '#a5f3fc', gridColumn: '1 / -1' }}>
            <strong>Paso del Viento (1 Ki):</strong> Acción adicional para Destrabarse o Correr. Tu distancia de salto se duplica este turno.
          </div>
        </div>
      </div>
    </div>
  );
};
