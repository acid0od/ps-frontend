import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationListComponent } from './list/notification-list.component';
import { NotificationEditComponent } from './edit/notification-edit.component';

@NgModule({
  declarations: [NotificationListComponent, NotificationEditComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
