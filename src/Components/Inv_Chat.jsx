import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Player } from "video-react";

export const Inv_Chat = ({ idx, data, setimage }) => {
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
          <span style={{ fontWeight: "500" }}>{data.senderId.name}</span>{" "}
          <span style={{ fontSize: "8px" }}>
            {displayHours}:{minutes} {amOrPm}
          </span>
        </span>
        <div className="actual-message">
          {data.message ? (
            <>
              <span
                className="message"
                style={{
                  background:
                    idx % 2 == 0
                      ? mode
                        ? "rgb(103,133,255)"
                        : "linear-gradient(to right, #6a3093, #a044ff)"
                      : mode
                      ? "#4E4E4E "
                      : "rgb(103,133,255)  ",
                  color: idx % 2 == 0 ? "#ffffff" : "rgb(255, 255, 255)",
                }}
              >
                {data.message}
              </span>
            </>
          ) : (
            <>
              {data.media.Type === "image" && (
                <img
                  src={data.media.url}
                  alt=""
                  className="mediaimage"
                  style={{
                    background:
                      idx % 2 === 0
                        ? mode
                          ? "rgb(103,133,255)"
                          : "linear-gradient(to right, #6a3093, #a044ff)  "
                        : mode
                        ? "#4E4E4E "
                        : "rgb(103,133,255)  ",
                    color: idx % 2 === 0 ? "#ffffff" : "rgb(255, 255, 255)",
                  }}
                />
              )}

              {data.media.Type === "video" && (
                <video
                  src={data.media.url}
                  controls
                  className="mediavideo"
                  style={{
                    background:
                      idx % 2 === 0
                        ? mode
                          ? "rgb(103,133,255)"
                          : "linear-gradient(to right, #6a3093, #a044ff)  "
                        : mode
                        ? "#4E4E4E "
                        : "rgb(103,133,255)  ",
                    color: idx % 2 === 0 ? "#ffffff" : "rgb(255, 255, 255)",
                    height: "20vh",
                  }}
                />
              )}

              {data.media.Type === "audio" && (
                <audio
                  src={data.media.url}
                  controls
                  className="mediaaudio"
                  style={{
                    background:
                      idx % 2 === 0
                        ? mode
                          ? "rgb(103,133,255)"
                          : "linear-gradient(to right, #6a3093, #a044ff)  "
                        : mode
                        ? "#4E4E4E "
                        : "rgb(103,133,255)  ",
                    color: idx % 2 === 0 ? "#ffffff" : "rgb(255, 255, 255)",
                  }}
                />
              )}
            </>
          )}
        </div>
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
    font-size: 13px;
    background-color: rgb(50, 50, 50);
    min-height: 3vh;
    min-width: 3vw;
    align-self: flex-end;
    padding: 1vh;
    width: fit-content;
    border-radius: 0.3rem;
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
  .mediaimage {
    height: 30vh;
    padding: 0.1rem;
    border-radius: 0.2rem;
  }
`;
