import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { chatwith } from "../Store/Actions_Reducers/User";
import { clearchaterror } from "../Store/Actions_Reducers/Chat";
export const User = ({ user }) => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);

  const handlechatwith = () => {
    dispatch(chatwith(user));
    dispatch(clearchaterror());
  };

  return (
    <Main
      onClick={handlechatwith}
      style={{
        background: mode ? "#434347" : "rgba(242, 240, 240, 0.8)",
      }}
    >
      <img src={user.avatar.url} alt="Image" />
      <Detail>
        <span className="user">{user.name}</span>
        <span className="lastmessage">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod
          odio, dolorum modi illo officia nisi nobis rem, corporis omnis, fugit
          sed aliquid nostrum illum dignissimos ut magni quaerat eligendi.
        </span>
      </Detail>
    </Main>
  );
};

const Main = styled.div`
  height: 10vh;
  width: 18vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(242, 240, 240, 0.8);
  border-radius: 0.5rem;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    width: 90vw;
    justify-content: center;
    gap: 2vw;
  }
  img {
    height: 5vh;
    width: 5vh;
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
  }
  .lastmessage {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;
