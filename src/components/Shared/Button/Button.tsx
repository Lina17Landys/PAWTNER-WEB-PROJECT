import React from 'react';
import './Button.css'

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className="btn">{label}</button>
);

export default Button;
