import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogContentComponent } from './catalog-content/catalog-content.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';



@NgModule({
  declarations: [
    CatalogContentComponent,
    CatalogCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogContentComponent,
    CatalogCardComponent
  ]
})
export class CatalogPageModule { }
