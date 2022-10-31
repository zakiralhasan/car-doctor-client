import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import HeaderMain from "../pages/Shared/Headers/HeaderMain";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <HeaderMain></HeaderMain>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
