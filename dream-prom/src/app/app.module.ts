import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogPageModule } from './catalog-page/catalog-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { SharedElementsModule } from './shared-elements/shared-elements.module';
import { CreatePageModule } from './create-page/create-page.module';
import { EditPageModule } from './edit-page/edit-page.module';
import { SearchPageModule } from './search-page/search-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    LoginPageModule,
    RegisterPageModule,
    SharedElementsModule,
    CatalogPageModule,
    ProfilePageModule,
    CreatePageModule,
    EditPageModule, 
    SearchPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
