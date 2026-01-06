import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2>Material de Confeitaria com a Edna</h2>
        <p>Granulados, essências, massas, utensílios e muito mais — tudo num só lugar!</p>
        <a href="#products" className="hero-button">Ver Produtos</a>
      </div>
    </section>
  );
}

export default Hero;