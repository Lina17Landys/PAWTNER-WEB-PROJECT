import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';
import DestellosImage from '../../../assets/images/Quiz-illustration/Destellos-Ilustracion.png';
import BombillaImage from '../../../assets/images/Quiz-illustration/Bombilla-Ilustracion.png';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz/1');
  };

  const handleGoToDashboard = () => {
    navigate('/Dashboard'); 
  };

  return (
    <div className="welcome-screen">
      <div className='welcome-screen-header'>
        <button onClick={handleGoToDashboard} className='back-small-quiz'>⬅ Back</button>
        <h4 className='quiz-header-welcome'>Pawtner Quiz</h4>
        <Link to="/profile">
          <img className="profile-img" src={"./src/img/profile.png"} alt="Profile" />
        </Link>
      </div>
      <div className="welcome-image">
        <img className='pets-image' src="src/assets/images/Quiz-illustration/dog-and-cat.png" alt="dog and cat image" />
      </div>
      
      <div className="description-container">
        <div className="title-container">
          <img className="title-image left-image" src={DestellosImage} alt="Star" />
          <h1>Find Your Perfect Pet Match!</h1>
          <img className="title-image right-image" src={BombillaImage} alt="Lightbulb" />
        </div>
        <p className='welcome-description'>This quiz will help you decide if a cat or a dog is the best pet for you.</p>
        <h3 className='welcome-subtitle'>Let’s get started!</h3>
       
        <button onClick={handleStartQuiz} className='start-button'>Start Quiz</button>
        
      </div>
    </div>
  );
};

export default WelcomeScreen;
