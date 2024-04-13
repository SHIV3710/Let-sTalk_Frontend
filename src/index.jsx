import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./index.css";
import { SocketContext, SocketContextProvider } from "./Context/socket.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme>
    <Provider store={store}>
      <SocketContextProvider>
        <App />
        <ToastContainer />
      </SocketContextProvider>
    </Provider>
  </SkeletonTheme>
);
