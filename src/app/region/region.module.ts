import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleregionComponent } from './singleregion/singleregion.component';
import { AllregionComponent } from './allregion/allregion.component';
import {AppserviceService} from '../appservice.service';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

@NgModule({
  imports: [
    CommonModule,
    ParallaxScrollModule

    // RouterModule.forChild([
    // {path: 'singleregion' , component: SingleregionComponent, pathMatch: 'full'}
    // ])
  ],
  declarations: [SingleregionComponent, AllregionComponent],
  providers:[AppserviceService]
})
export class RegionModule { }
