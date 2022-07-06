import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empService: EmployeesService) { }

  ngOnInit(): void {
    this.empService.addEmployee(
      {
        firstName: "test",
        lastName: "test",
        Phone: "76986986",
        BirthDate: new Date(),
        Image: "lkjlj",
        dept_id: 3
      }
    ).subscribe(data => {
      console.log(data)
    })
  }

}
