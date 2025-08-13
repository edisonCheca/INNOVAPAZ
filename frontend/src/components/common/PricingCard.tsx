import React from 'react';
import './PricingCard.css';
import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  comment?: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
  icons?: React.ReactNode[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  comment,
  features,
  highlight = false,
  buttonText,
  icons = [],
}) => {
  return (
    <div className={`pricing-card ${highlight ? 'pricing-card--highlight' : ''}`}>
      {description && <span className="pricing-card__tag">{description}</span>}
      <div className="pricing-card__icons">
        {icons.map((icon, idx) => (
          <span key={idx} className="pricing-card__icon">
            {icon}
          </span>
        ))}
      </div>
      <h3 className="pricing-card__title">{title}</h3>
      <p className="pricing-card__comment">{comment}</p>
      <p className="pricing-card__price">
        {price}
        <span>/mes</span>
      </p>
      <ul className="pricing-card__features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            <span className="pricing-card__feature-check" aria-hidden="true"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="pricing-card__button">
        <Button
          title={buttonText}
          size="medium"
          backgroundColor="var(--acc-500)"
          textColor="white"
          className="custom-button--pricingcard"
        />
      </div>
    </div>
  );
};

export default PricingCard;
