import { useState, useEffect } from 'react';
import './CardDisplay.css';

// Renders the four numbers of the current card, its difficulty, and an optional revealable solution.
function CardDisplay({ card }) {
  const [showSolution, setShowSolution] = useState(false);

  // Re-hide the solution whenever a new card is shown.
  useEffect(() => {
    setShowSolution(false);
  }, [card]);

  if (!card) {
    return <div className="card-display empty">No card to display</div>;
  }

  return (
    <div className="card-display">
      <div className="card-numbers">
        {card.numbers.map((num, i) => (
          <span key={i} className="card-number">{num}</span>
        ))}
      </div>
      <div className={`card-difficulty ${card.difficulty.toLowerCase()}`}>
        {card.difficulty}
      </div>
      {card.solution && (
        <div className="solution-section">
          {showSolution ? (
            <p className="solution-text">{card.solution}</p>
          ) : (
            <button
              className="reveal-btn"
              onClick={() => setShowSolution(true)}
            >
              Reveal Solution
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CardDisplay;
