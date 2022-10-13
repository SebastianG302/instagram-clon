import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileDescriptionComponent } from './profile-description/profile-description.component';
import { RoutingModule } from '../routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfileDescriptionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    NavbarComponent,
    ProfileDescriptionComponent,
    FooterComponent
  ]
})
export class SharedModule { }
