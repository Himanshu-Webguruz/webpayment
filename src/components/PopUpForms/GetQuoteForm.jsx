"use client";
import React, { useEffect, useState } from "react";
import useScript from "@/utils/formsHubspot/useScript";
import Image from "next/image";
import clutch from "../../../public/images/getaquote/clutch-logo.webp";
import Goodfirm from "../../../public/images/getaquote/goodfirms-logo.webp";
import Googlepartner from "../../../public/images/getaquote/google-partner-logo.webp";
import Hubspot from "../../../public/images/getaquote/HubSpot-Logo.webp";
import Shopify from "../../../public/images/getaquote/shopify-logo.webp";
import qoute from "../../../public/images/quote-img.webp";

const ModalForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  const [showModal, setShowModal] = useState(false);

  // Effect to create the HubSpot form
  useEffect(() => {
    if (isLoaded && window.hbspt && showModal) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "3b223d7c-ad34-41c9-b896-aa21ded33dc5",
          target: "#hubspotFormV2",  // Ensure this matches the div ID
          onFormSubmit: function($form) {
            console.log('enter form');
            window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'get_quote_free_proposalform',
            'form_name': 'Register with webguruz',
            'form_id':'3b223d7c-ad34-41c9-b896-aa21ded33dc5',
            });
            console.log( window.dataLayer, " window.dataLayer")
            }
        });
      } catch (error) {
        console.error("HubSpot form creation error:", error);
      }
    }
  }, [isLoaded, showModal]); // Run effect when isLoaded or showModal changes

  // Handle modal open
  const handleOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleOpen}>
        GET A QUOTE
      </button>
      {showModal && (
        <div className="modal show d-block get-quote-form ">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
                <div className="image-form">
                  <div className="image">
                    <Image src={qoute} alt="Contact us" />
                    <div className="content-image-above">
                      <h3 className="mb-4">
                        A man with a strategy can defeat a genius with no
                        strategy.
                      </h3>
                      <p>
                        With Webguruz, your Conceived plan will get achieved and
                        succeed
                      </p>
                    </div>
                  </div>
                  <div className="form">
                    {/* The div where the HubSpot form will be rendered */}
                    <div id="hubspotFormV2" className="contact-right-form">
                      Loading form...
                    </div>
                  </div>
                </div>
                <div className="bottom-form-quote">
                  <p>
                    5000+ successful projects delivered by 200+ certified expert
                  </p>
                  <ul>
                    <li>
                      <Image src={clutch} alt="Clutch Icon" />
                    </li>
                    <li>
                      <Image src={Goodfirm} alt="GoodFirm Icon" />
                    </li>
                    <li>
                      <Image src={Googlepartner} alt="Google Partner" />
                    </li>
                    <li>
                      <Image src={Hubspot} alt="Hubspot" />
                    </li>
                    <li>
                      <Image src={Shopify} alt="Shopify" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
