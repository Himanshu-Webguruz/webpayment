"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import { Nav } from "react-bootstrap";
import { seopackages } from "@/utils/03utilHomeTab";
import { useRouter } from "next/navigation";
import { useState } from "react";
const OurSeoPackages = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Proceed to Payment')
  // paypal
  const handlePaypal = () => {
    // Load PayPal SDK script dynamically
    setButtonText("Processing...");
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&components=buttons`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize PayPal Buttons
      let isCanceled = false;
      window.paypal
        .Buttons({
          createOrder: async (data, actions) => {
            const response = await fetch("/api/paypal/create-order", {
              method: "POST",
            });

            const { orderID } = await response.json();
            return orderID;
          },
          onApprove: async (data, actions) => {
            isCanceled = false;
            const response = await fetch("/api/paypal/capture-order", {
              method: "POST",
              body: JSON.stringify({ orderID: data.orderID }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const result = await response.json();
            if (response.ok && result.success) {
              router.push("/payment-recieved");
            } else {
              console.error("Payment capture failed:", result.error);
            }
          },
          onCancel: (data) => {
            isCanceled = true;
            console.log("Payment was cancelled by the user:");
          },
          onError: (err) => {
            if (isCanceled) {
              console.log("Error triggered by user cancelation. Ignoring.");
              return; // Ignore errors triggered by cancelation
            }
            console.error("PayPal Error: ", err);
          },
        })
        .render("#paypal-button-container"); // Specify the container for the PayPal button
        setButtonText("Proceed to Payment");
    };

    return () => {
      document.body.removeChild(script);
    };
  };

  //razorpay
  const handlePayment = async () => {
    if (isLoading) return; // Prevent further calls if already loading
    setLoading(true);
    setButtonText("Processing...");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = async () => {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 100 }),
        });

        const data = await response.json();

        if (!data.orderId) {
          alert("Order creation failed");
          setLoading(false);
          return;
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: "Webguruz Technologies",
          description: "Payment for Order",
          order_id: data.orderId,
          handler: function (response) {
            router.push("/payment-recieved");
          },
          prefill: {
            name: " ",
            contact: " ",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
        setShowModal(false);
      } catch (error) {
        console.error("Error during payment handling:", error);
      } finally {
        setLoading(false);
        setButtonText("Proceed to Payment");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleProceedPayment = () => {
    if (selectedCountry === "India") {
      handlePayment();
    } else {
      handlePaypal();
    }
  };

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="webguruz-packages-seo py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center heading-main">
            <h2 className="packages-title-seo">
              Our Tailored <span>SEO Packages</span>
            </h2>
          </div>
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="experts" id="uncontrolled-example">
              <div className="row">
                {/* Left column for tabs */}
                <div className="col-md-4 tab-sidebar">
                  <Nav variant="pills" className="flex-column">
                    {seopackages.map((tab) => (
                      <Nav.Item key={tab.eventKey}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                {/* Right column for content */}
                <div className="col-md-8 package-phases">
                  <Tab.Content>
                    <div className="seo-package-headings">
                      <h4 className="packages-title-seo">
                        Deliverables <span>PLAN</span>
                      </h4>
                    </div>
                    <div className="packages-heading-two">
                      <h5>
                        On Page & OFF Page SEO Optimization
                        <span>Approx. $300</span>
                      </h5>
                    </div>
                    {seopackages.map((tab) => (
                      <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                        <div
                          className="packages-content"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                  <div className="col-sm-12 col-xs-12 text-center">
                    <button
                      type="button "
                      className="purchase-btn explore-btn"
                      onClick={handleOpen}
                    >
                      Buy Package
                    </button>
                    {showModal && (
                      <>
                        <div className="modal show d-block get-quote-form ">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <button
                                  type="button"
                                  className="btn-close"
                                  onClick={() => setShowModal(false)}
                                ></button>
                                <div className="items">

                                
                                <label htmlFor="country-select">
                                  Select Your Country Before Payment
                                </label>
                                <select
                                  id="country-select"
                                  className="form-control"
                                  value={selectedCountry}
                                  onChange={handleCountryChange}
                                >
                                  <option value="">--Select--</option>
                                  <option value="India">India</option>
                                  <option value="USA">USA</option>
                                  <option value="UK">UK</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Maxico">Maxico</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Central America">
                                    Central America
                                  </option>
                                  <option value="South America">
                                    South America
                                  </option>
                                  <option value="Israel">Israel</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Whole Europe">
                                    Whole Europe
                                  </option>
                                </select>
                                </div>
                                <div className="payment-button">
                                <button
                                    type="button"
                                    onClick={handleProceedPayment}
                                    disabled={!selectedCountry || isLoading}
                                  >
                                    {buttonText}
                                  </button>
                                </div>
                                <div id="paypal-button-container"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSeoPackages;
