import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ps-frontend';
  links = [];

  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    for (const route of router.config) {
      if (route.data && route.data.label) {
        this.links.push({
          path: `/${route.path}`,
          label: route.data.label
        });
      }
    }
  }
}
