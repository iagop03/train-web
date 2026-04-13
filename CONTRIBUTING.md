# Contribuir a TrAIn Web

## Requisitos
- Node.js 20.x
- npm 10.x
- Angular CLI v17

## Configuración del Entorno

```bash
git clone https://github.com/iagop03/train-web.git
cd train-web
npm install
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## Ramas
- `main`: Producción (protegida)
- `develop`: Desarrollo (protegida)
- `feature/*`: Nuevas features
- `bugfix/*`: Correcciones de bugs

## Workflow de Git

1. Crear rama desde `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/TRAIN-XXX-descripcion
   ```

2. Hacer commits con mensaje descriptivo:
   ```bash
   git commit -m "TRAIN-XXX: descripción del cambio"
   ```

3. Push y crear Pull Request

## Estándares de Código
- Seguir Angular Style Guide
- ESLint + Prettier
- Componentes pequeños y reutilizables
- Cobertura de tests mínima 80%
- Documentar servicios y componentes complejos

## Scripts Disponibles

```bash
# Desarrollo
ng serve

# Lint
npm run lint

# Tests
npm run test
npm run test:ci

# Build
npm run build
npm run build:prod

# SonarQube
npm run sonar
```

## Convenciones
- Componentes: `*.component.ts`
- Servicios: `*.service.ts`
- Guards: `*.guard.ts`
- Pipes: `*.pipe.ts`
- Directivas: `*.directive.ts`

## Pull Request
- Usar el template de PR
- Mínimo 1 aprobación requerida
- CI/CD debe pasar
- Tests deben pasar
