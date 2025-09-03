# PNPM - Gestor de Paquetes para el Monorepo INNOVAPAZ

## ¿Por qué PNPM en un Monorepo?

En el proyecto INNOVAPAZ, **PNPM** es nuestro gestor de paquetes exclusivo. Su soporte nativo para **workspaces** es fundamental para nuestra arquitectura monorepo, permitiéndonos gestionar múltiples proyectos frontend desde una única raíz de manera eficiente.

### Ventajas Clave en el Monorepo

| Característica               | NPM (con workspaces)      | PNPM                             |
| ---------------------------- | ------------------------- | -------------------------------- |
| **Espacio en disco**         | Duplica dependencias      | Almacén global único y enlazado  |
| **Velocidad de instalación** | Lenta                     | Hasta 2-3x más rápida            |
| **Gestión de dependencias**  | Hoisting impredecible     | Estructura de enlaces simbólicos |
| **Consistencia**             | Requiere `lerna` a menudo | Soporte nativo y robusto         |

## Configuración del Workspace

La magia del monorepo de PNPM comienza con el archivo `pnpm-workspace.yaml` en la raíz del proyecto.

```yaml
# pnpm-workspace.yaml
packages:
  # Incluye todos los proyectos dentro de la carpeta 'apps'
  - 'apps/*'
  # Podríamos añadir más carpetas si fuera necesario
  # - 'packages/*'
```

Este archivo le dice a PNPM que cada subdirectorio dentro de `apps/` es un proyecto individual que forma parte del workspace.

## Comandos Principales en el Monorepo

**Importante**: Todos los comandos de `pnpm` deben ejecutarse desde la **raíz del monorepo**, a menos que se especifique lo contrario.

### 📦 Instalación de Dependencias

Al ejecutar `pnpm install` en la raíz, PNPM leerá el `package.json` de cada proyecto en el workspace (`apps/*`) e instalará todas las dependencias de todos los proyectos de una sola vez.

```bash
# Instala TODAS las dependencias de TODOS los proyectos del monorepo
pnpm install
# Alias: pnpm i
```

### 🚀 Ejecución de Scripts

#### Ejecutar un script en un proyecto específico

Para ejecutar un script (ej. `dev`, `build`) en un solo proyecto, usamos el flag `--filter`.

```bash
# Iniciar el servidor de desarrollo solo para app-erp
pnpm --filter app-erp dev

# Construir para producción solo el sitio de marketing
pnpm --filter website-erp-marketing build
```

#### Ejecutar scripts en paralelo

Para iniciar los servidores de desarrollo de varios proyectos a la vez, podemos definir un script en el `package.json` de la raíz usando una herramienta como `concurrently`.

```json
// package.json (en la raíz del proyecto)
{
  "scripts": {
    "dev": "concurrently \"pnpm --filter website-erp-marketing dev\" \"pnpm --filter app-erp dev\""
  }
}
```

Ahora, con un solo comando, podemos levantar múltiples entornos.

```bash
# Inicia los servidores de desarrollo definidos en el script "dev"
pnpm run dev
```

### ➕ Agregar Paquetes

Para agregar una dependencia a un proyecto específico, usamos de nuevo el flag `--filter`.

```bash
# Agregar react-query como dependencia de producción en app-erp
pnpm add react-query --filter app-erp

# Agregar una dependencia de desarrollo a website-corporate
pnpm add -D tailwindcss --filter website-corporate
```

### ❌ Remover Paquetes

De manera similar, para remover un paquete de un proyecto específico:

```bash
# Remover react-query de app-erp
pnpm remove react-query --filter app-erp
```

### 🔄 Actualizar Paquetes

```bash
# Actualizar interactivamente las dependencias en todos los proyectos
pnpm update -r --interactive

# Actualizar un paquete específico en un proyecto
pnpm --filter app-erp update react-router-dom
```

## Scripts del Proyecto INNOVAPAZ

Los scripts definidos en el `package.json` de la raíz son para operaciones a nivel de monorepo.

```json
// package.json (raíz)
{
  "scripts": {
    "dev": "pnpm --filter app-erp dev",
    "build": "pnpm -r build", // -r ejecuta el script 'build' en todos los proyectos
    "lint": "pnpm -r lint",
    "format": "prettier --write .",
    "clean": "pnpm -r run clean && rm -rf node_modules"
  }
}
```

## Gestión de Lockfile (`pnpm-lock.yaml`)

En un monorepo, solo existe **un único archivo `pnpm-lock.yaml` en la raíz**. Este archivo gestiona las versiones exactas de las dependencias para **todos los proyectos** del workspace, garantizando consistencia y evitando conflictos.

```bash
# ✅ PNPM usa un único pnpm-lock.yaml en la raíz
innovapaz-monorepo/
├── pnpm-lock.yaml          # ← Archivo único de bloqueo
├── apps/
│   ├── app-erp/
│   └── ...
└── backend/
```

### Comandos de Lockfile

```bash
# Instalar exactamente lo que está en el lockfile (ideal para CI/CD)
pnpm install --frozen-lockfile
```

## Mejores Prácticas para INNOVAPAZ

1.  **Comandos desde la Raíz**: Ejecuta siempre los comandos `pnpm` desde la raíz del monorepo para asegurar que el workspace se gestione correctamente.
2.  **Uso de `--filter`**: Sé explícito al añadir, eliminar o ejecutar scripts para proyectos individuales.
3.  **Dependencias Compartidas**: Si en el futuro creamos paquetes compartidos (ej. `packages/ui-kit`), PNPM los enlazará automáticamente, evitando duplicación.
4.  **CI/CD**: En los pipelines de integración continua, usa siempre `pnpm install --frozen-lockfile` para garantizar builds reproducibles.

## Conclusión

PNPM y su sistema de workspaces son el corazón de nuestra estrategia de monorepo. Permiten:

- ⚡ **Instalaciones ultrarrápidas**
- 💾 **Uso de disco mínimo**
- 🏗️ **Gestión centralizada de múltiples proyectos**
- 🔒 **Consistencia garantizada a través de un único lockfile**

**Recuerda**: `pnpm` es el único gestor de paquetes autorizado. El uso de `npm` o `yarn` está prohibido en el proyecto.
