import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeycloakService } from '../../../core/services/keycloak.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <span>TrAIn</span>
        </div>
        <ul class="nav-menu">
          <li><a routerLink="/dashboard">Dashboard</a></li>
          <li><a routerLink="/workouts">Workouts</a></li>
          <li *ngIf="(keycloakService.authenticated$ | async)">
            <a routerLink="/profile">Profile</a>
          </li>
          <li *ngIf="keycloakService.hasRole('admin')">
            <a routerLink="/admin">Admin</a>
          </li>
        </ul>
        <div class="navbar-actions">
          <span class="user-info" *ngIf="(keycloakService.userProfile$ | async) as profile">
            {{ profile?.username }}
          </span>
          <button (click)="logout()" class="logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #333;
      padding: 1rem 2rem;
      color: white;
    }
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar-logo {
      font-size: 24px;
      font-weight: bold;
    }
    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
    }
    .nav-menu a {
      color: white;
      text-decoration: none;
    }
    .nav-menu a:hover {
      color: #4CAF50;
    }
    .navbar-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .user-info {
      font-size: 14px;
    }
    .logout-btn {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .logout-btn:hover {
      background-color: #45a049;
    }
  `]
})
export class NavbarComponent {
  constructor(public keycloakService: KeycloakService) {}

  logout(): void {
    this.keycloakService.logout();
  }
}
