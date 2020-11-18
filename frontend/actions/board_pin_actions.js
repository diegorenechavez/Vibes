import * as BoardApiUtil from "../util/board_api_util";
import * as PinsApiUtil from "../util/pin_api_util";
import { fetchPin } from "../util/pin_api_util";

export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";
export const RECEIVE_BOARD_PIN = "RECEIVE_BOARD_PIN";
export const REMOVED_BOARD_PIN = "REMOVED_BOARD_PIN";


export const removedBoardPin = boardPinId => {
  return {
    type: REMOVED_BOARD_PIN,
    boardPinId
  };
};


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

export const deleteBoardPin = (boardPinId) => dispatch => {
  return BoardApiUtil.deleteBoardPin(boardPinId).then(()=> dispatch(removedBoardPin(boardPinId)));
};