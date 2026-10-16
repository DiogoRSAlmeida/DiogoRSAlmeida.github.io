// App.jsx
import { useState } from "react";
import { projects } from "./projectsData";
import Header from "./Header";
import FilterButtons from "./FilterButtons";
import ProjectCard from "./ProjectCard";
import "./App.css";
import UnityBanner from "./UnityBanner";
import AboutSection from "./AboutSection";

import ContactSection from "./ContactSection";
import { useLang } from "./LanguageContext";
import { translations } from "./translations";

export default function App() {
  const { lang } = useLang();
  const t = translations[lang].projects;
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  const handleFilter = (cat) => {
    setFilter(cat);
    setExpandedId(null);
  };

  const handleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Quando há um card expandido, mostra apenas ele
  const visibleProjects =
    expandedId !== null
      ? filteredProjects.filter((p) => p.id === expandedId)
      : filteredProjects;

  return (
    <>
      <Header />
       <div id="home"></div>
      <UnityBanner  />
  <AboutSection />
<div className="container">
  <h2 id="projects" className="section-title">{t.title}</h2>

  {/* Texto introdutório sobre os projetos */}
  <p className="projects-intro">{t.intro}</p>

  <FilterButtons
    filter={filter}
    setFilter={handleFilter}
    available={projects.map((p) => p.category)}
  />

  <div className="cards">
    {visibleProjects.map((proj) => (
      <ProjectCard
        key={proj.id}
        project={proj}
        expanded={expandedId === proj.id}
        onToggle={() => handleExpand(proj.id)}
      />
    ))}
  </div>

  
</div>
<ContactSection />
    </>
  );
}
