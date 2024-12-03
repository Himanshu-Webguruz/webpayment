"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "react-phone-input-2/lib/style.css";
// import ContactClient from "./clientcomp/ContactClient";
import HubSpotFormV2 from "../../utils/formsHubspot/hubform";
import { usePathname } from "next/navigation";
const Contact = () => {
  const pathname = usePathname();
  return (
    <section className="contact-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12 contact-sub left">
            <span>Get in Touch with the</span>
            <h2>Experts in Digital Transformation</h2>
            <p>
              Drive more leads, maximize your RoI, and grow your business with
              digital solutions built specifically for your business.
            </p>

            <div className="contact-info">
              <h3>Contact WebGuruz:</h3>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="ps-1"
                        role="image"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales - <a href="tel:7307001777">(+91) 730 700 1777</a>
                      </p>
                      <p>
                        Jobs - <a href="tel:9592016444">(+91) 959 201 6444</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="ps-1"
                        role="image"
                        aria-label="Envelope"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales -{" "}
                        <a
                          href="mailto:provider@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          provider@webguruz.in
                        </a>
                      </p>
                      <p>
                        Jobs -{" "}
                        <a
                          href="mailto:careers@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          careers@webguruz.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ContactClient /> */}
          <div className="col-sm-6 col-xs-12 contact-sub right">
            {pathname !== "/home2" && <HubSpotFormV2 />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
