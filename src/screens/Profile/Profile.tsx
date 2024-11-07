import React from 'react';
import BarDash from "../../components/BarDashboard/nav-dash";
import { useAuthUser } from '../../hooks/useAuthUser';
import { useFetchUserPosts } from '../../hooks/useFetchUserPosts';
import { auth } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import DiseaseCard from '../../components/DiseaseForum/DiseaseCard/DiseaseCard';
import './Profile.css';

const Profile: React.FC = () => {
  const authUser = useAuthUser();
  const { userPosts, loading, error } = useFetchUserPosts(authUser?.uid || '');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User signed out');
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!authUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-screen">
        <BarDash />
        <h1 className='profile-title'>Your Profile</h1>
        <div className='profile-box'>
            <div className='username-and-signoutbtn'>
                <h2>{authUser.username}</h2>
                <button className="logout-button" onClick={handleLogout}>
                    Sign Out
                </button>
            </div>

            <hr className='divisor' />

            <h3 className='posts-title'>My Posts</h3>
            
            {loading ? (
                <p>Loading posts...</p>
            ) : error ? (
                <p>{error}</p>
            ) : userPosts.length === 0 ? (
                <p>You have no posts yet.</p>
            ) : (
                <div className="posts-list profile-disease-cards">
                    {userPosts.map((post) => (
                        <DiseaseCard
                          key={post.id}
                          post={post}
                          onViewDetails={() => console.log(`Viewing details for post ${post.id}`)}
                          onDelete={(postId) => console.log(`Deleting post ${postId}`)}
                        />
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};

export default Profile;
