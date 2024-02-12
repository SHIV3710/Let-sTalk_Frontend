import axios from "axios";
import {
  getalluser,
  getallusererror,
  loginuser,
  loginuserError,
  logoutuser,
} from "../Store/Actions_Reducers/User";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://chatapp-backend-gtje.onrender.com/chat/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", data.token);
    dispatch(loginuser(data.user));
  } catch (error) {
    dispatch(loginuserError(error.message));
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://chatapp-backend-gtje.onrender.com/chat/register",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    localStorage.setItem("token", data.token);
    dispatch(loginuser(data));
  } catch (error) {
    dispatch(loginuserError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.setItem("token", null);
    dispatch(logoutuser());
  } catch (error) {
    console.log("Error in log out");
  }
};

export const alluser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://chatapp-backend-gtje.onrender.com/chat/allusers",
      {
        params: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch(getalluser(data.users));
  } catch (error) {
    dispatch(getallusererror(error.message));
  }
};

export const specificuser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://chatapp-backend-gtje.onrender.com/chat/user",
      {
        params: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch(loginuser(data.user));
  } catch (error) {
    dispatch(loginuserError(error.message));
  }
};
