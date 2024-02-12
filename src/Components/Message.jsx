import React, { useState } from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getconversation, sendmessage } from "../Actions/Chat";

export const Message = () => {
  const dispatch = useDispatch();
  const [currchar, setcurrchat] = useState("");
  const { mode } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.chatwith);

  const handleaddchat = async () => {
    if (currchar && currchar != "") {
      dispatch(sendmessage(user._id, currchar));
      setcurrchat("");
      dispatch(getconversation(user._id));
    }
  };

  return (
    <Main
      style={{
        background: mode ? "rgba(47, 47, 50, 1)" : "rgba(242, 240, 240, 0.8)",
        color: mode ? "white" : "rgba(47, 47, 50, 1)",
      }}
    >
      <input
        type="text"
        placeholder="Type your message"
        value={currchar}
        onChange={(e) => setcurrchat(e.target.value)}
        style={{
          background: mode ? "#434347" : "rgba(242, 240, 240, 0.8)",
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
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
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1000px) {
    height: 8vh;
    width: 100vw;
  }
  input {
    width: 70vw;
    height: 6vh;
    border: none;
    text-indent: 1vw;
    font-family: "Poppins";
    border-radius: 0.4rem;
    &::-webkit-input-placeholder {
      color: #000000;
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1000px) {
      height: 4vh;
      width: 85vw;
    }
  }
  svg {
    font-size: xx-large;
    cursor: pointer;
  }
`;
