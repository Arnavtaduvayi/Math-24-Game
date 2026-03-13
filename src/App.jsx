import { useState } from 'react'
import './App.css'
import CardDisplay from './components/CardDisplay'
import Controls from './components/Controls'
import PlayerList from './components/PlayerList'

function App() {
  const [playerCountInput, setPlayerCountInput] = useState('2')
  const [players, setPlayers] = useState([])

  const previewCard = {
    numbers: [4, 4, 6, 6],
    difficulty: 'Easy',
  }

  const handleSetPlayers = () => {
    const parsedCount = Number.parseInt(playerCountInput, 10)
    const safeCount = Number.isNaN(parsedCount)
      ? 0
      : Math.max(1, Math.min(parsedCount, 8))

    const nextPlayers = Array.from({ length: safeCount }, (_, index) => ({
      id: index + 1,
      name: `Player ${index + 1}`,
      score: 0,
    }))

    setPlayers(nextPlayers)
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Math 24</h1>
        <p>Use four numbers and basic operations to make 24.</p>
      </header>

      <section className="game-grid">
        <CardDisplay card={previewCard} />
        <PlayerList players={players} />
      </section>

      <Controls
        playerCountInput={playerCountInput}
        onPlayerCountChange={setPlayerCountInput}
        onSetPlayers={handleSetPlayers}
      />
    </main>
  )
}

export default App
