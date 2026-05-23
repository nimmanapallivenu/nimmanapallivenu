import './Journey.css';

const Journey = () => {
  const steps = [
    {
      number: '01',
      title: 'Select a Category',
      description: 'Start from a root area such as Programming, Frameworks, Design, Distributed Systems, Cloud, DevOps, or AI.'
    },
    {
      number: '02',
      title: 'Break Down Concepts',
      description: 'Document definitions, architecture, APIs, annotations, lifecycle, features, interview questions, and best practices.'
    },
    {
      number: '03',
      title: 'Add Practical Examples',
      description: 'Capture code snippets, project notes, diagrams, pitfalls, troubleshooting tips, and real-world enterprise use cases.'
    },
    {
      number: '04',
      title: 'Expand Category by Category',
      description: 'Continuously add subtopics and maintain a living knowledge base as experience and understanding evolve.'
    }
  ];

  return (
    <section id="journey" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Approach</p>
          <h2>A repeatable method to document each topic in depth</h2>
        </div>
        <div className="journey-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

// Made with Bob
