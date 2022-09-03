import "./Modal.sass";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { start } from "../../redux/Slice/cardSlice";

function Modal() {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(true);
  const score = useSelector((state) => state.score);
  const isOver = useSelector((state) => state.isOver);

  const handleStart = () => {
    setVisible(false);
    dispatch(start());
  };

  return (
    <div className={isVisible ? "modal d-block" : "modal fade"}>
      <div className="modal-dialog modal-dialog-centered">
        {!isOver ? (
          <div className="modal-content">
            <div className="modal-body text-center">
              <p className="txt-modal">Welcome 👋</p>
              <span>Press the button to start.</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-modal"
                data-bs-dismiss="modal"
                onClick={handleStart}
              >
                Start the game
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-content">
            <div className="modal-body text-center">
              <p className="txt-modal">Your score is {score}.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-modal"
                data-bs-dismiss="modal"
              >
                Play again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
