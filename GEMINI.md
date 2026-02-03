# Project Context: Portfolio Website

## Overview
This project is a personal portfolio website built with Astro and React. It showcases experience, projects, and skills.
- **URL**: https://martin76.github.io
- **Type**: Static Site / Portfolio

## Tech Stack
- **Framework**: [Astro](https://astro.build)
- **UI Library**: [React](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev), [Astro Icon](https://www.astroicon.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **State Management**: [Nano Stores](https://github.com/nanostores/nanostores)
- **Components**: Radix UI primitives (via shadcn/ui patterns)

## Key Directories
- `src/pages`: Application routes (`index.astro`, `experience.astro`, etc.).
- `src/lib`: Utilities (`utils.ts`) and static assets (`assets/`, `icons/`).
- `src/shared`: Core application logic and UI.
    - `components/ui`: Reusable UI components (buttons, cards, etc.).
    - `components/content`: Page-specific content sections.
    - `constants`: Static data configuration (projects, experience data).
    - `hooks`: Custom React hooks.
    - `layouts`: Astro layouts (e.g., `index.astro`).
    - `stores`: Global state (theme, language).

## Configuration
- **Aliases** (via `tsconfig.json`):
    - `@lib/*` -> `src/lib/*`
    - `@components/*` -> `src/shared/components/*`
    - `@layouts/*` -> `src/shared/layouts/*`
    - `@styles/*` -> `src/shared/styles/*`
    - `@hooks/*` -> `src/shared/hooks/*`
    - `@constants/*` -> `src/shared/constants/*`

## Development Commands
- **Package Manager**: This project **MUST** always use `bun` and `bunx`.
- `bun run dev`: Start local development server.
- `bun run build`: Build for production.
- `bun run preview`: Preview the production build locally.
- `bun run lint`: Run ESLint.

## Coding Conventions
- **Styling**: Utility-first with Tailwind CSS. `clsx` and `tailwind-merge` are used for class manipulation.
- **Components**: 
    - React components (`.tsx`) for interactive UI.
    - Astro components (`.astro`) for static pages and layout structure.
- **State**: Nano Stores for shared state between Astro and React islands.
- **File Naming**: Kebab-case (e.g., `nav-menu.tsx`, `experience.astro`).
