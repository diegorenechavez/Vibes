import React from 'react';

const OwnPinItem = (props) => {
    return(
        <div className="own-pin-container">
            <img className="own-pin-image" src={props.pin.photoUrl} alt=""/>
            <h3 className="own-pin-title">{props.pin.description}</h3>
            <button onClick={() => props.deletePin(props.pin.id)} className="pin-button-delete" >x</button>
            {/* <p className="pin-content">{props.pin.content}</p> */}
           
        </div>
    );
};

export default OwnPinItem;