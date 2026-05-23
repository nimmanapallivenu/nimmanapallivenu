import { useParams, Link } from 'react-router-dom';
import { topics } from '../data/topics';
import './TopicPage.css';

const TopicPage = () => {
  const { slug } = useParams();
  
  // Convert slug to topic title
  const topicTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const topic = topics.find(t => 
    t.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!topic) {
    return (
      <div className="topic-page">
        <div className="container">
          <div className="not-found">
            <h1>Topic Not Found</h1>
            <p>The topic you're looking for doesn't exist.</p>
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="topic-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <article className="topic-article">
          <header className="topic-header">
            <span className="topic-category">{topic.category}</span>
            <h1>{topic.title}</h1>
            <p className="topic-intro">{topic.description}</p>
          </header>

          <section className="topic-content">
            <h2>Overview</h2>
            <p>
              This comprehensive guide covers everything you need to know about {topic.title}. 
              Whether you're a beginner or an experienced developer, you'll find valuable 
              insights and practical knowledge here.
            </p>

            <h2>Key Concepts</h2>
            <div className="concepts-grid">
              {topic.concepts.map((concept, index) => (
                <div key={index} className="concept-card">
                  <div className="concept-number">{index + 1}</div>
                  <p>{concept}</p>
                </div>
              ))}
            </div>

            <h2>Why Learn {topic.title}?</h2>
            <p>
              Understanding {topic.title} is essential for modern software development. 
              It provides the foundation for building scalable, maintainable, and efficient applications.
            </p>

            <h2>Getting Started</h2>
            <p>
              To begin your journey with {topic.title}, start by understanding the fundamental 
              concepts listed above. Each concept builds upon the previous one, creating a 
              comprehensive learning path.
            </p>

            <h2>Best Practices</h2>
            <ul className="best-practices">
              <li>Start with the basics and build a strong foundation</li>
              <li>Practice regularly with hands-on coding exercises</li>
              <li>Read official documentation and stay updated</li>
              <li>Join community forums and discussions</li>
              <li>Work on real-world projects to apply your knowledge</li>
            </ul>

            <h2>Resources</h2>
            <p>
              Continue your learning journey with these recommended resources:
            </p>
            <ul className="resources-list">
              <li>Official documentation and guides</li>
              <li>Online tutorials and video courses</li>
              <li>Books and technical articles</li>
              <li>Community forums and Q&A sites</li>
              <li>Open-source projects and code examples</li>
            </ul>

            <h2>Next Steps</h2>
            <p>
              After mastering the concepts covered here, explore related topics to expand 
              your knowledge and become a well-rounded developer.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TopicPage;

// Made with Bob
