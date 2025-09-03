import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Clock,
  Code,
  Database,
  Smartphone,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { Button } from '../../components/UI/Button';
import { SEO } from '../../components/UI/SEO';
import { OptimizedImage } from '../../components/UI/OptimizedImage';
import type { SuccessCase, Certification } from '../../types';
import styles from './WhyChooseUs.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const experienceData = [
  {
    number: '8+',
    title: 'Años de Experiencia',
    description: 'Desde 2016 desarrollando software de calidad en La Paz, Bolivia.',
    icon: <Clock size={40} />,
  },
  {
    number: '50+',
    title: 'Proyectos Completados',
    description: 'Soluciones exitosas para empresas de todos los tamaños en Bolivia.',
    icon: <CheckCircle size={40} />,
  },
  {
    number: '25+',
    title: 'Clientes Satisfechos',
    description: 'Organizaciones que confían en nosotros para su transformación digital.',
    icon: <Users size={40} />,
  },
  {
    number: '99%',
    title: 'Tasa de Satisfacción',
    description: 'Nuestros clientes recomiendan nuestros servicios constantemente.',
    icon: <Award size={40} />,
  },
];

const methodologySteps = [
  {
    number: '1',
    title: 'Análisis y Planificación',
    description:
      'Estudiamos tus necesidades específicas y el contexto empresarial boliviano para diseñar la solución perfecta.',
  },
  {
    number: '2',
    title: 'Diseño y Prototipado',
    description:
      'Creamos prototipos interactivos y diseños centrados en la experiencia del usuario local.',
  },
  {
    number: '3',
    title: 'Desarrollo Ágil',
    description:
      'Implementamos usando metodologías ágiles con entregas incrementales y feedback continuo.',
  },
  {
    number: '4',
    title: 'Testing y QA',
    description: 'Rigurosas pruebas de calidad para garantizar un software robusto y confiable.',
  },
  {
    number: '5',
    title: 'Deployment y Go-Live',
    description: 'Implementación cuidadosa en producción con monitoreo y soporte inmediato.',
  },
  {
    number: '6',
    title: 'Mantenimiento y Evolución',
    description: 'Soporte continuo y evolución del software según las necesidades cambiantes.',
  },
];

const technologiesData = [
  {
    title: 'Frontend',
    icon: <Globe size={20} />,
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Vue.js',
      'Angular',
      'Tailwind CSS',
      'Material-UI',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    icon: <Database size={20} />,
    technologies: [
      'Node.js',
      'Python',
      'Java',
      'C#',
      '.NET',
      'PHP',
      'Express.js',
      'Django',
      'Spring Boot',
    ],
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={20} />,
    technologies: ['React Native', 'Flutter', 'Ionic', 'Swift', 'Kotlin', 'Xamarin'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <Shield size={20} />,
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
    ],
  },
  {
    title: 'Bases de Datos',
    icon: <Database size={20} />,
    technologies: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'SQLServer',
      'Oracle',
      'Elasticsearch',
    ],
  },
  {
    title: 'Herramientas',
    icon: <Code size={20} />,
    technologies: [
      'Git',
      'Jira',
      'Confluence',
      'Slack',
      'Figma',
      'Postman',
      'SonarQube',
      'New Relic',
    ],
  },
];

const successCases: SuccessCase[] = [
  {
    id: '1',
    title: 'Sistema de Gestión Empresarial',
    client: 'Empresa Textil La Paz S.A.',
    description:
      'Desarrollo de sistema ERP completo para gestión de inventarios, ventas y producción adaptado a la industria textil boliviana.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: [
      'Reducción del 40% en tiempo de procesamiento de pedidos',
      'Mejora del 60% en control de inventarios',
      'Automatización completa de reportes contables',
      'Integración con sistema tributario boliviano (SIN)',
    ],
  },
  {
    id: '2',
    title: 'Plataforma E-commerce',
    client: 'Comercializadora Paceña Ltda.',
    description:
      'Plataforma de comercio electrónico con sistema de pagos QR integrado y gestión logística para La Paz.',
    technologies: ['Next.js', 'Python', 'MongoDB', 'Stripe'],
    results: [
      'Incremento del 300% en ventas online',
      'Reducción del 50% en costos operativos',
      'Integración con sistemas de delivery local',
      'Dashboard ejecutivo en tiempo real',
    ],
  },
  {
    id: '3',
    title: 'App Móvil de Servicios',
    client: 'Cooperativa de Transporte El Alto',
    description:
      'Aplicación móvil para gestión de rutas, reservas y pagos digitales para transporte público.',
    technologies: ['React Native', 'Node.js', 'MySQL', 'Firebase'],
    results: [
      'Digitalización completa del sistema de rutas',
      'Mejora del 80% en experiencia del usuario',
      'Sistema de pagos sin efectivo implementado',
      '10,000+ usuarios activos en 6 meses',
    ],
  },
  {
    id: '4',
    title: 'Sistema de Gestión Hospitalaria',
    client: 'Clínica Bolivar La Paz',
    description:
      'Sistema integral para gestión de pacientes, historiales médicos y facturación hospitalaria.',
    technologies: ['Vue.js', 'Java', 'Oracle', 'Spring Boot'],
    results: [
      'Digitalización completa de historiales médicos',
      'Reducción del 70% en tiempo de atención',
      'Integración con seguros médicos bolivianos',
      'Cumplimiento normativo SEDES completo',
    ],
  },
];

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    id: '2',
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    year: '2023',
  },
  {
    id: '3',
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2022',
  },
  {
    id: '4',
    title: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    year: '2022',
  },
  {
    id: '5',
    title: 'ISO 27001 Information Security',
    issuer: 'ISO',
    year: '2024',
  },
  {
    id: '6',
    title: 'ITIL Foundation',
    issuer: 'AXELOS',
    year: '2021',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <>
      <SEO
        title='Por Qué Elegirnos - CorpsCode'
        description='Descubre por qué CorpsCode es la mejor opción en desarrollo de software en La Paz, Bolivia. 8+ años de experiencia, metodología ágil y tecnología de vanguardia.'
        keywords={[
          'por qué elegirnos CorpsCode',
          'experiencia desarrollo software Bolivia',
          'metodología ágil La Paz',
          'tecnologías desarrollo web',
          'casos de éxito Bolivia',
        ]}
        canonical='/why-choose-us'
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <OptimizedImage
            src='/images/hero/why-choose-us.jpg'
            alt='Equipo exitoso celebrando logros tecnológicos'
            className={styles.heroImage}
            priority={true}
            overlay={true}
            overlayOpacity={0.4}
          />
        </div>
        <div className={styles.heroBackground} />
        <div className='container'>
          <div className={styles.heroContent}>
            <motion.h1 className={styles.heroTitle} {...fadeInUp}>
              ¿Por Qué Elegirnos?
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              8 años de experiencia, 50+ proyectos exitosos y la confianza de las mejores empresas
              de La Paz nos respaldan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className={styles.section}>
        <div className='container'>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestra Experiencia</h2>
            <p className={styles.sectionSubtitle}>
              Números que hablan por sí solos y demuestran nuestro compromiso con la excelencia
              tecnológica en Bolivia.
            </p>
          </div>

          <motion.div
            className={styles.experienceGrid}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: false, margin: '-100px' }}
          >
            {experienceData.map((item, index) => (
              <motion.div key={index} className={styles.experienceCard} variants={fadeInUp}>
                <div className={styles.experienceIcon}>{item.icon}</div>
                <span className={styles.experienceNumber}>{item.number}</span>
                <h3 className={styles.experienceTitle}>{item.title}</h3>
                <p className={styles.experienceDescription}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id='methodology' className={`${styles.section} ${styles.methodologySection}`}>
        <div className={styles.methodologyImageBackground}>
          <OptimizedImage
            src='/images/process/agile-development.jpg'
            alt='Metodología de desarrollo ágil'
            className={styles.methodologyBackgroundImage}
            overlay={true}
            overlayOpacity={0.7}
          />
        </div>
        <div className='container'>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestra Metodología</h2>
            <p className={styles.sectionSubtitle}>
              Proceso estructurado y probado que garantiza el éxito de cada proyecto, adaptado al
              contexto empresarial boliviano.
            </p>
          </div>

          <div className={styles.methodologyContent}>
            <motion.div
              className={styles.methodologySteps}
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: false, margin: '-100px' }}
            >
              {methodologySteps.map((step, index) => (
                <motion.div key={index} className={styles.methodologyStep} variants={fadeInUp}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id='technologies' className={styles.section}>
        <div className='container'>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tecnologías que Manejamos</h2>
            <p className={styles.sectionSubtitle}>
              Stack tecnológico moderno y actualizado para crear soluciones robustas, escalables y
              de alto rendimiento.
            </p>
          </div>

          <motion.div
            className={styles.techGrid}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: false, margin: '-100px' }}
          >
            {technologiesData.map((category, index) => (
              <motion.div key={index} className={styles.techCategory} variants={fadeInUp}>
                <h3 className={styles.techCategoryTitle}>
                  <div className={styles.techCategoryIcon}>{category.icon}</div>
                  {category.title}
                </h3>
                <div className={styles.techList}>
                  {category.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id='success-cases' className={`${styles.section} ${styles.sectionAlternate}`}>
        <div className={styles.successCasesImageBackground}>
          <OptimizedImage
            src='/images/office-life/startup-vibes.jpg'
            alt='Casos de éxito en ambiente startup'
            className={styles.successCasesBackgroundImage}
            overlay={true}
            overlayOpacity={0.7}
          />
        </div>
        <div className='container'>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Casos de Éxito</h2>
            <p className={styles.sectionSubtitle}>
              Proyectos reales que transformaron organizaciones en La Paz y Bolivia, generando valor
              e impacto medible.
            </p>
          </div>

          <motion.div
            className={styles.casesGrid}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: false, margin: '-100px' }}
          >
            {successCases.map((case_) => (
              <motion.div key={case_.id} className={styles.caseCard} variants={fadeInUp}>
                <div className={styles.caseHeader}>
                  <h3 className={styles.caseClient}>{case_.client}</h3>
                  <p className={styles.caseTitle}>{case_.title}</p>
                </div>
                <div className={styles.caseContent}>
                  <p className={styles.caseDescription}>{case_.description}</p>

                  <div className={styles.caseTechnologies}>
                    <h4>Tecnologías Utilizadas</h4>
                    <div className={styles.techList}>
                      {case_.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techItem}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.caseResults}>
                    <h4>Resultados Obtenidos</h4>
                    <ul className={styles.resultsList}>
                      {case_.results.map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id='certifications' className={styles.section}>
        <div className='container'>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Certificaciones y Reconocimientos</h2>
            <p className={styles.sectionSubtitle}>
              Nuestro equipo mantiene certificaciones vigentes en las tecnologías más importantes de
              la industria.
            </p>
          </div>

          <motion.div
            className={styles.certificationsGrid}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: false, margin: '-100px' }}
          >
            {certifications.map((cert) => (
              <motion.div key={cert.id} className={styles.certificationCard} variants={fadeInUp}>
                <div className={styles.certificationIcon}>
                  <Award size={32} />
                </div>
                <h3 className={styles.certificationTitle}>{cert.title}</h3>
                <p className={styles.certificationIssuer}>{cert.issuer}</p>
                <p className={styles.certificationYear}>{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaImageBackground}>
          <OptimizedImage
            src='/images/backgrounds/office-building.jpg'
            alt='Edificio de oficinas moderno'
            className={styles.ctaBackgroundImage}
            overlay={true}
            overlayOpacity={0.6}
          />
        </div>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: '-100px' }}
          >
            <h2 className={styles.ctaTitle}>¿Listo para Transformar tu Organización?</h2>
            <p className={styles.ctaDescription}>
              Únete a las empresas líderes de La Paz que ya confían en CorpsCode para su
              transformación digital.
            </p>
            <div className={styles.ctaActions}>
              <Button
                as='link'
                to='/contact'
                size='large'
                variant='secondary'
                icon={<ArrowRight size={20} />}
                iconPosition='right'
              >
                Solicitar Cotización
              </Button>
              <Button
                as='anchor'
                href='tel:+59177123456'
                size='large'
                variant='outlineLight'
                icon={<Phone size={20} />}
              >
                Llamar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
