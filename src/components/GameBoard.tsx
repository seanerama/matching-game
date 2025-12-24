import { useEffect, useRef } from 'react';
import { useGame } from '../GameContext';
import { Card } from './Card';
import './GameBoard.css';

export function GameBoard() {
  const { state, dispatch } = useGame();
  const timeoutRef = useRef<number | null>(null);

  const isCheckingMatch = state.flippedCards.length === 2;

  useEffect(() => {
    if (state.flippedCards.length === 2) {
      const [first, second] = state.flippedCards;
      const isMatch = first.professionId === second.professionId;

      timeoutRef.current = window.setTimeout(() => {
        dispatch({ type: 'CHECK_MATCH' });

        if (!isMatch) {
          setTimeout(() => {
            dispatch({ type: 'RESET_FLIPPED' });
            dispatch({ type: 'NEXT_PLAYER' });
          }, 500);
        }
      }, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [state.flippedCards, dispatch]);

  const handleCardClick = (cardId: string) => {
    if (!isCheckingMatch) {
      dispatch({ type: 'FLIP_CARD', cardId });
    }
  };

  // Calculate grid columns based on card count
  const cardCount = state.cards.length;
  let columns = 4;
  if (cardCount <= 12) columns = 4;
  else if (cardCount <= 24) columns = 6;
  else if (cardCount <= 40) columns = 8;
  else columns = 10;

  if (state.cards.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
        <p>No cards found. Debug info:</p>
        <p>Selected decks: {JSON.stringify(state.selectedDecks)}</p>
        <p>Pair count: {state.pairCount}</p>
      </div>
    );
  }

  return (
    <div
      className="game-board"
      style={{ '--columns': columns } as React.CSSProperties}
    >
      {state.cards.map(card => (
        <Card
          key={card.id}
          card={card}
          onClick={() => handleCardClick(card.id)}
          disabled={isCheckingMatch}
        />
      ))}
    </div>
  );
}
