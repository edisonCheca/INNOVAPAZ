## app-erp

### Comandos principales para desarrollo

```bash
# Instalar dependencias (desde la raíz del monorepo)
pnpm install

# Ejecutar el servidor de desarrollo
pnpm run dev:app

# Ejecutar type-check
pnpm --filter app-erp run type-check

# Ejecutar lint
pnpm --filter app-erp run lint
```

### Notas

- El puerto de desarrollo es 5175
- Usa React + Vite + TypeScript
