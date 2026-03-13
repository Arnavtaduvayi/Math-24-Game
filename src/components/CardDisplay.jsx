import './CardDisplay.css';

function CardDisplay({ card }) {
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
    </div>
  );
}

export default CardDisplay;
