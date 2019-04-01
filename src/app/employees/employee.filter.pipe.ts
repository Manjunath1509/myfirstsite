import { PipeTransform } from "@angular/core";
import { Employee } from "src/app/models/employee.model";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'employeeFilter',
  pure: false
})
export class EmployeeFilterPipe implements PipeTransform {
  private counter = 0;
  transform(employees: Employee[], searchTerm: string): Employee[] {
    this.counter++;
    console.log(this.counter);
    if (!employees || !searchTerm) {
      return employees;
    }

    return employees.filter(e => e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
