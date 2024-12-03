import Image from "next/image";
import earnings from "../../../public/images/careerimages/careeradv1.webp";
import conversion from "../../../public/images/careerimages/careeradv2.webp";
import competitor from "../../../public/images/careerimages/careeradv3.webp";
import businessaudit from "../../../public/images/careerimages/careeradv4.webp";
import roi from "../../../public/images/careerimages/careeradv5.webp";
import reatltime from "../../../public/images/careerimages/careeradv6.webp";
import reatltime1 from "../../../public/images/careerimages/careeradv7.webp";
import reatltime2 from "../../../public/images/careerimages/careeradv8.webp";

// Array of sections
const sections = [
  {
    image: earnings,
    alt: "Learning Without Stopping Icon",
    title: "Learning Without Stopping",
    
  },  
  {
    image: conversion,
    alt: "Bonus incentive for Referrals Icon",
    title: "Bonus incentive for Referrals",
    
  },
  {
    image: competitor,
    alt: "Salary that Beats the Competition Icon",
    title: "Salary that Beats the Competition",
    
  },
  {
    image: businessaudit,
    alt: "Assistance & Leadership training Icon",
    title: "Assistance & Leadership training",
   
  },
  {
    image: roi,
    alt: "Versatile Remote Work Icon",
    title: "Versatile Remote Work",
    
  },
  {
    image: reatltime,
    alt: "Individual Health Insurance Plans Icon ",
    title: "Individual Health Insurance Plans ",
   
  },

  {
    image: reatltime1,
    alt: "Food Allowance Icon",
    title: "Food Allowance",
   
  },

  {
    image: reatltime2,
    alt: "On Site Opportunity Icon",
    title: "On Site Opportunity",
   
  },

];

const WhyChooseCareer = () => {
  return (
    <section className="whychoose career-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h2 className="mb-5">
              Working with WebGuruz has <span>numerous advantages :</span>
              </h2>
            </div>

            <div className="earntraffic career-defining">
              {sections.map((section, index) => (
                <div key={index} className="earntrafficinr">
                  <div className="earntrfimg">
                    <Image
                      src={section.image}
                      className="img-fluid"
                      alt={section.alt}
                    />
                  </div>
                  <div className="earntrfcnt">
                    <h3 className="mt-3">{section.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCareer;
