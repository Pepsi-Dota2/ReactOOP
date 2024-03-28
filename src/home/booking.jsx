import chooseBookingHotel from "../model/ChooseHotel";
export default function Booking() {
  return (
    <div className="pl-6 pr-6 pt-4">
      <div className="font-bold text-3xl mb-4">Best Quality Hotels</div>
      <div className=" font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sint
        consectetur voluptatem perferendis
      </div>
      <div className="flex flex-rows-3 flex-flow-col  justify-between pt-4">
        <div className=" flex row-span">
          <div className="grid  grid-flow-col gap-10">
            <button className="border bg-blue-100 p-1 pl-6 pr-6 rounded-md  hover:border-gray-400 ">
              1 star
            </button>
            <button className="border bg-blue-100 p-1 pl-6 pr-6 rounded-md  hover:border-gray-400 ">
              2 star
            </button>
            <button className="border bg-blue-100 p-1 pl-6 pr-6 rounded-md  hover:border-gray-400 ">
              3 star
            </button>
            <button className="border bg-blue-100 p-1 pl-6 pr-6 rounded-md  hover:border-gray-400 ">
              4 star
            </button>
            <button className="border bg-blue-100 p-1 pl-6 pr-6 rounded-md  hover:border-gray-400 ">
              5 star
            </button>
          </div>
        </div>
        <div className="flex row-span col-span- ">
          <div className=" border bg-orange-100 p-1 pl-6 pr-6 rounded-md  hover:border-gray-400">
            View All
          </div>
        </div>
      </div>
      <div class="max-w-auto grid grid-rows-3 grid-flow-col gap-4 pt-4 ">
        {chooseBookingHotel.map((book) => (
          <div className="row-span-3 hover:ring-1 shadow-lg rounded overflow-hidden">
            <img src={book.imgSrc} alt="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{book.title}</div>
            </div>
            <p className="pl-6 pr-6">{book.describe}</p>
            <div class=" flex px-6 pt-4 pb-2 justify-between">
              <span class="flex inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {book.price}
              </span>
              <span class="flex inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {book.book}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
