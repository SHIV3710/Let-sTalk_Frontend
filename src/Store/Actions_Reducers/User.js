import { createSlice } from "@reduxjs/toolkit";

const mode = createSlice({
  name: "mode",
  initialState: {
    mode: false,
  },
  reducers: {
    changemode: (state, action) => {
      state.mode = !state.mode;
    },
  },
});

export const { changemode } = mode.actions;
export const Mode = mode.reducer;

const usertotalk = createSlice({
  name: "usertotalk",
  initialState: {
    user: null,
  },
  reducers: {
    chatwith: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { chatwith } = usertotalk.actions;
export const Chatwith = usertotalk.reducer;

const windowDimensions = createSlice({
  name: "Dimensions",
  initialState: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
  reducers: {
    changedimension: (state, action) => {
      state.height = action.payload.height;
      state.width = action.payload.width;
    },
  },
});

export const { changedimension } = windowDimensions.actions;
export const windowDi = windowDimensions.reducer;

const user = createSlice({
  name: "user",
  initialState: {
    auth: false,
    user: null,
    error: null,
  },
  reducers: {
    loginuser: (state, action) => {
      state.auth = true;
      state.user = action.payload;
    },
    loginuserError: (state, action) => {
      state.auth = false;
      state.error = action.payload;
    },
    logoutuser: (state, action) => {
      state.auth = false;
      state.user = null;
    },
    clearerror: (state, action) => {
      state.error = null;
    },
  },
});

export const { loginuser, loginuserError, logoutuser, clearerror } =
  user.actions;
export const User = user.reducer;

const alluser = createSlice({
  name: "alluser",
  initialState: {
    users: [],
    error: null,
  },
  reducers: {
    getalluser: (state, action) => {
      state.users = action.payload;
    },
    getallusererror: (state, action) => {
      state.error = action.payload;
    },
    clearerroralluser: (state, action) => {
      state.error = null;
    },
  },
});

export const { getalluser, getallusererror } = alluser.actions;
export const AllUser = alluser.reducer;
