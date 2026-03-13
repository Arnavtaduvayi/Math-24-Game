# Math 24 Game

A clean, minimal Math 24 card game built with React + Vite. Players compete to solve cards by making 24 from four numbers using basic arithmetic.

## How to Play

1. Enter the number of players and click **Start Game**
2. A card with 4 numbers is shown — use `+`, `-`, `×`, `÷` to make 24
3. The first player to solve it clicks their name button to score a point
4. The game advances to the next card automatically
5. Use **Next Card** to skip, or **Reveal Solution** to peek
6. When all cards are played, final scores are shown

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How Scoring Works

- Clicking a player's button awards them **1 point** for the current card
- The game immediately moves to the next card after scoring
- Each card can only be awarded once (no double-scoring)
- Skipping a card with "Next Card" awards no points
- At game over, players are ranked by total score

## Card Deck

The deck contains **36 cards** across three difficulty levels:

| Difficulty | Count | Description |
|------------|-------|-------------|
| Easy       | 12    | Straightforward solutions, often simple multiplication |
| Medium     | 12    | Requires a couple of creative steps |
| Hard       | 12    | Non-obvious combinations, sometimes involving division |

### Card Format

Each card is stored as a JavaScript object:

```js
{
  numbers: [1, 2, 3, 4],    // the four numbers on the card
  difficulty: 'Easy',        // Easy, Medium, or Hard
  solution: '1 × 2 × 3 × 4 = 24'  // one valid solution
}
```

### Integer-Only Solutions

**Every card in this deck has been verified to reach 24 without requiring fractions or decimals at any intermediate step.** For example, a solution like `8 / 3` would produce `2.666...` and is not allowed. All division steps produce whole numbers.

## Tech Stack

- **React** with hooks (`useState`, `useCallback`, `useEffect`)
- **Vite** for fast development and builds
- **Plain CSS** for styling (no UI libraries)
- **No backend** — everything runs in the browser

## Project Structure

```
src/
├── App.jsx                  # Main app with game state
├── App.css
├── components/
│   ├── CardDisplay.jsx      # Shows current card and reveal solution
│   ├── CardDisplay.css
│   ├── Controls.jsx         # Next Card and Reset Game buttons
│   ├── Controls.css
│   ├── PlayerList.jsx       # Dynamic player buttons with scores
│   ├── PlayerList.css
│   ├── PlayerSetup.jsx      # Player count input
│   └── PlayerSetup.css
├── data/
│   └── cards.js             # 36 validated Math 24 cards
├── index.css
└── main.jsx
```
