import { useState } from 'react';
import './Header.css';

const Header = ({ onTopicSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleTopicClick = (topic) => {
    onTopicSelect(topic);
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const navigationItems = {
    programming: ['Java', 'JavaScript', 'Go', 'Python'],
    frameworks: ['Spring Boot', 'Spring MVC', 'Spring JPA', 'Spring JDBC', 'Spring ARM', 'Spring Batch', 'Spring Kafka'],
    design: ['Data Structures', 'System Design', 'Low Level Design', 'Design Patterns'],
    distributed: ['Kafka', 'Event Driven Architecture', 'Microservices', 'Distributed System Concepts'],
    cloud: ['AWS', 'Azure', 'OpenShift', 'Docker', 'Kubernetes', 'Istio'],
    devopsAi: ['Jenkins', 'GitLab Pipeline', 'Git', 'Gradle', 'Maven', 'RAG', 'MCP', 'Agent', 'Agentic AI']
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="brand">
            CodeWith<span>Venu</span>
          </a>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'programming' ? 'open' : ''}`}>
              <button
                className="nav-dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown('programming')}
              >
                Programming
              </button>
              <ul className="dropdown-menu">
                {navigationItems.programming.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#topic-details"
                      className="topic-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTopicClick(topic);
                      }}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'frameworks' ? 'open' : ''}`}>
              <button
                className="nav-dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown('frameworks')}
              >
                Frameworks
              </button>
              <ul className="dropdown-menu">
                {navigationItems.frameworks.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#topic-details"
                      className="topic-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTopicClick(topic);
                      }}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'design' ? 'open' : ''}`}>
              <button
                className="nav-dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown('design')}
              >
                Design
              </button>
              <ul className="dropdown-menu">
                {navigationItems.design.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#topic-details"
                      className="topic-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTopicClick(topic);
                      }}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'distributed' ? 'open' : ''}`}>
              <button
                className="nav-dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown('distributed')}
              >
                Distributed
              </button>
              <ul className="dropdown-menu">
                {navigationItems.distributed.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#topic-details"
                      className="topic-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTopicClick(topic);
                      }}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'cloud' ? 'open' : ''}`}>
              <button
                className="nav-dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown('cloud')}
              >
                Cloud
              </button>
              <ul className="dropdown-menu">
                {navigationItems.cloud.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#topic-details"
                      className="topic-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTopicClick(topic);
                      }}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'devopsAi' ? 'open' : ''}`}>
              <button
                className="nav-dropdown-toggle"
                type="button"
                onClick={() => toggleDropdown('devopsAi')}
              >
                DevOps & AI
              </button>
              <ul className="dropdown-menu">
                {navigationItems.devopsAi.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#topic-details"
                      className="topic-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTopicClick(topic);
                      }}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#topic-details" onClick={() => setMenuOpen(false)}>Details</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>

        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">CodeWithVenu • Technical Blog • Structured Learning Hub</p>
            <h1>Documenting every concept, framework, and engineering topic in one organized technical website.</h1>
            <p className="hero-text">
              I am Venugopal Reddy Nimmanapalli. CodeWithVenu is my technical documentation platform where I organize programming languages, frameworks, design concepts, distributed systems, cloud skills, DevOps tooling, and AI topics into a structured knowledge base that can grow topic by topic.
            </p>
            <div className="hero-actions">
              <a href="#topics" className="btn btn-primary">Explore Topics</a>
              <a href="#contact" className="btn btn-secondary">Connect</a>
            </div>
          </div>
          <div className="hero-card">
            <h2>CodeWithVenu Vision</h2>
            <ul>
              <li><strong>Experience:</strong> 14+ Years</li>
              <li><strong>Current Focus:</strong> Full Stack Leadership and Continuous Learning</li>
              <li><strong>Domains:</strong> Banking, Insurance, Financial Services</li>
              <li><strong>Coverage:</strong> Programming, Frameworks, Design, Cloud, DevOps, AI</li>
              <li><strong>Learning Mission:</strong> Capture every important concept clearly</li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;

// Made with Bob
