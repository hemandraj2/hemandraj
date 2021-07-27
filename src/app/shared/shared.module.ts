import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDataPipe } from './custom-pipes/search-data.pipe';

@NgModule({
  declarations: [ SearchDataPipe],
  imports: [
    CommonModule
  ],
  exports:[ SearchDataPipe]
})
export class SharedModule { }
