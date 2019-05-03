import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendersRoutingModule } from './senders-routing.module';
import { SendersListComponent } from './list/senders-list.component';

@NgModule({
  declarations: [SendersListComponent],
  imports: [
    CommonModule,
    SendersRoutingModule
  ]
})
export class SendersModule { }
