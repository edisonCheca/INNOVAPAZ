import React from 'react';
import CommentSection from '../components/layout/CommentSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Bienvenido a INNOVAPAZ</h1>
        <p>Tu plataforma de innovación y paz</p>
      </header>

      <main className="home-content">
        <section className="hero-section">
          <h2>Transformando el futuro juntos</h2>
          <p>
            Descubre las últimas innovaciones y únete a nuestra comunidad comprometida con construir
            un mundo mejor.
          </p>
        </section>

        <section className="features-section">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Innovación</h3>
              <p>Soluciones tecnológicas de vanguardia</p>
            </div>
            <div className="feature-card">
              <h3>Colaboración</h3>
              <p>Trabajamos juntos por un objetivo común</p>
            </div>
            <div className="feature-card">
              <h3>Impacto</h3>
              <p>Generando cambios positivos en la sociedad</p>
            </div>
          </div>
        </section>
        <CommentSection />
      </main>
    </div>
  );
};

export default HomePage;
