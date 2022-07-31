import React from "react";
import ListCard from "./ListCard";

const ListView = () => {
  return (
    <div className="p-4 lg:p-8 border border-gray-200 rounded-2xl space-y-6">
      <ListCard
        image="./images/property-1.png"
        title="Self Storage Heading"
        location="Jersey City,NJ"
        units="89 Units"
        size="40,233 Sq Ft"
        occupancy="50%"
      />
      <ListCard
        image="./images/property-2.png"
        title="Self Storage Heading"
        location="Jersey City,NJ"
        units="89 Units"
        size="40,233 Sq Ft"
        occupancy="50%"
      />
      <ListCard
        image="./images/property-3.png"
        title="Self Storage Heading"
        location="Jersey City,NJ"
        units="89 Units"
        size="40,233 Sq Ft"
        occupancy="50%"
      />
      <ListCard
        image="./images/property-4.png"
        title="Self Storage Heading"
        location="Jersey City,NJ"
        units="89 Units"
        size="40,233 Sq Ft"
        occupancy="50%"
      />
      <ListCard
        image="./images/property-5.png"
        title="Self Storage Heading"
        location="Jersey City,NJ"
        units="89 Units"
        size="40,233 Sq Ft"
        occupancy="50%"
      />
    </div>
  );
};

export default ListView;
