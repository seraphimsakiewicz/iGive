import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";
import hospitalsReducer from "./hospitalsReducer";
import donorReducer from "./donorReducer";
import hospitalReducer from "./hospitalReducer";

const rootReducer = combineReducers({
  hospitals: hospitalsReducer,
  events: eventsReducer,
  donor: donorReducer,
  hospital: hospitalReducer,

});

export default rootReducer;
