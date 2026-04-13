# Guía de Contribución - TrAIn Web

## Comenzar

1. Fork el repositorio
2. Clona tu fork: `git clone https://github.com/tu-usuario/train-web.git`
3. Añade el repositorio upstream: `git remote add upstream https://github.com/iagop03/train-web.git`
4. Crea una rama para tu feature: `git checkout -b feature/TRAIN-XXX-descripcion`

## Requisitos

- Node.js 18+
- npm 9+
- Angular CLI 17+

## Configuración Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
ng serve
# o
npm start

# Ejecutar tests
npm test

# Build para producción
npm run build
```

## Estándares de Código

- Sigue la guía de estilo de Angular
- Usa nombres descriptivos en inglés
- Implementa one-way data binding
- Usa TypeScript strict mode
- Escribe tests para nuevas funcionalidades
- Mantén cobertura de código > 80%

## Convenciones de Commits

```
[TRAIN-XXX] Tipo: Descripción breve

Descripción detallada si es necesario.

Tipos permitidos:
- feat: Nueva funcionalidad
- fix: Corrección de bug
- refactor: Refactorización de código
- test: Añadir o actualizar tests
- docs: Cambios en documentación
- style: Cambios de formato
- chore: Cambios en dependencias o configuración
```

## Estructura de Componentes

```
feature/
├── feature.module.ts
├── feature.component.ts
├── feature.component.html
├── feature.component.scss
├── feature.component.spec.ts
└── services/
    └── feature.service.ts
```

## Pull Request Process

1. Asegúrate de que tu rama está actualizada: `git pull upstream develop`
2. Ejecuta tests localmente: `npm test`
3. Ejecuta linting: `npm run lint`
4. Build: `npm run build`
5. Push a tu fork y crea un PR contra `develop`
6. Llena el PR template completamente
7. Incluye screenshots si hay cambios visuales
8. Espera a que los CI checks pasen
9. Solicita revisión de al menos 1 maintainer
10. Responde a comentarios de revisión
11. Merge solo después de aprobación

## Testing

Escribe tests para:
- Lógica de componentes
- Servicios y llamadas HTTP
- Pipes y directivas
- Guards
- Interceptores

```bash
# Tests unitarios
npm test

# Tests e2e
npm run e2e

# Cobertura
npm run test:coverage
```

## Accesibilidad (a11y)

- Usa atributos ARIA apropiados
- Asegura navegación por teclado
- Mantén contraste de colores WCAG AA
- Usa semantic HTML

## Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px, 1440px
- Prueba en múltiples dispositivos

## Reportar Bugs

Abre un issue con:
- Descripción clara del bug
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshot/video si aplica
- Navegador y SO

## Sugerir Mejoras

Abre un issue con:
- Descripción clara de la mejora
- Caso de uso
- Beneficios
- Posibles alternativas
