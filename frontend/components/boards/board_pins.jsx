import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BoardPin = (props) => {
  const [closed, setOpen] = useState(false);

  function openConirm() {
    setOpen(!closed);
  }

  function closeConfirm() {
    setOpen(false);
  }
  return (
    <div>
      <div className="board-feed">
        {props.pins.map(([boardPinId, pin]) => (
          <div key={`pin${pin.id}`}>
            <div className="brick">
              <Link to={`/pins/${pin.id}`}>
                <img className="pin" src={pin.photoUrl} />
              </Link>

              <button onClick={() => openConirm()} className="board-pin-button">
                x
              </button>
            </div>
            {closed ? (
              <div className="confirm-container">
                <div className="confirmation">
                  <h1 className="confirm-question">
                    Are You Sure You Want To Remove Pin?
                  </h1>
                  <div className="confirm-button-wrapper">
                    <div className="bw">
                      <button
                        className="cancel-button"
                        onClick={() => closeConfirm()}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="bw2">
                      <button
                        className="remove-button"
                        onClick={() =>
                          props.deleteBoardPin(boardPinId).then(closeConfirm())
                        }
                      >
                        Remove Pin
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="click-background"
                  onClick={() => closeConfirm()}
                ></div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BoardPin;
