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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(category, selectedEmoji);
  };

  const handleEmojiChange = (emoji: string) => {
    setSelectedEmoji(emoji);
    applyFilters(selectedCategory, emoji);
  };

  const applyFilters = (category: string | null, emoji: string | null) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (emoji) {
      filtered = filtered.filter((product) => product.emoji === emoji);
    }

    setFilteredProducts(filtered);
    setShowAll(false);
  };

  const clearFilters = () => {
    setFilteredProducts(products);
    setSelectedCategory(null);
    setSelectedEmoji(null);
    setShowAll(false); 
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product); 
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const productsToDisplay = showAll ? filteredProducts : filteredProducts.slice(0, 5);

  return (
    <>
      <div className="filter-container">
        <select
          className="filter-select"
          value={selectedCategory || ""}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="clothes">Clothes</option>
          <option value="toy">Toys</option>
          <option value="medicine">Medicine</option>
          <option value="food">Food</option>
        </select>

        <select
          className="filter-select"
          value={selectedEmoji || ""}
          onChange={(e) => handleEmojiChange(e.target.value)}
        >
          <option value="">All Pets</option>
          <option value="🐱">Cat</option>
          <option value="🐶">Dog</option>
        </select>

        <button className="btn clear-filters" onClick={clearFilters}>Clear Filters</button>
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
