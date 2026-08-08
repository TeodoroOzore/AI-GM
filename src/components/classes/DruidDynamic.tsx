import React from 'react';
import { ClassDynamicProps } from './types';
import { DRUID_WILD_SHAPES } from '../../data/classFeatures';

export const DruidDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const wsMax = c.level >= 20 ? 99 : c.level >= 2 ? 2 : 0;
  const wsUsed = c.classResourceUsed['wildshape'] || 0;
  const wsAvailable = wsMax - wsUsed;

  const toggleWS = (change: number) => {
    const nextUsed = Math.max(0, Math.min(wsMax, wsUsed + change));
    update({ classResourceUsed: { ...c.classResourceUsed, wildshape: nextUsed } });
  };

  const handleTransform = (form: string) => {
    if (form !== '') {
      // Si nos estamos transformando y no lo estábamos, o cambiamos de forma
      if (!c.wildShapeActiveForm && wsAvailable > 0) {
        toggleWS(1);
      } else if (!c.wildShapeActiveForm && wsAvailable <= 0) {
        alert("No tienes usos de Forma Salvaje disponibles.");
        return;
      }
    }
    update({ wildShapeActiveForm: form });
  };

  if (wsMax === 0) return null;

  const activeFeature = DRUID_WILD_SHAPES.find(f => f.name === c.wildShapeActiveForm);

  return (
    <div className="druid-wildshape-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(21,128,61,0.2) 0%, rgba(20,83,45,0.5) 100%)',
        border: '1px solid rgba(34,197,94,0.5)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, color: '#4ade80', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🐾</span> Forma Salvaje
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85em', color: '#86efac' }}>
              Se recuperan tras un descanso corto o largo.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#bbf7d0', lineHeight: 1 }}>
              {wsMax >= 99 ? '∞' : wsAvailable} <span style={{ fontSize: '0.4em', color: '#4ade80' }}>/ {wsMax >= 99 ? '∞' : wsMax}</span>
            </div>
            <div style={{ fontSize: '0.7em', color: '#4ade80', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Usos
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            onClick={() => toggleWS(1)}
            disabled={wsAvailable <= 0}
            style={{ padding: '8px 16px', background: wsAvailable > 0 ? '#16a34a' : 'rgba(22,163,74,0.3)', color: '#fff', border: 'none', borderRadius: '4px', cursor: wsAvailable > 0 ? 'pointer' : 'not-allowed' }}
          >Gastar Uso</button>
          <button 
            onClick={() => toggleWS(-1)}
            disabled={wsUsed <= 0}
            style={{ padding: '8px 16px', background: 'transparent', color: '#4ade80', border: '1px solid #16a34a', borderRadius: '4px', cursor: wsUsed > 0 ? 'pointer' : 'not-allowed' }}
          >Recuperar Uso</button>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #22c55e' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#86efac', fontWeight: 'bold' }}>Transformación Activa:</label>
          <select 
            value={c.wildShapeActiveForm || ''}
            onChange={(e) => handleTransform(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid #4ade80',
              color: '#bbf7d0',
              borderRadius: '4px',
              marginBottom: activeFeature ? '12px' : '0'
            }}
          >
            <option value="">(Ninguna)</option>
            {DRUID_WILD_SHAPES.map(form => {
              const reqLevelMatch = form.prerequisite ? form.prerequisite.match(/\d+/) : null;
              const reqLvl = reqLevelMatch ? parseInt(reqLevelMatch[0], 10) : 1;
              if (c.level < reqLvl) return null;
              return <option key={form.name} value={form.name}>{form.name}</option>;
            })}
          </select>

          {activeFeature && (
            <div style={{ marginTop: '8px', padding: '10px', background: 'rgba(34,197,94,0.1)', borderRadius: '4px' }}>
              <strong style={{ color: '#4ade80', display: 'block', marginBottom: '4px' }}>Detalles de la Forma:</strong>
              <span style={{ fontSize: '0.85em', color: '#bbf7d0' }}>{activeFeature.description}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
