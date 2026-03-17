# Project Context: STP Landing Page

## Project Overview

This is a **landing page** for STP (Sistema de Transferencias y Pagos), a digital payments infrastructure platform. The site showcases STP's services for connecting financial institutions with technology for instant, secure, and efficient payment processing.

**Tech Stack:**
- **Framework:** Astro 6.x (SSG/SSR hybrid)
- **Styling:** Tailwind CSS 4.x with custom theme
- **UI Components:** React 19.x (selective hydration via `client:only`)
- **Icons:** astro-icon with Iconify (Streamline Ultimate + IC sets)
- **Form Validation:** validator library
- **Animations:** in-view library
- **Package Manager:** pnpm
- **Node Version:** >=22.12.0

## Project Structure

```
/
├── public/              # Static assets (favicons, fonts)
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable UI components
│   │   ├── Footer/      # Footer component
│   │   ├── Form/        # Contact form component
│   │   ├── GUI/         # Generic UI components (Button, Card, Input, etc.)
│   │   ├── Hero/        # Hero section component
│   │   └── Navbar/      # Navigation bar component
│   ├── content/         # Content collections (empty)
│   ├── icons/           # Custom SVG icons
│   ├── layouts/         # Page layouts
│   │   └── Layout/      # Main HTML layout with navbar/footer
│   ├── pages/           # Astro pages (routes)
│   │   └── index.astro  # Home page
│   └── styles/          # Global styles
│       ├── fonts.css    # Font imports
│       ├── global.css   # Base styles + Tailwind
│       └── theme.css    # Custom design tokens
└── astro.config.mjs     # Astro configuration
```

## Building and Running

All commands run from project root:

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro add <pkg>` | Add Astro integration |
| `pnpm astro check` | Type check the project |

## Development Conventions

### Path Aliases

The following aliases are configured in `tsconfig.json` and `astro.config.mjs`:

| Alias | Maps To |
|-------|---------|
| `@pages/*` | `./src/pages/*` |
| `@assets/*` | `./src/assets/*` |
| `@components/*` | `./src/components/*` |
| `@layouts/*` | `./src/layouts/*` |
| `@styles/*` | `./src/styles/*` |

### Component Patterns

- **Astro Components (`.astro`):** Default for static/markup-heavy components
- **React Components:** Used in `@components/react/*` directory with `client:only="react"` for interactive elements (e.g., CountUp animations)
- **Component Structure:** Components use `index.astro` + `styles.css` pattern

### Styling

- **Tailwind CSS 4.x:** Uses new `@theme` directive and `@utility` for custom classes
- **Design Tokens:** Defined in `src/styles/theme.css`
  - Color palettes: primary-blue, secondary-teal, neutral-gray
  - Semantic colors: success, warning, error, info
  - Custom font: Inter (variable font)
- **Typography:** Custom text utilities (`text-h1` through `text-h6`, `text-display`)
- **Container:** Max width set to 1080px

### Environment Variables

Configured via `astro.config.mjs` env schema:

- `SITE_URL` (public, server context) - Defaults to `http://localhost:4321`

### Icon Usage

Icons from Iconify via `astro-icon`:

```astro
import { Icon } from "astro-icon/components";
<Icon name="icon-name" />
```

Available icon sets: `ic`, `streamline-ultimate`

### Key Features

- **SEO:** Canonical URLs, meta descriptions, robots directives
- **Responsive:** Mobile-first with `lg:` breakpoints
- **Accessibility:** Semantic HTML, proper ARIA where needed
- **Form Validation:** Client-side validation using `validator` library with custom messages
- **Animations:** CountUp numbers with React hydration

## Environment Setup

1. Ensure Node.js >=22.12.0 is installed
2. Install pnpm: `corepack enable pnpm` or `npm i -g pnpm`
3. Run `pnpm install` to install dependencies
4. Copy `.env.example` to `.env` if needed (currently no env vars required for local dev)
