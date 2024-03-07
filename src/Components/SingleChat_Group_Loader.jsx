import React from "react";
import styled from "styled-components";

export const SingleChat_Group_Loader = () => {
  const chat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <Main>
      <Chat>
        {chat.map((item) => {
          return <></>;
        })}
      </Chat>
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
    width: 100vw;
    height: 100vh;
  }
`;

const Chat = styled.div`
  height: 76vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  overflow-y: scroll;
  border-radius: 1rem;
  animation: blur 2s ease-out infinite;

  &::-webkit-scrollbar {
    display: none;
  }
  padding: 2vh 1vw;
  @media screen and (max-width: 1000px) {
    width: 98vw;
    height: 80vh;
  }
  @keyframes blur {
    0% {
      background: rgba(0, 0, 0, 0.3);
    }
    25% {
      background: rgba(0, 0, 0, 0.2);
    }
    50% {
      background: rgba(0, 0, 0, 0.1);
    }
    75% {
      background: rgba(0, 0, 0, 0.2);
    }
    100% {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
