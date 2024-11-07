import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../../context/QuizContext/QuizContext';
import Button from '../../../components/Shared/Button/Button';
import './ResultScreen.css';
import ResultCatImage from '../../../assets/images/Quiz-illustration/Result-Cat-Img.png';
import ResultDogImage from '../../../assets/images/Quiz-illustration/Result-Dog-Img.png';

const ResultScreen: React.FC = () => {
  const { getResult } = useQuiz();
  const result = getResult();
  const navigate = useNavigate();

  const resultData = {
    cat: {
      title: "You’ve Been Matched with a Feline Friend!",
      description: "Based on your answers, a cat is the perfect companion for you. Cats are known for their independence, but they also love to cuddle and play. Whether you’re looking for a low-maintenance pet that enjoys relaxing at home or a playful cat that brings joy into your life, you’ll find your ideal feline friend here.",
      image: ResultCatImage,
    },
    dog: {
      title: "You’ve Been Matched with a Canine Companion!",
      description: "Great news! Based on your quiz results, a dog is your ideal match. Dogs are loyal, loving, and always ready for an adventure. Whether you want a playful pup that keeps you active or a gentle dog that enjoys relaxing by your side, we have the perfect canine companion waiting for you.",
      image: ResultDogImage,
    },
  };

  const { description, image, title } = resultData[result];

  const handleRestart = () => {
    navigate('/Quiz');
  };

  return (
    <div className="result-screen">
      <h4 className='quiz-header'>Pawtner Quiz</h4>
      <img src={image} alt={result === 'cat' ? 'Cat' : 'Dog'} className="result-image" />
      <h1 className="result-title">{title}</h1>
      <p className="animal-text">{result === 'cat' ? "A Cat" : "A Dog"}</p>
      <div className="result-box">
        <div className="result-content">
          <p className="result-text">{description}</p>
          <div className="result-buttons">
            <Button onClick={() => navigate('/PetsAdoption')} label="See more Pets" className="button" />
            <Button onClick={handleRestart} label="Retake Quiz" className="button" />
          </div>
        </div>
      </div>
      <p className="result-subtext">Explore our available pets and find the one that’s ready to bring warmth and companionship to your home.</p>
    </div>
  );
};

export default ResultScreen;
