import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService, User } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showMobileMenu = false;
  currentUser: User | null = null;
  private userSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  logout() {
    this.authService.logout();
    this.showMobileMenu = false;
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}