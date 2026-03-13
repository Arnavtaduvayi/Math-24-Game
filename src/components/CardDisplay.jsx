function CardDisplay({ card }) {
  return (
    <section className="panel">
      <h2>Current Card</h2>
      <p className="difficulty">Difficulty: {card.difficulty}</p>
      <div className="numbers">
        {card.numbers.map((number, index) => (
          <span className="number-chip" key={`${number}-${index}`}>
            {number}
          </span>
        ))}
      </div>
    </section>
  )
}

export default CardDisplay
