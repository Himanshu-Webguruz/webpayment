const sections = [
    {
      title: "Design Tools",
      items: ["Adobe XD", "Figma", "Sketch", "Invision", "Illustrator", "Photoshop", "After Effects"],
    },
    {
      title: "Frontend Frameworks",
      items: ["React.js", "Angular", "Docker", "Blockchain", "Ruby on Rails", "Arduino"],
    },
    {
      title: "Mobile Technologies",
      items: ["React Native", "Flutter", "Swift", "Kotlin", "Java", "Objective C"],
    },
    {
      title: "Backend/Server-side",
      items: ["Node.js", "PHP", ".NET", "Mongo", "Redis", "LAMP"],
    },
  ];
  
  const TechnologySection = ({ title, items }) => (
    <div className="col-12 col-sm-6 col-lg-3 design-heading">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  
  const TechnologyOperate = () => {
    return (
      <section className="technology-operate py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center pb-4">
              <span>Development Process</span>
              <h2><span>Technologies</span> We Operate in</h2>
            </div>
          </div>
          <div className="row">
            {sections.map((section, index) => (
              <TechnologySection key={index} title={section.title} items={section.items} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TechnologyOperate;
  