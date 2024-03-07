import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Inv_Chat = ({ idx, data }) => {
  const createdAtDate = new Date(data.createdAt);
  const { mode } = useSelector((state) => state.mode);
  const { user: loginuser } = useSelector((state) => state.User);
  const hours = createdAtDate.getHours();
  const minutes = createdAtDate.getMinutes();
  let amOrPm = "am";
  let displayHours = hours;
  if (hours > 12) {
    displayHours = hours - 12;
    amOrPm = "pm";
  }
  return (
    <Main
      style={{
        alignSelf: idx % 2 == 0 ? "flex-end" : "flex-start",
        flexDirection: idx % 2 == 0 ? "row-reverse" : "row",
      }}
    >
      <Image
        src={
          data && data.senderId._id !== loginuser._id
            ? data.senderId.avatar.url
            : loginuser.avatar.url
        }
      ></Image>
      <Message>
        <span
          className="time"
          style={{ flexDirection: idx % 2 == 0 ? "row-reverse" : "row" }}
        >
          <span>{data.senderId.name}</span>{" "}
          <span style={{ fontSize: "7px" }}>
            {displayHours}:{minutes} {amOrPm}
          </span>
        </span>
        <span
          className="message"
          style={{
            background:
              idx % 2 == 0
                ? mode
                  ? "rgb(103,133,255)"
                  : "#dedada  "
                : mode
                ? "#4E4E4E "
                : "rgb(103,133,255)  ",
            color: idx % 2 == 0 ? "r#ffffff" : "rgb(255, 255, 255)",
          }}
        >
          {data.message}
        </span>
      </Message>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  height: fit-content;
  gap: 0.5vw;
  font-family: "Poppins";
`;
const Image = styled.img`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  @media screen and (max-width: 1000px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;

  .time {
    display: flex;
    align-items: center;
    gap: 0.5vw;
    font-size: 12px;
    @media screen and (max-width: 1000px) {
      font-size: 7px;
    }
  }

  .message {
    font-size: 12px;
    background-color: rgb(50, 50, 50);
    min-height: 3vh;
    min-width: 3vw;
    align-self: flex-end;
    padding: 1vh;
    width: fit-content;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
      min-height: 2vh;
      padding: 0.5vh;
      min-width: 5vw;
      font-size: 8px;
    }
  }
`;
