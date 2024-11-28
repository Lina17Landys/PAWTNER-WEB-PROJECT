import React, { useState } from 'react';
import DiseaseCard from '../DiseaseCard/DiseaseCard';
import { Post } from '../../../types/DiseaseforumTypes/postTypes';
import PostDetail from '../PostDetail/PostDetail';

interface ColumnProps {
  diseaseName: string;
  posts: Post[];
  onDelete: (postId: string) => void;
}

const Column: React.FC<ColumnProps> = ({ diseaseName, posts, onDelete }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const closeModal = () => setSelectedPost(null);

  const diseaseClassName = diseaseName.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`disease-column ${diseaseClassName}`}>
      <h2 className="disease-title">{diseaseName}</h2>
      {posts.length === 0 ? (
        <p>No posts for this disease yet.</p>
      ) : (
        posts.map(post => (
          <DiseaseCard
            key={post.id}
            post={post}
            onViewDetails={() => setSelectedPost(post)}
            onDelete={onDelete}
          />
        ))
      )}

      {selectedPost && (
        <PostDetail post={selectedPost} onClose={closeModal} />
      )}
    </div>
  );
};

export default Column;
