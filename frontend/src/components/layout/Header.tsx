import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/ButtonExtra';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const navigate = useNavigate();
  const handleNavigationClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    switch (section) {
      case 'home':
        navigate('/');
        break;
      case 'sobre-nosotros':
        navigate('/about');
        break;
      case 'politicas':
        navigate('/privacy');
        break;
      case 'contacto':
        navigate('/contacto');
        break;
      case 'login':
        navigate('/login');
        break;
      case 'register':
        navigate('/register');
        break;
      default:
        break;
    }
  };

  const handleLogoClick = () => {
    handleNavigationClick('home');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <Logo text="INNOVAPAZ" onClick={handleLogoClick} />
          </div>

          <nav className="header__nav">
            <NavLink
              onClick={() => handleNavigationClick('inicio')}
              isActive={activeSection === 'inicio'}
            >
              Inicio
            </NavLink>
            <NavLink
              onClick={() => handleNavigationClick('sobre-nosotros')}
              isActive={activeSection === 'sobre-nosotros'}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              onClick={() => handleNavigationClick('politicas')}
              isActive={activeSection === 'politicas'}
            >
              Privacidad
            </NavLink>
            <NavLink
              onClick={() => handleNavigationClick('contacto')}
              isActive={activeSection === 'contacto'}
            >
              Contacto
            </NavLink>
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

          <button
            className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onNavigate={handleNavigationClick}
      />
    </>
  );
};

export default Header;
