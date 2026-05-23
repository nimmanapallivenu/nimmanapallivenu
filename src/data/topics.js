export const topics = [
  {
    title: "Java",
    category: "programming",
    description: "Core Java, OOP, collections, streams, concurrency, JVM concepts, and coding best practices.",
    concepts: [
      "Java overview and history",
      "JDK, JRE, and JVM",
      "Data types, variables, operators, and control statements",
      "Classes, objects, inheritance, polymorphism, abstraction, and encapsulation",
      "Interfaces, abstract classes, records, and enums",
      "Collections framework, generics, streams, and lambda expressions",
      "Exception handling, multithreading, concurrency, and executor framework",
      "Memory management, garbage collection, JVM tuning, and performance basics",
      "Java 8 to 21 features, coding standards, and enterprise best practices"
    ]
  },
  {
    title: "JavaScript",
    category: "programming",
    description: "Language fundamentals, DOM, ES6+, async programming, browser APIs, and practical UI interactions.",
    concepts: [
      "Syntax, variables, scope, hoisting, and closures",
      "Functions, objects, arrays, prototypes, and modules",
      "DOM manipulation and event handling",
      "Promises, async/await, callbacks, and fetch/AJAX",
      "ES6+ features, error handling, and browser storage",
      "Performance, debugging, and reusable frontend patterns"
    ]
  },
  {
    title: "Go",
    category: "programming",
    description: "Goroutines, channels, package structure, backend utilities, and performance-oriented programming concepts.",
    concepts: [
      "Packages, variables, constants, and functions",
      "Structs, interfaces, methods, and composition",
      "Concurrency using goroutines and channels",
      "Error handling, pointers, slices, maps, and testing",
      "Go modules, project structure, and backend API development"
    ]
  },
  {
    title: "Python",
    category: "programming",
    description: "Python syntax, scripting, APIs, automation, data structures, and engineering productivity workflows.",
    concepts: [
      "Syntax, variables, data types, loops, and functions",
      "Lists, tuples, dictionaries, sets, and comprehensions",
      "Object-oriented programming and modules",
      "File handling, exceptions, decorators, and generators",
      "Automation, APIs, testing, and scripting best practices"
    ]
  },
  {
    title: "Spring Boot",
    category: "framework",
    description: "Auto-configuration, starters, profiles, actuator, REST services, and enterprise-ready microservice patterns.",
    concepts: [
      "Spring Boot architecture and auto-configuration",
      "Starters, dependencies, and application properties",
      "Profiles, configuration management, and environment support",
      "REST controllers, validation, exception handling, and DTO design",
      "Actuator, monitoring, testing, deployment, and best practices"
    ]
  },
  {
    title: "Spring MVC",
    category: "framework",
    description: "Request handling, controllers, model binding, validation, views, and web application architecture.",
    concepts: [
      "DispatcherServlet and request flow",
      "Controllers, request mapping, and model binding",
      "Validation, form handling, interceptors, and view resolvers",
      "Exception handling and MVC design patterns"
    ]
  },
  {
    title: "Spring JPA",
    category: "framework",
    description: "Entity mapping, repositories, transactions, relationships, JPQL, and persistence best practices.",
    concepts: [
      "JPA architecture and entity lifecycle",
      "Repositories, CRUD operations, and query methods",
      "Entity relationships and cascade types",
      "JPQL, native queries, pagination, and transactions",
      "Performance tuning and lazy vs eager loading"
    ]
  },
  {
    title: "Spring JDBC",
    category: "framework",
    description: "JdbcTemplate, database access patterns, transactions, batch operations, and query handling.",
    concepts: [
      "JdbcTemplate basics and query execution",
      "RowMapper, prepared statements, and transactions",
      "Batch processing and error handling",
      "Performance and enterprise data access practices"
    ]
  },
  {
    title: "Spring ARM",
    category: "framework",
    description: "Resource management patterns, transaction handling, and support concepts used in Spring-based enterprise apps.",
    concepts: [
      "Resource management concepts",
      "Template support patterns",
      "Transaction support and cleanup handling",
      "Enterprise usage patterns and practical considerations"
    ]
  },
  {
    title: "Spring Batch",
    category: "framework",
    description: "Jobs, steps, readers, processors, writers, retry handling, scheduling, and batch processing architecture.",
    concepts: [
      "Job and step architecture",
      "ItemReader, ItemProcessor, and ItemWriter",
      "Chunk processing, retries, skips, and listeners",
      "Scheduling, restartability, and monitoring",
      "Enterprise batch design patterns"
    ]
  },
  {
    title: "Spring Kafka",
    category: "framework",
    description: "Producer and consumer configuration, serialization, retries, partitions, and event streaming integrations.",
    concepts: [
      "Producer and consumer setup",
      "Topics, partitions, offsets, and groups",
      "Serialization, error handling, and retries",
      "Transactional messaging and event-driven integration",
      "Monitoring and scaling Kafka consumers"
    ]
  },
  {
    title: "Data Structures",
    category: "design",
    description: "Arrays, linked lists, stacks, queues, trees, graphs, hashing, recursion, and problem-solving patterns.",
    concepts: [
      "Arrays, strings, linked lists, stacks, and queues",
      "Trees, binary search trees, heaps, and graphs",
      "Hashing, recursion, backtracking, and sorting",
      "Searching, dynamic programming, and complexity analysis"
    ]
  },
  {
    title: "System Design",
    category: "design",
    description: "Scalability, high availability, caching, messaging, API design, trade-offs, and distributed architecture thinking.",
    concepts: [
      "Scalability, load balancing, and caching",
      "Database design and consistency trade-offs",
      "Messaging, eventing, and async processing",
      "API design, security, observability, and reliability",
      "Design interviews and enterprise architecture patterns"
    ]
  },
  {
    title: "Low Level Design",
    category: "design",
    description: "Class design, object modeling, SOLID principles, UML thinking, and maintainable software structure.",
    concepts: [
      "Class diagrams and object modeling",
      "SOLID principles and clean code",
      "Encapsulation, composition, and extensibility",
      "Designing reusable maintainable modules"
    ]
  },
  {
    title: "Design Patterns",
    category: "design",
    description: "Creational, structural, and behavioral design patterns with enterprise-oriented examples.",
    concepts: [
      "Singleton, Factory, Builder, and Prototype",
      "Adapter, Facade, Decorator, and Proxy",
      "Strategy, Observer, Command, Template Method, and Chain of Responsibility",
      "When to use and when to avoid each pattern"
    ]
  },
  {
    title: "Kafka",
    category: "distributed",
    description: "Topics, partitions, offsets, brokers, consumer groups, retention, scaling, and streaming architecture.",
    concepts: [
      "Kafka architecture and brokers",
      "Topics, partitions, offsets, and replication",
      "Producers, consumers, groups, and delivery guarantees",
      "Retention, compaction, scaling, and monitoring"
    ]
  },
  {
    title: "Event Driven Architecture",
    category: "distributed",
    description: "Asynchronous communication, events, choreography, loose coupling, replayability, and resiliency patterns.",
    concepts: [
      "Events, producers, consumers, and event brokers",
      "Choreography vs orchestration",
      "Loose coupling, replayability, and eventual consistency",
      "Error handling, retries, and dead-letter patterns"
    ]
  },
  {
    title: "Microservices",
    category: "distributed",
    description: "Service boundaries, API contracts, observability, fault tolerance, deployment independence, and governance.",
    concepts: [
      "Service decomposition and domain boundaries",
      "Inter-service communication and APIs",
      "Configuration, discovery, resilience, and security",
      "Monitoring, tracing, deployment, and governance"
    ]
  },
  {
    title: "Distributed System Concepts",
    category: "distributed",
    description: "CAP theorem, consistency, reliability, idempotency, scalability, failures, and coordination patterns.",
    concepts: [
      "CAP theorem and consistency models",
      "Availability, partition tolerance, and fault handling",
      "Idempotency, retries, ordering, and coordination",
      "Scalability patterns and distributed reliability concerns"
    ]
  },
  {
    title: "AWS",
    category: "cloud",
    description: "Core cloud services, networking, IAM, compute, storage, monitoring, and cloud-native deployment practices.",
    concepts: [
      "EC2, S3, RDS, Lambda, VPC, IAM, and CloudWatch",
      "Networking, security, scaling, and deployment strategies",
      "Serverless, containers, observability, and cost optimization"
    ]
  },
  {
    title: "Azure",
    category: "cloud",
    description: "Azure services, identity, deployment models, integration patterns, and enterprise cloud architecture.",
    concepts: [
      "Azure compute, storage, networking, and identity",
      "Resource groups, deployment models, and integrations",
      "Monitoring, security, and enterprise cloud architecture"
    ]
  },
  {
    title: "OpenShift",
    category: "cloud",
    description: "Enterprise Kubernetes platform concepts, deployments, routes, security constraints, and operational workflows.",
    concepts: [
      "Projects, routes, deployments, and build configs",
      "Security context constraints and enterprise controls",
      "Operations, scaling, CI/CD, and platform governance"
    ]
  },
  {
    title: "Docker",
    category: "cloud",
    description: "Images, containers, networking, Dockerfiles, layered builds, and container runtime fundamentals.",
    concepts: [
      "Docker architecture, images, containers, and registries",
      "Dockerfile design, layers, networking, and volumes",
      "Container lifecycle, debugging, and optimization"
    ]
  },
  {
    title: "Kubernetes",
    category: "cloud",
    description: "Pods, deployments, services, ingress, config maps, autoscaling, and cluster operations.",
    concepts: [
      "Pods, deployments, replica sets, and services",
      "Ingress, config maps, secrets, and autoscaling",
      "Scheduling, observability, troubleshooting, and operations"
    ]
  },
  {
    title: "Istio",
    category: "cloud",
    description: "Service mesh fundamentals, traffic management, observability, sidecars, mTLS, and policy enforcement.",
    concepts: [
      "Service mesh architecture and sidecars",
      "Traffic routing, retries, circuit breakers, and mTLS",
      "Observability, policies, and platform integration"
    ]
  },
  {
    title: "Jenkins",
    category: "devops",
    description: "Build automation, pipeline design, agent configuration, CI workflows, and deployment orchestration.",
    concepts: [
      "Freestyle and pipeline jobs",
      "Agents, stages, Jenkinsfile, and plugins",
      "CI/CD workflows, approvals, and release automation"
    ]
  },
  {
    title: "GitLab Pipeline",
    category: "devops",
    description: "CI/CD stages, runners, YAML pipeline configuration, release automation, and enterprise delivery workflows.",
    concepts: [
      "GitLab CI YAML syntax and stages",
      "Runners, variables, templates, and environment pipelines",
      "Quality gates, releases, and deployment workflows"
    ]
  },
  {
    title: "Git",
    category: "devops",
    description: "Branching, rebasing, merge strategies, pull requests, conflict resolution, and source control best practices.",
    concepts: [
      "Repositories, branches, commits, and merges",
      "Rebase, cherry-pick, tags, and release branching",
      "Conflict resolution and collaborative development practices"
    ]
  },
  {
    title: "Gradle",
    category: "devops",
    description: "Build lifecycle, plugins, dependency management, multi-module projects, and automation workflows.",
    concepts: [
      "Build scripts and plugins",
      "Dependency management and tasks",
      "Multi-module builds, testing, and publishing"
    ]
  },
  {
    title: "Maven",
    category: "devops",
    description: "POM structure, lifecycle phases, dependency management, plugins, and enterprise Java build standards.",
    concepts: [
      "POM structure and lifecycle phases",
      "Dependencies, plugins, profiles, and repositories",
      "Build packaging, testing, and release processes"
    ]
  },
  {
    title: "RAG",
    category: "ai",
    description: "Retrieval augmented generation concepts, vector retrieval, context grounding, and enterprise LLM workflows.",
    concepts: [
      "RAG architecture and document retrieval",
      "Embeddings, chunking, vector stores, and ranking",
      "Prompt grounding, evaluation, and enterprise usage patterns"
    ]
  },
  {
    title: "MCP",
    category: "ai",
    description: "Model Context Protocol concepts, tool integration models, structured context exchange, and AI workflow patterns.",
    concepts: [
      "MCP overview and structured context exchange",
      "Tools, resources, prompts, and protocol-driven interactions",
      "Enterprise integration and AI workflow orchestration"
    ]
  },
  {
    title: "Agent",
    category: "ai",
    description: "Autonomous task execution concepts, tool usage patterns, memory, orchestration, and decision flows.",
    concepts: [
      "Agent architecture and execution flow",
      "Planning, memory, tools, and reasoning",
      "Task automation patterns and limitations"
    ]
  },
  {
    title: "Agentic AI",
    category: "ai",
    description: "Multi-step reasoning, planning, execution loops, orchestration patterns, and enterprise automation use cases.",
    concepts: [
      "Agentic workflow design",
      "Reasoning loops, planning, verification, and orchestration",
      "Enterprise automation, governance, and safety concerns"
    ]
  }
];

// Made with Bob
