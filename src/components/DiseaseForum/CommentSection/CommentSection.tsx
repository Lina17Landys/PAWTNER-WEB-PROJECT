import React, { useState } from 'react';
import { Comment } from '../../../types/postTypes';
import { useAuthUser } from '../../../hooks/useAuthUser';
import './CommentSection.css';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (newComment: Comment) => void;
  onDeleteComment: (commentId: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment, onDeleteComment }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const authUser = useAuthUser();

  const handleAddComment = () => {
    if (newCommentText.trim() && authUser) {
      const newComment: Comment = {
        id: Date.now().toString(),
        userId: authUser.uid,
        username: authUser.username || 'User',
        text: newCommentText,
        createdAt: new Date().toISOString(),
      };
      onAddComment(newComment);
      setNewCommentText('');
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input">
        <input
          type="text"
          placeholder="Add comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button className='Submit-btn' onClick={handleAddComment}>Submit</button>
      </div>
      <hr className='divisor'/>
      <div className="comments-list">
        <h2 className="comments-title">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong className="comment-username">{comment.username}:</strong> {comment.text}
            {authUser?.uid === comment.userId && (
              <button className="Delete-btn" onClick={() => onDeleteComment(comment.id)}>
                <img src="src/assets/images/trash.svg" alt="" />
              </button>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default CommentSection;
