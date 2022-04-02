import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContentComponent } from './login-content/login-content.component';



@NgModule({
  declarations: [
    LoginContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginContentComponent
  ]
})
export class LoginPageModule { }
