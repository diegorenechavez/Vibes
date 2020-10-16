import * as PinsApiUtil from "../util/pin_api_util";


export const RECEIVED_ALL_PINS = "RECEIVED_ALL_PINS";
export const RECEIVED_PIN = "RECEIVED_PIN";

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


// thunk action

 export const fetchAllPins = () => dispatch =>{
    return PinsApiUtil.fetchAllPins().then((pins) => (dispatch(receivedAllPins(pins))));
};

export const fetchPin = (pinId) => dispatch => {
    return PinsApiUtil.fetchPin(pinId).then((pin)=>dispatch(receivedPin(pin)));
};