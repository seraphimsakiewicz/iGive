import { combineReducers } from "redux";
import donorReducer from "./donorReducer";
import eventsReducer from "./eventsReducer";
import hospitalReducer from "./hospitalReducer";
import listHospitalReducer from "./listHospitalReducer";

const rootReducer = combineReducers({
  listHospital: listHospitalReducer,
  events: eventsReducer,
  donor: donorReducer,
  hospital: hospitalReducer,

});

export default rootReducer;
