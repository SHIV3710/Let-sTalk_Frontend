import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login, register } from "../Actions/User";

export const LoginCredentials = ({ value }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async () => {
    if (!name && email && password) {
      await dispatch(login(email, password));
      navigate("/chat");
    } else if (name && email && password) {
      await dispatch(register(name, email, password));
      navigate("/chat");
    }
  };
  return (
    <Main>
      <Title>Sign in</Title>
      <UserDetails>
        <Input style={{ display: value ? "flex" : "none" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </Input>
        <Input>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </Input>
        <Input>
          <input
            type={!show ? "password" : "text"}
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          {show ? (
            <>
              <IoMdEye onClick={() => setshow(!show)} />
            </>
          ) : (
            <>
              <IoMdEyeOff
                onClick={() => {
                  setshow(!show);
                }}
              />
            </>
          )}
        </Input>
      </UserDetails>
      <Submit onClick={handlesubmit}>Sign in</Submit>
    </Main>
  );
};
const Main = styled.div`
  height: 90vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  justify-content: center;
  align-items: start;
  @media screen and (max-width: 1000px) {
    height: 50vh;
    width: 60vw;
    gap: 1vh;
    justify-content: start;
  }
`;

const UserDetails = styled.form`
  width: 25vw;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  transition: 0.5s;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: 60vw;
    height: fit-content;
    gap: 2vh;
  }
`;
const Title = styled.div`
  font-size: x-large;
  text-align: center;
  font-weight: bold;
  text-align: start;
`;

const Input = styled.div`
  height: 8vh;
  width: 25vw;
  border-radius: 0.5rem;
  border: none;
  align-self: center;
  position: relative;
  font-family: "Poppins", Arial, sans-serif;
  border: 1px solid rgb(209, 206, 206);
  box-shadow: rgba(94, 94, 219, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  input {
    height: 8vh;
    width: 25vw;
    padding: 0;
    border-radius: 0.5rem;
    text-indent: 0.5vw;
    border: none;
    font-family: "Poppins", Arial, sans-serif;
    border: none;
    &::placeholder {
      color: #000000;
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1000px) {
      width: 60vw;
      height: 6vh;
      font-size: medium;
    }
  }
  svg {
    font-size: x-large;
    position: absolute;
    top: 35%;
    left: 85%;
    cursor: pointer;
    @media screen and (max-width: 1000px) {
      top: 40%;
      left: 90%;
    }
    @media screen and (max-width: 600px) {
      top: 40%;
      left: 88%;
      font-size: medium;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 60vw;
    height: 6vh;
    font-size: medium;
  }
`;

const Submit = styled.button`
  width: 25vw;
  height: 7vh;
  border-radius: 1rem;
  border: none;
  margin-top: 2vh;
  cursor: pointer;
  /* align-self: center; */
  font-family: "Poppins", Arial, sans-serif;
  background-color: #4461f2;
  color: white;
  @media screen and (max-width: 1000px) {
    width: 25vw;
    height: 5vh;
    border-radius: 0.2rem;
    font-size: large;
  }
`;
