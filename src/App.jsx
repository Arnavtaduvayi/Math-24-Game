import { useState } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import PlayerList from './components/PlayerList';
import PlayerSetup from './components/PlayerSetup';
import Controls from './components/Controls';
import cards from './data/cards';

function App() {
  const [players, setPlayers] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  const currentCard = cardIndex < cards.length ? cards[cardIndex] : null;

  function handleSetPlayers(newPlayers) {
    setPlayers(newPlayers);
    setCardIndex(0);
  }

  function handleAwardPoint(playerId) {
    if (!currentCard) return;

    setPlayers((prev) =>
      prev.map((p) =>
        p.id === playerId ? { ...p, score: p.score + 1 } : p
      )
    );
    setCardIndex((prev) => prev + 1);
  }

  return (
    <div className="app">
      <h1>Math 24</h1>
      <PlayerSetup onSetPlayers={handleSetPlayers} />
      <CardDisplay card={currentCard} />
      <PlayerList players={players} onAwardPoint={handleAwardPoint} />
      <Controls />
    </div>
  );
}

export default App;
