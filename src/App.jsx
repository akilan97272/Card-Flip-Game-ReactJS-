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
    <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center justify-center p-4">
          
          <GameHeader score={score} moves={moves} reset={startGame} />
    
          <div className="grid grid-cols-4 gap-4 p-4 bg-slate-800/30 rounded-3xl border border-slate-700/50 shadow-2xl">
            {cards.map((card) => (
              <Card key={card.id} card={card} handleClick={handleClick} />
            ))}
          </div>
    
          {gameWon && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
              <div className="bg-slate-800 p-10 rounded-3xl border border-blue-500/30 text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
                <h2 className="text-5xl mb-2">🎉</h2>
                <h2 className="text-3xl font-bold mb-2">Victory!</h2>
                <p className="text-slate-400 mb-6">You cleared the board in <span className="text-white font-bold">{moves}</span> moves.</p>
    
                <button 
                  onClick={startGame}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-bold transition-all transform hover:scale-105"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      );
}

export default App;