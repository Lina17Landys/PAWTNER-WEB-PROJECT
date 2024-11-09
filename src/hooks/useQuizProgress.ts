import { useQuiz } from '../context/QuizContext/QuizContext';

export const useQuizProgress = () => {
  const { currentQuestionIndex, questions } = useQuiz();
  return ((currentQuestionIndex + 1) / questions.length) * 100;
};
