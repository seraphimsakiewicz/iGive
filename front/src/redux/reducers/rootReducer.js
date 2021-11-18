import { combineReducers } from "redux";
import donorReducer from "./donorReducer";
import hospitalReducer from "./hospitalReducer";

const rootReducer = combineReducers({
  donor: donorReducer,
  hospital: hospitalReducer,
});

export default rootReducer;
