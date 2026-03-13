import { useState } from 'react';
import './PlayerSetup.css';

function PlayerSetup({ onSetPlayers }) {
  const [count, setCount] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();
    const num = Math.max(1, Math.min(10, count));
    const players = Array.from({ length: num }, (_, i) => ({
      id: i + 1,
      name: `Player ${i + 1}`,
      score: 0,
    }));
    onSetPlayers(players);
  }

  return (
    <form className="player-setup" onSubmit={handleSubmit}>
      <div className="setup-row">
        <label htmlFor="player-count">Players:</label>
        <input
          id="player-count"
          type="number"
          min="1"
          max="10"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button type="submit">Start Game</button>
      </div>
    </form>
  );
}

export default PlayerSetup;
