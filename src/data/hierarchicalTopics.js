export const hierarchicalTopics = [
  {
    id: 'java',
    title: 'Java',
    icon: '☕',
    progress: 0,
    total: 15,
    subtopics: [
      { id: 'java-basics', title: 'Java Basics', completed: false },
      { id: 'data-types', title: 'Data Types', completed: false },
      { id: 'variables', title: 'Variables', completed: false },
      { id: 'operators', title: 'Operators', completed: false },
      { id: 'control-flow', title: 'Control Flow', completed: false },
      { id: 'methods', title: 'Methods', completed: false },
      { id: 'oop-concepts', title: 'OOP Concepts', completed: false },
      { id: 'classes-objects', title: 'Classes & Objects', completed: false },
      { id: 'inheritance', title: 'Inheritance', completed: false },
      { id: 'polymorphism', title: 'Polymorphism', completed: false },
      { id: 'interfaces', title: 'Interfaces', completed: false },
      { id: 'exception-handling', title: 'Exception Handling', completed: false },
      { id: 'collections', title: 'Collections', completed: false },
      { id: 'generics', title: 'Generics', completed: false },
      { id: 'threads', title: 'Threads & Concurrency', completed: false }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: '🟨',
    progress: 0,
    total: 12,
    subtopics: [
      { id: 'js-basics', title: 'JavaScript Basics', completed: false },
      { id: 'variables-scope', title: 'Variables & Scope', completed: false },
      { id: 'functions', title: 'Functions', completed: false },
      { id: 'objects-arrays', title: 'Objects & Arrays', completed: false },
      { id: 'dom-manipulation', title: 'DOM Manipulation', completed: false },
      { id: 'events', title: 'Event Handling', completed: false },
      { id: 'promises', title: 'Promises', completed: false },
      { id: 'async-await', title: 'Async/Await', completed: false },
      { id: 'es6-features', title: 'ES6+ Features', completed: false },
      { id: 'modules', title: 'Modules', completed: false },
      { id: 'error-handling', title: 'Error Handling', completed: false },
      { id: 'fetch-api', title: 'Fetch API', completed: false }
    ]
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    icon: '🍃',
    progress: 0,
    total: 10,
    subtopics: [
      { id: 'spring-boot-intro', title: 'Introduction', completed: false },
      { id: 'auto-configuration', title: 'Auto Configuration', completed: false },
      { id: 'starters', title: 'Starters', completed: false },
      { id: 'rest-controllers', title: 'REST Controllers', completed: false },
      { id: 'dependency-injection', title: 'Dependency Injection', completed: false },
      { id: 'data-jpa', title: 'Spring Data JPA', completed: false },
      { id: 'security', title: 'Spring Security', completed: false },
      { id: 'testing', title: 'Testing', completed: false },
      { id: 'actuator', title: 'Actuator', completed: false },
      { id: 'deployment', title: 'Deployment', completed: false }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design',
    icon: '🏗️',
    progress: 0,
    total: 12,
    subtopics: [
      { id: 'scalability', title: 'Scalability', completed: false },
      { id: 'load-balancing', title: 'Load Balancing', completed: false },
      { id: 'caching', title: 'Caching Strategies', completed: false },
      { id: 'database-design', title: 'Database Design', completed: false },
      { id: 'microservices', title: 'Microservices', completed: false },
      { id: 'api-design', title: 'API Design', completed: false },
      { id: 'message-queues', title: 'Message Queues', completed: false },
      { id: 'cdn', title: 'CDN', completed: false },
      { id: 'monitoring', title: 'Monitoring', completed: false },
      { id: 'security', title: 'Security', completed: false },
      { id: 'disaster-recovery', title: 'Disaster Recovery', completed: false },
      { id: 'case-studies', title: 'Case Studies', completed: false }
    ]
  },
  {
    id: 'aws',
    title: 'AWS',
    icon: '☁️',
    progress: 0,
    total: 10,
    subtopics: [
      { id: 'aws-intro', title: 'AWS Introduction', completed: false },
      { id: 'ec2', title: 'EC2', completed: false },
      { id: 's3', title: 'S3', completed: false },
      { id: 'rds', title: 'RDS', completed: false },
      { id: 'lambda', title: 'Lambda', completed: false },
      { id: 'vpc', title: 'VPC', completed: false },
      { id: 'iam', title: 'IAM', completed: false },
      { id: 'cloudwatch', title: 'CloudWatch', completed: false },
      { id: 'cloudformation', title: 'CloudFormation', completed: false },
      { id: 'best-practices', title: 'Best Practices', completed: false }
    ]
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: '🐳',
    progress: 0,
    total: 8,
    subtopics: [
      { id: 'docker-intro', title: 'Docker Introduction', completed: false },
      { id: 'images', title: 'Images', completed: false },
      { id: 'containers', title: 'Containers', completed: false },
      { id: 'dockerfile', title: 'Dockerfile', completed: false },
      { id: 'docker-compose', title: 'Docker Compose', completed: false },
      { id: 'networking', title: 'Networking', completed: false },
      { id: 'volumes', title: 'Volumes', completed: false },
      { id: 'best-practices', title: 'Best Practices', completed: false }
    ]
  }
];

export const getTopicContent = (topicId, subtopicId) => {
  const content = {
    'java-basics': {
      title: 'Java Basics',
      readTime: '10 min read',
      sections: [
        { id: 'what-is-java', title: 'What is Java?' },
        { id: 'jdk-jre-jvm', title: 'JDK, JRE, and JVM' },
        { id: 'first-program', title: 'Your First Java Program' },
        { id: 'syntax', title: 'Basic Syntax' }
      ],
      content: `
# Java Basics

## What is Java?

Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA).

## JDK, JRE, and JVM

- **JDK (Java Development Kit)**: Complete development kit including compiler, debugger, and other tools
- **JRE (Java Runtime Environment)**: Runtime environment to execute Java applications
- **JVM (Java Virtual Machine)**: Abstract machine that enables your computer to run Java programs

## Your First Java Program

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Basic Syntax

- Java is case-sensitive
- Class names should start with uppercase
- Method names should start with lowercase
- Program execution starts from main() method
      `
    },
    'data-types': {
      title: 'Data Types in Java',
      readTime: '8 min read',
      sections: [
        { id: 'primitive-types', title: 'Primitive Data Types' },
        { id: 'reference-types', title: 'Reference Data Types' },
        { id: 'type-conversion', title: 'Type Conversion' }
      ],
      content: `
# Data Types in Java

## Primitive Data Types

Java has 8 primitive data types:

1. **byte**: 8-bit signed integer
2. **short**: 16-bit signed integer
3. **int**: 32-bit signed integer
4. **long**: 64-bit signed integer
5. **float**: 32-bit floating point
6. **double**: 64-bit floating point
7. **boolean**: true or false
8. **char**: 16-bit Unicode character

\`\`\`java
int age = 25;
double salary = 50000.50;
boolean isActive = true;
char grade = 'A';
\`\`\`

## Reference Data Types

Reference types include:
- Classes
- Interfaces
- Arrays
- Strings

\`\`\`java
String name = "John Doe";
int[] numbers = {1, 2, 3, 4, 5};
\`\`\`
      `
    }
  };

  return content[subtopicId] || {
    title: 'Content Coming Soon',
    readTime: '5 min read',
    sections: [],
    content: '# Content is being prepared\n\nThis section will be available soon.'
  };
};

// Made with Bob
