import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleregionComponent } from './singleregion/singleregion.component';
import { AllregionComponent } from './allregion/allregion.component';
import {AppserviceService} from '../appservice.service';
import {DataTableModule} from 'angular2-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SinglecountryComponent } from '../singlecountry/singlecountry/singlecountry.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DataTableModule,


    RouterModule.forChild([
    {path: 'singlecountry' , component: SinglecountryComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [SingleregionComponent, AllregionComponent],
  providers: [AppserviceService]
})
export class RegionModule { }
