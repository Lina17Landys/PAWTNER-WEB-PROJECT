import { useState } from 'react';
import products from "../../services/store-data";
import './items.css';

function ShopItems() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showAll, setShowAll] = useState(false);

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

      {filteredProducts.length > 5 && (
  <div className="show-more">
    <button className="btn" onClick={toggleShowAll}>
      {showAll ? "See Less" : "See more"}
    </button>
  </div>
)}

    </>
  );
}

export default ShopItems;
