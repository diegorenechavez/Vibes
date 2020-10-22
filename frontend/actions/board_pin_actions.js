import * as BoardApiUtil from "../util/board_api_util";
import * as PinsApiUtil from "../util/pin_api_util";
import { fetchPin } from "../util/pin_api_util";

export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";
export const RECEIVE_BOARD_PIN = "RECEIVE_BOARD_PIN";


export const receivedBoardPins = boardPins =>{
    return {
        type: RECEIVE_BOARD_PINS,
        boardPins

    };
};

export const receivedBoardPin = (boardPin) => {
  return {
    type: RECEIVE_BOARD_PIN,
    boardPin,
  };
};

// 

export const fetchBoardPins = () => dispatch =>{
    return BoardApiUtil.fetchBoardPins().then((result) =>dispatch(receivedBoardPins(result)));
};

export const saveToBoard = (boardPin) => (dispatch) => {
  return PinsApiUtil.saveToBoard(boardPin).then((result) =>
    dispatch(receivedBoardPin(result))
  );
};

// receive board_pin