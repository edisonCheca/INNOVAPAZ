import React from 'react';
import HeroTitle from '../common/HeroTitle';
import DisplayCard from '../common/DisplayCard';
import './Values.css';
import iconexcelencia from '../../assets/images/iconexcelencia.png';
import icontransparencia from '../../assets/images/icontransparencia.png';
import iconcompromiso from '../../assets/images/iconcompromiso.png';
import iconinovacion from '../../assets/images/iconinovacion.png';

function Values() {
  return (
    <section className="values">
      <div className="values__container">
        <HeroTitle
          titulo="Los pilares que nos definen"
          descripcion=""
          gradientText="definen"
          tituloStyle="h2"
          descripcionStyle="body-medium"
          className="values__title"
        />
        <div className="values__grid">
          <DisplayCard
            icon={<img src={iconexcelencia} />}
            title="Excelencia"
            iconBg="radial-gradient(circle, #DBD56E 0%, #FC7753 100%)"
          >
            Nos comprometemos a superar las expectativas en cada proyecto que realizamos.
          </DisplayCard>
          <DisplayCard
            icon={<img src={icontransparencia} />}
            title="Transparencia"
            iconBg="radial-gradient(circle, #DBD56E 0%, #FC7753 100%)"
          >
            Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
          </DisplayCard>
          <DisplayCard
            icon={<img src={iconcompromiso} />}
            title="Compromiso"
            iconBg="radial-gradient(circle, #DBD56E 0%, #FC7753 100%)"
          >
            Estamos dedicados al éxito de nuestros clientes y al crecimiento conjunto.
          </DisplayCard>
          <DisplayCard
            icon={<img src={iconinovacion} />}
            title="Innovación"
            iconBg="radial-gradient(circle, #DBD56E 0%, #FC7753 100%)"
          >
            Buscamos constantemente nuevas formas de mejorar y evolucionar.
          </DisplayCard>
        </div>
      </div>
    </section>
  );
}

export default Values;
