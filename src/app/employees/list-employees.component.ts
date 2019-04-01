import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from 'src/app/employees/resolved-employeelist.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  error: any;

  employees: Employee[] = [];
  filterdEmployees: Employee[] = [];
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value) {
    this._searchTerm = value;
    this.filterdEmployees = this.filterEmployees(value);
  }

  gender: string;
  departments = 'select';

  // displayChildData: Employee;
  // employeesToDisplay: Employee;
  // private arrayIndex = 1;
  filterEmployees(searchString: string) {
    return this.employees.filter(e => e.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    const resolveData: Employee[] = this._route.snapshot.data['employeeList'];
    if (Array.isArray(resolveData)) {
      this.employees = resolveData;
    } else {
      this.error = resolveData;

    }
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filterdEmployees = this.employees;
    }
  }

  ngOnInit() {



    // this.employeesToDisplay = this.employees[0];
  }
  // onClick(employeeId: number) {
  //   this._router.navigate(['/employees', employeeId], {
  //     queryParams: { 'searchTerm': this.searchTerm }
  //   });
  // }
  ChangeEmplyeeName() {
    this.employees[0].name = 'Jordan';
    this.filterdEmployees = this.filterEmployees(this.searchTerm);
    // const newEmployee: Employee[] = Object.assign([], this.employees);
    // newEmployee[0].name = 'Jordan';
    // this.employees = newEmployee;
  }

  deleteFilterEmployee(id: number) {
    const i = this.filterdEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filterdEmployees.splice(i, 1);
    }
  }
  // onMouseMove() {

  // }

  // handleEvent(eventData: Employee) {
  //   this.displayChildData = eventData;
  // }
  // nextEmployee(): void {
  //   console.log('g ' + this.arrayIndex);
  //   if (this.arrayIndex <= 2) {
  //     this.employeesToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   } else {

  //     this.employeesToDisplay = this.employees[0];

  //     this.arrayIndex = 1;
  //   }

  // }
}
