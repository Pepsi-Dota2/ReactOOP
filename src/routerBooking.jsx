import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Blogs from "./blog";
import Letgo from "./model/hotel";
import DetailHotel from "./booking/detailHotel";

export default function Rou() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Letgo />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="detailHotel" element={<DetailHotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}