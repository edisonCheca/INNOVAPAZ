import React, { useState } from 'react';
import { OptimizedImage } from '../../components/UI/OptimizedImage';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { Button } from '../../components/UI/Button';
import { SEO } from '../../components/UI/SEO';
import { useFormValidation } from '../../hooks';
import type { ContactFormData } from '../../types';
import styles from './Contact.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { formData, errors, isSubmitting, setIsSubmitting, validateForm, updateField, resetForm } =
    useFormValidation(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simular envío del formulario
      // En una implementación real, aquí harías la llamada a tu API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular éxito (en producción, manejarías la respuesta real)
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      setSubmitError(
        'Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateField(field, e.target.value);
    };

  return (
    <>
      <SEO
        title='Contacto - CorpsCode La Paz, Bolivia'
        description='Contáctanos para tu proyecto de desarrollo de software en La Paz, Bolivia. Oficina en Calle 6 de Obrajes. Teléfono +591 77123456. Formulario de contacto disponible.'
        keywords={[
          'contacto CorpsCode',
          'oficina La Paz Bolivia',
          'desarrollo software contacto',
          'Calle 6 Obrajes',
          'teléfono +591',
        ]}
        canonical='/contact'
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroImageContainer}>
          <OptimizedImage
            src='/images/hero/contact-hero.jpg'
            alt='Profesional revisando comunicaciones y contacto'
            className={styles.heroImage}
            priority={true}
            overlay={true}
            overlayOpacity={0.3}
          />
        </div>
        <div className='container'>
          <div className={styles.heroContent}>
            <motion.h1 className={styles.heroTitle} {...fadeInUp}>
              Contáctanos
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Estamos aquí para ayudarte a transformar tus ideas en soluciones tecnológicas
              exitosas. Conversemos sobre tu proyecto.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id='contact-form' className={styles.section}>
        <div className='container'>
          <div className={styles.contactContent}>
            {/* Contact Form */}
            <motion.div
              className={styles.formContainer}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.formTitle}>Envíanos un Mensaje</h2>

              {isSubmitted && (
                <div className={styles.successMessage}>
                  <CheckCircle size={20} style={{ marginRight: '8px' }} />
                  ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto
                  contigo pronto.
                </div>
              )}

              {submitError && (
                <div className={styles.errorMessageGeneral}>
                  <AlertCircle size={20} style={{ marginRight: '8px' }} />
                  {submitError}
                </div>
              )}

              {!isSubmitted && (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor='name' className={`${styles.formLabel} ${styles.required}`}>
                      Nombre completo
                    </label>
                    <input
                      type='text'
                      id='name'
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                      placeholder='Tu nombre completo'
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='email' className={`${styles.formLabel} ${styles.required}`}>
                      Correo electrónico
                    </label>
                    <input
                      type='email'
                      id='email'
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                      placeholder='tu@email.com'
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='phone' className={`${styles.formLabel} ${styles.required}`}>
                      Teléfono
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      className={`${styles.formInput} ${errors.phone ? styles.error : ''}`}
                      placeholder='+591 77123456'
                      disabled={isSubmitting}
                    />
                    {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='company' className={styles.formLabel}>
                      Empresa (opcional)
                    </label>
                    <input
                      type='text'
                      id='company'
                      value={formData.company}
                      onChange={handleInputChange('company')}
                      className={styles.formInput}
                      placeholder='Nombre de tu empresa'
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='message' className={`${styles.formLabel} ${styles.required}`}>
                      Mensaje
                    </label>
                    <textarea
                      id='message'
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                      placeholder='Cuéntanos sobre tu proyecto o consulta...'
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <span className={styles.errorMessage}>{errors.message}</span>
                    )}
                  </div>

                  <div className={styles.formButton}>
                    <Button
                      type='submit'
                      size='large'
                      fullWidth
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      icon={<Send size={20} />}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div id='contact-info' className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <MapPin size={24} />
                  </div>
                  <h3 className={styles.infoCardTitle}>Nuestra Oficina</h3>
                </div>
                <div className={styles.infoCardContent}>
                  <p>
                    <strong>CorpsCode</strong>
                  </p>
                  <p>
                    Calle 6 de Obrajes <br />
                    <span className={styles.highlight}>La Paz, Bolivia</span>
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    <small>
                      Coordenadas: -16.4897, -68.1193
                      <br />
                      Zona horaria: América/La_Paz (UTC-4)
                    </small>
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <Phone size={24} />
                  </div>
                  <h3 className={styles.infoCardTitle}>Teléfono</h3>
                </div>
                <div className={styles.infoCardContent}>
                  <p>
                    <strong>
                      <a href='tel:+59177123456' className={styles.highlight}>
                        +591 77123456
                      </a>
                    </strong>
                  </p>
                  <p>Línea directa para consultas</p>
                  <div className={styles.emergencyContact}>
                    <div className={styles.emergencyTitle}>Soporte de Emergencia</div>
                    <div className={styles.emergencyNumber}>+591 70123456</div>
                    <div className={styles.emergencyDescription}>
                      Disponible 24/7 para clientes con soporte activo
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <Mail size={24} />
                  </div>
                  <h3 className={styles.infoCardTitle}>Correo Electrónico</h3>
                </div>
                <div className={styles.infoCardContent}>
                  <p>
                    <strong>General:</strong> <br />
                    <a href='mailto:contacto@corpscode.bo' className={styles.highlight}>
                      contacto@corpscode.bo
                    </a>
                  </p>
                  <p>
                    <strong>Ventas:</strong> <br />
                    <a href='mailto:ventas@corpscode.bo' className={styles.highlight}>
                      ventas@corpscode.bo
                    </a>
                  </p>
                  <p>
                    <strong>Soporte:</strong> <br />
                    <a href='mailto:soporte@corpscode.bo' className={styles.highlight}>
                      soporte@corpscode.bo
                    </a>
                  </p>
                </div>
              </div>

              <div id='schedule' className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <Clock size={24} />
                  </div>
                  <h3 className={styles.infoCardTitle}>Horarios de Atención</h3>
                </div>
                <div className={styles.infoCardContent}>
                  <p>
                    <strong>Horario de La Paz (UTC-4)</strong>
                  </p>
                  <table className={styles.scheduleTable}>
                    <thead>
                      <tr>
                        <th>Día</th>
                        <th>Horario</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lunes - Viernes</td>
                        <td className={styles.highlight}>08:30 - 18:00</td>
                      </tr>
                      <tr>
                        <td>Sábados</td>
                        <td className={styles.highlight}>09:00 - 13:00</td>
                      </tr>
                      <tr>
                        <td>Domingos</td>
                        <td>Cerrado</td>
                      </tr>
                      <tr>
                        <td>Feriados</td>
                        <td>Según calendario boliviano</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <MessageSquare size={24} />
                  </div>
                  <h3 className={styles.infoCardTitle}>Redes Sociales</h3>
                </div>
                <div className={styles.infoCardContent}>
                  <p>Síguenos en nuestras redes sociales para mantenerte actualizado:</p>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id='location' className={styles.mapSection}>
        <div className='container'>
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.mapHeader}>
              <h2 className={styles.mapTitle}>Nuestra Ubicación</h2>
              <p className={styles.mapSubtitle}>Calle 6 de Obrajes, La Paz, Bolivia</p>
            </div>

            <div className={styles.mapFrame}>
              {/* En una implementación real, aquí iría el iframe de Google Maps */}
              <div>
                <MapPin size={48} style={{ marginBottom: '16px', color: 'var(--color-primary)' }} />
                <p>Mapa interactivo de Google Maps</p>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>
                  Coordenadas: -16.4897, -68.1193
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackgroundContainer}>
          <OptimizedImage
            src='/images/office-life/workplace-discussion.jpg'
            alt='Equipo discutiendo proyectos en oficina moderna'
            className={styles.ctaBackgroundImage}
            overlay={true}
            overlayOpacity={0.7}
          />
        </div>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>¿Prefieres una Llamada Directa?</h2>
            <p className={styles.ctaDescription}>
              Estamos disponibles para conversar sobre tu proyecto. Llámanos directamente y obtén
              una respuesta inmediata.
            </p>
            <div className={styles.ctaActions}>
              <Button
                as='anchor'
                href='tel:+59177123456'
                size='large'
                variant='secondary'
                icon={<Phone size={20} />}
              >
                Llamar Ahora
              </Button>
              <Button
                as='anchor'
                href='https://wa.me/59177123456'
                size='large'
                variant='outline'
                icon={<MessageSquare size={20} />}
                target='_blank'
              >
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
