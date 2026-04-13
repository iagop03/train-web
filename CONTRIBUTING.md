# Guía de Contribución - TrAIn Web

## Inicio rápido

### Requisitos
- Node.js 20+
- npm 10+
- Angular CLI 17

### Setup local

```bash
# Clonar repo
git clone https://github.com/iagop03/train-web.git
cd train-web

# Instalar dependencias
npm install

# Development server
ng serve
# Navega a http://localhost:4200/
```

## Workflow de desarrollo

1. **Crear rama**: `git checkout -b feature/TRAIN-XXX-descripcion`
2. **Hacer cambios**: Seguir Angular Style Guide
3. **Tests**: npm run test (cobertura >80%)
4. **Lint**: npm run lint
5. **Commit**: `git commit -m "TRAIN-XXX: descripción"`
6. **Push**: `git push origin feature/TRAIN-XXX-descripcion`
7. **PR**: Crear Pull Request

## Estructura de carpetas

```
src/
├── app/
│   ├── core/              # Servicios singleton
│   │   ├── auth/
│   │   ├── http/
│   │   └── guards/
│   ├── shared/            # Componentes/pipes reutilizables
│   │   ├── components/
│   │   ├── pipes/
│   │   └── directives/
│   ├── features/          # Feature modules
│   │   ├── workouts/
│   │   ├── dashboard/
│   │   └── auth/
│   └── app.component.ts
├── assets/
├── styles/
│   ├── variables.scss
│   ├── mixins.scss
│   └── global.scss
└── environments/
```

## Convenciones de código

### Naming
- Archivos: `feature.component.ts`, `feature.service.ts`
- Clases: PascalCase
- Métodos/variables: camelCase
- Constantes: UPPER_SNAKE_CASE

### Componentes

```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts: Workout[] = [];
  @Output() selectWorkout = new EventEmitter<Workout>();
  
  constructor(private workoutService: WorkoutService) {}
  
  ngOnInit(): void {
    this.loadWorkouts();
  }
  
  private loadWorkouts(): void {
    this.workoutService.getAll().subscribe(
      workouts => this.workouts = workouts
    );
  }
  
  onSelectWorkout(workout: Workout): void {
    this.selectWorkout.emit(workout);
  }
}
```

### Servicios

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = '/api/v1/workouts';
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.apiUrl);
  }
  
  getById(id: string): Observable<Workout> {
    return this.http.get<Workout>(`${this.apiUrl}/${id}`);
  }
}
```

## Testing

```bash
# Unit tests
ng test

# E2E tests
ng e2e

# Coverage report
ng test --code-coverage
open coverage/index.html
```

### Test Example

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutListComponent } from './workout-list.component';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutListComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Linting & Formatting

```bash
# Lint
npm run lint

# Format
npm run format
```

## Branch Protection Rules

**main** & **develop**:
- ✅ Require PR reviews (2 approvals)
- ✅ Require status checks (CI/CD, tests, lint)
- ✅ Require branches up to date
- ✅ Dismiss stale reviews
- ❌ Allow force pushes

## Accessibility (a11y)

- Usar semantic HTML
- ARIA labels cuando sea necesario
- Validar contraste (WCAG AA minimum)
- Testear con keyboard navigation

## Commit Messages

```
TRAIN-XXX: Brief description

Optional details:
- What changed
- Why it changed
- Any relevant context
```

## Performance

- Usar OnPush change detection
- Lazy load feature modules
- Implementar trackBy en *ngFor
- Usar RxJS operators apropiadamente (shareReplay, debounceTime)

## Debugging

```bash
# Development build with source maps
ng serve --source-map

# Chrome DevTools
# F12 -> Sources -> Breakpoints
```

## Build & Deployment

```bash
# Production build
ng build --configuration production

# Output: dist/train-web/
```

## Recursos

- [Angular Docs](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [RxJS Docs](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
