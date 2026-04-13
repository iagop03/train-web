import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {
  loading = false;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar si hay un token en la URL (callback)
    this.checkAuthCallback();
  }

  /**
   * Verifica si hay un código de autorización en la URL
   */
  private checkAuthCallback(): void {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (code && state) {
      this.loading = true;
      this.authService.handleAuthCallback(code, state).subscribe({
        next: (response) => {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.loading = false;
          this.error = 'Error durante la autenticación. Por favor, intente nuevamente.';
          console.error('Auth callback error:', error);
        }
      });
    }
  }

  /**
   * Inicia sesión con Google
   */
  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  /**
   * Inicia sesión con Apple
   */
  loginWithApple(): void {
    this.authService.loginWithApple();
  }
}
