import React from "react";
import { Link } from "react-router-dom";


const BoardPin = (props) =>{
    
    return (
        <div>
      <div className="board-feed">
        {props.pins.map((pin) => (
          <Link to={`/pins/${pin.id}`} key={pin.id}>
            <div className="brick" key={pin.id}>
              <img className="pin" src={pin.photoUrl} key={pin.id} />
            </div>
          </Link>
        ))}
        
      </div>
      </div>
    );
};
export default BoardPin;