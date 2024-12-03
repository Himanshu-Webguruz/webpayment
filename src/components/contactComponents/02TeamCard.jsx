import Image from "next/image";
import stepone from "../../../public/images/contactimages/setp1.svg";
import steptwo from "../../../public/images/contactimages/step2.svg";
import stepthree from "../../../public/images/contactimages/step3.svg";

const TeamCard = () => {
  return (
    <>
      <section className="team-card py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12">
              <div className="team-sub-card">
                <h4>WebGuruz as your Service Provider of Choice</h4>
                <p>
                  We&apos;ve proudly served clients seeking digital excellence
                  for over 16 years. Let&apos;s transform your digital front
                  now. Connect with us to get started today!
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={stepone} alt="Digital Presence Icon" />
                </div>
                <div className="content">
                  <span className="tag">Step 1</span>
                  <h3>Understanding Your Digital Presence</h3>
                  <p>
                    We&apos;ll conduct a thorough examination of your current
                    online presence, identifying strengths, weaknesses, and
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={steptwo} alt="Digital Success Strategy Icon" />
                </div>
                <div className="content">
                  <span className="tag">Step 2</span>
                  <h3>Building a Digital Success Strategy</h3>
                  <p>
                    Based on our diagnosis, we&apos;ll craft a tailored digital
                    strategy that aligns with your business goals. This is your
                    roadmap to success in the digital world.
                  </p>
                </div>
              </div>
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={stepthree} alt="Execution & Analysis icon" />
                </div>
                <div className="content">
                  <span className="tag">Step 3</span>
                  <h3>Execution & Analysis</h3>
                  <p>
                    Our team will meticulously execute your strategy, ensuring a
                    seamless and effective digital transformation. We&apos;ll
                    continuously monitor and optimize your online presence for
                    maximum results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCard;
