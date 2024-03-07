import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { UsertoaddinGroup } from "./UsertoaddinGroup";
import { AddGroupSearch } from "./AddGroupSearch";
import { AddGroupAvatar } from "./AddGroupAvatar";
import Dummy from "../Resources/dummy.jpeg";

export const CreateaGroup = () => {
  const [map, setmap] = useState(new Map());
  const [avatar, setavatar] = useState(Dummy);
  return (
    <Main>
      <Title />
      <AddGroupSearch map={map} avatar={avatar} />
      <AddGroupAvatar setavatar={(avatar, setavatar)} />
      <UsertoaddinGroup map={map} setmap={setmap} />
    </Main>
  );
};

const Main = styled.div`
  height: 98vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid gray;
  gap: 2vh;
  scroll-behavior: auto;
  background-color: colors[mode];
  @media screen and (max-width: 1000px) {
    width: 80vw;
    z-index: 1;
  }
`;
