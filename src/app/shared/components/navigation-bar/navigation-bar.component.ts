import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
  activeOptions?: boolean;
  user?: string;
}

@Component({
  selector: 'ps-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  myWorkRoutes: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'Notifications',
      title: 'Notifications',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'Accounts',
      title: 'Accounts',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'Senders',
      title: 'Senders',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'BulkNotifications',
      title: 'BulkNotifications',
      user: 'admin',
      activeOptions: true
    }
  ];

  constructor(
    private router: Router) {
  }

  public logout() {
    this.router.navigate(['/']);
  }
}
