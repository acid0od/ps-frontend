import { Component } from '@angular/core';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
  activeOptions?: boolean;
  user?: string;
}

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  APPLICATION_TITLE = 'Postal Portal';

  notifications: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'notification/edit',
      title: 'New Notification',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'notification/list',
      title: 'All Notifications',
      user: 'dev',
      activeOptions: true
    }
  ];

  senders: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'senders/edit',
      title: 'New Sender',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'senders/list',
      title: 'All Senders',
      user: 'dev',
      activeOptions: true
    }
  ];

  bulkNotifications: ROUTE[] = [
    {
      icon: 'insert_comment',
      route: 'bulkNotification/edit',
      title: 'New BulkNotification',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'bulkNotification/list',
      title: 'All BulkNotifications',
      user: 'dev',
      activeOptions: true
    }
  ];

  isAuthenticated() {
    return true;
  }
}
