import { ADD_EVENT_HOSPITAL } from '../types/eventTypes';

const eventReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EVENT_HOSPITAL:
      return [...state, payload];
    default:
      return state;
  }
};

export default eventReducer;
