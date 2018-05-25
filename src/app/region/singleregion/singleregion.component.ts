
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
  public toShow;

  constructor() {
  this.imagePar = '';
  }
  ngOnInit() {
console.log(this.imagePar)
 this.toShow = JSON.parse(this.clickdata);
 //console.log(this.toShow[0],'data here')

 }
 onClicked(event){
   console.log(event,'look')
}

  }



