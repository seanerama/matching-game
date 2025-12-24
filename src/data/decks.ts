import { Deck } from '../types';

const imagePath = (childName: string, profession: string) =>
  `/images/${childName.toLowerCase()}/${childName.toLowerCase()}-${profession.toLowerCase().replace(/\s+/g, '-')}.png`;

export const decks: Deck[] = [
  {
    id: 'finley',
    childName: 'Finley',
    professions: [
      { id: 'finley-dragon-rider', name: 'Dragon Rider', image: imagePath('finley', 'dragon-rider') },
      { id: 'finley-knight', name: 'Knight', image: imagePath('finley', 'knight') },
      { id: 'finley-sorceress', name: 'Sorceress', image: imagePath('finley', 'sorceress') },
      { id: 'finley-elf-archer', name: 'Elf Archer', image: imagePath('finley', 'elf-archer') },
      { id: 'finley-phoenix-keeper', name: 'Phoenix Keeper', image: imagePath('finley', 'phoenix-keeper') },
    ],
  },
  {
    id: 'evie',
    childName: 'Evie',
    professions: [
      { id: 'evie-wizard', name: 'Wizard', image: imagePath('evie', 'wizard') },
      { id: 'evie-queen', name: 'Queen', image: imagePath('evie', 'queen') },
      { id: 'evie-witch', name: 'Witch', image: imagePath('evie', 'witch') },
      { id: 'evie-gryphon-rider', name: 'Gryphon Rider', image: imagePath('evie', 'gryphon-rider') },
      { id: 'evie-unicorn-tamer', name: 'Unicorn Tamer', image: imagePath('evie', 'unicorn-tamer') },
    ],
  },
  {
    id: 'maya',
    childName: 'Maya',
    professions: [
      { id: 'maya-fairy', name: 'Fairy', image: imagePath('maya', 'fairy') },
      { id: 'maya-mermaid', name: 'Mermaid', image: imagePath('maya', 'mermaid') },
      { id: 'maya-pirate-captain', name: 'Pirate Captain', image: imagePath('maya', 'pirate-captain') },
      { id: 'maya-ice-princess', name: 'Ice Princess', image: imagePath('maya', 'ice-princess') },
      { id: 'maya-druid', name: 'Druid', image: imagePath('maya', 'druid') },
    ],
  },
];

export const playerColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

export const defaultPlayerNames = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
