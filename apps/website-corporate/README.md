## website-corporate

### Comandos principales para desarrollo

```bash
# Instalar dependencias (desde la raíz del monorepo)
pnpm install

# Ejecutar el servidor de desarrollo
pnpm run dev:corporate

# Ejecutar type-check
pnpm --filter website-corporate run type-check

# Ejecutar lint
pnpm --filter website-corporate run lint
```

### Notas

- El puerto de desarrollo es 5173
- Usa React + Vite + TypeScript
