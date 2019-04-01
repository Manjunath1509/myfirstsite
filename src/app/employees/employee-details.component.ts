import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employees/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  _id: number;
  constructor(private _emplyeeService: EmployeeService, private _activateRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this._emplyeeService.getEmployee(this._id).subscribe(
        (employee) => this.employee = employee,
        (err) => console.log(err)
      );
    });

  }

  GotoNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this._route.navigate(['/employees', this._id]);
  }

}
