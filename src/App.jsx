import { useState, useEffect } from "react";
import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { cardData } from "./data/data";


function App() {

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const totalPairs = cardData.length / 2;

  const startGame = () => {

    const shuffledCards = cardData
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        value: card,
        isFlipped: false,
        isMatched: false
      }));

    setCards(shuffledCards);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setGameWon(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  const handleClick = (card) => {

    if (card.isFlipped || card.isMatched || flippedCards.length === 2) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );

    setCards(updatedCards);

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {

      setMoves((m) => m + 1);

      const [first, second] = newFlipped;

      if (first.value === second.value) {

        setTimeout(() => {

          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isMatched: true }
                : c
            )
          );

          setScore((prev) => {
            const newScore = prev + 1;

            if (newScore === totalPairs) {
              setGameWon(true);
            }

            return newScore;
          });

          setFlippedCards([]);

        }, 300);

      } else {

        setTimeout(() => {

          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c
            )
          );

          setFlippedCards([]);

        }, 1000);
      }
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white flex-row items-center justify-center">

      <GameHeader
        score={score}
        moves={moves}
        reset={startGame}
      />

      <div className="card-grid">

        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleClick={handleClick}
          />
        ))}

      </div>

      {gameWon && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>🎉 Congratulations!</h2>
            <p>You completed the game!</p>
            <p>Total Moves: {moves}</p>

            <button onClick={startGame}>
              Play Again
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;