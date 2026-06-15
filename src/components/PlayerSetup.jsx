import { useState } from 'react';
import './PlayerSetup.css';

// Pre-game form for choosing how many players will compete.
function PlayerSetup({ onSetPlayers }) {
  const [count, setCount] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();
    // Clamp to a sensible 1–10 range in case the input is out of bounds.
    const num = Math.max(1, Math.min(10, count));
    // Build default players named "Player 1", "Player 2", ... each starting at zero points.
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
