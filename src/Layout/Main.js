import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import HeaderMain from "../pages/Shared/Headers/HeaderMain";

const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <HeaderMain></HeaderMain>
        <Outlet></Outlet>
      </div>
      <div className="bg-[#151515]">
        <div className="max-w-6xl mx-auto">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
