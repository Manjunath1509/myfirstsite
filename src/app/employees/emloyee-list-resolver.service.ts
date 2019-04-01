import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/';
import { Employee } from 'src/app/models/employee.model';

import { Observable, of } from 'rxjs';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmloyeeListResolverService implements Resolve<Employee[]> {
  constructor(private _employeeService: EmployeeService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this._employeeService.getEmployees()
      .pipe(catchError((err) => of(err)));
    // return this._employeeService.getEmployees()
    // .pipe(
    // map((employeeList) => new ResolvedEmployeeList(employeeList)),
    // catchError((err: any) => of(new ResolvedEmployeeList(null, err)))
    // );
  }

}
