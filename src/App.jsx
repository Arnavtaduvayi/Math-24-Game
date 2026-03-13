import './App.css';
import CardDisplay from './components/CardDisplay';
import PlayerList from './components/PlayerList';
import Controls from './components/Controls';
import cards from './data/cards';

function App() {
  const demoPlayers = [
    { id: 1, name: 'Player 1', score: 0 },
    { id: 2, name: 'Player 2', score: 0 },
  ];

  return (
    <div className="app">
      <h1>Math 24</h1>
      <CardDisplay card={cards[0]} />
      <PlayerList players={demoPlayers} />
      <Controls />
    </div>
  );
}

export default App;
