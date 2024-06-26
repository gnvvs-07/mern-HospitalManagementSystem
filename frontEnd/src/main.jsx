import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextPrivider } from "./context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextPrivider>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={300}
          closeOnClick
          pauseOnFocusLoss={false}
        />
        <App />
      </AuthContextPrivider>
    </BrowserRouter>
  </React.StrictMode>
);
