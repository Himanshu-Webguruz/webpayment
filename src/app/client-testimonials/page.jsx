import TestBanner from '@/components/clientTestimonials/01TestBanner'
import TestVideo from '@/components/clientTestimonials/02TestVideo'
import TestReview from '@/components/clientTestimonials/03TestReview'
import React from 'react'
import './style.css'
const page = () => {
  return (
    <>
      <TestBanner/>
      <TestVideo/>
      <TestReview/>
    </>
  )
}

export default page
export const metadata = {
  title: "Client’s Testiminials | WebGuruz",
  description:
    "Want to know what it's like to work with WebGuruz? Read real client testimonials and discover how our digital solutions have powered their business success.",
};