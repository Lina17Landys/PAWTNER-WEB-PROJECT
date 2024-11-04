import React, { useState } from 'react';
import { Comment } from '../../../types/postTypes';
import { useAuthUser } from '../../../hooks/useAuthUser';

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
          placeholder="Escribe un comentario..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button onClick={handleAddComment}>Comentar</button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.username}:</strong> {comment.text}
            {authUser?.uid === comment.userId && (
              <button onClick={() => onDeleteComment(comment.id)}>Eliminar</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
