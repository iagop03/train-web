# Guía de Contribución - TrAIn Web

## Código de Conducta

Este proyecto adopta el Código de Conducta del Contribuyente. Al participar, se espera que mantengas este código. Por favor reporta comportamiento inaceptable a los mantenedores del proyecto.

## ¿Cómo Contribuir?

### Reportar Bugs

1. **Usa un título descriptivo** para el issue
2. **Describe exactamente el problema** observado
3. **Proporciona pasos específicos** para reproducir
4. **Describe el comportamiento esperado**
5. **Incluye screenshots** si es relevante
6. **Especifica el navegador** y versión (Chrome, Firefox, Safari, Edge)

### Sugerir Mejoras

1. Usa un título descriptivo
2. Proporciona una descripción clara
3. Explica por qué sería útil
4. Lista ejemplos alternos si existen

### Pull Requests

1. **Fork y crea rama** desde `develop`:
   ```bash
   git checkout -b feature/TRAIN-XXX-descripcion
   ```

2. **Formato de commits**:
   ```
   [TRAIN-XXX] Título (50 caracteres máx)
   
   Descripción detallada. Explica qué y por qué.
   
   Fixes #123
   ```

3. **Ejecuta los tests**:
   ```bash
   npm test -- --watch=false
   npm run lint
   ```

4. **Añade tests** para cambios

5. **Push y abre PR** en `develop`

## Estándares de Código

### Convenciones

- **Componentes**: `PascalCase` (ej: `UserProfile`)
- **Servicios**: `PascalCase` + `Service` (ej: `UserService`)
- **Archivos**: `kebab-case` (ej: `user-profile.component.ts`)
- **Métodos/Variables**: `camelCase`
- **Constantes**: `UPPER_SNAKE_CASE`

### Estructura de Componentes

```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userId: string;
  @Output() updated = new EventEmitter<User>();

  user: User | null = null;
  isLoading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.isLoading = true;
    this.userService.getUser(this.userId).subscribe({
      next: (user) => {
        this.user = user;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  updateUser(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe({
        next: (updated) => {
          this.user = updated;
          this.updated.emit(updated);
        }
      });
    }
  }
}
```

### Checklist

- [ ] `npm run lint` pasa sin errores
- [ ] `npm test` pasa
- [ ] `npm run build` compila sin errores
- [ ] He añadido tests unitarios
- [ ] He testeado en navegadores principales
- [ ] He revisado responsive design
- [ ] La documentación está actualizada
- [ ] No hay warnings en la consola

## Proceso de Review

1. Mínimo 2 approvals requeridos
2. Todos los checks deben pasar
3. Debe estar actualizado con `develop`
4. No debe haber cambios solicitados

## Merge a Producción

- Solo desde `main`
- 3 approvals requeridos
- Todos los checks pasados
- Merge requiere squash

## Ayuda Adicional

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Guide](https://rxjs.dev/)
- [Git Workflow](https://guides.github.com/introduction/flow/)

¡Gracias por contribuir! 🎉
