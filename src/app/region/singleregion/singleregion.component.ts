
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Router, ActivatedRoute, Routes } from '@angular/router';
import {Input, EventEmitter , OnChanges, Component, OnInit, Output } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-singleregion',
  templateUrl: './singleregion.component.html',
  styleUrls: ['./singleregion.component.css']
})
export class SingleregionComponent implements OnInit {
  @Input() clickdata: any;
  @Input() imagePar: any;
  @Input() id: any;
  public hide = false;
  public toShow;
  public contryData;

  constructor(private router: Router) {
  this.imagePar = '';
  }
  ngOnInit() {
console.log(this.imagePar)
 this.toShow = JSON.parse(this.clickdata);
 console.log(this.toShow,'datta here')


 }
 onClicked(event?) {
   let transferData;
   console.log(event, 'event here');
   if ( event === undefined ) {
   this.hide = !this.hide; 
   document.getElementById('change').innerHTML = 'click here to see flag view'; }
   if(event){
  this.contryData = this.toShow.find( o => o.name == event)
  transferData = JSON.stringify(this.contryData);

  this.router.navigate(['/singlecountry'], {queryParams: {transferData}})
} 
}

  }



