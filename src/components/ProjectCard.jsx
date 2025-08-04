const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tech-stack">
        <h4>Technologies Used:</h4>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-features">
        <h4>Key Features:</h4>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-link"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;