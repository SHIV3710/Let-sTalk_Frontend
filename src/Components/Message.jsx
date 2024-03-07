import React, { useState } from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getallconv_group,
  sendmessage,
  sendmessage_group,
} from "../Actions/Chat";
import { HiOutlineFaceSmile } from "react-icons/hi2";

export const Message = () => {
  const dispatch = useDispatch();
  const [currchar, setcurrchat] = useState("");
  const { mode } = useSelector((state) => state.mode);
  const { user, group } = useSelector((state) => state.chatwith);

  const handleaddchat = async () => {
    if (user) {
      if (currchar && currchar != "") {
        dispatch(sendmessage(user._id, currchar));
        setcurrchat("");
      }
    } else {
      dispatch(sendmessage_group(group._id, currchar));
      setcurrchat("");
      dispatch(getallconv_group(group._id));
    }
  };

  return (
    <Main>
      <input
        type="text"
        onBlur={(e) => e.target.focus()}
        placeholder="Type your message..."
        value={currchar}
        onChange={(e) => setcurrchat(e.target.value)}
        style={{
          background: !mode ? "rgb(255, 255, 255)" : "rgb(29,31,43)",
          color: mode ? "white" : "rgb(48,51,70)",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleaddchat();
          }
        }}
      />
      <IoMdSend
        style={{
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
        }}
        onClick={handleaddchat}
      />
    </Main>
  );
};

const Main = styled.div`
  height: 10vh;
  width: 74.5vw;
  display: flex;
  gap: 0.1vw;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  @media screen and (max-width: 1000px) {
    height: 8vh;
    width: 77vw;
    border: none;
  }
  input {
    width: 66vw;
    height: 6vh;
    border: none;
    text-indent: 1vw;
    font-family: "Poppins";
    border-radius: 0.4rem;
    &::-webkit-input-placeholder {
      color: #919191;
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1000px) {
      height: 4vh;
      width: 60vw;
      font-size: small;
    }
  }
  svg {
    font-size: xx-large;
    cursor: pointer;
    @media screen and (max-width: 1000px) {
      font-size: x-large;
    }
  }
`;
