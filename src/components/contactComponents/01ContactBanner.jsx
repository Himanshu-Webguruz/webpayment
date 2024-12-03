import Link from "next/link";
// import ContactClient from "../homeComponents/clientcomp/ContactClient";
import HubSpotFormV2 from "@/utils/formsHubspot/hubform";

const ContactBanner = () => {
  return (
    <>
      <section className="contact-banner py-5 inner-page" id="wgz-cntct-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h1 className="color-wt">
                Have
                <br />
                <strong> Questions?</strong>
              </h1>
              <p className="color-wt">
                Get prompt support from our expert support team, now!
              </p>
              <div className="btn-merge">
                <Link className="explore-btn me-3" href="/book-an-appointment">
                  For Business
                </Link>
                <Link className="explore-btn no-color" href="/careers">
                  For Career
                </Link>
              </div>
            </div>
            {/* <ContactClient /> */}
            <div className="col-sm-6 col-xs-12 ">
            <HubSpotFormV2/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
