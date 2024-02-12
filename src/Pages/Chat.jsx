import React, { useEffect } from "react";
import styled from "styled-components";
import { AllUser } from "../Components/AllUser";
import { SingleChat } from "../Components/SingleChat";
import { useDispatch, useSelector } from "react-redux";
import { changedimension } from "../Store/Actions_Reducers/User";
import { Title } from "../Components/Title";
import { Search } from "../Components/Search";

export const Chat = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { width } = useSelector((state) => state.Dimension);

  const handlewidth = () =>
    dispatch(
      changedimension({ height: window.innerHeight, width: window.innerWidth })
    );

  useEffect(() => {
    window.addEventListener("resize", handlewidth);
    return () => window.removeEventListener("resize", handlewidth);
  }, [width]);

  return (
    <Main>
      <AllChat
        style={{
          background: mode ? "rgba(47, 47, 50, 1)" : "rgba(242, 240, 240, 0.8)",
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
        }}
      >
        <Title />
        <Search />
        <AllUser />
      </AllChat>
      <SingleChat />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const AllChat = styled.div`
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  scroll-behavior: auto;
  background-color: colors[mode];
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
