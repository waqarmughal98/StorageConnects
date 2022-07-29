import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import PostBody from "./PostComponents/PostBody";

const Post = () => {
  return (
    <div>
      <Nav overlay={false} />
      <PostBody />
      <Footer />
    </div>
  );
};

export default Post;
