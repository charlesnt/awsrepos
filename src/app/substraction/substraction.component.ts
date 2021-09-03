import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent implements OnInit {
  sub:number=0;

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.sub=this.dataservice.displaySubstraction(7,5);
  }

}
