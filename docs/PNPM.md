# PNPM - Gestor de Paquetes para INNOVAPAZ

## ¿Por qué PNPM?

En el proyecto INNOVAPAZ hemos decidido usar **PNPM** como nuestro gestor de paquetes exclusivo para el frontend, reemplazando completamente a NPM.

### Ventajas de PNPM sobre NPM

| Característica               | NPM                         | PNPM                             |
| ---------------------------- | --------------------------- | -------------------------------- |
| **Espacio en disco**         | Duplica dependencias        | Almacén global compartido        |
| **Velocidad de instalación** | Lenta                       | 2x más rápida                    |
| **Gestión de dependencias**  | node_modules plano          | Estructura de enlaces simbólicos |
| **Seguridad**                | Hoisting puede exponer deps | Estricto, solo deps declaradas   |
| **Monorepos**                | Limitado                    | Soporte nativo excelente         |

```
📊 Comparación de rendimiento:
NPM:  ████████████████████████████████ 100% (baseline)
PNPM: ██████████████████ 50% (2x más rápida)
```

## Instalación y Configuración

### Verificar instalación de PNPM

```bash
pnpm --version
# Debería mostrar: pnpm v10.13.1 o superior
```

### Configuración global recomendada

```bash
# Configurar registro (si es necesario)
pnpm config set registry https://registry.npmjs.org/

# Ver configuración actual
pnpm config list

# Configurar store global (opcional)
pnpm config set store-dir ~/.pnpm-store
```

## Comandos Principales

### 📦 Instalación de Dependencias

```bash
# Instalar todas las dependencias del proyecto
pnpm install
# Alias: pnpm i

# Instalación limpia (elimina node_modules primero)
pnpm install --frozen-lockfile

# Instalar solo dependencias de producción
pnpm install --prod
```

### ➕ Agregar Paquetes

```bash
# Agregar dependencia de producción
pnpm add react-query
pnpm add @types/node

# Agregar dependencia de desarrollo
pnpm add -D @testing-library/react
pnpm add --save-dev eslint-plugin-react

# Agregar dependencia global
pnpm add -g typescript

# Agregar versión específica
pnpm add react@19.1.1
pnpm add lodash@^4.17.21
```

### ❌ Remover Paquetes

```bash
# Remover dependencia
pnpm remove react-query
pnpm rm lodash

# Remover dependencia de desarrollo
pnpm remove -D @testing-library/react

# Remover paquete global
pnpm remove -g typescript
```

### 🔄 Actualizar Paquetes

```bash
# Actualizar todos los paquetes
pnpm update

# Actualizar paquete específico
pnpm update react

# Actualizar a la última versión (ignorando rangos)
pnpm update --latest

# Ver paquetes desactualizados
pnpm outdated
```

## Scripts del Proyecto INNOVAPAZ

### 🚀 Scripts de Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm run dev
pnpm dev  # Alias corto

# Build para producción
pnpm run build

# Preview del build de producción
pnpm run preview

# Linter
pnpm run lint

# Formatear código
pnpm run format
```

### 🔧 Scripts Personalizados

Añadir en `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist node_modules",
    "reinstall": "pnpm clean && pnpm install"
  }
}
```

## Gestión de Lockfile

### pnpm-lock.yaml vs package-lock.json

```bash
# ✅ PNPM usa pnpm-lock.yaml
frontend/
├── package.json
├── pnpm-lock.yaml          # ← Este archivo
└── node_modules/

# ❌ NPM usaba package-lock.json (YA NO)
# package-lock.json         # ← ELIMINADO del proyecto
```

### Comandos de Lockfile

```bash
# Instalar exactamente lo que está en lockfile
pnpm install --frozen-lockfile

# Actualizar lockfile sin instalar
pnpm install --lockfile-only

# Verificar integridad del lockfile
pnpm audit
```

## Workspaces y Monorepos

Aunque actualmente solo tenemos frontend, si expandimos el proyecto:

```json
// pnpm-workspace.yaml (en la raíz del proyecto)
packages:
  - 'frontend'
  - 'backend'
  - 'shared/*'
  - '!**/test/**'
```

```bash
# Ejecutar comando en workspace específico
pnpm --filter frontend dev
pnpm --filter backend start

# Instalar dependencia en workspace específico
pnpm --filter frontend add react-query

# Ejecutar comando en todos los workspaces
pnpm -r run build
```

## Comandos de Información y Debugging

### 📋 Información del Proyecto

```bash
# Listar dependencias instaladas
pnpm list
pnpm ls

# Ver dependencias en formato árbol
pnpm list --depth=2

# Ver solo dependencias de producción
pnpm list --prod

# Información de un paquete específico
pnpm info react
pnpm view react-router-dom versions --json
```

### 🔍 Debugging y Resolución de Problemas

```bash
# Limpiar caché de PNPM
pnpm store prune

# Ver ubicación del store
pnpm store path

# Verificar integridad del store
pnpm store status

# Debug de resolución de dependencias
pnpm install --reporter=append-only

# Reinstalación completa
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Mejores Prácticas para INNOVAPAZ

### 1. **Uso de .npmrc**

Crear `frontend/.npmrc`:

```
# Configuraciones específicas del proyecto
auto-install-peers=true
shamefully-hoist=false
strict-peer-dependencies=false
```

### 2. **Scripts de Mantenimiento**

```bash
# Script para limpieza completa
pnpm run clean

# Script para reinstalar dependencias
pnpm run reinstall

# Script para auditoría de seguridad
pnpm audit --fix
```

### 3. **Gestión de Versiones**

```bash
# Usar versiones exactas para dependencias críticas
pnpm add react@19.1.1 --save-exact

# Permitir rangos para herramientas de desarrollo
pnpm add -D @types/react@^19.1.10
```

### 4. **CI/CD Optimizations**

```yml
# En GitHub Actions o CI
- name: Setup PNPM
  uses: pnpm/action-setup@v2
  with:
    version: 10.13.1

- name: Install dependencies
  run: pnpm install --frozen-lockfile

- name: Build project
  run: pnpm run build
```

## Migración de NPM a PNPM ✅

### Lo que ya hicimos:

1. ✅ Eliminamos `package-lock.json`
2. ✅ Eliminamos `node_modules` de NPM
3. ✅ Reinstalamos con `pnpm install`
4. ✅ Verificamos que todos los scripts funcionan

### Comandos prohibidos en el proyecto:

```bash
# ❌ NO usar estos comandos
npm install
npm run dev
npm run build

# ✅ Usar estos en su lugar
pnpm install
pnpm run dev
pnpm run build
```

## Troubleshooting Común

### Problema: "Module not found" después de migrar

```bash
# Solución: Reinstalar dependencias
rm -rf node_modules
pnpm install
```

### Problema: Conflictos de dependencias peer

```bash
# Ver dependencias peer faltantes
pnpm install --reporter=append-only

# Instalar peers automáticamente
pnpm config set auto-install-peers true
pnpm install
```

### Problema: Cache corrupido

```bash
# Limpiar todo y empezar de nuevo
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Problema: Versión incorrecta de Node.js

```bash
# Verificar versión de Node
node --version

# PNPM requiere Node.js 18.12.0 o superior
# Actualizar Node.js si es necesario
```

## Comandos de Utilidad Diaria

### Para Desarrolladores

```bash
# Inicio rápido del proyecto
pnpm dev

# Verificar código antes de commit
pnpm run lint && pnpm run type-check

# Actualizar dependencias menores
pnpm update

# Ver qué paquetes están desactualizados
pnpm outdated
```

### Para DevOps/CI

```bash
# Instalación en CI (determinística)
pnpm install --frozen-lockfile

# Build de producción
pnpm run build

# Auditoría de seguridad
pnpm audit

# Limpiar artifacts
pnpm run clean
```

## Configuración del IDE

### VS Code

Instalar extensiones recomendadas:

```json
// .vscode/extensions.json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode"
  ]
}
```

### Settings específicos para PNPM

```json
// .vscode/settings.json
{
  "npm.packageManager": "pnpm",
  "typescript.preferences.packageManager": "pnpm"
}
```

## Conclusión

PNPM es ahora el **único gestor de paquetes** autorizado para el frontend de INNOVAPAZ. Proporciona:

- ⚡ **Instalaciones más rápidas**
- 💾 **Menor uso de disco**
- 🔒 **Mayor seguridad**
- 🚀 **Mejor rendimiento**
- 🏗️ **Preparación para monorepos**

**Recuerda**: Siempre usa `pnpm` en lugar de `npm` para mantener consistencia en el proyecto.
