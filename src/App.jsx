import './App.css'
import CardDisplay from './components/CardDisplay'
import Controls from './components/Controls'
import PlayerList from './components/PlayerList'

function App() {
  const previewCard = {
    numbers: [4, 4, 6, 6],
    difficulty: 'Easy',
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Math 24</h1>
        <p>Use four numbers and basic operations to make 24.</p>
      </header>

      <section className="game-grid">
        <CardDisplay card={previewCard} />
        <PlayerList players={[]} />
      </section>

      <Controls />
    </main>
  )
}

export default App
