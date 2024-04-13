import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AboutOur } from "../Components/AboutOur";
import { Options_Login_Register } from "../Components/Options_Login_Register";
import { LoginCredentials } from "../Components/LoginCredentials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { clearerror, clearerroralluser } from "../Store/Actions_Reducers/User";
import { clearchaterror } from "../Store/Actions_Reducers/Chat";

export const Login = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);

  const { auth, error } = useSelector((state) => state.User);
  const { error: allusererror } = useSelector((state) => state.AllUser);
  const { error: conversationerror } = useSelector(
    (state) => state.Conversation
  );

  const erroralert = (errormessage) => {
    toast.error(errormessage, {
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

  useEffect(() => {
    if (error) {
      erroralert(error);
      dispatch(clearerror(error));
    }
    if (conversationerror) {
      erroralert(conversationerror);
      dispatch(clearchaterror());
    }
    if (allusererror) {
      erroralert(allusererror);
      dispatch(clearerroralluser());
    }
  }, [error, conversationerror, allusererror]);
  return (
    <Main>
      <AboutOur />
      <UserDetails>
        <Options_Login_Register />
        <LoginCredentials />
      </UserDetails>
    </Main>
  );
};
const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-family: "Poppins", Arial, sans-serif;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const UserDetails = styled.div`
  height: 100vh;
  width: 50vw;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5vh;
  @media screen and (max-width: 1000px) {
    height: 80vh;
    width: 100vw;
    gap: 0vh;
  }
`;
