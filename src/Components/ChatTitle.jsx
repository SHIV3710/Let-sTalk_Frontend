import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import { chatwith } from "../Store/Actions_Reducers/User";
import { GoDotFill } from "react-icons/go";
import { getconversation } from "../Actions/Chat";
import { SocketContext } from "../Context/socket";
import { io } from "socket.io-client";
import { addmessagetoconv } from "../Store/Actions_Reducers/Chat";

export const ChatTitle = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { onlineusers } = useSelector((state) => state.Socket);
  const { user } = useSelector((state) => state.chatwith);
  const [status, setstatus] = useState(0);
  const { socket } = useContext(SocketContext);
  const handleback = () => {
    dispatch(chatwith(null));
  };
  useEffect(() => {
    if (user) {
      dispatch(getconversation(user._id));
      for (let item in onlineusers) {
        if (onlineusers[item] === user._id) {
          setstatus(item);
        }
      }
      socket?.on("newmessage", (newMessage) => {
        dispatch(getconversation(user._id));
        dispatch(addmessagetoconv(newMessage));
      });
      return () => socket?.off("newmessage");
    }
  }, [user, io]);
  return (
    <Main
      style={{
        background: mode ? "rgba(47, 47, 50, 1)" : "rgba(242, 240, 240, 0.8)",
        color: mode ? "white" : "rgba(47, 47, 50, 1)",
      }}
    >
      <FaArrowLeft onClick={handleback} />
      <img src={user.avatar.url} alt="Image" />
      <div>
        <span className="user">{user.name}</span>
        <span className="status">
          <GoDotFill
            style={{
              color: onlineusers[status] === user._id ? "#4cbb17" : "gray",
            }}
          />
          {onlineusers[status] === user._id ? "online" : "offline"}
        </span>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 10vh;
  width: 78vw;
  display: flex;
  gap: 2vw;
  align-items: center;
  padding-left: 2vw;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    width: 98vw;
    height: 10vh;
  }
  img {
    height: 6vh;
    width: 6vh;
    border-radius: 50%;
    object-fit: cover;
    @media screen and (max-width: 1000px) {
      height: 4vh;
      width: 4vh;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    font-family: "Poppins";
    .user {
      font-weight: bold;
    }
    .status {
      display: flex;
      gap: 0.3vw;
      align-items: center;
      svg {
        color: rgba(51, 184, 67, 1);
      }
      font-size: xx-small;
      color: gray;
    }
  }
`;
