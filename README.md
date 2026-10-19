# cesarvargas.tech — The Code Rebellion

Portafolio, tienda de servicios y manifiesto de ingeniería construido con React, TypeScript y Vite.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

Los servicios, proyectos, experiencia, stack y borradores del blog viven en `src/data.ts`. El carrito persiste en `localStorage` y el checkout abre WhatsApp con una selección codificada. El valor COP $1 es simbólico y no existe pasarela de pagos.

El bundle de producción no genera source maps. Para un VPS se puede servir `dist/` con Nginx, Caddy o cualquier servidor estático con fallback a `index.html`.
