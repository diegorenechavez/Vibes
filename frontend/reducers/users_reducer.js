import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    // debugger
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
