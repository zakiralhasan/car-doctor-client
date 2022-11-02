import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import BannerSlider from "../BannerSlider/BannerSlider";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <AboutUs></AboutUs>
      <Services></Services>
    </div>
  );
};

export default Home;
