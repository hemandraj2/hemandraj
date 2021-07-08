import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeaderCommonComponent } from './Components/header-common/header-common.component';
import { AboutComponent } from './Components/about/about.component';

import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    HeaderComponent,
    HeaderCommonComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
