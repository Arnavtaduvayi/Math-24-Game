function Controls({
  playerCount,
  setPlayerCount,
  onSetPlayers,
  onNextCard,
  onResetGame,
}) {
  return (
    <div className="controls">
      <div className="controls-row set-players">
        <label htmlFor="player-count">Number of players</label>
        <input
          id="player-count"
          type="number"
          min={1}
          max={10}
          value={playerCount}
          onChange={(e) => setPlayerCount(Number(e.target.value) || 1)}
        />
        <button type="button" onClick={onSetPlayers}>
          Set Players
        </button>
      </div>
      <div className="controls-row game-actions">
        <button type="button" onClick={onNextCard}>
          Next Card
        </button>
        <button type="button" onClick={onResetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Controls;
