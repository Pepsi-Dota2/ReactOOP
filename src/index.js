import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Room from "./home/room";
import NavBar from "./home/navbar";
import Slider from "./home/slider";
import TestApi from "./service/fakeApi";
import Detail from "./home/detail";
import Service from "./home/service";
import Sponsor from "./home/sponsor";
import UploadImg from "./upload/upload_img";
import Review from "./home/review";
import Booking from "./home/booking";
import Footer from "./home/footer";
import Letgo from "./model/hotel";
import moreInfo from "./moreDetail";
import Rou from "./routerBooking";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <NavBar />
    <Slider />
    <Detail />
    <Service />
    <Room />
    <Sponsor />
    <Review /> */}
    <Rou/>
    {/* <Footer />
    <UploadImg />
    <TestApi /> */}
  </React.StrictMode>
);

// const second = ReactDOM.createRoot(document.getElementById("root"));
// second.render(
//   <React.StrictMode>
//     {/* <Rou /> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
