import { DataSource } from '@angular/cdk/collections';
import { AppserviceService } from './../../appservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.component.html',
  styleUrls: ['./singlecountry.component.css']
})
export class SinglecountryComponent implements OnInit {

  public data;
  public data1;
  public data2;
 

  constructor(private router: Router, private _router: ActivatedRoute,private appService: AppserviceService) { }
  ngOnInit() {
 this.data = this._router.snapshot.queryParamMap.get('transferData')
 this.data = JSON.parse(this.data);
  console.log(this.data,'data inside single Country ==>><<><><>');  
}
filterDataCurrency(event, router) {
this.appService.getFilteredDataByCurrency(event).subscribe(res=>{
  var filter = true;
  res = JSON.stringify(res);
  this.router.navigate(['/region', filter ], { queryParams: {res}} )
  console.log(res, 'res is here');
})

}
filterDataLanguage(lang1?, lang2?) {
  this.appService.getFilteredDataByLanguages(lang1,lang2).then(res => {
   console.log(res,'dekho wo agya')
 this.data1= res.data1;
 this.data2 = res.data2;
 this.data1 = this.data1.concat(this.data2);
console.log(this.data1.length,'datat is jhere')
 var filter = true;
 var data3 ;
 data3 = JSON.stringify(this.data1);
  this.router.navigate(['/region', filter ], {queryParams:{data3}})
  })
  
  }
}
