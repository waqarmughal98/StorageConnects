import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import TitleBanner from "./layout/TitleBanner";
import LearnBody from "./LearnComponents/LearnBody";

const Learn = () => {
  return (
    <div>
      <Nav />
      <TitleBanner
        title="Learn About Self Storgae"
        subtitle="Learn everything about a self storage"
      />
      <LearnBody />
      <Footer />
    </div>
  );
};

export default Learn;
