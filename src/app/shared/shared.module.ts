import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LogoutComponent, NoContentComponent, NavigationBarComponent],
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
    NavigationBarComponent,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule {
}
