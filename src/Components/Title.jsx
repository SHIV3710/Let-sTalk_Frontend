import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Actions/User";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { changemode } from "../Store/Actions_Reducers/User";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Options_mode_logout } from "./Options_mode_logout";

export const Title = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  return (
    <Main style={{ color: mode ? "rgb(255, 255, 255)" : "rgb(29,31,43)" }}>
      <span>LET'S TALK</span>
    </Main>
  );
};

const Main = styled.div`
  width: 20vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-weight: bold;
  border-radius: 1rem;
  z-index: 999;
  position: relative;
  span {
    width: 12vw;
    text-align: center;
    font-size: x-large;
    @media screen and (max-width: 1000px) {
      width: 60vw;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 70vw;
    padding: 0vw 5vw;
    justify-content: center;
    border-radius: 1rem 1rem 0 0rem;
    border-bottom: 1px solid gray;
  }
`;
