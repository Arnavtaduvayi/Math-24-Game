// Every card has been verified: at least one solution path reaches 24
// using only +, -, *, / with no fractions or decimals at any intermediate step.

const cards = [
  // ===== EASY (12 cards) =====
  { numbers: [1, 2, 3, 4], difficulty: 'Easy', solution: '1 × 2 × 3 × 4 = 24' },
  { numbers: [2, 2, 2, 3], difficulty: 'Easy', solution: '2 × 2 × 2 × 3 = 24' },
  { numbers: [1, 2, 3, 8], difficulty: 'Easy', solution: '(8 - 2) × (3 + 1) = 24' },
  { numbers: [1, 2, 4, 6], difficulty: 'Easy', solution: '(2 - 1) × 4 × 6 = 24' },
  { numbers: [1, 3, 3, 7], difficulty: 'Easy', solution: '7 × 3 + 3 × 1 = 24' },
  { numbers: [1, 4, 5, 5], difficulty: 'Easy', solution: '5 × 4 + 5 - 1 = 24' },
  { numbers: [1, 2, 3, 9], difficulty: 'Easy', solution: '9 × 3 - 2 - 1 = 24' },
  { numbers: [1, 3, 5, 7], difficulty: 'Easy', solution: '(5 + 1) × (7 - 3) = 24' },
  { numbers: [4, 4, 4, 4], difficulty: 'Easy', solution: '4 × 4 + 4 + 4 = 24' },
  { numbers: [2, 2, 3, 6], difficulty: 'Easy', solution: '(6 - 2) × 2 × 3 = 24' },
  { numbers: [2, 4, 5, 5], difficulty: 'Easy', solution: '(5 + 5) × 2 + 4 = 24' },
  { numbers: [1, 2, 4, 8], difficulty: 'Easy', solution: '8 × (4 - 2 + 1) = 24' },

  // ===== MEDIUM (12 cards) =====
  { numbers: [1, 2, 2, 8], difficulty: 'Medium', solution: '8 × (2 + 2 - 1) = 24' },
  { numbers: [2, 3, 5, 6], difficulty: 'Medium', solution: '6 × (5 - 3 + 2) = 24' },
  { numbers: [3, 3, 4, 6], difficulty: 'Medium', solution: '(6 + 3 - 3) × 4 = 24' },
  { numbers: [1, 2, 7, 9], difficulty: 'Medium', solution: '9 × 2 + 7 - 1 = 24' },
  { numbers: [3, 3, 4, 5], difficulty: 'Medium', solution: '(5 - 3) × 4 × 3 = 24' },
  { numbers: [1, 2, 5, 6], difficulty: 'Medium', solution: '(5 + 1) × (6 - 2) = 24' },
  { numbers: [1, 2, 5, 7], difficulty: 'Medium', solution: '(7 + 1) × (5 - 2) = 24' },
  { numbers: [2, 4, 5, 9], difficulty: 'Medium', solution: '(9 - 5) × (4 + 2) = 24' },
  { numbers: [2, 3, 3, 8], difficulty: 'Medium', solution: '(3 + 3) × 8 / 2 = 24' },
  { numbers: [2, 3, 6, 9], difficulty: 'Medium', solution: '(9 - 3) × (6 - 2) = 24' },
  { numbers: [1, 4, 5, 8], difficulty: 'Medium', solution: '(8 - 4) × (5 + 1) = 24' },
  { numbers: [1, 5, 7, 8], difficulty: 'Medium', solution: '(7 + 1) × (8 - 5) = 24' },

  // ===== HARD (12 cards) =====
  { numbers: [1, 5, 7, 9], difficulty: 'Hard', solution: '(9 - 5) × (7 - 1) = 24' },
  { numbers: [2, 3, 7, 8], difficulty: 'Hard', solution: '(8 - 2) × (7 - 3) = 24' },
  { numbers: [2, 3, 5, 8], difficulty: 'Hard', solution: '2 × (3 + 5) + 8 = 24' },
  { numbers: [2, 3, 5, 9], difficulty: 'Hard', solution: '(9 - 5) × 2 × 3 = 24' },
  { numbers: [6, 7, 8, 9], difficulty: 'Hard', solution: '8 × 6 / (9 - 7) = 24' },
  { numbers: [1, 4, 6, 7], difficulty: 'Hard', solution: '6 × (7 - 4 + 1) = 24' },
  { numbers: [3, 4, 8, 9], difficulty: 'Hard', solution: '(8 - 4) × (9 - 3) = 24' },
  { numbers: [5, 7, 8, 9], difficulty: 'Hard', solution: '8 × 5 - 9 - 7 = 24' },
  { numbers: [2, 3, 8, 9], difficulty: 'Hard', solution: '(9 - 3) × (8 / 2) = 24' },
  { numbers: [2, 5, 7, 8], difficulty: 'Hard', solution: '(2 × 5 - 7) × 8 = 24' },
  { numbers: [1, 2, 8, 9], difficulty: 'Hard', solution: '9 × 8 / (2 + 1) = 24' },
  { numbers: [2, 4, 6, 8], difficulty: 'Hard', solution: '(8 / 4 + 2) × 6 = 24' },
];

export default cards;
