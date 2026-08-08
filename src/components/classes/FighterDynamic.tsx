import React from 'react';
import { ClassDynamicProps } from './types';

export const FighterDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  // Manejo de Segundo Aliento (Second Wind)
  // 5.5e: 2 usos a lvl 1, 3 a lvl 4, 4 a lvl 10
  const secondWindMax = c.level >= 10 ? 4 : c.level >= 4 ? 3 : 2;
  const secondWindUsed = c.classResourceUsed['secondwind'] || 0;
  const secondWindAvailable = secondWindMax - secondWindUsed;
  
  // Acción Adicional (Action Surge)
  // 1 uso a nvl 2, 2 usos a nvl 17
  const actionSurgeMax = c.level >= 17 ? 2 : c.level >= 2 ? 1 : 0;
  const actionSurgeUsed = c.classResourceUsed['actionsurge'] || 0;
  const actionSurgeAvailable = actionSurgeMax - actionSurgeUsed;

  // Indomable (Indomitable)
  // 1 uso a nvl 9, 2 a nvl 13, 3 a nvl 17
  const indomitableMax = c.level >= 17 ? 3 : c.level >= 13 ? 2 : c.level >= 9 ? 1 : 0;
  const indomitableUsed = c.classResourceUsed['indomitable'] || 0;
  const indomitableAvailable = indomitableMax - indomitableUsed;

  const toggleResource = (resource: string, change: number, max: number) => {
    const current = c.classResourceUsed[resource] || 0;
    const next = Math.max(0, Math.min(max, current + change));
    update({ classResourceUsed: { ...c.classResourceUsed, [resource]: next } });
  };

  return (
    <div className="fighter-maneuvers-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(120,53,15,0.4) 0%, rgba(69,26,3,0.8) 100%)',
        border: '1px solid rgba(180,83,9,0.5)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#fcd34d', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>⚔️</span> Disciplina Marcial
          </h3>
          <span style={{ fontSize: '0.8em', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Recuperación en Descanso Corto/Largo
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          {/* SEGUNDO ALIENTO */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h4 style={{ margin: 0, color: '#fcd34d' }}>Segundo Aliento</h4>
              <span style={{ color: '#fef3c7', fontWeight: 'bold' }}>{secondWindAvailable}/{secondWindMax}</span>
            </div>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.8em', color: '#fde68a', lineHeight: 1.3 }}>
              Cura <strong>1d10 + {c.level}</strong> PG como acción adicional, o gasta 1 uso para sumar 1d10 a un control de habilidad fallido (Mente Táctica).
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => toggleResource('secondwind', 1, secondWindMax)}
                disabled={secondWindAvailable <= 0}
                style={{ flex: 1, padding: '6px', background: secondWindAvailable > 0 ? '#d97706' : 'rgba(217,119,6,0.3)', color: '#fff', border: 'none', borderRadius: '4px', cursor: secondWindAvailable > 0 ? 'pointer' : 'not-allowed' }}
              >Gastar Uso</button>
              <button 
                onClick={() => toggleResource('secondwind', -1, secondWindMax)}
                disabled={secondWindUsed <= 0}
                style={{ padding: '6px 12px', background: 'transparent', color: '#fcd34d', border: '1px solid #d97706', borderRadius: '4px', cursor: secondWindUsed > 0 ? 'pointer' : 'not-allowed' }}
              >↺</button>
            </div>
          </div>

          {/* ACCIÓN ADICIONAL */}
          {actionSurgeMax > 0 && (
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, color: '#fcd34d' }}>Acción Adicional</h4>
                <span style={{ color: '#fef3c7', fontWeight: 'bold' }}>{actionSurgeAvailable}/{actionSurgeMax}</span>
              </div>
              <p style={{ margin: '0 0 12px 0', fontSize: '0.8em', color: '#fde68a', lineHeight: 1.3 }}>
                Toma <strong>1 Acción extra</strong> en tu turno. (Máximo 1 por turno).
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => toggleResource('actionsurge', 1, actionSurgeMax)}
                  disabled={actionSurgeAvailable <= 0}
                  style={{ flex: 1, padding: '6px', background: actionSurgeAvailable > 0 ? '#b45309' : 'rgba(180,83,9,0.3)', color: '#fff', border: 'none', borderRadius: '4px', cursor: actionSurgeAvailable > 0 ? 'pointer' : 'not-allowed' }}
                >Gastar Uso</button>
                <button 
                  onClick={() => toggleResource('actionsurge', -1, actionSurgeMax)}
                  disabled={actionSurgeUsed <= 0}
                  style={{ padding: '6px 12px', background: 'transparent', color: '#fcd34d', border: '1px solid #b45309', borderRadius: '4px', cursor: actionSurgeUsed > 0 ? 'pointer' : 'not-allowed' }}
                >↺</button>
              </div>
            </div>
          )}

          {/* INDOMABLE */}
          {indomitableMax > 0 && (
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, color: '#fcd34d' }}>Indomable</h4>
                <span style={{ color: '#fef3c7', fontWeight: 'bold' }}>{indomitableAvailable}/{indomitableMax}</span>
              </div>
              <p style={{ margin: '0 0 12px 0', fontSize: '0.8em', color: '#fde68a', lineHeight: 1.3 }}>
                Rerolea una tirada de salvación fallida (debes usar la nueva tirada). Recuperas usos en Descanso Largo.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => toggleResource('indomitable', 1, indomitableMax)}
                  disabled={indomitableAvailable <= 0}
                  style={{ flex: 1, padding: '6px', background: indomitableAvailable > 0 ? '#78350f' : 'rgba(120,53,15,0.3)', color: '#fff', border: 'none', borderRadius: '4px', cursor: indomitableAvailable > 0 ? 'pointer' : 'not-allowed' }}
                >Gastar Uso</button>
                <button 
                  onClick={() => toggleResource('indomitable', -1, indomitableMax)}
                  disabled={indomitableUsed <= 0}
                  style={{ padding: '6px 12px', background: 'transparent', color: '#fcd34d', border: '1px solid #78350f', borderRadius: '4px', cursor: indomitableUsed > 0 ? 'pointer' : 'not-allowed' }}
                >↺</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
