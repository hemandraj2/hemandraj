import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { TreelistComponent } from './Components/treelist/treelist.component';
import { ItemDataComponent } from './Components/item-data/item-data.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TreelistComponent, ItemDataComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ]
})

export class PortfolioModule {
 }
