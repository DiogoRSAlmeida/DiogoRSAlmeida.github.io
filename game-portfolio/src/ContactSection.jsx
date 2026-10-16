// ContactSection.jsx
import { useLang } from "./LanguageContext";
import { translations } from "./translations";

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">{t.title}</h2>
        <p className="contact-intro">{t.intro}</p>

        <div className="contact-methods">
          <a
            href="mailto:diogo2010rs@gmail.com"
            className="contact-card"
          >
            <i className="fas fa-envelope"></i>
            <span>{t.email}</span>
            <p>diogo2010rs@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/diogo-almeida-19347010a"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
            <p>/in/diogo-almeida</p>
          </a>

          <a
            href="https://github.com/DiogoRSAlmeida"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
            <p>@DiogoRSAlmeida</p>
          </a>
        </div>
      </div>
    </section>
  );
}
