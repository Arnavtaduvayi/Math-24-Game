function CardDisplay({ card }) {
  if (!card) {
    return (
      <div className="card-display">
        <p>No card. Set players and start the game.</p>
      </div>
    );
  }

  return (
    <div className="card-display">
      <div className="card-difficulty">{card.difficulty}</div>
      <div className="card-numbers">
        {card.numbers.map((n, i) => (
          <span key={i} className="card-number">
            {n}
          </span>
        ))}
      </div>
      <p className="card-goal">Make 24 using +, −, ×, ÷</p>
    </div>
  );
}

export default CardDisplay;
