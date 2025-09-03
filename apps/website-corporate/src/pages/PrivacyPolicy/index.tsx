import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/UI/SEO';
import styles from './PrivacyPolicy.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title='Política de Privacidad - CorpsCode'
        description='Política de privacidad de CorpsCode. Conoce cómo protegemos y manejamos tu información personal en nuestros servicios de desarrollo de software en La Paz, Bolivia.'
        canonical='/privacy-policy'
        keywords={[
          'política privacidad CorpsCode',
          'protección datos Bolivia',
          'privacidad CorpsCode',
          'manejo información personal',
        ]}
      />

      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.heroContent}>
            <motion.h1 className={styles.heroTitle} {...fadeInUp}>
              Política de Privacidad
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              En CorpsCode valoramos y protegemos tu privacidad. Esta política describe cómo
              recolectamos, usamos y protegemos tu información personal.
            </motion.p>
            <motion.p
              className={styles.lastUpdated}
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Última actualización: Enero 2024
            </motion.p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className='container'>
          <div className={styles.contentWrapper}>
            <motion.div {...fadeInUp} transition={{ delay: 0.3, duration: 0.6 }}>
              <h2>1. Información que Recolectamos</h2>

              <h3>Información Personal</h3>
              <p>Recolectamos información que nos proporcionas directamente cuando:</p>
              <ul>
                <li>Completas formularios de contacto en nuestro sitio web</li>
                <li>Solicitas información sobre nuestros servicios</li>
                <li>Te comunicas con nosotros por teléfono o correo electrónico</li>
                <li>Contratas nuestros servicios de desarrollo de software</li>
              </ul>

              <h3>Información Técnica</h3>
              <p>
                También recolectamos automáticamente cierta información cuando visitas nuestro
                sitio:
              </p>
              <ul>
                <li>Dirección IP y ubicación geográfica general</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Fuente de referencia (cómo llegaste a nuestro sitio)</li>
              </ul>

              <h2>2. Cómo Utilizamos tu Información</h2>

              <p>Utilizamos la información recolectada para:</p>
              <ul>
                <li>
                  <strong>Responder a consultas:</strong> Contactarte y proporcionarte información
                  sobre nuestros servicios
                </li>
                <li>
                  <strong>Desarrollo de proyectos:</strong> Ejecutar y gestionar proyectos de
                  software contratados
                </li>
                <li>
                  <strong>Comunicación comercial:</strong> Enviarte información relevante sobre
                  servicios y actualizaciones
                </li>
                <li>
                  <strong>Mejora de servicios:</strong> Analizar el uso de nuestro sitio para
                  mejorar la experiencia
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales en Bolivia
                </li>
              </ul>

              <h2>3. Compartir Información</h2>

              <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto
                en las siguientes circunstancias:
              </p>
              <ul>
                <li>
                  <strong>Con tu consentimiento:</strong> Cuando nos autorizas explícitamente
                </li>
                <li>
                  <strong>Proveedores de servicios:</strong> Terceros que nos ayudan a operar
                  nuestro negocio (hosting, herramientas de comunicación)
                </li>
                <li>
                  <strong>Requerimientos legales:</strong> Cuando sea requerido por autoridades
                  competentes en Bolivia
                </li>
                <li>
                  <strong>Protección de derechos:</strong> Para proteger nuestros derechos legales o
                  los de terceros
                </li>
              </ul>

              <h2>4. Seguridad de la Información</h2>

              <p>
                Implementamos medidas de seguridad técnicas y administrativas para proteger tu
                información:
              </p>
              <ul>
                <li>Encriptación de datos sensibles en transmisión y almacenamiento</li>
                <li>Acceso restringido a información personal solo a personal autorizado</li>
                <li>Monitoreo regular de nuestros sistemas de seguridad</li>
                <li>Cumplimiento de mejores prácticas de seguridad informática</li>
              </ul>

              <h2>5. Retención de Datos</h2>

              <p>Conservamos tu información personal durante el tiempo necesario para:</p>
              <ul>
                <li>Cumplir con los propósitos para los que fue recolectada</li>
                <li>Satisfacer requisitos legales, contables o de reporte</li>
                <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
              </ul>

              <p>
                Los datos de contacto se mantienen durante 5 años después del último contacto, a
                menos que solicites su eliminación.
              </p>

              <h2>6. Tus Derechos</h2>

              <p>
                Bajo las leyes bolivianas y mejores prácticas internacionales, tienes derecho a:
              </p>
              <ul>
                <li>
                  <strong>Acceso:</strong> Conocer qué información personal tenemos sobre ti
                </li>
                <li>
                  <strong>Rectificación:</strong> Corregir información inexacta o incompleta
                </li>
                <li>
                  <strong>Eliminación:</strong> Solicitar la eliminación de tu información personal
                </li>
                <li>
                  <strong>Portabilidad:</strong> Recibir tu información en un formato estructurado
                </li>
                <li>
                  <strong>Objeción:</strong> Oponerte al procesamiento de tu información para
                  ciertos propósitos
                </li>
              </ul>

              <p>
                Para ejercer estos derechos, contáctanos en{' '}
                <a href='mailto:privacidad@corpscode.bo'>privacidad@corpscode.bo</a>.
              </p>

              <h2>7. Cookies y Tecnologías Similares</h2>

              <p>
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu
                experiencia:
              </p>
              <ul>
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del
                  sitio
                </li>
                <li>
                  <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los visitantes
                  usan el sitio
                </li>
                <li>
                  <strong>Cookies de preferencias:</strong> Recuerdan tus configuraciones y
                  preferencias
                </li>
              </ul>

              <p>Puedes controlar las cookies a través de la configuración de tu navegador.</p>

              <h2>8. Transferencias Internacionales</h2>

              <p>
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Bolivia.
                Cuando transferimos información internacional, nos aseguramos de que se mantengan
                niveles adecuados de protección de datos.
              </p>

              <h2>9. Menores de Edad</h2>

              <p>
                Nuestros servicios están dirigidos a empresas y profesionales. No recolectamos
                intencionalmente información personal de menores de 18 años.
              </p>

              <h2>10. Cambios a esta Política</h2>

              <p>
                Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios
                significativos a través de nuestro sitio web o por correo electrónico. La fecha de
                la última actualización se muestra al inicio de esta política.
              </p>

              <h2>11. Legislación Aplicable</h2>

              <p>
                Esta política se rige por las leyes de Bolivia. Cualquier disputa será resuelta en
                los tribunales competentes de La Paz, Bolivia.
              </p>

              <h2>12. Contacto</h2>

              <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos:</p>

              <div className={styles.contactBox}>
                <h4>Datos de Contacto para Privacidad</h4>
                <p>
                  <strong>Email:</strong> privacidad@corpscode.bo
                </p>
                <p>
                  <strong>Teléfono:</strong> +591 77123456
                </p>
                <p>
                  <strong>Dirección:</strong> Calle 6 de Obrajes, La Paz, Bolivia
                </p>
                <p>
                  <strong>Horario de atención:</strong> Lunes a Viernes, 08:30 - 18:00 (UTC-4)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
