import { topics } from '../data/topics';
import './TopicDetails.css';

const TopicDetails = ({ selectedTopic }) => {
  const topic = topics.find(t => t.title === selectedTopic);

  if (!topic) {
    return (
      <section id="topic-details" className="section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Topic Details</p>
            <h2>Detailed concept notes</h2>
          </div>
          <div className="topic-detail-card">
            <p className="topic-detail-placeholder">
              Select a topic from the top navigation dropdown or from the topic cards to view detailed concept notes here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="topic-details" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Topic Details</p>
          <h2>Detailed concept notes</h2>
        </div>
        <div className="topic-detail-card">
          <div className="topic-detail-header">
            <span className="topic-meta">{topic.category}</span>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
          <div className="topic-detail-body">
            <h4>Concepts Covered</h4>
            <ul className="concept-list">
              {topic.concepts.map((concept, index) => (
                <li key={index}>{concept}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicDetails;

// Made with Bob
