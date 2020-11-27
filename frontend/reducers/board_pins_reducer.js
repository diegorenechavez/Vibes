import {
  RECEIVE_BOARD_PINS,
  REMOVED_BOARD_PIN,
} from "../actions/board_pin_actions";

const BoardPinReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BOARD_PINS:
      return action.boardPins;
    case REMOVED_BOARD_PIN:
      delete newState[action.boardPinId];
      return newState;
    default:
      return oldState;
  }
};

/*
const BoardPinReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BOARD_PINS:
      let receivedPinsPerBoard = {};
      if (action.boardPins) {
        for (const [boardPinId, pin] of Object.entries(action.boardPins)) {
          if (!receivedPinsPerBoard[pin.board_id]) {
            receivedPinsPerBoard[pin.board_id] = {};
          }
          receivedPinsPerBoard[pin.board_id][boardPinId] = pin;
        }
      }

      if (!newState) {
        newState = {};
      }
      for (const [boardId, boardPins] of Object.entries(receivedPinsPerBoard)) {
        newState[boardId] = boardPins;
      }
      return newState;
    case REMOVED_BOARD_PIN:
      //gotta know the board id somehow
      delete newState[action.boardPinId];
      return newState;
    default:
      return oldState;
  }
};
*/

export default BoardPinReducer;
