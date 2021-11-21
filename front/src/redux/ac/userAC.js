import { SET_USER, DELETE_USER } from '../types/userTypes';
import axios from 'axios';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

// export const checkUser = () => async (dispatch) => {
//   const response = await axios.get("/user/check");

//   if (response.status === 200) {
//     const checkedUser = response.data;
//     dispatch(setUser(checkedUser));
//   }
// };

export const regUser = (payload) => async (dispatch) => {
  console.log('@@@@@', payload);
  const response = await axios.post('/signup/user', payload);

  if (response.status === 200) {
    const user = response.data;
    dispatch(setUser(user));
  }
  //   navigate("/");
  // } else {
  //   navigate("/register");
  // }
};

export const userIn = (payload, navigate) => async (dispatch) => {
  console.log('!!!!!!!!!', payload, navigate);
  const response = await axios.post('/login/user', payload);

  if (response) {
    const user = await response.data;
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', user);
    dispatch(setUser(user));
    navigate('/');
  } else {
    navigate('/login');
  }
};

export const userOut = () => async (dispatch) => {
  const response = await axios.get('/user/logout', {});
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};
