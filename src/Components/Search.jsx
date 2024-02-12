import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { alluser } from "../Actions/User";
import { getalluser } from "../Store/Actions_Reducers/User";

export const Search = () => {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { users } = useSelector((state) => state.AllUser);
  const handleusers = () => {
    const searchedUser = users.filter(
      (user) => user.name.toLowerCase() === search.toLowerCase()
    );
    dispatch(searchedUser.length === 0 ? alluser() : getalluser(searchedUser));
  };
  useEffect(() => {
    if (search === "") {
      handleusers();
    }
  }, [search]);
  return (
    <Main>
      <input
        type="text"
        placeholder="Search in dashboard..."
        onChange={(e) => setsearch(e.target.value)}
        style={{
          background: mode ? "rgba(47, 47, 50, 1)" : "rgba(242, 240, 240, 0.8)",
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
        }}
      />
      <IoSearchSharp onClick={handleusers} />
    </Main>
  );
};

const Main = styled.div`
  height: 5vh;
  width: 18vw;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
    justify-content: center;
    gap: 5vw;
  }
  svg {
    cursor: pointer;
    font-size: x-large;
  }
  input {
    width: 14vw;
    height: 5vh;
    border: none;
    font-family: "Poppins";
    font-size: x-small;
    text-indent: 0.5vw;
    border-radius: 0.2rem;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1000px) {
      width: 70vw;
    }
  }
`;
