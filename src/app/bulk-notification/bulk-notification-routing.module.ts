import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsListComponent } from '../accounts/list/accounts-list.component';
import { BulkNotificationListComponent } from './list/bulk-notification-list.component';

const routes: Routes = [
  {
    path: '', component: BulkNotificationListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkNotificationRoutingModule { }
