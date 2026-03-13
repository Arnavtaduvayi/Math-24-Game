function PlayerList({ players, onPlayerSolve }) {
  if (!players.length) return null;

  return (
    <div className="player-list">
      {players.map((player) => (
        <button
          key={player.id}
          type="button"
          className="player-btn"
          onClick={() => onPlayerSolve(player.id)}
        >
          {player.name}: {player.score}
        </button>
      ))}
    </div>
  );
}

export default PlayerList;
