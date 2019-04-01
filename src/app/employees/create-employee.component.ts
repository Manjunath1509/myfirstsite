import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employees/employee.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // gender = 'male';
  // isActive = true;
  // department = 'IT';

  previewPhoto = false;
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  bsConfig: Partial<BsDatepickerConfig>;
  employee: Employee;
  panelTitle: string;
  departments: Department[] = [
    {
      id: 1,
      name: 'Help Desk'
    },
    {
      id: 2,
      name: 'IT'
    },
    {
      id: 3,
      name: 'HR'
    }
  ];
  constructor(private _employeeServie: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
    this._route.paramMap.subscribe(paraMap => {
      const id = +paraMap.get('id');
      this.getEmployee(id);
    });
  }
  getEmployee(id) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: null,
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null
      };
      this.panelTitle = 'Create New Employee';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      this._employeeServie.getEmployee(id).subscribe(
        (employee) => this.employee = employee,
        (err) => console.log(err)
      );
    }
  }
  saveEmployee() {
    if (this.employee.id === null) {
      this._employeeServie.addEmplyee(this.employee).subscribe((data: Employee) => {
        console.log(data);
        this.createEmployeeForm.reset();
        this._router.navigate(['list']);
      }, (error: any) => console.log(error));

      // empForm.reset();

    } else {
      this._employeeServie.updateEmployee(this.employee).subscribe(() => {
        this.createEmployeeForm.reset();
        this._router.navigate(['list']);
      }, (error: any) => console.log(error));

    }
  }
  // const newEmployee: Employee = Object.assign({}, this.employee);

  previewPhotoshow() {
    this.previewPhoto = !this.previewPhoto;
  }
}
