import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";
import listHospitalReducer from "./listHospitalReducer";
import donorReducer from "./donorReducer";
import hospitalReducer from "./hospitalReducer";

const rootReducer = combineReducers({
  hospitals: listHospitalReducer,
  events: eventsReducer,
  donor: donorReducer,
  hospital: hospitalReducer,
});

export default rootReducer;
