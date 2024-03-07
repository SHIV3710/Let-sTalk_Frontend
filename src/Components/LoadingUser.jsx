import React from "react";
import styled from "styled-components";

export const LoadingUser = () => {
  const users = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <Main>
      {users.map((item, index) => {
        return <div className="dummy" key={index}></div>;
      })}
    </Main>
  );
};

const Main = styled.div`
  height: 80vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }

  .dummy {
    height: 10vh;
    width: 18vw;
    background-color: #eae9e9;
    border-radius: 1rem;
    animation: blur 2s ease-out infinite;
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
