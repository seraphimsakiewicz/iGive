import { ALL_HOSPITAL } from "../types/hospitalTypes";

const listHospitalReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_HOSPITAL:
      return payload;
    default:
      return state;
  }
};


export default listHospitalReducer;