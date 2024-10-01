import React from 'react';
import { Post } from '../../../types/postTypes';

interface DiseaseCardProps {
  post: Post;
  onViewDetails: () => void;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ post, onViewDetails }) => {
  return (
    <div className="disease-card">
      <h3>{post.title}</h3>
      <p>Priority: {post.priority}</p>
      {post.photo && (
        <div className="post-image">
          <img src={URL.createObjectURL(post.photo)} alt={`${post.petName}`} />
        </div>
      )}
      <p>Pet: {post.animalType === 'dog' ? '🐶' : '🐱'} {post.petName}</p>
      <p>Symptoms: {post.symptoms.join(', ')}</p>
      <p>{post.description}</p>

      <button onClick={onViewDetails}>View Details</button>
    </div>
  );
};

export default DiseaseCard;
