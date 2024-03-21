import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Shirt from "./component/shirt";
import NavBar from "./component/navbar";
import TestApi from "./service/fakeApi";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Shirt />
    <TestApi />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
