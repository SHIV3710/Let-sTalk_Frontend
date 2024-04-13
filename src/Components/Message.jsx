import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { GoPaperclip } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineAudiotrack } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { GoSmiley } from "react-icons/go";
import { Picker } from "emoji-mart";
import {
  getallconv_group,
  sendmessage,
  sendmessage_group,
} from "../Actions/Chat";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import EmojiPicker from "emoji-picker-react";
import { currconverror } from "../Store/Actions_Reducers/Chat";

export const Message = () => {
  const dispatch = useDispatch();
  const [currchar, setcurrchat] = useState("");
  const [currmedia, setmedia] = useState("");
  const [showtype, setshowtype] = useState(false);
  const [typeofmedia, settypeofmedia] = useState("");
  const [showemogi, setshowemogi] = useState(false);
  const { mode } = useSelector((state) => state.mode);
  const { user, group } = useSelector((state) => state.chatwith);

  const handleaddchat = async () => {
    if (user) {
      if (currchar) {
        dispatch(sendmessage(user._id, currchar, currmedia, "image"));
        setcurrchat("");
      }
    } else {
      dispatch(sendmessage_group(group._id, currchar, currmedia, "image"));
      setcurrchat("");
      dispatch(getallconv_group(group._id));
    }
  };

  const handleaddchatmedia = (file, type) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setmedia(reader.result);
      settypeofmedia(type);
    };
  };

  useEffect(() => {
    if (user) {
      if (currmedia) {
        if (currmedia.length > 100000) {
          dispatch(currconverror(`High Payload`));
        } else {
          dispatch(sendmessage(user._id, currchar, currmedia, typeofmedia));
          setmedia("");
          settypeofmedia("");
        }
      }
    } else {
      if (currmedia.length > 100000) {
        dispatch(currconverror(`High Payload`));
      } else {
        dispatch(
          sendmessage_group(group._id, currchar, currmedia, typeofmedia)
        );
        setcurrchat("");
        dispatch(getallconv_group(group._id));
      }
    }
  }, [currmedia]);
  return (
    <Main>
      <HiOutlineFaceSmile
        onClick={() => {
          setshowemogi(!showemogi);
          setshowtype(false);
        }}
      />
      <div
        className="media"
        style={{
          display: showtype ? "flex" : "none",
          position: "absolute",
          background: !mode ? "rgb(246, 246, 246)" : "rgb(52, 56, 76)",
          color: mode ? "white" : "rgb(48,51,70)",
        }}
      >
        <ul>
          <li>
            <label>
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => handleaddchatmedia(e.target.files[0], "image")}
              />
              <CiImageOn />
              Image
            </label>
          </li>
          <li>
            <label>
              <input
                type="file"
                style={{ display: "none" }}
                accept="video/*"
                onChange={(e) => handleaddchatmedia(e.target.files[0], "video")}
              />
              <CiVideoOn />
              Video
            </label>
          </li>
          <li>
            <label>
              <input
                type="file"
                style={{ display: "none" }}
                accept="audio/*"
                onChange={(e) => handleaddchatmedia(e.target.files[0], "audio")}
              />
              <MdOutlineAudiotrack />
              Audio
            </label>
          </li>
        </ul>
      </div>
      <GoPaperclip
        onClick={() => {
          setshowemogi(false);
          setshowtype(!showtype);
        }}
      />
      <input
        type="text"
        onBlur={(e) => e.target.focus()}
        placeholder="Type your message..."
        value={currchar}
        onChange={(e) => setcurrchat(e.target.value)}
        style={{
          background: !mode ? "rgb(255, 255, 255)" : "rgb(29,31,43)",
          color: mode ? "white" : "rgb(48,51,70)",
          zIndex: 100,
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleaddchat();
          }
        }}
      />
      <IoMdSend
        style={{
          color: mode ? "white" : "rgba(47, 47, 50, 1)",
        }}
        onClick={handleaddchat}
      />
      {showemogi ? (
        <>
          <EmojiPicker
            onEmojiClick={(emogi) => setcurrchat((prev) => prev + emogi.emoji)}
            style={{ position: "absolute" }}
            autoFocusSearch={true}
            theme={mode ? "dark" : "light"}
            emojiStyle="apple"
            defaultSkinTone="neutral"
            width={400}
            height={300}
            lazyLoadEmojis={false}
            searchPlaceholder="Search"
            suggestedEmojisMode="frequent"
            skinTonesDisabled={true}
            searchDisabled={true}
            skinTonePickerLocation="SEARCH"
            previewConfig={{
              defaultEmoji: "",
              defaultCaption: "",
              showPreview: false,
            }}
            emojiVersion=""
            className="emogi"
            categories={[
              "suggested",
              "smileys_people",
              "animals_nature",
              "food_drink",
              "travel_places",
              "activities",
              "objects",
              "symbols",
              "flags",
            ]}
          />
        </>
      ) : (
        <></>
      )}
    </Main>
  );
};

const Main = styled.div`
  height: 10vh;
  width: 74.5vw;
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  position: relative;
  @media screen and (max-width: 1000px) {
    height: 8vh;
    width: 77vw;
    border: none;
  }
  .emogi {
    top: -500%;
    z-index: 999;
    left: 0.5%;
  }
  .media {
    top: -200%;
    left: 0.5%;
    gap: 1vh;
    border-radius: 0.4rem;
    height: 18vh;
    width: 7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      list-style: none;
      font-family: "Poppins";
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: small;
      gap: 1vh;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        padding: 0.2rem;
        width: 6vw;
        border-radius: 0.5rem;
        cursor: pointer;
        &:hover {
          background-color: #cac8e2;
        }
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5vw;
        }
      }
    }
  }

  input {
    width: 64vw;
    height: 6vh;
    border: none;
    text-indent: 1vw;
    font-family: "Poppins";
    border-radius: 0.4rem;
    &::-webkit-input-placeholder {
      color: #919191;
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1000px) {
      height: 4vh;
      width: 60vw;
      font-size: small;
    }
  }
  svg {
    font-size: x-large;
    cursor: pointer;
    @media screen and (max-width: 1000px) {
      font-size: x-large;
    }
  }
`;
