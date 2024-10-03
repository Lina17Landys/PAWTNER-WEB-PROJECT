import React from 'react';
import { Post } from '../../../types/postTypes';
import dogIcon from '../../../assets/images/Dog-Icon.png';
import catIcon from '../../../assets/images/Cat-Icon.png';
import './PostDetail.css';

interface PostDetailProps {
  post: Post;
  onClose: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onClose }) => {
  return (
    <div className="detail-modal">
      <div className="detail-modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>
        
        <div className="detail-header">
          <h2 className='detail-post-title'>{post.title}</h2>
          <span className={`priority ${post.priority.toLowerCase()}`}>
            {post.priority}
          </span>
        </div>

        <div className="post-body">
          {post.photo && (
            <div className="post-image-detail">
              <img src={URL.createObjectURL(post.photo)} alt={post.petName} />
            </div>
          )}

          <div className="post-info">
            <hr className='divisor'/>
            <div className="pet-info-detail">
              <h3 className='pet-name-detail'>
              <img src={post.animalType === 'dog' ? dogIcon : catIcon} className="pet-icon" />
              {post.petName}
              </h3>
            </div>

            <div className='disease-info-detail'>
            <div className="description">
              <h4 className='description-title-detail'>Description</h4>
              <p className='description-detail'>{post.description}</p>
            </div>

            <div className="symptoms">
              <h4 className='symptoms-title-detail'>Symptoms</h4>
              <div className="symptom-tags-detail">
                {post.symptoms.map((symptom, index) => (
                  <span key={index} className="symptom-tag-detail">
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
            </div>

            <hr className='divisor'/>

            <div className="gpt-recommendation">
              <h4 className='recommendation-title-detail'>Recommended Treatment</h4>
              <p className='recommendation-detail'>{post.gptRecommendation || 'No recommendation available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;