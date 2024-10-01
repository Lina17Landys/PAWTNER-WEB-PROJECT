import React from 'react';
import { Post } from '../../../types/postTypes';
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
        
        <div className="header">
          <h2 className='post-title-detail'>{post.title}</h2>
          <span className={`priority ${post.priority.toLowerCase()}`}>
            {post.priority}
          </span>
        </div>

        <div className="pet-info">
          <h3 className='pet-name'>
            {post.animalType === 'dog' ? '🐶' : '🐱'} {post.petName}
          </h3>
        </div>

        <div className="post-body">
          {post.photo && (
            <div className="post-image">
              <img src={URL.createObjectURL(post.photo)} alt={post.petName} />
            </div>
          )}

          <div className="post-info">
            {/*<div className="diagnosis">
              <h4>Diagnosis</h4>
              <p>{post.diagnosis || 'No diagnosis available'}</p>
            </div>*/}
            <div className="description">
              <h4>Description</h4>
              <p>{post.description}</p>
            </div>
            <div className="symptoms">
              <h4>Symptoms</h4>
              <div className="symptom-tags">
                {post.symptoms.map((symptom, index) => (
                  <span key={index} className="symptom-tag">
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
