import { SET_HOSPITAL, DELETE_HOSPITAL } from "../types/userTypes";
import axios from "axios";

export const setHospital = (user) => ({
  type: SET_HOSPITAL,
  payload: user,
});

export const deleteHospital = () => ({
  type: DELETE_HOSPITAL,
});

export const checkHospital = () => async (dispatch) => {
  const response = await axios.get("/hospital/check");

  if (response.status === 200) {
    const checkedUser = response.data;
    dispatch(setHospital(checkedUser));
  }
};

export const regHospital = (payload, navigate) => async (dispatch) => {
  const response = await axios.post("/hospital/reg", payload);

  if (response.status === 200) {
    const user = response.data;
    dispatch(setHospital(user));
    navigate("/");
  } else {
    navigate("/register");
  }
};

export const hospitalIn = (payload, navigate) => async (dispatch) => {
  const response = await axios.post("/hospital/login", payload);

  if (response.status === 200) {
    const user = response.status;
    dispatch(setHospital(user));
    navigate("/");
  } else {
    navigate("/login");
  }
};

export const hospitalOut = () => async (dispatch) => {
  const response = await axios.get("/hospital/logout", {});
  if (response.status === 200) {
    dispatch(deleteHospital());
  }
};
