import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Chat } from "./Pages/Chat";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "./Pages/Signup";
import { alluser, specificuser } from "./Actions/User";

export const App = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(specificuser());
    dispatch(alluser());
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth === true ? <Chat /> : <Login />} />
        <Route path="/chat" element={auth === true ? <Chat /> : <Login />} />
        <Route
          path="/register"
          element={auth === true ? <Chat /> : <Signup />}
        />
      </Routes>
    </BrowserRouter>
  );
};
