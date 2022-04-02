import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContentComponent } from './search-content/search-content.component';
import { CatalogPageModule } from '../catalog-page/catalog-page.module';



@NgModule({
  declarations: [
    SearchContentComponent
  ],
  imports: [
    CommonModule,
    CatalogPageModule
  ],
  exports: [
    SearchContentComponent
  ]
})
export class SearchPageModule { }
