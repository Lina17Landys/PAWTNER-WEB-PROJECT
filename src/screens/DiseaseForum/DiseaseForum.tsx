import React, { useState, useEffect } from 'react';
import BarDash from "../../components/BarDashboard/nav-dash";
import Column from '../../components/DiseaseForum/Column/Column';
import PostForm from '../../components/DiseaseForum/PostForm/PostForm';
import { useFetchPosts } from '../../hooks/useFetchPosts';
import { createPost, deletePost } from '../../services/postService';
import { diseaseSymptomMap } from '../../services/diseaseSymptomMap';
import { Post, PostData } from '../../types/postTypes';
import { useAuthUser } from '../../hooks/useAuthUser';
import './DiseaseForum.css';

const diseases = Object.keys(diseaseSymptomMap);

const DiseaseForum: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { posts: fetchedPosts, loading, error } = useFetchPosts();
  const [posts, setPosts] = useState<Post[]>([]);
  const authUser = useAuthUser();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts]);

  const handleNewPost = async (newPost: PostData) => {
    if (!authUser) {
      alert('You must be logged in to post.');
      return;
    }

    const postWithId: Post = {
      ...newPost,
      id: Date.now().toString(),
      userId: authUser.uid,
      username: authUser.username,
    };

    console.log("New post created:", postWithId); 

    setPosts((prevPosts) => [...prevPosts, postWithId]);
    await createPost(postWithId);
    closeModal();
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  const getDiseaseForPost = (symptoms: string[]): string[] => {
    return diseases.filter(disease =>
      symptoms.some(symptom => diseaseSymptomMap[disease]?.includes(symptom))
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
              onDelete={handleDeletePost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DiseaseForum;
