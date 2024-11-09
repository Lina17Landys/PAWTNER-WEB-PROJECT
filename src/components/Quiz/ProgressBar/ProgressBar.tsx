import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  progress: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, totalSteps }) => {
  const segments = Array.from({ length: totalSteps }, (_, index) => (
    <div
      key={index}
      className={`progress-segment ${index < progress ? 'completed' : ''}`}
    ></div>
  ));

  return <div className="progress-bar">{segments}</div>;
};

export default ProgressBar;
