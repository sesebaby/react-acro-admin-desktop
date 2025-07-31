# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (TypeScript compilation + Vite build + Electron Builder)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build
- `npm run tailwindcss` - Watch and compile Tailwind CSS styles

## Architecture Overview

This is an Electron desktop application built with React, featuring an admin dashboard interface with the following architecture:

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Desktop**: Electron 30 for cross-platform desktop app
- **Build Tool**: Vite with `vite-plugin-electron`
- **UI Library**: Arco Design (`@arco-design/web-react`) - enterprise component library
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: Zustand with persistence via localStorage
- **Routing**: React Router v6 with flat routing design
- **HTTP Client**: Axios with custom instance configuration
- **Internationalization**: i18next with react-i18next

### Project Structure
```
src/
├── views/           # Page components and UI modules
│   ├── header/      # Header components (theme toggle, language, user info, etc.)
│   ├── routerTabs/  # Router tab management
│   └── sideBar/     # Navigation sidebar
├── store/           # Zustand state management
│   ├── global.tsx   # Global app state (theme, locale, router history, sidebar)
│   └── user.tsx     # User authentication state
├── http/            # HTTP client configuration
│   ├── api/         # API endpoint definitions
│   └── instance.ts  # Axios instance with interceptors
├── router/          # React Router configuration with flat routing
└── assets/          # Static assets and compiled CSS
```

### Key Features
- **Persistent State**: All UI preferences (theme, language, sidebar state, router tabs) persist via Zustand + localStorage
- **Authentication**: Token-based auth with automatic redirect to login
- **Multi-language**: Chinese/English support with Arco Design locale integration
- **Theme System**: Dark mode toggle with customizable theme colors
- **Router Tabs**: Persistent tab system that tracks visited routes
- **Resizable Sidebar**: Collapsible sidebar with drag-to-resize functionality

### State Management
- Global state managed by Zustand stores in `src/store/`
- `useGlobalStore`: UI state (sidebar, theme, locale, router history)
- `useUserStore`: User authentication and profile data
- All state automatically persists to localStorage

### Routing Architecture
- Flat routing structure with main layout wrapper (`App.tsx`)
- Authentication routes (`/login`, `/register`) outside main layout
- Protected routes within main layout with sidebar navigation
- Router history tracked in global state for tab functionality

### Build Configuration
- Vite handles React frontend bundling
- `vite-plugin-electron` integrates Electron main/preload processes
- TypeScript compilation with strict mode enabled
- ESLint configured for React + TypeScript best practices