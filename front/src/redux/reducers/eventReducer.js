import { ADD_EVENT } from '../types/eventTypes';

const eventReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EVENT:
      return [...state, payload];
    default:
      return state;
  }
};

export default eventReducer;
