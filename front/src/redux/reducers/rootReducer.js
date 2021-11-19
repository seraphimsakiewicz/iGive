import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import hospitalReducer from "./hospitalReducer";
import listHospitalReducer from "./listHospitalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  listHospital: listHospitalReducer,
  events: eventsReducer,
  user: userReducer,
  hospital: hospitalReducer,

});

export default rootReducer;
