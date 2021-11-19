import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import hospitalsReducer from './hospitalsReducer';
import donorReducer from './donorReducer';

const rootReducer = combineReducers({
  hospitals: hospitalsReducer,
  events: eventsReducer,
  donor: donorReducer,
});

export default rootReducer;
