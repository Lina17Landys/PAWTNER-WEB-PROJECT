import React, { useState } from 'react';
import { Comment } from '../../../types/postTypes';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (newComment: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = () => {
    if (newCommentText.trim() !== '') {
      onAddComment(newCommentText);
      setNewCommentText('');
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input">
        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button onClick={handleAddComment}>Comentar</button>
      </div>

      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.username}:</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
