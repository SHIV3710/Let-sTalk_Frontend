import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../Context/socket";
import { ChatBox } from "./ChatBox";
import { Message } from "./Message";
import { ChatTitle } from "./ChatTitle";
import { GroupTitle } from "./GroupTitle";

export const Singlegroup = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { group } = useSelector((state) => state.chatwith);
  const { user: onlineuser } = useSelector((state) => state.User);
  const { width } = useSelector((state) => state.Dimension);
  const { socket } = useContext(SocketContext);

  return (
    <Main
      style={{
        color: mode ? "white" : "rgba(47, 47, 50, 1)",
        position: width > 1000 ? "relative" : "absolute",
        width: width > 1000 ? "80vw" : "80vw",
        display: group ? "flex" : "none",
      }}
    >
      {group ? (
        <>
          <GroupTitle />
          <ChatBox />
          <Message />
        </>
      ) : (
        <></>
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
  justify-content: space-between;
  align-items: center;

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
