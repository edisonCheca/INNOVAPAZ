import React from 'react';
import HeroTitle from '../common/HeroTitle';
import './TeamWork.css';
import reunion from '../../assets/images/reunion.png';
const TeamWork: React.FC = () => (
  <section className="teamwork">
    <div className="teamwork__container">
      <div className="teamwork__hero">
        <HeroTitle
          titulo="Construyendo el futuro juntos"
          descripcion="Somos una empresa innovadora comprometida con la excelencia, la calidad y el desarrollo sostenible de nuestras comunidades."
          gradientText="futuro"
          className="teamwork__main-title"
        />
      </div>
      <div className="teamwork__image-container">
        <img src={reunion} className="teamwork__image" />
      </div>
      <div className="teamwork__about">
        <HeroTitle
          titulo="¿Quienes somos?"
          descripcion="Somos una empresa innovadora comprometida con la excelencia, la calidad y el desarrollo sostenible de nuestras comunidades."
          gradientText="somos"
          tituloStyle="h2"
          className="teamwork__about-title"
        />
      </div>
    </div>
  </section>
);

export default TeamWork;
