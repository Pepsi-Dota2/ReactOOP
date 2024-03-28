import hotels from "../model/model_hotel";
export default function Room() {
  return (
    <div className="bg-gray-50 px-6 ">
      {hotels.map((hotel) => (
        <div class="flex flex-row py-4  ">
          <div class="basis-1/2 rounded-lg">
            <div>
              <img
                src={hotel.imgSrc}
                alt=""
                className="object-cover h-100 w-full rounded-l-lg "
              />
            </div>
          </div>
          <div class="basis-1/2  rounded-r-lg px-16">
            <div className=" text-4xl font-bold">{hotel.title}</div>
            <div className="py-6">{hotel.desc}</div>
            <div className="flex py-8">
              <div className=" flex flex-col basis-1/2">
                <div className="text-2xl font-bold mb-2"> {hotel.userUse} </div>
                <div className="text-sm"> {hotel.userUseDesc} </div>
              </div>
              <div className="flex flex-col basis-1/2 ">
                <div className="text-2xl font-bold mb-2">
                  {" "}
                  {hotel.userReview}{" "}
                </div>
                <div className="text-sm"> {hotel.userReviewHappy} </div>
              </div>
              <div className="flex flex-col basis-1/2">
                <div className="text-2xl font-bold mb-2">
                  {" "}
                  {hotel.userActive}{" "}
                </div>
                <div className="text-sm"> {hotel.userActiveDesc} </div>
              </div>
              <div className="flex flex-col basis-1/2">
                <div className="text-2xl font-bold mb-2">
                  {" "}
                  {hotel.hotelOpen}{" "}
                </div>
                <div className="text-sm"> {hotel.hotelDesc} </div>
              </div>
            </div>
            <div className="pt-10">
              <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
                {hotel.moreInfo}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
