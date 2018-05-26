import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglecountryComponent } from './singlecountry/singlecountry.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SinglecountryComponent, FilterComponent]
})
export class SinglecountryModule { }
