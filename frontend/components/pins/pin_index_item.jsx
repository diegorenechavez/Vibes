import React from 'react';

const PinIndexitem = (props) =>{
    return (
    <>
    <img src={props.pin.photoUrl} alt=""/>
    <div>{props.pin.description}</div>
    </>
    );
};

export default PinIndexitem;