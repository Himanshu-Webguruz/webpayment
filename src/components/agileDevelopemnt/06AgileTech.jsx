
import agile from "../../../public/images/agileimg/agile-1.webp";
import Image from "next/image";
const AgileTech = () => {
  return (
    <>
      <section className="scalabilty-main agile-tech py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 content heading-main text-center">
              <h2 className="mb-4">
              Agile Software Development, <span> the WebGuruz Way</span>
              </h2>
            </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-12 agile-img">
                     <Image src={agile} alt="Agile Software Development"/>
              </div>
              <div className="col-md-6 col-12 agile-tech-para">
                <p>
                At WebGuruz, we understand that modern businesses need agile solutions to keep up with change. Our agile services are designed to be adaptable, collaborative, and result-oriented. By focusing on continuous improvement and close client involvement, we deliver software that not only meets but often exceeds client expectations.
                </p>
                <p><strong>Partner with WebGuruz to experience agile development that truly makes a difference in today&apos;s competitive market.</strong></p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default AgileTech;
