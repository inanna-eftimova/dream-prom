import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContentComponent } from './create-content/create-content.component';



@NgModule({
  declarations: [
    CreateContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateContentComponent
  ]
})
export class CreatePageModule { }
