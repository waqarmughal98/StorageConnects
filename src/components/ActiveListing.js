import React from "react";
import ActiveBody from "./ActiveListingComponents/ActiveBody";
import PopUp from "./ActiveListingComponents/PopUp";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import TitleBanner from "./layout/TitleBanner";

const ActiveListing = () => {
  return (
    <div>
      <Nav overlay={false} />
      <TitleBanner title="All Active Self Storage Listings" subtitle="" />
      <ActiveBody />
      <Footer />

      <PopUp />
    </div>
  );
};

export default ActiveListing;
