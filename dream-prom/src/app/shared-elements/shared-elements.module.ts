import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavbarComponent } from './public-navbar/public-navbar.component';
import { PrivateNavbarComponent } from './private-navbar/private-navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    PublicNavbarComponent,
    PrivateNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PublicNavbarComponent,
    PrivateNavbarComponent,
    FooterComponent
  ]
})
export class SharedElementsModule { }
