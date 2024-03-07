import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { creategroup, getgroups } from "../Actions/Chat";
import { Loader } from "./Loader";
import Dummy from "../Resources/dummy.jpeg";

export const AddGroupSearch = ({ map, avatar }) => {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { createloading } = useSelector((state) => state.AllUser);

  const handlecreategroup = async () => {
    let users = [];
    for (let [key] of map) {
      users.push(key);
    }
    if (users.length > 0) {
      await dispatch(creategroup(users, search, avatar));
      dispatch(getgroups(""));
    }
  };
  return (
    <Main>
      <input
        type="text"
        placeholder="Enter your Group Name..."
        onChange={(e) => setsearch(e.target.value)}
        style={{
          background: !mode ? "rgb(255, 255, 255)" : "rgb(29,31,43)",
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
        }}
      />
      <button onClick={handlecreategroup}>
        {createloading ? <Loader /> : <>Create Group</>}
      </button>
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
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 70vw;
    justify-content: space-between;
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

  > button {
    display: flex;
    width: 5vw;
    height: 5vh;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Poppins";
    font-size: xx-small;
    background-color: rgb(103, 133, 255);
    border-radius: 1rem;
    align-self: start;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 1000px) {
      width: 20vw;
    }
  }
`;
