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
