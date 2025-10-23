// ProjectCard.jsx
export default function ProjectCard({ project, expanded, onToggle }) {
  return (
    <div
      className={`card project-card ${expanded ? "expanded" : ""}`}
      data-category={project.category}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onToggle();
      }}
    >
      <img src={project.image} alt={`${project.title} Screenshot`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} onClick={(e) => e.stopPropagation()}>View Project</a>

      {expanded && (
        <div className="details">
          <div className="carousel">
            {project.carousel.map((img, i) => (
              <img key={i} src={img} alt={`Slide ${i + 1}`} />
            ))}
          </div>

          <div className="infographic">
            {project.infographic.map((info, i) => (
              <div key={i}>
                <i className={info.icon}></i>
                <p>{info.label}</p>
                <div className="progress-bar">
                  <div
                    className="progress-bar-inner"
                    style={{ width: `${info.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
