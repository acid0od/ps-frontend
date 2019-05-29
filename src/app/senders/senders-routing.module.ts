import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendersListComponent } from './list/senders-list.component';
import { SendersEditComponent } from './edit/senders-edit.component';

const routes: Routes = [
  {
    path: '', component: SendersListComponent
  },
  {
    path: 'edit', component: SendersEditComponent
  },
  {
    path: ':id', component: SendersEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendersRoutingModule {
}
