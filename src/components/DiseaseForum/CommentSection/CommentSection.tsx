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
                <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#E21E27"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </button>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default CommentSection;
