// AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">Sobre Mim</h2>
        <p>
          Olá! Meu nome é <strong>Diogo Almeida</strong> — sou um 
          desenvolvedor de jogos apaixonado por criar experiências imersivas e 
          inteligentes. Tenho trabalhado com <strong>Unity</strong> como minha engine principal, 
          explorando desde sistemas de <strong>IA</strong> e <strong>geração procedural</strong> até 
          projetos com <strong>realidade aumentada (AR)</strong> e <strong>multiplayer</strong>.
        </p>

        <p>
          Atualmente, estou me especializando em <strong>Inteligência Artificial para Jogos</strong> 
          e adoro projetar sistemas que unem tecnologia e criatividade — seja 
          criando mundos dinâmicos, NPCs inteligentes ou ferramentas de suporte 
          ao design de gameplay.
        </p>

        <p>
          Fora do código, sou curioso, analítico e adoro desafios técnicos que me 
          fazem aprender algo novo. Meu objetivo é contribuir em equipes criativas 
          que usam tecnologia para expandir os limites da jogabilidade.
        </p>

        <div className="skills">
          <h3>Principais Tecnologias</h3>
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
