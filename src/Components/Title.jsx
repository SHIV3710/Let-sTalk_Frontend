import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Actions/User";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { changemode } from "../Store/Actions_Reducers/User";

export const Title = () => {
  const dispatch = useDispatch();

  const { mode } = useSelector((state) => state.mode);

  const handlelogout = () => {
    dispatch(logout());
  };
  return (
    <Main>
      <span>Messages</span>
      <ul>
        {!mode ? (
          <CiLight
            onClick={() => {
              dispatch(changemode());
            }}
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              dispatch(changemode());
            }}
          />
        )}
        <IoMdLogOut onClick={handlelogout} />
      </ul>
    </Main>
  );
};

const Main = styled.div`
  width: 20vw;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins";
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    width: 90vw;
    padding: 0vw 5vw;
    justify-content: space-between;
  }
  ul {
    display: flex;
    gap: 2vw;
    list-style: none;
    margin: 0;
    align-items: center;
    @media screen and (max-width: 1000px) {
      gap: 10vw;
    }
    svg {
      cursor: pointer;
      font-size: large;
    }
  }
`;
