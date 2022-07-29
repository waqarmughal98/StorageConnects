import React from "react";
import DetailContact from "./DetailContact";

const ProductDRequest = () => {
  return (
    <div className="relative bg-activebg mx-auto text-center px-4 py-16 lg:p-16">
      <img
        src="./images/detail-request-bg.png"
        className="absolute bottom-0"
        alt=""
      />
      <div>
        <h1 className="text-primary text-3xl font-bold pb-4">
          Request Details
        </h1>
        <p className="text-secondary text-lg pb-4">
          Provide us some details about the size and number of units you need
        </p>

        <DetailContact />
      </div>
    </div>
  );
};

export default ProductDRequest;
