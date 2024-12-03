import Link from 'next/link';
import React from 'react';

const SingleExperience = ({data}) => {
  return (
    <div>
      <section className="single-experience py-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-xs-12 heading-main left">
                    <h2 className='mb-4'>Skills & <span>Experience:</span></h2>
                    <h3>Job Requirements</h3>
                    <div
                    dangerouslySetInnerHTML={{
                      __html: data[0].acf.skilles_experience
                        
                    }}
                  />
                    <Link href={"/contact-us"} className='explore-btn mb-4 mb-md-0'>Apply Now</Link>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className="right-active-jobs">
                        <h3>Other Active Jobs</h3>
                        <ul>    
                            <li><Link href="/jobs-in-mohali/wordpress-and-shopify-developer">WordPress Developer</Link></li>
                            <li><Link href="/jobs-in-mohali/direct-sales-consultant">Direct Sales Consultant</Link></li>
                            <li><Link href="/jobs-in-mohali/backend-developer">Backend Developer</Link></li>
                            <li><Link href="/jobs-in-mohali/sr-react-native">React Native<span>Minimum 4 Years</span></Link></li>
                            <li><Link href="/jobs-in-mohali/business-development-executive">Business Developer Executive<span>(0-2) Years</span></Link></li>
                            <li><Link href="/jobs-in-mohali/web-developers">Web Developers<span>(0-6) Years</span></Link></li>
                            <li><Link href="/careers/#applyalljob">View All</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default SingleExperience;
