import axios from "axios";
import { DELETE_HOSPITAL, SET_HOSPITAL } from "../types/hospitalTypes";

export const setHospital = (user) => ({
  type: SET_HOSPITAL,
  payload: user,
});

export const deleteHospital = () => ({
  type: DELETE_HOSPITAL,
});

export const checkHospital = () => async (dispatch) => {
  const response = await axios.get('/hospital/check');

  if (response.status === 200) {
    const checkedUser = response.data;
    dispatch(setHospital(checkedUser));
  }
};

export const regHospital = (payload, navigate) => async (dispatch) => {
  console.log('#####', payload);
  const response = await axios.post('/signup/hospital', payload);

  if (response.status === 200) {
    const user = response.data;
    dispatch(setHospital(user));
    navigate('/');
  } else {
    navigate('/register');
  }
};

export const hospitalIn = (payload, navigate) => async (dispatch) => {
  console.log(1233, payload);
  const response = await axios.post('/login/hospital', payload);

  if (response) {
    const hospital = await response.data;
    console.log('####', hospital);
    dispatch(setHospital(hospital));
    navigate('/');
  } else {
    navigate('/login');
  }
};

export const hospitalOut = () => async (dispatch) => {
  const response = await axios.get('/hospital/logout', {});
  if (response.status === 200) {
    dispatch(deleteHospital());
  }
};
