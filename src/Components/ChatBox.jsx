import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Inv_Chat } from "./Inv_Chat";

export const ChatBox = () => {
  const { mode } = useSelector((state) => state.mode);
  const { conversations } = useSelector((state) => state.Conversation);
  const { user } = useSelector((state) => state.chatwith);
  return (
    <Main
      style={{
        background: mode ? "#434347" : "rgba(242, 240, 240, 0.8)",
        color: mode ? "white" : "rgba(47, 47, 50, 1)",
      }}
    >
      {user ? (
        <>
          {conversations &&
            conversations.map((item, index) => {
              return (
                <Inv_Chat
                  key={index}
                  idx={user._id === item.senderId ? 1 : 0}
                  data={item}
                />
              );
            })}
        </>
      ) : (
        <></>
      )}
    </Main>
  );
};

const Main = styled.div`
  height: 76vh;
  width: 78vw;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 2vh 1vw;
  @media screen and (max-width: 1000px) {
    width: 98vw;
    height: 80vh;
  }
`;
