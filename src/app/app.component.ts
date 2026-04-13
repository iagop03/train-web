import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from './core/services/keycloak.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <ng-container *ngIf="(keycloakService.isLoaded$ | async); else loading">
        <router-outlet></router-outlet>
      </ng-container>
      <ng-template #loading>
        <div class="loading-container">
          <p>Initializing authentication...</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .app-container {
      width: 100%;
      height: 100vh;
    }
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 18px;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(public keycloakService: KeycloakService) {}

  async ngOnInit(): Promise<void> {
    await this.keycloakService.init();
  }
}
