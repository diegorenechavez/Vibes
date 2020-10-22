import {
    RECEIVE_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD
} from '../actions/board_actions';

const BoardsReducer = (oldState={}, action)=>{
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch(action.type){
       case RECEIVE_BOARDS:
           return action.boards;
        case RECEIVE_BOARD:
            newState[action.board.id] = action.board;
            return newState;
        case REMOVE_BOARD:
            delete newState[action.boardId];
            return newState;
        default:
            return oldState;
    }
};

export default BoardsReducer;