import { useGame } from '../GameContext';
import './PlayerPanel.css';

export function PlayerPanel() {
  const { state } = useGame();

  return (
    <div className="player-panel">
      {state.players.map((player, index) => (
        <div
          key={player.id}
          className={`player-card ${index === state.currentPlayerIndex ? 'active' : ''}`}
          style={{ '--player-color': player.color } as React.CSSProperties}
        >
          <div className="player-indicator"></div>
          <div className="player-info">
            <span className="player-name">{player.name}</span>
            <span className="player-score">{player.score} pairs</span>
          </div>
        </div>
      ))}
    </div>
  );
}
