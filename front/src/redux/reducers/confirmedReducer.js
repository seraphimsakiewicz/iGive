import {
  SET_CONFIRMED,
  COLLECT_DONORS,
  UPDATE_DONOR,
} from "../types/confirmedTypes";

const confirmedReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CONFIRMED:
      return payload;

    case UPDATE_DONOR:
      const updatedId = payload.id;
      return state.map((confirmed) =>
        confirmed.id === updatedId
          ? { ...confirmed, liters: payload.liters }
          : confirmed
      );

    case COLLECT_DONORS:
      return payload;
    default:
      return state;
  }
};

export default confirmedReducer;
