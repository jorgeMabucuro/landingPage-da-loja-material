import "./Info.css";

function Info() {
  return (
    <section id="info" className="info">
      <h2>Sobre Nós</h2>
      <div className="info-grid">
        <div className="info-card">
          <h3>Quem Somos</h3>
          <p>
            Somos uma loja especializada em materiais de confeitaria,
            oferecendo tudo o que precisa para criar doces incríveis.
          </p>
        </div>
        <div className="info-card">
          <h3>O Que Oferecemos</h3>
          <p>
            Ingredientes de qualidade, utensílios modernos e acessórios variados —
            desde granulado e essências até formas e espátulas.
          </p>
        </div>
        <div className="info-card">
          <h3>Nossa Missão</h3>
          <p>
            Tornar a confeitaria acessível a todos, com preços justos e produtos
            que inspiram criatividade.
          </p>
        </div>
        <div className="info-card">
          <h3>Diferenciais</h3>
          <p>
            Atendimento personalizado, variedade de produtos e compromisso com a
            satisfação dos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;