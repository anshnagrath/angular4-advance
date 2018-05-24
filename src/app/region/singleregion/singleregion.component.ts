
import { Ng2ParallaxScrollModule } from 'ng2-parallax-scroll';
import { Router , ActivatedRoute } from '@angular/router';
import {Input,OnChanges, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleregion',
  templateUrl: './singleregion.component.html',
  styleUrls: ['./singleregion.component.css']
})
export class SingleregionComponent implements OnInit {
  @Input() clickdata: any;
  @Input() imagePar: any;

public toShow;


  constructor() {
  this.imagePar = '';
  }
  ngOnInit() {
console.log(this.imagePar)
 this.toShow = JSON.parse(this.clickdata);
//  console.log(this.toShow)

  }


}
