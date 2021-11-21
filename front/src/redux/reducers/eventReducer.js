import { ADD_EVENT, ALL_HOSPITAL_EVENTS, ALL_USER_EVENTS } from "../types/eventTypes";

const eventReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_HOSPITAL_EVENTS:
      return payload;
    case ALL_USER_EVENTS:
      return payload;
    case ADD_EVENT:
      return [...state, payload];
    default:
      return state;
  }
};

export default eventReducer;
