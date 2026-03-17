# STP Landing Page

Landing page para STP (Sistema de Transferencias y Pagos), una plataforma de infraestructura de pagos digitales. Construida con **Astro 6.x**, **Tailwind CSS 4.x**, y **React 19.x**.

---

## 🚀 Desarrollo Local

### Requisitos Previos

- **Node.js** >= 22.12.0
- **pnpm** (recomendado) o npm

```bash
# Verificar versión de Node
node -v

# Habilitar pnpm (si no está instalado)
corepack enable pnpm
```

### Instalación

```bash
# Instalar dependencias
pnpm install
```

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```bash
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_SITE_BASE=/
PUBLIC_GA_MEASUREMENT_ID=
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `pnpm build` | Genera el build de producción en `./dist/` |
| `pnpm preview` | Vista previa del build de producción localmente |
| `pnpm astro check` | Verificación de tipos TypeScript |
| `pnpm astro add <pkg>` | Agrega una integración de Astro |

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Generar build de producción
pnpm build

# Vista previa del build
pnpm preview
```

---

## 🌐 Deployment

Este proyecto está configurado para desplegarse en **GitHub Pages** mediante GitHub Actions.

### Configuración en GitHub

1. **Variables de Repositorio** (Settings → Variables → Actions):

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PUBLIC_SITE_URL` | URL base del sitio | `https://username.github.io` |
| `PUBLIC_SITE_BASE` | Base path (nombre del repo para project pages) | `/mi-repo` o `/` para user pages |
| `PUBLIC_GA_MEASUREMENT_ID` | ID de Google Analytics 4 | `G-XXXXXXXXXX` |

2. **Permisos** (Settings → Actions → General → Workflow permissions):
   - Asegurar que "Read and write permissions" esté habilitado

### Flujo de Deploy Automático

El deploy se ejecuta automáticamente al hacer push a la rama `main`:

```bash
# Hacer commit y push para triggerar el deploy
git add .
git commit -m "feat: nuevos cambios"
git push origin main
```

El workflow `.github/workflows/deploy.yml`:
1. Instala dependencias con pnpm
2. Ejecuta el build de Astro
3. Despliega a GitHub Pages

### Deploy Manual

Desde la pestaña **Actions** en GitHub:
1. Seleccionar el workflow "Deploy to GitHub Pages"
2. Click en "Run workflow"
3. Esperar a que complete el proceso

### Verificar el Deploy

- URL del sitio: `https://<username>.github.io/<repo-name>/`
- Estado del deploy: GitHub → Actions → Deploy to GitHub Pages

---

## 📁 Estructura del Proyecto

```
/
├── .github/workflows/
│   └── deploy.yml         # CI/CD para GitHub Pages
├── public/                # Assets estáticos (favicons, fonts)
├── src/
│   ├── assets/            # Imágenes y medios
│   ├── components/
│   │   ├── GUI/           # Componentes de UI reutilizables
│   │   ├── Hero/          # Hero section
│   │   ├── Form/          # Formulario de contacto
│   │   ├── Navbar/        # Barra de navegación
│   │   ├── Footer/        # Pie de página
│   │   └── SEO/           # Componentes SEO (OpenGraph, Schema.org)
│   ├── layouts/
│   │   └── Layout/        # Layout principal
│   ├── pages/             # Rutas y páginas Astro
│   ├── styles/
│   │   ├── global.css     # Estilos globales + Tailwind
│   │   ├── theme.css      # Design tokens y custom properties
│   │   └── fonts.css      # Import de fuentes
│   └── utils/
│       └── parallaxManager.ts  # Lógica de animaciones ScrollMagic
├── astro.config.mjs       # Configuración de Astro
├── tsconfig.json          # Configuración TypeScript
└── package.json
```

### Path Aliases

| Alias | Ruta |
|-------|------|
| `@pages/*` | `./src/pages/*` |
| `@assets/*` | `./src/assets/*` |
| `@components/*` | `./src/components/*` |
| `@layouts/*` | `./src/layouts/*` |
| `@styles/*` | `./src/styles/*` |
| `@utils/*` | `./src/utils/*` |

---

## ⚙️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Astro | 6.x | Framework principal (SSG/SSR híbrido) |
| React | 19.x | Componentes interactivos (islands) |
| Tailwind CSS | 4.x | Estilizado utility-first |
| TypeScript | 5.x | Tipado estático |
| GSAP + ScrollMagic | 3.x / 2.x | Animaciones y efectos parallax |
| astro-icon | 1.x | Iconos desde Iconify |

---

## 🌟 ¿Por qué Astro?

Astro representa la evolución natural del desarrollo web moderno, equilibrando rendimiento, desarrollabilidad y flexibilidad arquitectónica.

### Rendimiento y Core Web Vitals

Astro genera **HTML estático por defecto**, eliminando JavaScript innecesario del bundle final. Esto se traduce en:

- **LCP (Largest Contentful Paint) optimizado**: El HTML se sirve directamente desde el CDN sin hidratación inicial
- **FID/INP (Interaction to Next Paint) mejorado**: Solo los componentes interactivos cargan JavaScript
- **CLS (Cumulative Layout Shift) controlado**: Las dimensiones de componentes son predecibles en build time
- **Tamaño de bundle reducido**: Hasta **40% menos JavaScript** comparado con SPAs tradicionales

### Arquitectura de Islas (Islands Architecture)

El modelo de islas permite **hidratación selectiva**: cada componente interactivo se carga independientemente, evitando la hidratación completa de la página. Esto significa:

- Contenido estático instantáneo
- JavaScript cargado bajo demanda
- Mejor experiencia en dispositivos de gama baja

### Flexibilidad SSG/SSR

Astro soporta ambos modos de renderizado:

| Modo | Caso de Uso | Ventaja |
|------|-------------|---------|
| **SSG (Static Site Generation)** | Landing pages, blogs, documentación | Máximo rendimiento, CDN-friendly |
| **SSR (Server-Side Rendering)** | Dashboards, contenido dinámico | Datos en tiempo real, personalización |
| **Híbrido** | Sitios con páginas mixtas | Lo mejor de ambos mundos |

### Integración Multi-Framework

Astro es **framework-agnóstico**, permitiendo usar componentes de múltiples librerías en un mismo proyecto:

| Framework | Componente | Hidratación |
|-----------|------------|-------------|
| **React** | `client:load`, `client:visible` | ✅ Completa |
| **Vue** | `client:load`, `client:visible` | ✅ Completa |
| **Svelte** | `client:load`, `client:visible` | ✅ Completa |
| **Angular** | `client:load` | ✅ Completa |
| **SolidJS** | `client:load` | ✅ Completa |
| **Preact** | `client:load` | ✅ Ligera (3kb) |
| **Lit** | `client:load` | ✅ Web Components |
| **Alpine.js** | `client:load` | ✅ Minimalista |

```astro
---
// Ejemplo: Mezclando frameworks en un mismo archivo
import ReactCounter from '../components/react/Counter.tsx';
import VueSearch from '../components/vue/Search.vue';
import SvelteNav from '../components/svelte/Nav.svelte';
---

<SvelteNav client:load />
<ReactCounter client:visible />
<VueSearch client:load />
```

### Ecosistema y Documentación

- **Documentación exhaustiva**: Guías paso a paso, ejemplos reproducibles y API reference completa
- **Comunidad activa**: +50k estrellas en GitHub, soporte en Discord oficial
- **Integraciones oficiales**: Tailwind, React, Vue, Svelte, Partytown, Image Optimization, etc.
- **TypeScript first**: Tipado completo sin configuración adicional

### Navegación y Routing

- **Páginas pseudo-estáticas**: Archivos `.astro` en `src/pages/` se convierten en rutas automáticamente
- **Rutas dinámicas**: Parámetros con `[slug].astro` para contenido generado dinámicamente
- **API Routes**: Endpoints serverless con `[...route].ts`
- **Colecciones de contenido**: Sistema type-safe para blogs, documentación, productos

### Conclusión

Astro combina lo mejor del renderizado estático tradicional con la interactividad moderna, ofreciendo:

1. **Rendimiento excepcional** en Core Web Vitals
2. **Flexibilidad arquitectónica** (SSG/SSR híbrido)
3. **Libertad tecnológica** (multi-framework)
4. **DX superior** (TypeScript, hot reload, error overlay)
5. **SEO nativo** (HTML completo, meta tags, structured data)

Para proyectos que priorizan **rendimiento**, **accesibilidad** y **mantenibilidad**, Astro es la elección técnica óptima en 2026.

---

## 📄 Licencia

MIT
