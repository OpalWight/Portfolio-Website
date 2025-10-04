import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "CareFlow",
      description: "Architected a production-ready EdTech platform solving inefficient CNA training methods through AI-powered RAG implementation and interactive simulations. Built enterprise-grade authentication infrastructure with vector database integration, web scraping pipeline, and intelligent quiz generation, demonstrating full-stack ownership from system design to deployment.",
      link: "https://careflowlearn.org",
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
        "CORS",
        "Pinecone",
        "Google Gemini AI",
        "Vector Embeddings",
        "RAG Architecture"
      ],
      features: [
        "Architected dual authentication system (OAuth 2.0 + local accounts) implementing secure token management with httpOnly cookies and proper session handling.",
        "Engineered interactive learning simulations using React's dnd-kit library, solving complex state management challenges for real-time drag-and-drop interactions that mirror actual CNA workplace scenarios.",
        "Designed horizontally scalable RESTful API architecture with MongoDB schema optimization, implementing proper indexing and aggregation pipelines for future growth requirements.",
        "Implemented AI-powered RAG (Retrieval-Augmented Generation) system using Pinecone vector database and Google Gemini, enabling intelligent quiz generation from scraped CNA training content with 15,000+ knowledge chunks.",
        "Engineered comprehensive web scraping pipeline that processes nursing education resources into structured knowledge base, automatically chunking content with metadata for optimal retrieval performance.",
        "Built adaptive quiz system with competency-based question distribution, real-time grading, and AI-powered skill verification that dynamically adjusts to student performance and learning objectives.",
        "Established modern development workflow with Vite for optimized builds, ESLint for code quality enforcement, and environment-based configuration management enabling seamless staging/production deployments."
      ]
    },
    {
      title: "HerdUp: Shared Path Optimization",
      description: "Engineered a novel route optimization algorithm solving the complex shared-path problem for multiple users. Built full-stack application with custom Dijkstra's modification and real-time map visualization, integrating multiple third-party APIs to deliver production-ready geospatial solutions.",
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
        "Innovated a modified Dijkstra's algorithm with dynamic edge-weight reduction for shared path segments, solving the NP-hard problem of multi-user route optimization through mathematical modeling.",
        "Architected microservices backend with Flask, implementing efficient API orchestration between geocoding and routing services with proper error handling and fallback strategies.",
        "Built responsive React/TypeScript frontend with real-time map rendering, handling complex state management for multiple user inputs and dynamic route visualization.",
        "Engineered end-to-end geospatial data pipeline processing coordinates, API responses, and algorithm outputs into interactive visualizations with smooth animations."
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