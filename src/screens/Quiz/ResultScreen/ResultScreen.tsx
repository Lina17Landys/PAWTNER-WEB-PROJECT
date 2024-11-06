import React from 'react';
import { useQuiz } from '../../../context/QuizContext/QuizContext';

const ResultScreen: React.FC = () => {
  const { getResult } = useQuiz();
  const result = getResult();

  return (
    <div className="result-screen">
      <h1>Your perfect pet match is:</h1>
      <p>{result === 'cat' ? "Cat" : "Dog"}</p>
    </div>
  );
};

export default ResultScreen;
