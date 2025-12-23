export interface Profession {
  id: string;
  name: string;
  image: string;
}

export interface Deck {
  id: string;
  childName: string;
  professions: Profession[];
}

export interface Card {
  id: string;
  professionId: string;
  deckId: string;
  childName: string;
  professionName: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface Player {
  id: number;
  name: string;
  score: number;
  color: string;
}

export interface GameState {
  phase: 'setup' | 'playing' | 'gameOver';
  players: Player[];
  currentPlayerIndex: number;
  cards: Card[];
  flippedCards: Card[];
  selectedDecks: string[];
  pairCount: number;
}

export type GameAction =
  | { type: 'START_GAME'; players: Player[]; selectedDecks: string[]; pairCount: number }
  | { type: 'FLIP_CARD'; cardId: string }
  | { type: 'CHECK_MATCH' }
  | { type: 'RESET_FLIPPED' }
  | { type: 'NEXT_PLAYER' }
  | { type: 'RESET_GAME' };
