import React,{useState} from 'react';
import {Link} from 'react-router-dom';
const OwnPinItem = (props) => {


    const [closed, setOpen] = useState(false);

    function openMenu(){
        setOpen(!closed);
    }

    function closeMenu() {
        setOpen(false);
    }
   

    return(
        <div>
        <div className="own-pin-container">
            <Link to={`/pins/${props.pin.id}`}><img className="own-pin-image" src={props.pin.photoUrl} />
                <h3 className="own-pin-title">{props.pin.description}</h3>
            </Link>
            <button onClick={() => openMenu() } className="pin-button-delete" title="Delete Pin" >x</button>
           
        </div>
            {
                closed ? (
                    <div className="confirm-container">
                        <div className="confirmation">
                            <h1 className="confirm-question">Are You Sure You Want To Delete Pin?</h1>
                            <div className="confirm-button-wrapper">
                                <div className="bw">
                                    <button className="cancel-button" onClick={() => closeMenu()}>Cancel</button>
                                </div>
                                <div className="bw2">
                                    <button className="remove-button" onClick={() => props.deletePin(props.pin.id).then(closeMenu())}>Delete Pin</button>
                                </div>
                            </div>
                        </div>
                        <div className="click-background" onClick={() => closeMenu()}></div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default OwnPinItem;