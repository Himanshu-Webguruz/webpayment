import React from 'react';
import Image from 'next/image';
import Experience from '../../../public/images/singlecareerimages/experience.svg';
import Location from '../../../public/images/singlecareerimages/location.svg';
import Job from '../../../public/images/singlecareerimages/job.svg';
import Timespan from '../../../public/images/singlecareerimages/timespan.svg';
import CareerContact from '../careerComponents/CareerContact';

const SingleCareerBanner = ({ data }) => {
  // Default fallback text
  const fallbackText = "Contact Webguruz";

  return (
    <div>
      <section className="singleserviceform py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 left heading-main inner-page">
              <h1 className='mb-3'>
                {data[0]?.title?.rendered || fallbackText}
              </h1>
              <ul className='d-flex flex-wrap pt-4 experience-list'>
                <li className='w-50 mb-4'>
                  <span className='icon'>
                    <Image src={Experience} alt="Experience Icon" />
                  </span>
                  {data[0]?.acf?.experience || fallbackText}
                </li>
                <li className='w-50 mb-4'>
                  <span className='icon'>
                    <Image src={Location} alt="Location Icon" />
                  </span>
                  {data[0]?.acf?.location || fallbackText}
                </li>
                <li className='w-50'>
                  <span className='icon'>
                    <Image src={Job} alt="Job Type Icon" />
                  </span>
                  {data[0]?.acf?.jobType || "Job Type: Full-time"}
                </li>
                <li className='w-50'>
                  <span className='icon'>
                    <Image src={Timespan} alt="Timespan Icon" />
                  </span>
                  {data[0]?.date?.slice(0, 10) || fallbackText}
                </li>
              </ul>
              <ul className="social-icons">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <CareerContact data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCareerBanner;
