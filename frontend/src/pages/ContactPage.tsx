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
import Input from '@/components/common/Input';

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
            <a
              href="https://facebook.com/innova.paz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="contact-social-link"
            >
              <FaFacebook style={{ color: 'var(--pri-900)' }} />
            </a>
            <a
              href="https://wa.me/59170520728"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="contact-social-link"
            >
              <FaWhatsapp style={{ color: 'var(--pri-900)' }} />
            </a>
            <a
              href="https://twitter.com/innova_paz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="contact-social-link"
            >
              <FaTwitter style={{ color: 'var(--pri-900)' }} />
            </a>
            <a
              href="https://t.me/innova_paz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="contact-social-link"
            >
              <TbBrandTelegram style={{ color: 'var(--pri-900)' }} />
            </a>
            <a
              href="https://discord.gg/innova_paz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="contact-social-link"
            >
              <FaDiscord style={{ color: 'var(--pri-900)' }} />
            </a>
            <a
              href="https://instagram.com/innova.paz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="contact-social-link"
            >
              <FaInstagram style={{ color: 'var(--pri-900)' }} />
            </a>
          </div>
        </div>
        <div className="contact-form-box">
          <h2 className="contact-form-title">Envíanos un mensaje</h2>
          <form className="contact-form">
            <Input
              placeholder="Ingrese su nombre completo"
              label="Nombre completo"
              name="nombre"
              className="contact-input"
            />
            <Input
              type="email"
              placeholder="Ingrese su correo electrónico"
              label="Correo electrónico"
              name="correo"
              className="contact-input"
            />
            <Input
              type="tel"
              placeholder="Ingrese su número de teléfono"
              label="Número de teléfono"
              name="telefono"
              className="contact-input"
            />
            <Input
              type="text"
              placeholder="Mensaje"
              label="Mensaje"
              name="mensaje"
              className="contact-input"
              style={{ minHeight: '80px', resize: 'vertical' }}
            />
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
          <p>
            Puedes crear una cuenta desde la página de registro completando el formulario con tus
            datos personales y de contacto. Una vez completado, recibirás un correo de confirmación
            para activar tu cuenta.
          </p>
        </details>
        <details className="contact-faq-item">
          <summary>¿Qué métodos de pago aceptan?</summary>
          <p>
            Aceptamos diversos métodos de pago para tu comodidad, incluyendo transferencia bancaria,
            tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal, y otros métodos
            de pago digitales populares en Bolivia.
          </p>
        </details>
        <details className="contact-faq-item">
          <summary>¿Cómo puedo comenzar a usar el ERP?</summary>
          <p>
            Una vez que hayas registrado tu cuenta y accedido con tus credenciales, encontrarás una
            guía de inicio rápido en tu panel de control. Esta guía te ayudará a configurar tu
            perfil, familiarizarte con las funciones principales y comenzar a utilizar las
            herramientas disponibles en nuestro sistema.
          </p>
        </details>
      </div>
    </div>
  );
};

export default ContactPage;
