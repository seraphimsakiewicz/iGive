import {
  SET_CONFIRMED,
  COLLECT_DONORS,
  UPDATE_DONOR,
} from "../types/confirmedTypes";

import confirmed from "../data";

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

export const updateDonor = (id, liters) => ({
  type: UPDATE_DONOR,
  payload: { id, liters },
});

export const submitConfirmed = () => async (dispatch, getState) => {
  const confirmedList = getState().confirmedList;

  const newList = confirmedList?.map((confirmedPerson) =>
    confirmedPerson.liters > 0
      ? { ...confirmedPerson, status: true }
      : confirmedPerson
  );
  //pretty much what server will do---------->
  // const response = await axios.post("/confirmed",{});

  // if (response.status === 200) {
  //   const confirmedList = response.data;
  // }
  dispatch({ type: COLLECT_DONORS, payload: newList });
};
