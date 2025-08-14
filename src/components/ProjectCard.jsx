import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`project-container ${isEven ? 'text-first' : 'preview-first'}`}>
      <div className="project-card">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="tech-stack">
          <h4>Technologies Used:</h4>
          <div className="tech-tags">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
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
      
      {project.link && (
        <div className="project-preview">
          <iframe
            src={project.link}
            title={`${project.title} Preview`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;