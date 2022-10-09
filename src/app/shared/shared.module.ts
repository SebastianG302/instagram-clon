import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileDescriptionComponent } from './profile-description/profile-description.component';
import { RoutingModule } from '../routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfileDescriptionComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    NavbarComponent,
    ProfileDescriptionComponent
  ]
})
export class SharedModule { }
