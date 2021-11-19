import { DELETE_HOSPITAL, SET_HOSPITAL } from "../types/hospitalTypes";

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
