import React from "react";
import SimilarPost from "./SimilarPost";

const PostBody = () => {
  return (
    <>
      <div className="px-8 lg:px-36 py-20 w-full text-lg">
        <img src="./images/blog-1.png" className="w-full rounded-2xl" alt="" />

        <h1 className="text-headc text-3xl font-bold py-8">
          Learn How to Buy a Self Storage
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-y-4 lg:gap-y-0 lg:gap-x-8">
          <div className="lg:col-span-4">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/j45ogZNaCis"
              title="YouTube video player"
              className="rounded-lg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="lg:col-span-6">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
              placerat sodales. Enim elements nec tortor, massa metus. Id eget
              duis orci senectus senectus at ut tellus porttitor.
            </p>
          </div>
        </div>

        <div className="py-12">
          <h1 className="text-headc text-2xl font-semibold pb-4">
            Heading Text Here
          </h1>
          <p className="text-secondary pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis sed sed blandit aenean diam.
            Mattis neque leo et, donec. Hac quis neque turpis nec tortor, massa
            metus. Id eget duis orci senectus senectus at ut tellus porttitor.
            Non urna, sociis luctus dolor. Eu nec ullamcorper sollicitudin
            bibendum mi quisque mattis eu. At tempus sem interdum elit laoreet
            at tellus volutpat sed. Et id odio gravida urna, nunc feugiat ut.
            Eros non, velit ut a, leo fermentum non consequat. Purus urna massa
            lorem vitae.
          </p>

          <p className="text-secondary pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
          </p>

          <p className="text-secondary pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
          </p>

          <div>
            <h1 className="text-headc font-semibold text-xl pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing el
            </h1>
            <p className="text-secondary pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
              placerat sodales. Enim elementum hendrerit vitae convallis{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-activebg py-20 px-8 lg:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="">
            <h1 className="text-headc text-3xl font-semibold pb-4">
              More information on how to buy a Self Storage
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
            </p>
          </div>
          <div className="grid justify-center">
            <img src="./images/property-2.png" className="rounded-xl" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pt-16">
          <div className="grid justify-center">
            <img src="./images/property-3.png" className="rounded-xl" alt="" />
          </div>
          <div className="">
            <h1 className="text-headc text-3xl font-semibold pb-4">
              More information on how to buy a Self Storage
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
            </p>
          </div>
        </div>
      </div>

      <div className="relative post-self text-center py-20 px-8 lg:px-40 mx-auto">
        <img
          src="./images/post-self-ec.png"
          className="absolute left-0 bottom-0 z-0"
          alt=""
        />
        <h1 className="text-white text-3xl font-bold pb-4">
          Do you have a Self Storage for Sale?
        </h1>

        <p className="text-white w-3/4 mx-auto pb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc.
        </p>

        <button className="btn-primary py-4 px-6 relative z-10">
          Sell Your Self Storage
        </button>
      </div>

      <SimilarPost />
    </>
  );
};

export default PostBody;
