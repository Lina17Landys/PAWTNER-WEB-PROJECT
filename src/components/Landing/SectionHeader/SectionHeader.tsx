import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  text: string;
  imageUrl?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text, imageUrl }) => {
  return (
    <div className="section-header">
      {imageUrl && <img src={imageUrl} alt={title} className="section-header-image" />}
      <div className="section-header-content">
        <h2 className="section-header-title">{title}</h2>
        <p className="section-header-text">{text}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
