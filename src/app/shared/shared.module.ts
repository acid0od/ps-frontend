import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LogoutComponent, NoContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    NoContentComponent,
    LogoutComponent,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule {
}
