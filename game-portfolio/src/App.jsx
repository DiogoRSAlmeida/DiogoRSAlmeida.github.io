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

export default function App() {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

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
  <h2 id="projects" className="section-title">Projects</h2>

  {/* Texto introdutório sobre os projetos */}
  <p className="projects-intro">
    Aqui você encontra alguns dos projetos em que trabalhei, incluindo jogos, protótipos de estudo e experiências com Inteligência Artificial. 
    Explore cada um para ver detalhes e aprender sobre meu processo de desenvolvimento.
  </p>

  <FilterButtons filter={filter} setFilter={setFilter} />

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
