import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { alluser } from "../Actions/User";
import { getgroups } from "../Actions/Chat";

export const Search = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { value } = useSelector((state) => state.AllUser);
  return (
    <Main>
      <input
        type="text"
        placeholder="Search in dashboard..."
        onChange={(e) => {
          if (value) {
            dispatch(alluser(e.target.value));
          } else {
            dispatch(getgroups(e.target.value));
          }
        }}
        style={{
          background: !mode ? "rgb(255, 255, 255)" : "rgb(29,31,43)",
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
        }}
      />
      <IoSearchSharp />
    </Main>
  );
};

const Main = styled.div`
  height: 5vh;
  width: 18vw;
  z-index: 888;
  border: 1px solid #c0c0c0;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 70vw;
    justify-content: space-between;
    padding: 0vw 2vw;
    gap: 5vw;
  }
  svg {
    cursor: pointer;
    font-size: x-large;
    color: rgb(97, 80, 248);
  }
  input {
    width: 14vw;
    height: 4vh;
    border: none;
    font-family: "Poppins";
    font-size: x-small;
    text-indent: 0.5vw;
    border-radius: 1rem;
    &:focus {
      outline: none;
      &::-webkit-input-placeholder {
        color: #b8b8b8;
        transition: 0.4 s;
      }
    }
    @media screen and (max-width: 1000px) {
      width: 60vw;
    }
  }
`;
