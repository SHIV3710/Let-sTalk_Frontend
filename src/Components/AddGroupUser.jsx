import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const AddGroupUser = ({ user, map, setmap }) => {
  const [check, setcheck] = useState(false);
  const { mode } = useSelector((state) => state.mode);

  useEffect(() => {
    if (check) {
      setmap((prevMap) => new Map(prevMap).set(user._id, user.name));
    } else {
      setmap((prevMap) => {
        const newMap = new Map(prevMap);
        newMap.delete(user._id);
        return newMap;
      });
    }
  }, [check, user._id, user.name, setmap]);

  return (
    <Main style={{ color: !mode ? "black" : "white" }}>
      <img src={user.avatar.url} alt="Image" />
      <Detail>
        <span className="user">{user.name}</span>
      </Detail>
      <input
        type="checkbox"
        checked={check}
        onChange={() => setcheck(!check)}
      />
    </Main>
  );
};

const Main = styled.div`
  -webkit-transition: -webkit-transform 100s linear;
  height: 8vh;
  width: 18vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  transition: color 0.3s;
  transition: background-color 0.5s;
  cursor: pointer;
  scroll-behavior: smooth;
  @media screen and (max-width: 1000px) {
    width: 70vw;
    justify-content: center;
    padding: 0 1vw;
    gap: 2vw;
  }
  img {
    height: 6vh;
    width: 6vh;
    border-radius: 50%;
    object-fit: cover;
  }
  input {
    height: 5rem;
    cursor: pointer;
  }
`;

const Detail = styled.div`
  width: 10vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: x-small;
  font-family: "Poppins";
  overflow: hidden;
  .user {
    font-weight: bold;
    font-size: small;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 0.3vw;
  }
  @media screen and (max-width: 1000px) {
    width: 60vw;
  }
`;
