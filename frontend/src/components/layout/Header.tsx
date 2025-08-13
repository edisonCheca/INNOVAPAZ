import React from 'react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import './Header.css';

const Header: React.FC = () => {
  const handleNavigationClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  const handleLogoClick = () => {
    handleNavigationClick('home');
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <Logo text="INNOVAPAZ" onClick={handleLogoClick} />
        </div>

        <nav className="header__nav">
          <button
            className="header__nav-link"
            onClick={() => handleNavigationClick('inicio')}
          >
            Inicio
          </button>
          <button
            className="header__nav-link"
            onClick={() => handleNavigationClick('sobre-nosotros')}
          >
            Sobre Nosotros
          </button>
          <button
            className="header__nav-link"
            onClick={() => handleNavigationClick('documentacion')}
          >
            Documentación
          </button>
          <button
            className="header__nav-link"
            onClick={() => handleNavigationClick('contacto')}
          >
            Contacto
          </button>
        </nav>

        <div className="header__actions">
          <Button
            variant="primary"
            size="small"
            onClick={() => handleNavigationClick('login')}
            className="header__login-btn"
          >
            Iniciar Sesión
          </Button>
          <Button
            variant="outline"
            size="small"
            onClick={() => handleNavigationClick('register')}
            className="header__register-btn"
          >
            Registrarse
          </Button>
        </div>

        <button className="header__menu-toggle">
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
