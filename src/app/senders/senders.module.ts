import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendersRoutingModule } from './senders-routing.module';
import { SendersListComponent } from './list/senders-list.component';
import { SendersEditComponent } from './edit/senders-edit.component';

@NgModule({
  declarations: [SendersListComponent, SendersEditComponent],
  imports: [
    CommonModule,
    SendersRoutingModule
  ]
})
export class SendersModule { }
