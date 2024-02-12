import React, { useEffect } from "react";
import styled from "styled-components";
import { User } from "./User";
import { alluser, login } from "../Actions/User";
import { useDispatch, useSelector } from "react-redux";

export const AllUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.AllUser);
  const { user } = useSelector((state) => state.User);
  useEffect(() => {
    dispatch(alluser());
  }, [users.length === 0]);
  return (
    <Main>
      {users.map((item, index) => {
        if (item._id !== user._id)
          return (
            <div key={index}>
              <User key={index + 1} user={item} />
              <div
                key={index + 2}
                style={{
                  height: "0.5px",
                  width: "100%",
                  background: "gray",
                }}
              ></div>
            </div>
          );
        else return <div key={index} style={{ display: "none" }}></div>;
      })}
    </Main>
  );
};

const Main = styled.div`
  height: 90vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
