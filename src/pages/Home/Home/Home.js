import React from "react";
import HeaderMain from "../../Shared/Headers/HeaderMain";
import AboutUs from "../AboutUs/AboutUs";
import BannerSlider from "../BannerSlider/BannerSlider";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HeaderMain></HeaderMain>
      <BannerSlider></BannerSlider>
      <AboutUs></AboutUs>
      <Services></Services>
    </div>
  );
};

export default Home;
