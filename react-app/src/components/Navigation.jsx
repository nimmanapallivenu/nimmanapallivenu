import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/java', label: 'Java' },
    { path: '/javascript', label: 'JavaScript' },
    { path: '/go', label: 'Go' },
    { path: '/python', label: 'Python' },
    { path: '/spring-boot', label: 'Spring Boot' },
    { path: '/spring-mvc', label: 'Spring MVC' },
    { path: '/spring-jpa', label: 'Spring JPA' },
    { path: '/spring-jdbc', label: 'Spring JDBC' },
    { path: '/spring-arm', label: 'Spring ARM' },
    { path: '/spring-batch', label: 'Spring Batch' },
    { path: '/spring-kafka', label: 'Spring Kafka' },
    { path: '/data-structures', label: 'Data Structures' },
    { path: '/system-design', label: 'System Design' },
    { path: '/low-level-design', label: 'Low Level Design' },
    { path: '/design-patterns', label: 'Design Patterns' },
    { path: '/kafka', label: 'Kafka' },
    { path: '/event-driven-architecture', label: 'Event Driven Architecture' },
    { path: '/microservices', label: 'Microservices' },
    { path: '/distributed-system-concepts', label: 'Distributed System Concepts' },
    { path: '/aws', label: 'AWS' },
    { path: '/azure', label: 'Azure' },
    { path: '/openshift', label: 'OpenShift' },
    { path: '/docker', label: 'Docker' },
    { path: '/kubernetes', label: 'Kubernetes' },
    { path: '/istio', label: 'Istio' },
    { path: '/jenkins', label: 'Jenkins' },
    { path: '/gitlab-pipeline', label: 'GitLab Pipeline' },
    { path: '/git', label: 'Git' },
    { path: '/gradle', label: 'Gradle' },
    { path: '/maven', label: 'Maven' },
    { path: '/rag', label: 'RAG' },
    { path: '/mcp', label: 'MCP' },
    { path: '/agent', label: 'Agent' },
    { path: '/agentic-ai', label: 'Agentic AI' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="blog-nav">
      <div className="nav-container">
        <Link to="/" className="blog-brand">
          CodeWith<span>Venu</span>
        </Link>
        
        <button 
          className="nav-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

// Made with Bob
