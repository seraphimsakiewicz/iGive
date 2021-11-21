import { combineReducers } from 'redux';
import bloodTypesReducer from './bloodTypesReducer';
import confirmedReducer from './confirmedReducer';
import eventReducer from './eventReducer';
import hospitalReducer from './hospitalReducer';
import listHospitalReducer from './listHospitalReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  listHospital: listHospitalReducer,
  event: eventReducer,
  user: userReducer,
  hospital: hospitalReducer,
  confirmed: confirmedReducer,
  bloodTypes: bloodTypesReducer,
});

export default rootReducer;
