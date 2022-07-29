import React from "react";

const TitleBanner = (props) => {
  return (
    <div className="bg-[#f6f8fd] mx-auto">
      <div className="title-head-ban">
        <div className="flex flex-col h-52 justify-center text-center px-8 lg:px-0">
          <h1 className="text-3xl lg:text-4xl text-headc font-semibold">
            {props.title}
          </h1>
          <p className="text-secondary lg:text-xl pt-4">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleBanner;
