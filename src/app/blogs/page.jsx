import "./blogs.css";
import AllPost from "../../components/blogComponents/02AllPosts";
import Link from "next/link";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import HiringForm from "@/components/PopUpForms/hiringform";


const page = async ({ searchParams }) => {
  const params=await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const limit = 10;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { data, currentPage, totalPages } = await response.json();
  console.log(data[0])



  return (
    <>
      <section className="blog-content-main">
        <div className="container">
        <h1 className="text-center mb-4">Our <span>Blogs</span></h1>
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <ul>
                <li>
                  <Link href="/categories/web-design">Web Design</Link>
                </li>
                <li>
                  <Link href="/categories/online-reputation-management">
                    Online Reputation Management
                  </Link>
                </li>
                <li>
                  <Link href="/categories/hubspot">Hubspot</Link>
                </li>
                <li>
                  <Link href="/categories/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/categories/google-remarketing">
                    Google Remarketing
                  </Link>
                </li>

                <li>
                  <Link href="/categories/artificial-intelligence">
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <AllPost
            posts={data}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
        <ExploreTopic />
        <BlogNewsletter />
        <HiringForm/>

      </section>
    </>
  );
};

export default page;
export const metadata = {
  title: "Browse and Read Our Latest Web Technology Blogs - WebGuruz",
  description:
    "Read insightful articles on web development, digital marketing, SEO, PPC, and SMO at WebGuruz Blogs. Stay updated with the latest trends to boost your business.",
};
