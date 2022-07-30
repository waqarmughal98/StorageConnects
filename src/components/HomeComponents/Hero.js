import React from "react";

const Hero = () => {
  return (
    <section className="relative hero-banner h-fit text-center z-10">
      <div className="flex flex-col space-y-4 pt-40 pb-20 w-full">
        <h1 className="text-white text-5xl lg:text-6xl font-bold">
          Self Storage Business
        </h1>
        <h1 className="text-white text-5xl lg:text-6xl font-bold break-words">
          Buy.Sell.Learn.
        </h1>
        <p className="text-white font-medium text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
          <br className="hidden lg:block" />
          sagittis, aliquam non tortor blandit lobortis. blandit
        </p>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 items-center justify-center pt-8">
          <button className="btn-primary px-8 py-5 w-fit">
            Sell your Self Storage
          </button>
          <button className="bg-white rounded-lg text-secondary px-8 py-5 font-semibold w-fit">
            Active Self Storage Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
