import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import { grouptalk } from "../Store/Actions_Reducers/User";
import { getallconv_group } from "../Actions/Chat";
import { SocketContext } from "../Context/socket";
import { io } from "socket.io-client";
import { addmessagetoconv, currconv } from "../Store/Actions_Reducers/Chat";

export const GroupTitle = () => {
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state.chatwith);
  const { socket } = useContext(SocketContext);
  const handleback = () => {
    dispatch(grouptalk(null));
    dispatch(currconv(null));
  };
  useEffect(() => {
    if (group) {
      dispatch(getallconv_group(group._id));
      socket?.on("newmessagetogroup", ({ message, id }) => {
        if (id === group._id) dispatch(addmessagetoconv(message));
      });
      return () => socket?.off("newmessagetogroup");
    }
  }, [group, io]);
  return (
    <Main>
      <FaArrowLeft onClick={handleback} />
      <img src={group.avatar.url} alt="Image" />
      <div>
        <span className="user">{group.Name}</span>
        <span className="status">
          {group.participants ? (
            <>
              {group.participants.map((item, index) => {
                return <span key={index}> {item.name},</span>;
              })}
            </>
          ) : (
            <></>
          )}
        </span>
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
