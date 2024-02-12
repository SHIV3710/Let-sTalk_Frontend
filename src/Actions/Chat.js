import axios from "axios";
import { currconv, currconverror } from "../Store/Actions_Reducers/Chat";

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
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(currconv(data.conversation.messages));
  } catch (error) {
    dispatch(currconverror(error.message));
  }
};
