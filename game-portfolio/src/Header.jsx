import { useLang } from "./LanguageContext";
import { translations } from "./translations";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;

  return (
    <header id="header" className="site-header">
      <div className="header-content">
        <h1 className="logo">Diogo Almeida</h1>
        <nav>
          <a href="#home">{t.home}</a>
          <a href="#about">{t.about}</a>
          <a href="#projects">{t.projects}</a>
          <a href="#contact">{t.contact}</a>
          <div className="lang-switch" role="group" aria-label="Language">
            {["pt", "en"].map((l) => (
              <button
                key={l}
                className={lang === l ? "active" : ""}
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
