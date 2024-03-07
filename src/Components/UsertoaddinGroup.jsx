import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddGroupUser } from "./AddGroupUser";

export const UsertoaddinGroup = ({ map, setmap }) => {
  const { users } = useSelector((state) => state.AllUser);
  const { user } = useSelector((state) => state.User);

  return (
    <Main>
      {users ? (
        <>
          {users.map((item, index) => {
            return (
              <div key={item._id}>
                {item._id !== user._id ? (
                  <>
                    <AddGroupUser
                      user={item}
                      map={map}
                      setmap={setmap}
                      key={item._id}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </>
      ) : (
        <></>
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
