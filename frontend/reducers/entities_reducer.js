import { combineReducers } from "redux";
import usersReducer from "./users_reducer.js";
import PinsReducer from "./pins_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: PinsReducer
});

export default entitiesReducer;
