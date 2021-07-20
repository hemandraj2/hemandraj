import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreelistComponent } from './Components/treelist/treelist.component';
import { ItemDataComponent } from './Components/item-data/item-data.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "portfolio-home"
  },
  {
    path: "portfolio-home",
    component: TreelistComponent
  },
  {
    path: "item-data",
    component: ItemDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
