import React from "react";
import BlogCard from "./BlogCard";

const HomeBlog = () => {
  return (
    <div className="relative bg-viewb py-24 lg:py-20 rounded-tl-[200px] lg:rounded-tl-[300px] overflow-hidden">
      <div className="blog-bg text-center">
        <h1 className="text-white text-3xl font-semibold w-3/4 lg:w-1/2 mx-auto">
          Learn Everything About Buying, Selling, and Operating a Self Storage
        </h1>
        <p className="text-white text-lg pt-4 w-3/4 lg:w-2/5 mx-auto">
          Learn about literally anything to know about Selling or Buying a Self
          Storage
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-4 w-fit px-8 py-16 mx-auto">
          <BlogCard
            image="./images/blog-1.png"
            name="Everything you need to know about how to buy a Self Storage"
            time="5Hours ago"
            tag="Buy"
            profile="Raza"
          />
          <BlogCard
            image="./images/blog-2.png"
            name="Learn Everything about managing and operating a Self Storage"
            time="2Days ago"
            tag="Operate"
            profile="Raza"
          />
          <BlogCard
            image="./images/blog-3.png"
            name="Everything you need to know about selling a Self Storage"
            time="3Days ago"
            tag="Sell"
            profile="Raza"
          />
          <BlogCard
            image="./images/blog-4.png"
            name="Everything you need to know about how to buy a Self Storage"
            time="5Days ago"
            tag="Buy"
            profile="Raza"
          />
        </div>

        <button className="btn-primary px-8 py-4">
          Explore the Learning Section
        </button>
      </div>
    </div>
  );
};

export default HomeBlog;
