import { useEffect, useState } from 'react';
import { Post } from '../types/DiseaseforumTypes/postTypes';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const useFetchUserPosts = (userId: string) => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      setLoading(true);
      try {
        const postsQuery = query(
          collection(db, 'posts'),
          where('userId', '==', userId),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(postsQuery);
        const fetchedUserPosts: Post[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];

        setUserPosts(fetchedUserPosts);
      } catch (err) {
        setError('Error loading user posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserPosts();
    }
  }, [userId]);

  return { userPosts, loading, error };
};
