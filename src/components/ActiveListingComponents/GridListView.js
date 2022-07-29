import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const GridListView = (props) => {
  if (props.display === "grid") {
    return <GridView />;
  } else {
    return <ListView />;
  }
};

export default GridListView;
