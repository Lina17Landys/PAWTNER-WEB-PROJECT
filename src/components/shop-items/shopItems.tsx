import { useState } from 'react';
import products from "../../services/store-data";
import ProductDetail from './ProductDetail';
import './items.css';

interface Product {
  id: number;
  category: string;
  emoji: string;
  image: string;
  name: string;
  stars: string;
  description: string;
  price: number;
}

function ShopItems() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 

  const filterByCategory = (category: string) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
    setShowAll(false); 
  };

  const clearFilters = () => {
    setFilteredProducts(products);
    setShowAll(false); 
  };

  const showBestSellers = () => {
    const bestSellers = products.slice(0, 5);
    setFilteredProducts(bestSellers);
    setShowAll(false);  
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product); 
  };

  const productsToDisplay = showAll ? filteredProducts : filteredProducts.slice(0, 5);

  return (
    <>
      <div className="filter-btn">
        <button className="btn" onClick={() => filterByCategory('food')}>Food</button>
        <button className="btn" onClick={() => filterByCategory('toy')}>Toys</button>
        <button className="btn" onClick={showBestSellers}>Best Seller</button>
        <button className="btn" onClick={clearFilters}>X</button>
      </div>

      <div className="product-grid">
        {productsToDisplay.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>
                {product.category} {product.emoji}
              </h3>
              <h1 className="product-title">{product.name}</h1>
              <p>{product.stars}</p>
              <p>${product.price}</p>
            </div>
            <button className="add-button">Add to cart</button>
          </div>
        ))}
      </div>

      {filteredProducts.length > 5 && (
        <div className="show-more">
          <button className="btn" onClick={toggleShowAll}>
            {showAll ? "See Less" : "See more"}
          </button>
        </div>
      )}

      {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  );
}

export default ShopItems;
