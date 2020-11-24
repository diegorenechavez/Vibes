import React from 'react';
import {Link} from 'react-router-dom';
const OwnPinItem = (props) => {
    return(
        <div className="own-pin-container">
            <Link to={`/pins/${props.pin.id}`}><img className="own-pin-image" src={props.pin.photoUrl} />
                <h3 className="own-pin-title">{props.pin.description}</h3>
            </Link>
            <button onClick={() => props.deletePin(props.pin.id)} className="pin-button-delete" title="Delete Pin" >x</button>
            {/* <p className="pin-content">{props.pin.content}</p> */}
           
        </div>
    );
};

export default OwnPinItem;