import listService from "../model/service";

export default function Service() {
  return (
    <div className="pt-10">
      <div className="grid grid-rows-3 grid-flow-col px-10  ">
        <div className="row-span-3 text-3xl">Facilities & Services</div>
      </div>
      <div className="flex px-10 justify-between">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Provident voluptates nemo explicabo repellendus ducimus modi maiores
          <br /> fuga labore accusantium aspernatur?
        </div>
        <button
          type="button"
          class=" w-30 h-10 flex  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-orange-100    "
        >
          View All
        </button>
      </div>
      <div class="grid grid-rows-3 grid-flow-col gap-10 p-6 ">
        {listService.map((service) => (
          <div class="row-span-3   rounded-lg bg-white ring-2 ring-slate-900/5 shadow-lg space-y-3 hover:bg-orange-50 hover:bg-orange-50">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <img
                  src={service.imageSrc}
                  alt=""
                  className=" mx-auto rounded-full w-40 h-40"
                />
                <div class="font-bold text-xl mb-2 text-center ">
                  {service.title}
                </div>
                <p class="text-gray-700 text-base text-center">
                  {service.desc}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
