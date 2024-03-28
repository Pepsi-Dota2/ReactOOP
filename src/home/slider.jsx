import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "",
      perView: 2,
      autoplay: 1500,
      animationDuration: 700,
      gap: 40,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="relative w-800 glide-01 mx-auto px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 bg-gray-50">
      {/*    <!-- Slides --> */}
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="  whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          <li>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg"
              className="w-full max-w-full max-h-full m-auto"
            />
          </li>
          <li>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg"
              className="w-full max-w-full max-h-full m-auto"
            />
          </li>
          <li>
            <img
              src="https://insidersutah.com/wp-content/uploads/2022/11/Sheraton-Salt-Lake-City-728x410.jpg"
              className="w-full max-w-full max-h-full m-auto"
            />
          </li>
          <li>
            <img
              src="https://hellosussex.com/wp-content/uploads/2024/02/The-Grand-Hotel-Eastbourne-East-Sussex-728x410.jpg.webp"
              className="w-full max-w-full max-h-full m-auto"
            />
          </li>
          <li>
            <img
              src="https://foreverkaren.com/wp-content/uploads/2023/01/Bellagio-Hotel-in-Las-Vegas-728x410.jpg"
              className="w-full max-w-full max-h-full m-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
