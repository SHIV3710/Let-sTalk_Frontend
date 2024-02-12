import React from "react";
import styled from "styled-components";
import chat from "../Resources/person.jpg";

export const AboutOur = () => {
  return (
    <Main>
      <div>
        <h3>Welcome to</h3>
        <h1>Let's Talk</h1>
        <p>
          Your gateway to vibrant discussions and meaningful connections. Join
          us in sparking conversations that inspire and unite.
        </p>
        <img src={chat} alt="" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    height: 100vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 1000px) {
      width: 80vw;
    }
    img {
      height: 40vh;
      width: 40vw;
      transition: 2s;
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 100vw;
    font-size: large;
  }
`;
