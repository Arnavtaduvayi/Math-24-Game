import { useState } from 'react';
import PlayerList from './components/PlayerList';
import CardDisplay from './components/CardDisplay';
import Controls from './components/Controls';
import { CARDS } from './data/cards';
import './App.css';

function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  const currentCard = CARDS.length > 0 ? CARDS[cardIndex] : null;

  const handleSetPlayers = () => {
    setPlayers(
      Array.from({ length: playerCount }, (_, i) => ({
        id: i + 1,
        name: `Player ${i + 1}`,
        score: 0,
      }))
    );
    setCardIndex(0);
  };

  const handlePlayerSolve = (playerId) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, score: p.score + 1 } : p))
    );
    setCardIndex((i) => i + 1);
  };

  const handleNextCard = () => {
    setCardIndex((i) => i + 1);
  };

  const handleResetGame = () => {
    setPlayers([]);
    setCardIndex(0);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Math 24</h1>
        <p>Use +, −, ×, ÷ to make 24 from the four numbers.</p>
      </header>

      <Controls
        playerCount={playerCount}
        setPlayerCount={setPlayerCount}
        onSetPlayers={handleSetPlayers}
        onNextCard={handleNextCard}
        onResetGame={handleResetGame}
      />

      <main className="app-main">
        <CardDisplay card={currentCard} />
        <PlayerList players={players} onPlayerSolve={handlePlayerSolve} />
      </main>
    </div>
  );
}

export default App;
