import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from 'src/app/employees/list-employees.component';
import { CreateEmployeeComponent } from 'src/app/employees/create-employee.component';
import { EmployeeGuardService } from 'src/app/employees/employee.guard.service';
import { EmployeeDetailsComponent } from 'src/app/employees/employee-details.component';
import { EmloyeeListResolverService } from 'src/app/employees/emloyee-list-resolver.service';
import { PageNotFoundComponent } from 'src/app/page-not-found.component';
import { EmployeeDetailsGuardService } from 'src/app/employees/employee-details-guard.service';

const routes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmloyeeListResolverService }
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [EmployeeGuardService]
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]

  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'notfound',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
