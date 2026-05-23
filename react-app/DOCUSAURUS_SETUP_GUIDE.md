# Docusaurus Setup Guide for CodeWithVenu

This guide will help you set up Docusaurus with all the features you need.

## Why Docusaurus?

Docusaurus provides out-of-the-box:
- ✅ Three-column layout (sidebar, content, table of contents)
- ✅ Search functionality (Algolia DocSearch)
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Code syntax highlighting
- ✅ Markdown support
- ✅ Versioning
- ✅ Blog functionality
- ✅ SEO optimized

## Installation Steps

### 1. Create New Docusaurus Site

```bash
# Navigate to your project directory
cd /Users/nvenugopal/Documents/codewithvenu

# Create new Docusaurus site
npx create-docusaurus@latest codewithvenu-docs classic

# Navigate to the new directory
cd codewithvenu-docs

# Start development server
npm start
```

### 2. Project Structure

```
codewithvenu-docs/
├── docs/                    # Documentation files
│   ├── java/
│   │   ├── basics.md
│   │   ├── data-types.md
│   │   ├── oop.md
│   │   └── ...
│   ├── javascript/
│   ├── spring-boot/
│   └── ...
├── blog/                    # Blog posts (optional)
├── src/
│   ├── components/          # Custom React components
│   ├── css/                 # Custom styles
│   └── pages/               # Custom pages
├── static/                  # Static assets
├── docusaurus.config.js     # Main configuration
└── sidebars.js             # Sidebar configuration
```

### 3. Configure docusaurus.config.js

```javascript
module.exports = {
  title: 'CodeWithVenu',
  tagline: 'Technical Blog & Learning Platform',
  url: 'https://yourusername.github.io',
  baseUrl: '/codewithvenu/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yourusername',
  projectName: 'codewithvenu',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/yourusername/codewithvenu/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/yourusername/codewithvenu/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'CodeWithVenu',
      logo: {
        alt: 'CodeWithVenu Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Learn',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/yourusername/codewithvenu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} CodeWithVenu. Built by Venugopal Reddy Nimmanapalli.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['java', 'javascript', 'python', 'go'],
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'codewithvenu',
    },
  },
};
```

### 4. Configure Sidebars (sidebars.js)

```javascript
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Programming',
      items: [
        {
          type: 'category',
          label: 'Java',
          items: [
            'java/basics',
            'java/data-types',
            'java/variables',
            'java/operators',
            'java/control-flow',
            'java/methods',
            'java/oop-concepts',
            'java/classes-objects',
            'java/inheritance',
            'java/polymorphism',
            'java/interfaces',
            'java/exception-handling',
            'java/collections',
            'java/generics',
            'java/threads',
          ],
        },
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            'javascript/basics',
            'javascript/variables-scope',
            'javascript/functions',
            'javascript/objects-arrays',
            'javascript/dom',
            'javascript/events',
            'javascript/promises',
            'javascript/async-await',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Frameworks',
      items: [
        {
          type: 'category',
          label: 'Spring Boot',
          items: [
            'spring-boot/intro',
            'spring-boot/auto-configuration',
            'spring-boot/starters',
            'spring-boot/rest-controllers',
            'spring-boot/data-jpa',
            'spring-boot/security',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'System Design',
      items: [
        'system-design/scalability',
        'system-design/load-balancing',
        'system-design/caching',
        'system-design/database-design',
        'system-design/microservices',
      ],
    },
    {
      type: 'category',
      label: 'Cloud',
      items: [
        {
          type: 'category',
          label: 'AWS',
          items: [
            'aws/intro',
            'aws/ec2',
            'aws/s3',
            'aws/rds',
            'aws/lambda',
          ],
        },
        {
          type: 'category',
          label: 'Docker',
          items: [
            'docker/intro',
            'docker/images',
            'docker/containers',
            'docker/dockerfile',
          ],
        },
      ],
    },
  ],
};
```

### 5. Create Sample Documentation Files

Create `docs/java/basics.md`:

```markdown
---
sidebar_position: 1
---

# Java Basics

## What is Java?

Java is a high-level, class-based, object-oriented programming language.

## Key Features

- Platform Independent
- Object-Oriented
- Robust and Secure
- Multithreaded

## Your First Java Program

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## Next Steps

- Learn about [Data Types](./data-types)
- Understand [Variables](./variables)
```

### 6. Customize Theme (src/css/custom.css)

```css
:root {
  --ifm-color-primary: #38bdf8;
  --ifm-color-primary-dark: #0ea5e9;
  --ifm-color-primary-darker: #0284c7;
  --ifm-color-primary-darkest: #0369a1;
  --ifm-color-primary-light: #7dd3fc;
  --ifm-color-primary-lighter: #bae6fd;
  --ifm-color-primary-lightest: #e0f2fe;
  --ifm-code-font-size: 95%;
}

.hero {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(34, 197, 94, 0.1));
}
```

### 7. Deploy to GitHub Pages

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
GIT_USER=yourusername npm run deploy
```

## Migration from Current React App

### 1. Convert Topics to Markdown

For each topic in your `topics.js`, create a markdown file:

```bash
# Create directory structure
mkdir -p docs/java
mkdir -p docs/javascript
mkdir -p docs/spring-boot
# ... etc
```

### 2. Convert Topic Data to Markdown

Example conversion:

**From topics.js:**
```javascript
{
  title: "Java",
  category: "programming",
  description: "Core Java, OOP, collections...",
  concepts: ["Java overview", "JDK, JRE, JVM", ...]
}
```

**To docs/java/intro.md:**
```markdown
---
sidebar_position: 1
---

# Java Introduction

Core Java, OOP, collections, streams, concurrency, JVM concepts.

## Key Concepts

- Java overview and history
- JDK, JRE, and JVM
- Data types, variables, operators
...
```

### 3. Add Progress Tracking

Install plugin:
```bash
npm install @docusaurus/plugin-content-docs
```

### 4. Add Search

Sign up for Algolia DocSearch (free for open source):
https://docsearch.algolia.com/apply/

## Features Comparison

| Feature | Current React App | Docusaurus |
|---------|------------------|------------|
| Three-column layout | ❌ Need to build | ✅ Built-in |
| Sidebar navigation | ❌ Need to build | ✅ Built-in |
| Search | ❌ Need to build | ✅ Built-in |
| Theme toggle | ❌ Need to build | ✅ Built-in |
| Code highlighting | ❌ Need to add | ✅ Built-in |
| Responsive | ✅ Have it | ✅ Built-in |
| Progress tracking | ❌ Need to build | ⚠️ Plugin needed |
| SEO | ⚠️ Basic | ✅ Advanced |

## Next Steps

1. **Install Docusaurus** (30 minutes)
2. **Create directory structure** (1 hour)
3. **Convert 5-10 topics to markdown** (2-3 hours)
4. **Customize theme** (1 hour)
5. **Test locally** (30 minutes)
6. **Deploy** (30 minutes)

**Total Time: 1-2 days**

## Support

- Docusaurus Docs: https://docusaurus.io/docs
- Discord: https://discord.gg/docusaurus
- GitHub: https://github.com/facebook/docusaurus

## Conclusion

Docusaurus will save you **weeks of development time** and give you a professional documentation site with all the features you need. The current React app can be kept as a landing page or portfolio piece.