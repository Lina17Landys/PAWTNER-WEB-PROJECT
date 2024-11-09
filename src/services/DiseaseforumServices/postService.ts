import { db } from '../../../firebaseConfig';
import { collection, addDoc, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { Post } from '../../types/DiseaseforumTypes/postTypes';
import { Comment } from '../../types/DiseaseforumTypes/postTypes';

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

export const deletePost = async (postId: string) => {
  try {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
    console.log(`Post con ID ${postId} eliminado exitosamente.`);
  } catch (error) {
    console.error('Error eliminando el post en Firestore:', error);
    throw error;
  }
};

export const addCommentToPost = async (postId: string, comment: Comment) => {
  try {
    const commentsCollection = collection(db, 'posts', postId, 'comments');
    const newComment = {
      ...comment,
      createdAt: Timestamp.fromDate(new Date()),
    };
    
    await addDoc(commentsCollection, newComment);
    console.log('Comentario guardado en Firestore');
  } catch (error) {
    console.error('Error guardando el comentario en Firestore:', error);
    throw error;
  }
};

export const deleteComment = async (postId: string, commentId: string) => {
  try {
    const commentRef = doc(db, 'posts', postId, 'comments', commentId);
    await deleteDoc(commentRef);
    console.log(`Comentario con ID ${commentId} eliminado exitosamente.`);
  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
    throw error;
  }
};