import {
  SET_CONFIRMED,
  COLLECT_DONORS,
  UPDATE_DONOR,
} from '../types/confirmedTypes';

import axios from "axios";

export const getConfirmed = (id) => async (dispatch) => {
  console.log('getConfirmed')
  const response = await axios.get(`/hospital/events/${id}/users`);

  if (response.status === 200) {
    const confirmedList = await response.data;
    dispatch(setConfirmed(confirmedList));
  }
};

export const setConfirmed = (confirmedList) => ({
  type: SET_CONFIRMED,
  payload: confirmedList,
});

export const updateDonor = (id, bloodQuantity) => ({
  type: UPDATE_DONOR,
  payload: { id, bloodQuantity },
});

export const collectDonors = () => async (dispatch, getState) => {
  //place id in paramter then post to
  const confirmedList = getState().confirmedList;

  //pretty much what server will do---------->
  // const response = await axios.post(`/user/events/${id}`,{confirmedList});

  // );
  const fixedList = confirmedList.map(
    (
      confirmedPerson //back does this
    ) =>
      confirmedPerson.bloodQuantity > 0
        ? { ...confirmedPerson, status: true }
        : confirmedPerson
  );


  // if (response.status === 200) {
  dispatch({ type: COLLECT_DONORS, fixedList });
  // }
};
