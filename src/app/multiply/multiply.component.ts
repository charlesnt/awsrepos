import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {MultiplyObject} from './multiplyModel';
import {Details} from './multiplyModel'

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss']
})
export class MultiplyComponent implements OnInit {

  mult:number=0;
  sampObj: any;
  sampObj1 : any = {};
  sampObj2: any;
  sampArray: MultiplyObject[] = [];
  sampleObj3 : MultiplyObject;
  charlesobj:any;
  charlesnt:any={};
  newDetail: Details;

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.mult=this.dataservice.displayMultiply(4,5);
    this.sampObj2 = new Object();
    this.sampleObj3 = new MultiplyObject();
    this.charlesobj= new Object();
    this.newDetail = new Details();

    this.sampObj1  ={
      a: 1,
      b:2,
      c:3
    }

    this.sampObj1.d = 4;
    this.sampObj2 = Object.assign({},this.sampObj1);
    this.sampObj1.e = 7;


    this.sampleObj3 = {
      name: '1',
      age:2,
      above18: true,
    }

    this.sampleObj3.above18 = false;
    console.log(this.sampObj1, 'obejct with eny {}')
    console.log(this.sampObj2, 'object with reference');
    console.log(this.sampleObj3, 'sampleObj3');
    console.log(this.charlesobj, 'charles not initiated'),
    console.log(this.charlesnt, 'charles initiated {}')
    // this.sampArray = [1,2,3,4];
    // this.sampArray.push('a');
    this.sampArray.push(this.sampleObj3);
    this.sampArray.push(this.sampleObj3);
    this.sampArray.push(this.sampleObj3);
    console.log(this.sampArray, 'sampArray');
    this.newDetail.skills =['1','2','3'];

  }

}
