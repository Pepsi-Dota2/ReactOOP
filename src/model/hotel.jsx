import React from "react";
import { Outlet, Link } from "react-router-dom";

class Hotel {
  constructor(img, title, desc, price, book) {
    this.img = img;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.book = book;
  }
}

// Component to render a Hotel instance
function HotelComponent({ hotel }) {
  return (
    <div className="pl-6 pr-6 pt-4">
      <div class="max-w-auto grid grid-rows-3 grid-flow-col gap-4 pt-4 ">
        <div className="row-span-3 hover:ring-1 shadow-lg rounded overflow-hidden">
          <img src={hotel.img} alt="" className="object-cover h-100 w-full rounded-l-lg " />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{hotel.title}</div>
          </div>
          <p className="pl-6 pr-6">{hotel.desc}</p>
          <div class=" flex px-6 pt-4 pb-2 justify-between">
            <span class="flex inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {hotel.price}
            </span>
            <span class="flex inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {hotel.book}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Create an instance of the Hotel class
const HotelStar1 = new Hotel(
  "https://img.freepik.com/free-photo/ocean-travel-modern-nobody-infinity_1203-4520.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais",
  "hello world",
  "welcome",
  "$300",
  "Booking Now"
);
// Create an instance of the Hotel class
const HotelStar2 = new Hotel(
  "https://img.freepik.com/free-photo/ocean-travel-modern-nobody-infinity_1203-4520.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais",
  "hello world",
  "welcome",
  "$300",
  "Booking Now"
);
const HotelStar3 = new Hotel(
  "https://img.freepik.com/free-photo/ocean-travel-modern-nobody-infinity_1203-4520.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais",
  "hello world",
  "welcome",
  "$300",
  "Booking Now"
);

// Render the HotelComponent with the Hotel instance
function Letgo() {
  return (
    <div className=" grid grid-rows-3 grid-flow-col  ">
      <div className="row-span-3   rounded ">
        <Link to="/blogs">
          <HotelComponent hotel={HotelStar1} />
        </Link>
      </div>
      <div className="row-span-3   rounded ">
        <Link to="home">
          <HotelComponent hotel={HotelStar2} />
        </Link>
      </div>
      <div className="row-span-3   rounded ">
        <Link to="detailHotel">
          <HotelComponent hotel={HotelStar3} />
        </Link>
      </div>
    </div>
  );
}

export default Letgo;
