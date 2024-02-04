import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import LocationSprad from "./LocationSprad";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprad />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
