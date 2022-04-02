import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CatalogPageModule } from '../catalog-page/catalog-page.module';



@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    CatalogPageModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class ProfilePageModule { }
