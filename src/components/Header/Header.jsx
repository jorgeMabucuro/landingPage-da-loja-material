import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">Material de Confeitaria com a Edna</div>

        <button
          className="menu-toggle"
          aria-label="Abrir/fechar menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a 
            href="#hero" 
            className={`nav-links ${activeLink === "Inicio" ? 'active': ''}`}
            onClick={()=> setActiveLink('Inicio')}>
            Início
          </a>

          <a 
            href="#products"
            className={`nav-links ${activeLink === "Produtos" ? 'active': ''}`}
            onClick={()=> setActiveLink('Produtos')}>
            Produtos
          </a>

          <a href="#info"
            className={`nav-links ${activeLink === "Sobre Nos" ? 'active' : ''}`}
            onClick={()=> setActiveLink("Sobre Nos")}>
            Sobre Nós
          </a>


          <a href="#contact"
            className={`nav-links ${activeLink === "Contactos" ? 'active' : ''}`}
            onClick={()=> setActiveLink("Contactos")}>
            Contactos

          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;