import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <article className="contact-article">
          <h1>Contact Information</h1>
          
          <section className="contact-section">
            <h2>Get in Touch</h2>
            <p>
              Feel free to reach out for professional inquiries, collaboration opportunities, 
              or technical discussions.
            </p>
          </section>

          <section className="contact-details">
            <div className="contact-card">
              <div className="contact-icon">👤</div>
              <h3>Name</h3>
              <p>Venugopal Reddy Nimmanapalli</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>
                <a 
                  href="https://linkedin.com/in/nimmanapallivenu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/nimmanapallivenu
                </a>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Website</h3>
              <p>CodeWithVenu Technical Blog</p>
            </div>
          </section>

          <section className="contact-section">
            <h2>Professional Background</h2>
            <p>
              Principal Full Stack Engineer with 14+ years of experience in designing 
              and building large-scale distributed systems, cloud-native applications, 
              and enterprise solutions.
            </p>
          </section>

          <section className="contact-section">
            <h2>Areas of Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <h4>Backend Development</h4>
                <p>Java, Spring Boot, Microservices</p>
              </div>
              <div className="expertise-item">
                <h4>Frontend Development</h4>
                <p>JavaScript, React, Modern Web</p>
              </div>
              <div className="expertise-item">
                <h4>Cloud & DevOps</h4>
                <p>AWS, Azure, Kubernetes, CI/CD</p>
              </div>
              <div className="expertise-item">
                <h4>Architecture</h4>
                <p>System Design, Distributed Systems</p>
              </div>
            </div>
          </section>

          <section className="contact-section">
            <h2>Connect</h2>
            <p>
              The best way to connect is through LinkedIn. I'm always interested in 
              discussing technology, architecture, and software engineering best practices.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Contact;

// Made with Bob
