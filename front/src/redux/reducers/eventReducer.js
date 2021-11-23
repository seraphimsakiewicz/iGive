import { ADD_EVENT, SET_EVENTS } from '../types/eventTypes';

const eventReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_EVENTS:
      return payload;
    case ADD_EVENT:
      return [...state, payload];
    default:
      return state;
  }
};

export default eventReducer;
