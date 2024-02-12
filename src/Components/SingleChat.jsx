import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { getconversation } from "../Actions/Chat";
import { SocketContext } from "../Context/socket";
import { addmessagetoconv } from "../Store/Actions_Reducers/Chat";
import { ChatBox } from "./ChatBox";
import { Message } from "./Message";
import { ChatTitle } from "./ChatTitle";

export const SingleChat = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.chatwith);
  const { user: onlineuser } = useSelector((state) => state.User);
  const { width } = useSelector((state) => state.Dimension);
  const { socket } = useContext(SocketContext);

  useEffect(() => {}, [io, socket]);

  return (
    <Main
      style={{
        background: mode ? "#434347" : "rgba(242, 240, 240, 0.8)",
        color: mode ? "white" : "rgba(47, 47, 50, 1)",
        position: width > 1000 ? "relative" : "absolute",
        width: width > 1000 ? "80vw" : "100vw",
        display: user ? "flex" : "none",
      }}
    >
      {user ? (
        <>
          <ChatTitle />
          <ChatBox />
          <Message />
        </>
      ) : (
        <>
          <span
            style={{
              background: mode ? "#434347" : "rgba(242, 240, 240, 0.8)",
              color: mode ? "white" : "rgba(47, 47, 50, 1)",
            }}
          >
            <p>Hey {onlineuser.name}</p>
            <p>Select a chat to start conversation</p>
          </span>
        </>
      )}
    </Main>
  );
};
const Main = styled.div`
  height: 100vh;
  width: 80vw;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
  }

  > span {
    align-self: center;
    justify-self: center;
    font-family: "Poppins";
  }
`;
