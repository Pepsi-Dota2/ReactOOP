import SponsorLogo from "../model/sponsor.model";
export default function Sponsor() {
  return (
    <div className="flex justify-around  m-20 ">
      {SponsorLogo.map((imgLogo) => (
        <div class="flex -cols-5 gap-4 ">
          <img src={imgLogo.imgSrc} alt="" className=" flex w-40 h-40 bg-transparent" />
        </div>
      ))}
    </div>
  );
}
