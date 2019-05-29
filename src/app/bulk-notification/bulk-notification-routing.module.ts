import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkNotificationListComponent } from './list/bulk-notification-list.component';
import { BulkNotificationEditComponent } from './edit/bulk-notification-edit.component';

const routes: Routes = [
  {
    path: '', component: BulkNotificationListComponent
  },
  {
    path: 'edit', component: BulkNotificationEditComponent
  },
  {
    path: ':id', component: BulkNotificationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkNotificationRoutingModule { }
