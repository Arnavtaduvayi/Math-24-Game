import { useState } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import PlayerList from './components/PlayerList';
import PlayerSetup from './components/PlayerSetup';
import Controls from './components/Controls';
import cards from './data/cards';

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <div className="app">
      <h1>Math 24</h1>
      <PlayerSetup onSetPlayers={setPlayers} />
      <CardDisplay card={cards[0]} />
      <PlayerList players={players} />
      <Controls />
    </div>
  );
}

export default App;
