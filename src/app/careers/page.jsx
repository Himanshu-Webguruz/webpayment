import CareerBanner from "@/components/careerComponents/01CareerBanner";
import CareerLife from "@/components/careerComponents/02CareerLife";
import CareerJobs from "@/components/careerComponents/03CareerJobs";
import CareerAdvantages from "@/components/careerComponents/04CareerAdvantages";
import WhyChooseCareer from "@/components/careerComponents/05WhyChooseCareer";
import CareerTogether from "@/components/careerComponents/06CareerTogether";
import CareerJob from "@/components/careerComponents/07CareerJob";
import HomeTestimonial from "../home2/components/homeComponents/07HomeTestimonial";
import HiringForm from "@/components/PopUpForms/hiringform";


const page = () => {
  return (
    <>
      <CareerBanner />
      <CareerLife />
      <WhyChooseCareer />
      <CareerJobs />
      <CareerAdvantages />
      <HomeTestimonial />
      <CareerTogether />
      <CareerJob />
      <HiringForm/>
     
    </>
  );
};

export default page;
export const metadata = {
  title: "Join Our Team for Job Opportunities to Explore Career - Webguruz",
  description: "Become a member of our team. We have jobs in SEO, web development, and business development. Call us or send us an email at jobs@webguruz.in for more information.",
  
};