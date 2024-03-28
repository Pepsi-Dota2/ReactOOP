export default function DetailHotel() {
    return(
        <div className="bg-gray-50">
        <div className="mx-auto  px-4  sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="grid grid-rows grid-flow-col gap-4">
            <h2 className=" col-span-4  text-2xl font-bold tracking-tight text-gray-900 tracking-wide">
              Find Your Best Hotel
              <h2 className="row-span text-2xl font-bold tracking-tight text-gray-900 tracking-wide">
                For Deals
              </h2>
              <p className="row-span  text-sm font-thin">
                After hours of browsing travel websites and reading reviews, Emily <br />
                and Alex finally settled on a picturesque coastal town for their
                getaway.
              </p>
            </h2>
  
            <div className="col-span-8">
              <div class=" rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                </div>
                <div>
                  <form action="">
                    <div className="w-72">
                      <input label="Username" />
                    </div>
                  </form>
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
          </div>
  
          <div className="pt-6">
            <div class="grid grid-rows grid-flow-col gap-4">
              <div class="col-span-9 row-span-3 bg-gray-200">
                <img
                  src="https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg"
                  alt=""
                  className="h-auto w-auto object-cover object lg:h-auto lg:w-auto rounded-md"
                />
              </div>
              <div class="col-span-5 bg-gray-200">
                <img
                  src="https://www.riazorhotel.com/wp-content/uploads/2023/10/Suite-hotel-Riazor2807-1620x1080.webp"
                  alt=""
                  className=" h-auto w-auto object-cover object lg:h-auto lg:w-auto rounded-md"
                />
              </div>
              <div class="row-span-2 col-span-5 bg-gray-200">
                <img
                  src="https://image-tc.galaxy.tf/wijpeg-6rc902e9t312jljywldrat8xl/york-pool-dusk-ok.jpg"
                  alt=""
                  className="h-auto w-auto object-cover object lg:h-auto lg:w-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
