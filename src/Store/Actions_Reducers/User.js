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
    group: null,
    loading: false,
  },
  reducers: {
    chatwithloading: (state, action) => {
      state.loading = true;
    },
    chatwith: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    grouptalk: (state, action) => {
      state.group = action.payload;
      state.loading = false;
    },
  },
});

export const { chatwith, grouptalk, chatwithloading } = usertotalk.actions;
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
    loading: false,
    auth: false,
    user: null,
    error: null,
  },
  reducers: {
    loadinguser: (state, action) => {
      state.loading = true;
    },
    loginuser: (state, action) => {
      state.loading = false;
      state.auth = true;
      state.user = action.payload;
    },
    loginuserError: (state, action) => {
      state.loading = false;
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

export const {
  loginuser,
  loginuserError,
  logoutuser,
  clearerror,
  loadinguser,
} = user.actions;
export const User = user.reducer;

const alluser = createSlice({
  name: "alluser",
  initialState: {
    userloading: false,
    grouploading: false,
    users: [],
    error: null,
    groups: [],
    value: 1,
    create: false,
    createloading: false,
  },
  reducers: {
    creategrouploading: (state, action) => {
      state.createloading = true;
    },
    creategroup: (state, action) => {
      state.create = action.payload;
      state.createloading = false;
    },
    creategroupfailure: (state, action) => {
      state.createloading = false;
    },
    getuserloading: (state, action) => {
      state.userloading = true;
    },
    getgrouploading: (state, action) => {
      state.grouploading = true;
    },
    getalluser: (state, action) => {
      state.users = action.payload;
      state.userloading = false;
    },
    getallusererror: (state, action) => {
      state.error = action.payload;
      state.users = [];
      state.groups = [];
      state.userloading = false;
    },
    clearerroralluser: (state, action) => {
      state.error = null;
      state.value = 1;
    },
    getallgroups: (state, action) => {
      state.groups = action.payload;
      state.grouploading = false;
    },
    changevalue: (state, action) => {
      state.value = action.payload;
      state.grouploading = false;
      state.create = false;
    },
  },
});

export const {
  getalluser,
  getallusererror,
  getallgroups,
  changevalue,
  getuserloading,
  getgrouploading,
  creategroup,
  creategroupfailure,
  creategrouploading,
} = alluser.actions;
export const AllUser = alluser.reducer;
