# TrAIn Web

Aplicación web Angular v17 para TrAIn - AI Gym Tracker.

## Stack Tecnológico

- **Angular 17**
- **TypeScript 5.2+**
- **RxJS**
- **Angular Material**
- **Keycloak** (Autenticación)
- **Google Cloud Platform**

## Prerequisitos

- Node.js 18.x o superior
- npm 9.x o yarn 3.x
- Angular CLI 17.x

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/iagop03/train-web.git
cd train-web

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
```

## Development Server

```bash
# Iniciar servidor de desarrollo
ng serve

# Navegar a http://localhost:4200/
```

## Build

```bash
# Build de producción
ng build --configuration production
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

## Estructura del Proyecto

```
src/
├── app/
│   ├── features/
│   │   ├── auth/
│   │   ├── workouts/
│   │   ├── exercises/
│   │   └── dashboard/
│   ├── shared/
│   │   ├── components/
│   │   ├── services/
│   │   ├── interceptors/
│   │   ├── guards/
│   │   └── models/
│   ├── core/
│   │   └── services/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
├── styles/
├── main.ts
└── index.html
```

## Code Style

```bash
# Format con Prettier
npm run prettier

# Lint con ESLint
npm run lint

# Lint fix
npm run lint:fix
```

## Contributing

1. Crear feature branch: `git checkout -b feature/TRAIN-XXX`
2. Commit changes: `git commit -am 'feat: descripción'`
3. Push a branch: `git push origin feature/TRAIN-XXX`
4. Abrir Pull Request

## License

MIT License