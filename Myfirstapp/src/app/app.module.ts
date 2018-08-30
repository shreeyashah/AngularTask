

import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeDetails } from './Employee/Employee.component';
@NgModule({
  declarations: [
    AppComponent,EmployeeDetails
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,EmployeeDetails]
})
export class AppModule { 

}
