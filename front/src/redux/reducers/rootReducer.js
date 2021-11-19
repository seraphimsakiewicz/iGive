import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import hospitalReducer from "./hospitalReducer";


const rootReducer = combineReducers({
  hospitals: hospitalReducer,
  events: eventReducer,
});

export default rootReducer;
