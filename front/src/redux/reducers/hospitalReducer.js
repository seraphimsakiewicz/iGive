
import { ALL_HOSPITAL } from "../types/hospitalTypes";


const hospitalReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_HOSPITAL:
      return payload;
    default:
      return state;
  }
}

import { SET_HOSPITAL, DELETE_HOSPITAL } from "../types/userTypes";

const hospitalReducer = (state = null, action) => {
  switch (action.type) {
    case SET_HOSPITAL:
      return action.payload;

    case DELETE_HOSPITAL:
      return null;

    default:
      return state;
  }
};


export default hospitalReducer;
