import React from "react";
import Image from "next/image";
import recog1 from "../../../public/images/awardsimg/recog1.webp";
import recog2 from "../../../public/images/awardsimg/recog2.webp";
import recog3 from "../../../public/images/awardsimg/recog3.webp";
import recog4 from "../../../public/images/awardsimg/recog4.webp";

const LongHistory = () => {
  const historyData = [
    {
      id: 1,
      imgSrc: recog2,
      imgAlt: "Awards and Recognition Graphic",
      title: "Award-Winning Practices ",
      highlight: " at Webguruz",
      description: "At Webguruz, our commitment to excellence is recognized through award-winning practices that elevate our digital solutions to new standards of quality and innovation. We believe in setting benchmarks in every project, leveraging the latest technologies, and maintaining an unwavering focus on client success. Our recognized practices are built on consistent improvement, rigorous quality standards, and a client-centric approach, allowing us to deliver customized, impactful solutions that drive measurable results.",
      reverse: false,
    },
    {
      id: 2,
      imgSrc: recog3,
      imgAlt: "HubSpot Certified Solutions Partner ",
      title: "HubSpot Certified Solutions ",
      highlight: " Partner",
      description: "As a HubSpot Certified Solutions Partner, Webguruz brings expertise and official certification in deploying HubSpot's powerful tools to enhance client engagement, streamline workflows, and boost sales efficiency. From CRM optimization to inbound marketing and automated sales processes, our team expertly utilizes HubSpot's platform to drive customer growth and satisfaction. This certification reflects our dedication to offering best-in-class solutions that meet the dynamic demands of today's digital market, enabling our clients to achieve sustainable success.",
      reverse: true,
    },
    {
      id: 3,
      imgSrc: recog1,
      imgAlt: "HubSpot Sales Hub Software Certification",
      title: "HubSpot Sales Hub ",
      highlight: " Software Certification",
      description: "With our HubSpot Sales Hub Software Certification, Webguruz is positioned to maximize sales potential for businesses through the strategic use of HubSpot's robust sales tools. This certification underscores our expertise in implementing, customizing, and optimizing the Sales Hub for each client's unique sales journey. By integrating the Sales Hub's data-driven insights with streamlined sales processes, we help businesses manage leads effectively and focus on high-impact, revenue-generating activities. This certification reaffirms our commitment to building scalable, efficient, and customer-focused sales solutions.",
      reverse: false,
    },
    {
      id: 4,
      imgSrc: recog4,
      imgAlt: "Top-Rated Agencyon Upwork",
      title: "Top-Rated Agency ",
      highlight: "on Upwork",
      description: "Webguruz is proudly recognized as a top-rated agency on Upwork, a testament to our unwavering commitment to quality, professionalism, and client satisfaction. Achieving this status highlights our dedication to consistently delivering exceptional digital solutions across web development, SEO, digital marketing, and more. As a top-rated agency, we meet rigorous performance standards, maintain high ratings, and receive outstanding feedback from clients around the world. This distinction sets us apart as a trusted partner for businesses seeking reliable expertise and results-driven strategies. Being top-rated on Upwork underscores our promise to go above and beyond, ensuring that every project not only meets but exceeds our client’s expectations.",
      reverse: true,
    },
  ];

  return (
    <>
      {historyData.map((item) => (
        <section className="long-history-main py-5" key={item.id}>
          <div className="container">
            <div className={`row ${item.reverse ? "reverse" : ""} py-5`}>
              <div className="col-sm-6 col-xs-12 history-image-icon">
                <Image src={item.imgSrc} alt={item.imgAlt} />
              </div>
              <div className="col-sm-6 col-xs-12 history-content heading-main pb-4 pb-md-0">
                <h2>
                  {item.title}
                  <span>{item.highlight}</span>
                </h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default LongHistory;
