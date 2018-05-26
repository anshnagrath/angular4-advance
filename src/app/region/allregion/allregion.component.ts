import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice.service'; 
import {ActivatedRoute, Routes, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-allregion',
  templateUrl: './allregion.component.html',
  styleUrls: ['./allregion.component.css']
})
export class AllregionComponent implements OnInit {
 public keys: string[];
 public regions;
 public regionNames;
 public flags = [];
 public transfer;
 public image;
 private data;
 private id;
 public navigation;
 public singleRegion = false;

  constructor(private appService:AppserviceService,private activatedRoutes: ActivatedRoute,private router:Router) { 
    this.navigation = this.activatedRoutes.snapshot.params.filter;
  if (this.navigation) {
   this.navigatedFromFilter();
    }
    this.getData();
    this.flags.push({id:'Asia',src:'http://www.geoatlas.com/medias/maps/flags/Flags%20of%20Asia/fl9577s03s/asia_flags.jpg'});
    this.flags.push({id:'Oceania',src:'https://vignette.wikia.nocookie.net/althistory/images/8/8e/Flag_of_Oceania.jpg/revision/latest?cb=20130819230833' });
    this.flags.push({id:'Africa',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2000px-Flag_of_South_Africa.svg.png' });
    this.flags.push({id:'Polar',src:'https://banner.kisspng.com/20180325/qtw/kisspng-flag-of-greenland-flag-of-greenland-buenos-aires-v-polar-bear-5ab7c26581eab6.0329312115219922935321.jpg' });
    this.flags.push({id:'Europe',src:'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'});
     this.flags.push({id:'Americas',src:'https://i.ytimg.com/vi/pNR7efs5jP8/maxresdefault.jpg'});
    this.flags.push({id:'',src:'http://cdn.obsidianportal.com/assets/127079/Unknown.png'});
  }
  ngOnInit() {
  }
  selectedRegion(event){
  this.singleRegion =! this.singleRegion;
  this.transfer = JSON.stringify(this.regions[event]);
  this.data = this.flags.find(o => o.id == event);
  this.image = this.data.src;
  this.id = this.data.id;

}
navigatedFromFilter() {
this.singleRegion = true;

}

getData(){
  this.appService.getAllRegions().subscribe(res => {
    const groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
  this.regions = groupBy(res, 'region');
 this.regionNames = Object.keys(this.regions);


 //console.log(this.regions,'egnamee')
})
  
}
}
