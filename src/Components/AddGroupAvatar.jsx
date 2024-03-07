import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import Dummy from "../Resources/dummy.jpeg";

export const AddGroupAvatar = ({ avatar, setavatar }) => {
  const [image, setimage] = useState(avatar || Dummy);
  const { mode } = useSelector((state) => state.mode);
  const handleavatar = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setimage(reader.result);
    };
  };
  return (
    <Main
      style={{
        background: mode ? "rgb(29,31,43)" : "white",
        color: !mode ? "black" : "white",
      }}
    >
      <label>
        <img src={image} alt="Image" />
        <input type="file" onChange={(e) => handleavatar(e.target.files[0])} />
      </label>
      <Detail>
        <span className="user">Add Your Group Avatar</span>
      </Detail>
    </Main>
  );
};

const Main = styled.div`
  -webkit-transition: -webkit-transform 100s linear;
  height: 8vh;
  width: 20vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: color 0.3s;
  transition: background-color 0.5s;
  cursor: pointer;
  scroll-behavior: smooth;
  border: 1px solid gray;
  border-left: none;

  @media screen and (max-width: 1000px) {
    width: 78vw;
    justify-content: center;
    padding: 0 1vw;
    gap: 2vw;
  }
  img {
    height: 6vh;
    width: 6vh;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
  label {
    display: flex;
    align-items: center;
  }
  input {
    display: none;
    cursor: pointer;
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
