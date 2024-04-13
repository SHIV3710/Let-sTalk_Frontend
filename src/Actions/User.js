import axios from "axios";
import {
  getalluser,
  getallusererror,
  getuserloading,
  loadinguser,
  loginuser,
  loginuserError,
  logoutuser,
} from "../Store/Actions_Reducers/User";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loadinguser());
    const { data } = await axios.post(
      `https://chatapp-backend-gtje.onrender.com/chat/login`,
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
    dispatch(loginuserError(error.response.data.message));
  }
};

export const register = (name, email, password, image) => async (dispatch) => {
  try {
    dispatch(loadinguser());
    const { data } = await axios.post(
      "https://chatapp-backend-gtje.onrender.com/chat/register",
      {
        name,
        email,
        password,
        image,
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
    dispatch(loginuserError(error.response.data.message));
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

export const alluser = (key) => async (dispatch) => {
  try {
    dispatch(getuserloading());
    const { data } = await axios.get(
      "https://chatapp-backend-gtje.onrender.com/chat/allusers",
      {
        params: {
          token: localStorage.getItem("token"),
        },
      }
    );
    const searched = data.users.filter((item) => {
      return item.name.toLowerCase().includes(key.toLowerCase());
    });
    dispatch(getalluser(searched));
  } catch (error) {
    dispatch(getallusererror(error.response.data.message));
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
    dispatch(loginuserError(error.response.data.message));
  }
};
