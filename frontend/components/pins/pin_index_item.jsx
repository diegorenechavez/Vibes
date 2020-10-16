import React from 'react';

const PinIndexitem = (props) =>{
    return (
    <div className="brick">
    <img className="pin"src={props.pin.photoUrl} alt=""/>
    {props.pin.description}
    </div>
    );
};

export default PinIndexitem;