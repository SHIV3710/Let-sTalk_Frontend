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
  const { groups } = useSelector((state) => state.AllUser);

  useEffect(() => {
    if (auth) {
      const socket = io(`https://chatapp-backend-gtje.onrender.com`, {
        query: {
          userId: user._id,
        },
      });
      setsocket(socket);

      groups.forEach((element) => {
        socket.on("allgroup", {
          query: {
            groupId: element._id,
          },
        });
      });

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
