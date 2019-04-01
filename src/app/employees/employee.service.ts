import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';



@Injectable()
export class EmployeeService {
  constructor(private httpClient: HttpClient) {

  }
  private listEmployees: Employee[] = [{
    id: 1,
    name: 'Mark',
    gender: 'Male',
    contactPreference: 'Email',
    email: 'mark@impelsys.com',
    dateOfBirth: new Date('10/25/1988'),
    department: '1',
    isActive: true,
    photoPath: 'assets/images/mark.png'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',
    contactPreference: 'Phone',
    phoneNumber: 234578916,
    dateOfBirth: new Date('11/20/1979'),
    department: '2',
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 3,
    name: 'John',
    gender: 'Male',
    contactPreference: 'Phone',
    phoneNumber: 5467989464,
    dateOfBirth: new Date('3/25/1976'),
    department: '3',
    isActive: true,
    photoPath: 'assets/images/john.png'
  }
  ];
  baseUrl = 'http://localhost:3000/employees';
  getEmployees(): Observable<Employee[]> {
    // return of(this.listEmployees).pipe(delay(2000));
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)
      .pipe(catchError(this.handleError));

  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error: ' + errorResponse.error.message);
    } else {
      console.error('Server side error: ' + JSON.stringify(errorResponse));
    }
    return throwError('There is a problem with service. We are notified & working on it. Please try again later');
  }
  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addEmplyee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    })
      .pipe(catchError(this.handleError));

    // if (employee.id === null) {
    //   const maxid = this.listEmployees.reduce(function (e1, e2) {
    //     return e1.id > e2.id ? e1 : e2;
    //   }).id;
    //   employee.id = maxid + 1;
    //   this.listEmployees.push(employee);

    // } else {
    //   const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
    //   this.listEmployees[foundIndex] = employee;
    // }

  }
  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    })
      .pipe(catchError(this.handleError));


  }
  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

}
