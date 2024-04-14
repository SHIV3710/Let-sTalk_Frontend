import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Chat } from "./Pages/Chat";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "./Pages/Signup";
import { alluser, specificuser } from "./Actions/User";
import { getgroups } from "./Actions/Chat";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const dispatch = useDispatch();
  const { auth, error } = useSelector((state) => state.User);
  const { error: allusererror } = useSelector((state) => state.AllUser);
  const { error: conversationerror } = useSelector(
    (state) => state.Conversation
  );
  const { mode } = useSelector((state) => state.mode);
  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode ? "light" : "dark",
      className: "toast-message",
    });
  };

  const handleallitem = async () => {
    await dispatch(alluser(""));
    await dispatch(getgroups(""));
  };

  useEffect(() => {
    dispatch(specificuser());
    if (auth) handleallitem();
    if (auth == true) {
      notify(`Welcome to Let's Talk`);
    }
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth === true ? <Chat /> : <Login />} />
        // <Route path="/" element={auth === true ? <Chat /> : <Login />} />
        <Route path="/chat" element={auth === true ? <Chat /> : <Login />} />
        <Route
          path="/register"
          element={auth === true ? <Chat /> : <Signup />}
        />
      </Routes>
    </BrowserRouter>
  );
};
