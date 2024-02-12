import React, { useState } from "react";
import styled from "styled-components";
import { AboutOur } from "../Components/AboutOur";
import { Options_Login_Register } from "../Components/Options_Login_Register";
import { LoginCredentials } from "../Components/LoginCredentials";

export const Signup = () => {
  return (
    <Main>
      <AboutOur />
      <UserDetails>
        <Options_Login_Register />
        <LoginCredentials value={true} />
      </UserDetails>
    </Main>
  );
};
const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-family: "Poppins", Arial, sans-serif;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const UserDetails = styled.div`
  height: 100vh;
  width: 50vw;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5vh;
  @media screen and (max-width: 1000px) {
    height: 50vh;
    width: 100vw;
    gap: 0vh;
  }
`;
