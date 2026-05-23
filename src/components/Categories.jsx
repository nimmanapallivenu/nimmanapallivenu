import './Categories.css';

const Categories = () => {
  const categories = [
    {
      title: 'Programming',
      description: 'Java, JavaScript, Go, and Python with syntax notes, problem solving, best practices, and practical implementation examples.'
    },
    {
      title: 'Frameworks',
      description: 'Spring Boot, Spring MVC, Spring JPA, Spring JDBC, Spring AOP/ARM, Spring Batch, and Spring Kafka.'
    },
    {
      title: 'Data Structures & Design',
      description: 'Data Structures, System Design, Low Level Design, and Design Patterns for scalable engineering solutions.'
    },
    {
      title: 'Distributed Systems',
      description: 'Kafka, event-driven architecture, microservices, async communication, scalability, resiliency, and enterprise integration.'
    },
    {
      title: 'Cloud Skills',
      description: 'AWS, Azure, OpenShift, Docker, Kubernetes, and Istio with hands-on architecture and deployment concepts.'
    },
    {
      title: 'DevOps & AI Concepts',
      description: 'Jenkins, GitLab Pipeline, Git, Gradle, Maven, plus RAG, MCP, Agents, and Agentic AI concepts.'
    }
  ];

  return (
    <section id="focus" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Categories</p>
          <h2>Root topic structure for CodeWithVenu</h2>
        </div>
        <div className="card-grid" id="categories">
          {categories.map((category, index) => (
            <article key={index} className="info-card">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

// Made with Bob
