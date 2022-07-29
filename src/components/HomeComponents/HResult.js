import React from "react";
import Card from "./Card";

const HResult = () => {
  return (
    <div className="relative z-0">
      <div className="active-search-ban pt-32 pb-24 px-8 lg:px-20 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 place-content-center mx-auto pb-16">
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
          <Card
            image="./images/property-4.png"
            location="Jersy City, NJ"
            units="89"
            occupancy="50%"
            size="40,233 Sq Ft"
          />
          <Card
            image="./images/property-5.png"
            location="Jersy City, NJ"
            units="89"
            occupancy="50%"
            size="40,233 Sq Ft"
          />
          <Card
            image="./images/property-1.png"
            location="Jersy City, NJ"
            units="89"
            occupancy="50%"
            size="40,233 Sq Ft"
          />
        </div>
        <button className="btn-primary py-4 px-8 lg:px-20">
          View More Listings
        </button>
      </div>
    </div>
  );
};

export default HResult;
