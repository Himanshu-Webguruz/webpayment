"use client"
// import Link from "next/link";
import React from "react";
// import HomeClient from "../homeComponents/clientcomp/HomeClient";
import BlogSubscribeForm from "@/utils/formsHubspot/BlogSubscribeForm";

const CareerJob = () => {
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
      <section className="career-job py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-sm-6 col-xs-12 left-content heading-main">
              <h2>
                Keep an eye on the <br />
                <span>latest job openings.</span>
              </h2>
              <button className="explore-btn" onClick={handleScrollToJobs}>Check Now</button>
            </div>
            <div className="col-sm-6 col-xs-12 content-right">
              <h3 className="color-wt mb-4">
                Subscribe to our email newsletter and stay updated with the
                latest tech insights from our digital experts.
              </h3>
              {/* <form className="newsleter">
                <input type="text" placeholder="Enter Email" />
                <input type="submit" value="subscribe"></input>
              </form> */}
              <BlogSubscribeForm/>
              {/* <HomeClient/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerJob;
