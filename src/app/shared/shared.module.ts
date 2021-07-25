import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderCommonComponent } from './header-common/header-common.component';

@NgModule({
  declarations: [HeaderCommonComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderCommonComponent]
})
export class SharedModule { }
