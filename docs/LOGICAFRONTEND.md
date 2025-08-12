# Lógica de Frontend - INNOVAPAZ

## Estructura de Carpetas Frontend

Esta documentación explica la organización y lógica detrás de la estructura de carpetas del frontend en el proyecto INNOVAPAZ, construido con React + TypeScript + Vite.

## Arquitectura General

```
frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Componentes básicos (Button, Input, Modal)
│   │   ├── layout/         # Componentes de estructura (Header, Footer, Sidebar)
│   │   └── ui/             # Componentes de interfaz específicos
│   ├── pages/              # Páginas de la aplicación
│   │   ├── HomePage.tsx    # Página principal "/"
│   │   ├── AboutPage.tsx   # Página "Acerca de"
│   │   └── ContactPage.tsx # Página de contacto
│   ├── hooks/              # Custom hooks
│   │   ├── useAuth.ts      # Hook para autenticación
│   │   ├── useApi.ts       # Hook para llamadas API
│   │   └── useLocalStorage.ts # Hook para localStorage
│   ├── services/           # Servicios y API calls
│   │   ├── api/            # Configuración de API
│   │   ├── auth/           # Servicios de autenticación
│   │   └── utils/          # Utilidades generales
│   ├── context/            # React Context providers
│   │   ├── AuthContext.tsx # Contexto de autenticación
│   │   └── ThemeContext.tsx # Contexto de tema
│   ├── types/              # Definiciones de TypeScript
│   │   ├── api.ts          # Tipos para API responses
│   │   ├── auth.ts         # Tipos para autenticación
│   │   └── common.ts       # Tipos generales
│   ├── assets/             # Recursos estáticos
│   │   ├── images/         # Imágenes
│   │   ├── icons/          # Iconos SVG
│   │   └── styles/         # Estilos globales
│   ├── utils/              # Funciones utilitarias
│   │   ├── formatters.ts   # Funciones de formato
│   │   ├── validators.ts   # Validaciones
│   │   └── constants.ts    # Constantes de la app
│   ├── App.tsx             # Componente principal con rutas
│   └── main.tsx            # Punto de entrada de la aplicación
├── public/                 # Archivos públicos estáticos
└── dist/                   # Build de producción
```

## Lógica de Cada Carpeta

### 📄 `/pages`

**Propósito**: Contiene los componentes que representan páginas completas de la aplicación.

**Reglas**:

- Cada archivo representa una ruta específica
- Solo maneja la estructura general de la página
- Debe usar `React.FC` con TypeScript
- Importa y compone componentes más pequeños

```tsx
// Ejemplo: pages/HomePage.tsx
import React from 'react';
import Hero from '../components/layout/Hero';
import Features from '../components/ui/Features';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default HomePage;
```

### 🧩 `/components`

**Propósito**: Componentes reutilizables organizados por categoría.

#### `/components/common`

- Componentes básicos y genéricos
- Reutilizables en toda la aplicación
- Ejemplos: `Button`, `Input`, `Modal`, `Loader`

#### `/components/layout`

- Componentes de estructura de página
- Ejemplos: `Header`, `Footer`, `Sidebar`, `Navigation`

#### `/components/ui`

- Componentes específicos de interfaz
- Relacionados con funcionalidades específicas
- Ejemplos: `ProductCard`, `UserProfile`, `SearchBar`

```tsx
// Ejemplo: components/common/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button className={`btn btn--${variant} btn--${size}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
```

### 🎣 `/hooks`

**Propósito**: Custom hooks para lógica reutilizable.

**Reglas**:

- Nombrar con prefijo `use`
- Una responsabilidad por hook
- Exportar tanto el hook como sus tipos

```tsx
// Ejemplo: hooks/useApi.ts
interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useApi = <T>(url: string): ApiState<T> => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  // Lógica del hook...

  return state;
};
```

### 🔗 `/services`

**Propósito**: Lógica de negocio y comunicación externa.

#### `/services/api`

- Configuración base de API
- Interceptors y middleware
- Cliente HTTP (axios, fetch)

#### `/services/auth`

- Servicios de autenticación
- Manejo de tokens
- Login/logout logic

```tsx
// Ejemplo: services/api/client.ts
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### 🏠 `/context`

**Propósito**: Proveedores de contexto para estado global.

**Reglas**:

- Un contexto por responsabilidad
- Incluir tanto el Provider como el custom hook
- Tipado estricto con TypeScript

```tsx
// Ejemplo: context/AuthContext.tsx
interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### 🏷️ `/types`

**Propósito**: Definiciones de tipos TypeScript centralizadas.

**Organización**:

- `api.ts`: Tipos para responses de API
- `auth.ts`: Tipos relacionados con autenticación
- `common.ts`: Tipos generales y utilities

```tsx
// Ejemplo: types/api.ts
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

### 🎨 `/assets`

**Propósito**: Recursos estáticos organizados por tipo.

```
assets/
├── images/
│   ├── logos/              # Logos de la empresa
│   ├── heroes/             # Imágenes hero/banner
│   └── icons/              # Iconos raster
├── icons/                  # Iconos SVG
│   ├── social/             # Iconos de redes sociales
│   └── ui/                 # Iconos de interfaz
└── styles/
    ├── theme.css           # Variables CSS globales
    ├── reset.css           # Reset CSS
    └── components.css      # Estilos base de componentes
```

### ⚙️ `/utils`

**Propósito**: Funciones utilitarias puras.

**Características**:

- Funciones puras (sin side effects)
- Reutilizables en toda la aplicación
- Bien documentadas y testeadas

```tsx
// Ejemplo: utils/formatters.ts
export const formatCurrency = (amount: number, currency = 'COP'): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-CO').format(date);
};
```

## Flujo de Datos

```
User Interaction → Page → Components → Hooks/Services → API → Context → Re-render
```

1. **Usuario interactúa** con la interfaz
2. **Page components** manejan la estructura
3. **UI components** procesan la interacción
4. **Hooks/Services** manejan la lógica de negocio
5. **API calls** se realizan si es necesario
6. **Context** actualiza el estado global
7. **Re-render** refleja los cambios

## Convenciones de Nomenclatura

### Archivos y Carpetas

- **PascalCase** para componentes: `HomePage.tsx`, `UserCard.tsx`
- **camelCase** para hooks y utilities: `useAuth.ts`, `formatters.ts`
- **kebab-case** para carpetas: `user-profile/`, `auth-forms/`

### Imports

```tsx
// 1. React y librerías externas
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// 2. Componentes internos (orden alfabético)
import Button from '../components/common/Button';
import Header from '../components/layout/Header';

// 3. Hooks personalizados
import { useAuth } from '../hooks/useAuth';

// 4. Tipos
import type { User } from '../types/auth';

// 5. Estilos (al final)
import './HomePage.css';
```

## Mejores Prácticas

### 1. **Separación de Responsabilidades**

- Components → Solo UI y presentación
- Hooks → Lógica reutilizable
- Services → Comunicación externa
- Context → Estado global

### 2. **Composición sobre Herencia**

```tsx
// ✅ Bueno: Composición
<Card>
  <CardHeader title="Mi título" />
  <CardBody>Contenido</CardBody>
</Card>

// ❌ Evitar: Prop drilling excesivo
<Card title="Mi título" body="Contenido" showHeader showFooter />
```

### 3. **Tipado Estricto**

- Interfaces para props de componentes
- Tipos para responses de API
- Enums para valores constantes

### 4. **Lazy Loading**

```tsx
// Para páginas que no se usan inmediatamente
const AboutPage = lazy(() => import('./pages/AboutPage'));
```

## Escalabilidad

Esta estructura permite:

- ✅ **Fácil mantenimiento** con responsabilidades claras
- ✅ **Reutilización de componentes** entre páginas
- ✅ **Testing individual** de cada parte
- ✅ **Colaboración en equipo** sin conflictos
- ✅ **Adición de nuevas features** sin refactoring mayor

## Próximos Pasos

1. Implementar testing con `vitest` y `@testing-library/react`
2. Añadir Storybook para documentar componentes
3. Configurar ESLint rules específicas para la estructura
4. Implementar lazy loading para optimización
5. Añadir PWA capabilities
