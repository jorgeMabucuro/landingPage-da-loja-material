import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">Material de Confeitaria com a Edna</div>

        {/* Ícone de menu: ☰ quando fechado, ✖ quando aberto */}
        <button
          className="menu-toggle"
          aria-label="Abrir/fechar menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Links (desktop visível; mobile controlado pelo estado) */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#hero">Início</a>
          <a href="#products">Produtos</a>
          <a href="#info">Sobre Nós</a>
          <a href="#contact">Contactos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;