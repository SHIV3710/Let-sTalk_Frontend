import { configureStore } from "@reduxjs/toolkit";
import {
  AllUser,
  Chatwith,
  Mode,
  User,
  windowDi,
} from "./Actions_Reducers/User";
import { Conversation, Socket } from "./Actions_Reducers/Chat";
const store = configureStore({
  reducer: {
    mode: Mode,
    chatwith: Chatwith,
    Dimension: windowDi,
    User: User,
    AllUser: AllUser,
    Conversation: Conversation,
    Socket: Socket,
  },
});
export default store;
