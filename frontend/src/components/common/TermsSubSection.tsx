import React from 'react';
import './TermsSubSection.css';

interface TermsSubSectionProps {
  title: string;
  content: string | string[];
}

const TermsSubSection = ({ title, content }: TermsSubSectionProps) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className="terms-section__paragraph">
          {paragraph}
        </p>
      ));
    }
    return <p className="terms-section__paragraph">{content}</p>;
  };

  return (
    <div className="terms-subsection">
      <h3 className="terms-subsection__title">{title}</h3>
      <div className="terms-section__content">{renderContent()}</div>
    </div>
  );
};

export default TermsSubSection;
