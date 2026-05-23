import './Structure.css';

const Structure = () => {
  const skills = [
    {
      title: 'Programming',
      description: 'Java, JavaScript, Go, Python'
    },
    {
      title: 'Frameworks',
      description: 'Spring Boot, Spring MVC, Spring JPA, Spring JDBC, Spring ARM, Spring Batch, Spring Kafka'
    },
    {
      title: 'Architecture & Design',
      description: 'Data Structure, System Design, Low Level Design, Design Patterns'
    },
    {
      title: 'Distributed Systems',
      description: 'Kafka, Event Driven Architecture, Microservices, Distributed System Concepts'
    },
    {
      title: 'Cloud Skills',
      description: 'AWS, Azure, OpenShift, Docker, Kubernetes, Istio'
    },
    {
      title: 'DevOps & AI Concepts',
      description: 'Jenkins, K8s, GitLab Pipeline, Git, Gradle, Maven, RAG, MCP, Agent, Agentic AI'
    }
  ];

  return (
    <section id="structure" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Structure</p>
          <h2>Planned documentation hierarchy</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-block">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;

// Made with Bob
