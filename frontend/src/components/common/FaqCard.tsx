import React from 'react';
import './FaqCard.css';

interface FaqCardProps {
  category: string;
  question: string;
  className?: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ category, question, className = '' }) => {
  return (
    <div className={`faq-card ${className}`}>
      <div className="faq-card__category">{category}</div>
      <div className="faq-card__line"></div>
      <div className="faq-card__question">{question}</div>
    </div>
  );
};

export default FaqCard;
