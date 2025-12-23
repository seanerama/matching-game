import { useState } from 'react';
import { useGame } from '../GameContext';
import { decks, playerColors, defaultPlayerNames } from '../data/decks';
import { Player } from '../types';
import './SetupScreen.css';

export function SetupScreen() {
  const { dispatch } = useGame();
  const [playerCount, setPlayerCount] = useState(1);
  const [playerNames, setPlayerNames] = useState(defaultPlayerNames);
  const [selectedDecks, setSelectedDecks] = useState<string[]>(['finley', 'evelyn', 'maya']);
  const [pairCount, setPairCount] = useState(6);

  const maxPairs = selectedDecks.length * 10;
  const minPairs = Math.min(6, maxPairs);

  // Generate valid pair counts (multiples of selected deck count for equal distribution)
  const validPairCounts: number[] = [];
  for (let i = minPairs; i <= maxPairs; i += selectedDecks.length) {
    validPairCounts.push(i);
  }

  const handleDeckToggle = (deckId: string) => {
    setSelectedDecks(prev => {
      if (prev.includes(deckId)) {
        if (prev.length === 1) return prev; // Must have at least one deck
        const newDecks = prev.filter(id => id !== deckId);
        // Adjust pair count if it's now too high
        const newMax = newDecks.length * 10;
        if (pairCount > newMax) {
          setPairCount(Math.max(6, newMax));
        }
        return newDecks;
      }
      return [...prev, deckId];
    });
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    setPlayerNames(prev => {
      const updated = [...prev];
      updated[index] = name;
      return updated;
    });
  };

  const handleStartGame = () => {
    const players: Player[] = Array.from({ length: playerCount }, (_, i) => ({
      id: i + 1,
      name: playerNames[i] || `Player ${i + 1}`,
      score: 0,
      color: playerColors[i],
    }));

    dispatch({
      type: 'START_GAME',
      players,
      selectedDecks,
      pairCount,
    });
  };

  return (
    <div className="setup-screen">
      <h1 className="game-title">Matching Game</h1>

      <div className="setup-section">
        <h2>Select Decks</h2>
        <p className="section-hint">Choose which children's cards to include</p>
        <div className="deck-options">
          {decks.map(deck => (
            <button
              key={deck.id}
              className={`deck-button ${selectedDecks.includes(deck.id) ? 'selected' : ''}`}
              onClick={() => handleDeckToggle(deck.id)}
            >
              <span className="deck-name">{deck.childName}</span>
              <span className="deck-count">{deck.professions.length} cards</span>
            </button>
          ))}
        </div>
      </div>

      <div className="setup-section">
        <h2>Number of Pairs</h2>
        <p className="section-hint">
          {selectedDecks.length > 1
            ? `Cards will be equally distributed from each deck`
            : `Select how many pairs to play with`}
        </p>
        <div className="pair-slider">
          <input
            type="range"
            min={minPairs}
            max={maxPairs}
            step={selectedDecks.length}
            value={pairCount}
            onChange={e => setPairCount(Number(e.target.value))}
          />
          <span className="pair-count">{pairCount} pairs ({pairCount * 2} cards)</span>
        </div>
      </div>

      <div className="setup-section">
        <h2>Players</h2>
        <p className="section-hint">1-4 players can play</p>
        <div className="player-count-options">
          {[1, 2, 3, 4].map(count => (
            <button
              key={count}
              className={`player-count-button ${playerCount === count ? 'selected' : ''}`}
              onClick={() => setPlayerCount(count)}
            >
              {count}
            </button>
          ))}
        </div>

        <div className="player-names">
          {Array.from({ length: playerCount }, (_, i) => (
            <div key={i} className="player-name-input">
              <span
                className="player-color-dot"
                style={{ background: playerColors[i] }}
              ></span>
              <input
                type="text"
                value={playerNames[i]}
                onChange={e => handlePlayerNameChange(i, e.target.value)}
                placeholder={`Player ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="start-button" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
}
