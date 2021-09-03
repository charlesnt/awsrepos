import { Component, OnInit } from '@angular/core';
import {EmpAddress, Employee, EmpSalaries} from '../employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emp1:Employee;
  // empadd1:EmpAddress;
  // emp1Salaries:EmpSalaries;
 


  constructor() { }

  ngOnInit() {
    this.emp1=new Employee();
    // this.empadd1=new EmpAddress();
    // this.emp1Salaries=new EmpSalaries();
    this.emp1.name='josh';
    this.emp1.id=308;
    this.emp1.address.city='fortworth';
    this.emp1.address.street='nolina';
    this.emp1.address.street='texas'
    
    const obj: EmpSalaries = {
      empId: 123,
      empName: 'josh',
      empPay: 34567
    };
    this.emp1.empSalaries.push(obj);
  

  }



  addSalary(emp:Employee){
    emp=this.emp1;

    console.log("this is emp details",  emp)
  }
}
