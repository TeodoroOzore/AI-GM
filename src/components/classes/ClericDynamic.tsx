import React from 'react';
import { ClassDynamicProps } from './types';
import { CLERIC_CHANNEL_DIVINITY } from '../../data/classFeatures';


export const ClericDynamic: React.FC<ClassDynamicProps> = ({ c, update }) => {
  const channelMax = c.level >= 18 ? 3 : c.level >= 6 ? 2 : c.level >= 2 ? 1 : 0;
  const channelUsed = c.classResourceUsed['channel'] || 0;
  const channelAvailable = channelMax - channelUsed;

  const toggleChannel = (change: number) => {
    const nextUsed = Math.max(0, Math.min(channelMax, channelUsed + change));
    update({ classResourceUsed: { ...c.classResourceUsed, channel: nextUsed } });
  };

  const subclassSelected = c.subclass;

  if (channelMax === 0) return null;

  return (
    <div className="cleric-channel-container" style={{ marginTop: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(202,138,4,0.4) 100%)',
        border: '1px solid rgba(253,224,71,0.5)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, color: '#fde047', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>☀️</span> Canalizar Divinidad
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85em', color: '#fef08a' }}>
              Se recuperan tras un descanso corto o largo.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#fef9c3', lineHeight: 1 }}>
              {channelAvailable} <span style={{ fontSize: '0.4em', color: '#fde047' }}>/ {channelMax}</span>
            </div>
            <div style={{ fontSize: '0.7em', color: '#fde047', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Usos
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '8px'
        }}>
          {Array.from({ length: channelMax }).map((_, i) => {
            const isAvailable = i < channelAvailable;
            return (
              <div 
                key={i}
                onClick={() => {
                  if (isAvailable) toggleChannel(1);
                  else toggleChannel(-1);
                }}
                style={{
                  background: isAvailable ? 'rgba(253,224,71,0.3)' : 'rgba(0,0,0,0.5)',
                  border: isAvailable ? '1px solid rgba(253,224,71,0.8)' : '1px solid rgba(255,255,255,0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: isAvailable ? '#fef9c3' : '#713f12',
                  fontSize: '1.4em',
                  boxShadow: isAvailable ? '0 0 10px rgba(253,224,71,0.4)' : 'none',
                  transform: isAvailable ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
                title={isAvailable ? "Gastar Uso" : "Recuperar Uso"}
              >
                <div style={{ transform: isAvailable ? 'rotate(-45deg)' : 'rotate(0deg)' }}>
                  {isAvailable ? '✨' : '·'}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
          {CLERIC_CHANNEL_DIVINITY.map(feat => (
            <div key={feat.name} style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #fde047' }}>
              <strong style={{ color: '#fde047', display: 'block', marginBottom: '4px' }}>{feat.name}</strong>
              <span style={{ fontSize: '0.85em', color: '#fef08a' }}>{feat.description}</span>
            </div>
          ))}
          
          {subclassSelected && (
            <div style={{ background: 'rgba(253,224,71,0.1)', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #fbbf24' }}>
              <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '4px' }}>{subclassSelected} (Canalizar Divinidad)</strong>
              <span style={{ fontSize: '0.85em', color: '#fef08a' }}>Consulta los rasgos de tu subclase en la pestaña "Clase" para usar esta opción.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
