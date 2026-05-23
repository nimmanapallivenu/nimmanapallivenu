import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2>Engineering profile and purpose</h2>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p>
              Principal Full Stack Engineer with 14 years of experience designing, building, and leading delivery of large-scale, cloud-native, and distributed systems. I have worked across enterprise modernization, event-driven platforms, microservices, CI/CD automation, observability, and production support in regulated industries.
            </p>
            <p>
              This website is designed as a technical blog and structured documentation platform. My goal is to continuously learn topics in depth and document every concept, framework feature, architectural principle, and implementation note in a reusable, organized format.
            </p>
          </div>
          <div className="contact-card" id="contact">
            <h3>Contact</h3>
            <p><strong>Name:</strong> Venugopal Reddy Nimmanapalli</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nimmanapallivenu" target="_blank" rel="noreferrer">linkedin.com/in/nimmanapallivenu</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Made with Bob
