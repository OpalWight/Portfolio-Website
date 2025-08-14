import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "CareFlow",
      description: "A secure, full-stack web application designed to provide an interactive learning experience for Certified Nursing Assistant (CNA) candidates. The platform features a robust user authentication system using both local accounts and Google OAuth 2.0, a RESTful backend API, and a dynamic React-based frontend with interactive, drag-and-drop learning simulations.",
      link: "https://care-flow-ten.vercel.app/",
      technologies: [
        "React 19",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "OAuth 2.0",
        "JWT",
        "bcrypt.js",
        "dnd-kit",
        "Vite",
        "ESLint",
        "Axios",
        "CORS"
      ],
      features: [
        "Engineered a Secure OAuth 2.0 Flow: Implemented the complete Authorization Code Flow, securely handling the client_secret on the backend and using httpOnly cookies for session management to mitigate XSS vulnerabilities.",
        "Developed an Interactive Learning Module: Created a drag-and-drop interface with dnd-kit and React to simulate real-world CNA scenarios, enhancing user engagement and knowledge retention.",
        "Built a Full-Stack RESTful Architecture: Designed and developed a complete MERN-stack (MongoDB, Express, React, Node.js) application with a clear, maintainable, and scalable code structure.",
        "Implemented Security Best Practices: Protected against XSS attacks, brute-force attacks with rate limiting, and ensured data integrity with server-side input validation.",
        "Modern Development Workflow: Utilized Vite for fast development with HMR, managed code quality with ESLint, and implemented proper environment variable handling."
      ]
    },
    {
      title: "HerdUp: Shared Path Optimization",
      description: "Developed a full-stack web application that calculates and visualizes the most efficient shared walking route for two individuals, reducing overlapping travel time. Engineered a Python and Flask-based backend that implements a modified Dijkstra's algorithm to find optimized paths. The algorithm incentivizes shared routes by dynamically reducing the weight of shared path segments. Integrated the Nominatim API for geocoding and the Open Source Routing Machine (OSRM) API for real-world walking directions, ensuring accurate and practical route generation. Constructed a responsive and interactive user interface with React and TypeScript, allowing users to input locations and visualize the generated paths on an embedded Folium map.",
      link: "https://herdup-hackdavis.vercel.app/",
      technologies: [
        "React",
        "TypeScript", 
        "Framer Motion",
        "Python",
        "Flask",
        "Gunicorn",
        "OSRM",
        "Nominatim",
        "Folium",
        "Geopy"
      ],
      features: [
        "Developed a full-stack web application that calculates and visualizes the most efficient shared walking route for two individuals, reducing overlapping travel time.",
        "Engineered a Python and Flask-based backend that implements a modified Dijkstra's algorithm to find optimized paths. The algorithm incentivizes shared routes by dynamically reducing the weight of shared path segments.",
        "Integrated the Nominatim API for geocoding and the Open Source Routing Machine (OSRM) API for real-world walking directions, ensuring accurate and practical route generation.",
        "Constructed a responsive and interactive user interface with React and TypeScript, allowing users to input locations and visualize the generated paths on an embedded Folium map."
      ]
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;