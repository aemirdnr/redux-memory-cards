import "./Card.sass";
/*https://github.com/samiheikki/javascript-guessing-game/tree/master/static/logos*/
function Card({ name, src, isOpen }) {
  return (
    <div className="col-6 col-sm-5 col-md-3 col-lg-2">
      <div className="mycard">
        <div className="front">?</div>
        <div className="back">
          <img src={src} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default Card;
