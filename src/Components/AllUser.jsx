import React from "react";
import styled from "styled-components";
import { User } from "./User";
import { useDispatch, useSelector } from "react-redux";
import { Group } from "./Group";
import { LoadingUser } from "./LoadingUser";
import { currconv } from "../Store/Actions_Reducers/Chat";

export const AllUser = () => {
  const dispatch = useDispatch();
  const { users, value, groups, grouploading } = useSelector(
    (state) => state.AllUser
  );
  const { user } = useSelector((state) => state.User);
  return (
    <Main onClick={() => dispatch(currconv(""))}>
      {value ? (
        <>
          <>
            {users.map((item, index) => {
              if (item._id !== user._id)
                return (
                  <div key={index}>
                    <User key={index + 1} user={item} />
                  </div>
                );
              else return <div key={index} style={{ display: "none" }}></div>;
            })}
          </>
        </>
      ) : (
        <>
          {grouploading ? (
            <LoadingUser />
          ) : (
            <>
              {groups.map((item, index) => {
                return (
                  <div key={index}>
                    <Group key={index + 1} user={item} />
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </Main>
  );
};

const Main = styled.div`
  height: 80vh;
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
    width: 80vw;
  }
`;
