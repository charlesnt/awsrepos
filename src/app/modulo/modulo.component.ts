import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {
  mod:number=0;

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
this.mod=this.dataservice.displayModulo(6,2);


  }

}
