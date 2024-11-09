import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Comment } from '../types/DiseaseforumTypes/postTypes';

export const useFetchComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const commentsRef = collection(db, 'posts', postId, 'comments');
    const commentsQuery = query(commentsRef, orderBy('createdAt', 'asc'));

    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      const commentsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Comment));
      setComments(commentsList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [postId]);

  return { comments, loading };
};
