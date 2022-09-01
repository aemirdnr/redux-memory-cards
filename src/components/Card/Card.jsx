import "./Card.sass";
/*https://github.com/samiheikki/javascript-guessing-game/tree/master/static/logos*/
function Card() {
  return (
    <div className="col-6 col-sm-5 col-md-3 col-lg-2">
      <div className="mycard">
        <div className="front">?</div>
        <div className="back">
          <img
            src="https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/babel.png?raw=true"
            alt="Babel"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
