export const GameHeader = ({ score, moves, reset }) => {
  return (
    <div className="flex-column">
      <h1>Memory Card Game</h1>

      <div className="flex flex-row justify-between">
        <span className="">Score: {score}</span>
        <span>Moves: {moves}</span>
      </div>

      <button onClick={reset}>Reset Game</button>
    </div>
  );
};