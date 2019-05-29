import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationListComponent } from './list/notification-list.component';
import { NotificationEditComponent } from './edit/notification-edit.component';

const routes: Routes = [
  {
    path: '', component: NotificationListComponent
  },
  {
    path: 'edit', component: NotificationEditComponent
  },
  {
    path: ':id', component: NotificationEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule {
}
