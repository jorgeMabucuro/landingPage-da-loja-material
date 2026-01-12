import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Links rápidos */}
        <div className="footer-links">
          <a href="#hero">Início</a>
          <a href="#products">Produtos</a>
          <a href="#info">Sobre Nós</a>
          <a href="#contact">Contactos</a>
        </div>

        {/* Redes sociais */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/258849587536" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="footer-bottom">
        <p>© 2026 Material de Confeitaria com a Edna. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;