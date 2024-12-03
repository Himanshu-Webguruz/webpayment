import Image from "next/image";
import Link from "next/link";

import { fetchPosts } from "../../../lib/fetchData";



const Featuredblog = async () => {
  const posts = await fetchPosts();

  if (posts.length === 0) {
    return <p>No posts available</p>;
  }
  return (
    <div>
      <section className="featured-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h2 className="pb-2">
                <span>Latest</span> From Us
              </h2>
              <span>
              Know what&apos;s latest in Digital Marketing and Web Development Technologies.
              </span>
            </div>
          </div>
          <div className="row blog-card-content">
            <div className="col-sm-6 col-xs-12 blog-sub left">
              {posts.slice(0,2).map((post, index) => (
                <div className="blog-card" key={index}>
                  <div className="blogimage">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt="img"
                      width={700}
                      height={340}
                    />
                  </div>
                  <div className="blog-content">
                    <span className="mb-2 d-inline-block">Blog </span>
                    <h6> {post.title.rendered}</h6>
                    <Link className="explore-btn" href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-6 col-xs-12 blog-sub right">
              <div className="blog-card">
                <div className="blogimage">
                  <Image
                    src={
                      posts[2].yoast_head_json.schema["@graph"][0].thumbnailUrl
                    }
                    alt="img"
                    width={700}
                    height={340}
                  />
                </div>
                <div className="blog-content">
                  <span className="mb-2 d-inline-block">Blog </span>
                  <h6> {posts[2].title.rendered}</h6>
                  <Link className="explore-btn" href={`/blog/${posts[2].slug}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuredblog;