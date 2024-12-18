import React, { useState } from 'react';
import './items.css';

interface ProductDetailProps {
  product: {
    id: number;
    category: string;
    emoji: string;
    image: string;
    name: string;
    stars: string;
    description: string;
    price: number;
  };
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">X</button>
        <img src={product.image} alt={product.name} className="detail-image" />
        
        <div className="product-details">
          <div className="product-category">
            <span className="emoji">{product.emoji}</span>
            <span className='category'>{product.category}</span>
          </div>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <h3 className="product-price">${product.price}</h3>
          
          <div className="button-group">
            <button className="quantity-button" onClick={decrementQuantity}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-button" onClick={incrementQuantity}>+</button>
            <button className="buy-button">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;