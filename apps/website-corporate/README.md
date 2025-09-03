# CorpsCode - Sitio Web Corporativo

Sitio web profesional y completo para CorpsCode, empresa líder en desarrollo de
software en La Paz, Bolivia. Desarrollado con React, TypeScript y siguiendo las
mejores prácticas de desarrollo moderno.

## 🚀 Características

### Tecnológicas

- **React 19** con TypeScript para type safety
- **React Router** para navegación SPA
- **Framer Motion** para animaciones fluidas
- **Vite** como build tool para desarrollo rápido
- **CSS Modules** para estilos con scope por componente
- **React Helmet Async** para SEO optimizado
- **Lucide React** para iconografía moderna

### Funcionales

- ✅ **Navegación completa** con menús desplegables y scroll suave
- ✅ **Responsive design** optimizado para mobile, tablet y desktop
- ✅ **SEO optimizado** para La Paz, Bolivia
- ✅ **Animaciones** suaves y profesionales
- ✅ **Error boundaries** para manejo robusto de errores
- ✅ **Loading states** y lazy loading de páginas
- ✅ **Accesibilidad** con ARIA labels y focus management

## 📁 Arquitectura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout/
│   │   ├── Header/     # Header con CSS Module propio
│   │   ├── Footer/     # Footer con CSS Module propio
│   │   └── index.tsx   # Layout principal
│   ├── UI/             # Componentes UI base
│   │   ├── Button.tsx  # Botón versátil con múltiples variantes
│   │   └── SEO.tsx     # Componente SEO con metadatos
│   └── ErrorBoundary/  # Manejo de errores
├── pages/              # Páginas principales
│   ├── Home/           # Página inicio con CSS Module
│   ├── WhyChooseUs/    # Por qué elegirnos (en construcción)
│   ├── Services/       # Servicios (en construcción)
│   └── Contact/        # Contacto (en construcción)
├── hooks/              # Custom hooks
│   ├── useScrollTo.ts  # Scroll suave a elementos
│   ├── useOutsideClick.ts # Cerrar dropdowns al hacer clic fuera
│   └── useFormValidation.ts # Validación de formularios
├── styles/             # Estilos globales
│   ├── reset.css       # Reset CSS
│   └── variables.css   # Variables CSS y utilidades
├── types/              # Definiciones TypeScript
│   └── index.ts        # Tipos para navegación, formularios, etc.
└── utils/              # Utilidades (futuro)
```

## 🎨 Sistema de Estilos

### CSS por Componente

Cada componente tiene su propio archivo CSS Module en la misma carpeta:

```
components/Layout/Header/
├── index.tsx           # Componente React
└── Header.module.css   # Estilos específicos del Header
```

### Paleta de Colores

- **Primario**: `#0EA5E9` (azul cielo tech)
- **Secundario**: `#1E293B` (gris azulado profundo)
- **Acento**: `#22D3EE` (cyan brillante)
- **Neutros**: `#0B1220`, `#94A3B8`, `#F1F5F9`, `#FFFFFF`

### Variables CSS

Todas las variables están centralizadas en `src/styles/variables.css`:

```css
--color-primary: #0ea5e9;
--font-size-lg: 1.125rem;
--spacing-xl: 2rem;
--border-radius-lg: 0.75rem;
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

### Componentes Responsive

Cada componente maneja su propia responsividad usando media queries en su CSS
Module.

## 🌐 Localización Bolivia

### Contenido Localizado

- Toda la información específica de **La Paz, Bolivia**
- Teléfonos con formato **+591**
- Horarios en zona horaria **América/La_Paz (UTC-4)**
- Dirección: Calle 6 de Obrajes, La Paz, Bolivia
- Coordenadas: `-16.4897, -68.1193`

### SEO Local

- Metadatos optimizados para búsquedas en Bolivia
- Structured data con información local
- Geolocalización en metadatos

## 🚀 Desarrollo

### Requisitos Previos

- Node.js 18+
- pnpm (package manager recomendado)

### Instalación

```bash
# Clonar repositorio
cd apps/website-corporate

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev
```

### Scripts Disponibles

```bash
pnpm run dev          # Servidor de desarrollo (http://localhost:5173)
pnpm run build        # Build de producción
pnpm run preview      # Preview del build
pnpm run type-check   # Verificación TypeScript
pnpm run lint         # Linting con ESLint
```

## 🏗️ Estado de Desarrollo

### ✅ Completado

- [x] Estructura base del proyecto
- [x] Sistema de navegación con React Router
- [x] Header responsive con menús desplegables
- [x] Footer completo con información de La Paz
- [x] Página Home completa con todas las secciones
- [x] SEO optimizado para Bolivia
- [x] Sistema de estilos con CSS Modules
- [x] Animaciones con Framer Motion
- [x] Error boundaries y manejo de errores
- [x] TypeScript setup completo

### 🚧 En Desarrollo

- [ ] Página "Por Qué Elegirnos" completa
- [ ] Página "Nuestros Servicios" completa
- [ ] Página "Contacto" con formulario funcional
- [ ] Componentes adicionales de UI
- [ ] Tests automatizados
- [ ] Optimizaciones de performance

## 📋 Páginas del Sitio

### 1. Inicio (Conozca la Empresa) ✅

- **Hero section** con call-to-actions
- **Quiénes somos** - Presentación de la empresa
- **Historia** - Timeline de crecimiento
- **Misión y Visión** - Principios y objetivos
- **Equipo directivo** - Líderes de CorpsCode

### 2. Por Qué Elegirnos 🚧

- Experiencia y trayectoria
- Metodología de trabajo
- Tecnologías que manejamos
- Casos de éxito en La Paz
- Certificaciones

### 3. Nuestros Servicios 🚧

- Desarrollo de software personalizado
- Consultoría tecnológica
- **Sistema ERP InnovaPaz** (destacado)
- Mantenimiento y soporte
- Transformación digital

### 4. Contacto 🚧

- Formulario de contacto validado
- Información de contacto
- Mapa de ubicación (La Paz)
- Horarios de atención
- Redes sociales

## 🎯 Decisiones de Arquitectura

### CSS Modules vs Styled Components

**Elegimos CSS Modules** porque:

- Mejor performance en build time
- IntelliSense nativo para clases CSS
- Facilita la migración de CSS existente
- Scoping automático sin JavaScript runtime

### Custom Hooks

- `useScrollTo`: Navegación suave entre secciones
- `useOutsideClick`: Cerrar modales/dropdowns
- `useFormValidation`: Validación de formularios con estados

### Error Handling

- **Error Boundaries** para capturar errores de renderizado
- **Loading states** para mejor UX
- **Fallback UI** informativos y útiles

## 🔧 Personalización

### Cambiar Colores

Edita las variables en `src/styles/variables.css`:

```css
:root {
  --color-primary: #TU-COLOR;
  --color-secondary: #TU-COLOR;
}
```

### Agregar Nuevos Componentes

1. Crear carpeta en `src/components/`
2. Crear `index.tsx` y `Componente.module.css`
3. Usar variables CSS para consistencia

### Modificar Navegación

Edita el array `navigationItems` en `src/components/Layout/Header/index.tsx`

## 📈 Performance

### Optimizaciones Implementadas

- **Lazy loading** de páginas con `React.lazy()`
- **CSS Modules** para CSS tree-shaking automático
- **Framer Motion** optimizado para 60fps
- **Modern build** con Vite para bundles optimizados

### Métricas Objetivo

- First Contentful Paint < 2s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

## 📞 Soporte

Para consultas sobre el desarrollo:

- **Empresa**: CorpsCode
- **Ubicación**: Calle 6 de Obrajes, La Paz, Bolivia
- **Email**: contacto@corpscode.bo
- **Teléfono**: +591 77123456

---

**CorpsCode** - Transformamos ideas en soluciones tecnológicas 🚀 La Paz,
Bolivia 🇧🇴
