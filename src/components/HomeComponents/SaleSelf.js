import React from "react";
import { Link } from "react-router-dom";

const SaleSelf = () => {
  return (
    <div className="relative py-28 lg:py-60 bg-skyback rounded-br-[150px] lg:rounded-br-[300px] overflow-hidden">
      <img
        src="./images/sale-left.png"
        className="absolute bottom-0 left-0"
        alt=""
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-20">
        <div className="grid content-center relative">
          <h1 className="text-[32px] text-primary font-bold pb-4">
            Do you have a Self Storage for Sale?
          </h1>
          <p className="text-lg text-secondary leading-8 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </p>
          <Link to="/self-storage">
            <button className="btn-secondary w-fit">
              Sell Your Self Storage
            </button>
          </Link>
        </div>

        <div className="grid place-content-end">
          <img
            src="./images/mascot-1.png"
            className="relative lg:absolute -bottom-28 lg:bottom-0 right-0 w-full lg:w-1/2"
            alt="mascot"
          />
        </div>
      </div>
    </div>
  );
};

export default SaleSelf;
