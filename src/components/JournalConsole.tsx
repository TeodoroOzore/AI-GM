import React, { useState, useRef, useEffect } from 'react';
import { JournalEntry } from '../types';

type JournalConsoleProps = {
  characterName: string;
  log: JournalEntry[];
  isThinking: boolean;
  onSendTurn: (text: string) => void;
};

export const JournalConsole: React.FC<JournalConsoleProps> = ({
  characterName,
  log,
  isThinking,
  onSendTurn
}) => {
  const [inputText, setInputText] = useState('');
  const journalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (journalRef.current) {
      journalRef.current.scrollTop = journalRef.current.scrollHeight;
    }
  }, [log, isThinking]);

  const handleSend = () => {
    if (isThinking) return;
    onSendTurn(inputText);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div id="journal-col">
      <div id="journal" ref={journalRef}>
        {log.map((e, idx) => (
          <div key={idx} className={`entry ${e.role === 'player' ? 'player' : 'dm'}`}>
            <div className="who">
              {e.role === 'player' ? (characterName || 'Vos') : 'El Dungeon Master'}
            </div>
            <div className="text">{e.text}</div>
            {e.rolls && e.rolls.length > 0 && (
              <div>
                {e.rolls.map((r, rIdx) => (
                  <span key={rIdx} className="roll-chip">
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="entry dm thinking">
            El DM consulta sus notas...
          </div>
        )}
      </div>

      <div id="input-bar">
        <textarea
          id="player-input"
          placeholder="¿Qué hacés? (Presioná Enter para enviar, Shift+Enter para nueva línea)"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button id="send-btn" onClick={handleSend} disabled={isThinking}>
          Actuar
        </button>
      </div>
    </div>
  );
};
