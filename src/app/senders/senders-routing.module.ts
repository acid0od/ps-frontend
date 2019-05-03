import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendersListComponent } from './list/senders-list.component';

const routes: Routes = [
  {
    path: '', component: SendersListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendersRoutingModule {
}
