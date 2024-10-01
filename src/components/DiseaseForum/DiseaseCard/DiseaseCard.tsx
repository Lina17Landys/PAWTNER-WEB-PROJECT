import React from 'react';
import { Post } from '../../../types/postTypes';
import './DiseaseCard.css'

interface DiseaseCardProps {
  post: Post;
  onViewDetails: () => void;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ post, onViewDetails }) => {
  return (
    <div className="disease-card" onClick={onViewDetails} style={{ cursor: 'pointer' }}>
      <h3>{post.title}</h3>
      <p>Priority: {post.priority}</p>

      {post.photo && (
        <div className="post-image">
          <img src={URL.createObjectURL(post.photo)} alt={`${post.petName}`} />
        </div>
      )}

      <p>Pet: {post.animalType === 'dog' ? '🐶' : '🐱'} {post.petName}</p>

      <div className="symptoms-list">
        {post.symptoms.map((symptom, index) => (
          <span key={index} className={`symptom-tag symptom-${symptom.toLowerCase()}`}>
            {symptom}
          </span>
        ))}
      </div>

      <p>{post.description}</p>
    </div>
  );
};

export default DiseaseCard;
