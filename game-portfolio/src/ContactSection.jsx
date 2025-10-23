// ContactSection.jsx
export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contato</h2>
        <p className="contact-intro">
          Está interessado em colaborar, discutir ideias de jogos, ou quer saber mais sobre meu trabalho?
          Entre em contato — será um prazer conversar!
        </p>

        <div className="contact-methods">
          <a
            href="mailto:diogo2010rs@gmail.com"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
            <span>Email</span>
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
            <p>/in/diogoalmeida</p>
          </a>

          <a
            href="https://github.com/DiogoRSAlmeida"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
            <p>@diogoalmeida</p>
          </a>
        </div>
      </div>
    </section>
  );
}
