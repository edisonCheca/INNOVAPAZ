# React.FC en TypeScript: ¿Por qué es ideal?

## ¿Qué es React.FC?

`React.FC` (React Functional Component) es un tipo genérico de TypeScript que define la estructura de un componente funcional de React. Es parte de los tipos oficiales de React para TypeScript.

## Ventajas de usar React.FC

### 1. **Tipado automático de props**

```tsx
interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      Hola {name}, tienes {age} años
    </div>
  );
};
```

### 2. **Incluye children automáticamente**

```tsx
const Container: React.FC = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Uso
<Container>
  <p>Este contenido será children</p>
</Container>;
```

### 3. **Propiedades del componente incluidas**

React.FC incluye automáticamente:

- `displayName`: Para debugging
- `defaultProps`: Props por defecto
- `propTypes`: Validación de props (aunque es menos común en TS)

```tsx
const Button: React.FC<{ label: string }> = ({ label }) => {
  return <button>{label}</button>;
};

Button.displayName = 'CustomButton';
```

### 4. **Mejor IntelliSense y autocompletado**

El IDE puede proporcionar mejor autocompletado y detección de errores.

## Comparación de enfoques

### ❌ Sin tipado explícito

```tsx
const BadComponent = ({ name }) => {
  // No hay tipado, propenso a errores
  return <div>{name}</div>;
};
```

### ⚠️ Tipado manual

```tsx
interface Props {
  name: string;
}

const ManualComponent = ({ name }: Props): JSX.Element => {
  // Funciona, pero más verboso
  return <div>{name}</div>;
};
```

### ✅ Con React.FC (Recomendado)

```tsx
interface Props {
  name: string;
}

const GoodComponent: React.FC<Props> = ({ name }) => {
  // Limpio, tipado y con todas las ventajas
  return <div>{name}</div>;
};
```

## Ejemplo práctico del proyecto INNOVAPAZ

```tsx
import React from 'react';

// Definimos las props del componente
interface HomePageProps {
  title?: string;
  subtitle?: string;
  showFeatures?: boolean;
}

// Usamos React.FC con las props tipadas
const HomePage: React.FC<HomePageProps> = ({
  title = 'Bienvenido a INNOVAPAZ',
  subtitle = 'Tu plataforma de innovación y paz',
  showFeatures = true,
}) => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>

      {showFeatures && (
        <section className="features-section">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Innovación</h3>
              <p>Soluciones tecnológicas de vanguardia</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// Configuramos propiedades del componente
HomePage.displayName = 'HomePage';

export default HomePage;
```

## Casos de uso específicos

### 1. **Componentes sin props**

```tsx
const Header: React.FC = () => {
  return <header>Mi Header</header>;
};
```

### 2. **Componentes con children y props**

```tsx
interface LayoutProps {
  theme: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ theme, children }) => {
  return <div className={`layout layout--${theme}`}>{children}</div>;
};
```

### 3. **Componentes con eventos**

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
```

## ¿Cuándo NO usar React.FC?

### 1. **Cuando no necesitas children**

Algunos desarrolladores prefieren ser más explícitos:

```tsx
interface Props {
  name: string;
}

// Más explícito sobre qué devuelve
const Component = ({ name }: Props): JSX.Element => {
  return <div>{name}</div>;
};
```

### 2. **Componentes muy simples**

```tsx
// Para componentes muy básicos, puede ser overkill
const SimpleDiv = () => <div>Simple</div>;
```

## Mejores prácticas en INNOVAPAZ

1. **Usar React.FC para todos los componentes de páginas**
2. **Definir interfaces claras para las props**
3. **Usar props opcionales con valores por defecto**
4. **Configurar displayName para mejor debugging**
5. **Aprovechar el children automático cuando sea necesario**

## Conclusión

`React.FC` es ideal para TypeScript porque:

- ✅ Proporciona tipado robusto
- ✅ Incluye todas las propiedades de componente
- ✅ Mejora la experiencia de desarrollo
- ✅ Facilita el mantenimiento del código
- ✅ Es el estándar recomendado por la comunidad

En el proyecto INNOVAPAZ, usaremos `React.FC` para mantener consistencia y aprovechar todas las ventajas del tipado estático de TypeScript.
