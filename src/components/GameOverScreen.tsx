import { useGame } from '../GameContext';
import { Player } from '../types';
import './GameOverScreen.css';

export function GameOverScreen() {
  const { state, dispatch } = useGame();

  const sortedPlayers = [...state.players].sort((a, b) => b.score - a.score);
  const highestScore = sortedPlayers[0]?.score || 0;
  const winners = sortedPlayers.filter(p => p.score === highestScore);

  const getResultMessage = () => {
    if (state.players.length === 1) {
      return `You found all ${highestScore} pairs!`;
    }
    if (winners.length > 1) {
      return "It's a tie!";
    }
    return `${winners[0].name} wins!`;
  };

  const handlePlayAgain = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  return (
    <div className="game-over-screen">
      <div className="game-over-content">
        <h1 className="game-over-title">Game Over!</h1>
        <p className="result-message">{getResultMessage()}</p>

        <div className="final-scores">
          <h2>Final Scores</h2>
          <div className="score-list">
            {sortedPlayers.map((player: Player, index: number) => (
              <div
                key={player.id}
                className={`score-item ${player.score === highestScore ? 'winner' : ''}`}
                style={{ '--player-color': player.color } as React.CSSProperties}
              >
                <span className="rank">{index + 1}</span>
                <span className="player-dot"></span>
                <span className="player-name">{player.name}</span>
                <span className="player-score">{player.score} pairs</span>
              </div>
            ))}
          </div>
        </div>

        <button className="play-again-button" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}
