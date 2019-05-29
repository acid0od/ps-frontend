import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LogoutComponent, NoContentComponent, NavigationBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    MaterialModule
  ],
  exports: [
    NoContentComponent,
    LogoutComponent,
    NavigationBarComponent,
    FlexModule,
    MaterialModule
  ]
})
export class SharedModule { }
