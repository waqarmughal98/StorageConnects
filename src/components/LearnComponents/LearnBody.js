import React from "react";
import BlogCard from "../HomeComponents/BlogCard";
import BPagination from "./BPagination";
import BTopFilter from "./BTopFilter";

const LearnBody = () => {
  return (
    <div className="px-8 py-16 lg:p-16">
      <BTopFilter />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-6">
        <BlogCard
          image="./images/blog-1.png"
          name="Everything you need to know about how to buy a Self Storage"
          time="5Hours ago"
          tag="Buy"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-2.png"
          name="Learn Everything about managing and operating a Self Storage"
          time="2Days ago"
          tag="Operate"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-3.png"
          name="Everything you need to know about selling a Self Storage"
          time="3Days ago"
          tag="Sell"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-4.png"
          name="Everything you need to know about how to buy a Self Storage"
          time="5Days ago"
          tag="Buy"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-1.png"
          name="Everything you need to know about how to buy a Self Storage"
          time="5Hours ago"
          tag="Buy"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-2.png"
          name="Learn Everything about managing and operating a Self Storage"
          time="2Days ago"
          tag="Operate"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-3.png"
          name="Everything you need to know about selling a Self Storage"
          time="3Days ago"
          tag="Sell"
          profile="Raza"
          border="gray"
        />
        <BlogCard
          image="./images/blog-4.png"
          name="Everything you need to know about how to buy a Self Storage"
          time="5Days ago"
          tag="Buy"
          profile="Raza"
          border="gray"
        />
      </div>
      <BPagination />
    </div>
  );
};

export default LearnBody;
