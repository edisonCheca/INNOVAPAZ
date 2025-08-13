import React from 'react';
import HeroTitle from '../common/HeroTitle';
import FaqCard from '../common/FaqCard';
import Button from '../common/Button';
import './FrequentQuestions.css';

const FrequentQuestions: React.FC = () => {
  const faqData = [
    {
      category: 'Personalización',
      question: '¿Cómo personalizar el dashboard de mi negocio?',
    },
    {
      category: 'Personalización',
      question: '¿Cómo personalizar el dashboard de mi negocio?',
    },
    {
      category: 'Personalización',
      question: '¿Cómo personalizar el dashboard de mi negocio?',
    },
    {
      category: 'Personalización',
      question: '¿Cómo personalizar el dashboard de mi negocio?',
    },
  ];

  const handleViewMore = (): void => {
    console.log('Botón "ver más" clickeado');
  };

  return (
    <section className="frequent-questions">
      <div className="frequent-questions__container">
        <HeroTitle
          titulo="Preguntas Frecuentes"
          descripcion="Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios"
          gradientText="Frecuentes"
          tituloStyle="h2"
          descripcionStyle="body-large"
          tituloSize={39}
          descripcionSize={20}
          descripcionMaxWidth="500px"
        />

        <div className="frequent-questions__grid">
          {faqData.map((faq, index) => (
            <FaqCard key={index} category={faq.category} question={faq.question} />
          ))}
        </div>

        <div className="frequent-questions__action">
          <Button
            title="ver más"
            hasBackground={true}
            backgroundColor="var(--acc-600)"
            textColor="var(--white)"
            size="small"
            onClick={handleViewMore}
            className="frequent-questions__button"
          />
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
