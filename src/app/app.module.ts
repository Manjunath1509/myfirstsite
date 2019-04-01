import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from 'src/app/employees/employee.service';
import { DisplayEmployeesComponent } from './employees/display-employees.component';
import { EmployeeGuardService } from 'src/app/employees/employee.guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from 'src/app/employees/employee.filter.pipe';
import { EmployeeGenderFilter } from 'src/app/employees/employee-gender-filter.pipe';
import { EmployeeDepartmentFilter } from 'src/app/employees/employee-department-filter.pipe';
import { EmloyeeListResolverService } from 'src/app/employees/emloyee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from 'src/app/employees/employee-details-guard.service';
import { AccordationComponent } from './shared/accordation.component';




@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    EmployeeGenderFilter,
    EmployeeDepartmentFilter,
    PageNotFoundComponent,
    AccordationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  providers: [EmployeeService, EmployeeGuardService, EmloyeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
