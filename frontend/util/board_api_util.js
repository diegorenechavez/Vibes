export const fetchAllBoards = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/boards`,
    method: `GET`,
  });
};

export const fetchBoard = (boardId) => {
  return $.ajax({
    url: `/api/boards/${boardId}`,
    method: "GET",
  });
};

export const createBoard = (board) => {
  return $.ajax({
    url: `/api/boards`,
    method: "POST",
    data: {
      board,
    },
  });
};

export const updateBoard = (board) => {
  console.log("issuing board update req", {
    url: `/api/boards/${board.id}`,
    method: "PATCH",
    data: {
      board,
    },
  });
  return $.ajax({
    url: `/api/boards/${board.id}`,
    method: "PATCH",
    data: {
      board,
    },
  });
};

export const deleteBoard = (boardId) => {
  return $.ajax({
    url: `/api/boards/${boardId}`,
    method: "DELETE",
  });
};

export const fetchBoardPins = (boardId) => {
  return $.ajax({
    url: `/api/boards/${boardId}/board_pins`,
    method: `GET`,
  });
};

export const deleteBoardPin = (boardPinId) => {
  return $.ajax({
    url: `/api/board_pins/${boardPinId}`,
    method: "DELETE",
  });
};
