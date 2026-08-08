import React from 'react';
import { ClassDynamicProps } from './types';
import { abilityMod } from '../../data/abilities';

export const BardDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const chaMod = abilityMod(c.abilities['cha']);
  const maxInspiration = Math.max(1, chaMod);
  const usedInspiration = c.classResourceUsed['inspiration'] || 0;
  const available = maxInspiration - usedInspiration;
  
  const die = c.level >= 15 ? '1d12' : c.level >= 10 ? '1d10' : c.level >= 5 ? '1d8' : '1d6';
  const restType = c.level >= 5 ? 'Corto/Largo' : 'Largo';

  const toggleInspiration = (change: number) => {
    const nextUsed = Math.max(0, Math.min(maxInspiration, usedInspiration + change));
    update({ classResourceUsed: { ...c.classResourceUsed, inspiration: nextUsed } });
  };

  return (
    <div className="bard-inspiration-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(131,24,67,0.4) 100%)',
        border: '1px solid rgba(244,114,182,0.4)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, color: '#f472b6', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🎵</span> Inspiración Bárdica
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85em', color: '#fbcfe8' }}>
              Dado de Inspiración: <strong>{die}</strong> (Recupera en descanso {restType})
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#fdf2f8', lineHeight: 1 }}>
              {available} <span style={{ fontSize: '0.4em', color: '#f472b6' }}>/ {maxInspiration}</span>
            </div>
            <div style={{ fontSize: '0.7em', color: '#f472b6', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Usos
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '12px' 
        }}>
          {Array.from({ length: maxInspiration }).map((_, i) => {
            const isAvailable = i < available;
            return (
              <div 
                key={i}
                onClick={() => {
                  if (isAvailable) toggleInspiration(1);
                  else toggleInspiration(-1);
                }}
                style={{
                  background: isAvailable ? 'rgba(244,114,182,0.2)' : 'rgba(0,0,0,0.5)',
                  border: isAvailable ? '1px solid rgba(244,114,182,0.5)' : '1px solid rgba(255,255,255,0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: isAvailable ? '#fbcfe8' : '#475569',
                  fontSize: '1.2em',
                  boxShadow: isAvailable ? '0 0 10px rgba(244,114,182,0.3)' : 'none'
                }}
                title={isAvailable ? "Gastar Inspiración" : "Recuperar Inspiración"}
              >
                {isAvailable ? '✨' : '·'}
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: '0.8em', color: '#fce7f3', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '4px' }}>
          <strong>Acción adicional:</strong> Otorga {die} a un aliado a 60 pies. En los próximos 10 minutos, puede sumar este dado a una prueba de habilidad, tirada de ataque o tirada de salvación, después de lanzar el d20 pero antes de que el DM declare el resultado.
        </div>
      </div>
    </div>
  );
};
