import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from 'lucide-react';
import { useScrollTo } from '../../../hooks';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToTop, scrollToElement } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionLink = (sectionId: string, href: string, event: React.MouseEvent) => {
    event.preventDefault();

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
  };

  const handlePageLink = (href: string, event: React.MouseEvent) => {
    // Para enlaces principales de páginas, ir al inicio
    event.preventDefault();
    navigate(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className='container'>
          <div className={styles.footerContent}>
            {/* Sección de la Empresa */}
            <div className={styles.companySection}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <img src='/logo_blanco.png' alt='logo de la imagen' />
                </div>
                <span>CorpsCode</span>
              </div>

              <p className={styles.description}>
                Empresa líder en desarrollo de software en{' '}
                <span className={styles.highlight}>La Paz, Bolivia</span>. Transformamos ideas en
                soluciones tecnológicas innovadoras que impulsan el crecimiento de las
                organizaciones bolivianas.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} />
                  <address className={styles.address}>Calle 6 de Obrajes, La Paz, Bolivia</address>
                </div>
                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} />
                  <a href='tel:+59177123456' className={styles.link}>
                    +591 77123456
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} />
                  <a href='mailto:contacto@corpscode.bo' className={styles.link}>
                    contacto@corpscode.bo
                  </a>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a
                  href='https://facebook.com/corpscode'
                  className={styles.socialLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                >
                  <Facebook size={20} />
                </a>
                <a
                  href='https://twitter.com/corpscode'
                  className={styles.socialLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                >
                  <Twitter size={20} />
                </a>
                <a
                  href='https://instagram.com/corpscode'
                  className={styles.socialLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                >
                  <Instagram size={20} />
                </a>
                <a
                  href='https://linkedin.com/company/corpscode'
                  className={styles.socialLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Nuestros Servicios</h3>
              <div className={styles.linkList}>
                <button
                  onClick={(e) => handleSectionLink('development', '/services', e)}
                  className={styles.link}
                >
                  Desarrollo de Software
                </button>
                <button
                  onClick={(e) => handleSectionLink('consulting', '/services', e)}
                  className={styles.link}
                >
                  Consultoría Tecnológica
                </button>
                <a
                  href='https://innovapaz.bo'
                  className={styles.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sistema ERP InnovaPaz
                </a>
                <button
                  onClick={(e) => handleSectionLink('support', '/services', e)}
                  className={styles.link}
                >
                  Mantenimiento y Soporte
                </button>
                <button
                  onClick={(e) => handleSectionLink('digital-transformation', '/services', e)}
                  className={styles.link}
                >
                  Transformación Digital
                </button>
              </div>
            </div>

            {/* La Empresa */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>La Empresa</h3>
              <div className={styles.linkList}>
                <button onClick={(e) => handleSectionLink('about', '/', e)} className={styles.link}>
                  Quiénes Somos
                </button>
                <button
                  onClick={(e) => handleSectionLink('history', '/', e)}
                  className={styles.link}
                >
                  Nuestra Historia
                </button>
                <button
                  onClick={(e) => handleSectionLink('mission', '/', e)}
                  className={styles.link}
                >
                  Misión y Visión
                </button>
                <button onClick={(e) => handleSectionLink('team', '/', e)} className={styles.link}>
                  Equipo Directivo
                </button>
              </div>
            </div>

            {/* Por Qué Elegirnos */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Por Qué Elegirnos</h3>
              <div className={styles.linkList}>
                <button
                  onClick={(e) => handlePageLink('/why-choose-us', e)}
                  className={styles.link}
                >
                  Ventajas Competitivas
                </button>
                <button
                  onClick={(e) => handleSectionLink('experience', '/why-choose-us', e)}
                  className={styles.link}
                >
                  Experiencia
                </button>
                <button
                  onClick={(e) => handleSectionLink('methodology', '/why-choose-us', e)}
                  className={styles.link}
                >
                  Metodología
                </button>
                <button
                  onClick={(e) => handleSectionLink('technologies', '/why-choose-us', e)}
                  className={styles.link}
                >
                  Tecnologías
                </button>
                <button
                  onClick={(e) => handleSectionLink('success-cases', '/why-choose-us', e)}
                  className={styles.link}
                >
                  Casos de Éxito
                </button>
                <button
                  onClick={(e) => handleSectionLink('certifications', '/why-choose-us', e)}
                  className={styles.link}
                >
                  Certificaciones
                </button>
              </div>
            </div>

            {/* Horarios */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Clock className={styles.contactIcon} style={{ marginRight: '8px' }} />
                Horarios de Atención
              </h3>
              <div className={styles.scheduleList}>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleDay}>Lunes - Viernes</span>
                  <span className={styles.scheduleTime}>08:30 - 18:00</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleDay}>Sábados</span>
                  <span className={styles.scheduleTime}>09:00 - 13:00</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleDay}>Domingos</span>
                  <span className={styles.scheduleTime}>Cerrado</span>
                </div>
              </div>
              <p
                style={{
                  marginTop: 'var(--spacing-md)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-neutral-medium)',
                }}
              >
                *Horario de La Paz (UTC-4)
              </p>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {currentYear} <span className={styles.highlight}>CorpsCode</span>. Todos los
              derechos reservados. Desarrollado en La Paz, Bolivia.
            </p>
            <div className={styles.legalLinks}>
              <button
                onClick={(e) => handlePageLink('/privacy-policy', e)}
                className={styles.legalLink}
              >
                Política de Privacidad
              </button>
              <button
                onClick={(e) => handlePageLink('/terms-of-service', e)}
                className={styles.legalLink}
              >
                Términos de Servicio
              </button>
              <button
                onClick={(e) => handleSectionLink('contact-info', '/contact', e)}
                className={styles.legalLink}
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón Back to Top */}
      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ''}`}
        onClick={() => scrollToTop()}
        aria-label='Volver arriba'
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};
