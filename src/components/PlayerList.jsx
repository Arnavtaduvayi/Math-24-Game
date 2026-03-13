import './PlayerList.css';

function PlayerList({ players, onAwardPoint }) {
  if (players.length === 0) {
    return null;
  }

  return (
    <div className="player-list">
      {players.map((player) => (
        <div key={player.id} className="player-card">
          <button
            className="player-button"
            onClick={() => onAwardPoint(player.id)}
          >
            {player.name}
          </button>
          <span className="player-score">Score: {player.score}</span>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
