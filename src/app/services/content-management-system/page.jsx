// export const dynamic = 'force-dynamic'
import "../../contact-us/contact.css";
import CmsBanner from "@/components/otherServices/cmsDev/01CmsBanner";
import CmsForm from "@/components/otherServices/cmsDev/02CmsForm";
import CmsWebServices from "@/components/otherServices/cmsDev/03CmsWebServices";
import CmsComprehensiveServices from "@/components/otherServices/cmsDev/04CmsComprehensiveServices";
import CmsAboutIt from "@/components/otherServices/cmsDev/05CmsAboutIt";
import CmsWebSolution from "@/components/otherServices/cmsDev/06CmsWebSolution";
import CmsHireUsPage from "@/components/otherServices/cmsDev/08CmsHireUsPage";
import ProminentPrtnr from "@/components/otherServices/cmsDev/09ProminentPrtnr";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CmsLogos from "@/components/otherServices/cmsDev/CmsLogos";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import HiringForm from "@/components/PopUpForms/hiringform";
const page = () => {
  return (
    <>
      <CmsBanner />
      <CmsForm />
      <CmsWebServices />
      <CmsComprehensiveServices />
      <CmsAboutIt />
      <CmsWebSolution />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="Diverse Solutions Across Multiple Industry Verticals"
      />
      <CmsHireUsPage />
      <ProminentPrtnr />
      <CmsLogos />
      <Featuredblog />
      <HiringForm />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert CMS Development Services: Streamline Your Website",
  description:
    "Experience seamless content management with our expert CMS Development Services. Enhance your website's efficiency & flexibility significantly. Contact us now!",
};