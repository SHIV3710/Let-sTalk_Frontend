import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Inv_Chat } from "./Inv_Chat";

export const ChatBox = () => {
  const { conversations } = useSelector((state) => state.Conversation);
  const { user } = useSelector((state) => state.chatwith);
  const { groups, value } = useSelector((state) => state.AllUser);
  const { user: loginuser } = useSelector((state) => state.User);
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  });

  return (
    <Main ref={scrollableDivRef}>
      {value ? (
        <>
          {user ? (
            <>
              {conversations &&
                conversations.map((item, index) => {
                  return (
                    <Inv_Chat
                      key={index}
                      idx={user._id === item.senderId._id ? 1 : 0}
                      data={item}
                    />
                  );
                })}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {groups ? (
            <>
              {conversations &&
                conversations.map((item, index) => {
                  return (
                    <Inv_Chat
                      key={index}
                      idx={item.senderId._id !== loginuser._id ? 1 : 0}
                      data={item}
                    />
                  );
                })}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </Main>
  );
};

const Main = styled.div`
  height: 76vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 2vh 1vw;
  background: url("https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg");

  @media screen and (max-width: 1000px) {
    width: 70vw;
    height: 80vh;
  }

  .image-expand {
    position: absolute;
    height: 70vh;
    width: 70vh;
    top: 5%;
    left: 20%;
    border-radius: 0.5rem;
  }
`;
