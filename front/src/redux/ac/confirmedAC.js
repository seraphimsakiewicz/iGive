import {
  SET_CONFIRMED,
  SUBMIT_CONFIRMED,
  UPDATE_CF_COUNT,
} from '../types/confirmedTypes';

import confirmed from '../data';

export const getConfirmed = () => async (dispatch) => {
  // const response = await axios.get("/confirmed/");

  // if (response.status === 200) {
  //   const confirmedList = response.data;
  dispatch(setConfirmed(confirmed));
  // }
};

export const setConfirmed = (confirmedList) => ({
  type: SET_CONFIRMED,
  payload: confirmedList,
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
