import {
  SET_CONFIRMED,
  SUBMIT_CONFIRMED,
  UPDATE_CF_COUNT,
  UPDATE_CF_STATUS,
} from "../types/confirmedTypes";

export const getConfirmed = () => async (dispatch) => {
  // const response = await axios.get("/confirmed/");

  // if (response.status === 200) {
  //   const confirmedList = response.data;
  dispatch(setConfirmed(confirmedList));
  // }
};

export const setConfirmed = (confirmedList) => ({
  type: SET_CONFIRMED,
  payload: confirmedList,
});

export const editConfirmStatus = (id) => ({
  type: UPDATE_CF_STATUS,
  payload: id,
});

export const editConfirmCount = (id, liters) => ({
  type: UPDATE_CF_COUNT,
  payload: { id, liters },
});

export const submitConfirmed = () => async (dispatch) => {
  // const response = await axios.post("/confirmed",{});

  // if (response.status === 200) {
  //   const confirmedList = response.data;
  // }
  dispatch({ type: SUBMIT_CONFIRMED });
};
