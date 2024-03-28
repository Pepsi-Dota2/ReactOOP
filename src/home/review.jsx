export default function Review() {
  return (
    <div>
      <div class="grid grid-cols-2  ">
        <div class=" rounded-l-lg bg-orange-100">
          <img
            src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"
            alt=""
            className="object-cover 
          "
          />
        </div>
        <div class=" row-span-3 rounded-r-lg bg-orange-400 pt-4 ">
          <div className="">
            <img
              src={require("../img/man.png")}
              alt=""
              className="w-40 m-auto"
            />
          </div>
          <div className="row-span-3 text-center">customer</div>
          <div className="row-span-3 text-center pr-10 pl-10 pt-4 subpixel-antialiased italic tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            voluptates rem nisi ullam ratione dolore corrupti dolor aliquam
            aperiam nulla eligendi eos, voluptate consequatur quasi quod
            officiis sapiente. Cum, facilis!
          </div>
          <br />
          <div className="text-center">@2021</div>
        </div>
      </div>
    </div>
  );
}
