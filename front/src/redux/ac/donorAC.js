import { SET_DONOR, DELETE_DONOR } from "../types/userTypes";
import axios from "axios";

export const setDonor = (user) => ({
  type: SET_DONOR,
  payload: user,
});

export const deleteDonor = () => ({
  type: DELETE_DONOR,
});

export const checkDonor = () => async (dispatch) => {
  const response = await fetch("/api/auth/check", {
    credentials: "include",
  });
  if (response.status === 200) {
    const checkedUser = await response.json();
    dispatch(setDonor(checkedUser));
  }
};

export const regDonor = (payload, navigate) => async (dispatch) => {
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
    console.log(user);
    dispatch(setDonor(user));
    navigate("/");
  } else {
    navigate("/register");
  }
};

export const donorIn = (payload, navigate) => async (dispatch) => {
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
    dispatch(setDonor(user));
    navigate("/");
  } else {
    navigate("/login");
  }
};

export const donorOut = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    credentials: "include",
  });
  if (response.status === 200) {
    dispatch(deleteDonor());
  }
};
