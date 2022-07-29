import React from "react";
import ActiveSearch from "./HomeComponents/ActiveSearch";
import BuySelf from "./HomeComponents/BuySelf";
import Featured from "./HomeComponents/Featured";
import Footer from "./layout/Footer";
import Hero from "./HomeComponents/Hero";
import HomeBlog from "./HomeComponents/HomeBlog";
import HQueries from "./HomeComponents/HQueries";
import SaleSelf from "./HomeComponents/SaleSelf";
import Nav from "./layout/Nav";

const Home = () => {
  return (
    <main id="storageconnect">
      <Nav overlay={true} />
      <Hero />
      <Featured />
      <ActiveSearch />
      <SaleSelf />
      <BuySelf />
      <HomeBlog />
      <HQueries />
      <Footer />
    </main>
  );
};

export default Home;
