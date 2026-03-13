import './Controls.css';

function Controls({ onNextCard, onResetGame }) {
  return (
    <div className="controls">
      <button className="control-btn next" onClick={onNextCard}>
        Next Card
      </button>
      <button className="control-btn reset" onClick={onResetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Controls;
