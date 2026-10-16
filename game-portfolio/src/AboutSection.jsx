// AboutSection.jsx
import { useLang } from "./LanguageContext";
import { translations } from "./translations";

// Itens de índice ímpar do array são destacados em <strong>
const renderRich = (parts) =>
  parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));

export default function AboutSection() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">{t.title}</h2>

        <p>{renderRich(t.p1)}</p>
        <p>{renderRich(t.p2)}</p>
        <p>{t.p3}</p>

        <div className="skills">
          <h3>{t.skillsTitle}</h3>
          <ul>
            <li>Unity (C#)</li>
            <li>AR Foundation</li>
            <li>Procedural Generation</li>
            <li>AI & Behavior Trees</li>
            <li>Game Architecture / Clean Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
