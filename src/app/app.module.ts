import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { ModuloComponent } from './modulo/modulo.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpAddressComponent } from './emp-address/emp-address.component';
import { EmpSalariesComponent } from './emp-salaries/emp-salaries.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MultiplyComponent,
    SubstractionComponent,
    ModuloComponent,
    EmployeeComponent,
    EmpAddressComponent,
    EmpSalariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
