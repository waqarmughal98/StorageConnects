import React from "react";

const SelfStorage = () => {
  return (
    <div className="relative mx-auto">
      <img
        src="./images/evalute-ec.png"
        className="absolute bottom-0 right-0"
        alt=""
      />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-16 py-28 gap-y-8 lg:gap-y-0 px-8 lg:px-16 place-items-center">
        <div className="lg:col-span-4">
          <img src="./images/evalute-1.png" alt="" />
        </div>
        <div className="lg:col-span-6">
          <h1 className="text-secondary text-3xl font-semibold pb-6">
            Have a Self Storage??
          </h1>
          <p className="text-secondary text-xl">
            Using our platform is the go to place on the internet for anything
            that has to do with Self Storage,
            <span className="font-semibold">
              we’ll help you determine what your Self Storage is worth,
            </span>
            <br />
            <br />
            kindly share some information about you and your Self Storage with
            us and a dedicated account manager will get in touch
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfStorage;
