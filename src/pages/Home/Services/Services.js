import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-[#FF3811] font-bold">Services</h2>
        <h1 className="mt-5 text-5xl font-bold">Our Service Area</h1>
        <p className="mt-5 text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
      <button className="border border-[#FF3811] text-[#FF3811] px-5 py-2 rounded-md mt-16 mb-32">
        More Services
      </button>
    </div>
  );
};

export default Services;
