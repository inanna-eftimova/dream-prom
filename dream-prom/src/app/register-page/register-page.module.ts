import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContentComponent } from './register-content/register-content.component';



@NgModule({
  declarations: [
    RegisterContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterContentComponent
  ]
})
export class RegisterPageModule { }
