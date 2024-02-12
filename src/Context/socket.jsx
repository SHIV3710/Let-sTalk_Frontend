import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setonlineusers } from "../Store/Actions_Reducers/Chat";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const dispatch = useDispatch();
  const { user, auth } = useSelector((state) => state.User);

  useEffect(() => {
    if (auth) {
      const socket = io(`https://chatapp-backend-gtje.onrender.com`, {
        query: {
          userId: user._id,
        },
      });
      setsocket(socket);

      socket.on("getonlineusers", (users) => {
        dispatch(setonlineusers(users));
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
  }, [auth]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
