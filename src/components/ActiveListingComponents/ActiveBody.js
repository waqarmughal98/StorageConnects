import React from "react";
import SearchPanel from "./SearchPanel";
import FilterBar from "./FilterBar";
import TopPagination from "./TopPagination";
import GridView from "./GridView";

const ActiveBody = () => {
  return (
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
  );
};

export default ActiveBody;
