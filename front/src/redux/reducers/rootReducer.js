import { combineReducers } from 'redux';
import bloodTypesReducer from './bloodTypesReducer';
import confirmedReducer from './confirmedReducer';
import eventReducer from './eventReducer';
import hospitalMyDonorReducer from './hospitalMyDonorReducer';
import hospitalReducer from './hospitalReducer';
import listHospitalReducer from './listHospitalReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  listHospital: listHospitalReducer,
  event: eventReducer,
  user: userReducer,
  hospital: hospitalReducer,
  confirmedList: confirmedReducer,
  bloodTypes: bloodTypesReducer,
  hospitalMyDonor: hospitalMyDonorReducer,
});

export default rootReducer;
