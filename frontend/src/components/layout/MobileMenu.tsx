import React from 'react';
import Button from '../common/ButtonExtra';
import NavLink from '../ui/NavLink';
import Overlay from '../common/Overlay';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <div className="mobile-menu__content">
        <nav className="mobile-menu__nav">
          <NavLink variant="mobile" onClick={() => onNavigate('inicio')}>
            Inicio
          </NavLink>
          <NavLink variant="mobile" onClick={() => onNavigate('sobre-nosotros')}>
            Sobre Nosotros
          </NavLink>
          <NavLink variant="mobile" onClick={() => onNavigate('documentacion')}>
            Documentación
          </NavLink>
          <NavLink variant="mobile" onClick={() => onNavigate('contacto')}>
            Contacto
          </NavLink>
        </nav>

        <div className="mobile-menu__actions">
          <Button variant="primary" size="medium" onClick={() => onNavigate('login')}>
            Iniciar Sesión
          </Button>
          <Button variant="outline" size="medium" onClick={() => onNavigate('register')}>
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
