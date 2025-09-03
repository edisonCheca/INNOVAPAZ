# Arquitectura General del Proyecto - INNOVAPAZ

## 📋 Descripción General

El proyecto INNOVAPAZ está construido sobre una arquitectura **monorepo**, que centraliza todo el código fuente en un único repositorio. Esta estructura está dividida en dos directorios principales de alto nivel: `apps/` y `backend/`, permitiendo una clara separación de responsabilidades entre el frontend y el backend, pero manteniendo un desarrollo cohesivo y centralizado.

## 🏗️ Estructura de Alto Nivel

```
innovapaz-monorepo/
├── README.md
├── pnpm-workspace.yaml
├── package.json
│
├── apps/                             # Aplicaciones de cara al usuario (Frontends)
│   ├── website-corporate/            #   - Web institucional
│   ├── website-erp-marketing/        #   - Web de marketing del producto
│   └── app-erp/                      #   - Aplicación ERP principal
│
└── backend/                          # El cerebro del sistema (Backend)
    └── api-django/                   #   - API central construida con Django
```

### `apps/` - Las Aplicaciones Frontend

Esta carpeta contiene todas las aplicaciones de cara al usuario. Cada subdirectorio es un proyecto de React completamente independiente, con su propio propósito y responsabilidades.

- **`website-corporate`**: La página web institucional de la empresa.
- **`website-erp-marketing`**: La página de marketing para atraer clientes al producto ERP.
- **`app-erp`**: El software ERP en sí, la aplicación principal para clientes.

Esta separación permite desarrollar y desplegar cada frontend de forma independiente. Para una explicación detallada de la responsabilidad de cada aplicación, consulta el documento de [Lógica de Frontend](./LOGICAFRONTEND.md).

### `backend/` - La API Central

Esta carpeta contiene el cerebro de todo el sistema: una única y robusta API construida con Django y Django REST Framework.

- **`api-django`**: Es el único punto de verdad y la única fuente de datos para todas las aplicaciones frontend. Centraliza toda la lógica de negocio, la gestión de datos y la seguridad.

## 🎯 ¿Por qué esta arquitectura?

La elección de un monorepo con esta estructura se basa en varios principios clave:

- **Separación de Preocupaciones**: El frontend y el backend están completamente desacoplados. Los frontends se ocupan exclusivamente de la experiencia del usuario, mientras que el backend maneja la lógica de negocio.
- **Escalabilidad**: Es fácil añadir nuevas aplicaciones a la carpeta `apps/` (por ejemplo, una app móvil o una herramienta interna) sin afectar los proyectos existentes. La API del backend puede escalar de forma independiente.
- **Mantenibilidad**: Tener todo el código en un solo lugar facilita la gestión de dependencias, la aplicación de estándares de calidad y la refactorización a gran escala.
- **Desarrollo Colaborativo**: Los equipos pueden trabajar en diferentes aplicaciones simultáneamente, compartiendo tipos y configuraciones desde la raíz del proyecto para mantener la consistencia.

Este documento sirve como una visión general. Para obtener detalles más profundos sobre cada parte del sistema, por favor consulta la documentación específica:

- **Lógica de Frontend**: [LOGICAFRONTEND.md](./LOGICAFRONTEND.md)
- **Gestión de Paquetes**: [PNPM.md](./PNPM.md)
- **Calidad de Código**: [QUALITY.md](./QUALITY.md)
