import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { title, price, img } = service;
  console.log(service);
  console.log(title, price);
  return (
    <div>
      <div className="card card-compact sm:w-80 bg-base-100 border rounded-lg shadow-lg p-4 w-full">
        <img className="rounded-lg h-56" src={img} alt="" />

        <div className="">
          <h2 className="card-title text-2xl font">{title}</h2>
          <div className="flex justify-between">
            <p className="text-[#FF3811] font-semibold">Price: ${price}</p>
            <button className="text-[#FF3811]">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
