import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Entre em Contacto</h2>
      <div className="contact-grid">
        
        {/* Formulário */}
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu email" required />
          <textarea placeholder="Sua mensagem" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>

        {/* Informações da loja */}
        <div className="contact-info">
          <h3>Telefone</h3>
          <p>+258 849 587 536</p>

          <h3>Localização</h3>
          <p>Bairro do Agostinho Neto, entrada que dá acesso à esquadra</p>

          <h3>Horário</h3>
          <p>Segunda a Sábado<br/>08:30 às 18:30</p>
        </div>
      </div>

      {/* Mapa embutido */}
      <div className="contact-map">
        <iframe
          title="Mapa da Loja"
          src="https://www.google.com/maps?q=-25.774405,32.608148&z=17&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;