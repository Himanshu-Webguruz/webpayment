import process from "../../../public/images/howworkimages/roi-image.webp";
import Image from "next/image";

const RoiService = () => {
  return (
    <>
      <section className="process-main roi-service py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center heading-content mb-4">
              <span className="d-inline-block mb-2">More Than a Service</span>
              <h2>
                ROI You Can <span> Expect with WebGuruz</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12 image text-center">
              <Image src={process} alt="ROI Performance Metrics" />
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="content">
                <ul>
                  <li>
                    <span className="number">1</span>
                    <h3>Measurable Growth</h3>
                    <p>
                      Expect targeted solutions that drive higher engagement and
                      conversion rates, aligning with your business objectives.
                    </p>
                  </li>
                  <li>
                    <span className="number">2</span>
                    <h3>Optimized Performance</h3>
                    <p>
                      We design solutions to perform at peak efficiency,
                      ensuring your project runs smoothly even during
                      high-traffic times.
                    </p>
                  </li>
                  <li>
                    <span className="number">3</span>
                    <h3>Long-Term Support</h3>
                    <p>
                      Our commitment doesn&apos;t end with delivery. We provide
                      ongoing support, ensuring your project stays current and
                      relevant.
                    </p>
                  </li>
                  <li>
                    <span className="number">4</span>
                    <h3>Cost-Effective Solutions</h3>
                    <p>
                      Our transparent pricing and efficient processes mean you
                      get high-quality work without stretching your budget.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoiService;
