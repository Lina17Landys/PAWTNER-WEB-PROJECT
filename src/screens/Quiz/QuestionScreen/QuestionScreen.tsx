import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuiz } from '../../../context/QuizContext/QuizContext';
import ProgressBar from '../../../components/Quiz/ProgressBar/ProgressBar';
import Button from '../../../components/Shared/Button/Button';
import './QuestionScreen.css';

const QuestionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { questionId } = useParams<{ questionId: string }>();
  const { questions, selectAnswer } = useQuiz();

  const currentQuestionIndex = parseInt(questionId || '1') - 1;
  const currentQuestion = questions[currentQuestionIndex];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOptionIndex !== null) {
      const selectedOptionValue = currentQuestion.options[selectedOptionIndex].value;
      selectAnswer(selectedOptionValue);
      setSelectedOptionIndex(null);
      if (currentQuestionIndex < questions.length - 1) {
        navigate(`/quiz/${currentQuestionIndex + 2}`);
      } else {
        navigate(`/quiz/result`);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {  
      setSelectedOptionIndex(null);
      navigate(`/quiz/${currentQuestionIndex}`);
    } else {
      navigate('/quiz'); 
    }
  };

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (!currentQuestion) return <p>Question not found</p>;

  return (
    <div className="question-screen">
      <h4 className='quiz-header-question'>Pawtner Quiz</h4>
      <ProgressBar progress={currentQuestionIndex + 1} totalSteps={questions.length} />
      <h2 className="current-question">{currentQuestion.text}</h2>
      
      <div className={`options-container ${currentQuestion.options.some(option => option.image) ? 'has-images' : ''}`}>
        {currentQuestion.options.map((option, index) => (
          <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`option-button ${selectedOptionIndex === index ? 'selected' : ''} ${option.image ? '' : 'no-image'}`}
            >
              {option.image && <img src={option.image} alt={option.text} className="option-image" />}
              <span>{option.text}</span>
            </button>
          ))}
      </div>

      <div className="navigation-buttons">
        <div className="button-back-container">
          <Button onClick={handleBack} label="Back" /> 
        </div>
        <div className="button-next-container">
          <Button onClick={handleNext} label="Next" />
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
