// Tipos para la navegación
export interface NavigationItem {
  name: string;
  href: string;
  sections?: NavigationSection[];
}

export interface NavigationSection {
  name: string;
  id: string;
}

// Tipos para el formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Tipos para servicios
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

// Tipos para casos de éxito
export interface SuccessCase {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  results: string[];
}

// Tipos para miembros del equipo
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  imageAlt: string; // Texto alternativo para la imagen
}

// Tipos para certificaciones
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
}

// Tipos para SEO
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
