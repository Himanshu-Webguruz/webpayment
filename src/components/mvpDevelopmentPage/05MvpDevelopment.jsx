import Image from "next/image";

import mvpmanage from "../../../public/images/mvpimages/manage.webp";
const MvpDevelopment = () => {
  return (
    <div>
      <section className="mvp-dev-process py-5">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h2>
                Our <span>MVP Development Process</span>
              </h2>
            </div>
          </div>
          <div className="row align-items-center pt-4">
            <div className="col-xs-12 col-sm-6 image">
              <Image src={mvpmanage} alt="MVP Development Process" />
            </div>
            <div className="col-xs-12 col-sm-6 content">
            <p>
              Our MVP development process at WebGuruz combines efficiency,
              precision, and creativity. We follow a structured approach that
              ensures a thorough understanding of your needs while staying
              adaptable to changes as we move forward.
            </p>
            <p>Key factors we consider during MVP development include:</p>
            <ul>
              <li>
                <strong>1. Target Audience -</strong> We identify and
                understand your ideal users to ensure that the MVP resonates
                with them from the start.
              </li>
              <li>
                <strong>2. Core Features -</strong> By focusing on essential
                features, we deliver a product that fulfills your core
                objectives while avoiding unnecessary complexities.
              </li>
              <li>
                <strong>3. Scalability -</strong> Our development process is
                future-focused, making sure your MVP can grow alongside your
                business and adapt to evolving market needs.
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MvpDevelopment;
