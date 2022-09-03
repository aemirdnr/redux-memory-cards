import "./Card.sass";

import { cardCheck } from "../../redux/Slice/cardSlice";
import { useDispatch } from "react-redux";

function Card({ itemID, name, src, isOpen, isMatched }) {
  const dispatch = useDispatch();

  const classSelector = () => {
    if (isMatched) {
      return "mycard matched";
    } else if (isOpen) {
      return "mycard opened";
    }

    return "mycard";
  };

  return (
    <div className="col-6 col-sm-5 col-md-3 col-lg-2">
      <div
        className={classSelector()}
        onClick={() => dispatch(cardCheck(itemID))}
      >
        <div className="front">?</div>
        <div className="back">
          <img src={src} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default Card;
