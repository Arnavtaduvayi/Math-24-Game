function Controls({ playerCountInput, onPlayerCountChange, onSetPlayers }) {
  return (
    <section className="panel controls">
      <h2>Game Controls</h2>
      <div className="player-setup">
        <label htmlFor="playerCount">Number of Players</label>
        <input
          id="playerCount"
          min="1"
          max="8"
          type="number"
          value={playerCountInput}
          onChange={(event) => onPlayerCountChange(event.target.value)}
        />
        <button type="button" onClick={onSetPlayers}>
          Set Players
        </button>
      </div>
      <div className="control-actions">
        <button type="button" disabled>
          Next Card
        </button>
        <button type="button" disabled>
          Reset Game
        </button>
      </div>
    </section>
  )
}

export default Controls
