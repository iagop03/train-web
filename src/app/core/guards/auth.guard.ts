import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { KeycloakService } from '../services/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.keycloakService.isLoaded$.pipe(
      take(1),
      map(isLoaded => {
        if (!isLoaded) {
          return false;
        }

        if (!this.keycloakService.isAuthenticated()) {
          this.keycloakService.login();
          return false;
        }

        return true;
      })
    );
  }
}
