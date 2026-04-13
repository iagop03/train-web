# Guía de Contribución - TrAIn Web

## Código de Conducta

Este proyecto se adhiere al [Código de Conducta Contributor Covenant](CODE_OF_CONDUCT.md).

## ¿Cómo contribuir?

### Reportar bugs

1. Verifica si el bug ya ha sido reportado en [Issues](https://github.com/iagop03/train-web/issues)
2. Si no existe, crea un nuevo issue con:
   - Título descriptivo
   - Descripción detallada
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Navegadores/dispositivos testeados
   - Screenshots si aplica

### Sugerir mejoras

1. Usa la etiqueta `enhancement` en los issues
2. Proporciona descripción clara del caso de uso
3. Mockups o screenshots si aplica

### Pull Requests

#### Setup

```bash
git clone https://github.com/iagop03/train-web.git
cd train-web
npm install
git checkout -b feature/TRAIN-XXX-descripcion
```

#### Desarrollo

```bash
npm start
# Navega a http://localhost:4200
```

#### Commit

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(auth): agregar login con Google
fix(workouts): corregir filtro de ejercicios
style(dashboard): mejorar responsive design
docs(readme): actualizar instrucciones de setup
```

#### Antes de hacer Push

```bash
# Lint y format
npm run lint:fix
npm run format

# Tests
npm run test:ci

# Build
npm run build
```

#### Enviar PR

1. Push a tu fork
2. Abre un PR contra `main` o `develop`
3. Usa la plantilla de PR
4. Completa todos los checkpoints
5. Espera revisión (2+ aprobaciones requeridas)

## Estándares de código

### TypeScript/Angular

- TypeScript strict mode habilitado
- ESLint + Prettier configurados
- Angular style guide
- Componentes standalone cuando sea posible
- Reactive forms preferidas sobre template-driven

### Naming

- Componentes: `kebab-case.component.ts` (PascalCase en clase)
- Servicios: `kebab-case.service.ts` (PascalCase en clase)
- Interfaces: `IPascalCase.ts`
- Directives: `pascalCase.directive.ts`
- Variables: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`

### Estructura de componentes

```
src/app/
├── components/
│   └── my-component/
│       ├── my-component.component.ts
│       ├── my-component.component.html
│       ├── my-component.component.scss
│       ├── my-component.component.spec.ts
│       └── index.ts
├── services/
├── models/
└── guards/
```

### Testing

- Mínimo 80% de cobertura
- Unit tests para servicios y pipes
- Component tests para lógica compleja
- Tests descriptivos

```typescript
describe('WorkoutService', () => {
  it('should fetch workouts from API', () => {
    // Given
    const expected = [mockWorkout];
    httpMock.expectOne('/api/workouts').flush(expected);

    // When
    service.getWorkouts().subscribe(actual => {
      // Then
      expect(actual).toEqual(expected);
    });
  });
});
```

## Proceso de revisión

1. **Automated checks**: CI pipeline debe pasar
   - Lint
   - Tests
   - Build
2. **Code review**: 2+ approvals de maintainers
3. **Approval**: Squash & merge a main/develop

## Performance

- Lazy load módulos
- OnPush change detection
- Unsubscribe en ngOnDestroy
- Minify imágenes
- Code splitting

## Accesibilidad

- WCAG 2.1 AA
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast

## Licencia

Al contribuir, aceptas que tu código será bajo licencia MIT.
