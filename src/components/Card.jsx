import { BadgeQuestionMark } from "lucide-react";

export const Card = ({ card, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(card)}>
      {card.isFlipped || card.isMatched ? card.value : <BadgeQuestionMark />}
    </div>
  );
};