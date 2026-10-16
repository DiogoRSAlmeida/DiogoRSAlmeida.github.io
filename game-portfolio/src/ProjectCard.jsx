// ProjectCard.jsx
import { useLang } from "./LanguageContext";
import { translations } from "./translations";

export default function ProjectCard({ project, expanded, onToggle }) {
  const { lang } = useLang();
  const title = project.title[lang];
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
      <img src={project.image} alt={`${title} Screenshot`} loading="lazy" />
      <h3>{title}</h3>
      <p>{project.description[lang]}</p>

      {expanded && (
        <div className="details">
          {project.carousel.length > 0 ? (
            <div className="carousel">
              {project.carousel.map((img, i) => (
                <img key={i} src={img} alt={`${title} - ${lang === "pt" ? "imagem" : "image"} ${i + 1}`} loading="lazy" />
              ))}
            </div>
          ) : (
            <p className="nda-notice">
              {translations[lang].projects.nda}
            </p>
          )}

          <ul className="tags">
            {project.tags[lang].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
