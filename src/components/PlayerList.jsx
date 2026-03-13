function PlayerList({ players }) {
  return (
    <section className="panel">
      <h2>Players</h2>
      {players.length === 0 ? (
        <p className="muted">Set players to start the game.</p>
      ) : (
        <div className="player-list">
          {players.map((player) => (
            <button className="player-btn" key={player.id} type="button">
              {player.name}: {player.score}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export default PlayerList
