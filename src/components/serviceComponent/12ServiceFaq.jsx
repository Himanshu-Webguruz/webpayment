"use client"
import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordionNew ${isOpen ? "active" : ""}`}>
    <div
      onClick={onClick}
      style={{ cursor: "pointer", fontWeight: "bold" }}
      className="according-heading"
    >
      {title} <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && (
      <div
        className="accContentMain"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )}
  </div>
);

const ServiceFaq = ({ accordionData }) => { // Accept accordionData as a prop
  const [openIndex, setOpenIndex] = useState(0); // Set the first accordion to be open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="webguruz-Faq pb-5">
      <div className="container">
        <div className="row heading-main text-center">
          <h2 className="Faq-heading">
            Frequently asked <span> Questions</span>
          </h2>
        </div>
        <div className="row">
          <div className="faq-content">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
