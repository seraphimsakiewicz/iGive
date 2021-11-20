import { combineReducers } from "redux";
import confirmedReducer from "./confirmedReducer";
import eventsReducer from "./eventsReducer";
import hospitalReducer from "./hospitalReducer";
// import listHospitalReducer from "./listHospitalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // listHospital: listHospitalReducer,
  events: eventsReducer,
  user: userReducer,
  hospital: hospitalReducer,
  confirmed:confirmedReducer
});

export default rootReducer;
