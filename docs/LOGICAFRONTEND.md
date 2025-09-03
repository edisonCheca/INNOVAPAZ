# Lógica de Frontend - Arquitectura Monorepo en INNOVAPAZ

## Arquitectura General de Frontend

La estrategia de frontend en INNOVAPAZ se basa en un **monorepo** que alberga múltiples aplicaciones React independientes dentro de la carpeta `apps/`. Cada aplicación tiene un propósito claro y un dominio de responsabilidad bien definido.

Esta arquitectura reemplaza el enfoque anterior de un único frontend, permitiendo mayor flexibilidad, escalabilidad y una clara separación de preocupaciones.

```
innovapaz-monorepo/
└── apps/
    ├── website-corporate/      # Web institucional de la empresa
    ├── website-erp-marketing/  # Web de marketing del producto ERP
    └── app-erp/                # La aplicación ERP para clientes
```

## Regla Fundamental de Comunicación

**Los frontends NO se comunican entre sí.** La única fuente de verdad y el único punto de comunicación para todas las aplicaciones es la **API central del backend**. Esto garantiza el desacoplamiento y la autonomía de cada aplicación.

```
[ website-corporate ] ----> [ API Backend ]
[ website-erp-marketing ] -> [ API Backend ]
[ app-erp ] --------------> [ API Backend ]
```

## Responsabilidades de Cada Aplicación

### 1. `apps/website-corporate`

- **Propósito**: Servir como la página web institucional de INNOVAPAZ. Su objetivo es comunicar la misión, visión, valores y ser el punto de contacto corporativo.
- **Audiencia**: Inversores, socios potenciales, medios de comunicación y público general.
- **Conexión con Backend**: **Mínima y aislada**. Puede consumir endpoints públicos para, por ejemplo, enviar un formulario de contacto o mostrar noticias de un blog. No requiere autenticación.

### 2. `apps/website-erp-marketing`

- **Propósito**: Funcionar como la página de marketing y ventas del producto ERP. Su misión es atraer y convertir clientes potenciales, mostrando las características, beneficios y planes de precios del software. Este proyecto es la evolución del antiguo frontend único.
- **Audiencia**: Clientes potenciales que evalúan el producto ERP.
- **Conexión con Backend**: **Casi nula**. Su contenido es mayormente estático. Los botones de "Login" o "Registrarse" no manejan lógica de autenticación; son simples enlaces (`<a>`) que redirigen al usuario a la aplicación `app-erp`.

### 3. `apps/app-erp`

- **Propósito**: Es el **software ERP real**. Una aplicación privada y segura a la que solo pueden acceder los clientes autenticados. Aquí es donde se ejecutan todas las operaciones del negocio: gestión de usuarios, finanzas, inventario, etc.
- **Audiencia**: Clientes existentes que han iniciado sesión.
- **Conexión con Backend**: **Total y constante**. Es el consumidor principal de la API del backend. Todas las vistas, acciones y datos dentro de esta aplicación dependen de una comunicación continua y segura con la API.

## Estructura Interna de Cada Aplicación

Aunque cada aplicación es independiente, todas siguen una estructura de carpetas y convenciones similares para mantener la consistencia en todo el monorepo. La estructura detallada (con `components`, `hooks`, `services`, etc.) que se describía anteriormente ahora se aplica **dentro de cada uno de estos proyectos**.

```
apps/app-erp/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── types/
│   ├── assets/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── ...
```

## Ventajas de esta Arquitectura

- **Despliegue Independiente**: Cada frontend puede ser desplegado, actualizado o revertido sin afectar a los demás.
- **Equipos Enfocados**: Diferentes equipos pueden trabajar en diferentes aplicaciones sin interferencias. El equipo de marketing en `website-erp-marketing` y el equipo de producto en `app-erp`.
- **Optimización de Carga**: Los usuarios de la web pública no necesitan descargar el pesado código de la aplicación ERP, mejorando los tiempos de carga y la experiencia.
- **Seguridad Mejorada**: La lógica y el código de la aplicación principal (`app-erp`) están completamente aislados de las páginas públicas.
  );
  };

export default HomePage;

````

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
````

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
