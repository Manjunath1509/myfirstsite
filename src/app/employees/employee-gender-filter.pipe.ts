import { PipeTransform } from "@angular/core";
import { Employee } from "src/app/models/employee.model";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'employeeGenderFilter'
})
export class EmployeeGenderFilter implements PipeTransform {
  transform(employees: Employee[], gender: string): Employee[] {
    if (!employees || !gender) {
      return employees;
    }

    return employees.filter(e => e.gender.toLowerCase() === gender.toLowerCase());
  }
}
