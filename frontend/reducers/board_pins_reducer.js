import {RECEIVE_BOARD_PINS} from '../actions/board_pin_actions';

const BoardPinReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_BOARD_PINS:
        return action.boardPins;
        default:
            return oldState;
    }
};

export default BoardPinReducer;