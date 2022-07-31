import React from "react";
import Nav from "../layout/Nav";
import TitleBanner from "../layout/TitleBanner";
import FilterBar from "./FilterBar";
import SearchPanel from "./SearchPanel";
import TopPagination from "./TopPagination";
import GridView from "./GridView";
import Footer from "../layout/Footer";
import PopUp from "./PopUp";

const ActiveListingList = () => {
  return (
    <div>
      <Nav overlay={false} />
      <TitleBanner title="All Active Self Storage Listings" subtitle="" />
      <div className="relative px-8 lg:px-20">
        <img
          src="./images/active-ec-left.png"
          className="absolute left-0 top-1/4"
          alt=""
        />
        <img
          src="./images/active-ec-right.png"
          className="absolute right-0 top-2/3"
          alt=""
        />
        <SearchPanel />
        <FilterBar />
        <TopPagination />
        <GridView />
        
        <TopPagination />
      </div>
      <Footer />

      <PopUp />
    </div>
  );
};

export default ActiveListingList;
