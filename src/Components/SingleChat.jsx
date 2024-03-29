import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../Context/socket";
import { ChatBox } from "./ChatBox";
import { Message } from "./Message";
import { ChatTitle } from "./ChatTitle";
import { EmptyChat } from "./EmptyChat";

export const SingleChat = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.chatwith);
  const { user: onlineuser } = useSelector((state) => state.User);
  const { width } = useSelector((state) => state.Dimension);
  const { socket } = useContext(SocketContext);

  return (
    <Main
      style={{
        color: mode ? "white" : "rgba(47, 47, 50, 1)",
        width: width > 1000 ? "80vw" : "80vw",
        display: user ? "flex" : "none",
        // background: "black",
        zIndex: 999,
      }}
    >
      {user ? (
        <>
          <ChatTitle />
          {user ? <ChatBox /> : <EmptyChat />}
          <Message />
        </>
      ) : (
        <>
          <span
            style={{
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
  height: 98vh;
  width: 80vw;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 80vw;
    height: 100vh;
    /* z-index: 999; */
  }

  > span {
    align-self: center;
    justify-self: center;
    font-family: "Poppins";
  }
`;
