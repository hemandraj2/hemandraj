import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { TreelistComponent } from './Components/treelist/treelist.component';
import { ItemDataComponent } from './Components/item-data/item-data.component';


@NgModule({
  declarations: [TreelistComponent, ItemDataComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})

export class PortfolioModule {
 }
