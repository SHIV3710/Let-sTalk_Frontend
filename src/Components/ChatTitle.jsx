import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import { chatwith } from "../Store/Actions_Reducers/User";
import { getconversation } from "../Actions/Chat";
import { SocketContext } from "../Context/socket";
import { io } from "socket.io-client";
import { addmessagetoconv } from "../Store/Actions_Reducers/Chat";

export const ChatTitle = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.chatwith);
  const { socket } = useContext(SocketContext);
  const handleback = () => {
    dispatch(chatwith(null));
  };
  useEffect(() => {
    if (user) {
      dispatch(getconversation(user._id));
      socket?.on("newmessage", (newMessage) => {
        console.log(newMessage);
        if (newMessage && user._id == newMessage.newMessage.senderId._id)
          dispatch(addmessagetoconv(newMessage.newMessage));
      });
      return () => socket?.off("newmessage");
    }
  }, [user, io]);
  return (
    <Main>
      <FaArrowLeft onClick={handleback} />
      <img src={user.avatar.url} alt="Image" />
      <div>
        <span className="user">{user.name}</span>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 10vh;
  width: 72.5vw;
  display: flex;
  gap: 1vw;
  align-items: center;
  padding-left: 2vw;
  cursor: pointer;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 1000px) {
    width: 75vw;
    height: 10vh;
    gap: 3vw;
    padding-left: 5vw;
  }
  img {
    height: 6vh;
    width: 6vh;
    border-radius: 50%;
    object-fit: cover;
    @media screen and (max-width: 1000px) {
      height: 2rem;
      width: 2rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    font-family: "Poppins";
    .status {
      display: flex;
      gap: 0.3vw;
      align-items: center;
      svg {
        color: rgba(51, 184, 67, 1);
      }
      font-size: xx-small;
    }
  }
`;
