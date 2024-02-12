import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Inv_Chat = ({ idx, data }) => {
  const createdAtDate = new Date(data.createdAt);
  const { mode } = useSelector((state) => state.mode);
  const hours = createdAtDate.getHours();
  const minutes = createdAtDate.getMinutes();
  let amOrPm = "am";
  let displayHours = hours;
  if (hours > 12) {
    displayHours = hours - 12;
    amOrPm = "pm";
  }
  return (
    <>
      <Main
        style={{
          alignSelf: idx % 2 == 0 ? "end" : "start",
          backgroundColor:
            idx % 2 == 0 ? "rgba(187, 61, 246, 1)" : "rgba(47, 47, 50, 1)",
          color: "white",
        }}
      >
        <span>{data.message}</span>
        <Span
          style={{
            color: mode ? "rgba(47, 47, 50, 1)" : "white",
          }}
        >
          {displayHours}:{minutes} {amOrPm}
        </Span>
      </Main>
    </>
  );
};

const Main = styled.div`
  width: fit-content;
  min-width: 3vw;
  max-width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  border-radius: 0.2rem;
  background-color: red;
  font-size: x-small;
  overflow-wrap: break-word;
  word-break: break-all;
  align-items: flex-end;
  gap: 0.5vw;
  padding: 1vh;
  position: relative;
`;

const Span = styled.span`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  font-family: "Poppins";
  font-size: 7px;
  left: 80%;
`;
