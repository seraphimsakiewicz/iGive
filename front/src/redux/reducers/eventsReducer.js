import { ADD_EVENT_HOSPITAL } from "../types/eventTypes";


const eventsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EVENT_HOSPITAL:
      return [
        ...state,
        payload
      ]
    default:
      return state;
  }
}

export default eventsReducer;
