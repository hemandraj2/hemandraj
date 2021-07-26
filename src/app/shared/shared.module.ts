import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderCommonComponent } from './header-common/header-common.component';
import { SearchDataPipe } from './custom-pipes/search-data.pipe';

@NgModule({
  declarations: [HeaderCommonComponent, SearchDataPipe],
  imports: [
    CommonModule
  ],
  exports:[HeaderCommonComponent, SearchDataPipe]
})
export class SharedModule { }
