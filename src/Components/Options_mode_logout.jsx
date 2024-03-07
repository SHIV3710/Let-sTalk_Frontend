import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  changemode,
  changevalue,
  chatwith,
  creategroup,
  grouptalk,
} from "../Store/Actions_Reducers/User";
import { alluser, logout } from "../Actions/User";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { getgroups } from "../Actions/Chat";
import { RiMoonClearFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { currconv } from "../Store/Actions_Reducers/Chat";

export const Options_mode_logout = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { user, loading } = useSelector((state) => state.User);
  const { create, value } = useSelector((state) => state.AllUser);
  const [chat, setchat] = useState(true);
  const handlelogout = () => {
    dispatch(logout());
  };
  const handlevalue = (value) => {
    dispatch(changevalue(value));
    if (value == 0) dispatch(chatwith(null));
    else dispatch(grouptalk(null));
    dispatch(currconv([]));
  };
  return (
    <Main style={{ background: mode ? "rgb(103,133,255)" : "rgb(48,51,70) " }}>
      <div className="chat">
        <img src={user.avatar.url} alt="" />
        <div>
          <span onClick={() => handlevalue(1)}>
            <MdMarkUnreadChatAlt
              style={{
                color: value
                  ? mode
                    ? "rgb(255, 255, 255)"
                    : "rgb(255, 255, 255)"
                  : mode
                  ? "rgb(61,85,181)"
                  : "rgb(153, 153, 154)",
              }}
            />
            <span
              style={{
                color: value
                  ? mode
                    ? "rgb(255, 255, 255)"
                    : "rgb(255, 255, 255)"
                  : mode
                  ? "rgb(61,85,181)"
                  : "rgb(153, 153, 154)",
              }}
            >
              Chat
            </span>
          </span>
          <span onClick={() => handlevalue(0)}>
            <MdGroupAdd
              style={{
                color: !value
                  ? mode
                    ? "rgb(255, 255, 255)"
                    : "rgb(255, 255, 255)"
                  : mode
                  ? "rgb(61,85,181)"
                  : "rgb(153, 153, 154)",
              }}
            />
            <span
              style={{
                color: !value
                  ? mode
                    ? "rgb(255, 255, 255)"
                    : "rgb(255, 255, 255)"
                  : mode
                  ? "rgb(61,85,181)"
                  : "rgb(153, 153, 154)",
              }}
            >
              Groups
            </span>
          </span>
        </div>
      </div>
      <div>
        <span onClick={() => dispatch(creategroup(1 - create))}>
          <TbUsersPlus
            style={{
              color: "white",
            }}
          />
          <span
            style={{
              color: "white",
            }}
          ></span>
        </span>
        <span>
          {!mode ? (
            <RiSunFill
              onClick={() => {
                dispatch(changemode());
              }}
            />
          ) : (
            <RiMoonClearFill
              onClick={() => {
                dispatch(changemode());
              }}
            />
          )}
          <span>{mode ? "Dark" : "Light "}</span>
        </span>
        <span>
          <FaSignOutAlt onClick={handlelogout} />
          <span>Log out</span>
        </span>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 5vw;
  background-color: #202022;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 7%;
  left: 15%;
  @media screen and (max-width: 1000px) {
    width: 18vw;
  }

  svg {
    font-size: x-large;
    cursor: pointer;
    transition: color 0.5s;
    @media screen and (max-width: 1400px) {
      font-size: xx-large;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin-bottom: 2vh;
    align-items: center;

    span {
      display: flex;
      flex-direction: column;
      font-size: x-small;
      font-family: "Poppins";
      align-items: center;
      gap: 1vh;
    }
  }

  .chat {
    height: 40vh;
    width: 5vw;
    display: flex;
    flex-direction: column;
    gap: 4vh;

    img {
      height: 3vw;
      width: 3vw;
      border-radius: 50%;
      margin-top: 2vh;
      @media screen and (max-width: 1000px) {
        height: 7vh;
        width: 7vh;
      }
    }
  }

  span {
    transition: color 0.5s;
  }
`;
