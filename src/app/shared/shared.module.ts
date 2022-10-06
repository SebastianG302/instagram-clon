import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileDescriptionComponent } from './profile-description/profile-description.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfileDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ProfileDescriptionComponent
  ]
})
export class SharedModule { }
