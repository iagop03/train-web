# TrAIn - AI Gym Tracker Web

## Descripción
Aplicación web para TrAIn (AI Gym Tracker) desarrollada con Angular v17. Proporciona una interfaz responsiva para gestionar entrenamientos y obtener análisis de IA.

## Stack Tecnológico
- **Angular 17**
- **TypeScript**
- **Bootstrap / Tailwind CSS**
- **RxJS**
- **Angular Material**
- **GCP** (Hosting)

## Requisitos Previos
- Node.js 18+
- npm 9+ o yarn
- Angular CLI 17+

## Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/iagop03/train-web.git
cd train-web

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
ng serve
```

## Estructura del Proyecto
```
train-web/
├── src/
│   ├── app/
│   │   ├── core/
│   │   ├── shared/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── workouts/
│   │   │   ├── exercises/
│   │   │   └── analytics/
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── assets/
│   ├── environments/
│   └── main.ts
├── angular.json
├── tsconfig.json
└── package.json
```

## Testing
```bash
# Unit tests
ng test

# E2E tests
ng e2e

# Coverage
ng test --code-coverage
```

## Build
```bash
# Build para producción
ng build --configuration production

# Analizar bundle
ng build --stats-json
webpack-bundle-analyzer dist/train-web/stats.json
```

## Deployment
Ver [DEPLOYMENT.md](./docs/DEPLOYMENT.md) para instrucciones de deployment a GCP.

## Contribución
Por favor revisa [CONTRIBUTING.md](./CONTRIBUTING.md) antes de hacer cambios.

## Licencia
MIT
