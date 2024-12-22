export const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with a fully functional shopping cart, user authentication, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x200",
    liveDemo: "https://example.com/ecommerce",
    githubLink: "https://github.com/username/ecommerce-platform",
    screenshots: [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio website to showcase your skills and projects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/400x200",
    liveDemo: "https://example.com/portfolio",
    githubLink: "https://github.com/username/portfolio",
    screenshots: [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
    ],
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application with WebSocket-based communication and modern UI design.",
    technologies: ["React", "Node.js", "Socket.IO", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x200",
    liveDemo: "https://example.com/chat-app",
    githubLink: "https://github.com/username/chat-app",
    screenshots: [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
    ],
  },
];


  
export const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description:
      "Learn how to use React Hooks to manage state and side effects in functional components.",
    image: "https://via.placeholder.com/400x200",
    content: `
      React Hooks are a game-changer in modern React development, allowing developers to use state and lifecycle methods in functional components. 
      In this guide, we'll explore useState, useEffect, and other essential hooks to take your React skills to the next level.
      \n\n
      **What are React Hooks?**
      Hooks are functions that let you "hook into" React state and lifecycle features from functional components. Introduced in React 16.8, they eliminate the need for class components in many cases.
      \n\n
      **Example: useState Hook**
      \`\`\`javascript
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`
      `,
  },
  {
    id: 2,
    title: "Tailwind CSS for Modern UI Design",
    description:
      "Explore the power of Tailwind CSS for creating responsive and visually stunning interfaces.",
    image: "https://via.placeholder.com/400x200",
    content: `
      Tailwind CSS has revolutionized the way developers build modern user interfaces. With its utility-first approach, you can design and develop faster than ever before.
      \n\n
      **Benefits of Tailwind CSS:**
      - **Utility-First Approach:** Create custom designs without writing CSS files.
      - **Responsive Design:** Quickly build responsive layouts with mobile-first utilities.
      - **Customization:** Tailwind is highly configurable and can adapt to your project's needs.
      \n\n
      **Example: Button Styling**
      \`\`\`html
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
      \`\`\`
      `,
  },
  {
    id: 3,
    title: "Mastering Node.js for Backend Development",
    description:
      "Get started with Node.js and learn how to build scalable backend applications.",
    image: "https://via.placeholder.com/400x200",
    content: `
      Node.js is a powerful runtime for building server-side applications using JavaScript. Whether you're building APIs or real-time applications, Node.js provides the tools you need.
      \n\n
      **Key Features of Node.js:**
      - **Asynchronous Programming:** Handle multiple requests without blocking threads.
      - **Vast Ecosystem:** Use npm packages to extend functionality.
      - **Scalability:** Ideal for microservices and scalable systems.
      \n\n
      **Example: Express.js Server**
      \`\`\`javascript
      const express = require('express');
      const app = express();
      const PORT = 3000;

      app.get('/', (req, res) => {
        res.send('Hello, World!');
      });

      app.listen(PORT, () => {
        console.log(\`Server is running on port \${PORT}\`);
      });
      \`\`\`
      `,
  },
];

  