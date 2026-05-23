import { useState } from 'react';
import { topics } from './data/topics';
import './App.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Java');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categories = {
    'Programming': ['Java', 'JavaScript', 'Go', 'Python'],
    'Frameworks': ['Spring Boot', 'Spring MVC', 'Spring JPA', 'Spring JDBC', 'Spring ARM', 'Spring Batch', 'Spring Kafka'],
    'System Design': ['Data Structures', 'System Design', 'Low Level Design', 'Design Patterns'],
    'Distributed Systems': ['Kafka', 'Event Driven Architecture', 'Microservices', 'Distributed System Concepts'],
    'Cloud': ['AWS', 'Azure', 'OpenShift', 'Docker', 'Kubernetes', 'Istio'],
    'DevOps & AI': ['Jenkins', 'GitLab Pipeline', 'Git', 'Gradle', 'Maven', 'RAG', 'MCP', 'Agent', 'Agentic AI']
  };

  const currentTopic = topics.find(t => t.title === selectedTopic);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setActiveDropdown(null);
  };

  return (
    <div className="app-container">
      {/* Fixed Header - 100px */}
      <header className="app-header">
        <div className="header-content">
          <div className="brand-section">
            <h1 className="brand-title">CodeWith<span>Venu</span></h1>
            <p className="brand-subtitle">Technical Blog & Learning Platform</p>
          </div>
          
          <nav className="main-nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <button 
                  className="nav-button"
                  onClick={() => handleTopicSelect('Home')}
                >
                  Home
                </button>
              </li>
              
              {Object.entries(categories).map(([category, items]) => (
                <li 
                  key={category}
                  className="nav-item dropdown"
                  onMouseEnter={() => setActiveDropdown(category)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-button">
                    {category}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  
                  {activeDropdown === category && (
                    <ul className="dropdown-menu">
                      {items.map((item) => (
                        <li key={item}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleTopicSelect(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              
              <li className="nav-item">
                <button 
                  className="nav-button"
                  onClick={() => handleTopicSelect('About')}
                >
                  About
                </button>
              </li>
              
              <li className="nav-item">
                <button 
                  className="nav-button"
                  onClick={() => handleTopicSelect('Contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Content Area */}
      <main className="content-area">
        <div className="content-container">
          {selectedTopic === 'Home' ? (
            <div className="home-content">
              <div className="hero-section">
                <h1>Welcome to CodeWithVenu</h1>
                <p className="hero-description">
                  Comprehensive documentation covering programming languages, frameworks, 
                  system design, distributed systems, cloud technologies, DevOps, and AI concepts.
                </p>
              </div>
              
              <div className="categories-grid">
                {Object.entries(categories).map(([category, items]) => (
                  <div key={category} className="category-card">
                    <h2>{category}</h2>
                    <ul className="category-topics">
                      {items.map((item) => (
                        <li key={item}>
                          <button
                            className="topic-link"
                            onClick={() => handleTopicSelect(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedTopic === 'About' ? (
            <div className="page-content">
              <h1>About CodeWithVenu</h1>
              <div className="content-section">
                <h2>Mission</h2>
                <p>
                  CodeWithVenu is a comprehensive technical documentation platform dedicated to 
                  organizing and sharing knowledge across programming languages, frameworks, 
                  design patterns, distributed systems, cloud technologies, DevOps practices, 
                  and AI concepts.
                </p>
              </div>
              <div className="content-section">
                <h2>About the Author</h2>
                <h3>Venugopal Reddy Nimmanapalli</h3>
                <p className="author-title">Principal Full Stack Engineer</p>
                <p>
                  With over 14 years of experience in software engineering, I specialize in 
                  designing, building, and leading the delivery of large-scale, cloud-native, 
                  and distributed systems.
                </p>
              </div>
            </div>
          ) : selectedTopic === 'Contact' ? (
            <div className="page-content">
              <h1>Contact Information</h1>
              <div className="content-section">
                <h2>Get in Touch</h2>
                <p>Feel free to reach out for professional inquiries or technical discussions.</p>
                <div className="contact-info">
                  <p><strong>Name:</strong> Venugopal Reddy Nimmanapalli</p>
                  <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nimmanapallivenu" target="_blank" rel="noopener noreferrer">linkedin.com/in/nimmanapallivenu</a></p>
                </div>
              </div>
            </div>
          ) : currentTopic ? (
            <div className="topic-content">
              <div className="topic-header">
                <span className="topic-badge">{currentTopic.category}</span>
                <h1>{currentTopic.title}</h1>
                <p className="topic-description">{currentTopic.description}</p>
              </div>

              <div className="topic-body">
                <h2>Overview</h2>
                <p>
                  This comprehensive guide covers everything you need to know about {currentTopic.title}. 
                  Whether you're a beginner or an experienced developer, you'll find valuable 
                  insights and practical knowledge here.
                </p>

                <h2>Key Concepts</h2>
                <div className="concepts-list">
                  {currentTopic.concepts.map((concept, index) => (
                    <div key={index} className="concept-item">
                      <span className="concept-number">{index + 1}</span>
                      <p>{concept}</p>
                    </div>
                  ))}
                </div>

                <h2>Why Learn {currentTopic.title}?</h2>
                <p>
                  Understanding {currentTopic.title} is essential for modern software development. 
                  It provides the foundation for building scalable, maintainable, and efficient applications.
                </p>

                <h2>Getting Started</h2>
                <p>
                  To begin your journey with {currentTopic.title}, start by understanding the fundamental 
                  concepts listed above. Each concept builds upon the previous one, creating a 
                  comprehensive learning path.
                </p>

                <h2>Best Practices</h2>
                <ul className="best-practices-list">
                  <li>Start with the basics and build a strong foundation</li>
                  <li>Practice regularly with hands-on coding exercises</li>
                  <li>Read official documentation and stay updated</li>
                  <li>Join community forums and discussions</li>
                  <li>Work on real-world projects to apply your knowledge</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="page-content">
              <h1>Topic Not Found</h1>
              <p>Please select a topic from the navigation menu.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 CodeWithVenu • Built with React by Venugopal Reddy Nimmanapalli</p>
      </footer>
    </div>
  );
}

export default App;

// Made with Bob
