import "./Products.css";

function Products() {
  const items = [
    { name: "Granulado Colorido", price: "150 MZN", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
    { name: "Essência de Baunilha", price: "200 MZN", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
    { name: "Forma Redonda", price: "350 MZN", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
    { name: "Espátula de Silicone", price: "120 MZN", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  ];

  return (
    <section id="products" className="products">
      <h2>Produtos em Destaque</h2>
      <div className="product-grid">
        {items.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;