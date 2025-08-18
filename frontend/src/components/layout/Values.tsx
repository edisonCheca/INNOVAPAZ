import HeroTitle from '../common/HeroTitle';
import DisplayCard from '../common/DisplayCard';
import './Values.css';
import innovacion from '../../assets/images/innovacion.png';
import transparencia from '../../assets/images/transparencia.png';
import compromiso from '../../assets/images/compromiso.png';

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
          <div className="values__grid-item">
            <DisplayCard icon={<img src={transparencia} />} title="Transparencia">
              Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
            </DisplayCard>
          </div>
          <div className="values__grid-item">
            <DisplayCard icon={<img src={compromiso} />} title="Compromiso">
              Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
            </DisplayCard>
          </div>
          <div className="values__grid-item">
            <DisplayCard icon={<img src={innovacion} />} title="Innovación">
              Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
            </DisplayCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
