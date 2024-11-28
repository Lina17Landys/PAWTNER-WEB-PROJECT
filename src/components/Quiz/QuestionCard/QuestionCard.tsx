import React from 'react';
import { Option } from '../../../types/QuizTypes/quizTypes';

interface QuestionCardProps {
  question: string;
  options: Option[];
  onSelect: (value: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, onSelect }) => (
  <div>
    <h2>{question}</h2>
    {options.map((option) => (
      <button key={option.text} onClick={() => onSelect(option.value)}>
        {option.text}
      </button>
    ))}
  </div>
);

export default QuestionCard;
