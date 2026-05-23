import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const categories = [
    {
      title: 'Programming Languages',
      topics: [
        { name: 'Java', path: '/java' },
        { name: 'JavaScript', path: '/javascript' },
        { name: 'Go', path: '/go' },
        { name: 'Python', path: '/python' }
      ]
    },
    {
      title: 'Frameworks',
      topics: [
        { name: 'Spring Boot', path: '/spring-boot' },
        { name: 'Spring MVC', path: '/spring-mvc' },
        { name: 'Spring JPA', path: '/spring-jpa' },
        { name: 'Spring JDBC', path: '/spring-jdbc' },
        { name: 'Spring ARM', path: '/spring-arm' },
        { name: 'Spring Batch', path: '/spring-batch' },
        { name: 'Spring Kafka', path: '/spring-kafka' }
      ]
    },
    {
      title: 'Design & Architecture',
      topics: [
        { name: 'Data Structures', path: '/data-structures' },
        { name: 'System Design', path: '/system-design' },
        { name: 'Low Level Design', path: '/low-level-design' },
        { name: 'Design Patterns', path: '/design-patterns' }
      ]
    },
    {
      title: 'Distributed Systems',
      topics: [
        { name: 'Kafka', path: '/kafka' },
        { name: 'Event Driven Architecture', path: '/event-driven-architecture' },
        { name: 'Microservices', path: '/microservices' },
        { name: 'Distributed System Concepts', path: '/distributed-system-concepts' }
      ]
    },
    {
      title: 'Cloud Technologies',
      topics: [
        { name: 'AWS', path: '/aws' },
        { name: 'Azure', path: '/azure' },
        { name: 'OpenShift', path: '/openshift' },
        { name: 'Docker', path: '/docker' },
        { name: 'Kubernetes', path: '/kubernetes' },
        { name: 'Istio', path: '/istio' }
      ]
    },
    {
      title: 'DevOps & AI',
      topics: [
        { name: 'Jenkins', path: '/jenkins' },
        { name: 'GitLab Pipeline', path: '/gitlab-pipeline' },
        { name: 'Git', path: '/git' },
        { name: 'Gradle', path: '/gradle' },
        { name: 'Maven', path: '/maven' },
        { name: 'RAG', path: '/rag' },
        { name: 'MCP', path: '/mcp' },
        { name: 'Agent', path: '/agent' },
        { name: 'Agentic AI', path: '/agentic-ai' }
      ]
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>CodeWithVenu</h1>
          <p className="hero-subtitle">Technical Blog & Learning Platform</p>
          <p className="hero-description">
            Comprehensive documentation covering programming languages, frameworks, 
            system design, distributed systems, cloud technologies, DevOps, and AI concepts.
          </p>
        </div>
      </section>

      <section className="topics-section">
        <div className="container">
          <h2>Explore Topics</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>{category.title}</h3>
                <ul className="topic-list">
                  {category.topics.map((topic, idx) => (
                    <li key={idx}>
                      <Link to={topic.path}>{topic.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Made with Bob
