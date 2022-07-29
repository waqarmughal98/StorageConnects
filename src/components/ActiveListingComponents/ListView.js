import React from "react";
import Card from "../HomeComponents/Card";

const ListView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
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
    </div>
  );
};

export default ListView;
