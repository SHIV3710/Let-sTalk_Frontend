import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { chatwith } from "../Store/Actions_Reducers/User";
import { GoDotFill } from "react-icons/go";
import "react-loading-skeleton/dist/skeleton.css";

export const User = ({ user }) => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { user: chatuser } = useSelector((state) => state.chatwith);
  const { onlineusers } = useSelector((state) => state.Socket);
  return (
    <Main
      onClick={() => dispatch(chatwith(user))}
      style={{
        background:
          chatuser && chatuser._id === user._id
            ? !mode
              ? "#aaa8a8"
              : "rgb(103,133,255)"
            : mode
            ? "rgb(48,51,70)"
            : "#e5e3e3",
        color: !mode ? "black" : "white",
      }}
    >
      <img src={user.avatar.url} alt="Image" />

      <Detail>
        <span className="user">{user.name}</span>
        {onlineusers.includes(user._id) ? (
          <div>
            <GoDotFill style={{ color: "rgba(37, 213, 111, 0.8)" }} />
            online
          </div>
        ) : (
          <div>
            <GoDotFill />
            offline
          </div>
        )}
      </Detail>
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
    width: 60vw;
  }
`;
