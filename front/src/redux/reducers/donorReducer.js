import { SET_DONOR, DELETE_DONOR } from '../types/userTypes';

const donorReducer = (state = null, action) => {
  switch (action.type) {
    case SET_DONOR:
      return action.payload;

    case DELETE_DONOR:
      return null;

    default:
      return state;
  }
};

export default donorReducer;
