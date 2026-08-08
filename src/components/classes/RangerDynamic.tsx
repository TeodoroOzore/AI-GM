import React from 'react';
import { ClassDynamicProps } from './types';

export const RangerDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const isActive = c.hunterMarkActive || false;
  const target = c.hunterMarkTarget || '';

  const toggleMark = () => {
    update({ hunterMarkActive: !isActive });
  };

  const hasHuntersMarkSpell = (c.spellsKnown || []).some(s => s.name.toLowerCase().includes('marca del cazador') || s.name.toLowerCase().includes("hunter's mark"));
  // Los Exploradores en niveles bajos sin el hechizo probablemente no deberían verlo a menos que lo hayan elegido.
  // Es un hechizo icónico para los Exploradores.
  // Lo mostraremos si tienen el hechizo o si son nivel 2+ (cuando pueden lanzar hechizos).
  
  if (c.level < 2 && !hasHuntersMarkSpell) return null;

  return (
    <div className="ranger-hunters-mark-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: isActive 
          ? 'linear-gradient(135deg, rgba(21,128,61,0.2) 0%, rgba(20,83,45,0.4) 100%)' 
          : 'rgba(30,41,59,0.5)',
        border: isActive 
          ? '1px solid rgba(34,197,94,0.5)' 
          : '1px solid rgba(255,255,255,0.1)',
        padding: '16px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: isActive ? '#4ade80' : '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🏹</span> Marca del Cazador
          </h3>
          <button 
            onClick={toggleMark}
            style={{
              background: isActive ? '#dc2626' : '#16a34a',
              color: '#fff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background 0.2s'
            }}
          >
            {isActive ? '✕ Quitar Marca' : '🎯 Activar Marca'}
          </button>
        </div>

        {isActive && (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.8em', color: '#86efac', marginBottom: '4px' }}>Objetivo Actual</label>
              <input 
                type="text" 
                value={target}
                onChange={e => update({ hunterMarkTarget: e.target.value })}
                placeholder="Nombre del enemigo (ej. Jefe Orco)"
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  color: '#fff',
                  padding: '8px',
                  borderRadius: '4px',
                  outline: 'none'
                }}
              />
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: '6px', border: '1px dashed rgba(74,222,128,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75em', color: '#86efac', textAlign: 'center', marginBottom: '2px' }}>Daño Extra</div>
              <button 
                onClick={() => {
                  const roll = Math.floor(Math.random() * 6) + 1;
                  alert(`Daño de Marca del Cazador: ${roll}`);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4ade80',
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                  cursor: 'pointer',
                  padding: 0
                }}
                title="Tirar daño extra"
              >
                +1d6 🎲
              </button>
            </div>
          </div>
        )}
        
        {isActive && (
          <p style={{ margin: 0, fontSize: '0.85em', color: '#bbf7d0', fontStyle: 'italic' }}>
            Recuerda: Tienes ventaja en pruebas de Sabiduría (Supervivencia) o Inteligencia (Investigación) para encontrar al objetivo. Si el objetivo llega a 0 PG, puedes usar una acción adicional para marcar a otro antes de que termine el hechizo.
          </p>
        )}
      </div>
    </div>
  );
};
