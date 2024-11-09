import products from "../../services/store-data";
import "./best.css";

function BestProducts() {
  const topProducts = products.slice(0, 4);

  return (
    <div className="product-grid">
      {topProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>
              {product.category} {product.emoji}
            </h3>
            <h1 className="product-name">{product.name}</h1>
            <p>{product.stars}</p>
            <p>${product.price}</p>
          </div>
          <button className="add-button">Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default BestProducts;

