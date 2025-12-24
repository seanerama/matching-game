import { Deck } from '../types';

// Placeholder image - will be replaced with actual AI-generated images
const placeholder = (childName: string, profession: string) =>
  `/images/${childName.toLowerCase()}/${childName.toLowerCase()}-${profession.toLowerCase().replace(/\s+/g, '-')}.png`;

export const decks: Deck[] = [
  {
    id: 'finley',
    childName: 'Finley',
    professions: [
      // Real World
      { id: 'finley-doctor', name: 'Doctor', image: placeholder('finley', 'doctor') },
      { id: 'finley-artist', name: 'Artist', image: placeholder('finley', 'artist') },
      { id: 'finley-ballet-dancer', name: 'Ballet Dancer', image: placeholder('finley', 'ballet-dancer') },
      { id: 'finley-photographer', name: 'Photographer', image: placeholder('finley', 'photographer') },
      { id: 'finley-olympic-athlete', name: 'Olympic Athlete', image: placeholder('finley', 'olympic-athlete') },
      // Mythical
      { id: 'finley-dragon-rider', name: 'Dragon Rider', image: placeholder('finley', 'dragon-rider') },
      { id: 'finley-knight', name: 'Knight', image: placeholder('finley', 'knight') },
      { id: 'finley-sorceress', name: 'Sorceress', image: placeholder('finley', 'sorceress') },
      { id: 'finley-elf-archer', name: 'Elf Archer', image: placeholder('finley', 'elf-archer') },
      { id: 'finley-phoenix-keeper', name: 'Phoenix Keeper', image: placeholder('finley', 'phoenix-keeper') },
    ],
  },
  {
    id: 'evie',
    childName: 'Evie',
    professions: [
      // Real World
      { id: 'evie-chef', name: 'Chef', image: placeholder('evie', 'chef') },
      { id: 'evie-veterinarian', name: 'Veterinarian', image: placeholder('evie', 'veterinarian') },
      { id: 'evie-firefighter', name: 'Firefighter', image: placeholder('evie', 'firefighter') },
      { id: 'evie-archaeologist', name: 'Archaeologist', image: placeholder('evie', 'archaeologist') },
      { id: 'evie-pilot', name: 'Pilot', image: placeholder('evie', 'pilot') },
      // Mythical
      { id: 'evie-wizard', name: 'Wizard', image: placeholder('evie', 'wizard') },
      { id: 'evie-queen', name: 'Queen', image: placeholder('evie', 'queen') },
      { id: 'evie-witch', name: 'Witch', image: placeholder('evie', 'witch') },
      { id: 'evie-gryphon-rider', name: 'Gryphon Rider', image: placeholder('evie', 'gryphon-rider') },
      { id: 'evie-unicorn-tamer', name: 'Unicorn Tamer', image: placeholder('evie', 'unicorn-tamer') },
    ],
  },
  {
    id: 'maya',
    childName: 'Maya',
    professions: [
      // Real World
      { id: 'maya-astronaut', name: 'Astronaut', image: placeholder('maya', 'astronaut') },
      { id: 'maya-scientist', name: 'Scientist', image: placeholder('maya', 'scientist') },
      { id: 'maya-police-officer', name: 'Police Officer', image: placeholder('maya', 'police-officer') },
      { id: 'maya-marine-biologist', name: 'Marine Biologist', image: placeholder('maya', 'marine-biologist') },
      { id: 'maya-race-car-driver', name: 'Race Car Driver', image: placeholder('maya', 'race-car-driver') },
      // Mythical
      { id: 'maya-fairy', name: 'Fairy', image: placeholder('maya', 'fairy') },
      { id: 'maya-mermaid', name: 'Mermaid', image: placeholder('maya', 'mermaid') },
      { id: 'maya-pirate-captain', name: 'Pirate Captain', image: placeholder('maya', 'pirate-captain') },
      { id: 'maya-ice-princess', name: 'Ice Princess', image: placeholder('maya', 'ice-princess') },
      { id: 'maya-druid', name: 'Druid', image: placeholder('maya', 'druid') },
    ],
  },
];

export const playerColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

export const defaultPlayerNames = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
