import {
  SET_CONFIRMED,
  SUBMIT_CONFIRMED,
  UPDATE_CF_COUNT,
  UPDATE_CF_STATUS,
} from "../types/confirmedTypes";

const confirmedReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CONFIRMED:
      return payload;

    case UPDATE_CF_STATUS:
      const confirmedId = action.payload;
      return state.map((confirmed) =>
        confirmed.id === confirmedId
          ? { ...confirmed, status: !confirmed.status }
          : confirmed
      );

    case UPDATE_CF_COUNT:
      const updatedId = action.payload.id;
      return state.map((confirmed) =>
        confirmed.id === updatedId
          ? { ...confirmed, text: action.payload.liters }
          : confirmed
      );

    case SUBMIT_CONFIRMED:
      return [];
    default:
      return state;
  }
};

export default confirmedReducer;
