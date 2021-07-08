import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { TreelistComponent } from './Components/treelist/treelist.component';


@NgModule({
  declarations: [TreelistComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})

export class PortfolioModule {
 }
