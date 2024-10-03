import { useEffect, useState } from 'react';
import { Post } from '../types/postTypes';

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Post about Parvovirus',
    description: 'My dog has symptoms of vomiting and diarrhea.',
    symptoms: ['Vomiting', 'Diarrhea'],
    animalType: 'dog',
    petName: 'Buddy',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Post about Canine Distemper',
    description: 'My cat has a high fever and is lethargic.',
    symptoms: ['Fever', 'Lethargy'],
    animalType: 'cat',
    petName: 'Whiskers',
    priority: 'emergency',
  },
];

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchPosts = async () => {
      setLoading(true);
      try {
    
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
      } catch (err) {
        setError('Error loading posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};