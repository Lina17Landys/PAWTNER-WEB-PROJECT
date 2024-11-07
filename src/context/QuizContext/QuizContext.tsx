import React, { createContext, useContext, useState } from 'react';
import { questions, calculateResult } from '../../services/QuizServices/quizService';
import { Question } from '../../types/QuizTypes/quizTypes';

interface QuizContextProps {
  questions: Question[];
  currentQuestionIndex: number;
  selectAnswer: (answer: string) => void;
  getResult: () => 'cat' | 'dog';
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [currentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const selectAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const getResult = () => calculateResult(answers);

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        selectAnswer,
        getResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within QuizProvider");
  return context;
};
