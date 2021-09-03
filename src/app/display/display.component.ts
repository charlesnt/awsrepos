import { Component, OnInit } from '@angular/core';
import  {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  add:number=0;

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {

    this.add=this.dataservice.displayValue(5,6);
    console.log("addition of two number",this.add)
  }

}
