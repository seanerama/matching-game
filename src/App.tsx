import { GameProvider, useGame } from './GameContext';
import { SetupScreen } from './components/SetupScreen';
import { GameBoard } from './components/GameBoard';
import { PlayerPanel } from './components/PlayerPanel';
import { GameOverScreen } from './components/GameOverScreen';
import './App.css';

function GameContent() {
  const { state, dispatch } = useGame();

  if (state.phase === 'setup') {
    return <SetupScreen />;
  }

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>Matching Game</h1>
        <button
          className="back-button"
          onClick={() => dispatch({ type: 'RESET_GAME' })}
        >
          New Game
        </button>
      </header>
      <PlayerPanel />
      <GameBoard />
      {state.phase === 'gameOver' && <GameOverScreen />}
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <div className="app">
        <GameContent />
      </div>
    </GameProvider>
  );
}

export default App;
