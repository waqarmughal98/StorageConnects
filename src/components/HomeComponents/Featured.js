import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";

const Featured = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
  return (
    <div className="relative pt-28 text-center">
      <img
        src="./images/featured-ecl.png"
        className="absolute left-0 -top-40 z-0"
        alt=""
      />
      <div className="relative z-1">
        <h1 className="font-semibold text-3xl text-primary">
          Featured Self Storage
        </h1>
        <p className="text-secondary text-xl py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis
          <br className="hidden lg:block" />
          maecenas tincidunt. Quis pretium ornare
        </p>
      </div>
      <Carousel className="px-0 py-12" breakPoints={breakPoints}>
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
      </Carousel>
    </div>
  );
};

export default Featured;
