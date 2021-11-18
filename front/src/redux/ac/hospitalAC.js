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
  const response = await fetch("/api/auth/check", {
    credentials: "include",
  });
  if (response.status === 200) {
    const checkedUser = await response.json();
    dispatch(setHospital(checkedUser));
  }
};

export const regHospital = (payload, navigate) => async (dispatch) => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setHospital(user));
    navigate("/");
  } else {
    navigate("/register");
  }
};

export const hospitalIn = (payload, navigate) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setHospital(user));
    navigate("/");
  } else {
    navigate("/login");
  }
};

export const hospitalOut = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    credentials: "include",
  });
  if (response.status === 200) {
    dispatch(deleteHospital());
  }
};
