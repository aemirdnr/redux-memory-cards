import "./Header.sass";

import { useSelector } from "react-redux";

function Header() {
  const score = useSelector((state) => state.cards.score);
  const isOver = useSelector((state) => state.cards.isOver);

  return (
    <div className="header">
      {isOver ? (
        <button className="header__button">Play Again!</button>
      ) : (
        <span className="header__score">Score: {score}</span>
      )}
    </div>
  );
}

export default Header;
