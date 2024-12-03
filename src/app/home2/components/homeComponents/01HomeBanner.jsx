import Image from "next/image";

const HomeBanner = () => {
  return (
    <section className="home-banner d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 video-banner">
            <Image
              src="/images/bannerhomies.webp"
              alt="Banner Image"
              width={1920}
              height={1080}
              priority
            />
          </div>
          <div className="col col-sm-8 col-xs-12 banner-content">
            <h1>
              Crafting{" "}
              <span className="animate-charcter">
                Websites & Digital Marketing Strategies{" "}
              </span>{" "}
              that Convert
            </h1>
            <p className="mt-4">
              Your Digital Vision, Our Technical Brilliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
