import React, { useState} from 'react';
import {Link} from 'react-router-dom';

const PinIndexitem = (props) =>{

    return (
      <div className="brick">
        <Link className="pin-text" to={`/pins/${props.pin.id}`}>
          <img className="pin" src={props.pin.photoUrl} alt="" />
          {props.pin.description}
        </Link>
          
      </div>
    );
};

export default PinIndexitem;