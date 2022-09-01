import "./Header.sass";

function Header() {
  return (
    <div className="header">
      <span className="header__score">Score: 0</span>
      <button className="header__button">Play Again!</button>
    </div>
  );
}

export default Header;
