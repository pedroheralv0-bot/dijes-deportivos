# CLAUDE.md — Dijes Deportivos

## Descripción del Proyecto

Sitio web para "Dijes Deportivos", construido con **Next.js 16 + React + TypeScript + Tailwind CSS v4 + shadcn/ui**, desplegado via GitHub Pages.

- **URL del sitio**: https://pedroheralv0-bot.github.io/dijes-deportivos/
- **Repositorio**: `pedroheralv0-bot/dijes-deportivos`
- **Deploy**: Push a `main` → GitHub Actions (build + deploy)

## Stack Técnico

- **Framework**: Next.js 16 (App Router, static export)
- **UI**: shadcn/ui + Aceternity UI (ContainerScroll, FeaturesSectionWithHoverEffects)
- **Styling**: Tailwind CSS v4, CSS variables para dark theme
- **Animations**: framer-motion
- **Icons**: @tabler/icons-react
- **Fonts**: Inter + JetBrains Mono (next/font/google)

## Estructura del Proyecto

```
dijes-deportivos/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── page.tsx            # Index (hero + 7 secciones)
│   │   ├── globals.css         # Theme + CSS variables
│   │   ├── producto/page.tsx   # Catálogo de 8 dijes
│   │   ├── lay-out/page.tsx    # Layout de planta (2D/3D tabs)
│   │   ├── glosario/page.tsx   # Glosario con búsqueda
│   │   └── about/page.tsx      # Equipo + organigrama
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, PageHeader, SectionHeader
│   │   └── ui/                 # shadcn + Aceternity components
│   ├── data/                   # Contenido como TypeScript data files
│   │   ├── products.ts         # 8 dijes
│   │   ├── team.ts             # 8 miembros
│   │   ├── costs.ts            # CAPEX, BOM, OPEX
│   │   ├── safety-sheets.ts    # 17 fichas de seguridad
│   │   └── glossary.ts         # 8 términos
│   └── lib/utils.ts            # cn(), getAssetPath()
├── public/
│   ├── assets/                 # Imágenes (logo, dijes, certificados, layouts)
│   └── .nojekyll
├── next.config.ts              # output: export, basePath: /dijes-deportivos
└── .github/workflows/deploy.yml
```

## Notas Técnicas

- **basePath**: `/dijes-deportivos` — usar `getAssetPath()` para imágenes
- **Static Export**: `output: 'export'` en next.config.ts
- **Ruta `/lay-out`**: Evita conflicto con `layout.tsx` reservado en Next.js
- **Client Components**: Navbar, Glosario, Lay-out, Index (ContainerScroll necesita "use client")
- **Backup**: Branch `backup/static-html` contiene el HTML original

## Comandos

```bash
npm run dev    # Dev server local
npm run build  # Build estático → out/
```

## Design System (colores)

- `gold / accent`: #d4a853
- `dark`: #0a0a0a
- `body`: #1a1a1a
- `card-dark`: #242424
- `border-dark`: #333333

## Workflow Orchestration

1. **Plan Mode Default** — Para cualquier tarea no trivial (3+ pasos), usar plan mode primero.
2. **Verification Before Done** — Verificar con `npm run build` antes de marcar como completo.
3. **Demand Elegance** — Preguntarse: "¿Hay una forma más simple de hacer esto?"
4. **Autonomous Bug Fixing** — Encontrar y corregir la causa raíz sin workarounds.
