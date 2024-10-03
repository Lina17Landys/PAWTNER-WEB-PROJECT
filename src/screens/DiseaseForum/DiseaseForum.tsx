import React, { useState, useEffect } from 'react';

import Column from '../../components/DiseaseForum/Column/Column';
import PostForm from '../../components/DiseaseForum/PostForm/PostForm';
import { useFetchPosts } from '../../hooks/useFetchPosts';
import { diseaseSymptomMap } from '../../services/diseaseSymptomMap';
import { Post, PostData } from '../../types/postTypes';
import './DiseaseForum.css'
import BarDash from "../../components/BarDashboard/nav-dash";

const diseases = Object.keys(diseaseSymptomMap);

const DiseaseForum: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { posts: fetchedPosts, loading, error } = useFetchPosts();
  const [posts, setPosts] = useState<Post[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleNewPost = (newPost: PostData) => {
    const postWithId: Post = {
      ...newPost,
      id: Date.now().toString(),
    };
    setPosts((prevPosts) => [...prevPosts, postWithId]);
    closeModal();
  };

  const getDiseaseForPost = (symptoms: string[]): string[] => {
    return diseases.filter(disease =>
      symptoms.some(symptom => diseaseSymptomMap[disease]?.includes(symptom))
    );
  };

  return (
    <div className="disease-forum">
      <BarDash />
      <h1>Pet Health Forum</h1>  
  
      <button className="addPostButton" onClick={openModal}>
        +
      </button>
  
      {isModalOpen && (
        <PostForm onSubmit={handleNewPost} onClose={closeModal} />
      )}
  
      <div className="columns">
        {diseases.map(disease => {
          const filteredPosts = posts.filter(post =>
            getDiseaseForPost(post.symptoms).includes(disease)
          );
          return (
            <Column
              key={disease}
              diseaseName={disease}
              posts={filteredPosts}
            />
          );
        })}
      </div>
    </div>
  );
  
};

export default DiseaseForum;