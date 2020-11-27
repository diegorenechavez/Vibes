import * as BoardApiUtil from "../util/board_api_util";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

const received_all_boards = (boards) => {
  return {
    type: RECEIVE_BOARDS,
    boards,
  };
};

const received_board = (board) => {
  return {
    type: RECEIVE_BOARD,
    board,
  };
};

const removedBoard = (boardId) => {
  return {
    type: REMOVE_BOARD,
    boardId,
  };
};

export const fetchAllBoards = (userId) => (dispatch) => {
  return BoardApiUtil.fetchAllBoards(userId).then((result) =>
    dispatch(received_all_boards(result))
  );
};

export const fetchBoard = (boardId) => (dispatch) => {
  return BoardApiUtil.fetchBoard(boardId).then((result) =>
    dispatch(received_board(result))
  );
};

export const createBoard = (board) => (dispatch) => {
  return BoardApiUtil.createBoard(board).then((result) =>
    dispatch(received_board(result))
  );
};

export const updateBoard = (board) => (dispatch) => {
  return BoardApiUtil.updateBoard(board).then((result) =>
    dispatch(received_board(result))
  );
};

export const deleteBoard = (boardId) => (dispatch) => {
  return BoardApiUtil.deleteBoard(boardId).then(() =>
    dispatch(removedBoard(boardId))
  );
};
