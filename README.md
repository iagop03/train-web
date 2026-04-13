# TrAIn Web

Aplicación web para TrAIn (AI Gym Tracker) construida con Angular v17.

## Stack Tecnológico

- **Angular 17**
- **TypeScript**
- **RxJS**
- **Angular Material**
- **TailwindCSS**
- **Karma/Jasmine** (Testing)
- **Cypress** (E2E Testing)

## Requisitos Previos

- Node.js 18+ / npm 9+
- Angular CLI 17+

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/iagop03/train-web.git
cd train-web
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp src/environments/environment.example.ts src/environments/environment.ts
# Editar environment.ts con tus valores
```

## Desarrollo

### Servidor de desarrollo
```bash
ng serve
# o
npm start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias los archivos.

### Generar un nuevo componente
```bash
ng generate component components/mi-componente
```

## Build

### Producción
```bash
ng build --configuration production
# o
npm run build
```

Los artefactos de build se almacenarán en el directorio `dist/`.

## Testing

### Unit tests
```bash
ng test
# o
npm test
```

### E2E tests
```bash
ng e2e
# o
npm run e2e
```

### Coverage
```bash
ng test --code-coverage
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Componentes de páginas
│   ├── services/         # Servicios (API, autenticación)
│   ├── guards/           # Guards de rutas
│   ├── interceptors/     # Interceptores HTTP
│   ├── models/           # Interfaces y tipos
│   ├── directives/       # Directivas personalizadas
│   ├── pipes/            # Pipes personalizados
│   └── app.routes.ts     # Rutas de la aplicación
├── assets/               # Recursos estáticos
├── styles/               # Estilos globales
└── environments/         # Configuraciones por ambiente
```

## Convenciones

- **Componentes**: PascalCase (ej: UserProfile)
- **Servicios**: PascalCase + 'Service' (ej: UserService)
- **Archivos**: kebab-case (ej: user-profile.component.ts)
- **Módulos**: Feature modules por dominio

## Contribuir

1. Crear rama: `git checkout -b feature/TRAIN-XXX`
2. Hacer cambios: `git commit -am 'Add feature'`
3. Push: `git push origin feature/TRAIN-XXX`
4. Pull Request

## Branch Protection

Configuraciones en `main` y `develop`:
- Requerir pull request reviews (mínimo 2)
- Requerir que los checks pasen
- Descartar aprobaciones obsoletas
- Requerir actualización antes de mergear

## Documentación

- [Angular Docs](https://angular.io/docs)
- [Material Design](https://material.angular.io/)
- [TailwindCSS](https://tailwindcss.com/)

## Licencia

MIT
