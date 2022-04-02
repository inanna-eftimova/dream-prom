import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogContentComponent } from '../catalog-page/catalog-content/catalog-content.component';
import { CreateContentComponent } from '../create-page/create-content/create-content.component';
import { HomeContentComponent } from '../home-page/home-content/home-content.component';
import { LoginContentComponent } from '../login-page/login-content/login-content.component';
import { PageNotFoungComponent } from '../page-not-foung/page-not-foung.component';
import { MyProfileComponent } from '../profile-page/my-profile/my-profile.component';
import { RegisterContentComponent } from '../register-page/register-content/register-content.component';
import { SearchContentComponent } from '../search-page/search-content/search-content.component';


const routes: Routes = [
  {path: 'login', component: LoginContentComponent},
  {path: 'register', component: RegisterContentComponent},
  {path: 'search', component: SearchContentComponent},
  {path: 'profile', component: MyProfileComponent},
  {path: 'catalog', component: CatalogContentComponent},
  {path: 'create', component: CreateContentComponent},
  {path: '', component: HomeContentComponent},
  {path: '**', component: PageNotFoungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
