# TrAIn Web

Aplicación web para TrAIn (AI gym tracker) - Rastreador de ejercicios con IA.

## Tech Stack

- **Angular 17**
- **TypeScript 5.x**
- **RxJS**
- **Material Design**
- **Node.js 20+**

## Requisitos previos

- Node.js 20+
- npm 10+
- Angular CLI 17+

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/iagop03/train-web.git
cd train-web

# Instalar dependencias
npm install

# Instalar Angular CLI
npm install -g @angular/cli@17
```

## Scripts disponibles

```bash
# Desarrollo
npm start                   # Ejecutar en desarrollo (ng serve)
npm run dev                 # Ejecutar con HMR

# Build
npm run build              # Build para producción
npm run build:prod         # Build optimizado

# Tests
npm test                   # Ejecutar tests (watch mode)
npm run test:ci            # Ejecutar tests (CI mode)
npm run e2e                # Ejecutar tests E2E

# Linting
npm run lint               # Ejecutar ESLint
npm run lint:fix           # Arreglar problemas automáticamente
npm run format             # Ejecutar Prettier

# Docker
npm run docker:build       # Buildear imagen Docker
npm run docker:run         # Ejecutar en Docker
```

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── pages/
│   ├── guards/
│   ├── interceptors/
│   └── app-routing.module.ts
├── assets/
├── styles/
├── environments/
└── main.ts
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# Navegar a http://localhost:4200/
# La aplicación se recargará automáticamente si cambias los archivos
```

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md)

## Licencia

MIT
