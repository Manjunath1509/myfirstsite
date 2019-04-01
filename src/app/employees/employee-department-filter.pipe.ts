import { PipeTransform } from "@angular/core";
import { Employee } from "src/app/models/employee.model";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'employeeDepartmentFilter'
})
export class EmployeeDepartmentFilter implements PipeTransform {
  transform(employees: Employee[], department: string) {
    if (!employees || !department || department === 'select') {
      return employees;
    }
    return employees.filter(e => e.department === department);
  }
}
