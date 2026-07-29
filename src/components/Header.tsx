import React from 'react';

type HeaderProps = {
  onSummarize: () => void;
  onReset: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onSummarize, onReset }) => {
  return (
    <header>
      <div>
        <h1>El Cuaderno del Explorador</h1>
        <div className="sub">DM solitario · D&D 5e · dados reales, sin trampa</div>
      </div>
      <div className="actions">
        <button onClick={onSummarize}>Resumir crónica</button>
        <button onClick={onReset}>Nueva campaña</button>
      </div>
    </header>
  );
};
