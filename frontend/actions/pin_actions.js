import * as PinsApiUtil from "../util/pin_api_util";


export const RECEIVED_ALL_PINS = "RECEIVED_ALL_PINS";
export const RECEIVED_PIN = "RECEIVED_PIN";
export const REMOVED_PIN = "REMOVED_PIN";
export const RECEIVED_USERS_PINS = "RECEIVED_USERS_PINS";

const receivedAllPins = (pins) =>{
    return {
        type: RECEIVED_ALL_PINS,
        pins
    };
};

const receivedPin = (pin) => {
    return{
        type: RECEIVED_PIN,
        pin
    };

};

const removedPin = (pinId) => {
    return{
        type: REMOVED_PIN,
        pinId
    };
};

const receivedUsersPins = (pins) =>{
    return {
        type: RECEIVED_USERS_PINS,
        pins
    };
};


// thunk action

 export const fetchAllPins = () => dispatch =>{
    return PinsApiUtil.fetchAllPins().then((pins) => (dispatch(receivedAllPins(pins))));
};
export const fetchUsersPins = (userId) => dispatch => {
    return PinsApiUtil.fetchUsersPins(userId).then((result) => (dispatch(receivedUsersPins(result))));
};

export const fetchPin = (pinId) => dispatch => {
    return PinsApiUtil.fetchPin(pinId).then((pin)=>dispatch(receivedPin(pin)));
};

export const createPin = (userId, pin) => dispatch =>{
    return PinsApiUtil.createPin(userId, pin).then((pin) => dispatch(receivedPin(pin)));
};

export const deletePin = (pinId) => dispatch => {
    return PinsApiUtil.deletePin(pinId).then(() => dispatch(removedPin(pinId)));
};


