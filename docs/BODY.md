# Proyecto Monolito Modular - React + Django

## 📋 Descripción General

Arquitectura **monolito modular** que organiza el código en módulos independientes pero cohesivos, combinando React.js como frontend y Django como backend en un solo repositorio.

## 🏗️ Estructura del Proyecto

```
mi-proyecto/
├── README.md
├── .gitignore
├── docker-compose.yml
├── requirements.txt
│
├── backend/                          # Django Backend
│   ├── manage.py
│   ├── requirements.txt
│   │
│   ├── project_settings/             # Configuración del proyecto
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   └── apps/                         # Módulos de aplicación
│       ├── __init__.py
│       │
│       ├── modulo1/                  # Ejemplo: autenticación
│       │   ├── __init__.py
│       │   ├── models.py
│       │   ├── views.py
│       │   ├── serializers.py
│       │   ├── urls.py
│       │   ├── apps.py
│       │   ├── admin.py
│       │   ├── migrations/
│       │   └── tests.py
│       │
│       ├── modulo2/                  # Ejemplo: empleados
│       │   ├── __init__.py
│       │   ├── models.py
│       │   ├── views.py
│       │   ├── serializers.py
│       │   ├── urls.py
│       │   ├── apps.py
│       │   ├── admin.py
│       │   ├── migrations/
│       │   └── tests.py
│       │
│       ├── modulo3/                  # Ejemplo: pagos
│       │   ├── __init__.py
│       │   ├── models.py
│       │   ├── views.py
│       │   ├── serializers.py
│       │   ├── urls.py
│       │   ├── apps.py
│       │   ├── admin.py
│       │   ├── migrations/
│       │   └── tests.py
│       │
│       └── core/                     # Funcionalidades compartidas
│           ├── __init__.py
│           ├── models.py
│           ├── utils.py
│           ├── permissions.py
│           ├── validators.py
│           └── middleware.py
│
└── frontend/                         # React Frontend
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    │
    ├── src/
    │   ├── index.js
    │   ├── App.js
    │   │
    │   ├── assets/                   # Recursos estáticos
    │   │   ├── images/
    │   │   ├── icons/
    │   │   └── styles/
    │   │
    │   ├── api/                      # Configuración de API
    │   │   ├── apiClient.js
    │   │   ├── endpoints.js
    │   │   └── interceptors.js
    │   │
    │   ├── configs/                  # Configuraciones
    │   │   ├── constants.js
    │   │   ├── routes.js
    │   │   └── environment.js
    │   │
    │   ├── components/               # Componentes globales
    │   │   ├── SignUpForm.tsx        # Formulario de registro
    │   │   ├── Employees.tsx         # Lista de empleados
    │   │   ├── PaymentForm.tsx       # Formulario de pagos
    │   │   ├── Button.tsx            # Componente botón reutilizable
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Layout.tsx
    │   │   └── LoadingSpinner.tsx
    │   │
    │   ├── hooks/                    # Custom hooks
    │   │   ├── useAuth.tsx           # Hook de autenticación
    │   │   ├── useEmployees.ts       # Hook para gestión de empleados
    │   │   ├── useUpdateEmployee.ts  # Hook para actualizar empleados
    │   │   ├── usePayment.ts         # Hook para gestión de pagos
    │   │   ├── useApi.ts
    │   │   └── useLocalStorage.ts
    │   │
    │   ├── lib/                      # Librerías y utilidades
    │   │   ├── axios.js
    │   │   ├── validation.js
    │   │   ├── formatters.js
    │   │   └── helpers.js
    │   │
    │   ├── services/                 # Servicios de API
    │   │   ├── authService.js
    │   │   ├── employeeService.js
    │   │   ├── paymentService.js
    │   │   └── userService.js
    │   │
    │   ├── states/                   # Gestión de estado global
    │   │   ├── authSlice.js
    │   │   ├── employeeSlice.js
    │   │   ├── paymentSlice.js
    │   │   ├── store.js
    │   │   └── index.js
    │   │
    │   └── utils/                    # Utilidades generales
    │       ├── constants.js
    │       ├── validators.js
    │       ├── formatters.js
    │       └── helpers.js
    │
    ├── package.json
    ├── package-lock.json
    └── .env.example
```

## 🧩 Arquitectura Modular

### Backend - Estructura de Módulos

Cada módulo en `/backend/apps/` representa una funcionalidad específica del negocio:

**Estructura estándar de cada módulo:**

```python
# models.py - Modelos de datos
from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

# views.py - Lógica de endpoints
from rest_framework import viewsets
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

# serializers.py - Serialización de datos
from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

# urls.py - Rutas del módulo
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'employees', views.EmployeeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
```

### Frontend - Organización Funcional

**Arquitectura basada en funcionalidades:**

```javascript
// hooks/useEmployees.ts - Lógica de negocio
import { useState, useEffect } from 'react';
import { employeeService } from '../services/employeeService';

export const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await employeeService.getAll();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  return { employees, loading, fetchEmployees };
};

// components/Employees.tsx - Componente de presentación
import React from 'react';
import { useEmployees } from '../hooks/useEmployees';

const Employees: React.FC = () => {
  const { employees, loading, fetchEmployees } = useEmployees();

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Lista de Empleados</h2>
      {employees.map(employee => (
        <div key={employee.id}>
          {employee.name} - {employee.email}
        </div>
      ))}
    </div>
  );
};

export default Employees;

// services/employeeService.js - Comunicación con API
import { apiClient } from '../api/apiClient';

export const employeeService = {
  getAll: () => apiClient.get('/api/employees/'),
  getById: (id) => apiClient.get(`/api/employees/${id}/`),
  create: (data) => apiClient.post('/api/employees/', data),
  update: (id, data) => apiClient.put(`/api/employees/${id}/`, data),
  delete: (id) => apiClient.delete(`/api/employees/${id}/`)
};
```

## 🔄 Flujo de Comunicación

```
Componente → Custom Hook → Service → API Client → Django View → Serializer → Model
    ↑                                                                            ↓
Interface ← State Management ← Response ← JSON ← DRF Response ← Business Logic ← Database
```

## 🚀 Configuración y Ejecución

### Backend Setup

```bash
# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac

# Instalar dependencias
cd backend
pip install -r requirements.txt

# Configurar base de datos
python manage.py makemigrations
python manage.py migrate

# Ejecutar servidor
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Variables de Entorno

**Backend (.env):**
```
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:pass@localhost/db
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENV=development
```

## 📦 Tecnologías Utilizadas

### Backend
- **Django 4.2+**: Framework web principal
- **Django REST Framework**: API REST
- **PostgreSQL**: Base de datos
- **Python 3.9+**: Lenguaje de programación

### Frontend
- **React 18+**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático (componentes .tsx)
- **JavaScript ES6+**: Para hooks y servicios
- **Axios**: Cliente HTTP para API
- **React Hooks**: Gestión de estado local

## 🎯 Principios de la Arquitectura

### Separación de Responsabilidades
- **Components**: Solo presentación y UI
- **Hooks**: Lógica de negocio y estado
- **Services**: Comunicación con API
- **Utils**: Funciones auxiliares reutilizables

### Modularidad
- Cada módulo del backend es independiente
- Frontend organizado por funcionalidad
- Componentes reutilizables en `/components`
- Estado global en `/states`

### Escalabilidad
- Fácil agregar nuevos módulos
- Código reutilizable y mantenible
- Separación clara entre frontend y backend
- API RESTful estándar

## 🧪 Testing

### Backend
```bash
# Tests por módulo
python manage.py test apps.modulo1
python manage.py test apps.modulo2

# Tests completos
python manage.py test
```

### Frontend
```bash
# Tests unitarios
npm test

# Tests específicos
npm test -- --testPathPattern=components
```

## 📝 Convenciones

### Nomenclatura
- **Backend**: snake_case (archivos y variables Python)
- **Frontend**: camelCase (variables JS) y PascalCase (componentes React)
- **URLs**: kebab-case
- **Archivos**: descriptivos y específicos

### Estructura de Commits
```
feat(modulo1): agregar nueva funcionalidad
fix(frontend): corregir error en componente
docs(readme): actualizar documentación
```

## 🔐 Seguridad

- Configuración CORS adecuada
- Validación de datos en Django serializers
- Manejo seguro de tokens de autenticación
- Variables sensibles en archivos .env

---

**Ventajas de esta arquitectura:**
- ✅ Código organizado y mantenible
- ✅ Fácil escalabilidad horizontal
- ✅ Desarrollo en equipo eficiente
- ✅ Reutilización de componentes
- ✅ Testing independiente por módulos
- ✅ Preparado para migración a microservicios