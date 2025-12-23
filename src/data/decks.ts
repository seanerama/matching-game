import { Deck } from '../types';

// Placeholder image - will be replaced with actual AI-generated images
const placeholder = (childName: string, profession: string) =>
  `/images/${childName.toLowerCase()}/${childName.toLowerCase()}-${profession.toLowerCase().replace(/\s+/g, '-')}.png`;

export const decks: Deck[] = [
  {
    id: 'finley',
    childName: 'Finley',
    professions: [
      { id: 'finley-doctor', name: 'Doctor', image: placeholder('finley', 'doctor') },
      { id: 'finley-astronaut', name: 'Astronaut', image: placeholder('finley', 'astronaut') },
      { id: 'finley-chef', name: 'Chef', image: placeholder('finley', 'chef') },
      { id: 'finley-firefighter', name: 'Firefighter', image: placeholder('finley', 'firefighter') },
      { id: 'finley-pilot', name: 'Pilot', image: placeholder('finley', 'pilot') },
      { id: 'finley-veterinarian', name: 'Veterinarian', image: placeholder('finley', 'veterinarian') },
      { id: 'finley-scientist', name: 'Scientist', image: placeholder('finley', 'scientist') },
      { id: 'finley-artist', name: 'Artist', image: placeholder('finley', 'artist') },
      { id: 'finley-ballet-dancer', name: 'Ballet Dancer', image: placeholder('finley', 'ballet-dancer') },
      { id: 'finley-police-officer', name: 'Police Officer', image: placeholder('finley', 'police-officer') },
    ],
  },
  {
    id: 'evelyn',
    childName: 'Evelyn',
    professions: [
      { id: 'evelyn-marine-biologist', name: 'Marine Biologist', image: placeholder('evelyn', 'marine-biologist') },
      { id: 'evelyn-archaeologist', name: 'Archaeologist', image: placeholder('evelyn', 'archaeologist') },
      { id: 'evelyn-photographer', name: 'Photographer', image: placeholder('evelyn', 'photographer') },
      { id: 'evelyn-olympic-athlete', name: 'Olympic Athlete', image: placeholder('evelyn', 'olympic-athlete') },
      { id: 'evelyn-race-car-driver', name: 'Race Car Driver', image: placeholder('evelyn', 'race-car-driver') },
      { id: 'evelyn-dragon-rider', name: 'Dragon Rider', image: placeholder('evelyn', 'dragon-rider') },
      { id: 'evelyn-wizard', name: 'Wizard', image: placeholder('evelyn', 'wizard') },
      { id: 'evelyn-mermaid', name: 'Mermaid', image: placeholder('evelyn', 'mermaid') },
      { id: 'evelyn-fairy', name: 'Fairy', image: placeholder('evelyn', 'fairy') },
      { id: 'evelyn-knight', name: 'Knight', image: placeholder('evelyn', 'knight') },
    ],
  },
  {
    id: 'maya',
    childName: 'Maya',
    professions: [
      { id: 'maya-sorceress', name: 'Sorceress', image: placeholder('maya', 'sorceress') },
      { id: 'maya-queen', name: 'Queen', image: placeholder('maya', 'queen') },
      { id: 'maya-unicorn-tamer', name: 'Unicorn Tamer', image: placeholder('maya', 'unicorn-tamer') },
      { id: 'maya-gryphon-rider', name: 'Gryphon Rider', image: placeholder('maya', 'gryphon-rider') },
      { id: 'maya-witch', name: 'Witch', image: placeholder('maya', 'witch') },
      { id: 'maya-pirate-captain', name: 'Pirate Captain', image: placeholder('maya', 'pirate-captain') },
      { id: 'maya-elf-archer', name: 'Elf Archer', image: placeholder('maya', 'elf-archer') },
      { id: 'maya-phoenix-keeper', name: 'Phoenix Keeper', image: placeholder('maya', 'phoenix-keeper') },
      { id: 'maya-ice-princess', name: 'Ice Princess', image: placeholder('maya', 'ice-princess') },
      { id: 'maya-druid', name: 'Druid', image: placeholder('maya', 'druid') },
    ],
  },
];

export const playerColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

export const defaultPlayerNames = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
