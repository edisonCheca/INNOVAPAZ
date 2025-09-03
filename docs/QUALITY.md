# Documentación de Calidad de Código y Automatización en el Monorepo

## Resumen

Este proyecto implementa un sistema de calidad de código y automatización **centralizado en la raíz del monorepo**. Esto garantiza que todos los proyectos, tanto los frontends en `apps/` como el backend, sigan los mismos estándares de desarrollo, formato y colaboración.

### Herramientas principales (Configuradas en la Raíz)

- **Prettier**: Formateo automático de código en todo el monorepo.
- **ESLint**: Análisis estático de código (linting) para todos los proyectos JavaScript/TypeScript.
- **Husky**: Hooks de Git para automatizar validaciones antes de cada commit.
- **lint-staged**: Ejecuta linters y formateadores solo en archivos modificados.
- **commitlint**: Valida que los mensajes de commit sigan el estándar Conventional Commits.

## La Ventaja del Monorepo: Calidad Consistente

La principal ventaja de nuestra configuración es que **las reglas de calidad se definen una sola vez en la raíz del proyecto y se aplican a todos los sub-proyectos**.

- **Un solo ` .prettierrc`**: Garantiza que el código en `apps/website-corporate` tenga el mismo formato que en `apps/app-erp`.
- **Una sola configuración de `ESLint`**: Asegura que las mismas buenas prácticas de codificación se apliquen en todo el ecosistema de frontend.
- **Un solo `commitlint.config.js`**: Estandariza los mensajes de commit sin importar en qué parte del proyecto se esté trabajando.

Esto elimina la sobrecarga de configuración y previene la divergencia de estilos entre proyectos.

## Flujo de trabajo

1. **Al hacer commit:**
   - `lint-staged` se activa a través de un hook de `Husky`.
   - Prettier formatea automáticamente los archivos en staging de **cualquier parte del monorepo**.
   - ESLint revisa los archivos JS/TS modificados.
   - Si hay errores o cambios de formato, el commit se detiene para que el desarrollador los revise y los agregue de nuevo.
   - `commitlint` valida el mensaje de commit. Si no cumple las reglas, el commit se bloquea.
2. **Al cambiar de rama o hacer merge:**
   - Si cambian las dependencias (`package.json` en cualquier proyecto), se recomienda ejecutar `pnpm install` desde la raíz.
3. **Después de cada commit:**
   - Se muestra una notificación con el mensaje, branch y hash del commit.

## Reglas de mensajes de commit

- Formato: `tipo(scope): mensaje corto`
- **Scope**: Ahora es más importante. Debe indicar el área del proyecto afectada (ej. `app-erp`, `website`, `backend`, `docs`).
- Tipos permitidos: build, chore, ci, docs, feat, fix, merge, perf, refactor, revert, style, test, wip.
- Mensaje entre 5 y 100 caracteres, solo minúsculas.

**Ejemplos de commits en el monorepo:**

```
feat(app-erp): agregar dashboard de análisis financiero
fix(website-corporate): corregir enlace roto en la página de contacto
docs(quality): actualizar documentación para el monorepo
chore(root): actualizar dependencias de desarrollo en la raíz
```

## Comandos útiles (desde la raíz)

- `pnpm install` — Instala dependencias de **todos** los proyectos.
- `pnpm run format` — Formatea todo el código del **monorepo**.
- `pnpm run lint` — Ejecuta el linter en **todos** los proyectos aplicables.

## Configuración local para desarrolladores

Si clonas este repositorio, solo necesitas ejecutar estos comandos **una vez desde la raíz** para activar toda la configuración de calidad en tu entorno local:

```bash
# Desde la raíz del monorepo
pnpm install
pnpm run prepare
```

Esto instalará todas las dependencias de todos los proyectos y activará los hooks de Husky, que a su vez aplicarán las reglas de calidad a todo el código que modifiques.
