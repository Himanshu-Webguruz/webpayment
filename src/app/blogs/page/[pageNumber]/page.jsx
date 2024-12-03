// src/app/blogs/page/[pageNumber]/page.jsx
import { getBlogData } from "../../../../../lib/blogsData";
import Link from "next/link";
import AllPost from "../../../../components/blogComponents/02AllPosts";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import "../../blogs.css";
import HiringForm from "@/components/PopUpForms/hiringform";
export default async function BlogsPageNumber({ params }) {
  const pageNumber = parseInt(params.pageNumber, 10);
  const { posts, totalPages, currentPage } = await getBlogData(pageNumber);

  return (
    <section className="blog-content-main">
      <div className="container">
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
          posts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <ExploreTopic />
      <BlogNewsletter />
      <HiringForm/>
    </section>
  );
}
export const metadata = {
  title: "Browse and Read Our Latest Web Technology Blogs - Webguruz",
  description:
    "Read insightful articles on web development, digital marketing, SEO, PPC, and SMO at Webguruz Blogs. Stay updated with the latest trends to boost your business.",
};