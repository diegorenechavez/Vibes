import React from 'react';

const OwnPinItem = (props) => {
    return(
        <div className="own-pin-container">
            <img className="own-pin-image" src={props.pin.photoUrl} alt=""/>
            <h3 className="own-pin-title">{props.pin.description}</h3>
            {/* <p className="pin-content">{props.pin.content}</p> */}
           
        </div>
    );
};

export default OwnPinItem;