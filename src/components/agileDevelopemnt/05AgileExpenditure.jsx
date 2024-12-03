import React from "react";
import Image from "next/image";
import process1 from "../../../public/images/agileimg/agileprocess1.webp";
import process2 from "../../../public/images/agileimg/agileprocess2.webp";
import process3 from "../../../public/images/agileimg/agileprocess3.webp";
import process4 from "../../../public/images/agileimg/agileprocess4.webp";

const AgileExpenditure = () => {
  return (
    <>
      <section className="agile-expenditure-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main mb-4 text-center">
              <h2 className="mb-3">
                <span>Why Choose WebGuruz </span> for Agile Software Development?
              </h2>
              <p>
              When you work with WebGuruz, you get more than just development- you gain a strategic partner committed to your success.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process1} alt="Experienced Agile Practitioners" />
              <p>
                <strong>Experienced Agile Practitioners</strong>
              </p>
            </div>
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process2} alt="End-to-End Transparency" />
              <p>
                <strong>End-to-End Transparency</strong>
              </p>
            </div>
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process3} alt="Client-Centric Approach" />
              <p>
                <strong>Client-Centric Approach</strong>
              </p>
            </div>
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process4} alt="Speed and Quality" />
              <p>
                <strong>Speed and Quality</strong>
              </p>
            </div>
            <p className="pt-4">
            Agile development with WebGuruz provides multiple benefits to your business, including enhanced product quality, reduced time-to-market, and better responsiveness to change. Our iterative approach ensures ongoing value delivery, so your product remains up-to-date with market and customer needs. By continuously involving you in the development cycle, we create a solution that aligns with your goals while adapting to feedback in real time.
            </p>
            <p>
            Agile also enables effective resource utilization and risk management, reducing costly last-minute changes and ensuring a smooth path from conception to deployment. Overall, our Agile approach empowers your business to remain flexible, efficient, and ahead of the competition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgileExpenditure;
