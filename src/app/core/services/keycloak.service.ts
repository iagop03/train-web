import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private keycloak: Keycloak | undefined;
  private isLoadedSubject = new BehaviorSubject<boolean>(false);
  public isLoaded$ = this.isLoadedSubject.asObservable();

  private authenticatedSubject = new BehaviorSubject<boolean>(false);
  public authenticated$ = this.authenticatedSubject.asObservable();

  private userProfileSubject = new BehaviorSubject<any>(null);
  public userProfile$ = this.userProfileSubject.asObservable();

  constructor() {}

  async init(): Promise<boolean> {
    this.keycloak = new Keycloak({
      url: 'https://keycloak.example.com',
      realm: 'train-realm',
      clientId: 'train-web-client'
    });

    try {
      const authenticated = await this.keycloak.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        checkLoginIframe: true
      });

      this.authenticatedSubject.next(authenticated);

      if (authenticated) {
        const profile = await this.keycloak.loadUserProfile();
        this.userProfileSubject.next(profile);
      }

      this.isLoadedSubject.next(true);
      return authenticated;
    } catch (error) {
      console.error('Keycloak initialization failed:', error);
      this.isLoadedSubject.next(true);
      return false;
    }
  }

  login(): void {
    this.keycloak?.login();
  }

  logout(): void {
    this.keycloak?.logout({ redirectUri: window.location.origin });
  }

  getToken(): string | undefined {
    return this.keycloak?.token;
  }

  getRefreshToken(): string | undefined {
    return this.keycloak?.refreshToken;
  }

  isAuthenticated(): boolean {
    return this.keycloak?.authenticated || false;
  }

  hasRole(role: string): boolean {
    return this.keycloak?.hasRealmRole(role) || false;
  }

  hasClientRole(clientId: string, role: string): boolean {
    return this.keycloak?.hasResourceRole(role, clientId) || false;
  }

  hasAnyRole(roles: string[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  refreshToken(): Promise<boolean> {
    return this.keycloak?.refreshToken(30) || Promise.resolve(false);
  }

  getUserProfile(): any {
    return this.userProfileSubject.value;
  }

  getUsername(): string {
    return this.keycloak?.tokenParsed?.['preferred_username'] || '';
  }

  getEmail(): string {
    return this.keycloak?.tokenParsed?.['email'] || '';
  }

  getTokenExpirationTime(): number {
    return this.keycloak?.tokenParsed?.['exp'] || 0;
  }
}
