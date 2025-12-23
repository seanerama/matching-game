import { GameState, GameAction, Card } from './types';
import { decks } from './data/decks';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createCards(selectedDeckIds: string[], pairCount: number): Card[] {
  const selectedDecks = decks.filter(d => selectedDeckIds.includes(d.id));
  const deckCount = selectedDecks.length;

  // Calculate how many pairs per deck (equal distribution)
  const pairsPerDeck = Math.floor(pairCount / deckCount);
  const extraPairs = pairCount % deckCount;

  const cards: Card[] = [];
  let cardIdCounter = 0;

  selectedDecks.forEach((deck, deckIndex) => {
    // Determine how many pairs to take from this deck
    const pairsFromThisDeck = pairsPerDeck + (deckIndex < extraPairs ? 1 : 0);

    // Shuffle professions and take the required number
    const shuffledProfessions = shuffleArray(deck.professions).slice(0, pairsFromThisDeck);

    shuffledProfessions.forEach(profession => {
      // Create two cards for each profession (the matching pair)
      for (let i = 0; i < 2; i++) {
        cards.push({
          id: `card-${cardIdCounter++}`,
          professionId: profession.id,
          deckId: deck.id,
          childName: deck.childName,
          professionName: profession.name,
          image: profession.image,
          isFlipped: false,
          isMatched: false,
        });
      }
    });
  });

  return shuffleArray(cards);
}

export const initialState: GameState = {
  phase: 'setup',
  players: [],
  currentPlayerIndex: 0,
  cards: [],
  flippedCards: [],
  selectedDecks: [],
  pairCount: 6,
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const cards = createCards(action.selectedDecks, action.pairCount);
      return {
        ...state,
        phase: 'playing',
        players: action.players,
        currentPlayerIndex: 0,
        cards,
        flippedCards: [],
        selectedDecks: action.selectedDecks,
        pairCount: action.pairCount,
      };
    }

    case 'FLIP_CARD': {
      const card = state.cards.find(c => c.id === action.cardId);
      if (!card || card.isFlipped || card.isMatched || state.flippedCards.length >= 2) {
        return state;
      }

      const updatedCards = state.cards.map(c =>
        c.id === action.cardId ? { ...c, isFlipped: true } : c
      );

      return {
        ...state,
        cards: updatedCards,
        flippedCards: [...state.flippedCards, { ...card, isFlipped: true }],
      };
    }

    case 'CHECK_MATCH': {
      if (state.flippedCards.length !== 2) return state;

      const [first, second] = state.flippedCards;
      const isMatch = first.professionId === second.professionId;

      if (isMatch) {
        const updatedCards = state.cards.map(c =>
          c.professionId === first.professionId ? { ...c, isMatched: true } : c
        );

        const updatedPlayers = state.players.map((p, i) =>
          i === state.currentPlayerIndex ? { ...p, score: p.score + 1 } : p
        );

        const allMatched = updatedCards.every(c => c.isMatched);

        return {
          ...state,
          cards: updatedCards,
          players: updatedPlayers,
          flippedCards: [],
          phase: allMatched ? 'gameOver' : 'playing',
        };
      }

      return state;
    }

    case 'RESET_FLIPPED': {
      const updatedCards = state.cards.map(c =>
        !c.isMatched ? { ...c, isFlipped: false } : c
      );

      return {
        ...state,
        cards: updatedCards,
        flippedCards: [],
      };
    }

    case 'NEXT_PLAYER': {
      const nextIndex = (state.currentPlayerIndex + 1) % state.players.length;
      return {
        ...state,
        currentPlayerIndex: nextIndex,
      };
    }

    case 'RESET_GAME': {
      return initialState;
    }

    default:
      return state;
  }
}
