// ProductDetail.tsx
import React from 'react';
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
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">X</button>
        <img src={product.image} alt={product.name} className="detail-image" />
        <h2>{product.name}</h2>
        <p>{product.stars}</p>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetail;
