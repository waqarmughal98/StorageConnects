import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../HomeComponents/BlogCard";

const SimilarPost = () => {
  return (
    <div className="bg-activebg px-8 lg:px-20 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 items-center">
        <div>
          <h1 className="text-headc font-bold text-3xl">Other Similar Post</h1>
          <p className="text-secondary pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </p>
        </div>
        <div className="text-right">
          <Link to="/learn">
            <p className="text-secondary">View More {">"}</p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 py-8 gap-4">
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
    </div>
  );
};

export default SimilarPost;
