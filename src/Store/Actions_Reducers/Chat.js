import { createSlice } from "@reduxjs/toolkit";

const sendmessage = createSlice({
  name: "sendmessage",
  initialState: {
    load: false,
    conversations: [],
    error: null,
  },
  reducers: {
    addmessagetoconv: (state, action) => {
      state.load = true;
      state.conversations = [...state.conversations, action.payload];
    },
    currconv: (state, action) => {
      state.load = false;
      state.conversations = action.payload;
    },
    currconverror: (state, action) => {
      state.error = action.payload;
      state.conversations = [];
    },
    clearchaterror: (state, action) => {
      state.error = null;
      state.conversations = [];
    },
  },
});

export const { addmessagetoconv, currconv, currconverror, clearchaterror } =
  sendmessage.actions;
export const Conversation = sendmessage.reducer;

const socket = createSlice({
  name: "socket",
  initialState: {
    loading: false,
    socket: null,
    onlineusers: [],
  },
  reducers: {
    setsocket: (state, action) => {
      state.socket = action.payload;
    },
    setonlineusers: (state, action) => {
      state.onlineusers = action.payload;
    },
  },
});

export const { setsocket, setonlineusers } = socket.actions;
export const Socket = socket.reducer;
