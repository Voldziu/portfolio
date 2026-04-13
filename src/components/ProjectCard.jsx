function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.title}
          className="project-img"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {project.tags && (
          <div className="tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="source-code-btn"
          >
            <i className="fab fa-github"></i> Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
