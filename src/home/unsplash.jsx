// PhotoGallery.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoGallery() {
  const [photos, setPhotos, isLoading] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos?page=1&per_page=10&client_id=FJanja4mv2az58ZCFlWdvazhRyxHmpK3fAzUh0aYF0c"
        );
        if (isLoading) {
          return (
            <div class="flex items-center justify-center">
              <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
              >
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          );
        }
        return setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="bg-white">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-4  gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative">
              <div className=" mt-4 rounded-md bg-gray-200 ">
                <img
                  key={photo.id}
                  src={photo.links.download}
                  alt={photo.alt_description}
                  className=" mt-4 h-full w-full object-cover object-center lg:h-3000 lg:w-300"
                />
              </div>
              <div className=" rounded-md bg-gray-200 ">
                <img
                  key={photo.id}
                  src={photo.urls.thumb}
                  alt={photo.alt_description}
                  className=" mt-4 h-full w-full object-cover object-center lg:h-3000 lg:w-300"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {photo.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
