import './PlayerList.css';

function PlayerList({ players, onAwardPoint, lastScored }) {
  if (players.length === 0) {
    return null;
  }

  return (
    <div className="player-list">
      {players.map((player) => (
        <div
          key={player.id}
          className={`player-card ${lastScored === player.id ? 'just-scored' : ''}`}
        >
          <button
            className="player-button"
            onClick={() => onAwardPoint(player.id)}
          >
            {player.name}
          </button>
          <span className="player-score">{player.score} pts</span>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
