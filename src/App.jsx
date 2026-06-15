import { useState, useCallback } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import PlayerList from './components/PlayerList';
import PlayerSetup from './components/PlayerSetup';
import Controls from './components/Controls';
import cards from './data/cards';

// Fisher-Yates shuffle: returns a new randomized copy without mutating the input.
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Root component: owns all game state and orchestrates the setup, play, and game-over screens.
function App() {
  const [players, setPlayers] = useState([]);
  // Shuffle the cards once on mount so the deck order is randomized for the session.
  const [deck, setDeck] = useState(() => shuffle(cards));
  const [cardIndex, setCardIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  // Tracks the player who scored the most recent point, used to highlight their card.
  const [lastScored, setLastScored] = useState(null);

  // The card currently in play, or null once the deck is exhausted.
  const currentCard = cardIndex < deck.length ? deck[cardIndex] : null;
  // The game ends when we've advanced past the last card of a started game.
  const gameOver = cardIndex >= deck.length && gameStarted;

  // Begin a new game with the chosen players and a freshly shuffled deck.
  const handleSetPlayers = useCallback((newPlayers) => {
    setPlayers(newPlayers);
    setDeck(shuffle(cards));
    setCardIndex(0);
    setGameStarted(true);
    setLastScored(null);
  }, []);

  // Give a point to the player who solved the card, then advance to the next card.
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

  // Skip the current card without awarding any points.
  const handleNextCard = useCallback(() => {
    if (!currentCard) return;
    setCardIndex((prev) => prev + 1);
  }, [currentCard]);

  // Return all the way to the player-setup screen, clearing players and scores.
  const handleResetGame = useCallback(() => {
    setPlayers([]);
    setDeck(shuffle(cards));
    setCardIndex(0);
    setGameStarted(false);
    setLastScored(null);
  }, []);

  // Play again with the same players: reset their scores and reshuffle the deck.
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
