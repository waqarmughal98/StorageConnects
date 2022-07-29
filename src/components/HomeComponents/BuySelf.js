import React from "react";

const BuySelf = () => {
  return (
    <div className="relative h-full py-20 lg:py-72 mb-0 lg:-mb-52">
      <img
        src="./images/mesh.png"
        className="absolute top-16 lg:-top-64"
        alt=""
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-20 gap-y-6 lg:gap-y-0">
        <div className="grid place-content-end">
          <img
            src="./images/mascot-2.png"
            className="relative lg:absolute left-0 bottom-0"
            alt="mascot girl"
          />
        </div>

        <div className="grid content-centers">
          <h1 className="text-primary text-3xl font-bold pb-4">
            Do you want to buy a Self Storage?
          </h1>
          <p className="text-lg text-secondary leading-8 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </p>
          <button className="btn-secondary w-fit">Buy a Self Storage</button>
        </div>
      </div>
    </div>
  );
};

export default BuySelf;
