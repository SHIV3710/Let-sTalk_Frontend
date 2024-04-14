import React, { useEffect } from "react";
import styled from "styled-components";
import { AllUser } from "../Components/AllUser";
import { SingleChat } from "../Components/SingleChat";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  changedimension,
  clearerror,
  clearerroralluser,
} from "../Store/Actions_Reducers/User";
import { Title } from "../Components/Title";
import { Search } from "../Components/Search";
import { Options_mode_logout } from "../Components/Options_mode_logout";
import { Singlegroup } from "../Components/SingleGroup";
import { CreateaGroup } from "../Components/CreateaGroup";
import { EmptyChat } from "../Components/EmptyChat";
import { ToastContainer } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import { clearchaterror } from "../Store/Actions_Reducers/Chat";

export const Chat = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { width } = useSelector((state) => state.Dimension);
  const { value, create } = useSelector((state) => state.AllUser);
  const { user, group } = useSelector((state) => state.chatwith);
  const { auth, error } = useSelector((state) => state.User);
  const { error: allusererror } = useSelector((state) => state.AllUser);
  const { error: conversationerror, load } = useSelector(
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

  const sendmessagealert = (message) => {
    toast.loading(message, {
      position: "top-center",
      hideProgressBar: false,
      autoClose: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode ? "light" : "dark",
      className: "toast-message",
    });
  };

  const handlewidth = () =>
    dispatch(
      changedimension({ height: window.innerHeight, width: window.innerWidth })
    );

  useEffect(() => {
    window.addEventListener("resize", handlewidth);
    return () => window.removeEventListener("resize", handlewidth);
  }, [width]);

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

  useEffect(() => {
    if (load) {
      sendmessagealert(`Message Sending`);
    } else {
      toast.dismiss();
    }
  }, [load]);

  return (
    <Main style={{ background: mode ? "rgb(103,133,255)" : "rgb(48,51,70) " }}>
      <Options_mode_logout />
      <Chatx
        style={{
          background: !mode ? "rgb(255, 255, 255)" : "rgb(29,31,43)",
        }}
      >
        {(user || group) && width < 1000 ? (
          <>{user && !group ? <SingleChat /> : <Singlegroup />}</>
        ) : (
          <>
            {create ? (
              <>
                <CreateaGroup />
              </>
            ) : (
              <>
                <AllChat>
                  <Title />
                  <Search />
                  <AllUser />
                </AllChat>
              </>
            )}
          </>
        )}
        {width >= 1000 ? (
          <>
            {user || group ? (
              <>
                {value ? (
                  <SingleChat />
                ) : (
                  <>
                    <Singlegroup />
                  </>
                )}
              </>
            ) : (
              <>
                <EmptyChat />
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </Chatx>
      <ToastContainer />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  background-color: #202022;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
const Chatx = styled.div`
  height: 98vh;
  width: 94.5vw;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;
const AllChat = styled.div`
  height: 98vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid gray;
  gap: 2vh;
  scroll-behavior: auto;
  background-color: colors[mode];
  @media screen and (max-width: 1000px) {
    width: 80vw;
    z-index: 1;
  }
`;
