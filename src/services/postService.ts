import { db } from '../../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Post } from '../types/postTypes';

const postsCollection = collection(db, 'posts');

export const createPost = async (post: Post) => {
  try {
    const postData = { ...post, createdAt: Timestamp.fromDate(new Date()) };
    if (!postData.photo) delete postData.photo;

    await addDoc(postsCollection, postData);
    console.log('Post creado exitosamente en Firestore.');
  } catch (error) {
    console.error('Error creando el post en Firestore:', error);
    throw error;
  }
};
