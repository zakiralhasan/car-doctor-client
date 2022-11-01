import React from "react";
import aboutPic1 from "../../../assets/images/about_us/person.jpg";
import aboutPic2 from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="my-32">
      <div className="flex gap-4">
        <div className="basis-1/2 relative">
          <img className="w-4/5 rounded-lg " src={aboutPic1} alt="" />
          <img
            className="w-3/5 absolute top-1/3 left-1/3 border-8 border-white rounded-lg"
            src={aboutPic2}
            alt=""
          />
        </div>
        <div className="basis-1/2 text-left">
          <h1 className="text-[#FF3811] font-bold">About Us</h1>
          <h1 className="text-5xl font-bold mt-5">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="mt-7 mb-5 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="bg-[#FF3811] text-white px-5 py-2 rounded-md mt-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
