import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Options_Login_Register = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{
          fontWeight:
            window.location.pathname === "/" ||
            window.location.pathname === "/chat"
              ? "bolder"
              : "300",
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/register");
        }}
        style={{
          fontWeight: window.location.pathname === "/register" ? "bold" : "300",
        }}
      >
        Register
      </button>
    </Main>
  );
};
const Main = styled.div`
  height: 10vh;
  width: 13vw;
  display: flex;
  gap: 0.5vw;
  margin-top: 2vh;
  justify-content: center;
  button {
    height: 4vh;
    width: 6vw;
    background-color: #ffffff;
    border: 1px solid #d4d2d2;
    font-family: "Poppins";
    color: #4461f2;
    border-radius: 0.8rem;
    box-shadow: rgba(94, 94, 219, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    cursor: pointer;

    @media screen and (max-width: 1000px) {
      width: 25vw;
      font-size: x-small;
    }
  }
  @media screen and (max-width: 1000px) {
    gap: 4vw;
    width: 40vw;
  }
`;
