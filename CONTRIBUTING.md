# Guía de Contribución - TrAIn Web

## Código de Conducta
Sé respetuoso y constructivo con otros colaboradores.

## Proceso de Contribución

### 1. Fork y Clone
```bash
git clone https://github.com/iagop03/train-web.git
cd train-web
```

### 2. Crear rama
```bash
git checkout -b feature/TRAIN-XXX-descripcion
```

Nombrado de ramas:
- `feature/TRAIN-XXX-descripcion` - Nueva funcionalidad
- `bugfix/TRAIN-XXX-descripcion` - Corrección de bugs
- `hotfix/TRAIN-XXX-descripcion` - Correcciones urgentes
- `docs/TRAIN-XXX-descripcion` - Documentación

### 3. Commits
```bash
git commit -m "TRAIN-XXX: Descripción clara del cambio"
```

Formato: `TRAIN-XXX: descripción`

### 4. Push y Pull Request
```bash
git push origin feature/TRAIN-XXX-descripcion
```

## Estándares de Código

### TypeScript/Angular
- Usar Google TypeScript Style Guide
- Máximo 100 caracteres por línea
- Usar strict mode
- Componentes en PascalCase
- Variables y funciones en camelCase
- Usar OnPush change detection cuando sea posible

### Ejemplo:
```typescript
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts$: Observable<Workout[]>;
  
  constructor(private workoutService: WorkoutService) {}
  
  ngOnInit(): void {
    this.workouts$ = this.workoutService.getWorkouts();
  }
}
```

## Testing

### Cobertura Mínima
- 80% de cobertura en statements
- Todos los componentes testeados
- E2E tests para flujos críticos

### Estructura de Tests
```typescript
describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutListComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
  });
  
  describe('cuando el componente carga', () => {
    it('debe mostrar lista de entrenamientos', () => {
      // Given
      // When
      // Then
    });
  });
});
```

## Pull Request

### Checklist antes de enviar
- [ ] Tests pasan localmente
- [ ] Cobertura >= 80%
- [ ] Lint sin errores
- [ ] Build sin errores
- [ ] Lighthouse score >= 90
- [ ] Documentación actualizada
- [ ] CHANGELOG actualizado

### Descripción del PR
Usar la plantilla provista en `.github/pull_request_template.md`

## Branch Protection Rules

1. ✅ Require pull request reviews before merging (1 approval)
2. ✅ Require status checks to pass before merging
   - Build must pass
   - Tests must pass
   - Code coverage >= 80%
   - Lighthouse CI must pass
3. ✅ Require branches to be up to date before merging
4. ✅ Require code reviews from code owners
5. ✅ Dismiss stale pull request approvals

## Accesibilidad (a11y)
- Usar ARIA labels cuando sea necesario
- Verificar contraste de colores (WCAG AA)
- Soportar navegación por teclado
- Tests de a11y con axe-core

## Versionado
Seguimos [Semantic Versioning](https://semver.org/):
- MAJOR.MINOR.PATCH (ej: 1.2.3)
- MAJOR: cambios incompatibles
- MINOR: nueva funcionalidad compatible
- PATCH: correcciones de bugs

## Licencia
Al contribuir, aceptas que tu código será licenseado bajo MIT.
