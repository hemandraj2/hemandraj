import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreelistComponent } from './Components/treelist/treelist.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
