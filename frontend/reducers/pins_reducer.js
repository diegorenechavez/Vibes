import {RECEIVED_ALL_PINS, RECEIVED_PIN, RECEIVED_USERS_PINS, REMOVED_PIN} from '../actions/pin_actions';


const PinsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    
    switch(action.type){
        case RECEIVED_ALL_PINS: 
            return Object.assign({},action.pins);
        case RECEIVED_PIN: 
            nextState[action.pin.id] = action.pin;
            return nextState;
        case RECEIVED_USERS_PINS:
            return Object.assign({}, action.pins);
        case REMOVED_PIN:
            delete nextState[action.pinId];
            return nextState;
        default:
            return oldState;

    }
};

export default PinsReducer;