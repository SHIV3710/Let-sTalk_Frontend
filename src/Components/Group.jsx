import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { grouptalk } from "../Store/Actions_Reducers/User";
export const Group = ({ user }) => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { group: chatuser } = useSelector((state) => state.chatwith);
  return (
    <Main
      onClick={() => dispatch(grouptalk(user))}
      style={{
        background:
          chatuser && chatuser._id === user._id
            ? !mode
              ? "#e5e3e3"
              : "rgb(103,133,255)"
            : mode
            ? "rgb(48,51,70)"
            : "white",
        color: !mode ? "black" : "white",
      }}
    >
      <img src={user.avatar.url} alt="Image" />
      <Detail>
        <span className="user">{user.Name}</span>
      </Detail>
    </Main>
  );
};

const Main = styled.div`
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
`;

const Detail = styled.div`
  width: 12vw;
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
    width: 80vw;
  }
`;
