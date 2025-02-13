import { SET_USER, DELETE_USER, EDIT_USER } from "../types/userTypes";
import api from '../../utils/api';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

// export const checkUser = () => async (dispatch) => { const response = await
//   axios.get("/user/check");

//   if (response.status === 200) { const checkedUser = response.data;
//     dispatch(setUser(checkedUser)); }
// };

export const regUser = (payload, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(payload);
    dispatch(setUser(data));
    navigate("/user");
  } catch (error) {
    console.error('Registration failed:', error);
    navigate("/user/signup");
  }
};

export const userIn = (payload, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(payload);
    dispatch(setUser(data));
    navigate("/user");
  } catch (error) {
    console.error('Login failed:', error);
    navigate("/login/user");
  }
};

export const userOut = () => async (dispatch) => {
  try {
    await api.logout();
    dispatch(deleteUser());
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export const oneUserFromServer = () => async (dispatch) => {
  try {
    const { data } = await api.getProfile();
    dispatch(setUser(data));
  } catch (error) {
    console.error('Failed to fetch profile:', error);
  }
};

export const editUserProfile = (data) => ({
  type: EDIT_USER,
  payload: data,
});

export const editUserProfileFromServer = (city, street, building, phoneNumber) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile({
      city,
      street,
      building,
      phoneNumber,
    });
    dispatch(editUserProfile(data));
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
};

export const subscribeUser = (eventId) => async (dispatch, getState) => {
  try {
    const user = getState().user;
    await api.subscribeToEvent(eventId, user.id);
    dispatch({ type: SET_USER, payload: user });
  } catch (error) {
    console.error('Failed to subscribe:', error);
  }
};
