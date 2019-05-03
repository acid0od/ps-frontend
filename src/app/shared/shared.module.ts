import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './components/no-content/no-content.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    NoContentComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoContentComponent,
    LogoutComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
