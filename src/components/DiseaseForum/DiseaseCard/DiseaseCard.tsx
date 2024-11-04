import React from 'react';
import { Post } from '../../../types/postTypes';
import dogIcon from '../../../assets/images/Dog-Icon.png';
import catIcon from '../../../assets/images/Cat-Icon.png';
import './DiseaseCard.css';
import CommentSection from '../CommentSection/CommentSection';
import { useAuthUser } from '../../../hooks/useAuthUser';
import { Comment } from '../../../types/postTypes';
import { addCommentToPost, deleteComment } from '../../../services/postService';
import { useFetchComments } from '../../../hooks/useFetchComments';

interface DiseaseCardProps {
  post: Post;
  onViewDetails: () => void;
  onDelete: (postId: string) => void;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ post, onViewDetails, onDelete }) => {
  const authUser = useAuthUser();
  const { comments, loading } = useFetchComments(post.id);

  const handleAddComment = async (newComment: Comment) => {
    try {
      await addCommentToPost(post.id, newComment);
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(post.id, commentId);
    } catch (error) {
      console.error('Error eliminando el comentario:', error);
    }
  };

  return (
    <div className="disease-card">
      <h3 className="Post-title-card">{post.title}</h3>

      {post.photo && (
        <div className="post-image">
          <img src={URL.createObjectURL(post.photo)} alt={`${post.petName}`} />
        </div>
      )}

      <hr className="divisor" />

      <p className="pet-info">
        <img src={post.animalType === 'dog' ? dogIcon : catIcon} className="pet-icon" alt="Pet icon" />
        <span className="pet-name-card">{post.petName}</span>
        <span className={`priority ${post.priority.toLowerCase()}`}>{post.priority}</span>
      </p>

      <div className="symptoms-list">
        {post.symptoms.map((symptom, index) => (
          <span key={index} className={`symptom-tag symptom-${symptom.toLowerCase()}`}>
            {symptom}
          </span>
        ))}
      </div>

      <p className="description-section-card">{post.description}</p>

      <button className="details-button" onClick={onViewDetails}>
        Ver Detalles
      </button>

      {authUser && authUser.uid === post.userId && (
        <button className="delete-button" onClick={() => onDelete(post.id)}>
          Eliminar Post
        </button>
      )}

      <hr className="divisor" />

      {loading ? (
        <p>Cargando comentarios...</p>
      ) : (
        <CommentSection 
          comments={comments} 
          onAddComment={handleAddComment} 
          onDeleteComment={handleDeleteComment} 
        />
      )}
    </div>
  );
};

export default DiseaseCard;
