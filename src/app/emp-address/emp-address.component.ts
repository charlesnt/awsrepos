import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-address',
  templateUrl: './emp-address.component.html',
  styleUrls: ['./emp-address.component.scss']
})
export class EmpAddressComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  customNavigate( ) {
this.router.navigate(['employee']);
  }

}
