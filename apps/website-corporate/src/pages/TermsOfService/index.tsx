import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/UI/SEO';
import styles from './TermsOfService.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const TermsOfService: React.FC = () => {
  return (
    <>
      <SEO
        title='Términos de Servicio - CorpsCode'
        description='Términos de servicio de CorpsCode para servicios de desarrollo de software en La Paz, Bolivia. Conoce nuestras condiciones comerciales y legales.'
        canonical='/terms-of-service'
        keywords={[
          'términos servicio CorpsCode',
          'condiciones comerciales Bolivia',
          'términos desarrollo software',
          'condiciones legales CorpsCode',
        ]}
      />

      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.heroContent}>
            <motion.h1 className={styles.heroTitle} {...fadeInUp}>
              Términos de Servicio
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Estos términos rigen el uso de nuestros servicios de desarrollo de software y
              consultoría tecnológica. Al contratar nuestros servicios, aceptas estos términos.
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
              <h2>1. Información de la Empresa</h2>

              <p>
                CorpsCode es una empresa de desarrollo de software constituida bajo las leyes de
                Bolivia, con domicilio legal en Calle 6 de Obrajes, La Paz, Bolivia.
              </p>

              <h2>2. Definiciones</h2>

              <ul>
                <li>
                  <strong>"CorpsCode", "nosotros", "nuestro":</strong> Se refiere a CorpsCode
                </li>
                <li>
                  <strong>"Cliente", "usted", "su":</strong> Se refiere a la persona o entidad que
                  contrata nuestros servicios
                </li>
                <li>
                  <strong>"Servicios":</strong> Desarrollo de software, consultoría tecnológica,
                  mantenimiento y soporte
                </li>
                <li>
                  <strong>"Producto":</strong> Software, aplicaciones, sistemas desarrollados por
                  CorpsCode
                </li>
                <li>
                  <strong>"Contrato":</strong> Acuerdo específico para la prestación de servicios
                </li>
              </ul>

              <h2>3. Servicios Ofrecidos</h2>

              <h3>Desarrollo de Software</h3>
              <ul>
                <li>Desarrollo de aplicaciones web y móviles personalizadas</li>
                <li>Integración de sistemas empresariales</li>
                <li>Consultoría en arquitectura de software</li>
                <li>Migración y modernización de sistemas legacy</li>
              </ul>

              <h3>Sistema ERP InnovaPaz</h3>
              <ul>
                <li>Licenciamiento del sistema ERP InnovaPaz</li>
                <li>Implementación y configuración</li>
                <li>Capacitación y soporte técnico</li>
                <li>Mantenimiento y actualizaciones</li>
              </ul>

              <h3>Consultoría Tecnológica</h3>
              <ul>
                <li>Análisis y evaluación de necesidades tecnológicas</li>
                <li>Estrategias de transformación digital</li>
                <li>Auditorías de seguridad informática</li>
                <li>Capacitación técnica especializada</li>
              </ul>

              <h2>4. Condiciones de Contratación</h2>

              <h3>Proceso de Contratación</h3>
              <p>La contratación de servicios se formaliza mediante:</p>
              <ul>
                <li>Propuesta técnica y comercial detallada</li>
                <li>Contrato específico firmado por ambas partes</li>
                <li>Pago inicial según términos acordados</li>
                <li>Inicio formal del proyecto</li>
              </ul>

              <h3>Modificaciones al Alcance</h3>
              <p>Cualquier modificación al alcance del proyecto debe ser:</p>
              <ul>
                <li>Solicitada por escrito por el cliente</li>
                <li>Evaluada técnica y comercialmente por CorpsCode</li>
                <li>Aprobada mediante adenda al contrato original</li>
                <li>Reflejada en cronograma y presupuesto actualizado</li>
              </ul>

              <h2>5. Obligaciones del Cliente</h2>

              <ul>
                <li>
                  <strong>Información necesaria:</strong> Proporcionar información completa y
                  precisa para el desarrollo
                </li>
                <li>
                  <strong>Colaboración:</strong> Participar activamente en reuniones y revisiones
                  del proyecto
                </li>
                <li>
                  <strong>Feedback oportuno:</strong> Revisar y aprobar entregables en los plazos
                  establecidos
                </li>
                <li>
                  <strong>Pago puntual:</strong> Cumplir con el cronograma de pagos acordado
                </li>
                <li>
                  <strong>Acceso a sistemas:</strong> Proporcionar accesos necesarios cuando sea
                  requerido
                </li>
              </ul>

              <h2>6. Obligaciones de CorpsCode</h2>

              <ul>
                <li>
                  <strong>Calidad del servicio:</strong> Entregar servicios de alta calidad según
                  estándares profesionales
                </li>
                <li>
                  <strong>Plazos:</strong> Cumplir con cronogramas establecidos, salvo
                  circunstancias imprevistas
                </li>
                <li>
                  <strong>Confidencialidad:</strong> Mantener la confidencialidad de información del
                  cliente
                </li>
                <li>
                  <strong>Soporte:</strong> Proporcionar documentación y soporte según lo acordado
                </li>
                <li>
                  <strong>Comunicación:</strong> Mantener comunicación regular sobre el progreso del
                  proyecto
                </li>
              </ul>

              <h2>7. Condiciones de Pago</h2>

              <h3>Forma de Pago</h3>
              <p>Los pagos pueden realizarse mediante:</p>
              <ul>
                <li>Transferencia bancaria a cuentas en bancos bolivianos</li>
                <li>Depósito bancario directo</li>
                <li>Otros métodos acordados según el proyecto</li>
              </ul>

              <h3>Cronograma de Pagos</h3>
              <ul>
                <li>Pago inicial del 40% al firmar el contrato</li>
                <li>Pagos parciales según hitos del proyecto (típicamente 30% y 20%)</li>
                <li>Pago final del 10% al momento de entrega y aceptación</li>
              </ul>

              <h3>Mora en Pagos</h3>
              <p>El retraso en pagos podrá resultar en:</p>
              <ul>
                <li>Suspensión temporal del proyecto</li>
                <li>Intereses moratorios según legislación boliviana</li>
                <li>Terminación del contrato en casos graves</li>
              </ul>

              <h2>8. Propiedad Intelectual</h2>

              <h3>Software Desarrollado a Medida</h3>
              <p>Para software desarrollado específicamente para el cliente:</p>
              <ul>
                <li>El cliente obtiene licencia perpetua de uso</li>
                <li>CorpsCode retiene derechos sobre metodologías y frameworks propios</li>
                <li>Código fuente se entrega según términos específicos del contrato</li>
              </ul>

              <h3>Sistema ERP InnovaPaz</h3>
              <p>Para el sistema InnovaPaz:</p>
              <ul>
                <li>CorpsCode retiene todos los derechos de propiedad intelectual</li>
                <li>Cliente obtiene licencia de uso según términos específicos</li>
                <li>Personalizaciones del cliente pueden tener términos especiales</li>
              </ul>

              <h2>9. Garantías y Limitaciones</h2>

              <h3>Garantías</h3>
              <ul>
                <li>Garantizamos que el software funcionará según especificaciones acordadas</li>
                <li>Período de garantía de 90 días para corrección de errores sin costo</li>
                <li>Garantía extendida disponible mediante contratos de soporte</li>
              </ul>

              <h3>Limitaciones</h3>
              <ul>
                <li>No garantizamos funcionamiento en entornos no especificados</li>
                <li>No somos responsables por modificaciones realizadas por terceros</li>
                <li>Responsabilidad limitada al monto pagado por el servicio específico</li>
              </ul>

              <h2>10. Confidencialidad</h2>

              <p>CorpsCode se compromete a:</p>
              <ul>
                <li>Mantener la confidencialidad de toda información del cliente</li>
                <li>No divulgar información a terceros sin autorización</li>
                <li>Implementar medidas de seguridad apropiadas</li>
                <li>Capacitar al personal en prácticas de confidencialidad</li>
              </ul>

              <h2>11. Terminación del Contrato</h2>

              <h3>Terminación por Conveniencia</h3>
              <p>
                Cualquier parte puede terminar el contrato con 30 días de aviso previo por escrito.
              </p>

              <h3>Terminación por Incumplimiento</h3>
              <p>El contrato puede terminarse inmediatamente en caso de:</p>
              <ul>
                <li>Incumplimiento material de obligaciones</li>
                <li>Mora en pagos superior a 30 días</li>
                <li>Violación de términos de confidencialidad</li>
              </ul>

              <h2>12. Fuerza Mayor</h2>

              <p>
                No seremos responsables por retrasos o incumplimientos debido a circunstancias fuera
                de nuestro control, incluyendo pero no limitado a:
              </p>
              <ul>
                <li>Desastres naturales</li>
                <li>Conflictos sociales o políticos</li>
                <li>Fallas en servicios de terceros (internet, electricidad)</li>
                <li>Pandemias o emergencias de salud pública</li>
              </ul>

              <h2>13. Legislación Aplicable</h2>

              <p>
                Estos términos se rigen por las leyes de Bolivia. Cualquier disputa será resuelta
                preferentemente mediante negociación directa. En caso de no llegar a un acuerdo, la
                jurisdicción competente serán los tribunales de La Paz, Bolivia.
              </p>

              <h2>14. Modificaciones</h2>

              <p>
                CorpsCode se reserva el derecho de modificar estos términos. Los cambios entrarán en
                vigor para nuevos contratos. Para contratos existentes, las modificaciones
                requerirán acuerdo mutuo por escrito.
              </p>

              <h2>15. Contacto</h2>

              <p>Para consultas sobre estos términos, contáctanos:</p>

              <div className={styles.contactBox}>
                <h4>Información Legal y Comercial</h4>
                <p>
                  <strong>Email:</strong> legal@corpscode.bo
                </p>
                <p>
                  <strong>Teléfono:</strong> +591 77123456
                </p>
                <p>
                  <strong>Dirección:</strong> Calle 6 de Obrajes, La Paz, Bolivia
                </p>
                <p>
                  <strong>Horario comercial:</strong> Lunes a Viernes, 08:30 - 18:00 (UTC-4)
                </p>
              </div>

              <div className={styles.warningBox}>
                <h4>Importante</h4>
                <p>
                  Estos términos constituyen el acuerdo completo entre las partes para el uso
                  general de nuestros servicios. Cada proyecto específico tendrá un contrato
                  detallado que puede incluir términos adicionales o específicos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
