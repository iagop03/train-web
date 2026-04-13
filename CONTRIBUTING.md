# Contributing to TrAIn Web

## Código de Conducta

Este proyecto adhiere a un Código de Conducta que esperamos que todos los contribuyentes respeten.

## Cómo Contribuir

### Reportando Bugs

1. Usa la etiqueta "bug" en el issue
2. Describe el comportamiento observado vs esperado
3. Incluye pasos para reproducir
4. Adjunta capturas de pantalla
5. Especifica navegadores y SO

### Sugerencias de Features

1. Usa la etiqueta "enhancement"
2. Describe la feature y su caso de uso
3. Adjunta mockups/diseños si es posible
4. Considera accesibilidad (a11y)

### Pull Requests

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/TRAIN-XXX`
3. Commit con mensajes descriptivos
4. Sigue las convenciones de código
5. Ejecuta `npm run lint:fix` y `npm run prettier`
6. Añade tests para nuevas features
7. Push a tu fork
8. Abre un PR con descripción detallada

## Convenciones de Código

### TypeScript/Angular

```typescript
// Usar tipos explícitos
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }
}

// Componentes pequeños y reutilizables
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output() userSelected = new EventEmitter<User>();
}
```

### Commits

```
feat: agregar nueva feature
fix: corregir bug
docs: actualizar documentación
style: cambios de formato
refactor: refactorización
test: agregar tests
perf: mejora de performance
a11y: mejora de accesibilidad
```

### Tests

- Mínimo 80% de cobertura
- Usar Jasmine y Karma
- Nombrar: `should return users when service is called`
- Probar múltiples escenarios

### Accesibilidad (a11y)

- Usar roles ARIA apropiados
- Labels en inputs
- Contraste de colores WCAG AA
- Navegación por teclado

## Proceso de Review

1. Mínimo 2 aprobaciones
2. Todos los checks deben pasar
3. Lighthouse score > 90
4. Accesibilidad verificada
5. Tests con cobertura suficiente

## Versionado

Seguimos Semantic Versioning y Angular's versioning.