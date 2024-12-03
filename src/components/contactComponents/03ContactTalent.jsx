"use client"
import Image from "next/image";
import contactimg from "../../../public/images/contactimages/contact.svg";
import emailimg from "../../../public/images/contactimages/email.svg";
import enquiryimg from "../../../public/images/contactimages/enquiry.svg";
import Link from "next/link";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("wgz-cntct-banner");
  if (jobSection) {
    const yOffset = -150; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
  document.querySelector('.hs-firstname input').focus();
};

const ContactTalent = () => {
  return (
    <>
      <section className="talent py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4 col-xs- 12 talent-btn ">
              <div className="btn-merge pe-4 me-4">
                <Link className="explore-btn hire-talent mb-3" href={'/book-an-appointment'}>
                  Hire Us Now!
                </Link>
                <Link className="explore-btn job-apply no-color" href={'/careers'}>
                  Start your Career with us!
                </Link>
              </div>
            </div>
            <div className="col-sm-8 col-xs-12 talent-cards">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <a href="tel:(+91) 959 201 6444">
                      <Image
                        src={contactimg}
                        alt="Contact Icon"
                        className="mb-3"
                      />
                      <p>Contact Sales</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <a
                      href="mailto:info@webguruz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={emailimg} alt="Email Icon" className="mb-3" />
                      <p>Send An Email</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <button onClick={handleScrollToJobs} id="wgz-enquiry">
                      <Image
                        src={enquiryimg}
                        alt="Enquiry Icon"
                        className="mb-3"
                      />
                      <p>Send An Enquiry</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactTalent;
