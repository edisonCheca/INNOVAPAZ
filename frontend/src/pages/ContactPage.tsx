import React from 'react';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';
import './ContactPage.css';
import contact from '../assets/icons/contact.svg';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-bg">
      <div className="contact-header-row">
        <div className="contact-img-box">
          <img src={contact} alt="Contact illustration" className="contact-img" />
        </div>
        <div className="contact-content-box">
          <h1 className="contact-title">Contactanos</h1>
          <p className="contact-subtitle">
            ¡Estamos aquí para ayudarte! Contáctanos si tienes alguna pregunta o inquietud y te
            responderemos lo antes posible.
          </p>
        </div>
      </div>
      <div className="contact-main-box">
        <div className="contact-info-box    ">
          <h2 className="contact-info-title">Información del contacto</h2>
          <div className="contact-info-row">
            <div className="contact-info-card contact-info-card--email">
              <span className="contact-info-icon-box">
                <FaEnvelope className="contact-info-icon" />
              </span>
              <div>
                <span className="contact-info-label">Correo electronico</span>
                <br />
                <span className="contact-info-value" style={{ color: '#bfa46f' }}>
                  innovapaz@gmail.com
                </span>
              </div>
            </div>
            <div className="contact-info-card contact-info-card--phone">
              <span className="contact-info-icon-box">
                <FaPhone className="contact-info-icon" />
              </span>
              <div>
                <span className="contact-info-label">Atención al cliente</span>
                <br />
                <span className="contact-info-value" style={{ color: '#2ca6a4' }}>
                  + (591) 705 - 207 - 28
                </span>
              </div>
            </div>
          </div>
          <div className="contact-social-icons contact-social-icons--row">
            <FaFacebook />
            <FaWhatsapp />
            <FaTwitter />
            <TbBrandTelegram />
            <FaDiscord />
            <FaInstagram />
          </div>
        </div>
        <div className="contact-form-box">
          <h2 className="contact-form-title">Envíanos un mensaje</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre completo" className="contact-input" />
            <input type="email" placeholder="Correo electrónico" className="contact-input" />
            <input type="tel" placeholder="Número de teléfono" className="contact-input" />
            <textarea placeholder="Mensaje" className="contact-textarea" />
            <button type="submit" className="contact-submit-btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="contact-faq-box">
        <h2 className="contact-faq-title">Preguntas frecuentes</h2>
        <details className="contact-faq-item">
          <summary>¿Cómo creo una cuenta?</summary>
          <p>Puedes crear una cuenta desde la página de registro completando el formulario.</p>
        </details>
        <details className="contact-faq-item">
          <summary>¿Qué métodos de pago aceptan?</summary>
          <p>Aceptamos pagos por transferencia bancaria, tarjeta y otros métodos digitales.</p>
        </details>
        <details className="contact-faq-item">
          <summary>¿Cómo puedo comenzar a usar el ERP?</summary>
          <p>Una vez registrado, accede con tus credenciales y sigue la guía de inicio rápido.</p>
        </details>
      </div>
    </div>
  );
};

export default ContactPage;
