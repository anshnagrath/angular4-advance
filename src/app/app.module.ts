import { DataTableModule } from 'angular2-datatable';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {AllregionComponent} from './region/allregion/allregion.component';
import {RegionModule} from './region/region.module';
import { AppserviceService } from './appservice.service'; 
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RegionModule,
    DataTableModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path: 'region', component:AllregionComponent, pathMatch:'full'},
      {path: '', redirectTo:'region', pathMatch:'full' },
      {path: '*', component:AllregionComponent},
      {path: '**', component:AllregionComponent },
    ])
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
