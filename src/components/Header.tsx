import React from 'react';

type HeaderProps = {
  onSummarize: () => void;
  onReset: () => void;
  onOpenBestiary: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onSummarize, onReset, onOpenBestiary }) => {
  return (
    <header>
      <div>
        <h1>El Cuaderno del Explorador</h1>
        <div className="sub">DM solitario · D&D 5e · dados reales, sin trampa</div>
        <div className="sub" style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '4px' }}>
          Material inspirado en el SRD 5.1 de D&D bajo CC-BY-4.0. Atribución a Wizards of the Coast.
        </div>
      </div>
      <div className="actions">
        <button onClick={onOpenBestiary}>📖 Bestiario</button>
        <button onClick={onSummarize}>Resumir crónica</button>
        <button onClick={onReset}>Nueva campaña</button>
      </div>
    </header>
  );
};

