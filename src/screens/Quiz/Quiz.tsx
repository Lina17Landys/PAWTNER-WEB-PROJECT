import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import QuestionScreen from './QuestionScreen/QuestionScreen';
import ResultScreen from './ResultScreen/ResultScreen';

const Quiz: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path=":questionId" element={<QuestionScreen />} />
      <Route path="result" element={<ResultScreen />} />
    </Routes>
  );
};

export default Quiz;
