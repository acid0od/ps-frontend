import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkNotificationRoutingModule } from './bulk-notification-routing.module';
import { BulkNotificationListComponent } from './list/bulk-notification-list.component';
import { BulkNotificationEditComponent } from './edit/bulk-notification-edit.component';

@NgModule({
  declarations: [BulkNotificationListComponent, BulkNotificationEditComponent],
  imports: [
    CommonModule,
    BulkNotificationRoutingModule
  ]
})
export class BulkNotificationModule { }
