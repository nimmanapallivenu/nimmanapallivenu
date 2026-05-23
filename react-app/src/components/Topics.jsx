import { useState } from 'react';
import { topics } from '../data/topics';
import './Topics.css';

const Topics = ({ onTopicSelect }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'design', label: 'Design' },
    { id: 'distributed', label: 'Distributed' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'devops', label: 'DevOps' },
    { id: 'ai', label: 'AI' }
  ];

  const filteredTopics = activeFilter === 'all' 
    ? topics 
    : topics.filter(topic => topic.category === activeFilter);

  const handleTopicClick = (topicTitle) => {
    onTopicSelect(topicTitle);
    document.getElementById('topic-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="topics" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Topics</p>
          <h2>Browse topic groups and planned notes</h2>
        </div>
        <div className="topic-controls">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`topic-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="topic-grid">
          {filteredTopics.map((topic, index) => (
            <article key={index} className="topic-card">
              <span className="topic-meta">{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <button
                className="topic-open-btn"
                onClick={() => handleTopicClick(topic.title)}
              >
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;

// Made with Bob
