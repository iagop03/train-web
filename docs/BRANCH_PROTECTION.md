# Configuración de Branch Protection - TrAIn Web

## Descripción
Este documento describe las reglas de protección de ramas configuradas en el repositorio.

## Ramas Protegidas

### main
- Rama de producción
- Requiere revisión de PR (1 approval mínimo)
- Requiere que todos los checks pasen
- Requiere que la rama esté actualizada

### develop
- Rama de desarrollo
- Requiere revisión de PR (1 approval)
- Requiere que todos los checks pasen
- Requiere que la rama esté actualizada

## Checks Requeridos

### 1. Build
```
Web CI/CD → build-and-test
```
Verifica que el proyecto compila correctamente con Angular CLI.

### 2. Lint
```
Web CI/CD → build-and-test (lint job)
```
Verifica que el código cumple con los estándares de linting.

### 3. Tests
```
Web CI/CD → build-and-test (test job)
```
Ejecuta todos los tests unitarios.
Cobertura mínima requerida: 80%

### 4. E2E Tests
```
Web CI/CD → build-and-test (e2e job)
```
Ejecuta tests end-to-end con Cypress/Protractor.

### 5. Lighthouse CI
```
Web CI/CD → build-and-test (Lighthouse CI)
```
Verifica performance, SEO, accesibilidad.
Score mínimo: 90 en producción.

### 6. Security
```
Web CI/CD → security
```
Escanea vulnerabilidades de dependencias con Snyk.

## Cómo Hacer Merge

### Flujo estándar:
1. Crear rama desde `develop`
2. Hacer commit con mensaje format `TRAIN-XXX: descripción`
3. Hacer push y crear PR
4. Esperar a que todos los checks pasen
5. Solicitar review (mínimo 1 approval)
6. Hacer merge a `develop`
7. Una vez testeado en develop, hacer PR a `main`
8. Hacer merge a `main`

## Bypass de Branch Protection

Solo administradores del repositorio pueden hacer bypass.
Esto debe ser excepcional y documentado.

## Review Process

### Qué revisar:
1. ✅ Código sigue guía de estilo
2. ✅ Componentes usan OnPush change detection
3. ✅ Tests están presentes y pasan
4. ✅ No hay degradación de cobertura
5. ✅ Lighthouse score >= 90
6. ✅ Accesibilidad verificada (a11y)
7. ✅ Documentación está actualizada
8. ✅ No hay conflictos de merge

### Feedback:
- Comment: Comentario que no bloquea merge
- Request Changes: Requiere modificaciones
- Approve: Aprueba el PR

## Monitoreo

### Dashboard:
Ver estado de checks en: `https://github.com/iagop03/train-web/actions`

### Alertas:
- Branches con checks fallidos
- PRs sin review después de 24h
- Covertura por debajo de 80%
- Lighthouse score por debajo de 90

## FAQ

### P: ¿Puedo hacer merge sin Lighthouse score de 90?
R: No, la performance es crítica.

### P: ¿Qué pasa si Lighthouse falla en mobile?
R: Optimizar y hacer push. Lighthouse CI se ejecutará de nuevo.

### P: ¿Es obligatorio el E2E test?
R: Sí, para flujos críticos.
