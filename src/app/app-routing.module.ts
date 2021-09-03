import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayComponent} from './display/display.component';
import { EmpAddressComponent } from './emp-address/emp-address.component';
import { EmpSalariesComponent } from './emp-salaries/emp-salaries.component';
import { EmployeeComponent } from './employee/employee.component';
import {ModuloComponent} from './modulo/modulo.component';
import {MultiplyComponent} from './multiply/multiply.component';

const routes: Routes = [
  {path:'', redirectTo:'employeeaddress',pathMatch:'full'},
  {path:'employeeaddress',component:EmpAddressComponent },
  {path:'employee',component:EmployeeComponent },
{path:'404',component:EmpSalariesComponent},
{path:'**',redirectTo:'404', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
