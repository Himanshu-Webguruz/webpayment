"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import BusinessBanner from "../../../public/images/careerimages/business-banner.webp";
import BusinessBanner2 from "../../../public/images/careerimages/business-banner-2.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CareerBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  const handleScrollToJobs = () => {
    const jobSection = document.getElementById("applyalljob");
    if (jobSection) {
      const yOffset = -150; // Adjust this value to control the scroll offset
      const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="service-banner d-flex align-items-center inner-page career-bg">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image heading-main">
              <Image src={BusinessBanner} alt="BusinessBanner" />
              <div className="heading-main">
                <div className="carrer-banner">
                  <h1>
                  Become part of a 
                    <span className="color-wt">collaborative community.</span>
                  </h1>
                  <p className="mt-4">
                  Nurture your career in a supportive environment where innovation thrives and make a lasting impact with a company that empowers your growth.
                  </p>
                  <button className="explore-btn" onClick={handleScrollToJobs}>
                    View All Jobs
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image heading-main">
              <Image src={BusinessBanner2} alt="BusinessBanner2" />
              <div className="heading-main">
                <div className="carrer-banner">
                  <h2>
                    Our team is constantly searching{" "}
                    <span className="color-wt">for visionaries and creators.</span>
                  </h2>
                  <p className="mt-4">
                    Consider yourself creative or technologically inclined. If so, we&apos;d
                    love for you to join our team and help us change the way the world sees
                    technology.
                  </p>
                  <button className="explore-btn" onClick={handleScrollToJobs}>
                    View All Jobs
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CareerBanner;
