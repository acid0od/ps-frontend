import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { NoContentComponent } from './shared/components/no-content/no-content.component';

const routes: Routes = [
  {path: '', redirectTo: 'notification', pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent},
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule'
  },
  {
    path: 'notification',
    loadChildren: './notification/notification.module#NotificationModule'
  },
  {
    path: 'senders',
    loadChildren: './senders/senders.module#SendersModule'
  },
  {
    path: 'bulkNotification',
    loadChildren: './bulk-notification/bulk-notification.module#BulkNotificationModule'
  },
  {path: '**', component: NoContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
