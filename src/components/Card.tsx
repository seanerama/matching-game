import { Card as CardType } from '../types';
import './Card.css';

interface CardProps {
  card: CardType;
  onClick: () => void;
  disabled: boolean;
}

export function Card({ card, onClick, disabled }: CardProps) {
  const handleClick = () => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      onClick();
    }
  };

  return (
    <div
      className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-back-design">
            <div className="card-pattern"></div>
          </div>
        </div>
        <div className="card-back">
          <img
            src={card.image}
            alt={`${card.childName} as ${card.professionName}`}
            onError={(e) => {
              // Fallback for missing images
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('placeholder');
            }}
          />
          <div className="card-label">
            <span className="child-name">{card.childName}</span>
            <span className="profession-name">{card.professionName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
