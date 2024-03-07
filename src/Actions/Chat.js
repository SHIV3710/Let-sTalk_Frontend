import axios from "axios";
import {
  addmessagetoconv,
  currconv,
  currconverror,
} from "../Store/Actions_Reducers/Chat";
import {
  changevalue,
  creategroupfailure,
  creategrouploading,
  getallgroups,
  getallusererror,
} from "../Store/Actions_Reducers/User";

export const getconversation = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://chatapp-backend-gtje.onrender.com/talk/message/${id}`,
      {
        params: {
          token: localStorage.getItem("token"),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(currconv(data.messages));
  } catch (error) {
    dispatch(currconverror(error.message));
  }
};

export const sendmessage = (id, message) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.put(
      `https://chatapp-backend-gtje.onrender.com/talk/message/${id}`,
      {
        message,
      },
      {
        params: {
          token: localStorage.getItem("token"),
        },
      },
      {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(addmessagetoconv(data.newMessage));
  } catch (error) {
    dispatch(currconverror(error.message));
  }
};

export const getgroups = (key) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://chatapp-backend-gtje.onrender.com/talk/group/all`,
      {
        params: {
          token: localStorage.getItem("token"),
        },
      }
    );
    const searched = data.conversations.filter((item) => {
      return item.Name.toLowerCase().includes(key.toLowerCase());
    });
    dispatch(getallgroups(searched));
  } catch (error) {
    dispatch(getallusererror());
  }
};

export const creategroup = (users, Name, avatar) => async (dispatch) => {
  try {
    dispatch(creategrouploading());
    const { data } = await axios.post(
      `https://chatapp-backend-gtje.onrender.com/talk/group/add`,
      {
        members: users,
        name: Name,
        image: avatar,
      },
      {
        params: {
          token: localStorage.getItem("token"),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(changevalue(0));
  } catch (error) {
    dispatch(creategroupfailure());
  }
};

export const sendmessage_group = (id, message) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `https://chatapp-backend-gtje.onrender.com/talk/group/message/${id}`,
      {
        message,
      },
      {
        params: {
          token: localStorage.getItem("token"),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(currconv(data.group.messages));
  } catch (error) {
    dispatch(currconverror(error.message));
  }
};

export const getallconv_group = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://chatapp-backend-gtje.onrender.com/talk/group/allmessage/${id}`,
      {
        params: {
          token: localStorage.getItem("token"),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(currconv(data.group.messages));
  } catch (error) {
    dispatch(currconverror(error.message));
  }
};
