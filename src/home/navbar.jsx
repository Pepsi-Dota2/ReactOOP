function NavBar() {
  return (
    <div>
      <nav className=" w-full fixed bg-slate-400 z-10">
        <div className="max-w-[980px] mx-auto justify-between flex h-12 items-center">
          <div>
            <a className="text-xl font-bold" href="">
              Easy Booking
            </a>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a className="hover:text-indigo-600 text-white" href="">
                Overview
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600 text-white" href="">
                Guided Tour
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600 text-white" href="">
                Tech Specs
              </a>
            </li>
            <li>
              <a
                className=" items-center justify-center p-2 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-gray-900 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                href=""
              >
                Booking Now!
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
