import { useState, useCallback } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import PlayerList from './components/PlayerList';
import PlayerSetup from './components/PlayerSetup';
import Controls from './components/Controls';
import cards from './data/cards';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [players, setPlayers] = useState([]);
  const [deck, setDeck] = useState(() => shuffle(cards));
  const [cardIndex, setCardIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [lastScored, setLastScored] = useState(null);

  const currentCard = cardIndex < deck.length ? deck[cardIndex] : null;
  const gameOver = cardIndex >= deck.length && gameStarted;

  const handleSetPlayers = useCallback((newPlayers) => {
    setPlayers(newPlayers);
    setDeck(shuffle(cards));
    setCardIndex(0);
    setGameStarted(true);
    setLastScored(null);
  }, []);

  const handleAwardPoint = useCallback((playerId) => {
    if (!currentCard) return;
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === playerId ? { ...p, score: p.score + 1 } : p
      )
    );
    setLastScored(playerId);
    setCardIndex((prev) => prev + 1);
  }, [currentCard]);

  const handleNextCard = useCallback(() => {
    if (!currentCard) return;
    setCardIndex((prev) => prev + 1);
  }, [currentCard]);

  const handleResetGame = useCallback(() => {
    setPlayers([]);
    setDeck(shuffle(cards));
    setCardIndex(0);
    setGameStarted(false);
    setLastScored(null);
  }, []);

  const handleNewRound = useCallback(() => {
    setPlayers((prev) => prev.map((p) => ({ ...p, score: 0 })));
    setDeck(shuffle(cards));
    setCardIndex(0);
    setLastScored(null);
  }, []);

  return (
    <div className="app">
      <h1>Math 24</h1>
      <p className="subtitle">Make 24 using +, −, ×, ÷</p>

      {!gameStarted && <PlayerSetup onSetPlayers={handleSetPlayers} />}

      {gameStarted && !gameOver && (
        <>
          <p className="card-counter">
            Card {cardIndex + 1} of {deck.length}
          </p>
          <CardDisplay card={currentCard} />
          <PlayerList
            players={players}
            onAwardPoint={handleAwardPoint}
            lastScored={lastScored}
          />
          <Controls
            onNextCard={handleNextCard}
            onResetGame={handleResetGame}
          />
        </>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <div className="final-scores">
            {[...players]
              .sort((a, b) => b.score - a.score)
              .map((p) => (
                <div key={p.id} className="final-score-row">
                  <span className="final-name">{p.name}</span>
                  <span className="final-score">{p.score} pts</span>
                </div>
              ))}
          </div>
          <div className="game-over-actions">
            <button className="control-btn new-round" onClick={handleNewRound}>
              New Round
            </button>
            <button className="control-btn reset" onClick={handleResetGame}>
              Reset Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
