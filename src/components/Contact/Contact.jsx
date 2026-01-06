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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.123456789!2d32.573!3d-25.965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6b123456789%3A0xabcdef123456789!2sBairro%20do%20Agostinho%20Neto%2C%20Maputo!5e0!3m2!1spt!2smz!4v1700000000000"
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