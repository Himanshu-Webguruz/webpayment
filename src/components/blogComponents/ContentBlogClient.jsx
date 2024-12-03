"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logowhite from "/public/images/singleblogimages/logo-wht.svg";
import system from "/public/images/singleblogimages/systm.svg";
import crossarow from "/public/images/singleblogimages/crossarow.svg";
const ContentBlogClient = ({ post, categoryLinks }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      {
        post.acf.post_inner_details.length > 0 &&
          post.acf.post_inner_details.forEach((detail, index) => {
            const section = document.getElementById(`section-${index}`);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 120 && rect.bottom >= 30) {
                setActiveSection(index);
              }
            }
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [post.acf.post_inner_details]);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90, // Adjust scroll position if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="row">
      <div className="col-sm-3 col-xs-12">
        {post.acf.list_all_category && (
          <span className="tag">{post.acf.list_all_category.join(", ")}</span>
        )}

        <div className="author-card">
          <h4>Author</h4>
          <div className="author-content-img d-flex align-items-center mb-4">
            {post.yoast_head_json.schema["@graph"][4] && (
              <Image
                src={post.yoast_head_json.schema["@graph"][4].image.url}
                alt="Author"
                width={20}
                height={20}
              />
            )}

            <div className="content">
              {post.yoast_head_json.schema["@graph"][4] && (
                <h5>
                  {" "}
                  {post.yoast_head_json.schema["@graph"][4].image.caption}
                </h5>
              )}

              <p className="mb-0">Webguruz Technology Pvt. Ltd.</p>
            </div>
          </div>
          {post.yoast_head_json.schema["@graph"][4] && (
            <p>{post.yoast_head_json.schema["@graph"][4].description}</p>
          )}
        </div>
        <div className="table-content">
          <h4>Table of Contents</h4>
          <ul>
            {post.acf.post_inner_details.length > 0 && (
              <div className="inner-description">
                {post.acf.post_inner_details.map((detail, index) => (
                  <li
                    key={index}
                    className={activeSection === index ? "content-active" : ""}
                  >
                    {detail.heading && (
                      <span
                        style={{ cursor: "pointer" }} // Make it look like a link
                        onClick={() => scrollToSection(index)}
                      >
                        {detail.heading}
                      </span>
                    )}
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
      <div className="col-sm-9" key={post._id}>
        {post.acf.post_inner_details.length > 0 && (
          <div className="inner-description">
            {post.acf.post_inner_details.map((detail, index) => (
              <div key={index}>
                {detail.heading && (
                  <h4 id={`section-${index}`}>{detail.heading}</h4>
                )}
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
              </div>
            ))}
          </div>
        )}
        <section className="blog-single-banner mb-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="singleblog-img-content d-flex align-items-center">
                    <Image src={logowhite} alt="Logo" />
                    <div className="peraph-lists">
                      {post.acf.bottom_form ? (
                        post.acf.bottom_form.bottom_form_data.map(
                          (detail, index) => (
                            <span key={index} className="detail-text">
                              {detail.bottom_form_text}
                            </span>
                          )
                        )
                      ) : (
                        <h3>
                          Bring Your Brand to Life With
                          <span>Innersive & Interactive Storytelling</span>
                        </h3>
                      )}
                    </div>
                    <Image src={crossarow} alt="Cross Arrow" />
                    <Image src={system} alt="System" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        <div className="blog-single-categories">
          <h4>Tags</h4>
          <ul className="d-flex flex-wrap text-capitalize single-cat">
            {Object.keys(categoryLinks).map((category) => (
              <li key={category}>
                <Link href={categoryLinks[category]}>
                  {category.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentBlogClient;
