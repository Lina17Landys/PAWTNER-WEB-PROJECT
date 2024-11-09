import React from 'react';

interface ResultCardProps {
  result: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => (
  <div>
    <h2>Your Ideal Pet</h2>
    <p>{result === 'dog' ? 'You should adopt a dog!' : 'You should adopt a cat!'}</p>
  </div>
);

export default ResultCard;
