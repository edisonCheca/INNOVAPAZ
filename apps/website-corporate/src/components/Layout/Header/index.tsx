import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollTo, useOutsideClick } from '../../../hooks';
import type { NavigationItem } from '../../../types';
import styles from './Header.module.css';

const navigationItems: NavigationItem[] = [
  {
    name: 'Conozca la Empresa',
    href: '/',
    sections: [
      { name: 'Quiénes Somos', id: 'about' },
      { name: 'Nuestra Historia', id: 'history' },
      { name: 'Misión y Visión', id: 'mission' },
      { name: 'Equipo Directivo', id: 'team' },
    ],
  },
  {
    name: 'Por Qué Elegirnos',
    href: '/why-choose-us',
    sections: [
      { name: 'Experiencia', id: 'experience' },
      { name: 'Metodología', id: 'methodology' },
      { name: 'Tecnologías', id: 'technologies' },
      { name: 'Casos de Éxito', id: 'success-cases' },
      { name: 'Certificaciones', id: 'certifications' },
    ],
  },
  {
    name: 'Nuestros Servicios',
    href: '/services',
    sections: [
      { name: 'Desarrollo de Software', id: 'development' },
      { name: 'Consultoría Tecnológica', id: 'consulting' },
      { name: 'Sistema ERP InnovaPaz', id: 'erp' },
      { name: 'Mantenimiento y Soporte', id: 'support' },
      { name: 'Transformación Digital', id: 'digital-transformation' },
    ],
  },
  {
    name: 'Contacto',
    href: '/contact',
    sections: [
      { name: 'Información de Contacto', id: 'contact-info' },
      { name: 'Formulario de Contacto', id: 'contact-form' },
      { name: 'Ubicación', id: 'location' },
      { name: 'Horarios', id: 'schedule' },
    ],
  },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToElement } = useScrollTo();

  const dropdownRef = useOutsideClick(() => {
    setActiveDropdown(null);
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  const handleMainNavClick = (href: string, event: React.MouseEvent) => {
    // Si es un clic en el enlace principal, ir al inicio de esa página
    event.preventDefault();
    navigate(href);
    setIsMobileMenuOpen(false);
    // Hacer scroll al top después de navegar
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSectionClick = (sectionId: string, href: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (location.pathname === href) {
      // Si ya estamos en la página, hacer scroll a la sección
      scrollToElement(sectionId, { offset: 100 });
    } else {
      // Si no estamos en la página, navegar y luego hacer scroll
      navigate(href);
      setTimeout(() => {
        scrollToElement(sectionId, { offset: 100 });
      }, 300);
    }

    // Cerrar dropdown y menú móvil
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdownToggle = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className='container'>
          <nav className={styles.nav}>
            <Link to='/' className={styles.logo}>
              <div className={styles.logoIcon}>
                <img src='/logo_blanco.png' alt='logo de la empresa' />
              </div>
              <span>CorpsCode</span>
            </Link>

            {/* Navegación Desktop */}
            <ul className={styles.navList} ref={dropdownRef as React.RefObject<HTMLUListElement>}>
              {navigationItems.map((item, index) => (
                <li
                  key={item.name}
                  className={styles.navItem}
                  onMouseEnter={() => item.sections && setActiveDropdown(index)}
                  onMouseLeave={() => item.sections && setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`${styles.navLink} ${
                      location.pathname === item.href ? styles.navLinkActive : ''
                    }`}
                    onClick={(e) => handleMainNavClick(item.href, e)}
                  >
                    {item.name}
                    {item.sections && <ChevronDown size={16} />}
                  </Link>

                  {item.sections && (
                    <div
                      className={`${styles.dropdown} ${
                        activeDropdown === index ? styles.dropdownVisible : ''
                      }`}
                    >
                      {item.sections.map((section) => (
                        <button
                          key={section.id}
                          className={styles.dropdownItem}
                          onClick={(e) => handleSectionClick(section.id, item.href, e)}
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Botón de menú móvil */}
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label='Toggle mobile menu'
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay móvil */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menú móvil */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav>
          <ul className={styles.mobileNavList}>
            {navigationItems.map((item, index) => (
              <li key={item.name} className={styles.mobileNavItem}>
                <div className={styles.mobileNavLinkWrapper}>
                  <Link
                    to={item.href}
                    className={styles.mobileNavLink}
                    onClick={(e) => handleMainNavClick(item.href, e)}
                  >
                    {item.name}
                  </Link>
                  {item.sections && (
                    <button
                      onClick={(e) => handleMobileDropdownToggle(index, e)}
                      className={styles.mobileDropdownButton}
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown
                        size={20}
                        className={`${styles.chevronIcon} ${
                          mobileDropdown === index ? styles.chevronIconRotated : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.sections && (
                  <div
                    className={`${styles.mobileDropdown} ${
                      mobileDropdown === index ? styles.mobileDropdownOpen : ''
                    }`}
                  >
                    {item.sections.map((section) => (
                      <button
                        key={section.id}
                        className={styles.mobileDropdownItem}
                        onClick={(e) => handleSectionClick(section.id, item.href, e)}
                      >
                        {section.name}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
