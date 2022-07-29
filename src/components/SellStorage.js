import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import TitleBanner from "./layout/TitleBanner";
import SellEnquiry from "./SellStorageComponents/SellEnquiry";

const SellStorage = () => {
  return (
    <div>
      <Nav overlay={false} />
      <TitleBanner
        title="Sell Your Self Storage With Ease"
        subtitle="Let’s help you get the most out of your hard work"
      />
      <div className="relative text-center py-20">
        <p className="text-secondary lg:text-xl w-full lg:w-4/6 pb-4 lg:pb-0 px-8 mx-auto">
          Using our platform is the go to place on the internet for anything
          that has to do with Self Storage, kindly share some information about
          you and your Self Storage with us and a dedicated account manager will
          get in touch
        </p>
        <SellEnquiry />
      </div>
      <Footer />
    </div>
  );
};

export default SellStorage;
