# Despliegue en Vercel - INNOVAPAZ

## Configuración de Despliegue

Este proyecto contiene dos aplicaciones web que se pueden desplegar por separado
en Vercel:

1. **website-corporate** - Sitio web corporativo de CorpsCode
2. **website-erp-marketing** - Landing page de marketing para InnovaPaz ERP

## Pasos para Desplegar

### 1. Preparar el Repositorio

- **Rama recomendada**: `main` (Vercel funciona mejor con la rama main por
  defecto)
- Asegúrate de que todos los cambios estén commiteados y pusheados

### 2. Desplegar Website Corporate (Sitio Principal)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Conecta tu repositorio GitHub `INNOVAPAZ`
3. Configura el proyecto:
   - **Root Directory**: `apps/website-corporate`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. Desplegar Website ERP Marketing

1. Crea un nuevo proyecto en Vercel
2. Conecta el mismo repositorio `INNOVAPAZ`
3. Configura el proyecto:
   - **Root Directory**: `apps/website-erp-marketing`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 4. Actualizar URLs de Conexión

Una vez desplegadas ambas aplicaciones:

1. **Website Corporate**: Obtendrás una URL como
   `https://tu-proyecto-corporate.vercel.app`
2. **Website ERP Marketing**: Obtendrás una URL como
   `https://tu-proyecto-erp.vercel.app`

3. Actualiza la URL en el archivo `TrustSection.tsx` (línea 21) con la URL real
   del website corporate

### 5. Variables de Entorno

Si el proyecto ERP Marketing usa Firebase, asegúrate de configurar las variables
de entorno en Vercel:

- Ve a Settings → Environment Variables en tu proyecto de Vercel
- Agrega las variables del archivo `.env`

## Rama Recomendada

**Usa la rama `main`** para producción. Si solo tienes `develop`, puedes:

1. Hacer merge de `develop` a `main`:

```bash
git checkout main
git merge develop
git push origin main
```

2. O configurar Vercel para usar la rama `develop` en la configuración del
   proyecto.

## Nombres de Dominio Sugeridos

- Website Corporate: `corpscode-bolivia` o `corpscode-lapaz`
- Website ERP Marketing: `innovapaz-erp` o `innovapaz-marketing`

## Notas Importantes

- Ambas aplicaciones están configuradas con Vite y React
- Los archivos `vercel.json` ya están configurados
- Las aplicaciones son completamente independientes
- El botón "Conoce más sobre nosotros" ya está configurado para conectar ambos
  sitios
