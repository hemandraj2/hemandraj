import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { AboutComponent } from './Components/about/about.component';

import { PortfolioModule } from './portfolio/portfolio.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "portfolio",
    component: PortfolioModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
