import { BadgeQuestionMark } from "lucide-react";

export const Card = ({ card, handleClick }) => {
  const isRevealed = card.isFlipped || card.isMatched;

  return (
    <div 
      className="group h-24 w-24 [perspective:1000px] cursor-pointer"
      onClick={() => handleClick(card)}
    >
      <div 
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isRevealed ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side (Hidden/Back of card) */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-700 flex items-center justify-center [backface-visibility:hidden] border-2 border-slate-600 group-hover:border-blue-400 transition-colors">
          <BadgeQuestionMark className="text-slate-400 w-8 h-8" />
        </div>

        {/* Back Side (The Value/Revealed) */}
        <div className={`absolute inset-0 h-full w-full rounded-xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] border-2 ${
          card.isMatched ? "bg-emerald-500 border-emerald-400" : "bg-blue-600 border-blue-400"
        }`}>
          <span className="text-2xl font-bold text-white">{card.value}</span>
        </div>
      </div>
    </div>
  );
};