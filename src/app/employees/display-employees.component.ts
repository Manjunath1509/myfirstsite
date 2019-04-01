import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employees/employee.service';



@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {
  employeeN: Employee;
  confirmDelete: false;
  expanded: false;
  _id: number;
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  // private _employee: Employee;

  // @Input()
  // set employee(val) {
  //   console.log('Current name: ' + val.name);
  //   console.log('Previous name ' + (this._employee ? this._employee.name : 'Null'));
  //   this._employee = val;

  // }

  // get employee() {

  //   return this._employee;

  // }
  constructor(private _activateRoute: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');

    });



  }
  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], { queryParams: { 'searchTerm': this.searchTerm } });
  }
  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }
  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(() => {
      console.log(`Employee with Id = ${this.employee.id} deleted`);
      this.notify.emit(this.employee.id);
    });

  }
  // getEmployeeDetail() {
  //   return this.employee.name + ' ' + this.employee.gender;
  // }
  // handleClick() {
  //   this.notify.emit(this.employee);
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   const previousEmployee = changes.employee.previousValue;
  //   const currentEmployee = changes.employee.currentValue;

  //   console.log('previousEmployee: ' + (previousEmployee ? previousEmployee.name : "Null"));
  //   console.log('Current: ' + currentEmployee.name);
  // }

}
