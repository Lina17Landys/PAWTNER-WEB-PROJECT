import React from 'react';
import { Post } from '../../../types/postTypes';
import dogIcon from '../../../assets/images/Dog-Icon.png';
import catIcon from '../../../assets/images/Cat-Icon.png';
import './DiseaseCard.css';

interface DiseaseCardProps {
  post: Post;
  onViewDetails: () => void;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ post, onViewDetails }) => {
  return (
    <div className="disease-card" onClick={onViewDetails} style={{ cursor: 'pointer' }}>
      <h3 className='Post-title-card'>{post.title}</h3>

      {post.photo && (
        <div className="post-image">
          <img src={URL.createObjectURL(post.photo)} alt={`${post.petName}`} />
        </div>
      )}
      
      <p className='pet-info'>
        <img src={post.animalType === 'dog' ? dogIcon : catIcon} className="pet-icon" /> 
        <span className='pet-name-card'>{post.petName}</span>
        <span className={`priority ${post.priority.toLowerCase()}`}>
            {post.priority}
          </span>
      </p>

      <div className="symptoms-list">
        {post.symptoms.map((symptom, index) => (
          <span key={index} className={`symptom-tag symptom-${symptom.toLowerCase()}`}>
            {symptom}
          </span>
        ))}
      </div>

      <p className='description-section-card'>{post.description}</p>
    </div>
  );
};

export default DiseaseCard;