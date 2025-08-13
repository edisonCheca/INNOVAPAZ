import React from 'react';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import FooterLink from '../ui/FooterLink';
import SectionTitle from '../ui/SectionTitle';
import ContactItem from '../ui/ContactItem';
import './Footer.css';

const Footer: React.FC = () => {
  const handleNavigationClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  const handleLogoClick = () => {
    handleNavigationClick('home');
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo-container">
              <Logo text="INNOVAPAZ" size="medium" onClick={handleLogoClick} />
            </div>
            <p className="footer__description">
              La plataforma de gestión empresarial más completa del mercado. Diseñada para hacer crecer tu negocio de forma inteligente.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <SectionTitle>Navegación</SectionTitle>
              <div className="footer__nav-links">
                <NavLink variant="mobile" onClick={() => handleNavigationClick('inicio')}>
                  Inicio
                </NavLink>
                <NavLink variant="mobile" onClick={() => handleNavigationClick('sobre-nosotros')}>
                  Sobre Nosotros
                </NavLink>
                <NavLink variant="mobile" onClick={() => handleNavigationClick('documentacion')}>
                  Documentación
                </NavLink>
                <NavLink variant="mobile" onClick={() => handleNavigationClick('contacto')}>
                  Contacto
                </NavLink>
              </div>
            </div>

            <div className="footer__section">
              <SectionTitle>Producto</SectionTitle>
              <div className="footer__section-links">
                <FooterLink onClick={() => handleNavigationClick('funcionalidades')}>
                  Funcionalidades
                </FooterLink>
                <FooterLink onClick={() => handleNavigationClick('precios')}>
                  Precios
                </FooterLink>
                <FooterLink onClick={() => handleNavigationClick('integracion')}>
                  Integración
                </FooterLink>
                <FooterLink onClick={() => handleNavigationClick('seguridad')}>
                  Seguridad
                </FooterLink>
              </div>
            </div>

            <div className="footer__section">
              <SectionTitle>Soporte</SectionTitle>
              <div className="footer__section-links">
                <FooterLink onClick={() => handleNavigationClick('ayuda')}>
                  Ayuda
                </FooterLink>
                <FooterLink onClick={() => handleNavigationClick('documentacion')}>
                  Documentación
                </FooterLink>
                <FooterLink onClick={() => handleNavigationClick('contacto')}>
                  Contacto
                </FooterLink>
              </div>
            </div>

            <div className="footer__contact">
              <ContactItem 
                icon="email" 
                text="contacto@erpsolutions.com"
                onClick={() => handleNavigationClick('email')}
              />
              <ContactItem 
                icon="location" 
                text="La Paz, Bolivia"
                onClick={() => handleNavigationClick('location')}
              />
              <ContactItem 
                icon="phone" 
                text="+591 77517893"
                onClick={() => handleNavigationClick('phone')}
              />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <p className="footer__copyright">
            © 2025 ERP Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
