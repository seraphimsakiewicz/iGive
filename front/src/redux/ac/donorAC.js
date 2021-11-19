import { SET_DONOR, DELETE_DONOR } from '../types/userTypes';
import axios from 'axios';

export const setDonor = (user) => ({
  type: SET_DONOR,
  payload: user,
});

export const deleteDonor = () => ({
  type: DELETE_DONOR,
});

export const checkDonor = () => async (dispatch) => {
  const response = await axios.get('/donor/check');

  if (response.status === 200) {
    const checkedUser = response.data;
    dispatch(setDonor(checkedUser));
  }
};

export const regDonor = (payload, navigate) => async (dispatch) => {
  const response = await axios.post('/donor/reg', payload);

  if (response.status === 200) {
    const user = response.data;
    dispatch(setDonor(user));
    navigate('/');
  } else {
    navigate('/register');
  }
};

export const donorIn = (payload, navigate) => async (dispatch) => {
  const response = await axios.post('/donor/login', payload);

  if (response.status === 200) {
    const user = response.status;
    dispatch(setDonor(user));
    navigate('/');
  } else {
    navigate('/login');
  }
};

export const donorOut = () => async (dispatch) => {
  const response = await axios.get('/donor/logout', {});
  if (response.status === 200) {
    dispatch(deleteDonor());
  }
};
