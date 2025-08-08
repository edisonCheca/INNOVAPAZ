# Documentación de Calidad de Código y Automatización

## Resumen

Este proyecto implementa un sistema completo de calidad de código y automatización para garantizar un desarrollo consistente y colaborativo.

### Herramientas principales

- **Prettier**: Formateo automático de código en cada commit.
- **Husky**: Hooks de Git para automatizar validaciones y tareas.
- **lint-staged**: Ejecuta Prettier solo en archivos modificados antes del commit.
- **commitlint**: Valida que los mensajes de commit sigan el estándar Conventional Commits.

## Flujo de trabajo

1. **Al hacer commit:**
   - Prettier formatea automáticamente los archivos staged.
   - Si hay cambios, el commit se cancela y debes volver a agregar los archivos ya corregidos.
   - commitlint valida el mensaje de commit (tipo, scope, longitud, etc.).
   - Si el mensaje no cumple las reglas, el commit se bloquea.
2. **Al cambiar de rama o hacer merge:**
   - Si cambian las dependencias (package.json), se ejecuta automáticamente `npm install`.
3. **Después de cada commit:**
   - Se muestra una notificación con el mensaje, branch y hash del commit.

## Reglas de mensajes de commit

- Formato: `tipo(scope): mensaje corto`
- Tipos permitidos: build, chore, ci, docs, feat, fix, merge, perf, refactor, revert, style, test, wip
- Scope obligatorio y en minúsculas
- Mensaje entre 5 y 100 caracteres, solo minúsculas

## Comandos útiles

- `npm install` — Instala dependencias
- `npm run format` — Formatea todo el código del proyecto

## Más información

Para dudas, sugerencias o problemas, crea un Issue en GitHub.

## Configuración local para desarrolladores

Si clonas este repositorio, ejecuta estos comandos para dejar todo listo y activar la configuración de calidad de código y los hooks de Husky:

```bash
npm install
npm run prepare
```

Esto instalará todas las dependencias y activará automáticamente los hooks de Husky en tu entorno local. Si se agregan nuevos hooks, puedes volver a ejecutar `npm run prepare` para actualizarlos.
