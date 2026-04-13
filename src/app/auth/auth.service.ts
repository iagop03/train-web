import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
of 'rxjs';
import { environment } from '../../environments/environment';

export interface LoginResponse {
  user_id: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture?: string;
  token: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  provider?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private currentUserSubject: BehaviorSubject<LoginResponse | null>;
  public currentUser$: Observable<LoginResponse | null>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse | null>(
      this.getUserFromStorage()
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  /**
   * Obtiene el token actual del almacenamiento local
   */
  public getToken(): string | null {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return JSON.parse(user).token;
    }
    return null;
  }

  /**
   * Obtiene el usuario actual del almacenamiento local
   */
  private getUserFromStorage(): LoginResponse | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Inicia sesión con Google
   */
  loginWithGoogle(): void {
    this.http.get<{ redirectUrl: string }>(`${this.apiUrl}/login/google`)
      .subscribe({
        next: (response) => {
          window.location.href = response.redirectUrl || 
            this.buildKeycloakUrl('google');
        },
        error: (error) => {
          console.error('Error al iniciar sesión con Google', error);
        }
      });
  }

  /**
   * Inicia sesión con Apple
   */
  loginWithApple(): void {
    this.http.get<{ redirectUrl: string }>(`${this.apiUrl}/login/apple`)
      .subscribe({
        next: (response) => {
          window.location.href = response.redirectUrl || 
            this.buildKeycloakUrl('apple');
        },
        error: (error) => {
          console.error('Error al iniciar sesión con Apple', error);
        }
      });
  }

  /**
   * Construye la URL de Keycloak para redirección
   */
  private buildKeycloakUrl(idpAlias: string): string {
    const params = new URLSearchParams({
      'client_id': environment.keycloak.clientId,
      'response_type': 'code',
      'scope': 'openid profile email',
      'redirect_uri': environment.keycloak.redirectUri,
      'kc_idp_hint': idpAlias
    });
    return `${environment.keycloak.authServerUrl}/protocol/openid-connect/auth?${params.toString()}`;
  }

  /**
   * Maneja el callback de autenticación
   */
  handleAuthCallback(code: string, state: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/callback`, {
      code,
      state
    }).pipe(
      tap(response => this.setCurrentUser(response)),
      catchError(error => {
        console.error('Error en callback de autenticación', error);
        throw error;
      })
    );
  }

  /**
   * Obtiene la información del usuario actual autenticado
   */
  getCurrentUser(): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(`${this.apiUrl}/me`).pipe(
      tap(response => this.setCurrentUser(response)),
      catchError(error => {
        console.error('Error al obtener usuario actual', error);
        throw error;
      })
    );
  }

  /**
   * Establece el usuario actual en el almacenamiento local
   */
  private setCurrentUser(user: LoginResponse): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  /**
   * Cierra la sesión actual
   */
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  /**
   * Verifica si el usuario está autenticado
   */
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }
}
