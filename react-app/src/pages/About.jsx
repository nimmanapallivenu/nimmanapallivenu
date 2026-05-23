import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <article className="about-article">
          <h1>About CodeWithVenu</h1>
          
          <section className="about-section">
            <h2>Mission</h2>
            <p>
              CodeWithVenu is a comprehensive technical documentation platform dedicated to 
              organizing and sharing knowledge across programming languages, frameworks, 
              design patterns, distributed systems, cloud technologies, DevOps practices, 
              and AI concepts.
            </p>
          </section>

          <section className="about-section">
            <h2>About the Author</h2>
            <div className="author-info">
              <h3>Venugopal Reddy Nimmanapalli</h3>
              <p className="author-title">Principal Full Stack Engineer</p>
              <p>
                With over 14 years of experience in software engineering, I specialize in 
                designing, building, and leading the delivery of large-scale, cloud-native, 
                and distributed systems. My expertise spans enterprise modernization, 
                event-driven platforms, microservices architecture, CI/CD automation, 
                observability, and production support in regulated industries.
              </p>
            </div>
          </section>

          <section className="about-section">
            <h2>Experience & Expertise</h2>
            <ul className="expertise-list">
              <li><strong>Years of Experience:</strong> 14+ years</li>
              <li><strong>Current Focus:</strong> Full Stack Leadership and Continuous Learning</li>
              <li><strong>Industry Domains:</strong> Banking, Insurance, Financial Services</li>
              <li><strong>Technical Coverage:</strong> Programming, Frameworks, Design, Cloud, DevOps, AI</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Platform Purpose</h2>
            <p>
              This website serves as a structured documentation platform where I continuously 
              learn topics in depth and document every concept, framework feature, architectural 
              principle, and implementation note in a reusable, organized format.
            </p>
            <p>
              My goal is to create a comprehensive knowledge base that grows topic by topic, 
              providing clear explanations and practical insights for developers at all levels.
            </p>
          </section>

          <section className="about-section">
            <h2>Topics Covered</h2>
            <div className="topics-covered">
              <div className="topic-category">
                <h4>Programming Languages</h4>
                <p>Java, JavaScript, Go, Python</p>
              </div>
              <div className="topic-category">
                <h4>Frameworks</h4>
                <p>Spring Boot, Spring MVC, Spring JPA, Spring JDBC, Spring ARM, Spring Batch, Spring Kafka</p>
              </div>
              <div className="topic-category">
                <h4>Design & Architecture</h4>
                <p>Data Structures, System Design, Low Level Design, Design Patterns</p>
              </div>
              <div className="topic-category">
                <h4>Distributed Systems</h4>
                <p>Kafka, Event Driven Architecture, Microservices, Distributed System Concepts</p>
              </div>
              <div className="topic-category">
                <h4>Cloud Technologies</h4>
                <p>AWS, Azure, OpenShift, Docker, Kubernetes, Istio</p>
              </div>
              <div className="topic-category">
                <h4>DevOps & AI</h4>
                <p>Jenkins, GitLab Pipeline, Git, Gradle, Maven, RAG, MCP, Agent, Agentic AI</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Connect</h2>
            <p>
              For more information or to connect professionally, please visit the{' '}
              <Link to="/contact">Contact page</Link>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default About;

// Made with Bob
