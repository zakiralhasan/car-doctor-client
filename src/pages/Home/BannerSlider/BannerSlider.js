import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//slide banner imported
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const BannerSlider = () => {
  const swiperRef = useRef();

  return (
    <div className="mt-12 ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={0}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0)100%), url(${banner1})`,
            }}
            className="relative rounded-lg bg-cover bg-no-repeat h-[600px] "
          >
            <div className="absolute text-left p-24 ">
              <div>
                <h1 className="text-6xl font-bold text-white flex ">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className=" text-white mt-7">
                  There are many variations of passages of available, but <br />{" "}
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-4 mt-7 text-white">
                  <button className="bg-orange-600 px-6 py-3 rounded">
                    Discover More
                  </button>
                  <button className="bg-transparent border border-white px-6 py-3 rounded">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            {/* slide controlling section */}
            <div className="flex gap-3 text-white absolute bottom-12 right-12 text-right">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-[#444E62] p-3 rounded-full "
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-orange-500 p-3 rounded-full "
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0)100%), url(${banner2})`,
            }}
            className="relative rounded-lg bg-cover bg-no-repeat h-[600px] "
          >
            <div className="absolute text-left p-24">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className=" text-white mt-7">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-4 mt-7 text-white">
                <button className="bg-orange-600 px-6 py-3 rounded">
                  Discover More
                </button>
                <button className="bg-transparent border border-white px-6 py-3 rounded">
                  Latest Project
                </button>
              </div>
            </div>
            {/* slide controlling section */}
            <div className="flex gap-3 text-white absolute bottom-12 right-12 text-right">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-[#444E62] p-3 rounded-full "
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-orange-500 p-3 rounded-full "
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0)100%), url(${banner3})`,
            }}
            className="relative rounded-lg bg-cover bg-no-repeat h-[600px] "
          >
            <div className="absolute text-left p-24">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className=" text-white mt-7">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-4 mt-7 text-white">
                <button className="bg-orange-600 px-6 py-3 rounded">
                  Discover More
                </button>
                <button className="bg-transparent border border-white px-6 py-3 rounded">
                  Latest Project
                </button>
              </div>
            </div>
            {/* slide controlling section */}
            <div className="flex gap-3 text-white absolute bottom-12 right-12 text-right">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="swiper-button bg-[#444E62] p-3 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="swiper-button bg-orange-500 p-3 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0)100%), url(${banner4})`,
            }}
            className="relative rounded-lg bg-cover bg-no-repeat h-[600px] "
          >
            <div className="absolute text-left p-24">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className=" text-white mt-7">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-4 mt-7 text-white">
                <button className="bg-orange-600 px-6 py-3 rounded">
                  Discover More
                </button>
                <button className="bg-transparent border border-white px-6 py-3 rounded">
                  Latest Project
                </button>
              </div>
            </div>
            {/* slide controlling section */}
            <div className="flex gap-3 text-white absolute bottom-12 right-12 text-right">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="swiper-button bg-[#444E62] p-3 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="swiper-button bg-orange-500 p-3 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0)100%),url(${banner5})`,
            }}
            className="relative rounded-lg bg-cover bg-no-repeat h-[600px] "
          >
            <div className="absolute text-left p-24">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className=" text-white mt-7">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-4 mt-7 text-white">
                <button className="bg-orange-600 px-6 py-3 rounded">
                  Discover More
                </button>
                <button className="bg-transparent border border-white px-6 py-3 rounded">
                  Latest Project
                </button>
              </div>
            </div>
            {/* slide controlling section */}
            <div className="flex gap-3 text-white absolute bottom-12 right-12 text-right">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="swiper-button bg-[#444E62] p-3 rounded-full 5"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="swiper-button bg-orange-500 p-3 rounded-full 5"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0)100%),url(${banner6})`,
            }}
            className="relative rounded-lg bg-cover bg-no-repeat h-[600px] "
          >
            <div className="absolute text-left p-24">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className=" text-white mt-7">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-4 mt-7 text-white">
                <button className="bg-orange-600 px-6 py-3 rounded">
                  Discover More
                </button>
                <button className="bg-transparent border border-white px-6 py-3 rounded">
                  Latest Project
                </button>
              </div>
            </div>
            {/* slide controlling section */}
            <div className="flex gap-3 text-white absolute bottom-12 right-12 text-right">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="swiper-button bg-[#444E62] p-3 rounded-full 5"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="swiper-button bg-orange-500 p-3 rounded-full 5"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
