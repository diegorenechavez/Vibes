import React from "react";
import { Link } from "react-router-dom";

const SplashIndexitem = (props) => {
  return (
    <div className="brick2">
        
        <img className="pin2" src={props.pin.photoUrl} alt="" />
      
    </div>
  );
};

export default SplashIndexitem;
