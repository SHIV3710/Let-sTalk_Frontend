import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import People from "../Resources/peopletalk.png";

export const EmptyChat = () => {
  const { mode } = useSelector((state) => state.mode);
  return (
    <Main>
      <img src={People} alt="" />
      <span style={{ color: mode ? "white" : "black" }}>
        Feel free to start a conversation with anyone you'd like!
      </span>
    </Main>
  );
};

const Main = styled.div`
  height: 76vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  align-items: center;
  justify-content: center;
  img {
    height: 50vh;
    width: 30vw;
    filter: drop-shadow(#000000 0.5rem 0.5rem 1rem);
  }
  @media screen and (max-width: 1000px) {
    width: 70vw;
    height: 80vh;
  }
`;
