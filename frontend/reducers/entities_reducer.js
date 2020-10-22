import { combineReducers } from "redux";
import usersReducer from "./users_reducer.js";
import PinsReducer from "./pins_reducer";
import BoardsReducer from "./boards_reducers";
import BoardPinReducer from "./board_pins_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: PinsReducer,
  boards: BoardsReducer,
  boardPins: BoardPinReducer
});

export default entitiesReducer;
