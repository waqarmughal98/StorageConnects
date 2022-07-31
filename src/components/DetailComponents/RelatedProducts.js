import React from "react";
import Card from "../HomeComponents/Card";

const RelatedProducts = () => {
  return (
    <div className="bg-viewb py-20 px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-white text-3xl font-semibold">
          Other Similar Self Storages For Sale
        </h1>

        <div className="flex justify-end">
          <button className="btn-primary inline-flex items-center">
            <span className="mr-2">View More</span>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.32738 13.9999C1.49815 14.0004 1.66688 13.9675 1.82117 13.9034C1.97546 13.8394 2.11139 13.746 2.21897 13.63L7.73997 7.63053C7.90809 7.45162 8 7.22719 8 6.99559C8 6.76399 7.90809 6.53957 7.73997 6.36065L2.02465 0.361218C1.83063 0.157021 1.55182 0.0286085 1.24957 0.0042311C0.947313 -0.0201463 0.646366 0.0615079 0.412933 0.23123C0.179501 0.400953 0.0327044 0.644841 0.00483656 0.909243C-0.0230312 1.17364 0.0703135 1.4369 0.264335 1.6411L5.37383 7.00059L0.435795 12.3601C0.296018 12.5069 0.207228 12.6856 0.179933 12.8751C0.152637 13.0646 0.187976 13.257 0.281772 13.4296C0.375566 13.6021 0.52389 13.7475 0.709193 13.8485C0.894495 13.9496 1.10902 14.0022 1.32738 13.9999Z"
                fill="#000103"
                fillOpacity="0.7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center place-content-center text-center gap-2 py-16 mx-auto">
        <Card
          image="./images/property-1.png"
          location="Jersy City, NJ"
          units="89"
          occupancy="50%"
          size="40,233 Sq Ft"
        />
        <Card
          image="./images/property-2.png"
          location="Jersy City, NJ"
          units="89"
          occupancy="50%"
          size="40,233 Sq Ft"
        />
        <Card
          image="./images/property-3.png"
          location="Jersy City, NJ"
          units="89"
          occupancy="50%"
          size="40,233 Sq Ft"
        />
      </div>
    </div>
  );
};

export default RelatedProducts;
